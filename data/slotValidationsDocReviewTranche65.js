(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "συλλέγω": {
    "status": "manual+slots",
    "summary": "Tranche 65: το συλλέγω αποκτά expanded source-backed compound-irregular paradigm με πλήρες present/imperfect active και middle/passive, future active και middle με optative, aorist active και middle με εγκλίσεις, β΄ passive series με εγκλίσεις και ρητή διατήρηση των alpha/beta passive indicative axes.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "συλλέγω",
        "note": "βασικός τύπος του σύνθετου"
      },
      {
        "slot": "present|active|subjunctive|1sg",
        "label": "ενεστώτας • ενεργητική • υποτακτική • α΄ ενικό",
        "form": "συλλέγω",
        "note": "κανονική ανάπτυξη του present stem"
      },
      {
        "slot": "present|active|imperative|2sg",
        "label": "ενεστώτας • ενεργητική • προστακτική • β΄ ενικό",
        "form": "συλλέγε",
        "note": "κανονική προστακτική του present stem"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "συνέλεγον",
        "note": "ρητός άξονας στον Οικονόμου και στο 05.2"
      },
      {
        "slot": "future|active|indicative|1sg",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό",
        "form": "συλλέξω",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "future|active|optative|1sg",
        "label": "μέλλοντας • ενεργητική • ευκτική • α΄ ενικό",
        "form": "συλλέξοιμι",
        "note": "ασφαλής συμπλήρωση κατά το λύσω"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος α΄ • ενεργητική • οριστική • α΄ ενικό",
        "form": "συνέλεξα",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "aorist|active|imperative|2sg",
        "label": "αόριστος α΄ • ενεργητική • προστακτική • β΄ ενικό",
        "form": "συλλέξον",
        "note": "κανονική ανάπτυξη από το aorist stem"
      },
      {
        "slot": "perfect|active|indicative|1sg",
        "label": "παρακείμενος • ενεργητική • οριστική • α΄ ενικό",
        "form": "συνείλοχα",
        "note": "ρητός perfect anchor στο 05.2 και στον Οικονόμου"
      },
      {
        "slot": "pluperfect|active|indicative|1sg",
        "label": "υπερσυντέλικος • ενεργητική • οριστική • α΄ ενικό",
        "form": "συνειλόχειν",
        "note": "ρητός pluperfect anchor στο 05.2"
      },
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "συλλέγομαι",
        "note": "βασικός middle/passive τύπος"
      },
      {
        "slot": "present|middle/passive|subjunctive|1sg",
        "label": "ενεστώτας • μέση/παθητική • υποτακτική • α΄ ενικό",
        "form": "συλλέγωμαι",
        "note": "κανονική ανάπτυξη του present middle/passive stem"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "συνελεγόμην",
        "note": "ρητός άξονας στο 05.2"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "συλλέξομαι",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος α΄ • μέση • οριστική • α΄ ενικό",
        "form": "συνελεξάμην",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "future|passive|indicative|1sg",
        "label": "παθητικός μέλλοντας α΄ • παθητική • οριστική • α΄ ενικό",
        "form": "συλλεχθήσομαι",
        "note": "ρητός alpha passive future στο 05.2"
      },
      {
        "slot": "future|passive|indicative|1sg-alt",
        "label": "παθητικός μέλλοντας β΄ • παθητική • οριστική • α΄ ενικό",
        "form": "συλλεγήσομαι",
        "note": "ρητός beta passive future στο 05.2"
      },
      {
        "slot": "future|passive|optative|1sg",
        "label": "παθητικός μέλλοντας β΄ • παθητική • ευκτική • α΄ ενικό",
        "form": "συλλεγησοίμην",
        "note": "ασφαλής συμπλήρωση κατά το λυθησοίμην"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "παθητικός αόριστος α΄ • παθητική • οριστική • α΄ ενικό",
        "form": "συνελέχθην",
        "note": "ρητός alpha passive aorist στον Οικονόμου και στο 05.2"
      },
      {
        "slot": "aorist|passive|indicative|1sg-alt",
        "label": "παθητικός αόριστος β΄ • παθητική • οριστική • α΄ ενικό",
        "form": "συνελέγην",
        "note": "ρητός beta passive aorist στον Οικονόμου και στο 05.2"
      },
      {
        "slot": "aorist|passive|imperative|2sg",
        "label": "παθητικός αόριστος β΄ • παθητική • προστακτική • β΄ ενικό",
        "form": "συλλέγηθι",
        "note": "κανονική ανάπτυξη του beta passive stem"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "συνείλεγμαι",
        "note": "ρητός perfect middle/passive anchor στο 05.2"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg-alt",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό (variant)",
        "form": "συλλέλεγμαι",
        "note": "εναλλακτικός ρητός τύπος στο 05.2"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "συλλέγειν",
        "note": "κανονικό non-finite του present stem"
      },
      {
        "slot": "aorist|passive|participle|masc.nom.sg",
        "label": "παθητικός αόριστος β΄ • παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "συλλεγείς",
        "note": "βασική μετοχή του beta passive stem"
      }
    ]
  }
} );
})();
