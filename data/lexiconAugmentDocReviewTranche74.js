(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
{
  "lemma": "δέδοικα",
  "gloss": "φοβούμαι",
  "coverage": "manual",
  "source": "05.1-grammar-p275+05.2-principal-parts+Binder3+oikonomou",
  "family": "perfect-present-fear",
  "id": "x054",
  "principalParts": "δέδοικα / δέδια, ἐδεδοίκειν / ἐδεδίειν, δείσομαι, ἔδεισα",
  "derivatives": [
    "δέος",
    "δειλία"
  ],
  "sourceNotes": "Το tranche 74 στηρίζεται στον πίνακα της σελ. 275 του 05.1 ΓΡΑΜΜΑΤΙΚΗ για το perfect-present core του δέδοικα / δέδια, στις ρητές αρχικές μορφές του 05.2 Αρχικοί Χρόνοι — δέδοικα / δέδια, ἐδεδοίκειν / ἐδεδίειν, δείσομαι, ἔδεισα —, στο Binder3 για την πλήρη future-middle και aorist-active ανάπτυξη με indicative / subjunctive / optative / imperative και στον Οικονόμου για τις δύο μετοχικές σειρές δεδοικώς / δεδιώς.",
  "notes": "Tranche 74: expanded source-backed fear-perfect layer με πλήρες perfect-present indicative dual axis, ρητούς sparse subjunctive / imperative τύπους, fuller pluperfect-imperfect alternants, πλήρες future middle indicative/optative, πλήρες aorist active με moods, refreshed infinitives / participles και νέο form-index replacement."
}
];
  const norm = s => (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase();
  const existing = new Set([...(window.LEXICON_AUGMENT.extraVerbs||[]).map(v => norm(v.lemma)), ...((window.VERB_DATA||[]).map(v => norm(v.lemma)))]);
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
