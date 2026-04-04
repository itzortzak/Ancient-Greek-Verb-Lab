(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ὄμνυμι",
    "gloss": "ορκίζομαι, δίνω όρκο",
    "coverage": "manual",
    "source": "05.1-deiknumi-pattern+05.2-principal-parts+tzartzanos+oikonomou+binder4",
    "family": "mi-verb-consonantal-in-nu",
    "id": "x086",
    "principalParts": "ὄμνυμι / ὀμνύω, ὤμνυν / ὤμνυον, ὀμοῦμαι, ὤμοσα, ὀμώμοκα, ὠμωμόκειν, ὄμνυμαι, ὠμνύμην, ὠμοσάμην, ὀμοσθήσομαι, ὠμόσθην / ὠμόθην, ὀμώμοσμαι / ὀμώμοσται, ὠμωμόσμην / ὠμώμοτο",
    "derivatives": [
      "ἀνώμοτος",
      "ἀπώμοτος",
      "συνωμότης",
      "συνωμοσία",
      "ὅρκος"
    ],
    "sourceNotes": "Το 05.1 δηλώνει ότι τα συμφωνόληκτα ρήματα σε -μι, όπως δείκνυμι, μείγνυμι και ὄμνυμι, διαφέρουν από τα βαρύτονα σε -ω μόνο στον σχηματισμό του ενεστώτα και του παρατατικού της ενεργητικής και μέσης/παθητικής φωνής. Το 05.2 βεβαιώνει ρητά τον άξονα ὄμνυμι / ὀμνύω, ὤμνυν / ὤμνυον, ὀμοῦμαι, ὤμοσα, ὀμώμοκα, ὠμωμόκειν, ὄμνυμαι, ὠμνύμην, ὠμοσάμην, ὀμοσθήσομαι, ὠμόσθην / ὠμόθην, ὀμώμοσμαι. Ο Τζαρτζάνος και ο Οικονόμου επιβεβαιώνουν τον ίδιο principal-parts πυρήνα, προσθέτοντας ιδίως τη contracted σειρά του μέσου μέλλοντα (ὀμοῦμαι, -εῖ, -εῖται κτλ.) και τη perfect middle/passive παράδοση ὀμώμοσται, ὠμώμοτο, ὀμωμοσμένος. Το Binder4 επιβεβαιώνει τον school-sheet anchor ὀμώμοσμαι / ὠμωμόσμην.",
    "notes": "Tranche 52: νέο curated school-core layer για το ὄμνυμι. Ο present/imperfect άξονας αναπτύσσεται κατά το δείκνυμι / δείκνυμαι. Ο contracted middle future ὀμοῦμαι αναπτύσσεται συντηρητικά μόνο στην οριστική, το απαρέμφατο και τη μετοχή. Ο αόριστος ενεργητικής, ο μέσος αόριστος και ο παθητικός μέλλοντας / αόριστος αναπτύσσονται από ρητούς principal parts. Τα perfect/pluperfect layers κρατήθηκαν μόνο ως source-backed anchors, επειδή οι πηγές διασώζουν και 1sg και 3sg middle/passive παραδόσεις (ὀμώμοσμαι / ὀμώμοσται, ὠμωμόσμην / ὠμώμοτο)."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
