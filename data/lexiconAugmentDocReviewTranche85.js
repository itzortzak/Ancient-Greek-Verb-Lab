(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ἁλίσκομαι",
    "gloss": "συλλαμβάνομαι, κυριεύομαι",
    "coverage": "manual",
    "source": "05.1 ΓΡΑΜΜΑΤΙΚΗ + 05.2 Αρχικοί Χρόνοι + Οἰκονόμου + Τζαρτζάνος + Binder4",
    "family": "deponent-irregular",
    "id": "x119",
    "principalParts": "ἁλίσκομαι, ἁλώσομαι, ἑάλων/ἥλων, ἑάλωκα/ἥλωκα, ἡλώκειν",
    "derivatives": [
      "ἁλίσκεσθαι",
      "ἁλώσεσθαι",
      "ἁλῶναι",
      "ἁλισκόμενος",
      "ἁλωσόμενος",
      "ἁλούς"
    ],
    "sourceNotes": "Το tranche 85 στηρίζεται στο 05.2 για τους βασικούς χρόνους ἁλίσκομαι, ἡλισκόμην, ἁλώσομαι, ἑάλων/ἥλων και ἑάλωκα/ἥλωκα, στον Τζαρτζάνο για το principal-parts profile και τον υπερσυντέλικο ἡλώκειν, στον Οἰκονόμου για τη ρητή ανάπτυξη του β΄ αορίστου (υποτ. ἁλῶ, -ῷς, -ῷ κτλ., ευκτ. ἁλοίην, απαρ. ἁλῶναι, μετ. ἁλούς), στο 05.1 για τη μετοχή ἁλούς/ἁλοῦσα/ἁλόν και στο Binder4 για την επιβεβαίωση της διπλής αύξησης ἑάλων και του παρακειμένου ἑάλωκα.",
    "notes": "Tranche 85: expanded but still conservative source-backed layer για το ἁλίσκομαι με πλήρες present/imperfect middle-passive indicative, future middle indicative, β΄ aorist active με παθητική σημασία πλέον και σε subjunctive/optative, ρητά non-finite forms και safe perfect/pluperfect anchors. Δεν προστέθηκε speculative imperative ή εκτεταμένο perfect/pluperfect paradigm πέρα από όσα δηλώνονται ρητά στις πηγές."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set([...(window.LEXICON_AUGMENT.extraVerbs||[]).map(v => norm(v.lemma)), ...((window.VERB_DATA||[]).map(v => norm(v.lemma)))]);
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
