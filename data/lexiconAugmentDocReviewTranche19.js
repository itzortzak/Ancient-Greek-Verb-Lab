(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ἄπειμι",
    "gloss": "απουσιάζω, είμαι μακριά",
    "coverage": "manual",
    "source": "manual-pdf+internal-review",
    "family": "eimi-compound-school-grammar",
    "id": "x043",
    "principalParts": "ἄπειμι, ἀπῶ, ἀπῆν",
    "derivatives": [
      "εἰμί",
      "ἀπών"
    ],
    "sourceNotes": "Το tranche 19 ευθυγραμμίζει το λήμμα με τη σχολική αντιμετώπιση των συνθέτων του εἰμί και αποσύρει το υβριδικό auto-generated μίγμα των δύο ὁμωνύμων ἄπειμι.",
    "notes": "Tranche 19: present/imperfect system, βασικές εγκλίσεις, απαρέμφατο και μετοχή."
  },
  {
    "lemma": "συμπίπτω",
    "gloss": "συγκρούομαι, συμπίπτω, συμβαίνω",
    "coverage": "manual",
    "source": "manual-web+grammar-analogy",
    "family": "pipto-compound",
    "id": "x044",
    "principalParts": "συμπίπτω, συμπεσοῦμαι, συνέπεσον",
    "derivatives": [
      "πίπτω"
    ],
    "sourceNotes": "Το tranche 19 διορθώνει πρώτα τα λανθασμένα plural/person tags του generated layer και έπειτα προσθέτει συντηρητικά το common future/aorist και τους μη προσωπικούς τύπους του ρήματος.",
    "notes": "Tranche 19: clean present/imperfect + conservative future/aorist hardening."
  },
  {
    "lemma": "πρόσφημι",
    "gloss": "προσφωνώ, λέγω προς",
    "coverage": "manual",
    "source": "manual-web",
    "family": "epic-past-biased-mi",
    "id": "x045",
    "principalParts": "πρόσφημι, προσέφην",
    "derivatives": [
      "φημί"
    ],
    "sourceNotes": "Το tranche 19 κρατά μόνο το βεβαιωμένο imperfect-heavy layer του λήμματος και διορθώνει τα plural person tags που είχαν περάσει εσφαλμένα στο generated dataset.",
    "notes": "Tranche 19: conservative replacement of the malformed generated profile."
  }
];
  const norm = s => (s||"" ).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
