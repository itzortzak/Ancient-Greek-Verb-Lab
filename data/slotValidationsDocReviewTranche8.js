(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {

  "ἀρέσκω": {
    "status": "manual+slots",
    "summary": "Νέο tranche χειροκίνητης συμπλήρωσης για το ἀρέσκω, με present active / middle-passive system, imperfect, future active, aorist active και aorist middle, καθώς και μη προσωπικούς τύπους.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἀρέσκω",
        "note": "βασικός ενεστωτικός τύπος"
      },
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἀρέσκομαι",
        "note": "βεβαιωμένο deponent/present middle-passive layer"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἤρεσκον",
        "note": "βεβαιωμένος historical imperfect"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἠρεσκόμην",
        "note": "βεβαιωμένος middle/passive imperfect"
      },
      {
        "slot": "future|active|indicative|1sg",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἀρέσω",
        "note": "βεβαιωμένος future active"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἤρεσα",
        "note": "βεβαιωμένος αόριστος α΄"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος • μέση • οριστική • α΄ ενικό",
        "form": "ἠρεσάμην",
        "note": "βεβαιωμένος μέσος αόριστος"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "ἀρέσκειν",
        "note": "βασικό απαρέμφατο"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "ενεστώτας • μέση/παθητική • απαρέμφατο",
        "form": "ἀρέσκεσθαι",
        "note": "present middle/passive infinitive"
      },
      {
        "slot": "aorist|active|infinitive",
        "label": "αόριστος • ενεργητική • απαρέμφατο",
        "form": "ἀρέσαι",
        "note": "απαρέμφατο αορίστου α΄"
      },
      {
        "slot": "aorist|middle|infinitive",
        "label": "αόριστος • μέση • απαρέμφατο",
        "form": "ἀρέσασθαι",
        "note": "μέσο απαρέμφατο αορίστου"
      },
      {
        "slot": "present|active|participle|masc.nom.sg",
        "label": "ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἀρέσκων",
        "note": "μετοχή ενεστώτα"
      },
      {
        "slot": "present|middle/passive|participle|masc.nom.sg",
        "label": "ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἀρεσκόμενος",
        "note": "μετοχή present middle/passive"
      },
      {
        "slot": "aorist|active|participle|masc.nom.sg",
        "label": "αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἀρέσας",
        "note": "αοριστική μετοχή"
      },
      {
        "slot": "aorist|middle|participle|masc.nom.sg",
        "label": "αόριστος • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "ἀρεσάμενος",
        "note": "μέση αοριστική μετοχή"
      }
    ]
  },

  "γηράσκω": {
    "status": "manual+slots",
    "summary": "Νέο tranche χειροκίνητης συμπλήρωσης για το γηράσκω, με πλήρες present active layer, μέλλοντα μέσης φωνής με ενεργητική σημασία, αόριστο α΄, συντηρητική καταγραφή του εναλλακτικού αορίστου β΄ ἐγήραν και perfect active layer.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "γηράσκω",
        "note": "βασικός ενεστωτικός τύπος"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐγήρασκον",
        "note": "βεβαιωμένος historical imperfect"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "γηράσομαι",
        "note": "μέση μορφή με ενεργητική σημασία"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐγήρασα",
        "note": "βεβαιωμένος αόριστος α΄"
      },
      {
        "slot": "aorist|active|indicative|1sg-alt",
        "label": "αόριστος β΄ • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐγήραν",
        "note": "εναλλακτικός αόριστος β΄ καταγεγραμμένος συντηρητικά"
      },
      {
        "slot": "perfect|active|indicative|1sg",
        "label": "παρακείμενος • ενεργητική • οριστική • α΄ ενικό",
        "form": "γεγήρακα",
        "note": "βεβαιωμένος perfect active"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "γηράσκειν",
        "note": "βασικό απαρέμφατο"
      },
      {
        "slot": "future|middle|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "γηράσεσθαι",
        "note": "future middle infinitive"
      },
      {
        "slot": "aorist|active|infinitive",
        "label": "αόριστος • ενεργητική • απαρέμφατο",
        "form": "γηρᾶσαι",
        "note": "απαρέμφατο αορίστου α΄"
      },
      {
        "slot": "perfect|active|infinitive",
        "label": "παρακείμενος • ενεργητική • απαρέμφατο",
        "form": "γεγηρακέναι",
        "note": "perfect infinitive"
      },
      {
        "slot": "present|active|participle|masc.nom.sg",
        "label": "ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "γηράσκων",
        "note": "μετοχή ενεστώτα"
      },
      {
        "slot": "future|middle|participle|masc.nom.sg",
        "label": "μέλλοντας • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "γηρασόμενος",
        "note": "future middle participle"
      },
      {
        "slot": "aorist|active|participle|masc.nom.sg",
        "label": "αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "γηράσας",
        "note": "αοριστική μετοχή"
      },
      {
        "slot": "perfect|active|participle|masc.nom.sg",
        "label": "παρακείμενος • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "γεγηρακώς",
        "note": "παρακείμενη μετοχή"
      }
    ]
  }

});
})();
