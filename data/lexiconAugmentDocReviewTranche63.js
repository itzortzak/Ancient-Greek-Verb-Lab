(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
{
  "lemma": "δείκνυμι",
  "gloss": "δείχνω, φανερώνω",
  "coverage": "manual",
  "source": "05.1-nymi-paradigm+05.2-principal-parts+oikonomou+tzartzanos",
  "family": "nu-mi-verb",
  "id": "x096",
  "principalParts": "δείκνυμι / δεικνύω, ἐδείκνυν / ἐδείκνυον, δείξω, ἔδειξα, δέδειχα, ἐδεδείχειν · μέση/παθητική: δείκνυμαι, ἐδεικνύμην, δείξομαι, ἐδειξάμην, δειχθήσομαι, ἐδείχθην, δέδειγμαι",
  "derivatives": [
    "δεῖγμα",
    "δεικτικός",
    "ἀπόδειξις",
    "ἐπιδεικτικός"
  ],
  "sourceNotes": "Το 05.1 Γραμματική δίνει ρητά την πλήρη κλίση του δείκνυμι και του δείκνυμαι σε ενεστώτα και παρατατικό, με σημείωση ότι ο μέλλοντας, ο αόριστος και ο παρακείμενος σχηματίζονται όπως το λύω και το πέπραγμαι αντίστοιχα. Το 05.2 Αρχικοί Χρόνοι δίνει ρητά τους βασικούς χρόνους: ἐδείκνυν / ἐδείκνυον, δείξω, ἔδειξα, δέδειχα, ἐδεδείχειν, καθώς και στη μέση/παθητική: δείκνυμαι, ἐδεικνύμην, δείξομαι, δειχθήσομαι, ἐδειξάμην, ἐδείχθην, δέδειγμαι. Ο Οικονόμου επιβεβαιώνει τον ίδιο άξονα principal parts.",
  "notes": "Tranche 63: νέο expanded source-backed school-core paradigm για το δείκνυμι. Καλύπτει πλήρες present/imperfect active και middle/passive κατά το 05.1, future active και middle, passive future, aorist active/middle/passive, conservative perfect-active core και safe perfect/pluperfect middle-passive anchors, μαζί με νέα απαρέμφατα, μετοχές και form-index replacement."
}
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
