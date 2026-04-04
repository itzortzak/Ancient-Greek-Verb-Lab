(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ἔρχομαι",
    "gloss": "έρχομαι, πηγαίνω, φτάνω",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οικονόμου",
    "family": "high-value-irregular",
    "id": "x061",
    "principalParts": "ἔρχομαι, εἶμι/ἐλεύσομαι, ἦλθον, ἐλήλυθα, ἐληλύθειν",
    "derivatives": [
      "ἰέναι",
      "ἐλθεῖν",
      "ἐλθών"
    ],
    "sourceNotes": "Το tranche 25 προσθέτει νέο source-backed supplemented school-core paradigm. Το 05.1 δηλώνει ρητά ότι το ἔρχομαι αναπληρώνεται στην υποτακτική, ευκτική, προστακτική, απαρέμφατο και μετοχή ενεστώτα από το εἶμι, ενώ οι αρχικοί χρόνοι δίνουν εἶμι/ἐλεύσομαι και αόριστο β΄ ἦλθον.",
    "notes": "Tranche 25: new supplemented manual paradigm for the high-value motion verb ἔρχομαι."
  },
  {
    "lemma": "πάσχω",
    "gloss": "παθαίνω, υφίσταμαι",
    "coverage": "manual",
    "source": "legacy-manualParadigms + 05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι",
    "family": "high-value-irregular",
    "id": "x062",
    "principalParts": "πάσχω, πείσομαι, ἔπαθον, πέπονθα, —, —",
    "derivatives": [
      "παθεῖν",
      "παθών"
    ],
    "sourceNotes": "Το tranche 25 δεν ξεκινά από μηδέν· παίρνει το ήδη επιμελημένο minimal manual layer και το αναβαθμίζει σε school-core extended paradigm, κρατώντας την εναλλαγή πασχ- / πεισ- / παθ- και προσθέτοντας βασικές εγκλίσεις και μη προσωπικούς τύπους.",
    "notes": "Tranche 25: extended school-core hardening for πάσχω."
  },
  {
    "lemma": "πίπτω",
    "gloss": "πέφτω, καταπίπτω",
    "coverage": "manual",
    "source": "legacy-manualParadigms + 05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οικονόμου",
    "family": "high-value-irregular",
    "id": "x063",
    "principalParts": "πίπτω, πεσοῦμαι, ἔπεσον, πέπτωκα, —, —",
    "derivatives": [
      "πεσεῖν",
      "πεσών"
    ],
    "sourceNotes": "Το tranche 25 αναβαθμίζει το παλαιότερο minimal manual layer σε extended school-core paradigm. Κρατήθηκε ο ανώμαλος μέλλοντας πεσοῦμαι και ο β΄ αόριστος ἔπεσον, με βασικές εγκλίσεις και non-finite τύπους για πιο σταθερή αναγνώριση και κλίση.",
    "notes": "Tranche 25: extended school-core hardening for πίπτω."
  }
];
  const norm = s => (s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
