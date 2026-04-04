(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ἔοικα",
    "gloss": "μοιάζω",
    "coverage": "manual",
    "source": "Τζαρτζάνος + Οἰκονόμου + Binder3",
    "family": "perfect-with-present-meaning",
    "id": "x120",
    "principalParts": "ἔοικα, ἐῴκειν, εἰκέναι/ἐοικέναι, εἰκώς/ἐοικώς",
    "derivatives": [
      "ἐοίκω",
      "ἐοίκοιμι",
      "ἐῴκειν",
      "εἰκέναι",
      "ἐοικέναι",
      "εἰκώς",
      "ἐοικώς"
    ],
    "sourceNotes": "Το tranche 90 στηρίζεται στον Τζαρτζάνο για τον ορισμό του ἔοικα ως παρακειμένου με σημασία ενεστώτα και για το βασικό σύστημα ἔοικα, ἐοίκαμεν κτλ., ἐῴκειν κτλ., εἰκέναι και εἰκώς. Ο Οἰκονόμου επιβεβαιώνει τόσο το ζεύγος ἔοικα / ἐῴκειν όσο και τη διπλή αύξηση του υπερσυντελίκου. Το Binder3 δίνει ρητά ολόκληρο τον σχολικό πίνακα με υποτακτική, ευκτική, τις μεταγενέστερες εναλλακτικές ἐοικέναι / ἐοικώς και τον τύπο εἴξασι δίπλα στο ἐοίκασι(ν).",
    "notes": "Tranche 90: school-safe normalization του ἔοικα. Το παλιό imported static payload είχε υπεργεννημένες και σημασιολογικά θορυβώδεις επεκτάσεις. Αντικαταστάθηκε από curated 33-form layer αυστηρά δεμένο με τις σχολικές πηγές, χωρίς speculative imperative ή ανεπιβεβαίωτο μη προσωπικό υλικό."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set([...(window.LEXICON_AUGMENT.extraVerbs||[]).map(v => norm(v.lemma)), ...((window.VERB_DATA||[]).map(v => norm(v.lemma)))]);
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
