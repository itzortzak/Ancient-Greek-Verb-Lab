(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ἔοικα",
    "gloss": "μοιάζω, φαίνομαι όμοιος",
    "coverage": "manual",
    "source": "binder3+oikonomou+05.2-principal-parts",
    "family": "perfect-present-stative",
    "id": "x056",
    "principalParts": "ἔοικα, ἐῴκειν",
    "derivatives": [
      "ἐοικώς",
      "εἰκέναι"
    ],
    "sourceNotes": "Το tranche 77 στηρίζεται κυρίως στον αναλυτικό πίνακα του Binder3 για την κλίση ἔοικα / ἐῴκειν / ἐοίκω / ἐοίκοιμι / εἰκέναι, στον Οικονόμου για τη ρητή ανάλυση του ἔοικα ως παρακειμένου του άχρηστου εἴκω με σημασία ενεστώτα, για την εναλλακτική γ΄ πληθυντικού εἴξασι και για τις μετοχικές σειρές εἰκώς / ἐοικώς, και στο 05.2 Αρχικοί Χρόνοι για τη βασική επιβεβαίωση του εἴκω Β = μοιάζω.",
    "notes": "Tranche 77: νέο expanded source-backed perfect-present layer για το ἔοικα με καθαρό present-value indicative/subjunctive/optative, imperfect-value pluperfect indicative, δύο infinitive variants, δύο participial σειρές και form-index replacement που αφαιρεί speculative generated buckets."
  }
];
  const norm = s => (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set([...(window.LEXICON_AUGMENT.extraVerbs||[]).map(v => norm(v.lemma)), ...((window.VERB_DATA||[]).map(v => norm(v.lemma)))]);
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
