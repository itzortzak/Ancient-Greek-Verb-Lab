(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "βαίνω",
    "gloss": "βαδίζω, πηγαίνω",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οικονόμου",
    "family": "high-value-irregular",
    "id": "x064",
    "principalParts": "βαίνω, βήσομαι, ἔβην, βέβηκα, ἐβεβήκειν",
    "derivatives": [
      "βῆναι",
      "βάς"
    ],
    "sourceNotes": "Το tranche 26 προσθέτει νέο source-backed school-core manual paradigm για το βαίνω. Το 05.2 δίνει ρητά βήσομαι και ἔβην, ενώ ο Οικονόμου και η γραμματική επιβεβαιώνουν το βη-/βα- σύστημα του β΄ αορίστου.",
    "notes": "Tranche 26: new source-backed school-core hardening for βαίνω."
  },
  {
    "lemma": "τρέχω",
    "gloss": "τρέχω, σπεύδω",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Τζαρτζάνος",
    "family": "high-value-irregular",
    "id": "x065",
    "principalParts": "τρέχω, δραμοῦμαι, ἔδραμον, δεδράμηκα, ἐδεδραμήκειν",
    "derivatives": [
      "δραμεῖν",
      "δραμών"
    ],
    "sourceNotes": "Το 05.1 συνδέει το τρέχω/θέω με αόριστο β΄ ἔδραμον, το 05.2 δίνει για το θέω τον ίδιο αόριστο, και ο Τζαρτζάνος καταγράφει ρητά για το τρέχω μέσο μέλλοντα δραμοῦμαι με ενεργητική σημασία.",
    "notes": "Tranche 26: source-backed hardening for the irregular motion verb τρέχω."
  },
  {
    "lemma": "τυγχάνω",
    "gloss": "επιτυγχάνω, τυχαίνω, πετυχαίνω",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Τζαρτζάνος",
    "family": "high-value-irregular",
    "id": "x066",
    "principalParts": "τυγχάνω, τεύξομαι, ἔτυχον, τετύχηκα/τέτευχα, ἐτετυχήκειν/ἐτετεύχειν",
    "derivatives": [
      "τυχεῖν",
      "τυχών"
    ],
    "sourceNotes": "Το 05.1 δίνει ρητά β΄ αόριστο ἔτυχον, το 05.2 δίνει μέλλοντα τεύξομαι/τευξοῦμαι και ο Τζαρτζάνος καταγράφει το τευχ-/τυχ- σύστημα με μέσο μέλλοντα και β΄ αόριστο.",
    "notes": "Tranche 26: source-backed hardening for τυγχάνω."
  }
];
  const norm = s => (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
