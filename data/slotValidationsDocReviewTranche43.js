(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "ῥύομαι": {
  "status": "manual+slots",
  "summary": "Νέο source-backed tranche για το ῥύομαι, με πλήρη present/imperfect/future deponent core, πλήρη κανονική ανάπτυξη του μέσου αορίστου α΄ και του παθητικού αορίστου α΄ από τα ρητώς δοσμένα principal parts του 05.2 και τους σχολικούς συγκεντρωτικούς πίνακες.",
  "slots": [
    {
      "slot": "present|middle|indicative|1sg",
      "label": "ενεστώτας • μέση • οριστική • α΄ ενικό",
      "form": "ῥύομαι",
      "note": "βασικός λημματικός τύπος"
    },
    {
      "slot": "imperfect|middle|indicative|1sg",
      "label": "παρατατικός • μέση • οριστική • α΄ ενικό",
      "form": "ἐρρυόμην",
      "note": "ρητώς δοσμένος παρατατικός στο 05.2"
    },
    {
      "slot": "future|middle|indicative|1sg",
      "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
      "form": "ῥύσομαι",
      "note": "ρητώς δοσμένος μέλλοντας στο 05.2"
    },
    {
      "slot": "future|middle|optative|1sg",
      "label": "μέλλοντας • μέση • ευκτική • α΄ ενικό",
      "form": "ῥυσοίμην",
      "note": "κανονική ευκτική μέλλοντα από το μέσο μέλλοντα"
    },
    {
      "slot": "aorist|middle|indicative|1sg",
      "label": "αόριστος α΄ • μέση • οριστική • α΄ ενικό",
      "form": "ἐρρυσάμην",
      "note": "ρητώς δοσμένος αόριστος μέσης στο 05.2"
    },
    {
      "slot": "aorist|middle|subjunctive|1sg",
      "label": "αόριστος α΄ • μέση • υποτακτική • α΄ ενικό",
      "form": "ῥύσωμαι",
      "note": "κανονική ανάπτυξη του μέσου αορίστου α΄ σύμφωνα με τον συγκεντρωτικό πίνακα"
    },
    {
      "slot": "aorist|middle|optative|1sg",
      "label": "αόριστος α΄ • μέση • ευκτική • α΄ ενικό",
      "form": "ῥυσαίμην",
      "note": "κανονική ανάπτυξη του μέσου αορίστου α΄"
    },
    {
      "slot": "aorist|middle|imperative|2sg",
      "label": "αόριστος α΄ • μέση • προστακτική • β΄ ενικό",
      "form": "ῥῦσαι",
      "note": "κανονική προστακτική μέσου αορίστου α΄"
    },
    {
      "slot": "aorist|passive|indicative|1sg",
      "label": "παθητικός αόριστος α΄ • οριστική • α΄ ενικό",
      "form": "ἐρρύσθην",
      "note": "ρητώς δοσμένος παθητικός αόριστος στο 05.2"
    },
    {
      "slot": "aorist|passive|subjunctive|1sg",
      "label": "παθητικός αόριστος α΄ • υποτακτική • α΄ ενικό",
      "form": "ῥυσθῶ",
      "note": "κανονική ανάπτυξη παθητικού αορίστου από τον πίνακα παθητικών χρόνων"
    },
    {
      "slot": "aorist|passive|optative|1sg",
      "label": "παθητικός αόριστος α΄ • ευκτική • α΄ ενικό",
      "form": "ῥυσθείην",
      "note": "κανονική ανάπτυξη παθητικού αορίστου α΄"
    },
    {
      "slot": "aorist|passive|imperative|2sg",
      "label": "παθητικός αόριστος α΄ • προστακτική • β΄ ενικό",
      "form": "ῥύσθητι",
      "note": "κανονική προστακτική παθητικού αορίστου α΄"
    },
    {
      "slot": "present|middle|infinitive",
      "label": "ενεστώτας • μέση • απαρέμφατο",
      "form": "ῥύεσθαι",
      "note": "κανονικό present infinitive"
    },
    {
      "slot": "future|middle|infinitive",
      "label": "μέλλοντας • μέση • απαρέμφατο",
      "form": "ῥύσεσθαι",
      "note": "κανονικό future infinitive"
    },
    {
      "slot": "aorist|middle|infinitive",
      "label": "αόριστος α΄ • μέση • απαρέμφατο",
      "form": "ῥύσασθαι",
      "note": "κανονικό aorist middle infinitive"
    },
    {
      "slot": "aorist|passive|infinitive",
      "label": "παθητικός αόριστος α΄ • απαρέμφατο",
      "form": "ῥυσθῆναι",
      "note": "κανονικό passive infinitive"
    },
    {
      "slot": "present|middle|participle|masc",
      "label": "ενεστώτας • μέση • μετοχή αρσενικό",
      "form": "ῥυόμενος",
      "note": "κανονική present μετοχή"
    },
    {
      "slot": "future|middle|participle|masc",
      "label": "μέλλοντας • μέση • μετοχή αρσενικό",
      "form": "ῥυσόμενος",
      "note": "κανονική future μετοχή"
    },
    {
      "slot": "aorist|middle|participle|masc",
      "label": "αόριστος α΄ • μέση • μετοχή αρσενικό",
      "form": "ῥυσάμενος",
      "note": "κανονική middle aorist μετοχή"
    },
    {
      "slot": "aorist|passive|participle|masc",
      "label": "παθητικός αόριστος α΄ • μετοχή αρσενικό",
      "form": "ῥυσθείς",
      "note": "κανονική passive aorist μετοχή"
    }
  ]
}
}
);
})();
