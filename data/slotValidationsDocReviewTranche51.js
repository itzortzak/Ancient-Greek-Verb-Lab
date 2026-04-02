(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "μίγνυμι": {
  "status": "manual+slots",
  "summary": "Tranche 51: το μίγνυμι αποκτά curated school-core paradigm με present/imperfect κατά το δείκνυμι, future/aorist active, μέσο αόριστο και διπλό παθητικό layer (μειχθήσομαι / ἐμείχθην και μιγήσομαι / ἐμίγην), με συντηρητική διατήρηση του μείξομαι και των μέμειχα / ἐμεμείχειν μόνο ως anchors.",
  "slots": [
    {
      "slot": "present|active|indicative|1sg",
      "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
      "form": "μίγνυμι",
      "note": "κανονικοποιημένο school-core λήμμα της τάξης σε -νυμι"
    },
    {
      "slot": "present|active|indicative|3pl",
      "label": "ενεστώτας • ενεργητική • οριστική • γ΄ πληθυντικό",
      "form": "μιγνύασι(ν)",
      "note": "κατά το δείκνυμι του 05.1"
    },
    {
      "slot": "present|middle/passive|indicative|1sg",
      "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
      "form": "μίγνυμαι",
      "note": "στηρίζεται στο μείγνυμαι των βασικών γραμματικών πηγών"
    },
    {
      "slot": "imperfect|active|indicative|1sg",
      "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
      "form": "ἐμείγνυν",
      "note": "ρητός principal part σε Τζαρτζάνο και Οικονόμου"
    },
    {
      "slot": "imperfect|middle/passive|indicative|1sg",
      "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
      "form": "ἐμειγνύμην",
      "note": "ρητός principal part"
    },
    {
      "slot": "future|active|indicative|1sg",
      "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό",
      "form": "μείξω",
      "note": "ρητός principal part σε Τζαρτζάνο, Οικονόμου και 05.2"
    },
    {
      "slot": "future|middle|indicative|1sg-anchor",
      "label": "μέλλοντας • μέση • οριστική • α΄ ενικό (anchor)",
      "form": "μείξομαι",
      "note": "διατηρήθηκε μόνο ως σχολικός anchor από το 05.2, χωρίς πλήρη ανάπτυξη layer"
    },
    {
      "slot": "aorist|active|indicative|1sg",
      "label": "αόριστος α΄ • ενεργητική • οριστική • α΄ ενικό",
      "form": "ἔμειξα",
      "note": "ρητός principal part"
    },
    {
      "slot": "aorist|middle|indicative|1sg",
      "label": "αόριστος α΄ • μέση • οριστική • α΄ ενικό",
      "form": "ἐμειξάμην",
      "note": "ρητός principal part"
    },
    {
      "slot": "future|passive|indicative|1sg-alpha",
      "label": "παθητικός μέλλοντας α΄ • παθητική • οριστική • α΄ ενικό",
      "form": "μειχθήσομαι",
      "note": "ρητός principal part σε Τζαρτζάνο, Οικονόμου, Binder1 και 05.2"
    },
    {
      "slot": "aorist|passive|indicative|1sg-alpha",
      "label": "παθητικός αόριστος α΄ • παθητική • οριστική • α΄ ενικό",
      "form": "ἐμείχθην",
      "note": "ρητός principal part"
    },
    {
      "slot": "future|passive|indicative|1sg-beta",
      "label": "παθητικός μέλλοντας β΄ • παθητική • οριστική • α΄ ενικό",
      "form": "μιγήσομαι",
      "note": "βεβαιώνεται στο Binder1 και στο 05.2"
    },
    {
      "slot": "aorist|passive|indicative|1sg-beta",
      "label": "παθητικός αόριστος β΄ • παθητική • οριστική • α΄ ενικό",
      "form": "ἐμίγην",
      "note": "ρητός principal part"
    },
    {
      "slot": "present|active|infinitive",
      "label": "ενεστώτας • ενεργητική • απαρέμφατο",
      "form": "μιγνύναι",
      "note": "κατά το δείκνυμι του 05.1"
    },
    {
      "slot": "aorist|active|infinitive",
      "label": "αόριστος α΄ • ενεργητική • απαρέμφατο",
      "form": "μεῖξαι",
      "note": "κανονική ανάπτυξη από τον ρητό stem μειξ-"
    },
    {
      "slot": "aorist|middle|participle|masc.nom.sg",
      "label": "αόριστος α΄ • μέση • μετοχή • αρσενικό ον. εν.",
      "form": "μειξάμενος",
      "note": "κανονική ανάπτυξη από τον ρητό μέσο αόριστο"
    },
    {
      "slot": "aorist|passive|participle|masc.nom.sg-alpha",
      "label": "παθητικός αόριστος α΄ • παθητική • μετοχή • αρσενικό ον. εν.",
      "form": "μιχθείς",
      "note": "κανονική ανάπτυξη από τον ρητό principal part ἐμείχθην"
    },
    {
      "slot": "aorist|passive|participle|masc.nom.sg-beta",
      "label": "παθητικός αόριστος β΄ • παθητική • μετοχή • αρσενικό ον. εν.",
      "form": "μιγείς",
      "note": "κανονική ανάπτυξη από τον ρητό principal part ἐμίγην"
    },
    {
      "slot": "perfect|active|indicative|1sg-anchor",
      "label": "παρακείμενος • ενεργητική • οριστική • α΄ ενικό (anchor)",
      "form": "μέμειχα",
      "note": "κρατήθηκε ως school-sheet anchor από το 05.2, όχι ως πλήρες expanded layer"
    },
    {
      "slot": "pluperfect|active|indicative|1sg-anchor",
      "label": "υπερσυντέλικος • ενεργητική • οριστική • α΄ ενικό (anchor)",
      "form": "ἐμεμείχειν",
      "note": "κρατήθηκε ως school-sheet anchor από το 05.2"
    },
    {
      "slot": "perfect|middle/passive|indicative|1sg-anchor",
      "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό (anchor)",
      "form": "μέμειγμαι",
      "note": "ρητός principal part σε Τζαρτζάνο, Οικονόμου και 05.2"
    },
    {
      "slot": "pluperfect|middle/passive|indicative|1sg-anchor",
      "label": "υπερσυντέλικος • μέση/παθητική • οριστική • α΄ ενικό (anchor)",
      "form": "ἐμεμείγμην",
      "note": "ρητός principal part σε Τζαρτζάνο, Οικονόμου και 05.2"
    }
  ]
}
});
})();
