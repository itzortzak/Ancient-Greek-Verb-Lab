(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "ἔχω": {
    "status": "manual+slots",
    "summary": "Tranche 69: το ἔχω αποκτά expanded source-backed multistem paradigm με full present/imperfect active και middle-passive, dual future axis ἕξω / σχήσω και ἕξομαι / σχήσομαι, β΄ aorist active και middle με moods, conservative perfect/pluperfect core, bracketed passive anchors και refreshed infinitives/participles.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἔχω",
        "note": "βασικός present axis του λήμματος"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "εἶχον",
        "note": "ρητός παρατατικός στον Οικονόμου / Τζαρτζάνο / Binder4"
      },
      {
        "slot": "future|active|indicative|1sg",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἕξω",
        "note": "πρώτος ρητός future axis στο 05.2 και στον Τζαρτζάνο"
      },
      {
        "slot": "future|active|indicative|1sg",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό (παράλληλος τύπος)",
        "form": "σχήσω",
        "note": "δεύτερος ρητός future axis στο 05.2 και στον Τζαρτζάνο"
      },
      {
        "slot": "aorist|active|subjunctive|1sg",
        "label": "αόριστος • ενεργητική • υποτακτική • α΄ ενικό",
        "form": "σχῶ",
        "note": "ρητός υποτακτικός τύπος στο 05.1 / Οικονόμου / Τζαρτζάνο"
      },
      {
        "slot": "aorist|active|optative|1sg",
        "label": "αόριστος • ενεργητική • ευκτική • α΄ ενικό",
        "form": "σχοίην",
        "note": "ρητός ευκτικός τύπος στο 05.1 / Οικονόμου / Τζαρτζάνο"
      },
      {
        "slot": "aorist|active|imperative|2sg",
        "label": "αόριστος • ενεργητική • προστακτική • β΄ ενικό",
        "form": "σχές",
        "note": "ρητός προστακτικός τύπος στο 05.1 / Οικονόμου / Τζαρτζάνο"
      },
      {
        "slot": "aorist|active|infinitive",
        "label": "αόριστος • ενεργητική • απαρέμφατο",
        "form": "σχεῖν",
        "note": "ρητό απαρέμφατο στον Οικονόμου / Τζαρτζάνο / Binder1"
      },
      {
        "slot": "aorist|active|participle|masc.nom.sg",
        "label": "αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "σχών",
        "note": "ρητή μετοχική βάση στον Οικονόμου / Τζαρτζάνο"
      },
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἔχομαι",
        "note": "ρητός middle/passive present axis στο 05.2 / Οικονόμου / Τζαρτζάνο"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "ἕξομαι",
        "note": "πρώτος ρητός middle future axis στο 05.2 / Οικονόμου / Τζαρτζάνο"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό (παράλληλος τύπος)",
        "form": "σχήσομαι",
        "note": "δεύτερος ρητός middle future axis στο 05.2 / Οικονόμου / Τζαρτζάνο"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος • μέση • οριστική • α΄ ενικό",
        "form": "ἐσχόμην",
        "note": "ρητός β΄ aorist middle/passive axis στο 05.2 / Οικονόμου / Τζαρτζάνο"
      },
      {
        "slot": "aorist|middle|subjunctive|1sg",
        "label": "αόριστος • μέση • υποτακτική • α΄ ενικό",
        "form": "σχῶμαι",
        "note": "ρητός subjunctive axis στο 05.2 / Οικονόμου / Τζαρτζάνο"
      },
      {
        "slot": "future|passive|indicative|1sg",
        "label": "μέλλοντας • παθητική • οριστική • α΄ ενικό",
        "form": "σχεθήσομαι",
        "note": "bracketed passive-future anchor στο 05.2 Αρχικοί Χρόνοι"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "αόριστος • παθητική • οριστική • α΄ ενικό",
        "form": "ἐσχέθην",
        "note": "bracketed passive-aorist anchor στο 05.2 Αρχικοί Χρόνοι"
      },
      {
        "slot": "perfect|active|indicative|1sg",
        "label": "παρακείμενος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἔσχηκα",
        "note": "ρητός perfect axis στο 05.2 / Οικονόμου / Τζαρτζάνο"
      },
      {
        "slot": "pluperfect|active|indicative|1sg",
        "label": "υπερσυντέλικος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐσχήκειν",
        "note": "ρητός pluperfect anchor στο 05.2 Αρχικοί Χρόνοι"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἔσχημαι",
        "note": "ρητός perfect middle/passive axis στο 05.2 / Οικονόμου / Τζαρτζάνο"
      },
      {
        "slot": "pluperfect|middle/passive|indicative|1sg",
        "label": "υπερσυντέλικος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἐσχήμην",
        "note": "ρητός pluperfect middle/passive anchor στο 05.2 Αρχικοί Χρόνοι"
      }
    ]
  }
} );
})();
