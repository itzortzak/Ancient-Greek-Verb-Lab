(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "ῥήγνυμι": {
    "status": "manual+slots",
    "summary": "Tranche 48: το ῥήγνυμι αποκτά expanded source-backed school-core paradigm με πλήρες present/imperfect ενεργητικής και μέσης-παθητικής, αναλυτικούς future/aorist layers και conservative perfect/pluperfect anchors.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ῥήγνυμι",
        "note": "ρητός τύπος του υποδείγματος δείκνυμι για τα συμφωνόληκτα σε -μι"
      },
      {
        "slot": "present|active|indicative|3pl",
        "label": "ενεστώτας • ενεργητική • οριστική • γ΄ πληθυντικό",
        "form": "ῥηγνύασι(ν)",
        "note": "κατά το δείκνυμι του 05.1"
      },
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ῥήγνυμαι",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "present|middle/passive|imperative|2sg",
        "label": "ενεστώτας • μέση/παθητική • προστακτική • β΄ ενικό",
        "form": "ῥήγνυσο",
        "note": "κατά το δείκνυμαι του 05.1"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐρρήγνυν",
        "note": "ρητός principal part στο 05.2 και στον Οικονόμου· βεβαιώνεται και η παραλλαγή ἐρρήγνυον"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἐρρηγνύμην",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "future|active|indicative|1sg",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ῥήξω",
        "note": "ρητός principal part"
      },
      {
        "slot": "future|middle/passive|indicative|1sg",
        "label": "μέλλοντας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ῥήξομαι",
        "note": "ρητός principal part"
      },
      {
        "slot": "future|passive|indicative|1sg",
        "label": "παθητικός μέλλοντας β΄ • παθητική • οριστική • α΄ ενικό",
        "form": "ῥαγήσομαι",
        "note": "ρητός principal part"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος α΄ • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἔρρηξα",
        "note": "ρητός principal part"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος α΄ • μέση • οριστική • α΄ ενικό",
        "form": "ἐρρηξάμην",
        "note": "ρητός principal part"
      },
      {
        "slot": "aorist|passive|indicative|1sg-alpha",
        "label": "παθητικός αόριστος α΄ • παθητική • οριστική • α΄ ενικό",
        "form": "ἐρρήχθην",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "aorist|passive|indicative|1sg-beta",
        "label": "παθητικός αόριστος β΄ • παθητική • οριστική • α΄ ενικό",
        "form": "ἐρράγην",
        "note": "ρητός principal part στο 05.2 και στον Οικονόμου"
      },
      {
        "slot": "perfect|active|indicative|1sg",
        "label": "παρακείμενος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἔρρηχα",
        "note": "ρητός perfect anchor στο 05.2· ο Οικονόμου δίνει και το ἔρρωγα"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἔρρηγμαι",
        "note": "ρητός perfect anchor στο 05.2"
      },
      {
        "slot": "pluperfect|middle/passive|indicative|1sg",
        "label": "υπερσυντέλικος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἐρρηγμήν",
        "note": "ρητός pluperfect anchor στο 05.2"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "ῥηγνύναι",
        "note": "κατά το δείκνυμι του 05.1"
      },
      {
        "slot": "present|middle/passive|participle|masc.nom.sg",
        "label": "ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ῥηγνύμενος",
        "note": "κατά το δείκνυμαι του 05.1"
      },
      {
        "slot": "aorist|passive|infinitive-beta",
        "label": "παθητικός αόριστος β΄ • παθητική • απαρέμφατο",
        "form": "ῥαγῆναι",
        "note": "κανονική ανάπτυξη από τον ρητό principal part ἐρράγην"
      },
      {
        "slot": "aorist|passive|participle|masc.nom.sg-beta",
        "label": "παθητικός αόριστος β΄ • παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ῥαγείς",
        "note": "κανονική μετοχική ανάπτυξη από τον β΄ παθητικό αόριστο"
      }
    ]
  }
});
})();
