(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {

  "ψεύδομαι": {
    "status": "manual+slots",
    "summary": "Νέο tranche χειροκίνητης συμπλήρωσης για το ψεύδομαι, με πλήρες present/imperfect deponent layer, μέλλοντα και αόριστο μέσης φωνής, παθητική σειρά, παρακείμενο μέσης/παθητικής και νέους μη προσωπικούς τύπους.",
    "slots": [
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ψεύδομαι",
        "note": "βασικός λημματικός τύπος"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἐψευδόμην",
        "note": "βεβαιωμένος historical imperfect"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "ψεύσομαι",
        "note": "βασικός deponent future"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος • μέση • οριστική • α΄ ενικό",
        "form": "ἐψευσάμην",
        "note": "βασικός αόριστος μέσης φωνής"
      },
      {
        "slot": "future|passive|indicative|1sg",
        "label": "παθητικός μέλλοντας • παθητική • οριστική • α΄ ενικό",
        "form": "ψευσθήσομαι",
        "note": "βεβαιωμένη παθητική μελλοντική σειρά"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "παθητικός αόριστος • παθητική • οριστική • α΄ ενικό",
        "form": "ἐψεύσθην",
        "note": "βεβαιωμένος παθητικός αόριστος"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἔψευσμαι",
        "note": "βεβαιωμένος παρακείμενος μέσης/παθητικής"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "ενεστώτας • μέση/παθητική • απαρέμφατο",
        "form": "ψεύδεσθαι",
        "note": "βασικό απαρέμφατο"
      },
      {
        "slot": "future|middle|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "ψεύσεσθαι",
        "note": "deponent future infinitive"
      },
      {
        "slot": "aorist|middle|infinitive",
        "label": "αόριστος • μέση • απαρέμφατο",
        "form": "ψεύσασθαι",
        "note": "αόριστο απαρέμφατο μέσης"
      },
      {
        "slot": "aorist|passive|infinitive",
        "label": "αόριστος • παθητική • απαρέμφατο",
        "form": "ψευσθῆναι",
        "note": "παθητικό απαρέμφατο"
      },
      {
        "slot": "present|middle/passive|participle|masc.nom.sg",
        "label": "ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ψευδόμενος",
        "note": "βασική μετοχή ενεστώτα"
      },
      {
        "slot": "future|middle|participle|masc.nom.sg",
        "label": "μέλλοντας • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "ψευσόμενος",
        "note": "future participle"
      },
      {
        "slot": "aorist|middle|participle|masc.nom.sg",
        "label": "αόριστος • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "ψευσάμενος",
        "note": "aorist middle participle"
      },
      {
        "slot": "aorist|passive|participle|masc.nom.sg",
        "label": "αόριστος • παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ψευσθείς",
        "note": "aorist passive participle"
      },
      {
        "slot": "perfect|middle/passive|participle|masc.nom.sg",
        "label": "παρακείμενος • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἐψευσμένος",
        "note": "παρακείμενη μετοχή"
      }
    ]
  },

  "ψηφίζω": {
    "status": "manual+slots",
    "summary": "Νέο tranche χειροκίνητης συμπλήρωσης για το ψηφίζω, με expanded active, middle/passive και passive layer, συνηρημένο μέλλοντα, αόριστο, παρακείμενο και νέους μη προσωπικούς τύπους.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ψηφίζω",
        "note": "βασικός λημματικός τύπος"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐψήφιζον",
        "note": "βεβαιωμένος historical imperfect"
      },
      {
        "slot": "future|active|indicative|1sg",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ψηφιῶ",
        "note": "συνηρημένος μέλλοντας"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐψήφισα",
        "note": "βασικός αόριστος ενεργητικής"
      },
      {
        "slot": "perfect|active|indicative|1sg",
        "label": "παρακείμενος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐψήφικα",
        "note": "βεβαιωμένος παρακείμενος ενεργητικής"
      },
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ψηφίζομαι",
        "note": "βασικός present middle/passive τύπος"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἐψηφιζόμην",
        "note": "historical imperfect middle/passive"
      },
      {
        "slot": "future|middle/passive|indicative|1sg",
        "label": "μέλλοντας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ψηφιοῦμαι",
        "note": "συνηρημένος middle/passive μέλλοντας"
      },
      {
        "slot": "future|passive|indicative|1sg",
        "label": "παθητικός μέλλοντας • παθητική • οριστική • α΄ ενικό",
        "form": "ψηφισθήσομαι",
        "note": "βεβαιωμένη παθητική μελλοντική σειρά"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος • μέση • οριστική • α΄ ενικό",
        "form": "ἐψηφισάμην",
        "note": "αόριστος μέσης φωνής"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "αόριστος • παθητική • οριστική • α΄ ενικό",
        "form": "ἐψηφίσθην",
        "note": "παθητικός αόριστος"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "ψηφίζειν",
        "note": "βασικό απαρέμφατο"
      },
      {
        "slot": "future|active|infinitive",
        "label": "μέλλοντας • ενεργητική • απαρέμφατο",
        "form": "ψηφιεῖν",
        "note": "future infinitive"
      },
      {
        "slot": "aorist|active|infinitive",
        "label": "αόριστος • ενεργητική • απαρέμφατο",
        "form": "ψηφίσαι",
        "note": "aorist infinitive"
      },
      {
        "slot": "perfect|active|infinitive",
        "label": "παρακείμενος • ενεργητική • απαρέμφατο",
        "form": "ἐψηφικέναι",
        "note": "perfect infinitive"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "ενεστώτας • μέση/παθητική • απαρέμφατο",
        "form": "ψηφίζεσθαι",
        "note": "present middle/passive infinitive"
      },
      {
        "slot": "aorist|passive|infinitive",
        "label": "αόριστος • παθητική • απαρέμφατο",
        "form": "ψηφισθῆναι",
        "note": "aorist passive infinitive"
      },
      {
        "slot": "present|active|participle|masc.nom.sg",
        "label": "ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "ψηφίζων",
        "note": "μετοχή ενεστώτα ενεργητικής"
      },
      {
        "slot": "future|active|participle|masc.nom.sg",
        "label": "μέλλοντας • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "ψηφιῶν",
        "note": "μετοχή μέλλοντα ενεργητικής"
      },
      {
        "slot": "aorist|active|participle|masc.nom.sg",
        "label": "αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "ψηφίσας",
        "note": "αοριστική μετοχή"
      },
      {
        "slot": "present|middle/passive|participle|masc.nom.sg",
        "label": "ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ψηφιζόμενος",
        "note": "μετοχή present middle/passive"
      },
      {
        "slot": "aorist|middle|participle|masc.nom.sg",
        "label": "αόριστος • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "ψηφισάμενος",
        "note": "μετοχή αορίστου μέσης"
      },
      {
        "slot": "aorist|passive|participle|masc.nom.sg",
        "label": "αόριστος • παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ψηφισθείς",
        "note": "μετοχή παθητικού αορίστου"
      }
    ]
  }

});
})();
