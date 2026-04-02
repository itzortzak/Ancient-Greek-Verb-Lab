(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "ἐπίσταμαι": {
    "status": "manual+slots",
    "summary": "Tranche 22: new source-backed knowledge/deponent paradigm. Το tranche 22 βασίζεται ρητά στον πίνακα των σελ. 268-269 του 05.1 ΓΡΑΜΜΑΤΙΚΗ. Εντάσσονται οι μονολεκτικοί finite τύποι του present system, ο future middle, ο passive aorist, τα απαρέμφατα και οι ονομαστικές μετοχές.",
    "slots": [
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἐπίσταμαι",
        "note": "05.1 πίνακας, σελ. 268"
      },
      {
        "slot": "present|middle/passive|subjunctive|3sg",
        "label": "ενεστώτας • μέση/παθητική • υποτακτική • γ΄ ενικό",
        "form": "ἐπίστηται",
        "note": "05.1 πίνακας"
      },
      {
        "slot": "present|middle/passive|optative|2sg",
        "label": "ενεστώτας • μέση/παθητική • ευκτική • β΄ ενικό",
        "form": "ἐπίσταιο",
        "note": "05.1 πίνακας"
      },
      {
        "slot": "imperfect|middle/passive|indicative|2sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • β΄ ενικό",
        "form": "ἠπίστασο",
        "note": "05.1 δίνει και ἠπίστω· κρατούνται και οι δύο τύποι"
      },
      {
        "slot": "future|middle/passive|indicative|1sg",
        "label": "μέλλοντας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἐπιστήσομαι",
        "note": "05.1 πίνακας"
      },
      {
        "slot": "future|middle/passive|optative|3pl",
        "label": "μέλλοντας • μέση/παθητική • ευκτική • γ΄ πληθυντικό",
        "form": "ἐπιστήσοιντο",
        "note": "05.1 πίνακας"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "παθητικός αόριστος • οριστική • α΄ ενικό",
        "form": "ἠπιστήθην",
        "note": "05.1 πίνακας"
      },
      {
        "slot": "aorist|passive|imperative|2sg",
        "label": "παθητικός αόριστος • προστακτική • β΄ ενικό",
        "form": "ἐπιστήθητι",
        "note": "05.1 πίνακας"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "ενεστώτας • μέση/παθητική • απαρέμφατο",
        "form": "ἐπίστασθαι",
        "note": "05.1 σελ. 269"
      },
      {
        "slot": "future|middle/passive|infinitive",
        "label": "μέλλοντας • μέση/παθητική • απαρέμφατο",
        "form": "ἐπιστήσεσθαι",
        "note": "05.1 σελ. 269"
      },
      {
        "slot": "aorist|passive|infinitive",
        "label": "παθητικός αόριστος • απαρέμφατο",
        "form": "ἐπιστηθῆναι",
        "note": "05.1 σελ. 269"
      },
      {
        "slot": "present|middle/passive|participle|masc.nom.sg",
        "label": "ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἐπιστάμενος",
        "note": "05.1 σελ. 269"
      },
      {
        "slot": "aorist|passive|participle|masc.nom.sg",
        "label": "παθητικός αόριστος • μετοχή • αρσενικό ον. εν.",
        "form": "ἐπιστηθείς",
        "note": "05.1 σελ. 269"
      }
    ]
  },
  "μέμνημαι": {
    "status": "manual+slots",
    "summary": "Tranche 22: new source-backed perfect-present memory paradigm with explicit exclusion of periphrastic slots. Το tranche 22 ακολουθεί τον πίνακα της σελ. 271 του 05.1 ΓΡΑΜΜΑΤΙΚΗ. Κρατούνται μόνο οι μονολεκτικοί τύποι της υποτακτικής και της ευκτικής· οι περιφραστικοί σχηματισμοί μεμνημένος ὦ / εἴην δεν εντάσσονται στο form index για να παραμείνει μονολεκτική η αναγνώριση.",
    "slots": [
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "παρακείμενος με σημασία ενεστώτα • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "μέμνημαι",
        "note": "05.1 σελ. 271"
      },
      {
        "slot": "present|middle/passive|indicative|3pl",
        "label": "παρακείμενος με σημασία ενεστώτα • μέση/παθητική • οριστική • γ΄ πληθυντικό",
        "form": "μέμνηνται",
        "note": "05.1 σελ. 271"
      },
      {
        "slot": "present|middle/passive|subjunctive|1sg",
        "label": "υποτακτική • μονολεκτικός τύπος • α΄ ενικό",
        "form": "μεμνῶμαι",
        "note": "05.1, μονολεκτικός τύπος με κατάληξη -ῶμαι"
      },
      {
        "slot": "present|middle/passive|optative|1sg",
        "label": "ευκτική • μονολεκτικός τύπος • α΄ ενικό",
        "form": "μεμνῴμην",
        "note": "05.1, μονολεκτικός τύπος με κατάληξη -ῴμην"
      },
      {
        "slot": "present|middle/passive|imperative|2sg",
        "label": "προστακτική • β΄ ενικό",
        "form": "μέμνησο",
        "note": "05.1 σελ. 271"
      },
      {
        "slot": "present|middle/passive|imperative|3pl",
        "label": "προστακτική • γ΄ πληθυντικό",
        "form": "μεμνήσθωσαν",
        "note": "05.1 δίνει και μεμνήσθων"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "απαρέμφατο",
        "form": "μεμνῆσθαι",
        "note": "05.1 σελ. 271"
      },
      {
        "slot": "present|middle/passive|participle|masc.nom.sg",
        "label": "μετοχή • αρσενικό ον. εν.",
        "form": "μεμνημένος",
        "note": "05.1 σελ. 271"
      }
    ]
  },
  "δέδοικα": {
    "status": "manual+slots",
    "summary": "Tranche 22: new source-backed fear-perfect paradigm with dual-present allomorphs. Το tranche 22 στηρίζεται στον πίνακα της σελ. 275 του 05.1 ΓΡΑΜΜΑΤΙΚΗ. Το λήμμα μοντελοποιείται ως dual perfect-present system (δέδοικα / δέδια) με ρητή καταγραφή των ελλειπτικών υποτακτικών/προστακτικών τύπων και με συντηρητική ανάπτυξη του future middle και του aorist active από τους αρχικούς χρόνους που δίνει η ίδια σελίδα.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "παρακείμενος με σημασία ενεστώτα • ενεργητική • οριστική • α΄ ενικό",
        "form": "δέδοικα",
        "note": "05.1 σελ. 275· παράλληλος τύπος: δέδια"
      },
      {
        "slot": "present|active|indicative|3pl",
        "label": "παρακείμενος με σημασία ενεστώτα • ενεργητική • οριστική • γ΄ πληθυντικό",
        "form": "δεδοίκασι(ν)",
        "note": "05.1 σελ. 275· παράλληλος τύπος: δεδίασι(ν)"
      },
      {
        "slot": "present|active|subjunctive|3sg",
        "label": "υποτακτική • ενεργητική • γ΄ ενικό",
        "form": "δεδίῃ",
        "note": "05.1 καταγράφει μόνο ελλειπτικό set"
      },
      {
        "slot": "present|active|imperative|2sg",
        "label": "προστακτική • ενεργητική • β΄ ενικό",
        "form": "δέδιθι",
        "note": "05.1 σε παρένθεση"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "ὑπερσυντέλικος με σημασία παρατατικού • ενεργητική • α΄ ενικό",
        "form": "ἐδεδοίκειν",
        "note": "05.1 σελ. 275"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "δείσομαι",
        "note": "05.1 αρχικοί χρόνοι"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος/φοβικός αόριστος • ενεργητική • α΄ ενικό",
        "form": "ἔδεισα",
        "note": "05.1 αρχικοί χρόνοι"
      },
      {
        "slot": "present|active|infinitive",
        "label": "απαρέμφατο perfect-present",
        "form": "δεδοικέναι",
        "note": "05.1 σελ. 275· παράλληλος τύπος δεδιέναι"
      },
      {
        "slot": "future|middle|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "δείσεσθαι",
        "note": "συντηρητική ανάπτυξη από τους αρχικούς χρόνους"
      },
      {
        "slot": "aorist|active|infinitive",
        "label": "αόριστος • ενεργητική • απαρέμφατο",
        "form": "δεῖσαι",
        "note": "συντηρητική ανάπτυξη από τον αόριστο ἔδεισα"
      },
      {
        "slot": "present|active|participle|masc.nom.sg",
        "label": "μετοχή perfect-present • αρσενικό ον. εν.",
        "form": "δεδοικώς",
        "note": "05.1 σελ. 275· παράλληλος τύπος δεδιώς"
      }
    ]
  }
});
})();
