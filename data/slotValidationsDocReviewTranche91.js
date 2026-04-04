(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "μέμονα": {
    "status": "manual+slots",
    "summary": "Tranche 91: metadata-normalized defective-perfect core του μέμονα με perfect indicative / imperative, pluperfect indicative, δύο infinitives και participial axis.",
    "slots": [
      {"slot":"perfect|active|indicative|1sg","label":"perfect • ενεργητική • οριστική • α΄ ενικό","form":"μέμονα","note":"βασικός stative / desiderative τύπος"},
      {"slot":"perfect|active|indicative|3pl","label":"perfect • ενεργητική • οριστική • γ΄ πληθυντικό","form":"μέμασι(ν)","note":"διατηρείται ο διπλός τελικός τύπος χωρίς speculative expansion"},
      {"slot":"perfect|active|imperative|3sg","label":"perfect • ενεργητική • προστακτική • γ΄ ενικό","form":"μεμάτω","note":"διατηρείται ως explicit imperative anchor του imported footprint"},
      {"slot":"pluperfect|active|indicative|1sg","label":"pluperfect • ενεργητική • οριστική • α΄ ενικό","form":"μεμόνειν","note":"κύριος ιστορικός anchor"},
      {"slot":"pluperfect|active|indicative|3pl","label":"pluperfect • ενεργητική • οριστική • γ΄ πληθυντικό","form":"μέμασαν","note":"historical plural anchor"},
      {"slot":"perfect|active|infinitive","label":"perfect • ενεργητική • απαρέμφατο","form":"μεμονέναι","note":"κύριο non-finite anchor του package footprint"},
      {"slot":"perfect|active|participle|masc.nom.sg","label":"perfect • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"μεμαώς","note":"κύρια μετοχική βάση"}
    ]
  }
}
  );
})();
