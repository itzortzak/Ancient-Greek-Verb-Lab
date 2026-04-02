(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ὑπόκειμαι",
    "gloss": "βρίσκομαι από κάτω, υπόκειμαι",
    "coverage": "manual",
    "source": "manual-pdf+grammar-analogy",
    "family": "defective-keimai-compound",
    "id": "x078",
    "principalParts": "ὑπόκειμαι, ὑπεκείμην, ὑποκείσομαι",
    "derivatives": [
      "κεῖμαι"
    ],
    "sourceNotes": "Το 05.1 και το Binder3 δίνουν ρητά την κλίση του κεῖμαι με present/imperfect/future και non-finite forms· το tranche 36 επεκτείνει συντηρητικά το ὑπόκειμαι ως σύνθετο του κεῖμαι με εσωτερική αύξηση μετά την πρόθεση.",
    "notes": "Tranche 36: re-hardening του defective-stative compound με imperfect/future layer, future optative και non-finite συμπλήρωση."
  }
];
  const norm = s => (s||'' ).normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
