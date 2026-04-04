(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "στρώννυμι",
    "gloss": "στρώνω, απλώνω, ετοιμάζω στρώσιμο",
    "coverage": "manual",
    "source": "05.2-principal-parts+oikonomou+tzartzanos",
    "family": "multistem-nymi",
    "id": "x099",
    "principalParts": "στρώννυμι / στρωννύω / στορέννυμι / στόρνυμι, ἐστρώννυν, στρώσω / στορέσω / στορῶ, ἔστρωσα / ἐστόρεσα, ἔστρωκα, ἐστρώκειν · μ/π στόρνυμαι, ἐστορνύμην, —, ἐστρωσάμην / ἐστορεσάμην, στρωθήσομαι, ἐστρώθην / ἐστορέσθην, ἔστρωμαι / ἐστόρεσμαι, ἐστρώμην / ἐστορέσμην",
    "derivatives": [
      "στρωτός",
      "ἄστρωτος",
      "στρῶμα",
      "στρωμνή"
    ],
    "sourceNotes": "Το 05.2 Αρχικοί Χρόνοι δίνει ρητά το multistem σύστημα στρώννυμι / στρωννύω / στορέννυμι / στόρνυμι με present middle στόρνυμαι, imperfect ἐστρώννυν και ἐστορνύμην, future στρώσω / στορέσω / στορῶ, aorist ἐστόρεσα / ἔστρωσα, perfect ἔστρωκα, pluperfect ἐστρώκειν, middle aorist ἐστρωσάμην / ἐστορεσάμην, passive future στρωθήσομαι, passive aorist ἐστρώθην / ἐστορέσθην, perfect middle/passive ἔστρωμαι / ἐστόρεσμαι και pluperfect ἐστρώμην / ἐστορέσμην. Ο Οικονόμου επιβεβαιώνει το διπλό stem στρω-/στορ-, τον παρατατικό ἐστρώννυν, τον αόριστο ἐστόρεσα και το middle/passive anchor -στόρνυμαι, ενώ ο Τζαρτζάνος δίνει το νυμι πρότυπο που στηρίζει την ανάπτυξη του present/imperfect layer.",
    "notes": "Tranche 66: νέο expanded source-backed multistem νυμι layer για το στρώννυμι. Το παλαιότερο tranche-9 conservative layer αντικαθίσταται από πληρέστερο school-core paradigm: πλήρες present/imperfect active και middle/passive, primary future active και passive, primary aorist active/middle/passive με εγκλίσεις, ρητή διατήρηση των βασικών εναλλακτικών stems στορ-/στορεσ-, safe perfect/pluperfect anchors, νέο non-finite layer και form-index replacement για το λήμμα."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set([...(window.LEXICON_AUGMENT.extraVerbs||[]).map(v => norm(v.lemma)), ...((window.VERB_DATA||[]).map(v => norm(v.lemma)))]);
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
