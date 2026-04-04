(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "οἴχομαι",
    "gloss": "φεύγω, αναχωρώ, έχω πλέον φύγει",
    "coverage": "manual",
    "source": "05.2 Αρχικοί Χρόνοι + Τζαρτζάνος",
    "family": "deponent-high-value",
    "id": "x088",
    "principalParts": "οἴχομαι, οἰχήσομαι, οἴχημαι",
    "derivatives": [
      "οἴχεσθαι",
      "οἰχόμενος"
    ],
    "sourceNotes": "Το 05.2 δίνει ρητά οἴχομαι, παρατ. ᾠχόμην, μέλλ. οἰχήσομαι, παρακείμενο οἴχημαι / οἴχωκα / ᾢχηκα και υπερσυντέλικο ᾠχήμην / οἰχώκειν / ᾠχήκειν. Ο Τζαρτζάνος χαρακτηρίζει το οἴχομαι αποθετικό με ενεστώτα σημασίας παρακειμένου και παρατατικό με σημασία αορίστου, και επιβεβαιώνει τον μέλλοντα οἰχήσομαι.",
    "notes": "Tranche 34: source-backed expansion of the analytical middle system for οἴχομαι."
  },
  {
    "lemma": "βιάζομαι",
    "gloss": "μεταχειρίζομαι βία, πιέζω / πιέζομαι",
    "coverage": "manual",
    "source": "Οικονόμου + 05.2 Αρχικοί Χρόνοι",
    "family": "mixed-deponent",
    "id": "x089",
    "principalParts": "βιάζομαι, βιάσομαι, ἐβιασάμην, ἐβιάσθην, βεβίασμαι",
    "derivatives": [
      "βιάζεσθαι",
      "βιασάμενος"
    ],
    "sourceNotes": "Ο Οικονόμου κατατάσσει ρητά το βιάζομαι στα μεικτά αποθετικά: βιάζομαι – ἐβιασάμην – ἐβιάσθην. Το 05.2 επιβεβαιώνει τη διάκριση μέσης και παθητικής σημασίας και παρέχει τη βάση των αρχικών χρόνων για πλήρη αναλυτική αποτύπωση.",
    "notes": "Tranche 34: source-backed expansion of the analytical middle/passive system for βιάζομαι."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
