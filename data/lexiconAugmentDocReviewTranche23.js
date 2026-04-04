(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "βούλομαι",
    "gloss": "θέλω, επιθυμώ",
    "coverage": "manual",
    "source": "legacy-bootstrap+tranche3",
    "family": "deponent-high-value",
    "id": "x055",
    "principalParts": "βούλομαι, βουλήσομαι, —, —, βεβούλημαι, ἐβουλήθην",
    "derivatives": [
      "βούλησις",
      "βουλή"
    ],
    "sourceNotes": "Το tranche 23 δεν ξαναχτίζει το paradigm από μηδενική βάση· αξιοποιεί το ήδη ενσωματωμένο legacy manual layer του bootstrap/tranche3 και το επανεισάγει καθαρά στο FORM_INDEX, ώστε οι αναλύσεις να προτιμούν το επιμελημένο deponent profile.",
    "notes": "Tranche 23: operational re-indexing and audit hardening of a high-value school deponent."
  },
  {
    "lemma": "δύναμαι",
    "gloss": "μπορώ, έχω τη δύναμη",
    "coverage": "manual",
    "source": "legacy-bootstrap+tranche3",
    "family": "deponent-high-value",
    "id": "x056",
    "principalParts": "δύναμαι, δυνήσομαι, —, —, δεδύνημαι, ἐδυνήθην",
    "derivatives": [
      "δύναμις",
      "δυνατός"
    ],
    "sourceNotes": "Το tranche 23 αξιοποιεί το ήδη ενσωματωμένο manual school-core layer του bootstrap/tranche3 και προχωρεί σε operational re-indexing, ώστε οι τύποι του λήμματος να αναγνωρίζονται με σταθερό deponent tagging.",
    "notes": "Tranche 23: operational re-indexing and audit hardening of a core modal deponent."
  },
  {
    "lemma": "γίγνομαι",
    "gloss": "γίνομαι, προκύπτω, συμβαίνω",
    "coverage": "manual",
    "source": "legacy-bootstrap+manualParadigms",
    "family": "irregular-high-value",
    "id": "x057",
    "principalParts": "γίγνομαι, γενήσομαι, ἐγενόμην, γέγονα, γεγένημαι",
    "derivatives": [
      "γένεσις",
      "γένος"
    ],
    "sourceNotes": "Το tranche 23 στηρίζεται στο ήδη ενσωματωμένο εκτεταμένο manual paradigm του bootstrap. Η νέα παρέμβαση διορθώνει συστηματικά τα malformed person-tags των δυϊκών και πληθυντικών σειρών πριν από την επανεισαγωγή τους στο FORM_INDEX, ώστε η «Αναγνώριση» να μην εμφανίζει λανθασμένα πρόσωπα σε τύπους όπως γιγνόμεθα, γίγνεσθε, γίγνονται, ἐγίγνοντο, γενήσονται και γένοιντο.",
    "notes": "Tranche 23: tag-corrected re-indexing and audit hardening of the most important irregular becoming verb."
  }
];
  const norm = s => (s||"" ).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
