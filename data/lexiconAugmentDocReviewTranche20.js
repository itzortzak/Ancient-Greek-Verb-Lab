(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ἧμαι",
    "gloss": "κάθομαι, είμαι καθισμένος",
    "coverage": "manual",
    "source": "manual-pdf+legacy-doc-review",
    "family": "stative-seated",
    "id": "x046",
    "principalParts": "ἧμαι, ἥμην",
    "derivatives": [
      "κάθημαι"
    ],
    "sourceNotes": "Το tranche 20 δεν ξαναχτίζει από μηδενική βάση το ἧμαι· επανενεργοποιεί και επαναχαρτογραφεί το legacy manual paradigm της tranche 2 ώστε να λειτουργεί σταθερά στο form index και στο strict-audit layer.",
    "notes": "Tranche 20: operational reindexing and audit upgrade for the seated stative base verb."
  },
  {
    "lemma": "κάθημαι",
    "gloss": "κάθομαι, είμαι καθισμένος",
    "coverage": "manual",
    "source": "05.1-grammar+oikonomou+internal-review",
    "family": "stative-seated-compound",
    "id": "x047",
    "principalParts": "κάθημαι, καθήσομαι/καθεδοῦμαι, ἐκαθέσθην",
    "derivatives": [
      "ἧμαι",
      "καθέζομαι"
    ],
    "sourceNotes": "Το tranche 20 στηρίζεται πρωτίστως στον πίνακα του 05.1 ΓΡΑΜΜΑΤΙΚΗ για το κάθημαι και συμπληρώνει συντηρητικά το σχολικό manual layer με present/imperfect, future middle, passive aorist, απαρέμφατα και μετοχές.",
    "notes": "Tranche 20: source-backed seated/stative paradigm with conservative future and passive-aorist completion."
  },
  {
    "lemma": "ἔπειμι",
    "gloss": "είμαι επάνω, προΐσταμαι",
    "coverage": "manual",
    "source": "05.1-grammar+analogy-to-eimi-compounds",
    "family": "eimi-compound-school-grammar",
    "id": "x048",
    "principalParts": "ἔπειμι, ἐπῶ, ἐπῆν",
    "derivatives": [
      "εἰμί",
      "ἐπών"
    ],
    "sourceNotes": "Η σχολική γραμματική 05.1 καταγράφει το ἔπειμι στα σύνθετα του εἰμί. Το tranche 20 το αποδίδει με τον ίδιο συντηρητικό τρόπο που χρησιμοποιήθηκε ήδη για τα πάρειμι και ἄπειμι: present/imperfect system, βασικές εγκλίσεις, απαρέμφατο και μετοχή.",
    "notes": "Tranche 20: conservative eimi-compound hardening for a low-coverage supplemental lemma."
  }
];
  const norm = s => (s||"" ).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
