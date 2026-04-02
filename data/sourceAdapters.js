window.SOURCE_ADAPTERS = {
  "morpheus-perseids": {
    "mode": "reference-adapter-ready",
    "localBundled": false,
    "buildPipelineReady": true,
    "uiLinked": true,
    "notes": "Έχει προστεθεί scaffold για μελλοντικό precomputed import ή backend fallback χωρίς να δηλώνεται ψευδώς πλήρες local bundling."
  },
  "cltk": {
    "mode": "reference-adapter-ready",
    "localBundled": false,
    "buildPipelineReady": true,
    "uiLinked": true,
    "notes": "Προβλέπεται ως build-time βοήθημα για normalization, lemmatization και preprocessing, όχι ως κύρια static βάση κλίσης."
  },
  "open-greek-latin": {
    "mode": "reference-corpus-ready",
    "localBundled": false,
    "buildPipelineReady": true,
    "uiLinked": true,
    "notes": "Προβλέπεται ως corpus/examples/validation layer. Η υποδομή ένταξης έχει χαρτογραφηθεί, αλλά δεν έχει εισαχθεί πλήρες dataset στη static έκδοση."
  }
};
