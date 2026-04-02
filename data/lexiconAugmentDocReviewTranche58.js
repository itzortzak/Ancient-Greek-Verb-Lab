(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "βιάζομαι",
    "gloss": "μεταχειρίζομαι βία, εξαναγκάζω · παθητικώς πιέζομαι",
    "coverage": "manual",
    "source": "05.2+oikonomou+present-middle-school-pattern+perfect-middle-passive-school-pattern",
    "family": "deponent-mixed-zeta",
    "id": "x092",
    "principalParts": "βιάζομαι, ἐβιαζόμην, βιάσομαι, βιασθήσομαι, ἐβιασάμην, ἐβιάσθην, βεβίασμαι, ἐβεβιάσμην",
    "derivatives": [
      "βία",
      "βίαιος",
      "βιασμός"
    ],
    "sourceNotes": "Το 05.2 Αρχικοί Χρόνοι δίνει ρητά για το βιάζομαι τους άξονες ἐβιαζόμην, βιάσομαι, βιασθήσομαι, ἐβιασάμην, ἐβιάσθην, βεβίασμαι, ἐβεβιάσμην και δηλώνει ότι δεν έχει ενεργητική φωνή. Ο Οικονόμου το κατατάσσει ρητά στα μεικτά αποθετικά με μέσο αόριστο ἐβιασάμην και παθητικό αόριστο ἐβιάσθην. Η ανάπτυξη των present moods ακολουθεί συντηρητικά το σχολικό υπόδειγμα των θεματικών ρημάτων της μέσης φωνής, ενώ το perfect/pluperfect κρατιέται μόνο ως anchor core.",
    "notes": "Tranche 58: επανεπιμέλεια του βιάζομαι με πλήρες present middle (οριστική, υποτακτική, ευκτική, προστακτική), imperfect middle, future middle και future passive σε indicative + non-finite, πλήρες aorist middle και aorist passive με εγκλίσεις και non-finite, και συντηρητική διατήρηση των βεβίασμαι / ἐβεβιάσμην μόνο ως anchors."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
