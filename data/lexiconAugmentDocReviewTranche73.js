(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ἧμαι",
    "gloss": "κάθομαι, είμαι καθισμένος, βρίσκομαι τοποθετημένος",
    "coverage": "manual",
    "source": "lsj+perseus+oikonomou+stative-analogy",
    "family": "stative-perfective-present",
    "id": "x106",
    "principalParts": "ἧμαι, ἥμην (λειπ. χρόνοι ἀναπληροῦνται ἀπὸ ἕζομαι / ἵζω / ἵζομαι)",
    "derivatives": [
      "κάθημαι"
    ],
    "sourceNotes": "Το simplex ἧμαι παραδίδεται ως στατικό ρήμα με present-value perfect και pluperfect-value imperfect. Ο Οικονόμου το μνημονεύει ρητά ως ποιητικό ρήμα πίσω από το κάθημαι, ενώ η λεξικογραφική παράδοση LSJ / Perseus επιβεβαιώνει τον βασικό πυρήνα ἧμαι, ἧσαι, ἧσται, ἥμην, ἧσο, ἧστο, ἧσθαι, ἥμενος και τις παραλλαγές 3ου πληθυντικού ἥαται / εἵαται / ἕαται και ἥατο / εἵατο / ἕατο. Για την Κλίση προστέθηκαν και οι συντηρητικοί περιφραστικοί present subjunctive / optative τύποι με τη μετοχή ἥμενος + ὦ / εἴην, παράλληλα προς το σχολικό μοντέλο των stative ρημάτων κεῖμαι και ὑπόκειμαι.",
    "notes": "Tranche 73: expanded source-backed stative-perfective-present layer για το ἧμαι. Το λήμμα αποκτά πλήρες present/imperfect indicative με dual και epic 3pl variants, periphrastic present subjunctive/optative for Conjugation, present imperative, infinitive and participial core, και νέο form-index replacement που κρατά εκτός Recognition τους πολυλεκτικούς περιφραστικούς τύπους."
  }
];
  const norm = s => (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set([...(window.LEXICON_AUGMENT.extraVerbs||[]).map(v => norm(v.lemma)), ...((window.VERB_DATA||[]).map(v => norm(v.lemma)))]);
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
