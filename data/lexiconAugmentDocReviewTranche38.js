(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ἧμαι",
    "gloss": "κάθομαι, είμαι καθισμένος, βρίσκομαι τοποθετημένος",
    "coverage": "manual",
    "source": "lsj+perseus+legacy-doc-review",
    "family": "stative-seated",
    "id": "x046",
    "principalParts": "ἧμαι, ἥμην",
    "derivatives": ["κάθημαι"],
    "sourceNotes": "Το tranche 38 δεν επεκτείνει το simplex ἧμαι σε μη βεβαιωμένες εγκλίσεις. Διορθώνει όμως τον βασικό perfect-present / pluperfect-imperfect πυρήνα, προσθέτει δυϊκούς και επικές παραλλαγές πληθυντικού, και αντικαθιστά τις εσφαλμένες visible μορφές ἧται και ἡμένη με τα τεκμηριωμένα ἧσται και ἥμενη.",
    "notes": "Tranche 38: source-backed hardening of the seated stative base verb with corrected perfect-present and pluperfect layers."
  }
];
  const norm = s => (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
