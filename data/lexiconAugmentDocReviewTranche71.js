(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ὑπόκειμαι",
    "gloss": "βρίσκομαι από κάτω, υπόκειμαι",
    "coverage": "manual",
    "source": "05.2-grammar+binder3+oikonomou+grammar-analogy",
    "family": "stative-keimai-compound",
    "id": "x104",
    "principalParts": "ὑπόκειμαι, ὑπεκείμην, ὑποκείσομαι",
    "derivatives": [
      "κεῖμαι"
    ],
    "sourceNotes": "Το 05.2 Αρχικοί Χρόνοι καταγράφει ρητά το ὑπόκειμαι ως σύνθετο του κεῖμαι. Το 05.1 ΓΡΑΜΜΑΤΙΚΗ και το Binder3 δίνουν αναλυτικό σχολικό πίνακα για το κεῖμαι: present/imperfect indicative, περιφραστικούς και μονολεκτικούς τύπους της υποτακτικής και ευκτικής, προστακτική, future middle, απαρέμφατο και μετοχή. Το tranche 71 μεταφέρει συντηρητικά αυτό το σύστημα στο σύνθετο ὑπόκειμαι, με εσωτερική αύξηση στον παρατατικό και ανύψωση τόνου στους μονολεκτικούς τύπους.",
    "notes": "Tranche 71: expanded source-backed compound stative layer για το ὑπόκειμαι. Το παλαιότερο limited layer αντικαθίσταται από πλήρες school-core paradigm παράλληλο προς το κεῖμαι: present/imperfect indicative, periphrastic + monolexical present subjunctive/optative, present imperative, future middle indicative/optative, refreshed infinitives/participles και νέο form-index replacement που κρατά εκτός Recognition τους πολυλεκτικούς περιφραστικούς τύπους."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set([...(window.LEXICON_AUGMENT.extraVerbs||[]).map(v => norm(v.lemma)), ...((window.VERB_DATA||[]).map(v => norm(v.lemma)))]);
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
