(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => (v.lemma||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase()));
  const additions = [
  {
    "lemma": "αἰσθάνομαι",
    "gloss": "αντιλαμβάνομαι, αισθάνομαι, καταλαβαίνω",
    "coverage": "manual",
    "source": "manual-pdf",
    "family": "deponent-middle",
    "id": "x026",
    "principalParts": "αἰσθάνομαι, αἰσθήσομαι, ᾐσθόμην, ᾔσθημαι, ᾐσθήμην",
    "derivatives": [
      "αἴσθημα",
      "αἴσθησις",
      "αἰσθητός"
    ],
    "sourceNotes": "05.2 Αρχικοί Χρόνοι και Οικονόμου δίνουν ρητά: ᾐσθανόμην, αἰσθήσομαι, ᾐσθόμην, ᾔσθημαι, ᾐσθήμην. Η παρούσα έκδοση επεκτείνει αναλογικά το deponent paradigm σε present/imperfect/future/aorist και μη προσωπικούς τύπους.",
    "notes": "Από το v1.5.17 το λήμμα διαθέτει χειροκίνητο deponent paradigm με πλήρη core κλίση και slot validation."
  },
  {
    "lemma": "ἀμύνω",
    "gloss": "αμύνομαι, αποκρούω, υπερασπίζω, εκδικώ",
    "coverage": "manual",
    "source": "manual-pdf",
    "family": "nasal-liquid",
    "id": "x027",
    "principalParts": "ἀμύνω, ἀμυνῶ, ἤμυνα · μέση ἀμύνομαι, ἀμυνοῦμαι, ἠμυνάμην",
    "derivatives": [
      "ἀμυντήρ",
      "ἀμυντήριος"
    ],
    "sourceNotes": "05.2 Αρχικοί Χρόνοι, 05.1 Γραμματική και Οικονόμου δίνουν ρητά: ἀμύνω, ἤμυνον, ἀμυνῶ, ἤμυνα, καθώς και ἀμύνομαι, ἀμυνοῦμαι, ἠμυνάμην και το απαρέμφατο ἀμῦναι.",
    "notes": "Νέο manual λήμμα με expanded active και middle coverage χωρίς τεχνητή προσθήκη μη βεβαιωμένου perfect layer."
  }
];
  for(const item of additions){
    const key=(item.lemma||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase();
    if(!existing.has(key)) window.LEXICON_AUGMENT.extraVerbs.push(item);
  }
})();
