(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => (v.lemma||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase()));
  const additions = [
  {
    "lemma": "ῥύομαι",
    "gloss": "σώζω, προφυλάσσω, απελευθερώνω",
    "coverage": "manual",
    "source": "manual-pdf",
    "family": "deponent-omega",
    "id": "x043",
    "principalParts": "ῥύομαι, ἐρρυόμην, ῥύσομαι, ἐρρυσάμην, ἐρρύσθην",
    "derivatives": [
      "ῥῦσις",
      "ῥυστέον",
      "ῥυτήρ"
    ],
    "sourceNotes": "Το 05.2 Αρχικοί Χρόνοι δίνει ρητά για το ῥύομαι: ἐρρυόμην, ῥύσομαι, ἐρρυσάμην, ἐρρύσθην και δηλώνει ρητά ότι δεν έχει ενεργητική φωνή ούτε παρακείμενο/υπερσυντέλικο. Η ανάπτυξη των ενεστωτικών, μελλοντικών και αοριστικών μη προσωπικών τύπων και εγκλίσεων ακολουθεί τους σχολικούς πίνακες της μέσης φωνής και των παθητικών χρόνων.",
    "notes": "Το tranche αυτό διορθώνει και το παλαιό, ανεπαρκώς τεκμηριωμένο perfect layer του λήμματος και το αντικαθιστά με αυστηρά pdf-backed deponent/passive coverage."
  }
];
  for(const item of additions){
    const key=(item.lemma||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
    if(!existing.has(key)) { window.LEXICON_AUGMENT.extraVerbs.push(item); existing.add(key); }
    window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
    window.LEXICON_AUGMENT.verbMeta[item.lemma] = Object.assign({}, window.LEXICON_AUGMENT.verbMeta[item.lemma]||{}, item);
  }
})();
