(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {

  "ἀκούω": {
    "status": "manual+slots",
    "summary": "Νέο strict tranche για το ἀκούω, με χειροκίνητο active / middle-passive / passive layer, επιβεβαιωμένο μέλλοντα ἀκούσομαι, perfect ἀκήκοα και νέους μη προσωπικούς τύπους.",
    "slots": [
      {"slot":"present|active|indicative|1sg","label":"ενεστώτας • ενεργητική • οριστική • α΄ ενικό","form":"ἀκούω","note":"βασικός λημματικός τύπος"},
      {"slot":"imperfect|active|indicative|1sg","label":"παρατατικός • ενεργητική • οριστική • α΄ ενικό","form":"ἤκουον","note":"βεβαιωμένος ιστορικός τύπος"},
      {"slot":"present|middle/passive|indicative|1sg","label":"ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό","form":"ἀκούομαι","note":"βεβαιωμένο present passive layer"},
      {"slot":"imperfect|middle/passive|indicative|1sg","label":"παρατατικός • μέση/παθητική • οριστική • α΄ ενικό","form":"ἠκουόμην","note":"βεβαιωμένος imperfect middle/passive τύπος"},
      {"slot":"future|middle|indicative|1sg","label":"μέλλοντας • μέση • οριστική • α΄ ενικό","form":"ἀκούσομαι","note":"ο σχολικός πίνακας δίνει μέλλοντα μέσης με ενεργητική σημασία"},
      {"slot":"aorist|active|indicative|1sg","label":"αόριστος • ενεργητική • οριστική • α΄ ενικό","form":"ἤκουσα","note":"βεβαιωμένος sigmatic aorist"},
      {"slot":"perfect|active|indicative|1sg","label":"παρακείμενος • ενεργητική • οριστική • α΄ ενικό","form":"ἀκήκοα","note":"βεβαιωμένος αττικός αναδιπλασιασμός"},
      {"slot":"future|passive|indicative|1sg","label":"παθητικός μέλλοντας • παθητική • οριστική • α΄ ενικό","form":"ἀκουσθήσομαι","note":"βεβαιωμένη παθητική σειρά"},
      {"slot":"aorist|passive|indicative|1sg","label":"παθητικός αόριστος • παθητική • οριστική • α΄ ενικό","form":"ἠκούσθην","note":"βεβαιωμένος παθητικός αόριστος"},
      {"slot":"present|active|infinitive","label":"ενεστώτας • ενεργητική • απαρέμφατο","form":"ἀκούειν","note":"βασικό απαρέμφατο"},
      {"slot":"present|middle/passive|infinitive","label":"ενεστώτας • μέση/παθητική • απαρέμφατο","form":"ἀκούεσθαι","note":"μη προσωπικός τύπος της passive σειράς"},
      {"slot":"future|middle|infinitive","label":"μέλλοντας • μέση • απαρέμφατο","form":"ἀκούσεσθαι","note":"future infinitive από τον σχολικό μέλλοντα"},
      {"slot":"aorist|active|infinitive","label":"αόριστος • ενεργητική • απαρέμφατο","form":"ἀκοῦσαι","note":"βασικό αοριστικό απαρέμφατο"},
      {"slot":"perfect|active|infinitive","label":"παρακείμενος • ενεργητική • απαρέμφατο","form":"ἀκηκοέναι","note":"ρητά ζητούμενος σχολικός μη προσωπικός τύπος"},
      {"slot":"aorist|passive|infinitive","label":"αόριστος • παθητική • απαρέμφατο","form":"ἀκουσθῆναι","note":"παθητικό απαρέμφατο"},
      {"slot":"present|active|participle|masc.nom.sg","label":"ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"ἀκούων","note":"βασική present participle"},
      {"slot":"present|middle/passive|participle|masc.nom.sg","label":"ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.","form":"ἀκουόμενος","note":"present middle/passive participle"},
      {"slot":"future|middle|participle|masc.nom.sg","label":"μέλλοντας • μέση • μετοχή • αρσενικό ον. εν.","form":"ἀκουσόμενος","note":"future participle από τη σειρά ἀκούσομαι"},
      {"slot":"aorist|active|participle|masc.nom.sg","label":"αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"ἀκούσας","note":"αοριστική ενεργητική μετοχή"},
      {"slot":"aorist|passive|participle|masc.nom.sg","label":"αόριστος • παθητική • μετοχή • αρσενικό ον. εν.","form":"ἀκουσθείς","note":"παθητική μετοχή αορίστου"}
    ]
  },

  "ἁλίσκομαι": {
    "status": "manual+slots",
    "summary": "Νέο συντηρητικό strict tranche για το ἁλίσκομαι, με πλήρες present/imperfect middle-passive layer, σχολικό μέλλοντα ἁλώσομαι, β΄ αόριστο ἑάλων και μη προσωπικούς τύπους ἁλῶναι, ἁλούς.",
    "slots": [
      {"slot":"present|middle/passive|indicative|1sg","label":"ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό","form":"ἁλίσκομαι","note":"βασικός deponent/passive τύπος"},
      {"slot":"imperfect|middle/passive|indicative|1sg","label":"παρατατικός • μέση/παθητική • οριστική • α΄ ενικό","form":"ἡλισκόμην","note":"βεβαιωμένος ιστορικός τύπος"},
      {"slot":"future|middle|indicative|1sg","label":"μέλλοντας • μέση • οριστική • α΄ ενικό","form":"ἁλώσομαι","note":"ο σχολικός πίνακας δίνει μέλλοντα μέσης με παθητική σημασία"},
      {"slot":"aorist|active|indicative|1sg","label":"αόριστος β΄ • ενεργητική • οριστική • α΄ ενικό","form":"ἑάλων","note":"βεβαιωμένος β΄ αόριστος με παθητική σημασία· καταγράφεται και το σπάνιο ἥλων"},
      {"slot":"perfect|active|indicative|1sg","label":"παρακείμενος • ενεργητική • οριστική • α΄ ενικό","form":"ἑάλωκα","note":"βεβαιωμένος παρακείμενος· σπάνιο contracted variant ἥλωκα"},
      {"slot":"present|middle/passive|infinitive","label":"ενεστώτας • μέση/παθητική • απαρέμφατο","form":"ἁλίσκεσθαι","note":"βασικό απαρέμφατο του present layer"},
      {"slot":"future|middle|infinitive","label":"μέλλοντας • μέση • απαρέμφατο","form":"ἁλώσεσθαι","note":"future infinitive από τη σειρά ἁλώσομαι"},
      {"slot":"aorist|active|infinitive","label":"αόριστος β΄ • ενεργητική • απαρέμφατο","form":"ἁλῶναι","note":"ρητά βεβαιωμένος μη προσωπικός τύπος"},
      {"slot":"present|middle/passive|participle|masc.nom.sg","label":"ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.","form":"ἁλισκόμενος","note":"βασική present participle"},
      {"slot":"future|middle|participle|masc.nom.sg","label":"μέλλοντας • μέση • μετοχή • αρσενικό ον. εν.","form":"ἁλωσόμενος","note":"future participle"},
      {"slot":"aorist|active|participle|masc.nom.sg","label":"αόριστος β΄ • ενεργητική • μετοχή • αρσενικό ον. εν.","form":"ἁλούς","note":"ρητά βεβαιωμένη μετοχή του β΄ αορίστου"}
    ]
  }

});
})();
