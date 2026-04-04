(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {

  "δείκνυμι": {
    "status": "manual+slots",
    "summary": "Ενισχυμένος έλεγχος για το δείκνυμι, με ρητή επιβεβαίωση του present/imperfect ενεργητικής και μέσης φωνής, καθώς και των βασικών principal parts των λοιπών χρόνων.",
    "slots": [
      {"slot":"present|active|indicative|1sg","label":"ενεστώτας • ενεργητική • οριστική • α΄ ενικό","form":"δείκνυμι","note":"βασικός λημματικός τύπος της τάξης σε -νυμι"},
      {"slot":"present|active|indicative|3sg","label":"ενεστώτας • ενεργητική • οριστική • γ΄ ενικό","form":"δείκνυσι(ν)","note":"χαρακτηριστικός ενεστωτικός τύπος"},
      {"slot":"present|active|indicative|3pl","label":"ενεστώτας • ενεργητική • οριστική • γ΄ πληθυντικό","form":"δεικνύασι(ν)","note":"σχολικός τύπος του πίνακα κλίσης"},
      {"slot":"imperfect|active|indicative|1sg","label":"παρατατικός • ενεργητική • οριστική • α΄ ενικό","form":"ἐδείκνυν","note":"βεβαιωμένος historical imperfect"},
      {"slot":"present|middle/passive|indicative|1sg","label":"ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό","form":"δείκνυμαι","note":"βεβαιωμένος present middle τύπος"},
      {"slot":"imperfect|middle/passive|indicative|1sg","label":"παρατατικός • μέση/παθητική • οριστική • α΄ ενικό","form":"ἐδεικνύμην","note":"βεβαιωμένος imperfect middle τύπος"},
      {"slot":"future|active|indicative|1sg","label":"μέλλοντας • ενεργητική • οριστική • α΄ ενικό","form":"δείξω","note":"principal part του μέλλοντα"},
      {"slot":"aorist|active|indicative|1sg","label":"αόριστος • ενεργητική • οριστική • α΄ ενικό","form":"ἔδειξα","note":"βασικός αόριστος"},
      {"slot":"perfect|active|indicative|1sg","label":"παρακείμενος • ενεργητική • οριστική • α΄ ενικό","form":"δέδειχα","note":"βεβαιωμένος παρακείμενος"},
      {"slot":"future|middle|indicative|1sg","label":"μέλλοντας • μέση • οριστική • α΄ ενικό","form":"δείξομαι","note":"βεβαιωμένος middle future"},
      {"slot":"future|passive|indicative|1sg","label":"παθητικός μέλλοντας • παθητική • οριστική • α΄ ενικό","form":"δειχθήσομαι","note":"βεβαιωμένη παθητική μελλοντική σειρά"},
      {"slot":"aorist|middle|indicative|1sg","label":"αόριστος • μέση • οριστική • α΄ ενικό","form":"ἐδειξάμην","note":"βεβαιωμένος αόριστος μέσης"},
      {"slot":"aorist|passive|indicative|1sg","label":"αόριστος • παθητική • οριστική • α΄ ενικό","form":"ἐδείχθην","note":"βεβαιωμένος παθητικός αόριστος"},
      {"slot":"perfect|middle/passive|indicative|1sg","label":"παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό","form":"δέδειγμαι","note":"βεβαιωμένος παρακείμενος μέσης/παθητικής"},
      {"slot":"present|active|infinitive","label":"ενεστώτας • ενεργητική • απαρέμφατο","form":"δεικνύναι","note":"βασικό απαρέμφατο"},
      {"slot":"present|middle/passive|infinitive","label":"ενεστώτας • μέση/παθητική • απαρέμφατο","form":"δεικνύσθαι","note":"βεβαιωμένο μέσο απαρέμφατο"},
      {"slot":"aorist|active|infinitive","label":"αόριστος • ενεργητική • απαρέμφατο","form":"δεῖξαι","note":"σχολικά βασικό απαρέμφατο"},
      {"slot":"present|active|participle|masc.nom.sg","label":"ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"δεικνύς","note":"χαρακτηριστική present participle"},
      {"slot":"present|middle/passive|participle|masc.nom.sg","label":"ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.","form":"δεικνύμενος","note":"χαρακτηριστική middle participle"},
      {"slot":"aorist|passive|participle|masc.nom.sg","label":"αόριστος • παθητική • μετοχή • αρσενικό ον. εν.","form":"δειχθείς","note":"βασική παθητική μετοχή"}
    ]
  },

  "συλλέγω": {
    "status": "manual+slots",
    "summary": "Ενισχυμένος έλεγχος για το συλλέγω, με ρητή επιβεβαίωση της ενεργητικής, της μέσης σειράς και των δύο παθητικών σειρών (-λεχθ-, -λεγη-).",
    "slots": [
      {"slot":"present|active|indicative|1sg","label":"ενεστώτας • ενεργητική • οριστική • α΄ ενικό","form":"συλλέγω","note":"βασικός τύπος σύνθετου"},
      {"slot":"imperfect|active|indicative|1sg","label":"παρατατικός • ενεργητική • οριστική • α΄ ενικό","form":"συνέλεγον","note":"βεβαιωμένος παρατατικός"},
      {"slot":"present|middle/passive|indicative|1sg","label":"ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό","form":"συλλέγομαι","note":"βεβαιωμένος present middle/passive τύπος"},
      {"slot":"imperfect|middle/passive|indicative|1sg","label":"παρατατικός • μέση/παθητική • οριστική • α΄ ενικό","form":"συνελεγόμην","note":"βεβαιωμένος imperfect middle/passive"},
      {"slot":"future|active|indicative|1sg","label":"μέλλοντας • ενεργητική • οριστική • α΄ ενικό","form":"συλλέξω","note":"βασικός μέλλοντας"},
      {"slot":"future|middle|indicative|1sg","label":"μέλλοντας • μέση • οριστική • α΄ ενικό","form":"συλλέξομαι","note":"βεβαιωμένος middle future"},
      {"slot":"aorist|active|indicative|1sg","label":"αόριστος • ενεργητική • οριστική • α΄ ενικό","form":"συνέλεξα","note":"αόριστος με αύξηση στο σύνθετο"},
      {"slot":"perfect|active|indicative|1sg","label":"παρακείμενος • ενεργητική • οριστική • α΄ ενικό","form":"συνείλοχα","note":"ανώμαλος παρακείμενος"},
      {"slot":"future|passive|indicative|1sg","label":"παθητικός μέλλοντας α΄ • παθητική • οριστική • α΄ ενικό","form":"συλλεχθήσομαι","note":"παθητική σειρά σε -λεχθη-"},
      {"slot":"future|passive|indicative|1sg","label":"παθητικός μέλλοντας β΄ • παθητική • οριστική • α΄ ενικό","form":"συλλεγήσομαι","note":"παθητική σειρά σε -λεγη-"},
      {"slot":"aorist|passive|indicative|1sg","label":"παθητικός αόριστος α΄ • παθητική • οριστική • α΄ ενικό","form":"συνελέχθην","note":"παθητικός αόριστος α΄"},
      {"slot":"aorist|passive|indicative|1sg","label":"παθητικός αόριστος β΄ • παθητική • οριστική • α΄ ενικό","form":"συνελέγην","note":"παθητικός αόριστος β΄"},
      {"slot":"perfect|middle/passive|indicative|1sg","label":"παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό","form":"συνείλεγμαι","note":"βεβαιωμένος παρακείμενος μέσης/παθητικής"},
      {"slot":"present|active|infinitive","label":"ενεστώτας • ενεργητική • απαρέμφατο","form":"συλλέγειν","note":"βασικό απαρέμφατο"},
      {"slot":"aorist|active|infinitive","label":"αόριστος • ενεργητική • απαρέμφατο","form":"συλλέξαι","note":"βασικό απαρέμφατο"},
      {"slot":"aorist|passive|infinitive","label":"αόριστος • παθητική • απαρέμφατο","form":"συλλεγῆναι","note":"μη προσωπικός τύπος της β΄ παθητικής σειράς"},
      {"slot":"present|active|participle|masc.nom.sg","label":"ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"συλλέγων","note":"βασική μετοχή του ενεστώτα"},
      {"slot":"aorist|passive|participle|masc.nom.sg","label":"αόριστος • παθητική • μετοχή • αρσενικό ον. εν.","form":"συλλεγείς","note":"βασική μετοχή β΄ παθητικού αορίστου"}
    ]
  },

  "ῥίπτω": {
    "status": "manual+slots",
    "summary": "Νέο strict tranche για το ῥίπτω, με πλήρες present/imperfect layer, μελλοντική σειρά σε μέση φωνή, αοριστική ενεργητική, παρακείμενο, παθητική σειρά και νέους μη προσωπικούς τύπους.",
    "slots": [
      {"slot":"present|active|indicative|1sg","label":"ενεστώτας • ενεργητική • οριστική • α΄ ενικό","form":"ῥίπτω","note":"βασικός λημματικός τύπος"},
      {"slot":"imperfect|active|indicative|1sg","label":"παρατατικός • ενεργητική • οριστική • α΄ ενικό","form":"ἔρριπτον","note":"βεβαιωμένος historical imperfect"},
      {"slot":"present|middle/passive|indicative|1sg","label":"ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό","form":"ῥίπτομαι","note":"βεβαιωμένος present middle/passive τύπος"},
      {"slot":"imperfect|middle/passive|indicative|1sg","label":"παρατατικός • μέση/παθητική • οριστική • α΄ ενικό","form":"ἐρριπτόμην","note":"βεβαιωμένος imperfect middle/passive τύπος"},
      {"slot":"future|middle|indicative|1sg","label":"μέλλοντας • μέση • οριστική • α΄ ενικό","form":"ῥίψομαι","note":"ο σχολικός πίνακας δίνει μέλλοντα σε μέση μορφή"},
      {"slot":"aorist|active|indicative|1sg","label":"αόριστος • ενεργητική • οριστική • α΄ ενικό","form":"ἔρριψα","note":"βεβαιωμένος αόριστος"},
      {"slot":"perfect|active|indicative|1sg","label":"παρακείμενος • ενεργητική • οριστική • α΄ ενικό","form":"ἔρριφα","note":"βεβαιωμένος παρακείμενος"},
      {"slot":"perfect|middle/passive|indicative|1sg","label":"παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό","form":"ἔρριμμαι","note":"βεβαιωμένος παρακείμενος μέσης/παθητικής"},
      {"slot":"future|passive|indicative|1sg","label":"παθητικός μέλλοντας • παθητική • οριστική • α΄ ενικό","form":"ῥιφθήσομαι","note":"βεβαιωμένη παθητική μελλοντική σειρά"},
      {"slot":"aorist|passive|indicative|1sg","label":"παθητικός αόριστος α΄ • παθητική • οριστική • α΄ ενικό","form":"ἐρρίφθην","note":"βεβαιωμένος παθητικός αόριστος α΄"},
      {"slot":"aorist|passive|indicative|1sg","label":"παθητικός αόριστος β΄ • παθητική • οριστική • α΄ ενικό","form":"ἐρρίφην","note":"καταγεγραμμένος και ο β΄ παθητικός αόριστος"},
      {"slot":"present|active|infinitive","label":"ενεστώτας • ενεργητική • απαρέμφατο","form":"ῥίπτειν","note":"βασικό απαρέμφατο"},
      {"slot":"present|middle/passive|infinitive","label":"ενεστώτας • μέση/παθητική • απαρέμφατο","form":"ῥίπτεσθαι","note":"μη προσωπικός τύπος της present middle/passive σειράς"},
      {"slot":"future|middle|infinitive","label":"μέλλοντας • μέση • απαρέμφατο","form":"ῥίψεσθαι","note":"future infinitive από τον σχολικό μέλλοντα"},
      {"slot":"aorist|active|infinitive","label":"αόριστος • ενεργητική • απαρέμφατο","form":"ῥῖψαι","note":"βασικό αοριστικό απαρέμφατο"},
      {"slot":"aorist|passive|infinitive","label":"αόριστος • παθητική • απαρέμφατο","form":"ῥιφθῆναι","note":"παθητικό απαρέμφατο"},
      {"slot":"present|active|participle|masc.nom.sg","label":"ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"ῥίπτων","note":"βασική present participle"},
      {"slot":"present|middle/passive|participle|masc.nom.sg","label":"ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.","form":"ῥιπτόμενος","note":"present middle/passive participle"},
      {"slot":"future|middle|participle|masc.nom.sg","label":"μέλλοντας • μέση • μετοχή • αρσενικό ον. εν.","form":"ῥιψόμενος","note":"future participle"},
      {"slot":"aorist|active|participle|masc.nom.sg","label":"αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"ῥίψας","note":"αοριστική ενεργητική μετοχή"},
      {"slot":"perfect|middle/passive|participle|masc.nom.sg","label":"παρακείμενος • μέση/παθητική • μετοχή • αρσενικό ον. εν.","form":"ἐρριμμένος","note":"παρακείμενη μετοχή"},
      {"slot":"aorist|passive|participle|masc.nom.sg","label":"αόριστος • παθητική • μετοχή • αρσενικό ον. εν.","form":"ῥιφθείς","note":"παθητική μετοχή αορίστου"}
    ]
  }

});
})();
