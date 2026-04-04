(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
{
  "lemma": "βιάζομαι",
  "gloss": "μεταχειρίζομαι βία, εξαναγκάζω · παθητικώς πιέζομαι",
  "coverage": "manual",
  "source": "05.2+oikonomou+mixed-deponent-school-pattern",
  "family": "deponent-mixed-zeta",
  "id": "x110",
  "principalParts": "βιάζομαι, ἐβιαζόμην, βιάσομαι, βιασθήσομαι, ἐβιασάμην, ἐβιάσθην, βεβίασμαι, ἐβεβιάσμην",
  "derivatives": [
    "βία",
    "βίαιος",
    "βιασμός"
  ],
  "sourceNotes": "Το 05.2 Αρχικοί Χρόνοι δίνει ρητά για το βιάζομαι τους άξονες ἐβιαζόμην, βιάσομαι, βιασθήσομαι, ἐβιασάμην, ἐβιάσθην, βεβίασμαι, ἐβεβιάσμην και δηλώνει ότι δεν έχει ενεργητική φωνή. Ο Οἰκονόμου το κατατάσσει ρητά στα μεικτά αποθετικά με μέσο αόριστο ἐβιασάμην και παθητικό αόριστο ἐβιάσθην. Η present middle ανάπτυξη ακολουθεί συντηρητικά το σχολικό pattern των θεματικών ρημάτων σε -ζω, ενώ στο tranche αυτό προστίθενται και future optatives καθώς και perfect non-finite anchors.",
  "notes": "Tranche 76: refreshed mixed-deponent layer για το βιάζομαι με full present middle, imperfect middle, future middle + passive σε indicative/optative + non-finite, πλήρες aorist middle και aorist passive με moods και non-finite, και conservative perfect/pluperfect anchors μαζί με perfect infinitive / participles."
}
];
  const norm = s => (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
