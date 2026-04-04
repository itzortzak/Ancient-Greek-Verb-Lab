(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "νήθω": {
    "status": "manual+slots",
    "summary": "Tranche 39: corrective re-tagging του iterative imperfect layer και source-backed regularization του active present system του νήθω, χωρίς επέκταση σε μέλλοντα ή αόριστο χωρίς ασφαλή principal parts.",
    "slots": [
      {"slot":"imperfect|active|indicative|3pl","label":"παρατατικός • ενεργητική • οριστική • γ΄ πληθυντικό","form":"νήθεσκον","note":"διορθώνει το παλαιό person-tag του ίδιου form ως 3sg"},
      {"slot":"imperfect|active|indicative|1pl","label":"παρατατικός • ενεργητική • οριστική • α΄ πληθυντικό","form":"νηθέσκομεν","note":"διορθώνει το παλαιό person-tag του πληθυντικού"},
      {"slot":"imperfect|middle/passive|indicative|3pl","label":"παρατατικός • μέση/παθητική • οριστική • γ΄ πληθυντικό","form":"νηθέσκοντο","note":"διορθώνει το παλαιό person-tag του mp plural layer"},
      {"slot":"present|active|indicative|3pl","label":"ενεστώτας • ενεργητική • οριστική • γ΄ πληθυντικό","form":"νήθουσι(ν)","note":"βεβαιωμένος τύπος του λήμματος και anchor του νέου pass"},
      {"slot":"present|active|subjunctive|3pl","label":"ενεστώτας • ενεργητική • υποτακτική • γ΄ πληθυντικό","form":"νήθωσι(ν)","note":"κανονική αναλογική συμπλήρωση από τα βαρύτονα ρήματα σε -ω"},
      {"slot":"present|active|optative|1sg","label":"ενεστώτας • ενεργητική • ευκτική • α΄ ενικό","form":"νήθοιμι","note":"κανονική ευκτική του active present"},
      {"slot":"present|active|imperative|2sg","label":"ενεστώτας • ενεργητική • προστακτική • β΄ ενικό","form":"νῆθε","note":"κανονική προστακτική present active"},
      {"slot":"present|active|infinitive","label":"ενεστώτας • ενεργητική • απαρέμφατο","form":"νήθειν","note":"κανονικό απαρέμφατο των βαρυτόνων ρημάτων σε -ω"},
      {"slot":"present|active|participle|masc.nom.sg","label":"ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"νήθων","note":"κανονική μετοχική βάση του present system"}
    ]
  }
}
  );
})();
