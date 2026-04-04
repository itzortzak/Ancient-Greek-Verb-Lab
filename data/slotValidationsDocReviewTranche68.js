(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "φέρω": {
    "status": "manual+slots",
    "summary": "Tranche 68: το φέρω αποκτά expanded source-backed multistem paradigm με πλήρες present/imperfect active και middle-passive, future active και middle με optative, explicit dual passive-future axis, β΄ aorist active με moods και α΄-variant indicative anchors, aorist middle/passive school-core layers, conservative perfect/pluperfect active core, safe perfect/pluperfect middle-passive anchors, refreshed infinitives/participles και form-index replacement.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "φέρω",
        "note": "βασικός present axis του λήμματος"
      },
      {
        "slot": "present|middle/passive|indicative|3pl",
        "label": "ενεστώτας • μέση/παθητική • οριστική • γ΄ πληθυντικό",
        "form": "φέρονται",
        "note": "regular present middle/passive school-core type"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἔφερον",
        "note": "ρητός παρατατικός στον Τζαρτζάνο"
      },
      {
        "slot": "future|active|indicative|1sg",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό",
        "form": "οἴσω",
        "note": "ρητός ανώμαλος future axis"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "οἴσομαι",
        "note": "ρητός middle future axis"
      },
      {
        "slot": "future|passive|indicative|1sg",
        "label": "μέλλοντας • παθητική • οριστική • α΄ ενικό",
        "form": "οἰσθήσομαι",
        "note": "πρώτος ρητός παθητικός future axis του Τζαρτζάνου"
      },
      {
        "slot": "future|passive|indicative|1sg",
        "label": "μέλλοντας • παθητική • οριστική • α΄ ενικό (παράλληλος τύπος)",
        "form": "ἐνεχθήσομαι",
        "note": "δεύτερος ρητός παθητικός future axis του Τζαρτζάνου"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἤνεγκον",
        "note": "ρητός β΄ αόριστος στο 05.1 και στο Binder1"
      },
      {
        "slot": "aorist|active|subjunctive|1sg",
        "label": "αόριστος • ενεργητική • υποτακτική • α΄ ενικό",
        "form": "ἐνέγκω",
        "note": "ρητός β΄ αόριστος υποτακτικής στο Binder1"
      },
      {
        "slot": "aorist|active|optative|1sg",
        "label": "αόριστος • ενεργητική • ευκτική • α΄ ενικό",
        "form": "ἐνέγκοιμι",
        "note": "ρητός β΄ αόριστος ευκτικής στο Binder1"
      },
      {
        "slot": "aorist|active|imperative|2sg",
        "label": "αόριστος • ενεργητική • προστακτική • β΄ ενικό",
        "form": "ἔνεγκε",
        "note": "ρητός β΄ αόριστος προστακτικής στο Binder1"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος • μέση • οριστική • α΄ ενικό",
        "form": "ἠνεγκάμην",
        "note": "ρητός middle aorist axis του Τζαρτζάνου"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "αόριστος • παθητική • οριστική • α΄ ενικό",
        "form": "ἠνέχθην",
        "note": "ρητός passive aorist axis του Τζαρτζάνου"
      },
      {
        "slot": "perfect|active|indicative|1sg",
        "label": "παρακείμενος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐνήνοχα",
        "note": "ρητός perfect axis με αττικό αναδιπλασιασμό"
      },
      {
        "slot": "pluperfect|active|indicative|1sg",
        "label": "υπερσυντέλικος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐνηνόχειν",
        "note": "ρητός pluperfect axis του 05.1 / Τζαρτζάνου"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἐνήνεγμαι",
        "note": "safe middle/passive perfect anchor from Τζαρτζάνος"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "φέρειν",
        "note": "βασικό non-finite present type"
      },
      {
        "slot": "aorist|active|infinitive",
        "label": "αόριστος • ενεργητική • απαρέμφατο",
        "form": "ἐνεγκεῖν",
        "note": "ρητός β΄ αόριστος infinitive στο Binder1"
      },
      {
        "slot": "aorist|active|participle|masc.nom.sg",
        "label": "αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἐνεγκών",
        "note": "ρητός β΄ αόριστος participle axis στο Binder1"
      },
      {
        "slot": "aorist|passive|participle|masc.nom.sg",
        "label": "αόριστος • παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἐνεχθείς",
        "note": "regular passive aorist participial axis from ἠνέχθην"
      }
    ]
  }
} );
})();
