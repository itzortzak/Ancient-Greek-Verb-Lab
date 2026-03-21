(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "αἰτιῶμαι": {
    "status": "manual+slots",
    "summary": "Νέο tranche χειροκίνητης συμπλήρωσης για το αἰτιῶμαι, με πλήρες συνηρημένο present middle/passive layer, imperfect, future middle, aorist middle, συντηρητικό passive layer και μη προσωπικούς τύπους.",
    "slots": [
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "αἰτιῶμαι",
        "note": "συνηρημένη ορατή μορφή του λήμματος αἰτιάομαι"
      },
      {
        "slot": "present|middle/passive|optative|1sg",
        "label": "ενεστώτας • μέση/παθητική • ευκτική • α΄ ενικό",
        "form": "αἰτιῴμην",
        "note": "συνηρημένη ευκτική κατά το πρότυπο των ρημάτων σε -άομαι"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ᾐτιώμην",
        "note": "βεβαιωμένος αρχικός χρόνος από τις σχολικές πηγές"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "αἰτιάσομαι",
        "note": "βεβαιωμένος αρχικός χρόνος"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος • μέση • οριστική • α΄ ενικό",
        "form": "ᾐτιασάμην",
        "note": "βεβαιωμένος αρχικός χρόνος"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "αόριστος • παθητική • οριστική • α΄ ενικό",
        "form": "ᾐτιάθην",
        "note": "συντηρητική παθητική αποκατάσταση από ρητή γραμματική μαρτυρία"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ᾐτίαμαι",
        "note": "ρητά καταγεγραμμένος παρακείμενος μέσης-παθητικής"
      },
      {
        "slot": "present|middle|infinitive",
        "label": "ενεστώτας • μέση • απαρέμφατο",
        "form": "αἰτιᾶσθαι",
        "note": "συνηρημένο present infinitive"
      },
      {
        "slot": "aorist|middle|participle|masc.nom.sg",
        "label": "αόριστος • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "αἰτιασάμενος",
        "note": "μη προσωπικός τύπος από τον βεβαιωμένο αόριστο μέσης"
      },
      {
        "slot": "aorist|passive|participle|masc.nom.sg",
        "label": "αόριστος • παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "αἰτιαθείς",
        "note": "παθητική μετοχή από το ρητά καταγεγραμμένο αἰτιάθην"
      }
    ]
  },
  "στρώννυμι": {
    "status": "manual+slots",
    "summary": "Νέο συντηρητικό tranche για το στρώννυμι, με βασικό present active layer, τα βεβαιωμένα ἐστρώννυν, στρώσω / στορέσω / στορῶ, ἐστόρεσα / ἔστρωσα, ἔστρωκα, ἐστρώκειν, καθώς και μη προσωπικούς τύπους.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "στρώννυμι",
        "note": "χειροκίνητη present αποκατάσταση του λήμματος σε -νυμι"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐστρώννυν",
        "note": "βεβαιωμένος αρχικός χρόνος"
      },
      {
        "slot": "future|active|indicative|1sg",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό",
        "form": "στρώσω",
        "note": "κύρια μελλοντική μορφή· καταγράφονται επίσης τα στορέσω και στορῶ ως variants"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐστόρεσα",
        "note": "βεβαιωμένος αόριστος α΄· διατηρείται και το παράλληλο ἔστρωσα"
      },
      {
        "slot": "perfect|active|indicative|1sg",
        "label": "παρακείμενος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἔστρωκα",
        "note": "ρητά καταγεγραμμένος παρακείμενος ενεργητικής"
      },
      {
        "slot": "pluperfect|active|indicative|1sg",
        "label": "υπερσυντέλικος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐστρώκειν",
        "note": "ρητά καταγεγραμμένος υπερσυντέλικος"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἔστρωμαι",
        "note": "ρητά καταγεγραμμένος παρακείμενος μέσης-παθητικής"
      },
      {
        "slot": "present|active|infinitive",
        "label": "ενεστώτας • ενεργητική • απαρέμφατο",
        "form": "στρωννύναι",
        "note": "συντηρητική αποκατάσταση του present infinitive"
      },
      {
        "slot": "aorist|active|participle|masc.nom.sg",
        "label": "αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.",
        "form": "στορέσας",
        "note": "μη προσωπικός τύπος από το ἐστόρεσα, με παράλληλη variant στρώσας"
      },
      {
        "slot": "perfect|middle/passive|participle|masc.nom.sg",
        "label": "παρακείμενος • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἐστρωμένος",
        "note": "τυπικός παρακειμενικός μη προσωπικός τύπος από το ἔστρωμαι"
      }
    ]
  }
}
);
})();
