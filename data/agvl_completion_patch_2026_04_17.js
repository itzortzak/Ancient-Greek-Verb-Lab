(function () {
  const w = window;
  const lex = w.LEXICON_AUGMENT = w.LEXICON_AUGMENT || {};
  const meta = lex.verbMeta = lex.verbMeta || {};
  const aliases = w.AGVL_SEARCH_ALIASES = w.AGVL_SEARCH_ALIASES || {};
  const manual = w.MANUAL_PARADIGMS = w.MANUAL_PARADIGMS || {};
  const generated = w.GENERATED_PARADIGMS = w.GENERATED_PARADIGMS || {};

  function hasParadigm(lemma) {
    return (manual[lemma] && manual[lemma].length) || (generated[lemma] && generated[lemma].length);
  }

  function upsertMeta(lemma, payload) {
    const current = meta[lemma] || {};
    meta[lemma] = Object.assign({}, current, payload);
  }

  function upsertAliases(lemma, values) {
    const current = Array.isArray(aliases[lemma]) ? aliases[lemma] : [];
    aliases[lemma] = [...new Set([...current, ...values.filter(Boolean)])];
  }

  const upgrades = {
    'δίδωμι': {
      gloss: 'δίνω, παρέχω',
      coverage: hasParadigm('δίδωμι') ? 'full' : 'catalog',
      family: 'mi-verb',
      source: 'manual-school-paradigm',
      principalParts: 'δίδωμι, δώσω, ἔδωκα / ἔδωκον, δέδωκα, δέδομαι, ἐδόθην'
    },
    'τίθημι': {
      gloss: 'θέτω, τοποθετώ',
      coverage: hasParadigm('τίθημι') ? 'full' : 'catalog',
      family: 'mi-verb',
      source: 'manual-school-paradigm',
      principalParts: 'τίθημι, θήσω, ἔθηκα, τέθηκα, τέθειμαι, ἐτέθην'
    },
    'ἵστημι': {
      gloss: 'στήνω, στέκομαι',
      coverage: hasParadigm('ἵστημι') ? 'full' : 'catalog',
      family: 'mi-verb',
      source: 'manual-school-paradigm',
      principalParts: 'ἵστημι, στήσω, ἔστησα / ἔστην, ἕστηκα, ἕσταμαι, ἐστάθην'
    },
    'δείκνυμι': {
      gloss: 'δείχνω, φανερώνω',
      coverage: hasParadigm('δείκνυμι') ? 'full' : 'catalog',
      family: 'nu-mi-verb',
      source: 'manual-school-paradigm',
      principalParts: 'δείκνυμι, δείξω, ἔδειξα, δέδειχα, δέδειγμαι, ἐδείχθην'
    },
    'ἵημι': {
      gloss: 'στέλνω, ρίχνω, αφήνω',
      coverage: hasParadigm('ἵημι') ? 'full' : 'catalog',
      family: 'mi-verb',
      source: 'manual-school-paradigm',
      principalParts: 'ἵημι, ἥσω, ἧκα, εἷκα, εἷμαι, εἵθην'
    },
    'ἐπίσταμαι': {
      gloss: 'γνωρίζω καλά, κατέχω, ξέρω',
      coverage: hasParadigm('ἐπίσταμαι') ? 'full' : 'catalog',
      family: 'deponent-irregular',
      source: 'manual-school-paradigm',
      principalParts: 'ἐπίσταμαι, ἐπιστήσομαι, ἠπιστάμην'
    },
    'οἶδα': {
      gloss: 'ξέρω, γνωρίζω',
      coverage: hasParadigm('οἶδα') ? 'full' : 'supplemental',
      family: 'perfect-present-irregular',
      source: 'manual-school-paradigm',
      principalParts: 'οἶδα, εἴσομαι / εἰδήσω, —, —'
    },
    'εἶμι': {
      gloss: 'πορεύομαι, θα πάω',
      coverage: hasParadigm('εἶμι') ? 'full' : 'supplemental',
      family: 'motion-irregular',
      source: 'manual-school-paradigm',
      principalParts: 'εἶμι, εἶμι / εἶμι (μέλλ.), —, —'
    },
    'κεῖμαι': {
      gloss: 'κείτομαι, είμαι τοποθετημένος',
      coverage: hasParadigm('κεῖμαι') ? 'full' : 'catalog',
      family: 'stative-irregular',
      source: 'manual-school-paradigm',
      principalParts: 'κεῖμαι, κείσομαι, —'
    },
    'κάθημαι': {
      gloss: 'κάθομαι, είμαι καθισμένος',
      coverage: hasParadigm('κάθημαι') ? 'full' : 'catalog',
      family: 'stative-irregular',
      source: 'manual-school-paradigm',
      principalParts: 'κάθημαι, καθήσομαι, —'
    },
    'δέδοικα': {
      gloss: 'φοβούμαι',
      coverage: hasParadigm('δέδοικα') ? 'full' : 'catalog',
      family: 'perfect-present-irregular',
      source: 'manual-school-paradigm',
      principalParts: 'δέδοικα / δέδια, δείσομαι, ἔδεισα'
    },
    'διαλέγομαι': {
      gloss: 'συνομιλώ, συζητώ, διαλέγομαι',
      coverage: hasParadigm('διαλέγομαι') ? 'full' : 'catalog',
      family: 'deponent-irregular',
      source: 'manual-school-paradigm',
      principalParts: 'διαλέγομαι, διαλέξομαι, διελεξάμην, διείλεγμαι'
    },
    'δοκέω': {
      gloss: 'φαίνομαι, νομίζω, μου φαίνεται',
      coverage: hasParadigm('δοκέω') ? 'full' : 'catalog',
      family: 'contract-eo-irregular',
      source: 'manual-school-paradigm',
      principalParts: 'δοκέω, δόξω, ἔδοξα, δέδογμαι'
    },
    'ἀποθνῄσκω': {
      gloss: 'πεθαίνω',
      coverage: hasParadigm('ἀποθνῄσκω') ? 'full' : 'catalog',
      family: 'irregular-second-aorist',
      source: 'manual-school-paradigm',
      principalParts: 'ἀποθνῄσκω, ἀποθανοῦμαι, ἀπέθανον, τέθνηκα'
    },
    'τυγχάνω': {
      gloss: 'τυχαίνω, επιτυγχάνω, πετυχαίνω',
      coverage: hasParadigm('τυγχάνω') ? 'full' : 'catalog',
      family: 'irregular-second-aorist',
      source: 'manual-school-paradigm',
      principalParts: 'τυγχάνω, τεύξομαι, ἔτυχον, τετύχηκα'
    },
    'πίνω': {
      gloss: 'πίνω',
      coverage: hasParadigm('πίνω') ? 'full' : 'catalog',
      family: 'irregular-second-aorist',
      source: 'manual-school-paradigm',
      principalParts: 'πίνω, πίομαι, ἔπιον, πέπωκα'
    },
    'τρέχω': {
      gloss: 'τρέχω, σπεύδω',
      coverage: hasParadigm('τρέχω') ? 'full' : 'catalog',
      family: 'irregular-second-aorist',
      source: 'manual-school-paradigm',
      principalParts: 'τρέχω, δραμοῦμαι, ἔδραμον, δεδράμηκα'
    },
    'ζῶ': {
      gloss: 'ζω',
      displayLemma: 'ζάω',
      coverage: hasParadigm('ζῶ') ? 'partial-paradigm' : 'catalog',
      family: 'contract-eo-irregular',
      source: 'manual-school-paradigm',
      principalParts: 'ζάω / ζῶ, ζήσω, ἔζησα, βέβιωκα'
    },
    'ὀνίνημι': {
      gloss: 'ωφελώ, βοηθώ, ωφελούμαι',
      coverage: hasParadigm('ὀνίνημι') ? 'full' : 'catalog',
      family: 'mi-verb',
      source: 'generated-school-reviewed',
      principalParts: 'ὀνίνημι, ὀνήσω, ὤνησα, ὀνήνηκα / ὀνήνονα'
    },
    'πίμπρημι': {
      gloss: 'καίω, ανάβω, φουσκώνω',
      coverage: hasParadigm('πίμπρημι') ? 'full' : 'catalog',
      family: 'mi-verb',
      source: 'generated-school-reviewed',
      principalParts: 'πίμπρημι, πρήσω, ἔπρησα / ἔπρην, πέπρηκα, πέπρησμαι, ἐπρήσθην'
    },
    'πίμπλημι': {
      gloss: 'γεμίζω, πληρώ',
      coverage: hasParadigm('πίμπλημι') ? 'full' : 'catalog',
      family: 'mi-verb',
      source: 'manual-school-paradigm',
      principalParts: 'πίμπλημι, πλήσω, ἔπλησα / ἔπλην, πέπληκα, πέπλησμαι, ἐπλήσθην'
    }
  };

  Object.entries(upgrades).forEach(([lemma, payload]) => upsertMeta(lemma, payload));

  upsertAliases('δίδωμι', ['διδωμι']);
  upsertAliases('τίθημι', ['τιθημι']);
  upsertAliases('ἵστημι', ['ιστημι']);
  upsertAliases('δείκνυμι', ['δεικνυμι']);
  upsertAliases('ἵημι', ['ιημι']);
  upsertAliases('ἐπίσταμαι', ['επισταμαι']);
  upsertAliases('οἶδα', ['οιδα']);
  upsertAliases('εἶμι', ['ειμι','ειμι (θα παω)']);
  upsertAliases('κεῖμαι', ['κειμαι']);
  upsertAliases('κάθημαι', ['καθημαι']);
  upsertAliases('δέδοικα', ['δεδοικα','δέδια']);
  upsertAliases('διαλέγομαι', ['διαλεγομαι']);
  upsertAliases('δοκέω', ['δοκω','δοκέω','δοκεω','δοκῶ']);
  upsertAliases('ἀποθνῄσκω', ['αποθνησκω','ἀποθνήσκω']);
  upsertAliases('τυγχάνω', ['τυγχανω']);
  upsertAliases('πίνω', ['πινω']);
  upsertAliases('τρέχω', ['τρεχω']);
  upsertAliases('ζῶ', ['ζάω','ζαω','ζῶ']);
  upsertAliases('ὀνίνημι', ['ονινημι']);
  upsertAliases('πίμπρημι', ['πιμπρημι']);
  upsertAliases('πίμπλημι', ['πιμπλημι']);
})();
