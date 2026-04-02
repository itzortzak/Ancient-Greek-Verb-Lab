(function () {
  const normalizeGreek = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ς/g, 'σ').toLowerCase().trim();
  const isDualEntry = entry => !!entry && (entry.number === 'du' || /du$/.test(entry.person || ''));

  function stripDualFromParadigmStore(store) {
    if (!store || typeof store !== 'object') return;
    for (const lemma of Object.keys(store)) {
      const arr = Array.isArray(store[lemma]) ? store[lemma] : [];
      store[lemma] = arr.filter(entry => !isDualEntry(entry));
    }
  }

  function stripDualFromFormIndex(index) {
    if (!index || typeof index !== 'object') return;
    for (const key of Object.keys(index)) {
      const bucket = index[key];
      if (!Array.isArray(bucket)) continue;
      const filtered = bucket.filter(entry => !isDualEntry(entry));
      if (filtered.length) index[key] = filtered;
      else delete index[key];
    }
  }

  stripDualFromParadigmStore(window.GENERATED_PARADIGMS);
  stripDualFromParadigmStore(window.MANUAL_PARADIGMS);
  stripDualFromFormIndex(window.FORM_INDEX);

  window.AGVL_RUNTIME_PATCH = Object.assign({}, window.AGVL_RUNTIME_PATCH, {
    dualRemoved: true,
    normalizeGreek
  });
})();
