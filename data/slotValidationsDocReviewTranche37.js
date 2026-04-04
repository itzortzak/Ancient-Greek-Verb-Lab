(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "βάσκω": {
    "status": "slot-validated",
    "summary": "Συντηρητικό corrective pass για το βάσκω: διατηρείται ο υπάρχων προστακτικός/απαρεμφατικός πυρήνας και διορθώνονται τα plural person-tags του imported layer.",
    "slots": [
      {"slot":"present|active|imperative|2sg","label":"ενεστώτας • ενεργητική • προστακτική • β΄ ενικό","form":"βάσκε","note":"ο κύριος βεβαιωμένος ομηρικός τύπος"},
      {"slot":"present|active|imperative|3sg","label":"ενεστώτας • ενεργητική • προστακτική • γ΄ ενικό","form":"βασκέτω","note":"συμπληρωματικός προστακτικός τύπος του imported layer"},
      {"slot":"present|active|imperative|2pl","label":"ενεστώτας • ενεργητική • προστακτική • β΄ πληθυντικό","form":"βάσκετε","note":"διορθωμένο plural person-tag"},
      {"slot":"present|active|imperative|3pl","label":"ενεστώτας • ενεργητική • προστακτική • γ΄ πληθυντικό","form":"βασκόντων","note":"διορθωμένο plural person-tag"},
      {"slot":"present|middle/passive|imperative|2pl","label":"ενεστώτας • μέση/παθητική • προστακτική • β΄ πληθυντικό","form":"βάσκεσθε","note":"διορθωμένο plural person-tag"},
      {"slot":"present|active|infinitive","label":"ενεστώτας • ενεργητική • απαρέμφατο","form":"βάσκειν","note":"λεξικογραφικά βεβαιωμένο infinitive"}
    ]
  }
}
  );
})();
