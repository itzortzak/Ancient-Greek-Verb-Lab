(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "εὑρίσκω",
    "gloss": "βρίσκω, ανακαλύπτω",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οικονόμου",
    "family": "high-value-irregular",
    "id": "x070",
    "principalParts": "εὑρίσκω, εὑρήσω, ηὗρον/εὗρον, ηὕρηκα/εὕρηκα, εὕρημαι, ηὑρέθην/εὑρέθην",
    "derivatives": [
      "εὑρεῖν",
      "εὑρών"
    ],
    "sourceNotes": "Το 05.1 εντάσσει το εὑρίσκω στα ρήματα με β΄ αόριστο ηὗρον/εὗρον, ενώ το 05.2 δίνει ρητά τους αρχικούς χρόνους εὑρήσω και ηὗρον/εὗρον. Το tranche 28 αποτυπώνει συντηρητικά το ενεργητικό school-core layer και σταθεροποιεί τα βασικά non-finite forms.",
    "notes": "Tranche 28: new source-backed school-core hardening for εὑρίσκω."
  },
  {
    "lemma": "λείπω",
    "gloss": "αφήνω, εγκαταλείπω, λείπω",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οικονόμου",
    "family": "high-value-irregular",
    "id": "x071",
    "principalParts": "λείπω, λείψω, ἔλιπον, λέλοιπα, λέλειμμαι, ἐλείφθην",
    "derivatives": [
      "λιπεῖν",
      "λιπών"
    ],
    "sourceNotes": "Το 05.1 εντάσσει το λείπω στα ρήματα με β΄ αόριστο ἔλιπον, ενώ το 05.2 δίνει ρητά μέλλοντα λείψω και αόριστο ἔλιπον. Το tranche 28 αποδίδει το ενεργητικό school-core σύστημα με βασικές εγκλίσεις και non-finite slots.",
    "notes": "Tranche 28: new source-backed school-core hardening for λείπω."
  },
  {
    "lemma": "πυνθάνομαι",
    "gloss": "πληροφορούμαι, μαθαίνω, ρωτώ",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οικονόμου",
    "family": "high-value-deponent",
    "id": "x072",
    "principalParts": "πυνθάνομαι, πεύσομαι, ἐπυθόμην, πέπυσμαι",
    "derivatives": [
      "πυθέσθαι",
      "πυθόμενος"
    ],
    "sourceNotes": "Το 05.1 καταγράφει το πυνθάνομαι ως αποθετικό με β΄ αόριστο ἐπυθόμην και ζητεί ρητά τον τύπο πύθῃ της υποτακτικής αορίστου, ενώ το 05.2 δίνει τις βασικές σημασίες και το λημματικό του προφίλ. Το tranche 28 αποτυπώνει συντηρητικά deponent school-core layer με present, future middle και aorist middle.",
    "notes": "Tranche 28: new source-backed school-core hardening for πυνθάνομαι."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
