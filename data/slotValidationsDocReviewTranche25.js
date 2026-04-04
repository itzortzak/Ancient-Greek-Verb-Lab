(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "ἔρχομαι": {
    "status": "manual+slots",
    "summary": "Tranche 25: new source-backed supplemented school-core paradigm για το ἔρχομαι, με present indicative deponent layer, present supplementation από το εἶμι και αόριστο β΄ ἦλθον.",
    "slots": [
      {
        "slot": "present|middle|indicative|1sg",
        "label": "ενεστώτας • μέση • οριστική • α΄ ενικό",
        "form": "ἔρχομαι",
        "note": "05.1/σχολικός πίνακας του ἔρχομαι"
      },
      {
        "slot": "present|active|subjunctive|1sg",
        "label": "ενεστώτας (αναπληρωματικός) • ενεργητική • υποτακτική • α΄ ενικό",
        "form": "ἴω",
        "note": "05.1: το ἔρχομαι αναπληρώνεται στις εγκλίσεις του ενεστώτα από το εἶμι"
      },
      {
        "slot": "present|active|imperative|2sg",
        "label": "ενεστώτας (αναπληρωματικός) • ενεργητική • προστακτική • β΄ ενικό",
        "form": "ἴθι",
        "note": "05.1: supplement από το εἶμι"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "ἐλεύσομαι",
        "note": "05.1/05.2 αρχικοί χρόνοι"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος β΄ • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἦλθον",
        "note": "05.1/05.2 αρχικοί χρόνοι"
      },
      {
        "slot": "aorist|active|subjunctive|1sg",
        "label": "αόριστος β΄ • ενεργητική • υποτακτική • α΄ ενικό",
        "form": "ἔλθω",
        "note": "σχολικός αόριστος β΄"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας (αναπληρωματικός) • ενεργητική • απαρέμφατο",
        "form": "ἰέναι",
        "note": "05.1: supplement από το εἶμι"
      },
      {
        "slot": "aorist|active|participle|masc.nom.sg",
        "label": "αόριστος β΄ • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἐλθών",
        "note": "σχολική μετοχή αορίστου β΄"
      }
    ]
  },
  "πάσχω": {
    "status": "manual+slots",
    "summary": "Tranche 25: extended school-core manual paradigm για το πάσχω, με present system, irregular future πείσομαι και αόριστο β΄ ἔπαθον, μαζί με βασικές εγκλίσεις και non-finite τύπους.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "πάσχω",
        "note": "legacy manual + σχολική επέκταση"
      },
      {
        "slot": "present|active|subjunctive|3sg",
        "label": "ενεστώτας • ενεργητική • υποτακτική • γ΄ ενικό",
        "form": "πάσχῃ",
        "note": "school-core extension"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "πείσομαι",
        "note": "05.1/05.2 αρχικοί χρόνοι"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος β΄ • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἔπαθον",
        "note": "05.1/05.2 αρχικοί χρόνοι"
      },
      {
        "slot": "aorist|active|subjunctive|1sg",
        "label": "αόριστος β΄ • ενεργητική • υποτακτική • α΄ ενικό",
        "form": "πάθω",
        "note": "school-core extension"
      },
      {
        "slot": "aorist|active|imperative|2sg",
        "label": "αόριστος β΄ • ενεργητική • προστακτική • β΄ ενικό",
        "form": "πάθε",
        "note": "school-core extension"
      },
      {
        "slot": "future|middle|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "πείσεσθαι",
        "note": "core non-finite layer"
      },
      {
        "slot": "aorist|active|participle|masc.nom.sg",
        "label": "αόριστος β΄ • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "παθών",
        "note": "χαρακτηριστική μετοχή β΄ αορίστου"
      }
    ]
  },
  "πίπτω": {
    "status": "manual+slots",
    "summary": "Tranche 25: extended school-core manual paradigm για το πίπτω, με present system, future middle πεσοῦμαι και αόριστο β΄ ἔπεσον, μαζί με βασικές εγκλίσεις και non-finite τύπους.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "πίπτω",
        "note": "legacy manual + σχολική επέκταση"
      },
      {
        "slot": "present|active|subjunctive|3sg",
        "label": "ενεστώτας • ενεργητική • υποτακτική • γ΄ ενικό",
        "form": "πίπτῃ",
        "note": "school-core extension"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "πεσοῦμαι",
        "note": "05.1/05.2 αρχικοί χρόνοι"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος β΄ • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἔπεσον",
        "note": "05.1/05.2 αρχικοί χρόνοι"
      },
      {
        "slot": "aorist|active|subjunctive|1sg",
        "label": "αόριστος β΄ • ενεργητική • υποτακτική • α΄ ενικό",
        "form": "πέσω",
        "note": "school-core extension"
      },
      {
        "slot": "aorist|active|imperative|2sg",
        "label": "αόριστος β΄ • ενεργητική • προστακτική • β΄ ενικό",
        "form": "πέσε",
        "note": "school-core extension"
      },
      {
        "slot": "future|middle|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "πεσεῖσθαι",
        "note": "core non-finite layer"
      },
      {
        "slot": "aorist|active|participle|masc.nom.sg",
        "label": "αόριστος β΄ • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "πεσών",
        "note": "χαρακτηριστική μετοχή β΄ αορίστου"
      }
    ]
  }
});
})();
