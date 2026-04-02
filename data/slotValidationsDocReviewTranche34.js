(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "οἴχομαι": {
    "status": "manual+slots",
    "summary": "Expanded analytical deponent layer for οἴχομαι with present/imperfect/future and conservative perfect support.",
    "slots": [
      {
        "slot": "present|middle|indicative|1sg",
        "label": "ενεστώτας • μέση • οριστική • α΄ ενικό",
        "form": "οἴχομαι",
        "note": "βεβαιωμένο λήμμα από 05.2 και Τζαρτζάνο"
      },
      {
        "slot": "imperfect|middle|indicative|1sg",
        "label": "παρατατικός • μέση • οριστική • α΄ ενικό",
        "form": "ᾠχόμην",
        "note": "ρητός αρχικός χρόνος στο 05.2, με αοριστική σημασία κατά Τζαρτζάνο"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "οἰχήσομαι",
        "note": "ρητός αρχικός χρόνος σε 05.2 και Τζαρτζάνο"
      },
      {
        "slot": "present|middle|subjunctive|1sg",
        "label": "ενεστώτας • μέση • υποτακτική • α΄ ενικό",
        "form": "οἴχωμαι",
        "note": "αναλυτική συμπλήρωση κατά το κανονικό πρότυπο των ρημάτων σε -ομαι"
      },
      {
        "slot": "present|middle|optative|1sg",
        "label": "ενεστώτας • μέση • ευκτική • α΄ ενικό",
        "form": "οἰχοίμην",
        "note": "αναλυτική συμπλήρωση κατά το κανονικό πρότυπο"
      },
      {
        "slot": "present|middle|imperative|2sg",
        "label": "ενεστώτας • μέση • προστακτική • β΄ ενικό",
        "form": "οἴχου",
        "note": "κανονικός προστακτικός σχηματισμός"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "οἴχημαι",
        "note": "επιλογή της μεσοπαθητικής παρακειμενικής παραλλαγής που δίνει ρητά το 05.2"
      },
      {
        "slot": "present|middle|infinitive",
        "label": "ενεστώτας • μέση • απαρέμφατο",
        "form": "οἴχεσθαι",
        "note": "αναλυτική συμπλήρωση του non-finite layer"
      },
      {
        "slot": "future|middle|participle|masc.nom.sg",
        "label": "μέλλοντας • μέση • μετοχή • αρσ. ον. εν.",
        "form": "οἰχησόμενος",
        "note": "συμπλήρωση της αναλυτικής μετοχικής κάλυψης"
      }
    ]
  },
  "βιάζομαι": {
    "status": "manual+slots",
    "summary": "Expanded mixed deponent layer for βιάζομαι with middle aorist and passive aorist coverage.",
    "slots": [
      {
        "slot": "present|middle|indicative|1sg",
        "label": "ενεστώτας • μέση • οριστική • α΄ ενικό",
        "form": "βιάζομαι",
        "note": "βασικό λήμμα"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "βιάσομαι",
        "note": "κανονικός μέλλοντας μέσης"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος • μέση • οριστική • α΄ ενικό",
        "form": "ἐβιασάμην",
        "note": "ρητή μαρτυρία στον Οικονόμου"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "αόριστος • παθητική • οριστική • α΄ ενικό",
        "form": "ἐβιάσθην",
        "note": "ρητή μαρτυρία στον Οικονόμου"
      },
      {
        "slot": "aorist|middle|subjunctive|1sg",
        "label": "αόριστος • μέση • υποτακτική • α΄ ενικό",
        "form": "βιάσωμαι",
        "note": "κανονική αναλυτική συμπλήρωση από τον βεβαιωμένο αόριστο μέσης"
      },
      {
        "slot": "aorist|passive|optative|1sg",
        "label": "αόριστος • παθητική • ευκτική • α΄ ενικό",
        "form": "βιασθείην",
        "note": "κανονική αναλυτική συμπλήρωση από τον βεβαιωμένο παθητικό αόριστο"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "βεβίασμαι",
        "note": "συντηρητική συμπλήρωση του συντελικού layer"
      },
      {
        "slot": "aorist|middle|infinitive",
        "label": "αόριστος • μέση • απαρέμφατο",
        "form": "βιάσασθαι",
        "note": "μη προσωπικός τύπος από το ἐβιασάμην"
      },
      {
        "slot": "aorist|passive|participle|masc.nom.sg",
        "label": "αόριστος • παθητική • μετοχή • αρσ. ον. εν.",
        "form": "βιασθείς",
        "note": "μη προσωπικός τύπος από το ἐβιάσθην"
      }
    ]
  }
});
})();
