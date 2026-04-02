(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
    "ῥέω": {
      status:"manual+slots",
      summary:"Χειροκίνητο audit για τα βασικά σχολικά slots του ῥέω με έμφαση στην ιδιότυπη ενεστωτική συρρίκνωση και στον μέλλοντα μέσης.",
      slots:[
        {slot:"present|active|indicative|1sg", label:"ενεστώτας • ενεργητική • οριστική • α΄ ενικό", form:"ῥέω", note:"βασικός τύπος"},
        {slot:"present|active|indicative|3sg", label:"ενεστώτας • ενεργητική • οριστική • γ΄ ενικό", form:"ῥεῖ", note:"συνηρημένος τύπος"},
        {slot:"future|middle|indicative|1sg", label:"μέλλοντας • μέση • οριστική • α΄ ενικό", form:"ῥυήσομαι", note:"ιδιότυπος μέλλοντας"},
        {slot:"aorist|active|indicative|1sg", label:"αόριστος • ενεργητική • οριστική • α΄ ενικό", form:"ἐρρύην", note:"βασικός αοριστικός τύπος"},
        {slot:"present|active|infinitive", label:"ενεστώτας • ενεργητική • απαρέμφατο", form:"ῥεῖν", note:"σχολικά χρήσιμο απαρέμφατο"},
        {slot:"present|active|participle|masc.nom.sg", label:"ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.", form:"ῥέων", note:"βασική μετοχή"}
      ]
    },
    "ῥήγνυμι": {
      status:"manual+slots",
      summary:"Χειροκίνητος έλεγχος της εναλλαγής ῥηγνυ- / ῥηξ- / ῥαγ- / ῥωγ-.",
      slots:[
        {slot:"present|active|indicative|1sg", label:"ενεστώτας • ενεργητική • οριστική • α΄ ενικό", form:"ῥήγνυμι", note:"βασικός λημματικός τύπος"},
        {slot:"present|active|indicative|3sg", label:"ενεστώτας • ενεργητική • οριστική • γ΄ ενικό", form:"ῥήγνυσι", note:"τυπικός τύπος ρημάτων σε -νυμι"},
        {slot:"future|active|indicative|1sg", label:"μέλλοντας • ενεργητική • οριστική • α΄ ενικό", form:"ῥήξω", note:"βασικός μέλλοντας"},
        {slot:"aorist|active|indicative|1sg", label:"αόριστος • ενεργητική • οριστική • α΄ ενικό", form:"ἔρρηξα", note:"πρώτος αόριστος"},
        {slot:"aorist|passive|indicative|1sg", label:"αόριστος • παθητική • οριστική • α΄ ενικό", form:"ἐρράγην", note:"παθητικός αόριστος"},
        {slot:"aorist|active|participle|masc.nom.sg", label:"αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.", form:"ῥήξας", note:"χαρακτηριστική μετοχή"}
      ]
    },
    "ῥώννυμι": {
      status:"manual+slots",
      summary:"Χειροκίνητος έλεγχος του ῥώννυμι με έμφαση στον αόριστο ἔρρωσα και στο παθητικό σύστημα.",
      slots:[
        {slot:"present|active|indicative|1sg", label:"ενεστώτας • ενεργητική • οριστική • α΄ ενικό", form:"ῥώννυμι", note:"βασικός τύπος"},
        {slot:"present|active|indicative|3sg", label:"ενεστώτας • ενεργητική • οριστική • γ΄ ενικό", form:"ῥώννυσι", note:"τυπικός γ΄ ενικός"},
        {slot:"aorist|active|indicative|1sg", label:"αόριστος • ενεργητική • οριστική • α΄ ενικό", form:"ἔρρωσα", note:"βασικός αόριστος"},
        {slot:"aorist|passive|indicative|1sg", label:"αόριστος • παθητική • οριστική • α΄ ενικό", form:"ἐρρώσθην", note:"παθητικός αόριστος"},
        {slot:"perfect|middle/passive|indicative|1sg", label:"παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό", form:"ἔρρωμαι", note:"παρακείμενος μ/π"},
        {slot:"aorist|passive|participle|masc.nom.sg", label:"αόριστος • παθητική • μετοχή • αρσενικό ον. εν.", form:"ῥωσθείς", note:"βασική παθητική μετοχή"}
      ]
    },
    "ῥύομαι": {
      status:"manual+slots",
      summary:"Χειροκίνητος έλεγχος για αποθετικό λήμμα σωτηρίας/απαλλαγής με διάκριση μέσου και παθητικού αορίστου.",
      slots:[
        {slot:"present|middle|indicative|1sg", label:"ενεστώτας • μέση • οριστική • α΄ ενικό", form:"ῥύομαι", note:"βασικός τύπος"},
        {slot:"present|middle|indicative|3sg", label:"ενεστώτας • μέση • οριστική • γ΄ ενικό", form:"ῥύεται", note:"συχνός αφηγηματικός τύπος"},
        {slot:"future|middle|indicative|1sg", label:"μέλλοντας • μέση • οριστική • α΄ ενικό", form:"ῥύσομαι", note:"βασικός μέλλοντας"},
        {slot:"aorist|middle|indicative|1sg", label:"αόριστος • μέση • οριστική • α΄ ενικό", form:"ἐρρυσάμην", note:"μέσος αόριστος"},
        {slot:"aorist|passive|indicative|1sg", label:"αόριστος • παθητική • οριστική • α΄ ενικό", form:"ἐρρύσθην", note:"παθητικός αόριστος"},
        {slot:"present|middle|participle|masc.nom.sg", label:"ενεστώτας • μέση • μετοχή • αρσενικό ον. εν.", form:"ῥυόμενος", note:"βασική μετοχή"}
      ]
    },
    "οἴχομαι": {
      status:"manual+slots",
      summary:"Χειροκίνητος έλεγχος του οἴχομαι ως αποθετικού λήμματος με ισχυρή σημασιολογική ιδιορρυθμία.",
      slots:[
        {slot:"present|middle|indicative|1sg", label:"ενεστώτας • μέση • οριστική • α΄ ενικό", form:"οἴχομαι", note:"βασικός τύπος"},
        {slot:"present|middle|indicative|3sg", label:"ενεστώτας • μέση • οριστική • γ΄ ενικό", form:"οἴχεται", note:"συχνός τύπος"},
        {slot:"imperfect|middle|indicative|1sg", label:"παρατατικός • μέση • οριστική • α΄ ενικό", form:"ᾠχόμην", note:"βασικός ιστορικός τύπος"},
        {slot:"future|middle|indicative|1sg", label:"μέλλοντας • μέση • οριστική • α΄ ενικό", form:"οἰχήσομαι", note:"μέλλοντας του λήμματος"},
        {slot:"present|middle|infinitive", label:"ενεστώτας • μέση • απαρέμφατο", form:"οἴχεσθαι", note:"βασικό απαρέμφατο"},
        {slot:"present|middle|participle|masc.nom.sg", label:"ενεστώτας • μέση • μετοχή • αρσενικό ον. εν.", form:"οἰχόμενος", note:"βασική μετοχή"}
      ]
    },
    "βιάζομαι": {
      status:"manual+slots",
      summary:"Χειροκίνητος έλεγχος του βιάζομαι με ρητή διάκριση μέσου και παθητικού αορίστου.",
      slots:[
        {slot:"present|middle|indicative|1sg", label:"ενεστώτας • μέση • οριστική • α΄ ενικό", form:"βιάζομαι", note:"βασικός τύπος"},
        {slot:"present|middle|indicative|3sg", label:"ενεστώτας • μέση • οριστική • γ΄ ενικό", form:"βιάζεται", note:"συχνός προσωπικός τύπος"},
        {slot:"future|middle|indicative|1sg", label:"μέλλοντας • μέση • οριστική • α΄ ενικό", form:"βιάσομαι", note:"βασικός μέλλοντας"},
        {slot:"aorist|middle|indicative|1sg", label:"αόριστος • μέση • οριστική • α΄ ενικό", form:"ἐβιασάμην", note:"μέσος αόριστος"},
        {slot:"aorist|passive|indicative|1sg", label:"αόριστος • παθητική • οριστική • α΄ ενικό", form:"ἐβιάσθην", note:"παθητικός αόριστος"},
        {slot:"aorist|passive|participle|masc.nom.sg", label:"αόριστος • παθητική • μετοχή • αρσενικό ον. εν.", form:"βιασθείς", note:"χρήσιμη σχολική μετοχή"}
      ]
    }
  });
})();
