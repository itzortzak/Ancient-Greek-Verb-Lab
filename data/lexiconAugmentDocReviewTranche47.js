(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ῥέω",
    "gloss": "ρέω",
    "coverage": "manual",
    "source": "05.1-monosyllabic-eo+05.2-principal-parts+oikonomou",
    "family": "monosyllabic-eo-irregular",
    "id": "x081",
    "principalParts": "ῥέω, ἔρρεον, ῥυήσομαι / ῥεύσομαι / ῥευσοῦμαι, ἔρρευσα / ἐρρύην, ἐρρύηκα, ἐρρυήκειν",
    "derivatives": [
      "ῥεῦμα",
      "ῥοή",
      "ῥοῦς",
      "ῥεῖθρον"
    ],
    "sourceNotes": "Το 05.1 Γραμματική δίνει ρητά πλήρη present table για το ῥέω: οριστική, υποτακτική, ευκτική, προστακτική, απαρέμφατο και μετοχή, καθώς και παρατατικό. Το 05.2 Αρχικοί Χρόνοι και ο Οικονόμου επιβεβαιώνουν τους βασικούς χρόνους ἔρρεον, ῥυήσομαι / ῥεύσομαι / ῥευσοῦμαι, ἔρρευσα / ἐρρύην, ἐρρύηκα, ἐρρυήκειν.",
    "notes": "Tranche 47: νέο source-backed school-core paradigm για το ῥέω, με πλήρες present system και imperfect, ενώ οι λοιποί χρόνοι κρατούνται συντηρητικά ως principal-parts anchors για να αποφευχθεί εικαστική υπερανάπτυξη."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
