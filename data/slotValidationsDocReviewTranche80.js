(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "αἰτέω": {
    "status": "manual+slots",
    "summary": "Tranche 80: το αἰτέω αποκτά νέο source-backed contracted school-core paradigm με κανονικούς συνηρημένους τύπους present/imperfect active και middle/passive, future active και future middle, α΄ aorist active, passive aorist, και conservative perfect/pluperfect indicative + non-finite core.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "αἰτῶ",
        "note": "κανονικός συνηρημένος τύπος των ρημάτων σε -έω από το 05.1"
      },
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "αἰτοῦμαι",
        "note": "κανονικός συνηρημένος τύπος των ρημάτων σε -έομαι από το 05.1"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ᾔτουν",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ᾐτούμην",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "future|active|indicative|1sg",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό",
        "form": "αἰτήσω",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "αἰτήσομαι",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος α΄ • ενεργητική • οριστική • α΄ ενικό",
        "form": "ᾔτησα",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "aorist|active|subjunctive|1sg",
        "label": "αόριστος α΄ • ενεργητική • υποτακτική • α΄ ενικό",
        "form": "αἰτήσω",
        "note": "κανονική ανάπτυξη του αορίστου α΄ ενεργητικής"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "παθητικός αόριστος α΄ • παθητική • οριστική • α΄ ενικό",
        "form": "ᾐτήθην",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "aorist|passive|subjunctive|1sg",
        "label": "παθητικός αόριστος α΄ • παθητική • υποτακτική • α΄ ενικό",
        "form": "αἰτηθῶ",
        "note": "κανονική ανάπτυξη του παθητικού αορίστου α΄"
      },
      {
        "slot": "perfect|active|indicative|1sg",
        "label": "παρακείμενος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ᾔτηκα",
        "note": "ρητός principal part στο 05.2 και Binder4"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ᾔτημαι",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "pluperfect|active|indicative|1sg",
        "label": "υπερσυντέλικος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ᾐτήκειν",
        "note": "ρητός principal part στο 05.2 και Binder4"
      },
      {
        "slot": "pluperfect|middle/passive|indicative|1sg",
        "label": "υπερσυντέλικος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ᾐτήμην",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "αἰτεῖν",
        "note": "κανονικό contracted απαρέμφατο"
      },
      {
        "slot": "future|middle|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "αἰτήσεσθαι",
        "note": "κανονικό απαρέμφατο του middle future axis"
      },
      {
        "slot": "perfect|active|infinitive",
        "label": "παρακείμενος • ενεργητική • απαρέμφατο",
        "form": "ᾐτηκέναι",
        "note": "κανονικός συντελικός απαρεμφατικός τύπος"
      },
      {
        "slot": "present|active|participle|masc.nom.sg",
        "label": "ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "αἰτῶν",
        "note": "κανονική συνηρημένη μετοχή του 05.1"
      },
      {
        "slot": "future|middle|participle|masc.nom.sg",
        "label": "μέλλοντας • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "αἰτησόμενος",
        "note": "κανονική μετοχή του middle future axis"
      },
      {
        "slot": "aorist|passive|participle|masc.nom.sg",
        "label": "παθητικός αόριστος α΄ • παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "αἰτηθείς",
        "note": "κανονική μετοχή παθητικού αορίστου α΄"
      }
    ]
  }
} );
})();
