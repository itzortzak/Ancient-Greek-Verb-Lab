(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "οἶδα",
    "gloss": "γνωρίζω, ξέρω",
    "coverage": "manual",
    "source": "05.1-grammar-p265-267+05.2-principal-parts+oikonomou+tzartzanos",
    "family": "perfect-present-knowledge",
    "id": "x055",
    "principalParts": "οἶδα, ᾔδειν / ᾔδησθα, εἰδήσω / εἴσομαι, ἔγνων, ἔγνωκα, ἐγνώκειν",
    "derivatives": [
      "σύνοιδα",
      "κάτοιδα"
    ],
    "sourceNotes": "Το tranche 75 στηρίζεται κυρίως στον σχολικό πίνακα του 05.1 ΓΡΑΜΜΑΤΙΚΗ για το present-value system του οἶδα και το imperfect-value system του ᾔδειν, στον Οικονόμου για τη ρητή dual ανάπτυξη και τις optative/imperative παραλλαγές, στο 05.2 Αρχικοί Χρόνοι για τους αρχικούς χρόνους οἶδα, ᾔδειν/ᾔδησθα, εἰδήσω/εἴσομαι, ἔγνων, ἔγνωκα, ἐγνώκειν και στον Τζαρτζάνο για την επιβεβαίωση του μέλλοντα εἴσομαι καὶ εἰδήσω. Το layer δεν διπλασιάζει τους αναπληρωματικούς αοριστικούς/συντελικούς τύπους του γιγνώσκω μέσα στο λήμμα οἶδα.",
    "notes": "Tranche 75: expanded source-backed knowledge-perfect layer με καθαρό school-core present/imperfect system, δύο future axes (εἰδήσω / εἴσομαι), refreshed infinitives/participles και νέο form-index replacement που απομακρύνει malformed ή ετερογενή legacy alternants."
  }
];
  const norm = s => (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set([...(window.LEXICON_AUGMENT.extraVerbs||[]).map(v => norm(v.lemma)), ...((window.VERB_DATA||[]).map(v => norm(v.lemma)))]);
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
