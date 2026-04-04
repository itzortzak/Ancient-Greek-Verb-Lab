(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "ἄπειμι": {
    "status": "manual+slots",
    "summary": "Tranche 19: ανακανονικοποίηση του ἄπειμι ως χωριστού σχολικού λήμματος με present/imperfect system, βασικές εγκλίσεις, απαρέμφατο και μετοχή.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἄπειμι",
        "note": "χειροκίνητη διάκριση από τα υβριδικά auto-generated forms"
      },
      {
        "slot": "present|active|indicative|3sg",
        "label": "ενεστώτας • ενεργητική • οριστική • γ΄ ενικό",
        "form": "ἄπεστι(ν)",
        "note": "διορθωμένο school-grammar slot"
      },
      {
        "slot": "present|active|imperative|2pl",
        "label": "ενεστώτας • ενεργητική • προστακτική • β΄ πληθυντικό",
        "form": "ἄπεστε",
        "note": "βασικός σχολικός τύπος"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἀπῆν",
        "note": "καθαρό ιστορικό slot"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "ἀπεῖναι",
        "note": "βασικό non-finite"
      },
      {
        "slot": "present|active|participle|masc.nom.sg",
        "label": "ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἀπών",
        "note": "μη προσωπικός πυρήνας"
      }
    ]
  },
  "συμπίπτω": {
    "status": "manual+slots",
    "summary": "Tranche 19: καθαρισμός του συμπίπτω με σωστούς πληθυντικούς/προσωπικούς δείκτες και συντηρητική προσθήκη future/aorist και μη προσωπικών τύπων.",
    "slots": [
      {
        "slot": "present|active|indicative|1pl",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ πληθυντικό",
        "form": "συμπίπτομεν",
        "note": "διορθωμένος plural slot"
      },
      {
        "slot": "present|active|indicative|3pl",
        "label": "ενεστώτας • ενεργητική • οριστική • γ΄ πληθυντικό",
        "form": "συμπίπτουσι(ν)",
        "note": "διορθωμένο plural slot"
      },
      {
        "slot": "imperfect|active|indicative|1pl",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ πληθυντικό",
        "form": "συνεπίπτομεν",
        "note": "διορθωμένος ιστορικός plural slot"
      },
      {
        "slot": "future|middle|indicative|3sg",
        "label": "μέλλοντας • μέση • οριστική • γ΄ ενικό",
        "form": "συμπεσεῖται",
        "note": "συντηρητική hardening του future layer"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος • ενεργητική • οριστική • α΄ ενικό",
        "form": "συνέπεσον",
        "note": "β΄ αόριστος active core"
      },
      {
        "slot": "aorist|active|infinitive",
        "label": "αόριστος • ενεργητική • απαρέμφατο",
        "form": "συμπεσεῖν",
        "note": "core non-finite"
      }
    ]
  },
  "πρόσφημι": {
    "status": "manual+slots",
    "summary": "Tranche 19: συντηρητική επιμέλεια του πρόσφημι ως past-biased epic lemma με διορθωμένους dual/plural δείκτες και διατήρηση μόνο του βεβαιωμένου layer.",
    "slots": [
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "προσέφην",
        "note": "epic past-biased core"
      },
      {
        "slot": "imperfect|active|indicative|2sg",
        "label": "παρατατικός • ενεργητική • οριστική • β΄ ενικό",
        "form": "προσέφησθα",
        "note": "βεβαιωμένη παραλλαγή β΄ ενικού"
      },
      {
        "slot": "imperfect|active|indicative|1pl",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ πληθυντικό",
        "form": "προσέφαμεν",
        "note": "διορθωμένος plural δείκτης"
      },
      {
        "slot": "imperfect|active|indicative|3pl",
        "label": "παρατατικός • ενεργητική • οριστική • γ΄ πληθυντικό",
        "form": "προσέφασαν",
        "note": "διορθωμένος plural δείκτης"
      },
      {
        "slot": "aorist|middle|infinitive",
        "label": "αόριστος • μέση • απαρέμφατο",
        "form": "προσφάσθαι",
        "note": "διατηρημένο non-finite layer"
      }
    ]
  }
}
  );
})();
