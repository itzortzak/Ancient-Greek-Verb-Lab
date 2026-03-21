(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
    "μεταφωνέω": {
      status:"slot-validated",
      summary:"Συμπλήρωση του συνηρημένου λήμματος με σχολικά regular slots present/future/aorist και μη προσωπικούς τύπους.",
      slots:[
        {slot:"present|active|indicative|1sg", label:"ενεστώτας • ενεργητική • οριστική • α΄ ενικό", form:"μεταφωνῶ", note:"συνηρημένη βασική μορφή"},
        {slot:"present|active|infinitive", label:"ενεστώτας • ενεργητική • απαρέμφατο", form:"μεταφωνεῖν", note:"συνηρημένο απαρέμφατο σε -εῖν"},
        {slot:"present|active|participle|masc", label:"ενεστώτας • ενεργητική • μετοχή αρσενικό", form:"μεταφωνῶν", note:"κανονικό συνηρημένο πρότυπο"},
        {slot:"future|active|indicative|1sg", label:"μέλλοντας • ενεργητική • οριστική • α΄ ενικό", form:"μεταφωνήσω", note:"regular future stem"},
        {slot:"aorist|active|indicative|1sg", label:"αόριστος • ενεργητική • οριστική • α΄ ενικό", form:"μετεφώνησα", note:"regular sigmatic aorist"},
        {slot:"aorist|active|participle|masc", label:"αόριστος • ενεργητική • μετοχή αρσενικό", form:"μεταφωνήσας", note:"regular aorist participle"}
      ]
    },
    "ἀφικνέομαι": {
      status:"slot-validated",
      summary:"Συμπλήρωση του αποθετικού συνηρημένου λήμματος με present/future/aorist non-finite layer από τα τεκμηριωμένα κύρια μέρη.",
      slots:[
        {slot:"present|middle|indicative|1sg", label:"ενεστώτας • μέση • οριστική • α΄ ενικό", form:"ἀφικνοῦμαι", note:"συνηρημένη λημματική μορφή"},
        {slot:"present|middle|infinitive", label:"ενεστώτας • μέση • απαρέμφατο", form:"ἀφικνεῖσθαι", note:"contract infinitive in -εῖσθαι"},
        {slot:"present|middle|participle|masc", label:"ενεστώτας • μέση • μετοχή αρσενικό", form:"ἀφικνούμενος", note:"συνηρημένη μετοχική βάση"},
        {slot:"future|middle|indicative|1sg", label:"μέλλοντας • μέση • οριστική • α΄ ενικό", form:"ἀφίξομαι", note:"τεκμηριωμένο κύριο μέρος"},
        {slot:"aorist|middle|indicative|1sg", label:"αόριστος • μέση • οριστική • α΄ ενικό", form:"ἀφικόμην", note:"β΄ αόριστος μέσης"},
        {slot:"aorist|middle|participle|masc", label:"αόριστος • μέση • μετοχή αρσενικό", form:"ἀφικόμενος", note:"συνδεδεμένο non-finite slot"}
      ]
    },
    "ἀποκρίνομαι": {
      status:"slot-validated",
      summary:"Εμπλουτισμός του αποθετικού λήμματος με present/future/aorist απαρέμφατα και μετοχές, πέρα από τον βασικό finite πυρήνα.",
      slots:[
        {slot:"present|middle|indicative|1sg", label:"ενεστώτας • μέση • οριστική • α΄ ενικό", form:"ἀποκρίνομαι", note:"βασικός ενεστωτικός τύπος"},
        {slot:"present|middle|infinitive", label:"ενεστώτας • μέση • απαρέμφατο", form:"ἀποκρίνεσθαι", note:"σχολική non-finite συμπλήρωση"},
        {slot:"present|middle|participle|masc", label:"ενεστώτας • μέση • μετοχή αρσενικό", form:"ἀποκρινόμενος", note:"βασική μετοχική σειρά"},
        {slot:"future|middle|indicative|1sg", label:"μέλλοντας • μέση • οριστική • α΄ ενικό", form:"ἀποκρινοῦμαι", note:"τεκμηριωμένο principal part"},
        {slot:"aorist|middle|indicative|1sg", label:"αόριστος • μέση • οριστική • α΄ ενικό", form:"ἀπεκρινάμην", note:"τεκμηριωμένος μέσος αόριστος"},
        {slot:"aorist|middle|participle|masc", label:"αόριστος • μέση • μετοχή αρσενικό", form:"ἀποκρινάμενος", note:"συμπλήρωση του aorist non-finite layer"}
      ]
    }
  });
})();
