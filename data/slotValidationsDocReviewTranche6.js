(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "αἰτέω": {
    "status": "manual+slots",
    "summary": "Νέο tranche χειροκίνητης συνηρημένης αποκατάστασης για το αἰτέω, με πλήρη present contracted layer, βασικούς ιστορικούς χρόνους και μη προσωπικούς τύπους πάνω στους βεβαιωμένους αρχικούς χρόνους ᾔτουν, αἰτήσω, ᾔτησα, ᾔτηκα.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "αἰτῶ",
        "note": "συνηρημένη ορατή μορφή αντί generated uncontracted output"
      },
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "αἰτοῦμαι",
        "note": "συνηρημένη present middle/passive προβολή"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ᾔτουν",
        "note": "βεβαιωμένος αρχικός χρόνος"
      },
      {
        "slot": "future|active|indicative|1sg",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό",
        "form": "αἰτήσω",
        "note": "βεβαιωμένος αρχικός χρόνος"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ᾔτησα",
        "note": "βεβαιωμένος αρχικός χρόνος"
      },
      {
        "slot": "perfect|active|indicative|1sg",
        "label": "παρακείμενος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ᾔτηκα",
        "note": "βεβαιωμένος αρχικός χρόνος"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "αἰτεῖν",
        "note": "συνηρημένο απαρέμφατο"
      },
      {
        "slot": "aorist|active|participle|masc.nom.sg",
        "label": "αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "αἰτήσας",
        "note": "συντηρητική μη προσωπική αποκατάσταση από βεβαιωμένο αόριστο α΄"
      }
    ]
  },
  "πρόσφημι": {
    "status": "manual+slots",
    "summary": "Αυστηρότερο επικό tranche για το πρόσφημι: χειροκίνητη αποκατάσταση του βεβαιωμένου imperfect layer και προσθήκη του μαρτυρημένου προσφάσθαι, χωρίς εικαστική επέκταση σε unsupported present/future series.",
    "slots": [
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "προσέφην",
        "note": "βεβαιωμένος επικός past type"
      },
      {
        "slot": "imperfect|active|indicative|2sg",
        "label": "παρατατικός • ενεργητική • οριστική • β΄ ενικό",
        "form": "προσέφης",
        "note": "κύρια β΄ ενικού μορφή, με παράλληλο variant προσέφησθα"
      },
      {
        "slot": "imperfect|active|indicative|3sg",
        "label": "παρατατικός • ενεργητική • οριστική • γ΄ ενικό",
        "form": "προσέφη",
        "note": "ο συχνότερος επικός narrativus τύπος"
      },
      {
        "slot": "imperfect|active|indicative|2du",
        "label": "παρατατικός • ενεργητική • οριστική • β΄ δυϊκό",
        "form": "προσέφατον",
        "note": "βεβαιωμένος δυϊκός slot"
      },
      {
        "slot": "imperfect|active|indicative|1pl",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ πληθυντικό",
        "form": "προσέφαμεν",
        "note": "διορθωμένος plural person tag έναντι του imported layer"
      },
      {
        "slot": "imperfect|active|indicative|3pl",
        "label": "παρατατικός • ενεργητική • οριστική • γ΄ πληθυντικό",
        "form": "προσέφασαν",
        "note": "διορθωμένος plural person tag έναντι του imported layer"
      },
      {
        "slot": "aorist|middle|infinitive",
        "label": "αόριστος • μέση • απαρέμφατο",
        "form": "προσφάσθαι",
        "note": "μαρτυρημένο non-finite add-on χωρίς επέκταση σε ανυπόστατο full paradigm"
      }
    ]
  }
});
})();
