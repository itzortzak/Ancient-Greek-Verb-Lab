(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "μέμνημαι",
    "gloss": "θυμάμαι",
    "coverage": "manual",
    "source": "05.1-grammar-p271+05.2-principal-parts+oikonomou",
    "family": "perfect-present-memory",
    "id": "x097",
    "principalParts": "μιμνῄσκομαι / μιμνήσκομαι, ἐμιμνῃσκόμην, μνήσομαι, ἐμνήσθην, μέμνημαι, ἐμεμνήμην, μεμνήσομαι",
    "derivatives": [
      "μνήμη",
      "μνημονεύω",
      "ὑπόμνησις",
      "ἀείμνηστος"
    ],
    "sourceNotes": "Το 05.1 Γραμματική (σελ. 271) δίνει ρητά το πλήρες present-value σύστημα του μέμνημαι: οριστική, προστακτική, απαρέμφατο, μετοχή, μονολεκτική και περιφραστική υποτακτική, καθώς και μονολεκτική και περιφραστική ευκτική. Το 05.2 Αρχικοί Χρόνοι δίνει το μέμνημαι και το ἐμεμνήμην μέσα στον άξονα του μιμνῄσκομαι. Ο Οικονόμου επιβεβαιώνει ότι το μέμνημαι είναι παρακείμενος με σημασία ενεστώτα, με υποτακτική μεμνῶμαι, -ῇ, -ῆται, ευκτική μεμνῄμην, -ῇο, -ῇτο, υπερσυντέλικο ἐμεμνήμην και συντελεσμένο μέλλοντα μεμνήσομαι.",
    "notes": "Tranche 64: expanded source-backed memory-perfect layer για το μέμνημαι. Διορθώνονται οι μονολεκτικοί optative τύποι σε -ῄ- αντί των προβληματικών -ῴ-, προστίθενται οι περιφραστικοί subj/optative τύποι για την ενότητα Κλίση, καθώς και πλήρες imperfect-value pluperfect indicative core. Οι πολυλεκτικοί περιφραστικοί τύποι δεν μπαίνουν στο form index για να παραμείνει καθαρή η αναγνώριση."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
