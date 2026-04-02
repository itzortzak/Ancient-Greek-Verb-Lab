(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "ὄμνυμι": {
    "status": "manual+slots",
    "summary": "Tranche 52: το ὄμνυμι αποκτά curated school-core paradigm με present/imperfect κατά το δείκνυμι, contracted middle future ὀμοῦμαι, πλήρη αόριστο ενεργητικής και μέσης, παθητικό μέλλοντα / αόριστο και συντηρητική διατήρηση των perfect/pluperfect layers μόνο ως source-backed anchors.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ὄμνυμι",
        "note": "κατά το δείκνυμι του 05.1 για τα συμφωνόληκτα σε -νυμι"
      },
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ὄμνυμαι",
        "note": "ανάπτυξη του μέσου present layer από το ίδιο κλιτικό υπόδειγμα"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ὤμνυν",
        "note": "ρητός principal part σε Τζαρτζάνο, Οικονόμου και 05.2"
      },
      {
        "slot": "imperfect|active|indicative|1sg-alt",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό (εναλλακτικός anchor)",
        "form": "ὤμνυον",
        "note": "το 05.2 δίνει ρητά τον διπλό τύπο ὤμνυν / ὤμνυον"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ὠμνύμην",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση (με ενεργητική σημασία) • οριστική • α΄ ενικό",
        "form": "ὀμοῦμαι",
        "note": "ρητός principal part· ο Οικονόμου δίνει και τη contracted σειρά -εῖ, -εῖται κτλ."
      },
      {
        "slot": "future|middle|indicative|2sg",
        "label": "μέλλοντας • μέση • οριστική • β΄ ενικό",
        "form": "ὀμεῖ",
        "note": "ρητά δηλωμένο από τον Οικονόμου ως μέλος της contracted σειράς"
      },
      {
        "slot": "future|middle|indicative|3sg",
        "label": "μέλλοντας • μέση • οριστική • γ΄ ενικό",
        "form": "ὀμεῖται",
        "note": "ρητά δηλωμένο από τον Οικονόμου ως μέλος της contracted σειράς"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος α΄ • ενεργητική • οριστική • α΄ ενικό",
        "form": "ὤμοσα",
        "note": "ρητός principal part σε όλες τις βασικές πηγές"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος α΄ • μέση • οριστική • α΄ ενικό",
        "form": "ὠμοσάμην",
        "note": "ρητός principal part στο 05.2, Τζαρτζάνο και Οικονόμου"
      },
      {
        "slot": "future|passive|indicative|1sg",
        "label": "παθητικός μέλλοντας α΄ • παθητική • οριστική • α΄ ενικό",
        "form": "ὀμοσθήσομαι",
        "note": "ρητός principal part σε 05.2, Τζαρτζάνο και Οικονόμου"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "παθητικός αόριστος α΄ • παθητική • οριστική • α΄ ενικό",
        "form": "ὠμόσθην",
        "note": "η sigmatic σειρά χρησιμοποιήθηκε ως canonical school-core layer"
      },
      {
        "slot": "aorist|passive|indicative|1sg-alt",
        "label": "παθητικός αόριστος α΄ • παθητική • οριστική • α΄ ενικό (εναλλακτικός anchor)",
        "form": "ὠμόθην",
        "note": "το 05.2 διασώζει ρητά και την εναλλακτική μορφή ὠμόθην"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "ὀμνύναι",
        "note": "κατά το δείκνυμι του 05.1"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "ενεστώτας • μέση/παθητική • απαρέμφατο",
        "form": "ὄμνυσθαι",
        "note": "κατά το δείκνυμαι"
      },
      {
        "slot": "future|middle|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "ὀμεῖσθαι",
        "note": "συντηρητική contracted ανάπτυξη από το ὀμοῦμαι"
      },
      {
        "slot": "aorist|active|infinitive",
        "label": "αόριστος α΄ • ενεργητική • απαρέμφατο",
        "form": "ὀμόσαι",
        "note": "κανονική ανάπτυξη από τον ρητό aorist stem ὀμοσα-"
      },
      {
        "slot": "aorist|middle|participle|masc.nom.sg",
        "label": "αόριστος α΄ • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "ὀμοσάμενος",
        "note": "κανονική ανάπτυξη από τον ρητό μέσο αόριστο"
      },
      {
        "slot": "aorist|passive|participle|masc.nom.sg",
        "label": "παθητικός αόριστος α΄ • παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ὀμοσθείς",
        "note": "κανονική ανάπτυξη από τον ρητό principal part ὠμόσθην"
      },
      {
        "slot": "perfect|active|indicative|1sg-anchor",
        "label": "παρακείμενος • ενεργητική • οριστική • α΄ ενικό (anchor)",
        "form": "ὀμώμοκα",
        "note": "ρητός principal part σε Τζαρτζάνο, Οικονόμου και 05.2"
      },
      {
        "slot": "pluperfect|active|indicative|1sg-anchor",
        "label": "υπερσυντέλικος • ενεργητική • οριστική • α΄ ενικό (anchor)",
        "form": "ὠμωμόκειν",
        "note": "ρητός principal part σε Τζαρτζάνο, Οικονόμου και 05.2"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg-anchor",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό (anchor)",
        "form": "ὀμώμοσμαι",
        "note": "η 1sg perfect middle/passive μορφή βεβαιώνεται στο 05.2 και στο Binder4"
      },
      {
        "slot": "perfect|middle/passive|indicative|3sg-anchor",
        "label": "παρακείμενος • μέση/παθητική • οριστική • γ΄ ενικό (anchor)",
        "form": "ὀμώμοσται",
        "note": "ο Τζαρτζάνος και ο Οικονόμου διατηρούν τη 3sg perfect middle/passive μορφή ως ισχυρό anchor"
      },
      {
        "slot": "perfect|middle/passive|participle|masc.nom.sg",
        "label": "παρακείμενος • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ὀμωμοσμένος",
        "note": "ρητά δηλωμένη μετοχή σε Τζαρτζάνο και Οικονόμου"
      }
    ]
  }
});
})();
