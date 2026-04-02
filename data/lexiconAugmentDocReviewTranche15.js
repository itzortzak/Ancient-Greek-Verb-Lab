(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => (v.lemma||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ς/g,"σ").toLowerCase()));
  const additions = [
  {
    "lemma": "ἀναλίσκω",
    "gloss": "ξοδεύω, δαπανώ, αναλώνω",
    "coverage": "manual",
    "source": "manual-pdf",
    "family": "mixed-contracted",
    "id": "x028",
    "principalParts": "ἀναλίσκω/ἀναλῶ, ἀνήλισκον/ἀνήλουν, ἀναλώσω, ἀνήλωσα, ἀνήλωκα · μ/π ἀναλίσκομαι, ἀνηλισκόμην/ἀνηλούμην, ἀναλωθήσομαι, ἀνηλώθην, ἀνήλωμαι",
    "derivatives": [
      "ἀνάλωμα",
      "ἀνάλωσις",
      "ἀναλωτής",
      "ἀναλωτέος"
    ],
    "sourceNotes": "Οικονόμου και Τζαρτζάνος δίνουν ρητά: ἀναλίσκω/ἀναλόω-ῶ, ἀνήλισκον/ἀνήλουν, ἀναλώσω, ἀνήλωσα, ἀνήλωκα · μέση/παθητική ἀναλίσκομαι, ἀνηλισκόμην/ἀνηλούμην, ἀναλωθήσομαι, ἀνηλώθην, ἀνήλωμαι.",
    "notes": "Από το v1.5.20 το λήμμα περνά σε χειροκίνητο school-core tranche με καθαρή ορατή κλίση και νέα non-finite κάλυψη."
  },
  {
    "lemma": "ἀποκρίνομαι",
    "gloss": "απαντώ, αποκρίνομαι",
    "coverage": "manual",
    "source": "manual-existing",
    "family": "deponent-middle",
    "id": "x029",
    "principalParts": "ἀποκρίνομαι, ἀποκρινοῦμαι, ἀπεκρινάμην",
    "derivatives": [
      "ἀπόκρισις",
      "ἀποκριτέος"
    ],
    "sourceNotes": "Εμβάθυνση του ήδη υπάρχοντος manual λήμματος της εφαρμογής, με πλήρωση του present/imperfect/future/aorist middle core και μη προσωπικών τύπων χωρίς προσθήκη μη βεβαιωμένου perfect layer.",
    "notes": "Το λήμμα διατηρεί συντηρητική deponent πολιτική."
  }
];
  for(const item of additions){
    const key=(item.lemma||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ς/g,"σ").toLowerCase();
    window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
    window.LEXICON_AUGMENT.verbMeta[item.lemma]=item;
    if(!existing.has(key)) window.LEXICON_AUGMENT.extraVerbs.push(item);
  }
})();
