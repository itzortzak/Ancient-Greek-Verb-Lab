(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ψαύω",
    "gloss": "αγγίζω ελαφρά, ψηλαφώ",
    "coverage": "manual",
    "source": "oikonomou+05.1+tzartzanos-regular-omega-pattern",
    "family": "barytone-omega-active",
    "id": "x093",
    "principalParts": "ψαύω, ἔψαυον, ψαύσω, ἔψαυσα",
    "derivatives": [
      "ἄψαυστος"
    ],
    "sourceNotes": "Ο Οικονόμου κατατάσσει ρητά το ψαύω στα φωνηεντόληκτα ασυναίρετα σε -αύω και δίνει για το λήμμα το θέμα ψαF-/ψαυσ- και τον αόριστο ἔψαυσα. Η αναλυτική ανάπτυξη του present, future και aorist active layer ακολουθεί συντηρητικά το σχολικό παράδειγμα του λύω στις γραμματικές του 05.1 και του Τζαρτζάνου, χωρίς να κατασκευάζεται μη βεβαιωμένο middle/passive historical layer.",
    "notes": "Tranche 59: πλήρης ενεργητική school-core επανεπιμέλεια του ψαύω με present/imperfect/future/aorist active, non-finite layer και form-index replacement για το λήμμα."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
