(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "νήθω",
    "gloss": "γνέθω, κλώθω, παράγω νήμα",
    "coverage": "manual",
    "source": "05.1+tzartzanos+nt-attestation+legacy-doc-review",
    "family": "regular-omega-weaving",
    "id": "x047",
    "principalParts": "νήθω",
    "sourceNotes": "Το tranche 39 δεν ανοίγει μέλλοντα ή αόριστο χωρίς ασφαλή principal parts. Διορθώνει όμως τα person/number tags του iterative imperfect layer και επεκτείνει τον active present system του νήθω με τα κανονικά σχήματα των βαρυτόνων ρημάτων σε -ω, κρατώντας ως βεβαιωμένο anchor τον τύπο νήθουσι(ν).",
    "notes": "Tranche 39: source-backed regularization of the active present system and corrective re-tagging of the imperfect layer for νήθω."
  }
];
  const norm = s => (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
