(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ὁράω",
    "gloss": "βλέπω, αντικρίζω",
    "coverage": "manual",
    "source": "oikonomou+05.2+tzartzanos-contracted-pattern",
    "family": "contracted-ao-irregular-future-aorist",
    "id": "x094",
    "principalParts": "ὁράω/ὁρῶ, ἑώρων, ὄψομαι, εἶδον, εἰδόμην, ὀφθήσομαι, ὤφθην, ἑόρακα/ἑώρακα",
    "derivatives": [
      "ὄψις",
      "ὁρατός",
      "ὀπτικός"
    ],
    "sourceNotes": "Ο Οικονόμου και το 05.2 δίνουν ρητά για το ὁράω τους βασικούς άξονες ἑώρων, ὄψομαι, εἶδον, εἰδόμην, ὀφθήσομαι, ὤφθην, καθώς και τους παρακειμενικούς anchors ἑόρακα/ἑώρακα και ἑόραμαι/ἑώραμαι/ὦμμαι. Η αναλυτική ανάπτυξη του present/imperfect active και middle-passive ακολουθεί συντηρητικά το σχολικό υπόδειγμα των συνηρημένων σε -άω από Οικονόμου και Τζαρτζάνο. Στην παρούσα δέσμη δεν επεκτάθηκε αναλυτικά ο perfect layer, επειδή οι σχολικές πηγές δίνουν περισσότερους από έναν ανταγωνιστικούς τύπους.",
    "notes": "Tranche 60: εκτεταμένη χειροκίνητη αναπλήρωση του ὁράω με finite, infinitive και participial school-core coverage, μαζί με repair του broken tranche-59 form-index patch για το ψαύω."
  }
];
  const norm = s => (s||"" ).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
