(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "μανθάνω",
    "gloss": "μαθαίνω, πληροφορούμαι, κατανοώ",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οικονόμου",
    "family": "high-value-than-b2",
    "id": "x073",
    "principalParts": "μανθάνω, μαθήσομαι, ἔμαθον, μεμάθηκα",
    "derivatives": [
      "μαθεῖν",
      "μαθών"
    ],
    "sourceNotes": "Το 05.1 εντάσσει το μανθάνω στα ρήματα με β΄ αόριστο ἔμαθον, ενώ το 05.2 δίνει ρητά τον μέσο μέλλοντα μαθήσομαι και τον αόριστο ἔμαθον. Ο Οικονόμου επιβεβαιώνει τον μέσο μέλλοντα μαθήσομαι ως χαρακτηριστικό τύπο της κατηγορίας. Το tranche 29 αποτυπώνει συντηρητικά school-core layer με present system, future middle και β΄ αόριστο ενεργητικής μορφής.",
    "notes": "Tranche 29: new source-backed school-core hardening for μανθάνω."
  },
  {
    "lemma": "λανθάνω",
    "gloss": "διαφεύγω την προσοχή, μένω απαρατήρητος, λησμονώ",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οικονόμου",
    "family": "high-value-than-b2",
    "id": "x074",
    "principalParts": "λανθάνω, λήσω, ἔλαθον, λέληθα",
    "derivatives": [
      "λαθεῖν",
      "λαθών"
    ],
    "sourceNotes": "Το 05.1 καταγράφει το λανθάνω στα ρήματα με β΄ αόριστο ἔλαθον, ενώ το 05.2 δίνει ρητά μέλλοντα λήσω και αόριστο ἔλαθον. Το tranche 29 αποδίδει το ενεργητικό school-core σύστημα με present, future και β΄ αόριστο, μαζί με τα βασικά non-finite slots.",
    "notes": "Tranche 29: new source-backed school-core hardening for λανθάνω."
  },
  {
    "lemma": "λαγχάνω",
    "gloss": "αποκτώ με κλήρο, λαμβάνω ως μερίδιο, τυχαίνω",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οικονόμου",
    "family": "high-value-irregular",
    "id": "x075",
    "principalParts": "λαγχάνω, λήξομαι, ἔλαχον, εἴληχα",
    "derivatives": [
      "λαχεῖν",
      "λαχών"
    ],
    "sourceNotes": "Το 05.1 εντάσσει το λαγχάνω στα ρήματα με β΄ αόριστο ἔλαχον, ενώ το 05.2 δίνει ρητά μέλλοντα λήξομαι και αόριστο ἔλαχον. Ο Οικονόμου παρατηρεί την ιδιομορφία του αναδιπλασιασμού στο εἴληχα. Το tranche 29 αποτυπώνει συντηρητικά school-core layer με present system, future middle και β΄ αόριστο.",
    "notes": "Tranche 29: new source-backed school-core hardening for λαγχάνω."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
