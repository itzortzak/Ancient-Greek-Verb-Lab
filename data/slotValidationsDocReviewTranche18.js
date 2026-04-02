(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "προσεύχομαι": {
    "status": "manual+slots",
    "summary": "Tranche 18: συντηρητικός καθαρισμός του προσεύχομαι ως deponent με καθαρό present/imperfect/future/aorist middle layer και μη προσωπικούς τύπους.",
    "slots": [
      {
        "slot": "present|middle|indicative|1sg",
        "label": "ενεστώτας • μέση • οριστική • α΄ ενικό",
        "form": "προσεύχομαι",
        "note": "καθαρός deponent type"
      },
      {
        "slot": "imperfect|middle|indicative|1sg",
        "label": "παρατατικός • μέση • οριστική • α΄ ενικό",
        "form": "προσηυχόμην",
        "note": "εσωτερική αύξηση μετά την πρόθεση"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "προσεύξομαι",
        "note": "συγγενές με το εὔχομαι"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος • μέση • οριστική • α΄ ενικό",
        "form": "προσηυξάμην",
        "note": "βελτιωμένος clean past layer"
      },
      {
        "slot": "present|middle|infinitive",
        "label": "ενεστώτας • μέση • απαρέμφατο",
        "form": "προσεύχεσθαι",
        "note": "μη προσωπικός βασικός τύπος"
      },
      {
        "slot": "aorist|middle|participle|masc.nom.sg",
        "label": "αόριστος • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "προσευξάμενος",
        "note": "καθαρός aorist middle participle"
      }
    ]
  },
  "ὑπόκειμαι": {
    "status": "manual+slots",
    "summary": "Tranche 18: defective-stative patch για το ὑπόκειμαι με present system, imperative, infinitive και participle χωρίς εικαστική παρεκβολή σε μη τεκμηριωμένους past/future layers.",
    "slots": [
      {
        "slot": "present|middle|indicative|1sg",
        "label": "ενεστώτας • μέση • οριστική • α΄ ενικό",
        "form": "ὑπόκειμαι",
        "note": "βασικός stative type"
      },
      {
        "slot": "present|middle|indicative|3pl",
        "label": "ενεστώτας • μέση • οριστική • γ΄ πληθυντικό",
        "form": "ὑπόκεινται",
        "note": "διορθωμένος plural slot"
      },
      {
        "slot": "present|middle|imperative|2sg",
        "label": "ενεστώτας • μέση • προστακτική • β΄ ενικό",
        "form": "ὑπόκεισο",
        "note": "συντηρητική προστακτική από το κεῖμαι"
      },
      {
        "slot": "present|middle|infinitive",
        "label": "ενεστώτας • μέση • απαρέμφατο",
        "form": "ὑπόκεισθαι",
        "note": "παρόν non-finite core"
      },
      {
        "slot": "present|middle|participle|masc.nom.sg",
        "label": "ενεστώτας • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "ὑποκείμενος",
        "note": "μη προσωπική core συμμετοχή"
      }
    ]
  },
  "πάρειμι": {
    "status": "manual+slots",
    "summary": "Tranche 18: καθαρός πίνακας του present/imperfect system του πάρειμι βάσει του πίνακα των συνθέτων του εἰμί στο 05.1, με βασικούς non-finite τύπους και core variants της ευκτικής.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "πάρειμι",
        "note": "πίνακας 05.1"
      },
      {
        "slot": "present|active|indicative|3sg",
        "label": "ενεστώτας • ενεργητική • οριστική • γ΄ ενικό",
        "form": "πάρεστι(ν)",
        "note": "με optional movable nu"
      },
      {
        "slot": "present|active|subjunctive|1sg",
        "label": "ενεστώτας • ενεργητική • υποτακτική • α΄ ενικό",
        "form": "παρῶ",
        "note": "πίνακας 05.1"
      },
      {
        "slot": "present|active|optative|1sg",
        "label": "ενεστώτας • ενεργητική • ευκτική • α΄ ενικό",
        "form": "παρείην",
        "note": "κύριος τύπος ευκτικής"
      },
      {
        "slot": "present|active|imperative|2sg",
        "label": "ενεστώτας • ενεργητική • προστακτική • β΄ ενικό",
        "form": "πάρισθι",
        "note": "πίνακας 05.1"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "παρῆν",
        "note": "πίνακας 05.1"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "παρεῖναι",
        "note": "βασικό non-finite"
      },
      {
        "slot": "present|active|participle|masc.nom.sg",
        "label": "ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "παρών",
        "note": "βασική μετοχή"
      }
    ]
  }
}
  );
})();
