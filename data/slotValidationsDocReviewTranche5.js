(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
    "αὐξάνω": {
      status:"manual+slots",
      summary:"Νέο document-review tranche για μικτό παροντικό σύστημα αὔξω/αὐξάνω, με ασφαλή σχολική τεκμηρίωση των βασικών ενεργητικών και μέσο-παθητικών χρόνων.",
      slots:[
        {slot:"present|active|indicative|1sg", label:"ενεστώτας • ενεργητική • οριστική • α΄ ενικό", form:"αὐξάνω", note:"βασικός λημματικός τύπος του αναλυτικού present layer"},
        {slot:"imperfect|active|indicative|1sg", label:"παρατατικός • ενεργητική • οριστική • α΄ ενικό", form:"ηὔξανον", note:"σχολικά τεκμηριωμένη χρονική αύξηση αυ > ηυ"},
        {slot:"future|active|indicative|1sg", label:"μέλλοντας • ενεργητική • οριστική • α΄ ενικό", form:"αὐξήσω", note:"ρητά βεβαιωμένος μέλλοντας"},
        {slot:"aorist|active|indicative|1sg", label:"αόριστος • ενεργητική • οριστική • α΄ ενικό", form:"ηὔξησα", note:"ρητά βεβαιωμένος αόριστος α΄"},
        {slot:"aorist|passive|indicative|1sg", label:"αόριστος • παθητική • οριστική • α΄ ενικό", form:"ηὐξήθην", note:"ρητά βεβαιωμένος παθητικός αόριστος"},
        {slot:"present|active|infinitive", label:"ενεστώτας • ενεργητική • απαρέμφατο", form:"αὐξάνειν", note:"κανονικό σχολικό απαρέμφατο"},
        {slot:"present|active|participle|masc.nom.sg", label:"ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.", form:"αὐξάνων", note:"βασική μετοχική βάση"}
      ]
    },
    "ὑγιαίνω": {
      status:"manual+slots",
      summary:"Νέο document-review tranche για ενρινόληκτο ρήμα σε -αίνω, με σχολικά βεβαιωμένους τύπους ὑγιανῶ και ὑγίανα και με συντηρητική μη προσωπική ανάπτυξη.",
      slots:[
        {slot:"present|active|indicative|1sg", label:"ενεστώτας • ενεργητική • οριστική • α΄ ενικό", form:"ὑγιαίνω", note:"βασικός λημματικός τύπος"},
        {slot:"present|active|optative|2sg", label:"ενεστώτας • ενεργητική • ευκτική • β΄ ενικό", form:"ὑγιαίνοις", note:"ρητά βεβαιωμένος παραδειγματικός τύπος"},
        {slot:"future|active|indicative|1sg", label:"μέλλοντας • ενεργητική • οριστική • α΄ ενικό", form:"ὑγιανῶ", note:"σχολικός μέλλοντας ενρινόληκτων σε -αίνω"},
        {slot:"aorist|active|indicative|1sg", label:"αόριστος • ενεργητική • οριστική • α΄ ενικό", form:"ὑγίανα", note:"σχολικά βεβαιωμένος αόριστος χωρίς -σα"},
        {slot:"present|active|infinitive", label:"ενεστώτας • ενεργητική • απαρέμφατο", form:"ὑγιαίνειν", note:"βεβαιωμένο απαρέμφατο χρήσης"},
        {slot:"aorist|active|participle|masc.nom.sg", label:"αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.", form:"ὑγιάνας", note:"τεκμηριωμένος αοριστικός μετοχικός τύπος"}
      ]
    }
  });
})();
