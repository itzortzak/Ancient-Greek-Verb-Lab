(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "ἀποκρίνομαι": {
    "status": "manual+slots",
    "summary": "Tranche 21: re-hardening του ἀποκρίνομαι με ενοποίηση form-index πάνω στο ήδη επιμελημένο deponent dialogue layer και ρητή στήριξη στους αρχικούς χρόνους του 05.2.",
    "slots": [
      {
        "slot": "present|middle|indicative|1sg",
        "label": "ενεστώτας • μέση • οριστική • α΄ ενικό",
        "form": "ἀποκρίνομαι",
        "note": "05.2 + tranche 15 manual layer"
      },
      {
        "slot": "imperfect|middle|indicative|1sg",
        "label": "παρατατικός • μέση • οριστική • α΄ ενικό",
        "form": "ἀπεκρινόμην",
        "note": "βασικός past deponent τύπος"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "ἀποκρινοῦμαι",
        "note": "05.2 αρχικοί χρόνοι"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος • μέση • οριστική • α΄ ενικό",
        "form": "ἀπεκρινάμην",
        "note": "05.2 αρχικοί χρόνοι"
      },
      {
        "slot": "present|middle|imperative|2sg",
        "label": "ενεστώτας • μέση • προστακτική • β΄ ενικό",
        "form": "ἀποκρίνου",
        "note": "διάλογος / direct-response core form"
      },
      {
        "slot": "aorist|middle|imperative|2sg",
        "label": "αόριστος • μέση • προστακτική • β΄ ενικό",
        "form": "ἀπόκριναι",
        "note": "05.1 exercise cue + existing curated layer"
      },
      {
        "slot": "present|middle|infinitive",
        "label": "ενεστώτας • μέση • απαρέμφατο",
        "form": "ἀποκρίνεσθαι",
        "note": "core non-finite"
      },
      {
        "slot": "future|middle|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "ἀποκρινεῖσθαι",
        "note": "future deponent non-finite"
      },
      {
        "slot": "aorist|middle|infinitive",
        "label": "αόριστος • μέση • απαρέμφατο",
        "form": "ἀποκρίνασθαι",
        "note": "aorist deponent non-finite"
      },
      {
        "slot": "present|middle|participle|masc.nom.sg",
        "label": "ενεστώτας • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "ἀποκρινόμενος",
        "note": "core participle"
      },
      {
        "slot": "future|middle|participle|masc.nom.sg",
        "label": "μέλλοντας • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "ἀποκρινούμενος",
        "note": "future participle"
      },
      {
        "slot": "aorist|middle|participle|masc.nom.sg",
        "label": "αόριστος • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "ἀποκρινάμενος",
        "note": "aorist participle"
      }
    ]
  },
  "πορεύομαι": {
    "status": "manual+slots",
    "summary": "Tranche 21: conservative school-core hardening για το πορεύομαι με present/imperfect/future/aorist middle, προστακτικές, απαρέμφατα και μετοχές, στηριγμένο στους αρχικούς χρόνους του 05.2 και σε παλαιότερο manual tranche.",
    "slots": [
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "πορεύομαι",
        "note": "05.2 principal part + old tranche3 core"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἐπορευόμην",
        "note": "βασικός past deponent τύπος"
      },
      {
        "slot": "future|middle/passive|indicative|1sg",
        "label": "μέλλοντας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "πορεύσομαι",
        "note": "05.2 principal part"
      },
      {
        "slot": "aorist|middle|indicative|1sg",
        "label": "αόριστος • μέση • οριστική • α΄ ενικό",
        "form": "ἐπορευσάμην",
        "note": "05.2 principal part"
      },
      {
        "slot": "present|middle/passive|imperative|2sg",
        "label": "ενεστώτας • μέση/παθητική • προστακτική • β΄ ενικό",
        "form": "πορεύου",
        "note": "core command form"
      },
      {
        "slot": "aorist|middle|imperative|2sg",
        "label": "αόριστος • μέση • προστακτική • β΄ ενικό",
        "form": "πορεῦσαι",
        "note": "conservative aorist imperative"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "ενεστώτας • μέση/παθητική • απαρέμφατο",
        "form": "πορεύεσθαι",
        "note": "core non-finite"
      },
      {
        "slot": "future|middle/passive|infinitive",
        "label": "μέλλοντας • μέση/παθητική • απαρέμφατο",
        "form": "πορεύσεσθαι",
        "note": "future non-finite"
      },
      {
        "slot": "aorist|middle|infinitive",
        "label": "αόριστος • μέση • απαρέμφατο",
        "form": "πορεύσασθαι",
        "note": "aorist non-finite"
      },
      {
        "slot": "present|middle/passive|participle|masc.nom.sg",
        "label": "ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "πορευόμενος",
        "note": "core participle"
      },
      {
        "slot": "future|middle/passive|participle|masc.nom.sg",
        "label": "μέλλοντας • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "πορευσόμενος",
        "note": "future participle"
      },
      {
        "slot": "aorist|middle|participle|masc.nom.sg",
        "label": "αόριστος • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "πορευσάμενος",
        "note": "aorist participle"
      }
    ]
  },
  "κεῖμαι": {
    "status": "manual+slots",
    "summary": "Tranche 21: νέο source-backed manual layer για το κεῖμαι με present/imperfect/future indicative, ρητώς καταγεγραμμένες προστακτικές, απαρέμφατα και μετοχές από 05.1 και Οικονόμου, και μόνο τα μονολεκτικά υποτακτικά/ευκτικά slots που καταγράφονται ρητά.",
    "slots": [
      {
        "slot": "present|middle/passive|indicative|1sg",
        "label": "ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "κεῖμαι",
        "note": "05.1 πίνακας"
      },
      {
        "slot": "present|middle/passive|indicative|3pl",
        "label": "ενεστώτας • μέση/παθητική • οριστική • γ΄ πληθυντικό",
        "form": "κεῖνται",
        "note": "05.1 πίνακας"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ἐκείμην",
        "note": "με σημασία υπερσυντελίκου"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "κείσομαι",
        "note": "05.1 / Οικονόμου"
      },
      {
        "slot": "present|middle/passive|subjunctive|3sg",
        "label": "ενεστώτας • μέση/παθητική • υποτακτική • γ΄ ενικό",
        "form": "κέηται",
        "note": "μόνο ο μονολεκτικός τύπος που καταγράφεται ρητά"
      },
      {
        "slot": "present|middle/passive|optative|3sg",
        "label": "ενεστώτας • μέση/παθητική • ευκτική • γ΄ ενικό",
        "form": "κέοιτο",
        "note": "ρητός μονολεκτικός τύπος του πίνακα"
      },
      {
        "slot": "present|middle/passive|imperative|2sg",
        "label": "ενεστώτας • μέση/παθητική • προστακτική • β΄ ενικό",
        "form": "κεῖσο",
        "note": "05.1 πίνακας"
      },
      {
        "slot": "present|middle/passive|infinitive",
        "label": "ενεστώτας • μέση/παθητική • απαρέμφατο",
        "form": "κεῖσθαι",
        "note": "core non-finite"
      },
      {
        "slot": "future|middle|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "κείσεσθαι",
        "note": "05.1 parenthetical entry"
      },
      {
        "slot": "present|middle/passive|participle|masc.nom.sg",
        "label": "ενεστώτας • μέση/παθητική • μετοχή • αρσενικό ον. εν.",
        "form": "κείμενος",
        "note": "05.1 / Οικονόμου"
      },
      {
        "slot": "future|middle|participle|masc.nom.sg",
        "label": "μέλλοντας • μέση • μετοχή • αρσενικό ον. εν.",
        "form": "κεισόμενος",
        "note": "05.1 parenthetical future participle"
      }
    ]
  }
}
  );
})();
