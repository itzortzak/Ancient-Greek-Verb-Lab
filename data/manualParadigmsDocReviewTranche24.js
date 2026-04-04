(function(){
  window.MANUAL_PARADIGMS = window.MANUAL_PARADIGMS || {};
  function correctLegacyTags(arr){
    return (arr || []).map(item => {
      const out = Object.assign({}, item);
      if(out.kind === 'finite' && out.person && out.number){
        out.person = String(out.person).replace(/(sg|pl|du)$/, out.number);
      }
      return out;
    });
  }
  const eimi = [
  {
    "lemma": "εἶμι",
    "form": "εἶμι",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "indicative",
    "person": "1sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "εἶ",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "indicative",
    "person": "2sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "εἶσι(ν)",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "indicative",
    "person": "3sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴμεν",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "indicative",
    "person": "1pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴτε",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "indicative",
    "person": "2pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴασι(ν)",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "indicative",
    "person": "3pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴω",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "subjunctive",
    "person": "1sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴῃς",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "subjunctive",
    "person": "2sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴῃ",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "subjunctive",
    "person": "3sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴωμεν",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "subjunctive",
    "person": "1pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴητε",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "subjunctive",
    "person": "2pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴωσι(ν)",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "subjunctive",
    "person": "3pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴοιμι",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "optative",
    "person": "1sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ἰοίην",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "optative",
    "person": "1sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴοις",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "optative",
    "person": "2sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ἰοίης",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "optative",
    "person": "2sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴοι",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "optative",
    "person": "3sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ἰοίη",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "optative",
    "person": "3sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴοιμεν",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "optative",
    "person": "1pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴοιτε",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "optative",
    "person": "2pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴοιεν",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "optative",
    "person": "3pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴθι",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "imperative",
    "person": "2sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴτω",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "imperative",
    "person": "3sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴτε",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "imperative",
    "person": "2pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ἰόντων",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "imperative",
    "person": "3pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ἴτωσαν",
    "kind": "finite",
    "tense": "present",
    "voice": "active",
    "mood": "imperative",
    "person": "3pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ᾖα",
    "kind": "finite",
    "tense": "imperfect",
    "voice": "active",
    "mood": "indicative",
    "person": "1sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ᾔειν",
    "kind": "finite",
    "tense": "imperfect",
    "voice": "active",
    "mood": "indicative",
    "person": "1sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ᾔεις",
    "kind": "finite",
    "tense": "imperfect",
    "voice": "active",
    "mood": "indicative",
    "person": "2sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ᾔεισθα",
    "kind": "finite",
    "tense": "imperfect",
    "voice": "active",
    "mood": "indicative",
    "person": "2sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ᾔει",
    "kind": "finite",
    "tense": "imperfect",
    "voice": "active",
    "mood": "indicative",
    "person": "3sg",
    "number": "sg"
  },
  {
    "lemma": "εἶμι",
    "form": "ᾖμεν",
    "kind": "finite",
    "tense": "imperfect",
    "voice": "active",
    "mood": "indicative",
    "person": "1pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ᾖτε",
    "kind": "finite",
    "tense": "imperfect",
    "voice": "active",
    "mood": "indicative",
    "person": "2pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ᾖσαν",
    "kind": "finite",
    "tense": "imperfect",
    "voice": "active",
    "mood": "indicative",
    "person": "3pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ᾔεσαν",
    "kind": "finite",
    "tense": "imperfect",
    "voice": "active",
    "mood": "indicative",
    "person": "3pl",
    "number": "pl"
  },
  {
    "lemma": "εἶμι",
    "form": "ἰέναι",
    "kind": "infinitive",
    "tense": "present",
    "voice": "active",
    "mood": "infinitive"
  },
  {
    "lemma": "εἶμι",
    "form": "ἰών",
    "kind": "participle",
    "tense": "present",
    "voice": "active",
    "mood": "participle",
    "gender": "masc"
  },
  {
    "lemma": "εἶμι",
    "form": "ἰοῦσα",
    "kind": "participle",
    "tense": "present",
    "voice": "active",
    "mood": "participle",
    "gender": "fem"
  },
  {
    "lemma": "εἶμι",
    "form": "ἰόν",
    "kind": "participle",
    "tense": "present",
    "voice": "active",
    "mood": "participle",
    "gender": "neut"
  }
];
  window.MANUAL_PARADIGMS["εἶμι"] = eimi;
  window.MANUAL_PARADIGMS["φημί"] = correctLegacyTags(window.MANUAL_PARADIGMS["φημί"]);
  window.MANUAL_PARADIGMS["οἶδα"] = correctLegacyTags(window.MANUAL_PARADIGMS["οἶδα"]);
})();
