(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "ἄημι": {
    "status": "manual+slots",
    "summary": "Tranche 40: source-backed normalization του ποιητικού defective ἄημι, με καθαρισμό του imported Unicode layer, διόρθωση του γ΄ πληθυντικού και μικρή επέκταση σε βεβαιωμένα infinitive / participial slots.",
    "slots": [
      {"slot":"present|active|indicative|1sg","label":"ενεστώτας • ενεργητική • οριστική • α΄ ενικό","form":"ἄημι","note":"βασικός βεβαιωμένος τύπος του λήμματος"},
      {"slot":"present|active|indicative|3sg","label":"ενεστώτας • ενεργητική • οριστική • γ΄ ενικό","form":"ἄησι(ν)","note":"ρητά καταγεγραμμένο στην LSJ/Scaife"},
      {"slot":"present|active|indicative|3pl","label":"ενεστώτας • ενεργητική • οριστική • γ΄ πληθυντικό","form":"ἄεισι(ν)","note":"διορθώνει το παλαιό person-tag 3sg του imported layer"},
      {"slot":"present|active|imperative|3sg","label":"ενεστώτας • ενεργητική • προστακτική • γ΄ ενικό","form":"ἀήτω","note":"βεβαιωμένη προστακτική στην LSJ/Scaife"},
      {"slot":"present|active|infinitive","label":"ενεστώτας • ενεργητική • απαρέμφατο","form":"ἀῆναι","note":"βασικό infinitive του λήμματος"},
      {"slot":"present|active|infinitive|epic","label":"ενεστώτας • ενεργητική • απαρέμφατο (επικό)","form":"ἀήμεναι","note":"επική παραλλαγή του infinitive"},
      {"slot":"present|active|participle|masc.nom.sg","label":"ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"ἀείς","note":"βεβαιωμένη μετοχική βάση"},
      {"slot":"present|active|participle|masc.nom.pl","label":"ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. πληθ.","form":"ἀέντες","note":"αυθεντικός πληθυντικός τύπος, χρήσιμος και για την Αναγνώριση"},
      {"slot":"present|middle/passive|participle|masc.nom.sg","label":"ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.","form":"ἀήμενος","note":"βεβαιωμένη μεσοπαθητική μετοχή"},
      {"slot":"imperfect|active|indicative|3sg","label":"παρατατικός • ενεργητική • οριστική • γ΄ ενικό","form":"ἄη","note":"βεβαιωμένος defective imperfect"},
      {"slot":"imperfect|middle/passive|indicative|3sg","label":"παρατατικός • μέση/παθητική • οριστική • γ΄ ενικό","form":"ἄητο","note":"βεβαιωμένος defective imperfect middle/passive"}
    ]
  }
});
})();
