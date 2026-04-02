(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "αἰτέω",
    "gloss": "ζητώ, αιτούμαι, απαιτώ",
    "coverage": "manual",
    "source": "05.2-principal-parts+05.1-contracted-pattern+binder4-reduplication",
    "family": "contracted-verb-eo",
    "id": "x113",
    "principalParts": "αἰτέω-ῶ, ᾔτουν, αἰτήσω, ᾔτησα, —, ᾐτήθην, ᾔτηκα, ᾐτήκειν · αἰτέομαι-οῦμαι, ᾐτούμην, αἰτήσομαι, —, —, ᾔτημαι, ᾐτήμην",
    "derivatives": [
      "αἴτησις",
      "αἴτημα",
      "αἰτητής",
      "αἰτητός"
    ],
    "sourceNotes": "Το 05.2 Αρχικοί Χρόνοι δίνει ρητά για το αἰτέω-ῶ / αἰτέομαι-οῦμαι: ᾔτουν, ᾐτούμην, αἰτήσω, αἰτήσομαι, ᾔτησα, ᾐτήθην, ᾔτηκα, ᾐτήκειν, ᾔτημαι, ᾐτήμην, ενώ αφήνει κενό τον παθητικό μέλλοντα και τον μέσο αόριστο. Το 05.1 ΓΡΑΜΜΑΤΙΚΗ δίνει το κανονικό υπόδειγμα των συνηρημένων ρημάτων σε -έω/-έομαι για present/imperfect και μη προσωπικούς τύπους, και το Binder4 εξηγεί ρητά τον αναδιπλασιασμό των συνηρημένων ρημάτων που αρχίζουν από φωνήεν με παράδειγμα το αἰτέω-ῶ → ᾔτηκα, ᾐτήκειν.",
    "notes": "Tranche 80: νέο source-backed contracted school-core paradigm για το αἰτέω. Εισάγονται κανονικοί συνηρημένοι present/imperfect active και middle/passive τύποι, future active και future middle, α΄ aorist active, passive aorist, conservative perfect/pluperfect indicative + non-finite core, ενώ αποφεύγεται η επινόηση παθητικού μέλλοντα ή μέσου αορίστου που το 05.2 δεν δίνει."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
