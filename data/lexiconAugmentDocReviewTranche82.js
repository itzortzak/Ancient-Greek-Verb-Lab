(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "λέγω",
    "gloss": "λέω, μιλώ, εκφράζω",
    "coverage": "manual",
    "source": "05.2-principal-parts+05.1-second-aorist+oikonomou+tzartzanos+Binder1",
    "family": "multistem-irregular-saying-verb",
    "id": "x058",
    "principalParts": "λέγω, ἔλεγον, λέξω / ἐρῶ, ἔλεξα / εἶπα, εἶπον, εἴρηκα · λέγομαι, ἐλεγόμην, λεχθήσομαι / ῥηθήσομαι, ἐλέχθην / ἐρρήθην, εἴρημαι, εἰρήμην, εἰρήσομαι",
    "derivatives": [
      "λόγος",
      "λέξις",
      "ῥῆμα",
      "ῥήτωρ",
      "λεκτός"
    ],
    "sourceNotes": "Το tranche 82 στηρίζεται στους ρητούς αρχικούς χρόνους του 05.2 Αρχικοί Χρόνοι για το λέγω / λέγομαι — λέξω / ἐρῶ, ἔλεξα / εἶπα, εἶπον, εἴρηκα · λεχθήσομαι / ῥηθήσομαι, ἐλέχθην / ἐρρήθην, λέλεγμαι / εἴρημαι, εἰρήμην —, στον Οικονόμου για την πλήρη παρουσίαση του πολυστέμματος profile και για τη ρητή παρατήρηση ότι ο αόριστος α΄ εἶπα δίνει εύχρηστους τύπους όπου ο β΄ εἶπον είναι ελλειπτικός, στο 05.1 για τη σχολική διάκριση λέγω → εἶπον και την προστακτική εἰπέ, και στον Τζαρτζάνο για την επιβεβαίωση του μέλλοντα ἐρῶ / λέξω και του perfect-passive axis εἴρημαι.",
    "notes": "Tranche 82: νέο expanded source-backed multistem saying-verb layer για το λέγω. Το παλαιό χαμηλής ανάλυσης manual core αντικαθίσταται από πληρέστερο school-core paradigm: full present/imperfect active και middle-passive με moods, dual future active axis λέξω / ἐρῶ, β΄ aorist active με useful α΄ alternants και parallel ἔλεξα indicative anchors, dual passive future/aorist indicative axes λεχθήσομαι / ῥηθήσομαι και ἐλέχθην / ἐρρήθην, conservative perfect/pluperfect active and middle-passive core, future perfect εἰρήσομαι, refreshed infinitives/participles και form-index replacement που απομακρύνει τα legacy generated buckets από την προτεραιότητα Recognition / Conjugation."
  }
];
  const norm = s => (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set([...(window.LEXICON_AUGMENT.extraVerbs||[]).map(v => norm(v.lemma)), ...((window.VERB_DATA||[]).map(v => norm(v.lemma)))]);
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
