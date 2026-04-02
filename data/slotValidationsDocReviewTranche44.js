(function(){
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  Object.assign(window.SLOT_VALIDATIONS, {
  "ὑπόκειμαι": {
    "status": "manual+slots",
    "summary": "Tranche 44: το ὑπόκειμαι επεκτείνεται με τα periphrastic/synthetic present υποτακτικής και ευκτικής του κεῖμαι, με εσωτερική αύξηση στον παρατατικό και καθαρή αντικατάσταση του form-index bucket για σωστή Αναγνώριση.",
    "slots": [
      {
        "slot": "present|middle/passive|subjunctive|1sg",
        "label": "ενεστώτας • μέση/παθητική • υποτακτική • α΄ ενικό",
        "form": "ὑποκείμενος ὦ",
        "note": "περιφραστικός σχηματισμός κατά το κείμενος ὦ"
      },
      {
        "slot": "present|middle/passive|subjunctive|3sg",
        "label": "ενεστώτας • μέση/παθητική • υποτακτική • γ΄ ενικό",
        "form": "ὑποκέηται",
        "note": "συνθετικός τύπος με ανύψωση τόνου στο σύνθετο"
      },
      {
        "slot": "present|middle/passive|optative|1sg",
        "label": "ενεστώτας • μέση/παθητική • ευκτική • α΄ ενικό",
        "form": "ὑποκείμενος εἴην",
        "note": "περιφραστικός σχηματισμός κατά το κείμενος εἴην"
      },
      {
        "slot": "present|middle/passive|optative|3sg",
        "label": "ενεστώτας • μέση/παθητική • ευκτική • γ΄ ενικό",
        "form": "ὑποκέοιτο",
        "note": "συνθετικός τύπος του κεῖμαι μεταφερμένος στο σύνθετο"
      },
      {
        "slot": "imperfect|middle/passive|indicative|1sg",
        "label": "παρατατικός • μέση/παθητική • οριστική • α΄ ενικό",
        "form": "ὑπεκείμην",
        "note": "εσωτερική αύξηση μετά την πρόθεση"
      },
      {
        "slot": "future|middle|indicative|1sg",
        "label": "μέλλοντας • μέση • οριστική • α΄ ενικό",
        "form": "ὑποκείσομαι",
        "note": "κατά το κείσομαι"
      },
      {
        "slot": "future|middle|optative|3sg",
        "label": "μέλλοντας • μέση • ευκτική • γ΄ ενικό",
        "form": "ὑποκείσοιτο",
        "note": "future optative κατά το κεῖμαι"
      },
      {
        "slot": "future|middle|infinitive",
        "label": "μέλλοντας • μέση • απαρέμφατο",
        "form": "ὑποκείσεσθαι",
        "note": "non-finite future core"
      }
    ]
  }
}
  );
})();
