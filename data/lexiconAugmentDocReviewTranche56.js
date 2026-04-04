(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "σκεδάννυμι",
    "gloss": "σκορπίζω, διασπείρω",
    "coverage": "manual",
    "source": "05.2+oikonomou+tzartzanos+05.1-deiknumi-pattern+thucydides-index",
    "family": "mi-verb-consonantal-in-nnnu",
    "id": "x090",
    "principalParts": "σκεδάννυμι / σκεδαννύω, ἐσκεδάννυν / ἐσκεδάννυον, σκεδῶ / σκεδάσω, ἐσκέδασα · σκεδάννυμαι, ἐσκεδαννύμην, ἐσκεδασάμην, σκεδασθήσομαι, ἐσκεδάσθην, ἐσκέδασμαι, ἐσκεδάσμην",
    "derivatives": [
      "διασκεδάννυμι"
    ],
    "sourceNotes": "Το 05.2 δίνει ρητά για το σκεδάννυμι / σκεδαννύω τους άξονες ἐσκεδάννυν / ἐσκεδάννυον, σκεδῶ / σκεδάσω, ἐσκέδασα και στη μέση/παθητική φωνή σκεδάννυμαι, ἐσκεδαννύμην, ἐσκεδασάμην, σκεδασθήσομαι, ἐσκεδάσθην, ἐσκέδασμαι, ἐσκεδάσμην. Το 05.1, ο Οικονόμου και ο Τζαρτζάνος επιτρέπουν συντηρητική ανάπτυξη present/imperfect κατά το δείκνυμι για τα σιγμόληκτα σε -ννυμι. Ο Index of Verb Forms in Thucydides επιβεβαιώνει επιπλέον τη χρήση των σκεδάννυσθαι και σκεδασμένος/σκεδασμένων.",
    "notes": "Tranche 56: νέο curated school-core layer για το σκεδάννυμι. Αναπτύσσονται πλήρως present/imperfect ενεργητικής και μέσης/παθητικής κατά το δείκνυμι, future active από το σκεδάσω με συντηρητικό anchor το σκεδῶ, aorist active και middle από το ἐσκέδασα / ἐσκεδασάμην, passive future και passive aorist από το σκεδασθήσομαι / ἐσκεδάσθην, ενώ το perfect middle/passive κρατιέται στο ασφαλές core του ἐσκέδασμαι / ἐσκεδάσμην με source-backed participial layer σκεδασμένος."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
