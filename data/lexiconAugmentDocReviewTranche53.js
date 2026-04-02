(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
{
  "lemma": "ζώννυμι",
  "gloss": "ζώνω",
  "coverage": "manual",
  "source": "oikonomou+tzartzanos+05.2-deiknumi-pattern",
  "family": "mi-verb-consonantal-in-nnnu",
  "id": "x087",
  "principalParts": "ζώννυμι / ζωννύω, ἔζωσα, ἔζωσμαι ἢ ἔζωμαι",
  "derivatives": [
    "ζῶμα",
    "διάζωμα",
    "ζωστήρ",
    "ἄζωστος"
  ],
  "sourceNotes": "Ο Οικονόμου και ο Τζαρτζάνος λημματογραφούν το ζώννυμι ως σιγμόληκτο ρήμα σε -ννυμι από το ζωσ-νυ-, με ρητό αόριστο ἔζωσα και παθητικό παρακείμενο ἔζωσμαι ἢ ἔζωμαι. Ο Οικονόμου δηλώνει επίσης ότι τα συμφωνόληκτα ρήματα σε -μι διαφέρουν από τα -ω μόνο στον ενεστώτα και στον παρατατικό και κλίνονται εκεί κατά το δείκνυμι. Το 05.2 επιβεβαιώνει το λήμμα και τη σημασία «ζώνω».",
  "notes": "Tranche 53: αντικατάσταση του υπερδιογκωμένου imported layer του ζώννυμι με συντηρητικό curated school-core paradigm. Αναπτύσσεται πλήρως μόνο ο present/imperfect άξονας ενεργητικής και μέσης/παθητικής κατά το δείκνυμι και ο βεβαιωμένος αόριστος ενεργητικής από το ἔζωσα. Δεν ανοίγονται future, middle aorist, passive aorist ή active perfect layers, επειδή οι διαθέσιμες σχολικές πηγές δεν τα δίνουν ρητά για το ίδιο το λήμμα. Το ἔζωσμαι / ἔζωμαι κρατιέται μόνο ως source-backed anchor του παθητικού παρακειμένου."
}
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
