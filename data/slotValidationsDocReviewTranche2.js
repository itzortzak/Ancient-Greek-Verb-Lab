(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "ἄημι": {
    "status": "slot-validated",
    "summary": "Συντηρητικό document-review pass για το ποιητικό ἄημι, με κανονικοποίηση των βεβαιωμένων present slots και του non-finite layer.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἄημι",
        "note": "βεβαιωμένος ποιητικός τύπος"
      },
      {
        "slot": "present|active|indicative|3sg",
        "label": "ενεστώτας • ενεργητική • οριστική • γ΄ ενικό",
        "form": "ἄησι(ν)",
        "note": "βεβαιωμένος τύπος του present system"
      },
      {
        "slot": "present|active|indicative|3pl",
        "label": "ενεστώτας • ενεργητική • οριστική • γ΄ πληθυντικό",
        "form": "ἄεισι(ν)",
        "note": "βεβαιωμένος πληθυντικός"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "ἀῆναι",
        "note": "βεβαιωμένο non-finite slot"
      },
      {
        "slot": "present|active|participle|masc",
        "label": "ενεστώτας • ενεργητική • μετοχή αρσενικό",
        "form": "ἀείς",
        "note": "βεβαιωμένη μετοχική βάση"
      },
      {
        "slot": "present|middle/passive|participle|masc",
        "label": "ενεστώτας • μέση/παθητική • μετοχή αρσενικό",
        "form": "ἀήμενος",
        "note": "βεβαιωμένη μεσοπαθητική μετοχή"
      }
    ]
  },
  "νήθω": {
    "status": "slot-validated",
    "summary": "Συντηρητική συμπλήρωση present layer για το νήθω, διατηρώντας τα ήδη εισαγμένα imperfect δεδομένα.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "νήθω",
        "note": "regular present stem"
      },
      {
        "slot": "present|active|indicative|3sg",
        "label": "ενεστώτας • ενεργητική • οριστική • γ΄ ενικό",
        "form": "νήθει",
        "note": "βεβαιώνεται και στη μεταγενέστερη/βιβλική χρήση"
      },
      {
        "slot": "present|active|indicative|3pl",
        "label": "ενεστώτας • ενεργητική • οριστική • γ΄ πληθυντικό",
        "form": "νήθουσιν",
        "note": "βεβαιωμένος τύπος"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "νήθειν",
        "note": "regular omega-verb infinitive"
      },
      {
        "slot": "present|active|participle|masc",
        "label": "ενεστώτας • ενεργητική • μετοχή αρσενικό",
        "form": "νήθων",
        "note": "regular present participle"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "νήθεσκον",
        "note": "διατήρηση του ήδη εισαγμένου imperfect layer"
      }
    ]
  },
  "βάσκω": {
    "status": "slot-validated",
    "summary": "Αυστηρά συντηρητικό audit για το βάσκω: διατηρείται κυρίως το προστακτικό layer και προστίθεται το λεξικογραφικά βεβαιωμένο infinitive βάσκειν.",
    "slots": [
      {
        "slot": "present|active|imperative|2sg",
        "label": "ενεστώτας • ενεργητική • προστακτική • β΄ ενικό",
        "form": "βάσκε",
        "note": "ο κύριος βεβαιωμένος ομηρικός τύπος"
      },
      {
        "slot": "present|active|imperative|3sg",
        "label": "ενεστώτας • ενεργητική • προστακτική • γ΄ ενικό",
        "form": "βασκέτω",
        "note": "συμπληρωματικός προστακτικός τύπος του imported layer"
      },
      {
        "slot": "present|middle/passive|imperative|2sg",
        "label": "ενεστώτας • μέση/παθητική • προστακτική • β΄ ενικό",
        "form": "βάσκου",
        "note": "διατήρηση του υπάρχοντος imperative layer"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "βάσκειν",
        "note": "λεξικογραφικά βεβαιωμένο infinitive"
      },
      {
        "slot": "present|active|imperative|2pl",
        "label": "ενεστώτας • ενεργητική • προστακτική • β΄ πληθυντικό",
        "form": "βάσκετε",
        "note": "καθαρισμένη μορφή από τα imported δεδομένα"
      },
      {
        "slot": "present|middle/passive|imperative|2pl",
        "label": "ενεστώτας • μέση/παθητική • προστακτική • β΄ πληθυντικό",
        "form": "βάσκεσθε",
        "note": "καθαρισμένη μορφή από τα imported δεδομένα"
      }
    ]
  },
  "ἧμαι": {
    "status": "slot-validated",
    "summary": "Document-review κανονικοποίηση για το ἧμαι με present/imperfect middle-passive layer και καθαρό non-finite σύνολο.",
    "slots": [
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἧμαι",
        "note": "βεβαιωμένος ομηρικός/επικός τύπος"
      },
      {
        "slot": "present|middle/passive|indicative|3sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • γ΄ ενικό",
        "form": "ἧται",
        "note": "κανονικοποιημένος present slot"
      },
      {
        "slot": "present|middle/passive|indicative|3pl",
        "label": "ενεστώτας • μέση/παθητική • οριστική • γ΄ πληθυντικό",
        "form": "ἧνται",
        "note": "βεβαιωμένος present slot"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "ενεστώτας • μέση/παθητική • απαρέμφατο",
        "form": "ἧσθαι",
        "note": "βεβαιωμένο απαρέμφατο"
      },
      {
        "slot": "present|middle/passive|participle|masc",
        "label": "ενεστώτας • μέση/παθητική • μετοχή αρσενικό",
        "form": "ἥμενος",
        "note": "βεβαιωμένη μετοχή"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἥμην",
        "note": "καθαρισμένος past slot"
      }
    ]
  },
  "πρόσφημι": {
    "status": "slot-validated",
    "summary": "Συντηρητικός έλεγχος του επικού πρόσφημι, το οποίο στο corpus βεβαιώνεται κυρίως με imperfect forms όπως προσέφη.",
    "slots": [
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "προσέφην",
        "note": "βεβαιωμένος imported τύπος"
      },
      {
        "slot": "imperfect|active|indicative|2sg",
        "label": "παρατατικός • ενεργητική • οριστική • β΄ ενικό",
        "form": "προσέφης",
        "note": "βεβαιωμένος imported τύπος"
      },
      {
        "slot": "imperfect|active|indicative|3sg",
        "label": "παρατατικός • ενεργητική • οριστική • γ΄ ενικό",
        "form": "προσέφη",
        "note": "βεβαιωμένος imported τύπος"
      },
      {
        "slot": "imperfect|active|indicative|1pl",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ πληθυντικό",
        "form": "προσέφαμεν",
        "note": "βεβαιωμένος imported τύπος"
      },
      {
        "slot": "imperfect|active|indicative|2pl",
        "label": "παρατατικός • ενεργητική • οριστική • β΄ πληθυντικό",
        "form": "προσέφατε",
        "note": "βεβαιωμένος imported τύπος"
      },
      {
        "slot": "imperfect|active|indicative|3pl",
        "label": "παρατατικός • ενεργητική • οριστική • γ΄ πληθυντικό",
        "form": "προσέφασαν",
        "note": "βεβαιωμένος imported τύπος"
      }
    ]
  }
});
})();
