(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "λαμβάνω",
    "gloss": "λαμβάνω, παίρνω, συλλαμβάνω",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οἰκονόμου",
    "family": "high-value-irregular",
    "id": "x082",
    "principalParts": "λαμβάνω, λήψομαι, ἔλαβον, εἴληφα, εἴλημμαι, ἐλήφθην",
    "derivatives": [
      "λαβεῖν",
      "λαβών"
    ],
    "sourceNotes": "Το 05.2 δίνει ρητά λαμβάνω, παρατ. ἐλάμβανον, μέλλ. λήψομαι, αόρ. β΄ ἔλαβον, πρκμ. εἴληφα και παθ. αόρ. ἐλήφθην. Ο Οἰκονόμου επιβεβαιώνει ως χαρακτηριστική προστακτική β΄ αορίστου το λαβέ. Το tranche 32 αποδίδει συντηρητικά το ενεργητικό school-core layer με present system, future middle και aorist β΄, μαζί με τα κύρια non-finite slots.",
    "notes": "Tranche 32: new source-backed school-core hardening for λαμβάνω."
  },
  {
    "lemma": "κτείνω",
    "gloss": "σκοτώνω, φονεύω",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + Γραμματική Πατάκης + Οἰκονόμου",
    "family": "high-value-irregular",
    "id": "x083",
    "principalParts": "κτείνω, κτενῶ, ἔκτεινα",
    "derivatives": [
      "κτεῖναι",
      "κτείνας"
    ],
    "sourceNotes": "Το 05.1 και η Γραμματική Πατάκης δίνουν ρητά το ζεύγος κτείνω – κτενῶ – ἔκτεινα, ενώ ο Οἰκονόμου επιβεβαιώνει τον συνηρημένο μέλλοντα κτενῶ. Το tranche 32 αποδίδει συντηρητικά το ενεργητικό school-core layer χωρίς να ανοίγει αβέβαιες παθητικές ή εναλλακτικές αοριστικές σειρές.",
    "notes": "Tranche 32: new source-backed school-core hardening for κτείνω."
  },
  {
    "lemma": "ἕπομαι",
    "gloss": "ακολουθώ, έπομαι",
    "coverage": "manual",
    "source": "05.2 Αρχικοί Χρόνοι + Οἰκονόμου",
    "family": "high-value-irregular",
    "id": "x084",
    "principalParts": "ἕπομαι, ἕψομαι, ἑσπόμην",
    "derivatives": [
      "σπέσθαι",
      "σπόμενος"
    ],
    "sourceNotes": "Το 05.2 δίνει ρητά το αποθετικό σύστημα ἕπομαι, παρατ. ἑπόμην, μέλλ. ἕψομαι και αόρ. β΄ ἑσπόμην. Ο Οἰκονόμου σημειώνει επίσης την παράδοση εἱπόμην και καταγράφει ως χαρακτηριστική προστακτική β΄ αορίστου το σποῦ. Το tranche 32 αποδίδει συντηρητικά deponent school-core layer με present system, future middle και aorist β΄ middle.",
    "notes": "Tranche 32: new source-backed school-core hardening for ἕπομαι."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
