(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => (v.lemma||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase()));
  const additions = [
{
  "lemma": "ἀφικνέομαι",
  "gloss": "φθάνω, έρχομαι, καταφθάνω",
  "coverage": "manual",
  "source": "manual-pdf",
  "family": "contract-deponent",
  "id": "x042",
  "principalParts": "ἀφικνέομαι -οῦμαι, ἀφικνούμην, ἀφίξομαι, ἀφικόμην, ἀφῖγμαι, ἀφίγμην",
  "derivatives": [
    "ἄφιξις",
    "ἐφικτός",
    "ἀνέφικτος"
  ],
  "sourceNotes": "Ο Οικονόμου, ο Τζαρτζάνος και το 05.2 Αρχικοί Χρόνοι δίνουν ρητά ως βασικούς χρόνους: ἀφικνούμην, ἀφίξομαι, ἀφικόμην, ἀφῖγμαι, ἀφίγμην. Οι αοριστικοί μη οριστικοί τύποι ἀφίκωμαι, ἀφικοίμην, ἀφικοῦ, ἀφικέσθαι, ἀφικόμενος βεβαιώνονται στους συγκεντρωτικούς πίνακες β΄ αορίστου μέσης.",
  "notes": "Το παρόν tranche επεκτείνει συντηρητικά το present/imperfect/future layer του αποθετικού συνηρημένου ρήματος και ανοίγει πλήρως μόνο το βεβαιωμένο σύστημα του αορίστου β΄ μέσης."
}
];
  for(const item of additions){
    const key=(item.lemma||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
    if(!existing.has(key)) { window.LEXICON_AUGMENT.extraVerbs.push(item); existing.add(key); }
    window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
    window.LEXICON_AUGMENT.verbMeta[item.lemma] = Object.assign({}, window.LEXICON_AUGMENT.verbMeta[item.lemma]||{}, item);
  }
})();
