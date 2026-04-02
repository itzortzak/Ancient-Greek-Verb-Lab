(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ἀποκρίνομαι",
    "gloss": "απαντώ, δίνω απόκριση",
    "coverage": "manual",
    "source": "05.2-principal-parts+tranche15-manual",
    "family": "deponent-dialogue",
    "id": "x049",
    "principalParts": "ἀποκρίνομαι, ἀπεκρινόμην, ἀποκρινοῦμαι, ἀποκριθήσομαι, ἀπεκρινάμην",
    "derivatives": [
      "ἀπόκρισις"
    ],
    "sourceNotes": "Το tranche 21 δεν ξαναχτίζει από μηδενική βάση το ἀποκρίνομαι· επαναχαρτογραφεί το ήδη επιμελημένο deponent dialogue layer της tranche 15 και το ενοποιεί στο FORM_INDEX με ρητή αναφορά στους αρχικούς χρόνους του 05.2.",
    "notes": "Tranche 21: re-indexed and audit-hardened manual dialogue paradigm."
  },
  {
    "lemma": "πορεύομαι",
    "gloss": "πορεύομαι, πηγαίνω",
    "coverage": "manual",
    "source": "05.2-principal-parts+legacy-tranche3",
    "family": "deponent-motion",
    "id": "x050",
    "principalParts": "πορεύομαι, ἐπορευόμην, πορεύσομαι, πορευθήσομαι, ἐπορευσάμην",
    "derivatives": [
      "πορεία"
    ],
    "sourceNotes": "Το tranche 21 κρατά μόνο το ασφαλές school-core layer: present/imperfect/future/aorist middle, προστακτικές, απαρέμφατα και ονομαστικές μετοχές, βασισμένα στους αρχικούς χρόνους του 05.2 και σε παλαιότερο manual tranche.",
    "notes": "Tranche 21: conservative motion/deponent hardening for a low-coverage lemma."
  },
  {
    "lemma": "κεῖμαι",
    "gloss": "κείτομαι, είμαι τοποθετημένος",
    "coverage": "manual",
    "source": "05.1-grammar+oikonomou",
    "family": "stative-perfective-present",
    "id": "x051",
    "principalParts": "κεῖμαι, ἐκείμην, κείσομαι",
    "derivatives": [
      "κείμενος",
      "κειμήλιον"
    ],
    "sourceNotes": "Το tranche 21 στηρίζεται στον αναλυτικό πίνακα του 05.1 ΓΡΑΜΜΑΤΙΚΗ και στην αντίστοιχη παρουσίαση του Οικονόμου. Περιλαμβάνει μόνο μονολεκτικούς τύπους· οι περιφραστικοί σχηματισμοί κείμενος ὦ, κείμενος εἴην κτλ. δεν εντάσσονται στο form index.",
    "notes": "Tranche 21: new source-backed stative paradigm with explicit limitation of periphrastic slots."
  }
];
  const norm = s => (s||"" ).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
