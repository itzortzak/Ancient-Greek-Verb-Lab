(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ἥκω",
    "gloss": "έχω έρθει, φθάνω, βρίσκομαι παρών",
    "coverage": "manual",
    "source": "05.2-principal-parts+oikonomou-stative-values+regular-omega-pattern",
    "family": "defective-stative-perfective-omega",
    "id": "x117",
    "principalParts": "ἥκω, ἧκον, ἥξω, ἧξα",
    "derivatives": [
      "ἧξις",
      "καθήκω",
      "προσήκω",
      "διήκω"
    ],
    "sourceNotes": "Το 05.2 Αρχικοί Χρόνοι δίνει ρητά για το λήμμα ἥκω, ἧκον, ἥξω, ἧξα και σημειώνει τη σημασία «έχω έρθει». Ο Οἰκονόμου (§ 359, 1) εξηγεί ότι το ἥκω έχει σημασία παρακειμένου, ο παρατατικός ἧκον λειτουργεί με σημασία υπερσυντελίκου ή αορίστου και ο μέλλοντας ἥξω με σημασία συντελεσμένου μέλλοντα. Πάνω σε αυτόν τον ασφαλή κορμό το pass αποτυπώνει συντηρητικά ένα ενεργητικό school-core layer με present/imperfect/future/aorist active, μη προσωπικούς τύπους και form-index replacement.",
    "notes": "Tranche 83: νέο source-backed stative-perfective active paradigm για το ἥκω. Καλύπτονται πλήρως οι ενεργητικοί present-value και imperfect-value άξονες, ο simple future με perfective σημασία, ο sigmatic aorist, καθώς και τα βασικά infinitive/participle layers, χωρίς επινόηση μέσης ή παθητικής φωνής που οι πηγές δεν δίνουν."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
