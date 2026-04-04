(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "αἰσθάνομαι": {
    "status": "manual+slots",
    "summary": "Νέο deponent/manual tranche για το αἰσθάνομαι, με πλήρες present/imperfect middle-passive layer, future middle, β΄ aorist middle, singleton perfect/pluperfect και νέα non-finite κάλυψη.",
    "slots": [
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "αἰσθάνομαι",
        "note": "βασικός λημματικός τύπος"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ᾐσθανόμην",
        "note": "βεβαιωμένος ιστορικός τύπος στις σχολικές γραμματικές"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "αἰσθήσομαι",
        "note": "βεβαιωμένος μέσος μέλλοντας"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "β΄ αόριστος • μέση • οριστική • α΄ ενικό",
        "form": "ᾐσθόμην",
        "note": "βεβαιωμένος β΄ μέσος αόριστος"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ᾔσθημαι",
        "note": "βεβαιωμένος παρακείμενος"
      },
      {
        "slot": "pluperfect|middle/passive|indicative|1sg",
        "label": "υπερσυντέλικος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ᾐσθήμην",
        "note": "βεβαιωμένος υπερσυντέλικος"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "ενεστώτας • μέση/παθητική • απαρέμφατο",
        "form": "αἰσθάνεσθαι",
        "note": "βασικό απαρέμφατο ενεστώτα"
      },
      {
        "slot": "future|middle|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "αἰσθήσεσθαι",
        "note": "future infinitive από τον βεβαιωμένο μέλλοντα"
      },
      {
        "slot": "aorist|middle|infinitive",
        "label": "β΄ αόριστος • μέση • απαρέμφατο",
        "form": "αἰσθέσθαι",
        "note": "κανονικός μη προσωπικός τύπος του β΄ αορίστου"
      },
      {
        "slot": "perfect|middle/passive|infinitive",
        "label": "παρακείμενος • μέση/παθητική • απαρέμφατο",
        "form": "ᾐσθῆσθαι",
        "note": "συντηρητική αλλά καθιερωμένη perfect infinitive"
      },
      {
        "slot": "present|middle/passive|participle|masc.nom.sg",
        "label": "ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "αἰσθανόμενος",
        "note": "βασική present participle"
      },
      {
        "slot": "future|middle|participle|masc.nom.sg",
        "label": "μέλλοντας • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "αἰσθησόμενος",
        "note": "future participle από τον βεβαιωμένο μέλλοντα"
      },
      {
        "slot": "aorist|middle|participle|masc.nom.sg",
        "label": "β΄ αόριστος • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "αἰσθόμενος",
        "note": "ρητά επιβεβαιωμένη μετοχή"
      },
      {
        "slot": "perfect|middle/passive|participle|masc.nom.sg",
        "label": "παρακείμενος • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ᾐσθημένος",
        "note": "perfect participial layer από τον βεβαιωμένο παρακείμενο"
      }
    ]
  },
  "ἀμύνω": {
    "status": "manual+slots",
    "summary": "Νέο manual tranche για το ἀμύνω, με πλήρες present/imperfect/aorist active και present/imperfect middle-passive layer, contracted future active, singleton middle future/aorist και νέα non-finite κάλυψη.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἀμύνω",
        "note": "βασικός λημματικός τύπος"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἤμυνον",
        "note": "βεβαιωμένος ιστορικός τύπος"
      },
      {
        "slot": "future|active|indicative|1sg",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἀμυνῶ",
        "note": "βεβαιωμένος contracted μέλλοντας"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἤμυνα",
        "note": "βεβαιωμένος αόριστος"
      },
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἀμύνομαι",
        "note": "βασικός μέσος/παθητικός λημματικός τύπος"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἠμυνόμην",
        "note": "κανονικός ιστορικός τύπος"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "ἀμυνοῦμαι",
        "note": "βεβαιωμένος μέσος μέλλοντας"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος • μέση • οριστική • α΄ ενικό",
        "form": "ἠμυνάμην",
        "note": "βεβαιωμένος μέσος αόριστος"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "ἀμύνειν",
        "note": "βασικό απαρέμφατο ενεστώτα"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "ενεστώτας • μέση/παθητική • απαρέμφατο",
        "form": "ἀμύνεσθαι",
        "note": "βασικό μέσο/παθητικό απαρέμφατο"
      },
      {
        "slot": "aorist|active|infinitive",
        "label": "αόριστος • ενεργητική • απαρέμφατο",
        "form": "ἀμῦναι",
        "note": "ρητά βεβαιωμένο στη σχολική γραμματική"
      },
      {
        "slot": "aorist|middle|infinitive",
        "label": "αόριστος • μέση • απαρέμφατο",
        "form": "ἀμύνασθαι",
        "note": "συντηρητική ανάπτυξη από τον βεβαιωμένο μέσο αόριστο"
      },
      {
        "slot": "present|active|participle|masc.nom.sg",
        "label": "ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἀμύνων",
        "note": "βασική present active μετοχή"
      },
      {
        "slot": "present|middle/passive|participle|masc.nom.sg",
        "label": "ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἀμυνόμενος",
        "note": "βασική present middle/passive μετοχή"
      },
      {
        "slot": "aorist|active|participle|masc.nom.sg",
        "label": "αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἀμύνας",
        "note": "κανονική αοριστική μετοχή"
      },
      {
        "slot": "aorist|middle|participle|masc.nom.sg",
        "label": "αόριστος • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "ἀμυνάμενος",
        "note": "κανονική μέση αοριστική μετοχή"
      }
    ]
  }
}
);
})();
