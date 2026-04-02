(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "σκεδάννυμι": {
    "status": "manual+slots",
    "summary": "Tranche 56: το σκεδάννυμι αποκτά curated school-core paradigm με present/imperfect κατά το δείκνυμι, future active από το σκεδάσω με συντηρητικό anchor το σκεδῶ, active και middle aorist από το ἐσκέδασα / ἐσκεδασάμην, passive future και passive aorist από το σκεδασθήσομαι / ἐσκεδάσθην και ασφαλές perfect middle/passive core στο ἐσκέδασμαι / ἐσκεδάσμην μαζί με source-backed participial layer σκεδασμένος.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "σκεδάννυμι",
        "note": "συντηρητική ανάπτυξη κατά το δείκνυμι για τα σιγμόληκτα σε -ννυμι"
      },
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "σκεδάννυμαι",
        "note": "ρητός present middle axis στο 05.2 με ανάπτυξη κατά το δείκνυμαι"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐσκεδάννυν",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "imperfect|active|indicative|1sg-alt",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό (εναλλακτικός anchor)",
        "form": "ἐσκεδάννυον",
        "note": "το 05.2 διασώζει ρητά και τον εναλλακτικό τύπο ἐσκεδάννυον"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἐσκεδαννύμην",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "future|active|indicative|1sg",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό",
        "form": "σκεδάσω",
        "note": "το 05.2 δίνει ρητά το σκεδάσω ως future active principal part"
      },
      {
        "slot": "future|active|indicative|1sg-alt-anchor",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό (εναλλακτικός anchor)",
        "form": "σκεδῶ",
        "note": "το 05.2 διασώζει και το συνηρημένο future anchor σκεδῶ χωρίς να επιβάλλει πλήρες contracted layer"
      },
      {
        "slot": "future|passive|indicative|1sg",
        "label": "παθητικός μέλλοντας • παθητική • οριστική • α΄ ενικό",
        "form": "σκεδασθήσομαι",
        "note": "ρητός παθητικός μέλλοντας α΄ στο 05.2"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος α΄ • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐσκέδασα",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος α΄ • μέση • οριστική • α΄ ενικό",
        "form": "ἐσκεδασάμην",
        "note": "ρητός principal part στο 05.2"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "παθητικός αόριστος α΄ • παθητική • οριστική • α΄ ενικό",
        "form": "ἐσκεδάσθην",
        "note": "ρητός παθητικός αόριστος α΄ στο 05.2"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "σκεδαννύναι",
        "note": "συντηρητική ανάπτυξη κατά το δείκνυμι"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "ενεστώτας • μέση/παθητική • απαρέμφατο",
        "form": "σκεδάννυσθαι",
        "note": "ο Index of Verb Forms in Thucydides επιβεβαιώνει ρητά και τον τύπο σκεδάννυσθαι"
      },
      {
        "slot": "future|active|infinitive",
        "label": "μέλλοντας • ενεργητική • απαρέμφατο",
        "form": "σκεδάσειν",
        "note": "κανονική ανάπτυξη από το ρητό future active principal part σκεδάσω"
      },
      {
        "slot": "future|passive|infinitive",
        "label": "παθητικός μέλλοντας • παθητική • απαρέμφατο",
        "form": "σκεδασθήσεσθαι",
        "note": "κανονική ανάπτυξη από τον ρητό principal part σκεδασθήσομαι"
      },
      {
        "slot": "aorist|active|participle|masc.nom.sg",
        "label": "αόριστος α΄ • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "σκεδάσας",
        "note": "κανονική ανάπτυξη από τον ρητό active aorist"
      },
      {
        "slot": "aorist|middle|participle|masc.nom.sg",
        "label": "αόριστος α΄ • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "σκεδασάμενος",
        "note": "κανονική ανάπτυξη από τον ρητό middle aorist"
      },
      {
        "slot": "aorist|passive|participle|masc.nom.sg",
        "label": "παθητικός αόριστος • παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "σκεδασθείς",
        "note": "ο Index of Verb Forms in Thucydides επιβεβαιώνει τη σειρά σκεδασθέντες"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg-anchor",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό (anchor)",
        "form": "ἐσκέδασμαι",
        "note": "ρητός perfect middle/passive anchor στο 05.2"
      },
      {
        "slot": "pluperfect|middle/passive|indicative|1sg-anchor",
        "label": "υπερσυντέλικος • μέση/παθητική • οριστική • α΄ ενικό (anchor)",
        "form": "ἐσκεδάσμην",
        "note": "ρητός pluperfect middle/passive anchor στο 05.2"
      },
      {
        "slot": "perfect|middle/passive|participle|masc.nom.sg",
        "label": "παρακείμενος • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "σκεδασμένος",
        "note": "source-backed participial layer από το ἐσκέδασμαι και επιβεβαίωση σε Thucydides Index με τύπους σκεδασμένον / σκεδασμένων"
      }
    ]
  }
});
})();
