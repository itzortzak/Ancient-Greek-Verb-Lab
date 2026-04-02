(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "στρώννυμι": {
    "status": "manual+slots",
    "summary": "Tranche 66: το στρώννυμι αποκτά expanded source-backed multistem νυμι paradigm με πλήρες present/imperfect active και middle/passive, primary future active και passive, primary aorist active/middle/passive με εγκλίσεις, explicit stem variants στρώσω / στορέσω / στορῶ και safe perfect/pluperfect anchors.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "στρώννυμι",
        "note": "κύριος νυμι τύπος του λήμματος· το 05.2 καταγράφει επίσης τα στρωννύω, στορέννυμι, στόρνυμι ως ισοδύναμες present μορφές"
      },
      {
        "slot": "present|active|imperative|2sg",
        "label": "ενεστώτας • ενεργητική • προστακτική • β΄ ενικό",
        "form": "στρώννυ",
        "note": "ανάπτυξη κατά το νυμι πρότυπο του Τζαρτζάνου και του 05.1 δείκνυμι"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐστρώννυν",
        "note": "ρητός άξονας σε 05.2 και Οικονόμου"
      },
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "στόρνυμαι",
        "note": "ρητώς καταγεγραμμένο middle/passive present στο 05.2 και στον Οικονόμου"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἐστορνύμην",
        "note": "ρητός imperfect middle/passive στο 05.2"
      },
      {
        "slot": "future|active|indicative|1sg",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό",
        "form": "στρώσω",
        "note": "κύριος future axis· διατηρούνται ρητά και τα στορέσω / στορῶ ως stem variants του 05.2"
      },
      {
        "slot": "future|active|indicative|1sg-alt1",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό (variant 1)",
        "form": "στορέσω",
        "note": "ρητός εναλλακτικός future τύπος στο 05.2"
      },
      {
        "slot": "future|active|indicative|1sg-alt2",
        "label": "μέλλοντας • ενεργητική • οριστική • α΄ ενικό (variant 2)",
        "form": "στορῶ",
        "note": "ρητός contracted future τύπος στο 05.2"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος α΄ • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἔστρωσα",
        "note": "primary aorist active axis για την αναλυτική κλίση"
      },
      {
        "slot": "aorist|active|indicative|1sg-alt",
        "label": "αόριστος α΄ • ενεργητική • οριστική • α΄ ενικό (variant)",
        "form": "ἐστόρεσα",
        "note": "παράλληλος ρητός αόριστος στο 05.2 και στον Οικονόμου"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος α΄ • μέση • οριστική • α΄ ενικό",
        "form": "ἐστρωσάμην",
        "note": "ρητώς καταγεγραμμένος middle aorist στο 05.2"
      },
      {
        "slot": "aorist|middle|indicative|1sg-alt",
        "label": "αόριστος α΄ • μέση • οριστική • α΄ ενικό (variant)",
        "form": "ἐστορεσάμην",
        "note": "παράλληλος middle aorist στο 05.2"
      },
      {
        "slot": "future|passive|indicative|1sg",
        "label": "παθητικός μέλλοντας α΄ • παθητική • οριστική • α΄ ενικό",
        "form": "στρωθήσομαι",
        "note": "ρητός passive future στο 05.2"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "παθητικός αόριστος α΄ • παθητική • οριστική • α΄ ενικό",
        "form": "ἐστρώθην",
        "note": "primary passive aorist axis για την αναλυτική κλίση"
      },
      {
        "slot": "aorist|passive|indicative|1sg-alt",
        "label": "παθητικός αόριστος α΄ • παθητική • οριστική • α΄ ενικό (variant)",
        "form": "ἐστορέσθην",
        "note": "παράλληλος ρητός passive aorist του 05.2"
      },
      {
        "slot": "perfect|active|indicative|1sg",
        "label": "παρακείμενος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἔστρωκα",
        "note": "ρητός perfect active anchor στο 05.2"
      },
      {
        "slot": "pluperfect|active|indicative|1sg",
        "label": "υπερσυντέλικος • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἐστρώκειν",
        "note": "ρητός pluperfect active anchor στο 05.2"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἔστρωμαι",
        "note": "ρητός perfect middle/passive anchor στο 05.2"
      },
      {
        "slot": "perfect|middle/passive|indicative|1sg-alt",
        "label": "παρακείμενος • μέση/παθητική • οριστική • α΄ ενικό (variant)",
        "form": "ἐστόρεσμαι",
        "note": "εναλλακτικός perfect middle/passive τύπος στο 05.2"
      },
      {
        "slot": "pluperfect|middle/passive|indicative|1sg",
        "label": "υπερσυντέλικος • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἐστρώμην",
        "note": "ρητός pluperfect middle/passive anchor στο 05.2"
      },
      {
        "slot": "pluperfect|middle/passive|indicative|1sg-alt",
        "label": "υπερσυντέλικος • μέση/παθητική • οριστική • α΄ ενικό (variant)",
        "form": "ἐστορέσμην",
        "note": "εναλλακτικός pluperfect middle/passive τύπος στο 05.2"
      },
      {
        "slot": "aorist|passive|participle|masc.nom.sg",
        "label": "παθητικός αόριστος α΄ • παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "στρωθείς",
        "note": "κανονική non-finite ανάπτυξη του passive stem"
      },
      {
        "slot": "perfect|middle/passive|participle|masc.nom.sg",
        "label": "παρακείμενος • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "ἐστρωμένος",
        "note": "χρήσιμος perfect participial anchor για την ενότητα Κλίση"
      }
    ]
  }
} );
})();
