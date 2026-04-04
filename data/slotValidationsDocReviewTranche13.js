(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {

  "ἁμαρτάνω": {
    "status": "manual+slots",
    "summary": "Νέο αυστηρό tranche για το ἁμαρτάνω, με χειροκίνητο present/imperfect active layer, μέλλοντα ἁμαρτήσομαι, β΄ αόριστο ἥμαρτον, perfect ἡμάρτηκα και συντηρητική impersonal passive σειρά.",
    "slots": [
      {"slot":"present|active|indicative|1sg","label":"ενεστώτας • ενεργητική • οριστική • α΄ ενικό","form":"ἁμαρτάνω","note":"βασικός λημματικός τύπος"},
      {"slot":"imperfect|active|indicative|1sg","label":"παρατατικός • ενεργητική • οριστική • α΄ ενικό","form":"ἡμάρτανον","note":"βεβαιωμένος ιστορικός τύπος στον Οικονόμου και στον Τζαρτζάνο"},
      {"slot":"future|middle|indicative|1sg","label":"μέλλοντας • μέση • οριστική • α΄ ενικό","form":"ἁμαρτήσομαι","note":"ο σχολικός πίνακας δίνει μέλλοντα μέσης με ενεργητική σημασία"},
      {"slot":"aorist|active|indicative|1sg","label":"αόριστος β΄ • ενεργητική • οριστική • α΄ ενικό","form":"ἥμαρτον","note":"βεβαιωμένος β΄ αόριστος"},
      {"slot":"perfect|active|indicative|1sg","label":"παρακείμενος • ενεργητική • οριστική • α΄ ενικό","form":"ἡμάρτηκα","note":"βεβαιωμένος παρακείμενος"},
      {"slot":"present|middle/passive|indicative|3sg","label":"ενεστώτας • μέση/παθητική • οριστική • γ΄ ενικό","form":"ἁμαρτάνεται","note":"η παθητική χρήση καταγράφεται στις πηγές κυρίως απρόσωπα"},
      {"slot":"imperfect|middle/passive|indicative|3sg","label":"παρατατικός • μέση/παθητική • οριστική • γ΄ ενικό","form":"ἡμαρτάνετο","note":"βεβαιωμένος απρόσωπος ιστορικός τύπος"},
      {"slot":"aorist|passive|indicative|3sg","label":"παθητικός αόριστος • παθητική • οριστική • γ΄ ενικό","form":"ἡμαρτήθη","note":"βεβαιωμένος παθητικός αόριστος"},
      {"slot":"perfect|middle/passive|indicative|3sg","label":"παρακείμενος • μέση/παθητική • οριστική • γ΄ ενικό","form":"ἡμάρτηται","note":"βεβαιωμένος παθητικός/απρόσωπος παρακείμενος"},
      {"slot":"present|active|infinitive","label":"ενεστώτας • ενεργητική • απαρέμφατο","form":"ἁμαρτάνειν","note":"κανονικός μη προσωπικός τύπος του present layer"},
      {"slot":"future|middle|infinitive","label":"μέλλοντας • μέση • απαρέμφατο","form":"ἁμαρτήσεσθαι","note":"future infinitive από τον σχολικό μέλλοντα"},
      {"slot":"aorist|active|infinitive","label":"αόριστος β΄ • ενεργητική • απαρέμφατο","form":"ἁμαρτεῖν","note":"ρητά μαρτυρημένο στο Binder1"},
      {"slot":"perfect|active|infinitive","label":"παρακείμενος • ενεργητική • απαρέμφατο","form":"ἡμαρτηκέναι","note":"συντηρητική ανάπτυξη από τον βεβαιωμένο παρακείμενο"},
      {"slot":"present|active|participle|masc.nom.sg","label":"ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"ἁμαρτάνων","note":"βασική present participle"},
      {"slot":"future|middle|participle|masc.nom.sg","label":"μέλλοντας • μέση • μετοχή • αρσενικό ον. εν.","form":"ἁμαρτησόμενος","note":"future participle από τη σειρά ἁμαρτήσομαι"},
      {"slot":"aorist|active|participle|masc.nom.sg","label":"αόριστος β΄ • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"ἁμαρτών","note":"ρητά μαρτυρημένη μετοχή στο Binder1"},
      {"slot":"perfect|active|participle|masc.nom.sg","label":"παρακείμενος • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"ἡμαρτηκώς","note":"συντηρητική ανάπτυξη από τον βεβαιωμένο παρακείμενο"}
    ]
  },

  "ἀνύω": {
    "status": "manual+slots",
    "summary": "Νέο συντηρητικό tranche για το ἀνύω, με present/imperfect/future/aorist/perfect active πυρήνα, βεβαιωμένους τύπους ἀνύτομαι, ἠνυσάμην, ἠνύσθην, ἤνυσμαι και περιορισμένη μη προσωπική ανάπτυξη.",
    "slots": [
      {"slot":"present|active|indicative|1sg","label":"ενεστώτας • ενεργητική • οριστική • α΄ ενικό","form":"ἀνύω","note":"βασικός λημματικός τύπος"},
      {"slot":"imperfect|active|indicative|1sg","label":"παρατατικός • ενεργητική • οριστική • α΄ ενικό","form":"ἤνυον","note":"βεβαιωμένος ιστορικός τύπος στον Οικονόμου"},
      {"slot":"future|active|indicative|1sg","label":"μέλλοντας • ενεργητική • οριστική • α΄ ενικό","form":"ἀνύσω","note":"βεβαιωμένος μέλλοντας"},
      {"slot":"aorist|active|indicative|1sg","label":"αόριστος • ενεργητική • οριστική • α΄ ενικό","form":"ἤνυσα","note":"βεβαιωμένος sigmatic aorist"},
      {"slot":"perfect|active|indicative|1sg","label":"παρακείμενος • ενεργητική • οριστική • α΄ ενικό","form":"ἤνυκα","note":"βεβαιωμένος παρακείμενος"},
      {"slot":"present|middle/passive|indicative|1sg","label":"ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό","form":"ἀνύτομαι","note":"ρητά μαρτυρημένος present passive τύπος"},
      {"slot":"aorist|middle|indicative|1sg","label":"αόριστος • μέση • οριστική • α΄ ενικό","form":"ἠνυσάμην","note":"ρητά μαρτυρημένος μέσος αόριστος"},
      {"slot":"aorist|passive|indicative|1sg","label":"παθητικός αόριστος • παθητική • οριστική • α΄ ενικό","form":"ἠνύσθην","note":"ρητά μαρτυρημένος παθητικός αόριστος"},
      {"slot":"perfect|middle/passive|indicative|1sg","label":"παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό","form":"ἤνυσμαι","note":"ρητά μαρτυρημένος παθητικός παρακείμενος"},
      {"slot":"present|active|infinitive","label":"ενεστώτας • ενεργητική • απαρέμφατο","form":"ἀνύειν","note":"συντηρητική αναλογική ανάπτυξη από τον present stem"},
      {"slot":"aorist|active|infinitive","label":"αόριστος • ενεργητική • απαρέμφατο","form":"ἀνῦσαι","note":"συντηρητική ανάπτυξη από τον βεβαιωμένο αόριστο ἤνυσα"},
      {"slot":"aorist|middle|infinitive","label":"αόριστος • μέση • απαρέμφατο","form":"ἀνύσασθαι","note":"συντηρητική ανάπτυξη από τον βεβαιωμένο μέσο αόριστο"},
      {"slot":"aorist|passive|infinitive","label":"αόριστος • παθητική • απαρέμφατο","form":"ἀνυσθῆναι","note":"συντηρητική ανάπτυξη από τον βεβαιωμένο παθητικό αόριστο"},
      {"slot":"present|active|participle|masc.nom.sg","label":"ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"ἀνύων","note":"συντηρητική present participle"},
      {"slot":"aorist|active|participle|masc.nom.sg","label":"αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"ἀνύσας","note":"συντηρητική ανάπτυξη από τον βεβαιωμένο αόριστο"},
      {"slot":"aorist|passive|participle|masc.nom.sg","label":"αόριστος • παθητική • μετοχή • αρσενικό ον. εν.","form":"ἀνυσθείς","note":"συντηρητική ανάπτυξη από τον βεβαιωμένο παθητικό αόριστο"}
    ]
  }

});
})();
