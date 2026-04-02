(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ῥήγνυμι",
    "gloss": "σπάζω, ραγίζω, σπώ",
    "coverage": "manual",
    "source": "05.1-deiknumi-pattern+05.2-principal-parts+oikonomou",
    "family": "mi-verb-consonantal-in-nu",
    "id": "x082",
    "principalParts": "ῥήγνυμι / ῥηγνύω, ἐρρήγνυν / ἐρρήγνυον, ῥήξω, ῥήξομαι, ἔρρηξα, ἐρρηξάμην, ἐρρήχθην, ῥαγήσομαι, ἐρράγην, ἔρρηχα, ἔρρηγμαι / ἔρρωγα, ἐρρηγμήν / ἐρρώγειν",
    "derivatives": [
      "ῥῆξις",
      "ῥῆγμα",
      "ῥωγμή"
    ],
    "sourceNotes": "Το 05.1 δίνει το κλιτικό υπόδειγμα των συμφωνόληκτων ρημάτων σε -μι κατά το δείκνυμι για present/imperfect ενεργητικής και μέσης-παθητικής. Το 05.2 Αρχικοί Χρόνοι δίνει ρητά για το ῥήγνυμι / ῥηγνύω: ἐρρήγνυν / ἐρρήγνυον, ῥήξω, ῥήξομαι, ἔρρηξα, ἐρρηξάμην, ἐρρήχθην, ῥαγήσομαι, ἐρράγην, ἔρρηχα, ἔρρηγμαι / ἔρρωγα, ἐρρηγμήν / ἐρρώγειν. Ο Οικονόμου επιβεβαιώνει τον ίδιο βασικό άξονα και σημειώνει ρητά την εναλλαγή ῥηγ- / ῥαγ- / ῥωγ-.",
    "notes": "Tranche 48: νέο source-backed expanded school-core paradigm για το ῥήγνυμι. Ο present/imperfect πυρήνας κλίνεται κατά το δείκνυμι, ενώ future/aorist ενεργητικής, μέσης και παθητικής φωνής αναπτύσσονται συντηρητικά από τους ρητούς principal parts. Ο παρακείμενος και ο υπερσυντέλικος κρατούνται μόνο ως βεβαιωμένοι anchors, επειδή οι πηγές διασώζουν διπλή παράδοση (ἔρρηχα / ἔρρωγα, ἔρρηγμαι / ἔρρωγα)."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
