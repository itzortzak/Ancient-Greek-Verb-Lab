(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "σβέννυμι",
    "gloss": "σβήνω, σβήνω τελείως, καταπνίγω, εξαλείφω",
    "coverage": "manual",
    "source": "oikonomou+tzartzanos+05.2+05.1-deiknumi-pattern",
    "family": "mi-verb-consonantal-in-nnnu",
    "id": "x089",
    "principalParts": "σβέννυμι / σβεννύω, ἐσβέννυν / ἐσβέννυον, σβέσω, ἔσβεσα · σβέννυμαι, ἐσβεννύμην, σβήσομαι, σβεσθήσομαι, ἐσβεσάμην, ἔσβην, ἐσβέσθην, ἔσβηκα / ἔσβεσμαι, ἐσβήκειν / ἐσβέσμην",
    "derivatives": [
      "σβέσις",
      "σβεστός",
      "ἄσβεστος"
    ],
    "sourceNotes": "Το 05.2 δίνει ρητά για το σβέννυμι / σβεννύω τους άξονες ἐσβέννυν / ἐσβέννυον, σβέσω, ἔσβεσα και στη μέση/παθητική φωνή σβέννυμαι, ἐσβεννύμην, σβήσομαι, σβεσθήσομαι, ἐσβεσάμην, ἔσβην, ἐσβέσθην, ἔσβηκα / ἔσβεσμαι, ἐσβήκειν / ἐσβέσμην. Ο Οικονόμου και ο Τζαρτζάνος επιβεβαιώνουν το λήμμα ως σιγμόληκτο σε -ννυμι με present/imperfect κατά το δείκνυμι, ρητό αόριστο ἔσβεσα, μέσο μέλλοντα σβήσομαι, παθητικό αόριστο ἐσβέσθην και ενεργητικό αόριστο β΄ ἔσβην με παθητική σημασία.",
    "notes": "Tranche 55: νέο curated school-core layer για το σβέννυμι. Αναπτύσσονται πλήρως present/imperfect ενεργητικής και μέσης/παθητικής κατά το δείκνυμι, μέλλοντας ενεργητικής από το σβέσω, μέλλοντας μέσης από το σβήσομαι, παθητικός μέλλοντας από το σβεσθήσομαι, αόριστος ενεργητικής και μέσης από το ἔσβεσα / ἐσβεσάμην και παθητικός αόριστος από το ἐσβέσθην. Ο αόριστος β΄ ἔσβην και τα perfect/pluperfect layers κρατούνται συντηρητικά μόνο ως source-backed anchors. Στο form-index patch αφαιρείται το παλαιό inflated imported bucket του λήμματος και αντικαθίσταται από το νέο curated layer."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
