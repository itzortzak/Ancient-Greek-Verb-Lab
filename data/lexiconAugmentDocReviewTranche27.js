(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ἄγω",
    "gloss": "οδηγώ, φέρνω",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οικονόμου + Τζαρτζάνος",
    "family": "high-value-irregular",
    "id": "x067",
    "principalParts": "ἄγω, ἄξω, ἤγαγον, ἀγήοχα/ἦχα, ἦγμαι, ἤχθην",
    "derivatives": [
      "ἀγαγεῖν",
      "ἀγαγών"
    ],
    "sourceNotes": "Το 05.2 δίνει ρητά τους αρχικούς χρόνους ἄξω και ἤγαγον, ενώ ο Οικονόμου και ο Τζαρτζάνος τεκμηριώνουν τον παρατατικό ἦγον και το αοριστικό σύστημα ἀγάγω/ἀγαγεῖν/ἀγαγών. Το tranche 27 αποτυπώνει συντηρητικά το ενεργητικό school-core layer.",
    "notes": "Tranche 27: new source-backed school-core hardening for ἄγω."
  },
  {
    "lemma": "αἱρέω",
    "gloss": "παίρνω, κυριεύω, συλλαμβάνω",
    "coverage": "manual",
    "source": "05.2 Αρχικοί Χρόνοι + Οικονόμου",
    "family": "high-value-irregular",
    "id": "x068",
    "principalParts": "αἱρέω/αἱρῶ, αἱρήσω, εἷλον, ᾕρηκα, ᾕρημαι, ᾑρέθην",
    "derivatives": [
      "ἑλεῖν",
      "ἑλών"
    ],
    "sourceNotes": "Το 05.2 δίνει ρητά μέλλοντα αἱρήσω και β΄ αόριστο εἷλον. Ο Οικονόμου καταγράφει το αἱρέω-ῶ με β΄ αόριστο εἷλον, παρακείμενο ᾕρηκα και σημειώνει ότι ως παθητικό του αἱρέω λειτουργεί το ἁλίσκομαι. Το tranche 27 κρατά εσκεμμένα το ενεργητικό school-core profile και παραπέμπει το παθητικό στο ήδη επιμελημένο ἁλίσκομαι.",
    "notes": "Tranche 27: new source-backed school-core hardening for αἱρέω, with passive handled separately through ἁλίσκομαι."
  },
  {
    "lemma": "ἐσθίω",
    "gloss": "τρώω",
    "coverage": "manual",
    "source": "05.2 Αρχικοί Χρόνοι + Οικονόμου + Τζαρτζάνος",
    "family": "high-value-irregular",
    "id": "x069",
    "principalParts": "ἐσθίω, ἔδομαι, ἔφαγον, ἐδήδοκα",
    "derivatives": [
      "φαγεῖν",
      "φαγών"
    ],
    "sourceNotes": "Στο 05.2 καταγράφεται το λήμμα ἐσθίω = τρώω, ενώ ο Οικονόμου και ο Τζαρτζάνος τεκμηριώνουν ρητά το ανώμαλο σύστημα με μέλλοντα ἔδομαι και β΄ αόριστο ἔφαγον. Το tranche 27 αποδίδει συντηρητικά το active/middle school-core layer με κύριο non-finite pair ἔδεσθαι και φαγεῖν.",
    "notes": "Tranche 27: source-backed school-core hardening for ἐσθίω."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
