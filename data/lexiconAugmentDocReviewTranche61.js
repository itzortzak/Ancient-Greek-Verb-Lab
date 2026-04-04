(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
  "lemma": "ῥώννυμι",
  "gloss": "ενδυναμώνω, ενισχύω",
  "coverage": "manual",
  "source": "05.1-deiknumi-pattern+05.2-principal-parts+tzartzanos+oikonomou",
  "family": "mi-verb-consonantal-in-nu",
  "id": "x094",
  "principalParts": "ῥώννυμι / ῥωννύω, ἐρρώνυν, ῥώσω, ἔρρωσα, ῥωσθήσομαι, ἐρρώσθην, ἔρρωμαι, ἐρρώμην",
  "derivatives": [
    "ῥώμη",
    "ῥῶσις",
    "ἄρρωστος",
    "εὔρωστος"
  ],
  "sourceNotes": "Το 05.1 δίνει το κλιτικό υπόδειγμα των συμφωνόληκτων ρημάτων σε -μι κατά το δείκνυμι για present/imperfect ενεργητικής και μέσης-παθητικής. Το 05.2 Αρχικοί Χρόνοι δίνει ρητά για το ῥώννυμι / ῥωννύω: ἐρρώνυν, ἐρρωννύμην, ῥώσω, ἔρρωσα, ῥωσθήσομαι, ἐρρώσθην, ἔρρωμαι, ἐρρώμην. Ο Τζαρτζάνος και ο Οικονόμου επιβεβαιώνουν τον ίδιο βασικό άξονα και σημειώνουν ρητά ότι ο παθητικός αόριστος χρησιμοποιείται και με μέση σημασία, ενώ ο Τζαρτζάνος μαρτυρεί και τη μετοχή ἐρρωμένος.",
  "notes": "Tranche 61: νέο expanded source-backed school-core paradigm για το ῥώννυμι. Ο present/imperfect πυρήνας κλίνεται κατά το δείκνυμι, ο future και ο aorist active αναπτύσσονται συντηρητικά από το ῥώσω / ἔρρωσα, ο passive future και ο passive aorist από το ῥωσθήσομαι / ἐρρώσθην, ενώ ο perfect και ο pluperfect κρατιούνται ως βεβαιωμένοι anchors με την ειδικά μαρτυρημένη προστακτική ἔρρωσο και τη μετοχή ἐρρωμένος."
}
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
