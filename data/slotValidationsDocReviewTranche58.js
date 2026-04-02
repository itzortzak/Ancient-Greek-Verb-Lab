(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "βιάζομαι": {
    "status": "manual+slots",
    "summary": "Tranche 58: το βιάζομαι αποκτά πλήρες present middle με εγκλίσεις, imperfect middle, future middle και future passive σε indicative + non-finite, expanded aorist middle και aorist passive layer, και συντηρητικά perfect/pluperfect anchors από τους ρητούς αρχικούς χρόνους.",
    "slots": [
      {
        "slot": "present|middle|indicative|1sg",
        "label": "ενεστώτας • μέση • οριστική • α΄ ενικό",
        "form": "βιάζομαι",
        "note": "ρητός school-core present τύπος του αποθετικού"
      },
      {
        "slot": "present|middle|subjunctive|1sg",
        "label": "ενεστώτας • μέση • υποτακτική • α΄ ενικό",
        "form": "βιάζωμαι",
        "note": "συντηρητική ανάπτυξη από το θεματικό middle pattern"
      },
      {
        "slot": "present|middle|optative|1sg",
        "label": "ενεστώτας • μέση • ευκτική • α΄ ενικό",
        "form": "βιαζοίμην",
        "note": "συντηρητική ανάπτυξη από το θεματικό middle pattern"
      },
      {
        "slot": "present|middle|imperative|2sg",
        "label": "ενεστώτας • μέση • προστακτική • β΄ ενικό",
        "form": "βιάζου",
        "note": "κανονικός προστακτικός σχηματισμός μέσης φωνής"
      },
      {
        "slot": "imperfect|middle|indicative|1sg",
        "label": "παρατατικός • μέση • οριστική • α΄ ενικό",
        "form": "ἐβιαζόμην",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "βιάσομαι",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "future|passive|indicative|1sg",
        "label": "παθητικός μέλλοντας α΄ • παθητική • οριστική • α΄ ενικό",
        "form": "βιασθήσομαι",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος α΄ • μέση • οριστική • α΄ ενικό",
        "form": "ἐβιασάμην",
        "note": "ρητός principal part στο 05.2 και Οικονόμου"
      },
      {
        "slot": "aorist|middle|subjunctive|1sg",
        "label": "αόριστος α΄ • μέση • υποτακτική • α΄ ενικό",
        "form": "βιάσωμαι",
        "note": "κανονική ανάπτυξη του α΄ αορίστου μέσης"
      },
      {
        "slot": "aorist|middle|optative|1sg",
        "label": "αόριστος α΄ • μέση • ευκτική • α΄ ενικό",
        "form": "βιασαίμην",
        "note": "κανονική ανάπτυξη του α΄ αορίστου μέσης"
      },
      {
        "slot": "aorist|middle|imperative|2sg",
        "label": "αόριστος α΄ • μέση • προστακτική • β΄ ενικό",
        "form": "βίασαι",
        "note": "κανονικός προστακτικός σχηματισμός α΄ αορίστου μέσης"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "παθητικός αόριστος α΄ • παθητική • οριστική • α΄ ενικό",
        "form": "ἐβιάσθην",
        "note": "ρητός principal part στο 05.2 και Οικονόμου"
      },
      {
        "slot": "aorist|passive|subjunctive|1sg",
        "label": "παθητικός αόριστος α΄ • παθητική • υποτακτική • α΄ ενικό",
        "form": "βιασθῶ",
        "note": "τυπική ανάπτυξη του παθητικού αορίστου α΄"
      },
      {
        "slot": "aorist|passive|optative|1sg",
        "label": "παθητικός αόριστος α΄ • παθητική • ευκτική • α΄ ενικό",
        "form": "βιασθείην",
        "note": "τυπική ανάπτυξη του παθητικού αορίστου α΄"
      },
      {
        "slot": "aorist|passive|imperative|2sg",
        "label": "παθητικός αόριστος α΄ • παθητική • προστακτική • β΄ ενικό",
        "form": "βιάσθητι",
        "note": "τυπικός προστακτικός σχηματισμός του παθητικού αορίστου α΄"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "βεβίασμαι",
        "note": "ρητός principal part στο 05.2· κρατιέται ως anchor"
      },
      {
        "slot": "pluperfect|middle/passive|indicative|1sg",
        "label": "υπερσυντέλικος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἐβεβιάσμην",
        "note": "ρητός principal part στο 05.2· κρατιέται ως anchor"
      },
      {
        "slot": "aorist|passive|infinitive",
        "label": "παθητικός αόριστος α΄ • παθητική • απαρέμφατο",
        "form": "βιασθῆναι",
        "note": "τυπικός infinitive σχηματισμός του παθητικού αορίστου α΄"
      }
    ]
  }
} );
})();
