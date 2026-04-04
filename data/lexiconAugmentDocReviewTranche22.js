(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ἐπίσταμαι",
    "gloss": "γνωρίζω καλά, κατέχω",
    "coverage": "manual",
    "source": "05.1-grammar-pp268-269",
    "family": "knowledge-deponent",
    "id": "x052",
    "principalParts": "ἐπίσταμαι, ἠπιστάμην, ἐπιστήσομαι, ἠπιστήθην",
    "derivatives": [
      "ἐπιστήμη",
      "ἐπιστάτης"
    ],
    "sourceNotes": "Το tranche 22 βασίζεται ρητά στον πίνακα των σελ. 268-269 του 05.1 ΓΡΑΜΜΑΤΙΚΗ. Εντάσσονται οι μονολεκτικοί finite τύποι του present system, ο future middle, ο passive aorist, τα απαρέμφατα και οι ονομαστικές μετοχές.",
    "notes": "Tranche 22: new source-backed knowledge/deponent paradigm."
  },
  {
    "lemma": "μέμνημαι",
    "gloss": "θυμάμαι",
    "coverage": "manual",
    "source": "05.1-grammar-p271",
    "family": "perfect-present-memory",
    "id": "x053",
    "principalParts": "μέμνημαι (παρακείμενος με σημασία ενεστώτα)· αναπλήρωση λοιπών χρόνων από μιμνῄσκομαι / γιγνώσκω όπου χρειάζεται",
    "derivatives": [
      "μνήμη",
      "μνημονεύω"
    ],
    "sourceNotes": "Το tranche 22 ακολουθεί τον πίνακα της σελ. 271 του 05.1 ΓΡΑΜΜΑΤΙΚΗ. Κρατούνται μόνο οι μονολεκτικοί τύποι της υποτακτικής και της ευκτικής· οι περιφραστικοί σχηματισμοί μεμνημένος ὦ / εἴην δεν εντάσσονται στο form index για να παραμείνει μονολεκτική η αναγνώριση.",
    "notes": "Tranche 22: new source-backed perfect-present memory paradigm with explicit exclusion of periphrastic slots."
  },
  {
    "lemma": "δέδοικα",
    "gloss": "φοβούμαι",
    "coverage": "manual",
    "source": "05.1-grammar-p275+principal-parts",
    "family": "perfect-present-fear",
    "id": "x054",
    "principalParts": "δέδοικα / δέδια, ἐδεδοίκειν, δείσομαι, ἔδεισα",
    "derivatives": [
      "δέος",
      "δειλία"
    ],
    "sourceNotes": "Το tranche 22 στηρίζεται στον πίνακα της σελ. 275 του 05.1 ΓΡΑΜΜΑΤΙΚΗ. Το λήμμα μοντελοποιείται ως dual perfect-present system (δέδοικα / δέδια) με ρητή καταγραφή των ελλειπτικών υποτακτικών/προστακτικών τύπων και με συντηρητική ανάπτυξη του future middle και του aorist active από τους αρχικούς χρόνους που δίνει η ίδια σελίδα.",
    "notes": "Tranche 22: new source-backed fear-perfect paradigm with dual-present allomorphs."
  }
];
  const norm = s => (s||"" ).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
