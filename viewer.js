(function () {
  'use strict';

  const DEFAULT_CORPUS_PARTS = [
    'data/school_corpus_packed_01.js',
    'data/school_corpus_packed_02.js'
  ];
  const DEFAULT_VIEWER_PARTS = [
    'data/viewer_school_packed_01.js',
    'data/viewer_school_packed_02.js'
  ];

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Αποτυχία φόρτωσης του αρχείου ${src}.`));
      document.head.appendChild(script);
    });
  }

  async function ensurePackedParts(globalName, files) {
    const current = window[globalName];
    if (Array.isArray(current) && current.length) return current;
    for (const file of files) await loadScript(file);
    const loaded = window[globalName];
    if (!Array.isArray(loaded) || !loaded.length) {
      throw new Error(`Δεν βρέθηκε το πακέτο ${globalName}.`);
    }
    return loaded;
  }

  async function gunzipBase64(parts, label) {
    if (typeof DecompressionStream !== 'function') {
      throw new Error('Ο φυλλομετρητής δεν υποστηρίζει DecompressionStream. Χρησιμοποίησε ενημερωμένη έκδοση Chrome, Edge, Firefox ή Safari.');
    }
    let binary;
    try {
      binary = atob(parts.join(''));
    } catch (error) {
      throw new Error(`Το πακέτο ${label} δεν είναι έγκυρο base64: ${error.message}`);
    }
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    try {
      const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
      return await new Response(stream).text();
    } catch (error) {
      throw new Error(`Αποτυχία αποσυμπίεσης του πακέτου ${label}: ${error.message}`);
    }
  }

  function executeSource(source) {
    return new Promise((resolve, reject) => {
      const blobUrl = URL.createObjectURL(new Blob([source], { type: 'text/javascript;charset=utf-8' }));
      const script = document.createElement('script');
      script.src = blobUrl;
      script.onload = () => {
        URL.revokeObjectURL(blobUrl);
        resolve();
      };
      script.onerror = () => {
        URL.revokeObjectURL(blobUrl);
        reject(new Error('Το πακέτο λειτουργίας αποσυμπιέστηκε, αλλά δεν εκτελέστηκε.'));
      };
      document.body.appendChild(script);
    });
  }

  function showFatal(error) {
    console.error(error);
    const message = error?.message || String(error);
    const status = document.getElementById('analyzeStatus');
    if (status) status.textContent = message;
    const results = document.getElementById('analyzeResults');
    if (results) {
      const escaped = String(message).replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
      }[character]));
      results.innerHTML = `<div class="empty-state"><strong>Η εφαρμογή δεν μπόρεσε να ξεκινήσει.</strong><br>${escaped}</div>`;
    }
  }

  async function boot() {
    const manifest = window.SCHOOL_CORPUS || {};
    await ensurePackedParts(
      'SCHOOL_CORPUS_PACKED_PARTS',
      Array.isArray(manifest.packedPartFiles) && manifest.packedPartFiles.length
        ? manifest.packedPartFiles
        : DEFAULT_CORPUS_PARTS
    );
    const viewerParts = await ensurePackedParts(
      'AGVL_VIEWER_PACKED_PARTS',
      Array.isArray(manifest.viewerPartFiles) && manifest.viewerPartFiles.length
        ? manifest.viewerPartFiles
        : DEFAULT_VIEWER_PARTS
    );
    const source = await gunzipBase64(viewerParts, 'λειτουργίας');
    await executeSource(source);
    const buildLabel = document.getElementById('buildLabel');
    if (buildLabel && manifest.version) buildLabel.textContent = `Σχολική έκδοση ${manifest.version}`;
  }

  boot().catch(showFatal);
}());
