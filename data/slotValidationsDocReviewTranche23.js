(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "βούλομαι": {
    "status": "manual+slots",
    "summary": "Tranche 23: operational re-indexing and audit hardening of a high-value school deponent. Το tranche 23 δεν ξαναχτίζει το paradigm από μηδενική βάση· αξιοποιεί το ήδη ενσωματωμένο legacy manual layer του bootstrap/tranche3 και το επανεισάγει καθαρά στο FORM_INDEX, ώστε οι αναλύσεις να προτιμούν το επιμελημένο deponent profile.",
    "slots": [
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "βούλομαι",
        "note": "legacy manual school-core layer"
      },
      {
        "slot": "present|middle/passive|optative|3sg",
        "label": "ενεστώτας • μέση/παθητική • ευκτική • γ΄ ενικό",
        "form": "βούλοιτο",
        "note": "legacy manual layer"
      },
      {
        "slot": "future|middle/passive|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "βουλήσομαι",
        "note": "legacy manual layer"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "παθητικός αόριστος • οριστική • α΄ ενικό",
        "form": "ἐβουλήθην",
        "note": "legacy manual layer"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "ενεστώτας • μέση/παθητική • απαρέμφατο",
        "form": "βούλεσθαι",
        "note": "legacy manual layer"
      },
      {
        "slot": "future|middle/passive|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "βουλήσεσθαι",
        "note": "legacy manual layer"
      },
      {
        "slot": "present|middle/passive|participle|masc.nom.sg",
        "label": "ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "βουλόμενος",
        "note": "legacy manual layer"
      },
      {
        "slot": "perfect|middle/passive|participle|masc.nom.sg",
        "label": "παρακείμενος • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "βεβουλημένος",
        "note": "legacy manual layer"
      }
    ]
  },
  "δύναμαι": {
    "status": "manual+slots",
    "summary": "Tranche 23: operational re-indexing and audit hardening of a core modal deponent. Το tranche 23 αξιοποιεί το ήδη ενσωματωμένο manual school-core layer του bootstrap/tranche3 και προχωρεί σε operational re-indexing, ώστε οι τύποι του λήμματος να αναγνωρίζονται με σταθερό deponent tagging.",
    "slots": [
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "δύναμαι",
        "note": "legacy manual school-core layer"
      },
      {
        "slot": "present|middle/passive|subjunctive|3sg",
        "label": "ενεστώτας • μέση/παθητική • υποτακτική • γ΄ ενικό",
        "form": "δύνηται",
        "note": "legacy manual layer"
      },
      {
        "slot": "present|middle/passive|optative|2sg",
        "label": "ενεστώτας • μέση/παθητική • ευκτική • β΄ ενικό",
        "form": "δύναιο",
        "note": "legacy manual layer"
      },
      {
        "slot": "future|middle/passive|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "δυνήσομαι",
        "note": "legacy manual layer"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "παθητικός αόριστος • οριστική • α΄ ενικό",
        "form": "ἐδυνήθην",
        "note": "legacy manual layer"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "ενεστώτας • μέση/παθητική • απαρέμφατο",
        "form": "δύνασθαι",
        "note": "legacy manual layer"
      },
      {
        "slot": "future|middle/passive|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "δυνήσεσθαι",
        "note": "legacy manual layer"
      },
      {
        "slot": "present|middle/passive|participle|masc.nom.sg",
        "label": "ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "δυνάμενος",
        "note": "legacy manual layer"
      }
    ]
  },
  "γίγνομαι": {
    "status": "manual+slots",
    "summary": "Tranche 23: tag-corrected re-indexing and audit hardening of the most important irregular becoming verb. Το tranche 23 στηρίζεται στο ήδη ενσωματωμένο εκτεταμένο manual paradigm του bootstrap. Η νέα παρέμβαση διορθώνει συστηματικά τα malformed person-tags των δυϊκών και πληθυντικών σειρών πριν από την επανεισαγωγή τους στο FORM_INDEX, ώστε η «Αναγνώριση» να μην εμφανίζει λανθασμένα πρόσωπα σε τύπους όπως γιγνόμεθα, γίγνεσθε, γίγνονται, ἐγίγνοντο, γενήσονται και γένοιντο.",
    "slots": [
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "γίγνομαι",
        "note": "legacy extended manual paradigm"
      },
      {
        "slot": "present|middle/passive|indicative|1pl",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ πληθυντικό",
        "form": "γιγνόμεθᾰ",
        "note": "Tranche 23: corrected person-tag from malformed 1sg to 1pl"
      },
      {
        "slot": "present|middle/passive|indicative|3pl",
        "label": "ενεστώτας • μέση/παθητική • οριστική • γ΄ πληθυντικό",
        "form": "γίγνονται",
        "note": "Tranche 23: corrected person-tag from malformed 3sg to 3pl"
      },
      {
        "slot": "future|middle|indicative|3pl",
        "label": "μέλλοντας • μέση • οριστική • γ΄ πληθυντικό",
        "form": "γενήσονται",
        "note": "Tranche 23: corrected person-tagging in plural series"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος μέση • οριστική • α΄ ενικό",
        "form": "ἐγενόμην",
        "note": "legacy extended manual paradigm"
      },
      {
        "slot": "aorist|middle|optative|3pl",
        "label": "αόριστος μέση • ευκτική • γ΄ πληθυντικό",
        "form": "γένοιντο",
        "note": "Tranche 23: corrected person-tagging in plural series"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "ενεστώτας • μέση/παθητική • απαρέμφατο",
        "form": "γίγνεσθαι",
        "note": "legacy extended manual paradigm"
      },
      {
        "slot": "aorist|middle|infinitive",
        "label": "αόριστος μέση • απαρέμφατο",
        "form": "γενέσθαι",
        "note": "legacy extended manual paradigm"
      },
      {
        "slot": "aorist|middle|participle|masc.nom.sg",
        "label": "αόριστος μέση • μετοχή • αρσενικό ον. εν.",
        "form": "γενόμενος",
        "note": "legacy extended manual paradigm"
      },
      {
        "slot": "perfect|active|participle|masc.nom.sg",
        "label": "παρακείμενος • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "γεγονώς",
        "note": "legacy extended manual paradigm"
      }
    ]
  }
});
})();
