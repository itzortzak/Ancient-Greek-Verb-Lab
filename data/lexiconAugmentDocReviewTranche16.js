(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => (v.lemma||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase()));
  const additions = [
  {
    "lemma": "αἰτιῶμαι",
    "gloss": "κατηγορώ, αποδίδω ευθύνη",
    "coverage": "manual",
    "source": "manual-pdf",
    "family": "deponent-mixed",
    "id": "x030",
    "principalParts": "αἰτιάομαι-ῶμαι, ᾐτιώμην, αἰτιάσομαι, ᾐτιασάμην, ᾐτίαμαι · παθ. ᾐτιάθην",
    "derivatives": [
      "αἰτία",
      "αἰτίαμα"
    ],
    "sourceNotes": "Αρχικοί χρόνοι και μικτό αποθετικό σύστημα επιβεβαιωμένα στο 05.2 Αρχικοί Χρόνοι, στον Οικονόμου και στον Τζαρτζάνο.",
    "notes": "Νέο manual tranche με έμφαση στα απαρέμφατα, τις μετοχές και στη διάκριση μέσου και παθητικού αορίστου."
  },
  {
    "lemma": "οἴχομαι",
    "gloss": "φεύγω γρήγορα, χάνομαι, πεθαίνω",
    "coverage": "manual",
    "source": "manual-pdf",
    "family": "defective-deponent",
    "id": "x031",
    "principalParts": "οἴχομαι, ᾠχόμην, οἰχήσομαι",
    "derivatives": [
      "οἴχησις",
      "οἰχητέον"
    ],
    "sourceNotes": "Defective αποθετικό με σημασία παρακειμένου στον ενεστώτα, βεβαιωμένο στον Οικονόμου και στο 05.2 Αρχικοί Χρόνοι.",
    "notes": "Συντηρητική χειροκίνητη κλίση χωρίς μη βεβαιωμένους αορίστους ή passive layer."
  },
  {
    "lemma": "ψαύω",
    "gloss": "αγγίζω, ψηλαφώ",
    "coverage": "manual",
    "source": "manual-pdf",
    "family": "regular-vowel-stem",
    "id": "x032",
    "principalParts": "ψαύω, ἔψαυον, ψαύσω, ἔψαυσα",
    "derivatives": [
      "ἄψαυστος"
    ],
    "sourceNotes": "Βεβαιωμένος αόριστος και θεματική ανάλυση στον Οικονόμου· η manual πολιτική κρατά ασφαλή active-core layer χωρίς ατεκμηρίωτο passive synthesis.",
    "notes": "Αντικαθιστά εσφαλμένες passive εξομοιώσεις του generated layer και κρατά ασφαλή αναλυτική active κλίση."
  },
  {
    "lemma": "ὑβρίζω",
    "gloss": "συμπεριφέρομαι με ύβρη, ατιμάζω, προσβάλλω",
    "coverage": "manual",
    "source": "manual-pdf",
    "family": "contracted-izo",
    "id": "x033",
    "principalParts": "ὑβρίζω, ὕβριζον, ὑβριῶ, ὕβρισα · παθ. ὑβρισθήσομαι, ὑβρίσθην",
    "derivatives": [
      "ὕβρις",
      "ὑβριστής"
    ],
    "sourceNotes": "Ο συμβατικός μέλλοντας και ο παθητικός μέλλοντας/αόριστος επιβεβαιώνονται στη Γραμματική Πατάκη/Παπανικολάου και στο Binder1.",
    "notes": "Νέο manual tranche με ασφαλή contracted future και πλήρη non-finite layer."
  },
  {
    "lemma": "βιάζομαι",
    "gloss": "βιάζω, ενεργώ με βία, πιέζομαι",
    "coverage": "manual",
    "source": "manual-pdf",
    "family": "deponent-mixed",
    "id": "x034",
    "principalParts": "βιάζομαι, ἐβιαζόμην, βιάσομαι, βιασθήσομαι, ἐβιασάμην, ἐβιάσθην, βεβίασμαι",
    "derivatives": [
      "βία",
      "βιασμός"
    ],
    "sourceNotes": "Το πλήρες middle/passive system επιβεβαιώνεται στο 05.2 Αρχικοί Χρόνοι και στον Οικονόμου ως μικτό αποθετικό.",
    "notes": "Νέο manual tranche με διάκριση μέσου και παθητικού αορίστου και με νέα κάλυψη απαρεμφάτων/μετοχών."
  },
  {
    "lemma": "συλλέγω",
    "gloss": "συγκεντρώνω, συλλέγω",
    "coverage": "manual",
    "source": "manual-pdf",
    "family": "compound-irregular",
    "id": "x035",
    "principalParts": "συλλέγω, συνέλεγον, συλλέξω, συνέλεξα, συνείλοχα · μ/π συλλέγομαι, συνελεγόμην, συλλέξομαι, συνελεξάμην, συλ-λεγήσομαι/συλλεχθήσομαι, συνελέγην/συνελέχθην, συνείλεγμαι",
    "derivatives": [
      "σύλλογος",
      "συλλογή"
    ],
    "sourceNotes": "Αναλυτικά βεβαιωμένο στον Οικονόμου και στο 05.2 Αρχικοί Χρόνοι, με α΄ και β΄ παθητικό αόριστο/μέλλοντα.",
    "notes": "Κρίσιμο compound-irregular λήμμα με augment μετά την πρόθεση και διπλό passive layer."
  },
  {
    "lemma": "ψεύδομαι",
    "gloss": "λέω ψέματα, εξαπατώ / εξαπατώμαι",
    "coverage": "manual",
    "source": "manual-pdf",
    "family": "deponent-mixed",
    "id": "x036",
    "principalParts": "ψεύδομαι, ἐψευδόμην, ψεύσομαι, ψευσθήσομαι, ἐψευσάμην, ἐψεύσθην, ἔψευσμαι",
    "derivatives": [
      "ψεῦδος",
      "ψευδής"
    ],
    "sourceNotes": "Βεβαιωμένα principal parts στο 05.2 Αρχικοί Χρόνοι και στον Οικονόμου.",
    "notes": "Νέο manual tranche με ρητή διάκριση μέσου αορίστου (ενεργητική σημασία) και παθητικού αορίστου."
  },
  {
    "lemma": "ψηφίζω",
    "gloss": "αποφασίζω με ψήφο, ψηφίζω",
    "coverage": "manual",
    "source": "manual-pdf",
    "family": "contracted-izo-mixed",
    "id": "x037",
    "principalParts": "ψηφίζω, ἐψήφιζον, ψηφιῶ, ἐψήφισα, ἐψήφικα · μ/π ψηφίζομαι, ἐψηφιζόμην, ψηφιοῦμαι, ἐψηφισάμην, ψηφισθήσομαι, ἐψηφίσθην, ἐψήφισμαι",
    "derivatives": [
      "ψῆφος",
      "ψήφισμα"
    ],
    "sourceNotes": "Το ενεργητικό και middle/passive contracted system επιβεβαιώνεται στο 05.2 Αρχικοί Χρόνοι και στη Γραμματική Πατάκη.",
    "notes": "Νέο manual tranche με πλήρη non-finite layer και contracted future handling."
  },
  {
    "lemma": "ἀγωνίζομαι",
    "gloss": "αγωνίζομαι, μάχομαι, κοπιάζω",
    "coverage": "manual",
    "source": "manual-pdf",
    "family": "deponent-contracted-izo",
    "id": "x038",
    "principalParts": "ἀγωνίζομαι, ἠγωνιζόμην, ἀγωνιοῦμαι, ἀγωνισθήσομαι, ἠγωνισάμην, ἠγωνίσθην",
    "derivatives": [
      "ἀγών",
      "ἀγώνισμα"
    ],
    "sourceNotes": "Το deponent system με συμβατικό μέλλοντα και παθητικό μέλλοντα/αόριστο επιβεβαιώνεται στο 05.2 Αρχικοί Χρόνοι και στον Οικονόμου.",
    "notes": "Νέο manual tranche με ασφαλή μέση κλίση και συμπλήρωση απαρεμφάτων/μετοχών."
  }
];
  for(const item of additions){
    const key=(item.lemma||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
    window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
    window.LEXICON_AUGMENT.verbMeta[item.lemma]=item;
    if(!existing.has(key)) window.LEXICON_AUGMENT.extraVerbs.push(item);
  }
})();
