(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "πήγνυμι",
    "gloss": "καρφώνω, στήνω, παγώνω",
    "coverage": "manual",
    "source": "05.1-deiknumi-pattern+05.2-lemma-list+tzartzanos+oikonomou+binder1",
    "family": "mi-verb-consonantal-in-nu",
    "id": "x084",
    "principalParts": "πήγνυμι / πηγνύω, ἐπήγνυν / ἐπήγνυον, ἔπηξα, πήγνυμαι, ἐπηγνύμην, ἐπηξάμην, ἐπήχθην, παγήσομαι, ἐπάγην, πέπηγα, ἐπεπήγειν",
    "derivatives": [
      "πηκτός",
      "πῆξις",
      "πῆγμα",
      "πάγος",
      "παγίς",
      "πάγη"
    ],
    "sourceNotes": "Το 05.1 δίνει το υπόδειγμα του δείκνυμι / δείκνυμαι για τον present και imperfect πυρήνα των συμφωνόληκτων σε -νυμι και κατατάσσει ρητά το πήγνυμι στα συνηθέστερα της ομάδας. Ο Τζαρτζάνος και ο Οικονόμου δίνουν ρητά: ἔπηξα, ἐπηγνύμην, ἐπηξάμην, παγήσομαι, ἐπάγην, πέπηγα, ἐπεπήγειν. Το Binder1 προσθέτει και τον παθητικό αόριστο α΄ ἐπήχθην. Το 05.2 δίνει το λήμμα με τη σημασία «καρφώνω, στήνω, παγώνω».",
    "notes": "Tranche 50: νέο curated school-core paradigm για το πήγνυμι. Ο present/imperfect άξονας αναπτύσσεται κατά το δείκνυμι. Ο αόριστος ενεργητικής, ο μέσος αόριστος, ο παθητικός αόριστος α΄ και β΄ και ο παθητικός μέλλοντας οργανώνονται από ρητούς principal parts. Ο παρακείμενος και ο υπερσυντέλικος κρατήθηκαν συνειδητά μόνο ως anchors (πέπηγα, ἐπεπήγειν), χωρίς επιθετική πλήρη ανάπτυξη μη βεβαιωμένου layer."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
