(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "ἧμαι": {
    "status": "manual+slots",
    "summary": "Tranche 38: source-backed hardening του ἧμαι με διόρθωση του perfect-present core, συμπλήρωση δυϊκών και επικών παραλλαγών του 3ου πληθυντικού, χωρίς υπερεπέκταση σε μη βεβαιωμένο subj./opt. του simplex.",
    "slots": [
      {"slot":"present|middle/passive|indicative|3sg","label":"perfect-present • μέση/παθητική • οριστική • γ΄ ενικό","form":"ἧσται","note":"διορθώνει το εσφαλμένο ἧται του παλαιού layer"},
      {"slot":"present|middle/passive|indicative|3pl","label":"perfect-present • μέση/παθητική • οριστική • γ΄ πληθυντικό","form":"ἧνται","note":"βασικός αττικός τύπος κατά LSJ"},
      {"slot":"present|middle/passive|indicative|3pl|epic","label":"perfect-present • μέση/παθητική • οριστική • γ΄ πληθυντικό (επικές παραλλαγές)","form":"εἵαται / ἕαται","note":"επικοί/παραλλαγμένοι πληθυντικοί τύποι"},
      {"slot":"imperfect|middle/passive|indicative|3du","label":"pluperfect-imperfect • μέση/παθητική • οριστική • γ΄ δυϊκό","form":"ἥσθην","note":"δυϊκός τύπος του pluperfect layer"},
      {"slot":"imperfect|middle/passive|indicative|3pl","label":"pluperfect-imperfect • μέση/παθητική • οριστική • γ΄ πληθυντικό","form":"ἧντο","note":"βασικός πληθυντικός τύπος"},
      {"slot":"imperfect|middle/passive|indicative|3pl|epic","label":"pluperfect-imperfect • μέση/παθητική • οριστική • γ΄ πληθυντικό (επικές παραλλαγές)","form":"εἵατο / ἕατο","note":"επικές παραλλαγές του πληθυντικού"},
      {"slot":"present|middle/passive|imperative|3pl","label":"present • μέση/παθητική • προστακτική • γ΄ πληθυντικό","form":"ἥσθων","note":"ίδιος τύπος με το γ΄ δυϊκό"},
      {"slot":"present|middle/passive|participle|fem.nom.sg","label":"present • μέση/παθητική • μετοχή • θηλυκό ον. εν.","form":"ἥμενη","note":"διορθώνει το εσφαλμένο ἡμένη του παλαιού layer"}
    ]
  }
}
  );
})();
