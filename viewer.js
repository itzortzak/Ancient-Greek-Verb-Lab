(async function () {
  'use strict';

  const manifest = window.SCHOOL_CORPUS || {};
  const corpusFiles = manifest.packedPartFiles || [
    'data/school_corpus_compact_01.js',
    'data/school_corpus_compact_02.js',
    'data/school_corpus_compact_03.js',
    'data/school_corpus_compact_04.js',
    'data/school_corpus_compact_05.js',
    'data/school_corpus_compact_06.js'
  ];
  const appFiles = manifest.appPartFiles || [
    'data/app_bundle_packed_01.js',
    'data/app_bundle_packed_02.js',
    'data/app_bundle_packed_03.js',
    'data/app_bundle_packed_04.js'
  ];

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Αποτυχία φόρτωσης του αρχείου ${src}.`));
      document.head.appendChild(script);
    });
  }

  async function loadParts(globalName, files) {
    window[globalName] = [];
    for (const file of files) await loadScript(file);
    const parts = window[globalName];
    if (!Array.isArray(parts) || parts.length !== files.length) {
      throw new Error(`Το πακέτο ${globalName} είναι ελλιπές: ${parts?.length || 0}/${files.length} τμήματα.`);
    }
    return parts;
  }

  async function gunzipBase64(parts, label) {
    if (typeof DecompressionStream !== 'function') {
      throw new Error('Ο φυλλομετρητής δεν υποστηρίζει αποσυμπίεση gzip. Χρησιμοποίησε ενημερωμένο Chrome, Edge, Firefox ή Safari.');
    }
    const encoded = parts.join('');
    if (!/^[A-Za-z0-9+/=]+$/.test(encoded)) {
      throw new Error(`Το πακέτο ${label} περιέχει μη έγκυρο base64.`);
    }
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  }

  async function sha256(bytes) {
    if (!globalThis.crypto?.subtle) return null;
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
  }

  async function verify(bytes, expected, label) {
    if (!expected) return;
    const actual = await sha256(bytes);
    if (actual && actual !== expected) {
      throw new Error(`Αποτυχία ελέγχου ακεραιότητας για ${label}.`);
    }
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[character]));
  }

  function showFatal(error) {
    console.error(error);
    const message = error?.message || String(error);
    const status = document.getElementById('analyzeStatus');
    if (status) status.textContent = message;
    const target = document.getElementById('analyzeResults') || document.body;
    target.innerHTML = `<div class="empty-state"><strong>Η εφαρμογή δεν μπόρεσε να ξεκινήσει.</strong><br>${escapeHtml(message)}</div>`;
  }

  try {
    const corpusParts = await loadParts('SCHOOL_CORPUS_PACKED_PARTS', corpusFiles);
    const corpusBytes = await gunzipBase64(corpusParts, 'σχολικού σώματος');
    await verify(corpusBytes, manifest.corpusSha256, 'το σχολικό σώμα');
    const corpus = JSON.parse(new TextDecoder().decode(corpusBytes));
    if (!Array.isArray(corpus) || corpus.length !== Number(manifest.tokenCount)) {
      throw new Error(`Ασυμφωνία σχολικών εγγραφών: ${Array.isArray(corpus) ? corpus.length : 'μη έγκυρη δομή'}/${manifest.tokenCount}.`);
    }
    manifest.tokens = corpus;

    const appParts = await loadParts('AGVL_APP_PACKED_PARTS', appFiles);
    const appBytes = await gunzipBase64(appParts, 'εφαρμογής');
    await verify(appBytes, manifest.appSourceSha256, 'την εφαρμογή');
    const source = new TextDecoder().decode(appBytes);
    (0, eval)(`${source}\n//# sourceURL=agvl-school-app.js`);

    delete window.AGVL_APP_PACKED_PARTS;
    delete window.SCHOOL_CORPUS_PACKED_PARTS;
  } catch (error) {
    showFatal(error);
  }
}());
