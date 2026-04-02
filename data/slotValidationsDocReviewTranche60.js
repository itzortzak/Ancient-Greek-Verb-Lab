(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "ὁράω": {
    "status": "manual+slots",
    "summary": "Tranche 60: το ὁράω αποκτά εκτεταμένο σχολικό core layer με present/imperfect active και middle/passive, future middle, β΄ aorist active και middle, future passive, παθητικό αόριστο, απαρέμφατα και βασικούς μετοχικούς άξονες· το tranche 60 διορθώνει επίσης το broken form-index patch του tranche 59 για το ψαύω και επαναχτίζει τα recognition buckets για ψαύω + ὁράω.",
    "slots": [
      {
        "slot": "present|active|indicative|1sg",
        "label": "ενεστώτας • ενεργητική • οριστική • α΄ ενικό",
        "form": "ὁρῶ",
        "note": "συνηρημένος λημματικός τύπος του ὁράω κατά το τιμάω"
      },
      {
        "slot": "imperfect|active|indicative|1sg",
        "label": "παρατατικός • ενεργητική • οριστική • α΄ ενικό",
        "form": "ἑώρων",
        "note": "διπλή αύξηση του ὁράω, όπως σημειώνεται στις σχολικές γραμματικές"
      },
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ὁρῶμαι",
        "note": "συνηρημένος present middle/passive άξονας"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἑωρώμην",
        "note": "αντιστοιχεί στον ρητά μαρτυρημένο middle/passive παρατατικό"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "ὄψομαι",
        "note": "ρητός principal part του λήμματος"
      },
      {
        "slot": "future|middle|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "ὄψεσθαι",
        "note": "κανονική ανάπτυξη του future middle από το ὄψομαι"
      },
      {
        "slot": "aorist|active|indicative|1sg",
        "label": "αόριστος β΄ • ενεργητική • οριστική • α΄ ενικό",
        "form": "εἶδον",
        "note": "ρητός principal part του λήμματος"
      },
      {
        "slot": "aorist|active|subjunctive|1sg",
        "label": "αόριστος β΄ • ενεργητική • υποτακτική • α΄ ενικό",
        "form": "ἴδω",
        "note": "ρητά βεβαιωμένο σχολικό non-indicative layer"
      },
      {
        "slot": "aorist|active|imperative|2sg",
        "label": "αόριστος β΄ • ενεργητική • προστακτική • β΄ ενικό",
        "form": "ἰδέ",
        "note": "βασικός σχολικός προστακτικός τύπος του β΄ αορίστου"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος β΄ • μέση • οριστική • α΄ ενικό",
        "form": "εἰδόμην",
        "note": "ρητός second middle principal part στις σχολικές πηγές"
      },
      {
        "slot": "aorist|middle|infinitive",
        "label": "αόριστος β΄ • μέση • απαρέμφατο",
        "form": "ἰδέσθαι",
        "note": "κανονική ανάπτυξη του β΄ αορίστου μέσης"
      },
      {
        "slot": "future|passive|indicative|1sg",
        "label": "παθητικός μέλλοντας • οριστική • α΄ ενικό",
        "form": "ὀφθήσομαι",
        "note": "ρητός passive future principal part"
      },
      {
        "slot": "aorist|passive|indicative|1sg",
        "label": "παθητικός αόριστος • οριστική • α΄ ενικό",
        "form": "ὤφθην",
        "note": "ρητός passive aorist principal part"
      },
      {
        "slot": "aorist|passive|infinitive",
        "label": "παθητικός αόριστος • απαρέμφατο",
        "form": "ὀφθῆναι",
        "note": "κανονική ανάπτυξη του παθητικού αορίστου"
      },
      {
        "slot": "aorist|passive|participle|masc.nom.sg",
        "label": "παθητικός αόριστος • μετοχή • αρσενικό ον. εν.",
        "form": "ὀφθείς",
        "note": "βασικός σχολικός μετοχικός τύπος του παθητικού αορίστου"
      }
    ]
  }
} );
})();
