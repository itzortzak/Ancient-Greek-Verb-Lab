(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "οἴχομαι",
    "gloss": "φεύγω γρήγορα, έχω φύγει, χάνομαι, πεθαίνω",
    "coverage": "manual",
    "source": "manual-pdf+grammar-analogy",
    "family": "defective-deponent",
    "id": "x079",
    "principalParts": "οἴχομαι, ᾠχόμην, οἰχήσομαι, οἴχημαι / οἴχωκα / ᾢχηκα, ᾠχήμην / οἰχώκειν / ᾠχήκειν",
    "derivatives": [
      "οἴχησις",
      "οἰχητέον"
    ],
    "sourceNotes": "Το 05.2 Αρχικοί Χρόνοι δίνει ρητά Εν. οἴχομαι, Πρτ ᾠχόμην, Μέλλ οἰχήσομαι, Πρκ οἴχημαι / οἴχωκα / ᾢχηκα, Υπερ ᾠχήμην / οἰχώκειν / ᾠχήκειν. Ο Τζαρτζάνος και ο Οικονόμου τονίζουν ότι ο ενεστώτας έχει σημασία παρακειμένου και ο παρατατικός σημασία αορίστου ή υπερσυντελίκου.",
    "notes": "Tranche 70: πλήρης ανάπτυξη present/imperfect/future middle layer, με συντηρητική προσθήκη perfect/pluperfect μόνο στα ρητά βεβαιωμένα principal-parts slots."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
