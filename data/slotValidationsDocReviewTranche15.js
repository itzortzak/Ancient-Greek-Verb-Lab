(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "ἀναλίσκω": {
    "status": "manual+slots",
    "summary": "Νέο manual tranche για το ἀναλίσκω, με αναλυτικό present/imperfect active και middle-passive layer, βεβαιωμένους χρόνους ἀναλώσω, ἀνήλωσα, ἀνήλωκα και παθητική σειρά ἀναλωθήσομαι, ἀνηλώθην, ἀνήλωμαι, μαζί με βασικά απαρέμφατα και μετοχές.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἀναλίσκω",
        "note": "βασικός λημματικός τύπος"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἀνήλισκον",
        "note": "βεβαιωμένος και στον Οικονόμου και στον Τζαρτζάνο"
      },
      {
        "slot": "future|active|indicative|1sg",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἀναλώσω",
        "note": "ρητά βεβαιωμένος μέλλοντας"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἀνήλωσα",
        "note": "ρητά βεβαιωμένος αόριστος"
      },
      {
        "slot": "perfect|active|indicative|1sg",
        "label": "παρακείμενος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἀνήλωκα",
        "note": "ρητά βεβαιωμένος παρακείμενος"
      },
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἀναλίσκομαι",
        "note": "βεβαιωμένος μέσος/παθητικός ενεστώτας"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἀνηλισκόμην",
        "note": "βεβαιωμένος παρατατικός μέσης/παθητικής"
      },
      {
        "slot": "future|passive|indicative|1sg",
        "label": "παθητικός μέλλοντας • οριστική • α΄ ενικό",
        "form": "ἀναλωθήσομαι",
        "note": "ρητά βεβαιωμένος παθητικός μέλλοντας"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "παθητικός αόριστος • οριστική • α΄ ενικό",
        "form": "ἀνηλώθην",
        "note": "ρητά βεβαιωμένος παθητικός αόριστος"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἀνήλωμαι",
        "note": "ρητά βεβαιωμένος παρακείμενος μέσης/παθητικής"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "ἀναλίσκειν",
        "note": "κανονικό απαρέμφατο ενεστώτα"
      },
      {
        "slot": "aorist|active|infinitive",
        "label": "αόριστος • ενεργητική • απαρέμφατο",
        "form": "ἀναλῶσαι",
        "note": "κανονικό απαρέμφατο του βεβαιωμένου αορίστου"
      },
      {
        "slot": "aorist|passive|infinitive",
        "label": "παθητικός αόριστος • απαρέμφατο",
        "form": "ἀναλωθῆναι",
        "note": "κανονικό απαρέμφατο του βεβαιωμένου παθητικού αορίστου"
      },
      {
        "slot": "present|active|participle|masc.nom.sg",
        "label": "ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἀναλίσκων",
        "note": "βασική present active μετοχή"
      },
      {
        "slot": "aorist|active|participle|masc.nom.sg",
        "label": "αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἀναλώσας",
        "note": "κανονική μετοχή αορίστου"
      },
      {
        "slot": "aorist|passive|participle|masc.nom.sg",
        "label": "παθητικός αόριστος • μετοχή • αρσενικό ον. εν.",
        "form": "ἀναλωθείς",
        "note": "κανονική μετοχή του παθητικού αορίστου"
      }
    ]
  },
  "ἀποκρίνομαι": {
    "status": "manual+slots",
    "summary": "Εμβάθυνση του προϋπάρχοντος manual layer για το ἀποκρίνομαι, με πλήρες present/imperfect/future/aorist middle indicative, ενισχυμένη προστακτική και νέα λημματοκεντρική κάλυψη απαρεμφάτων και μετοχών.",
    "slots": [
      {
        "slot": "present|middle|indicative|1sg",
        "label": "ενεστώτας • μέση • οριστική • α΄ ενικό",
        "form": "ἀποκρίνομαι",
        "note": "βασικός λημματικός τύπος"
      },
      {
        "slot": "imperfect|middle|indicative|1sg",
        "label": "παρατατικός • μέση • οριστική • α΄ ενικό",
        "form": "ἀπεκρινόμην",
        "note": "συντηρητική αναλογική πλήρωση του historical layer"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "ἀποκρινοῦμαι",
        "note": "βεβαιωμένος μέλλοντας στο υπάρχον manual layer"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος • μέση • οριστική • α΄ ενικό",
        "form": "ἀπεκρινάμην",
        "note": "βεβαιωμένος αόριστος στο υπάρχον manual layer"
      },
      {
        "slot": "present|middle|imperative|2sg",
        "label": "ενεστώτας • μέση • προστακτική • β΄ ενικό",
        "form": "ἀποκρίνου",
        "note": "βασικός προστακτικός τύπος"
      },
      {
        "slot": "aorist|middle|imperative|2sg",
        "label": "αόριστος • μέση • προστακτική • β΄ ενικό",
        "form": "ἀπόκριναι",
        "note": "κανονική προστακτική αορίστου"
      },
      {
        "slot": "present|middle|infinitive",
        "label": "ενεστώτας • μέση • απαρέμφατο",
        "form": "ἀποκρίνεσθαι",
        "note": "βασικό απαρέμφατο"
      },
      {
        "slot": "future|middle|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "ἀποκρινεῖσθαι",
        "note": "future infinitive από τον βεβαιωμένο μέλλοντα"
      },
      {
        "slot": "aorist|middle|infinitive",
        "label": "αόριστος • μέση • απαρέμφατο",
        "form": "ἀποκρίνασθαι",
        "note": "βασικό απαρέμφατο αορίστου"
      },
      {
        "slot": "present|middle|participle|masc.nom.sg",
        "label": "ενεστώτας • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "ἀποκρινόμενος",
        "note": "βασική present middle μετοχή"
      },
      {
        "slot": "future|middle|participle|masc.nom.sg",
        "label": "μέλλοντας • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "ἀποκρινούμενος",
        "note": "future participle"
      },
      {
        "slot": "aorist|middle|participle|masc.nom.sg",
        "label": "αόριστος • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "ἀποκρινάμενος",
        "note": "aorist middle participle"
      }
    ]
  }
}
);
})();
