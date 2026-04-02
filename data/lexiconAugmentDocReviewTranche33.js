(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "γράφω",
    "gloss": "γράφω, καταγράφω, συντάσσω",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οικονόμου",
    "family": "high-value-regular",
    "id": "x085",
    "principalParts": "γράφω, γράψω, ἔγραψα, γέγραφα",
    "derivatives": [
      "γράψαι",
      "γράψας"
    ],
    "sourceNotes": "Το 05.2 δίνει ρητά γράϕω, παρατ. ἔγραφον, μέλλ. γράψω και αόρ. ἔγραψα. Το 05.1 εντάσσει το γράϕω στα ρήματα με α΄ αόριστο σε -ψα. Ο Οικονόμου επιβεβαιώνει τον βασικό σχολικό άξονα present–future–aorist και τα non-finite forms. Το tranche 33 αποτυπώνει συντηρητικά school-core layer με present system, future, α΄ αόριστο, απαρέμφατα και μετοχές.",
    "notes": "Tranche 33: new source-backed school-core hardening for γράϕω."
  },
  {
    "lemma": "πείθω",
    "gloss": "πείθω, πείθω κάποιον, μεταπείθω",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οικονόμου",
    "family": "high-value-regular",
    "id": "x086",
    "principalParts": "πείθω, πείσω, ἔπεισα, πέπεικα",
    "derivatives": [
      "πεῖσαι",
      "πείσας"
    ],
    "sourceNotes": "Το 05.2 δίνει ρητά πείθω, παρατ. ἔπειθον, μέλλ. πείσω και αόρ. ἔπεισα. Το 05.1 καταγράφει το ρήμα στα συχνά ρήματα με α΄ αόριστο σε -σα. Ο Οικονόμου επιβεβαιώνει τον present/future/aorist άξονα και τα βασικά non-finite forms. Το tranche 33 κρατά συντηρητικά το ενεργητικό school-core layer χωρίς να ανοίγει εξαντλητικά το παθητικό σύστημα.",
    "notes": "Tranche 33: new source-backed school-core hardening for πείθω."
  },
  {
    "lemma": "δίδωμι",
    "gloss": "δίνω, παρέχω",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οικονόμου",
    "family": "high-value-mi-verb",
    "id": "x087",
    "principalParts": "δίδωμι, δώσω, ἔδωκα, δέδωκα",
    "derivatives": [
      "δοῦναι",
      "δούς"
    ],
    "sourceNotes": "Το 05.2 δίνει ρητά δίδωμι, παρατ. ἐδίδουν, μέλλ. δώσω και αόρ. ἔδωκα. Το 05.1 καταγράφει το δίδωμι στα βασικά μι-ρήματα με present μι-system, αόριστο κ και χαρακτηριστική προστακτική δός. Ο Οικονόμου επιβεβαιώνει τους βασικούς τύπους διδόναι, δοῦναι και δούς. Το tranche 33 αποτυπώνει συντηρητικά school-core layer με present μι-system, μέλλοντα, κ-aorist, απαρέμφατα και μετοχές.",
    "notes": "Tranche 33: new source-backed school-core hardening for δίδωμι."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
