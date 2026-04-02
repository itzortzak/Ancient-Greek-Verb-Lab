(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
{
  "lemma": "κεῖμαι",
  "gloss": "κείτομαι, είμαι τοποθετημένος",
  "coverage": "manual",
  "source": "05.1-grammar+binder3+oikonomou",
  "family": "stative-perfective-present",
  "id": "x100",
  "principalParts": "κεῖμαι, ἐκείμην, κείσομαι",
  "derivatives": [
    "κείμενος",
    "κειμήλιον",
    "κοίτη"
  ],
  "sourceNotes": "Το 05.1 ΓΡΑΜΜΑΤΙΚΗ και το Binder3 δίνουν αναλυτικό σχολικό πίνακα για το κεῖμαι: present-value indicative, μονολεκτικούς και περιφραστικούς τύπους της υποτακτικής/ευκτικής, προστακτικές, παρατατικό με σημασία υπερσυντελίκου και regular future κείσομαι. Ο Οικονόμου επιβεβαιώνει τους βασικούς μονολεκτικούς τύπους κέηται, κέησθε, κέωνται, κέοιτο, κέοιντο, καθώς και τον μελλοντικό άξονα κείσομαι.",
  "notes": "Tranche 67: expanded source-backed stative-perfective-present layer για το κεῖμαι. Το παλαιότερο tranche-21 limited layer αντικαθίσταται από πληρέστερο school-core paradigm: full present/imperfect indicative, periphrastic + monolexical present subjunctive/optative, present imperative, regular future indicative/optative, refreshed infinitives/participles και νέο form-index replacement που κρατά εκτός Recognition τους πολυλεκτικούς περιφραστικούς τύπους."
}
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set([...(window.LEXICON_AUGMENT.extraVerbs||[]).map(v => norm(v.lemma)), ...((window.VERB_DATA||[]).map(v => norm(v.lemma)))]);
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
