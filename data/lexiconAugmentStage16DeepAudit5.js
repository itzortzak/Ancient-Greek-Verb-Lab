(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  const items = [
  {
    "lemma": "ὄμνυμι",
    "gloss": "ορκίζομαι, δίνω όρκο",
    "coverage": "manual",
    "source": "05.1-deiknumi-pattern+05.2-principal-parts+tzartzanos+oikonomou+binder4",
    "family": "mi-verb-consonantal-in-nu",
    "id": "x-stage16-ομνυμι",
    "principalParts": "ὄμνυμι / ὀμνύω, ὤμνυν / ὤμνυον, ὀμοῦμαι, ὤμοσα, ὀμώμοκα, ὠμωμόκειν, ὄμνυμαι, ὠμνύμην, ὠμοσάμην, ὀμοσθήσομαι, ὠμόσθην / ὠμόθην, ὀμώμοσμαι / ὀμώμοσται, ὠμωμόσμην / ὠμώμοτο",
    "derivatives": [
      "ἀνώμοτος",
      "ἀπώμοτος",
      "συνωμότης",
      "συνωμοσία",
      "ὅρκος"
    ],
    "sourceNotes": "Το 05.1 δηλώνει ότι τα συμφωνόληκτα ρήματα σε -μι, όπως δείκνυμι, μείγνυμι και ὄμνυμι, διαφέρουν από τα βαρύτονα σε -ω μόνο στον σχηματισμό του ενεστώτα και του παρατατικού της ενεργητικής και μέσης/παθητικής φωνής. Το 05.2 βεβαιώνει ρητά τον άξονα ὄμνυμι / ὀμνύω, ὤμνυν / ὤμνυον, ὀμοῦμαι, ὤμοσα, ὀμώμοκα, ὠμωμόκειν, ὄμνυμαι, ὠμνύμην, ὠμοσάμην, ὀμοσθήσομαι, ὠμόσθην / ὠμόθην, ὀμώμοσμαι. Ο Τζαρτζάνος και ο Οικονόμου επιβεβαιώνουν τον ίδιο principal-parts πυρήνα, προσθέτοντας ιδίως τη contracted σειρά του μέσου μέλλοντα (ὀμοῦμαι, -εῖ, -εῖται κτλ.) και τη perfect middle/passive παράδοση ὀμώμοσται, ὠμώμοτο, ὀμωμοσμένος. Το Binder4 επιβεβαιώνει τον school-sheet anchor ὀμώμοσμαι / ὠμωμόσμην.",
    "notes": "Stage 16: deep manual audit promotion for ὄμνυμι."
  },
  {
    "lemma": "κεῖμαι",
    "gloss": "κείτομαι, είμαι τοποθετημένος",
    "coverage": "manual",
    "source": "05.1-grammar+binder3+oikonomou",
    "family": "stative-perfective-present",
    "id": "x-stage16-κειμαι",
    "principalParts": "κεῖμαι, ἐκείμην, κείσομαι",
    "derivatives": [
      "κείμενος",
      "κειμήλιον",
      "κοίτη"
    ],
    "sourceNotes": "Το 05.1 ΓΡΑΜΜΑΤΙΚΗ και το Binder3 δίνουν αναλυτικό σχολικό πίνακα για το κεῖμαι: present-value indicative, μονολεκτικούς και περιφραστικούς τύπους της υποτακτικής/ευκτικής, προστακτικές, παρατατικό με σημασία υπερσυντελίκου και regular future κείσομαι. Ο Οικονόμου επιβεβαιώνει τους βασικούς μονολεκτικούς τύπους κέηται, κέησθε, κέωνται, κέοιτο, κέοιντο, καθώς και τον μελλοντικό άξονα κείσομαι.",
    "notes": "Stage 16: deep manual audit promotion for κεῖμαι."
  },
  {
    "lemma": "κάθημαι",
    "gloss": "κάθομαι, είμαι καθισμένος",
    "coverage": "manual",
    "source": "05.1-grammar+oikonomou+internal-review",
    "family": "stative-seated-compound",
    "id": "x-stage16-καθημαι",
    "principalParts": "κάθημαι, καθήσομαι/καθεδοῦμαι, ἐκαθέσθην",
    "derivatives": [
      "ἧμαι",
      "καθέζομαι"
    ],
    "sourceNotes": "Το tranche 20 στηρίζεται πρωτίστως στον πίνακα του 05.1 ΓΡΑΜΜΑΤΙΚΗ για το κάθημαι και συμπληρώνει συντηρητικά το σχολικό manual layer με present/imperfect, future middle, passive aorist, απαρέμφατα και μετοχές.",
    "notes": "Stage 16: deep manual audit promotion for κάθημαι."
  },
  {
    "lemma": "δύναμαι",
    "gloss": "μπορώ, έχω τη δύναμη",
    "coverage": "manual",
    "source": "legacy-bootstrap+tranche3",
    "family": "deponent-high-value",
    "id": "x-stage16-δυναμαι",
    "principalParts": "δύναμαι, δυνήσομαι, —, —, δεδύνημαι, ἐδυνήθην",
    "derivatives": [
      "δύναμις",
      "δυνατός"
    ],
    "sourceNotes": "Το tranche 23 αξιοποιεί το ήδη ενσωματωμένο manual school-core layer του bootstrap/tranche3 και προχωρεί σε operational re-indexing, ώστε οι τύποι του λήμματος να αναγνωρίζονται με σταθερό deponent tagging.",
    "notes": "Stage 16: deep manual audit promotion for δύναμαι."
  }
];
  function norm(s){ return (s||"" ).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ς/g,"σ").toLowerCase(); }
  const existing = new Map(window.LEXICON_AUGMENT.extraVerbs.map((v,i)=>[norm(v.lemma), i]));
  for(const item of items){
    window.LEXICON_AUGMENT.verbMeta[item.lemma] = Object.assign({}, window.LEXICON_AUGMENT.verbMeta[item.lemma]||{}, item);
    const key = norm(item.lemma);
    if(existing.has(key)) window.LEXICON_AUGMENT.extraVerbs[existing.get(key)] = Object.assign({}, window.LEXICON_AUGMENT.extraVerbs[existing.get(key)]||{}, item);
    else { existing.set(key, window.LEXICON_AUGMENT.extraVerbs.length); window.LEXICON_AUGMENT.extraVerbs.push(item); }
  }
})();
