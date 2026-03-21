(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
    "ὑβρίζω": {
      status:"manual+slots",
      summary:"Νέο document-review tranche για ρήμα σε -ίζω με ρητή τεκμηρίωση του μέλλοντα ὑβριῶ και της χρονικής αύξησης ὕβριζον.",
      slots:[
        {slot:"present|active|indicative|1sg", label:"ενεστώτας • ενεργητική • οριστική • α΄ ενικό", form:"ὑβρίζω", note:"βασικός λημματικός τύπος"},
        {slot:"imperfect|active|indicative|1sg", label:"παρατατικός • ενεργητική • οριστική • α΄ ενικό", form:"ὕβριζον", note:"τεκμηριωμένη χρονική αύξηση"},
        {slot:"future|active|indicative|1sg", label:"μέλλοντας • ενεργητική • οριστική • α΄ ενικό", form:"ὑβριῶ", note:"σχολικός μέλλοντας ρημάτων σε -ίζω"},
        {slot:"aorist|active|indicative|1sg", label:"αόριστος • ενεργητική • οριστική • α΄ ενικό", form:"ὕβρισα", note:"κανονικός αόριστος α΄"},
        {slot:"aorist|passive|indicative|1sg", label:"αόριστος • παθητική • οριστική • α΄ ενικό", form:"ὑβρίσθην", note:"κανονικός παθητικός αόριστος α΄"},
        {slot:"present|active|infinitive", label:"ενεστώτας • ενεργητική • απαρέμφατο", form:"ὑβρίζειν", note:"βασικό σχολικό απαρέμφατο"}
      ]
    },
    "ψαύω": {
      status:"manual+slots",
      summary:"Νέο document-review tranche για βαρύτονο φωνηεντόληκτο ρήμα με ασφαλή τεκμηρίωση του αορίστου ἔψαυσα.",
      slots:[
        {slot:"present|active|indicative|1sg", label:"ενεστώτας • ενεργητική • οριστική • α΄ ενικό", form:"ψαύω", note:"βασικός λημματικός τύπος"},
        {slot:"future|active|indicative|1sg", label:"μέλλοντας • ενεργητική • οριστική • α΄ ενικό", form:"ψαύσω", note:"κανονικός μέλλοντας"},
        {slot:"aorist|active|indicative|1sg", label:"αόριστος • ενεργητική • οριστική • α΄ ενικό", form:"ἔψαυσα", note:"ρητά τεκμηριωμένος αόριστος"},
        {slot:"present|active|infinitive", label:"ενεστώτας • ενεργητική • απαρέμφατο", form:"ψαύειν", note:"κανονικό απαρέμφατο σε -ειν"},
        {slot:"aorist|active|infinitive", label:"αόριστος • ενεργητική • απαρέμφατο", form:"ψαῦσαι", note:"κανονικός αόριστος α΄ απαρεμφάτου"},
        {slot:"present|active|participle|masc.nom.sg", label:"ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.", form:"ψαύων", note:"βασική μετοχική βάση"}
      ]
    }
  });
})();
