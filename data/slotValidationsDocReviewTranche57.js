(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "αἰτιῶμαι": {
    "status": "manual+slots",
    "summary": "Tranche 57: το αἰτιῶμαι αποκτά πλήρες present contracted middle με εγκλίσεις, expanded aorist middle και aorist passive layer, συντηρητικό future middle indicative και perfect/pluperfect anchors από τους ρητούς αρχικούς χρόνους.",
    "slots": [
      {
        "slot": "present|middle|indicative|1sg",
        "label": "ενεστώτας • μέση • οριστική • α΄ ενικό",
        "form": "αἰτιῶμαι",
        "note": "συνηρημένος present middle κατά το τιμῶμαι"
      },
      {
        "slot": "present|middle|optative|1sg",
        "label": "ενεστώτας • μέση • ευκτική • α΄ ενικό",
        "form": "αἰτιῴμην",
        "note": "κατά το τιμῴμην του σχολικού υποδείγματος"
      },
      {
        "slot": "present|middle|imperative|2sg",
        "label": "ενεστώτας • μέση • προστακτική • β΄ ενικό",
        "form": "αἰτιῶ",
        "note": "κατά το τιμάου → τιμῶ"
      },
      {
        "slot": "imperfect|middle|indicative|1sg",
        "label": "παρατατικός • μέση • οριστική • α΄ ενικό",
        "form": "ᾐτιώμην",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "αἰτιάσομαι",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος α΄ • μέση • οριστική • α΄ ενικό",
        "form": "ᾐτιασάμην",
        "note": "ρητός principal part στο 05.2 και ρητή κατάταξη στα μεικτά αποθετικά"
      },
      {
        "slot": "aorist|middle|subjunctive|1sg",
        "label": "αόριστος α΄ • μέση • υποτακτική • α΄ ενικό",
        "form": "αἰτιάσωμαι",
        "note": "συντηρητική ανάπτυξη από το κανονικό σχήμα του α΄ αορίστου μέσης"
      },
      {
        "slot": "aorist|middle|imperative|2sg",
        "label": "αόριστος α΄ • μέση • προστακτική • β΄ ενικό",
        "form": "αἰτίασαι",
        "note": "κανονικός προστακτικός σχηματισμός α΄ αορίστου μέσης"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "παθητικός αόριστος α΄ • παθητική • οριστική • α΄ ενικό",
        "form": "ᾐτιάθην",
        "note": "canonical τύπος από το 05.2· πρβλ. και ᾐτιάσθην στον Οικονόμου"
      },
      {
        "slot": "aorist|passive|subjunctive|1sg",
        "label": "παθητικός αόριστος α΄ • παθητική • υποτακτική • α΄ ενικό",
        "form": "αἰτιαθῶ",
        "note": "συντηρητική ανάπτυξη από το τυπικό σχήμα του παθητικού αορίστου α΄"
      },
      {
        "slot": "aorist|passive|imperative|2sg",
        "label": "παθητικός αόριστος α΄ • παθητική • προστακτική • β΄ ενικό",
        "form": "αἰτιάθητι",
        "note": "τυπικός προστακτικός σχηματισμός του παθητικού αορίστου α΄"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ᾐτίαμαι",
        "note": "ρητός principal part στο 05.2· κρατιέται συντηρητικά ως anchor"
      },
      {
        "slot": "pluperfect|middle/passive|indicative|1sg",
        "label": "υπερσυντέλικος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ᾐτιάμην",
        "note": "ρητός principal part στο 05.2· κρατιέται συντηρητικά ως anchor"
      },
      {
        "slot": "present|middle|infinitive",
        "label": "ενεστώτας • μέση • απαρέμφατο",
        "form": "αἰτιᾶσθαι",
        "note": "κατά το τιμᾶσθαι"
      },
      {
        "slot": "aorist|passive|infinitive",
        "label": "παθητικός αόριστος α΄ • παθητική • απαρέμφατο",
        "form": "αἰτιαθῆναι",
        "note": "κανονικός infinitive σχηματισμός του παθητικού αορίστου α΄"
      },
      {
        "slot": "present|middle|participle|masc-nom-sg",
        "label": "ενεστώτας • μέση • μετοχή • αρσενικό ονομ. εν.",
        "form": "αἰτιώμενος",
        "note": "κατά το τιμώμενος"
      },
      {
        "slot": "aorist|passive|participle|masc-nom-sg",
        "label": "παθητικός αόριστος α΄ • παθητική • μετοχή • αρσενικό ονομ. εν.",
        "form": "αἰτιαθείς",
        "note": "κανονικός participial σχηματισμός του παθητικού αορίστου α΄"
      },
      {
        "slot": "aorist|passive|indicative|1sg-alt-anchor",
        "label": "παθητικός αόριστος α΄ • παθητική • οριστική • α΄ ενικό (εναλλακτικός anchor)",
        "form": "ᾐτιάσθην",
        "note": "εναλλακτικός source-backed τύπος στον Οικονόμου, ενταγμένος μόνο στην Αναγνώριση"
      }
    ]
  }
} );
})();
