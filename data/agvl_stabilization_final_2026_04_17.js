(function () {
  const w = window;
  const lex = w.LEXICON_AUGMENT = w.LEXICON_AUGMENT || {};
  const meta = lex.verbMeta = lex.verbMeta || {};
  const aliases = w.AGVL_SEARCH_ALIASES = w.AGVL_SEARCH_ALIASES || {};
  const manual = w.MANUAL_PARADIGMS = w.MANUAL_PARADIGMS || {};
  const generated = w.GENERATED_PARADIGMS = w.GENERATED_PARADIGMS || {};

  function mergeMeta(lemma, payload) {
    meta[lemma] = Object.assign({}, meta[lemma] || {}, payload);
  }
  function addAliases(lemma, values) {
    const current = Array.isArray(aliases[lemma]) ? aliases[lemma] : [];
    aliases[lemma] = [...new Set([...current, ...(values || []).filter(Boolean)])];
  }
  function mirrorLemma(source, target) {
    if (!manual[target] && manual[source]) manual[target] = manual[source];
    if (!generated[target] && generated[source]) generated[target] = generated[source];
  }
  function hasParadigm(lemma) {
    return Boolean((manual[lemma] && manual[lemma].length) || (generated[lemma] && generated[lemma].length));
  }

  // Canonical stabilization metadata for high-priority school verbs.
  const canonical = {
    'δίδωμι': { irregularType: 'mi-verb', schemaVersion: '2026-04-17-final', schoolPriority: 'core', nonFiniteComplete: true },
    'τίθημι': { irregularType: 'mi-verb', schemaVersion: '2026-04-17-final', schoolPriority: 'core', nonFiniteComplete: true },
    'ἵστημι': { irregularType: 'mi-verb', schemaVersion: '2026-04-17-final', schoolPriority: 'core', nonFiniteComplete: true },
    'δείκνυμι': { irregularType: 'nu-mi-verb', schemaVersion: '2026-04-17-final', schoolPriority: 'core', nonFiniteComplete: true },
    'ἵημι': { irregularType: 'mi-verb', schemaVersion: '2026-04-17-final', schoolPriority: 'core', nonFiniteComplete: true },
    'ἐπίσταμαι': { irregularType: 'deponent-irregular', schemaVersion: '2026-04-17-final', schoolPriority: 'core' },
    'οἶδα': { irregularType: 'perfect-with-present-meaning', schemaVersion: '2026-04-17-final', schoolPriority: 'core' },
    'εἶμι': { irregularType: 'motion-irregular', schemaVersion: '2026-04-17-final', schoolPriority: 'core', disambiguationHint: 'πορεύομαι, όχι εἰμί' },
    'εἰμί': { irregularType: 'copular-irregular', schemaVersion: '2026-04-17-final', schoolPriority: 'core', disambiguationHint: 'είμαι, όχι εἶμι' },
    'κεῖμαι': { irregularType: 'stative-irregular', schemaVersion: '2026-04-17-final', schoolPriority: 'core' },
    'κάθημαι': { irregularType: 'stative-irregular', schemaVersion: '2026-04-17-final', schoolPriority: 'core' },
    'δέδοικα': { irregularType: 'perfect-with-present-meaning', schemaVersion: '2026-04-17-final', schoolPriority: 'core' },
    'διαλέγομαι': { irregularType: 'deponent-irregular', schemaVersion: '2026-04-17-final', schoolPriority: 'high' },
    'δοκέω': { irregularType: 'contract-eo-irregular', schemaVersion: '2026-04-17-final', schoolPriority: 'high' },
    'ἀποθνῄσκω': { irregularType: 'irregular-second-aorist', schemaVersion: '2026-04-17-final', schoolPriority: 'high' },
    'τυγχάνω': { irregularType: 'irregular-second-aorist', schemaVersion: '2026-04-17-final', schoolPriority: 'high' },
    'πίνω': { irregularType: 'irregular-second-aorist', schemaVersion: '2026-04-17-final', schoolPriority: 'high' },
    'τρέχω': { irregularType: 'irregular-second-aorist', schemaVersion: '2026-04-17-final', schoolPriority: 'high' },
    'ὀνίνημι': { irregularType: 'mi-verb', schemaVersion: '2026-04-17-final', schoolPriority: 'high' },
    'πίμπρημι': { irregularType: 'mi-verb', schemaVersion: '2026-04-17-final', schoolPriority: 'high' },
    'πίμπλημι': { irregularType: 'mi-verb', schemaVersion: '2026-04-17-final', schoolPriority: 'high' }
  };
  Object.entries(canonical).forEach(([lemma, payload]) => mergeMeta(lemma, payload));

  // Normalize ζω / ζάω so search, browsing and paradigm lookup converge on the same school entry.
  mirrorLemma('ζῶ', 'ζάω');
  mirrorLemma('ζάω', 'ζῶ');
  mergeMeta('ζῶ', {
    displayLemma: 'ζάω',
    canonicalLemma: 'ζάω',
    coverage: hasParadigm('ζῶ') || hasParadigm('ζάω') ? 'full' : (meta['ζῶ'] && meta['ζῶ'].coverage) || 'catalog',
    irregularType: 'contract-aw-irregular',
    schemaVersion: '2026-04-17-final',
    schoolPriority: 'core',
    principalParts: 'ζάω / ζῶ, ζήσω, ἔζησα / ἐβίωσα, βέβιωκα'
  });
  mergeMeta('ζάω', {
    gloss: 'ζω',
    displayLemma: 'ζάω',
    canonicalLemma: 'ζάω',
    family: 'contract-aw-irregular',
    irregularType: 'contract-aw-irregular',
    coverage: hasParadigm('ζάω') || hasParadigm('ζῶ') ? 'full' : 'catalog',
    source: 'manual-school-paradigm + stabilization bridge',
    principalParts: 'ζάω / ζῶ, ζήσω, ἔζησα / ἐβίωσα, βέβιωκα',
    schemaVersion: '2026-04-17-final',
    schoolPriority: 'core'
  });
  addAliases('ζῶ', ['ζαω', 'ζην']);
  addAliases('ζάω', ['ζῶ', 'ζω', 'ζαω']);

  // Stronger disambiguation between εἶμι and εἰμί for search.
  addAliases('εἶμι', ['ειμι (θα πάω)', 'εἶμι (πορεύομαι)', 'βαινω']);
  addAliases('εἰμί', ['ειμι (είμαι)', 'εἰμί (είμαι)', 'υπαρχω']);

  // Extra lookup convenience for common school spellings.
  addAliases('οἶδα', ['ειδω']);
  addAliases('δέδοικα', ['δειδω']);
  addAliases('ἀποθνῄσκω', ['αποθνηισκω']);
})();
