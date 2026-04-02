(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const item = {
    "lemma":"ἄημι",
    "gloss":"πνέω, φυσώ",
    "coverage":"manual",
    "source":"lsj+school-core-review",
    "family":"poetic-defective-mi-verb",
    "id":"x066",
    "principalParts":"ἄημι, ἄη",
    "derivatives":["ἄω"],
    "sourceNotes":"Το tranche 40 κανονικοποιεί το defective ποιητικό λήμμα με βάση τις βεβαιωμένες μορφές της LSJ/Scaife και κρατά αυστηρά μόνο τους σαφώς μαρτυρημένους present/imperfect και non-finite τύπους.",
    "notes":"Normalization tranche: removes malformed imported Unicode forms, corrects the 3pl person-tag, and adds the epic infinitive ἀήμεναι plus attested plural participial forms."
  };
  const norm = s => (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase();
  window.LEXICON_AUGMENT.verbMeta[item.lemma] = item;
  const idx = window.LEXICON_AUGMENT.extraVerbs.findIndex(v => norm(v.lemma) === norm(item.lemma));
  if(idx >= 0) window.LEXICON_AUGMENT.extraVerbs[idx] = item;
  else window.LEXICON_AUGMENT.extraVerbs.push(item);
})();
