(function(){
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase().trim().replace(/[^\p{L}]/gu,''); }
  window.FORM_INDEX = window.FORM_INDEX || {};
  const lemmas = ["ὄμνυμι", "κεῖμαι", "κάθημαι", "δύναμαι"];
  const normLemmaSet = new Set(lemmas.map(normalizeGreek));
  for (const [key, bucket] of Object.entries(window.FORM_INDEX)) {
    if (!Array.isArray(bucket)) continue;
    window.FORM_INDEX[key] = bucket.filter(entry => !normLemmaSet.has(normalizeGreek(entry.lemma||'')));
  }
  const patch = {
  "ομνυμι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυσ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύς",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυσιν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυμεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυτε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυασιν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύασι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυω": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυησ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυη": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυωμεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυητε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυωσιν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυοιμι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυοισ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυοι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυοιμεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυοιτε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυοιεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυτω": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυντων": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυναι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύναι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυσα": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνῦσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυμαι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυσαι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυσαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυται": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυμεθα": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυσθε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυνται": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυωμαι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύωμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυηται": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύηται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυωμεθα": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνυώμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυησθε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύησθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυωνται": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύωνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυοιμην": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνυοίμην",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυοιο": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύοιο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυοιτο": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύοιτο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυοιμεθα": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνυοίμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυοισθε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύοισθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυοιντο": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύοιντο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυσο": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυσο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυσθω": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύσθω",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυσθων": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύσθων",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυσθαι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμνυσθαι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυμενοσ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύμενος",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "masc",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυμενη": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνυμένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "fem",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομνυμενον": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμνύμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "neut",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμνυν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὤμνυν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμνυσ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὤμνυς",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμνυ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὤμνυ",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμνυμεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμνύμεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμνυτε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμνύτε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμνυσαν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὤμνυσαν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμνυμην": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμνύμην",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμνυσο": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὤμνυσο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμνυτο": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὤμνυτο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμνυμεθα": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμνύμεθα",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμνυσθε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὤμνυσθε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμνυντο": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὤμνυντο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομουμαι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοῦμαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομει": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμεῖ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομειται": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμεῖται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομουμεθα": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμούμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομεισθε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμεῖσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομουνται": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοῦνται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομεισθαι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμεῖσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομουμενοσ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμούμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "masc",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομουμενη": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμουμένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "fem",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομουμενον": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμούμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "neut",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσα": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὤμοσα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσασ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὤμοσας",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὤμοσε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσαμεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμόσαμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσατε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμόσατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσαν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὤμοσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσω": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσησ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοση": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσωμεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσητε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσωσιν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαιμι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσαιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσειασ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσειας",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσειεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσειε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαιμεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσαιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαιτε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσαιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαιεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσαιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσον": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμοσον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσατω": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσάτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσατε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαντων": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσάντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσαι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄμνυμι",
      "form": "ὄμοσαι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσασ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσασα": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσασα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσαμην": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμοσάμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμωσω": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμώσω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσατο": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμόσατο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσαμεθα": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμοσάμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσασθε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμόσασθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσαντο": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμόσαντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσωμαι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσωμαι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσηται": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσηται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσωμεθα": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσώμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσησθε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσησθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσωνται": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσωνται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαιμην": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσαίμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαιο": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσαιο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαιτο": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσαιτο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαιμεθα": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσαίμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαισθε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσαισθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαιντο": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσαιντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσασθω": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσάσθω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσασθε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσασθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσασθων": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσάσθων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσασθαι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσασθαι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαμενοσ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσάμενος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "mood": "participle",
      "gender": "masc",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαμενη": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσαμένη",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "mood": "participle",
      "gender": "fem",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσαμενον": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσάμενον",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "mood": "participle",
      "gender": "neut",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθησομαι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθήσομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθηση": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθήσῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθησεται": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθήσεται",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθησομεθα": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθησόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθησεσθε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθήσεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθησονται": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθήσονται",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθησεσθαι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθήσεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "passive",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθησομενοσ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθησόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "mood": "participle",
      "gender": "masc",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθησομενη": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθησομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "mood": "participle",
      "gender": "fem",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθησομενον": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθησόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "mood": "participle",
      "gender": "neut",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσθην": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμόσθην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσθησ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμόσθης",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσθη": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμόσθη",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσθημεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμόσθημεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσθητε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμόσθητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμοσθησαν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμόσθησαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθω": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθῶ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθησ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθῇς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθη": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθῇ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθωμεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθῶμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθητε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθῆτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσθητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθωσιν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθῶσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθειην": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθείην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθειησ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθείης",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθειη": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθείη",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθειμεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθεῖμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθειτε": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθεῖτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθειεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθεῖεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθητι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμόσθητι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθητω": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθήτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθεντων": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθέντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθηναι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθῆναι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "passive",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθεισ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθείς",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "mood": "participle",
      "gender": "masc",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθεισα": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθεῖσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "mood": "participle",
      "gender": "fem",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομοσθεν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμοσθέν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "mood": "participle",
      "gender": "neut",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομωμοκα": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμώμοκα",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομωμοκεναι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμωμοκέναι",
      "kind": "infinitive",
      "tense": "perfect",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομωμοκωσ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμωμοκώς",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομωμοκυια": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμωμοκυῖα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομωμοκοσ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμωμοκός",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμωμοκειν": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμωμόκειν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομωμοσμαι": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμώμοσμαι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομωμοσμενοσ": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμωμοσμένος",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "masc",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομωμοσμενη": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμωμοσμένη",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "fem",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ομωμοσμενον": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὀμωμοσμένον",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "neut",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωμωμοσμην": [
    {
      "lemma": "ὄμνυμι",
      "form": "ὠμωμόσμην",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κειμαι": [
    {
      "lemma": "κεῖμαι",
      "form": "κεῖμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισαι": [
    {
      "lemma": "κεῖμαι",
      "form": "κεῖσαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κειται": [
    {
      "lemma": "κεῖμαι",
      "form": "κεῖται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κειμεθα": [
    {
      "lemma": "κεῖμαι",
      "form": "κείμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισθε": [
    {
      "lemma": "κεῖμαι",
      "form": "κεῖσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "κεῖμαι",
      "form": "κεῖσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεινται": [
    {
      "lemma": "κεῖμαι",
      "form": "κεῖνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κειμενοσω": [
    {
      "lemma": "κεῖμαι",
      "form": "κείμενος ὦ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κειμενοσησ": [
    {
      "lemma": "κεῖμαι",
      "form": "κείμενος ᾖς",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεηται": [
    {
      "lemma": "κεῖμαι",
      "form": "κέηται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κειμενοιωμεν": [
    {
      "lemma": "κεῖμαι",
      "form": "κείμενοι ὦμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεησθε": [
    {
      "lemma": "κεῖμαι",
      "form": "κέησθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεωνται": [
    {
      "lemma": "κεῖμαι",
      "form": "κέωνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κειμενοσειην": [
    {
      "lemma": "κεῖμαι",
      "form": "κείμενος εἴην",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κειμενοσειησ": [
    {
      "lemma": "κεῖμαι",
      "form": "κείμενος εἴης",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεοιτο": [
    {
      "lemma": "κεῖμαι",
      "form": "κέοιτο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κειμενοιειημεν": [
    {
      "lemma": "κεῖμαι",
      "form": "κείμενοι εἴημεν",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κειμενοιειητε": [
    {
      "lemma": "κεῖμαι",
      "form": "κείμενοι εἴητε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεοιντο": [
    {
      "lemma": "κεῖμαι",
      "form": "κέοιντο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισο": [
    {
      "lemma": "κεῖμαι",
      "form": "κεῖσο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισθω": [
    {
      "lemma": "κεῖμαι",
      "form": "κείσθω",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισθων": [
    {
      "lemma": "κεῖμαι",
      "form": "κείσθων",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκειμην": [
    {
      "lemma": "κεῖμαι",
      "form": "ἐκείμην",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκεισο": [
    {
      "lemma": "κεῖμαι",
      "form": "ἔκεισο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκειτο": [
    {
      "lemma": "κεῖμαι",
      "form": "ἔκειτο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκειμεθα": [
    {
      "lemma": "κεῖμαι",
      "form": "ἐκείμεθα",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκεισθε": [
    {
      "lemma": "κεῖμαι",
      "form": "ἔκεισθε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκειντο": [
    {
      "lemma": "κεῖμαι",
      "form": "ἔκειντο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισομαι": [
    {
      "lemma": "κεῖμαι",
      "form": "κείσομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κειση": [
    {
      "lemma": "κεῖμαι",
      "form": "κείσῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισεται": [
    {
      "lemma": "κεῖμαι",
      "form": "κείσεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισομεθα": [
    {
      "lemma": "κεῖμαι",
      "form": "κεισόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισεσθε": [
    {
      "lemma": "κεῖμαι",
      "form": "κείσεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισονται": [
    {
      "lemma": "κεῖμαι",
      "form": "κείσονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισοιμην": [
    {
      "lemma": "κεῖμαι",
      "form": "κεισοίμην",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισοιο": [
    {
      "lemma": "κεῖμαι",
      "form": "κείσοιο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισοιτο": [
    {
      "lemma": "κεῖμαι",
      "form": "κείσοιτο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισοιμεθα": [
    {
      "lemma": "κεῖμαι",
      "form": "κεισοίμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισοισθε": [
    {
      "lemma": "κεῖμαι",
      "form": "κείσοισθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισοιντο": [
    {
      "lemma": "κεῖμαι",
      "form": "κείσοιντο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισθαι": [
    {
      "lemma": "κεῖμαι",
      "form": "κεῖσθαι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισεσθαι": [
    {
      "lemma": "κεῖμαι",
      "form": "κείσεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κειμενοσ": [
    {
      "lemma": "κεῖμαι",
      "form": "κείμενος",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "participle",
      "number": "sg",
      "gender": "masc",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κειμενη": [
    {
      "lemma": "κεῖμαι",
      "form": "κειμένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "participle",
      "number": "sg",
      "gender": "fem",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κειμενον": [
    {
      "lemma": "κεῖμαι",
      "form": "κείμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "participle",
      "number": "sg",
      "gender": "neut",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισομενοσ": [
    {
      "lemma": "κεῖμαι",
      "form": "κεισόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "number": "sg",
      "gender": "masc",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισομενη": [
    {
      "lemma": "κεῖμαι",
      "form": "κεισομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "number": "sg",
      "gender": "fem",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "κεισομενον": [
    {
      "lemma": "κεῖμαι",
      "form": "κεισόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "number": "sg",
      "gender": "neut",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθημαι": [
    {
      "lemma": "κάθημαι",
      "form": "κάθημαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησαι": [
    {
      "lemma": "κάθημαι",
      "form": "κάθησαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθη": [
    {
      "lemma": "κάθημαι",
      "form": "κάθῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "κάθημαι",
      "form": "κάθῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "κάθημαι",
      "form": "καθᾖ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθηται": [
    {
      "lemma": "κάθημαι",
      "form": "κάθηται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "κάθημαι",
      "form": "καθῆται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθημεθα": [
    {
      "lemma": "κάθημαι",
      "form": "καθήμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "κάθημαι",
      "form": "καθήμεθα",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησθε": [
    {
      "lemma": "κάθημαι",
      "form": "κάθησθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "κάθημαι",
      "form": "καθῆσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "κάθημαι",
      "form": "κάθησθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "κάθημαι",
      "form": "καθῆσθε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθηνται": [
    {
      "lemma": "κάθημαι",
      "form": "κάθηνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθωμαι": [
    {
      "lemma": "κάθημαι",
      "form": "κάθωμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "κάθημαι",
      "form": "καθῶμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθωμεθα": [
    {
      "lemma": "κάθημαι",
      "form": "καθώμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "κάθημαι",
      "form": "καθῷμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθωνται": [
    {
      "lemma": "κάθημαι",
      "form": "καθῶνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθωμην": [
    {
      "lemma": "κάθημαι",
      "form": "καθῴμην",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθωο": [
    {
      "lemma": "κάθημαι",
      "form": "καθῷο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθωτο": [
    {
      "lemma": "κάθημαι",
      "form": "καθῷτο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθωσθε": [
    {
      "lemma": "κάθημαι",
      "form": "καθῷσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθωντο": [
    {
      "lemma": "κάθημαι",
      "form": "καθῷντο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθοιμην": [
    {
      "lemma": "κάθημαι",
      "form": "καθοίμην",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθοιο": [
    {
      "lemma": "κάθημαι",
      "form": "καθοῖο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθοιτο": [
    {
      "lemma": "κάθημαι",
      "form": "καθοῖτο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθοιμεθα": [
    {
      "lemma": "κάθημαι",
      "form": "καθοίμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθοισθε": [
    {
      "lemma": "κάθημαι",
      "form": "καθοῖσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθοιντο": [
    {
      "lemma": "κάθημαι",
      "form": "καθοῖντο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησο": [
    {
      "lemma": "κάθημαι",
      "form": "κάθησο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "κάθημαι",
      "form": "καθῆσο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθου": [
    {
      "lemma": "κάθημαι",
      "form": "κάθου",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησθω": [
    {
      "lemma": "κάθημαι",
      "form": "καθήσθω",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησθων": [
    {
      "lemma": "κάθημαι",
      "form": "καθήσθων",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκαθημην": [
    {
      "lemma": "κάθημαι",
      "form": "ἐκαθήμην",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκαθησο": [
    {
      "lemma": "κάθημαι",
      "form": "ἐκάθησο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκαθητο": [
    {
      "lemma": "κάθημαι",
      "form": "ἐκάθητο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκαθημεθα": [
    {
      "lemma": "κάθημαι",
      "form": "ἐκαθήμεθα",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκαθησθε": [
    {
      "lemma": "κάθημαι",
      "form": "ἐκάθησθε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκαθηντο": [
    {
      "lemma": "κάθημαι",
      "form": "ἐκάθηντο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθημην": [
    {
      "lemma": "κάθημαι",
      "form": "καθήμην",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθητο": [
    {
      "lemma": "κάθημαι",
      "form": "καθῆτο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθηντο": [
    {
      "lemma": "κάθημαι",
      "form": "καθῆντο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησομαι": [
    {
      "lemma": "κάθημαι",
      "form": "καθήσομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθηση": [
    {
      "lemma": "κάθημαι",
      "form": "καθήσῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησεται": [
    {
      "lemma": "κάθημαι",
      "form": "καθήσεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησομεθα": [
    {
      "lemma": "κάθημαι",
      "form": "καθησόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησεσθε": [
    {
      "lemma": "κάθημαι",
      "form": "καθήσεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησονται": [
    {
      "lemma": "κάθημαι",
      "form": "καθήσονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεδουμαι": [
    {
      "lemma": "κάθημαι",
      "form": "καθεδοῦμαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησοιμην": [
    {
      "lemma": "κάθημαι",
      "form": "καθησοίμην",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεδοιμην": [
    {
      "lemma": "κάθημαι",
      "form": "καθεδοίμην",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκαθεσθην": [
    {
      "lemma": "κάθημαι",
      "form": "ἐκαθέσθην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκαθεσθησ": [
    {
      "lemma": "κάθημαι",
      "form": "ἐκαθέσθης",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκαθεσθη": [
    {
      "lemma": "κάθημαι",
      "form": "ἐκαθέσθη",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκαθεσθημεν": [
    {
      "lemma": "κάθημαι",
      "form": "ἐκαθέσθημεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκαθεσθητε": [
    {
      "lemma": "κάθημαι",
      "form": "ἐκαθέσθητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εκαθεσθησαν": [
    {
      "lemma": "κάθημαι",
      "form": "ἐκαθέσθησαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθω": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθῶ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθησ": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθῇς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθη": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθῇ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθωμεν": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθῶμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθητε": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθῆτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "κάθημαι",
      "form": "καθέσθητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθωσιν": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθῶσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθειην": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθείην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθειησ": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθείης",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθειη": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθείη",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθειημεν": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθείημεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθειμεν": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθεῖμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθειητε": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθείητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθειτε": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθεῖτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθειησαν": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθείησαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθειεν": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθεῖεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθητι": [
    {
      "lemma": "κάθημαι",
      "form": "καθέσθητι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθητω": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθήτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθητωσαν": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθήτωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθεντων": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθέντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησθαι": [
    {
      "lemma": "κάθημαι",
      "form": "καθῆσθαι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησεσθαι": [
    {
      "lemma": "κάθημαι",
      "form": "καθήσεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεδεισθαι": [
    {
      "lemma": "κάθημαι",
      "form": "καθεδεῖσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθηναι": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθῆναι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "passive",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθημενοσ": [
    {
      "lemma": "κάθημαι",
      "form": "καθήμενος",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "participle",
      "number": "sg",
      "gender": "masc",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθημενη": [
    {
      "lemma": "κάθημαι",
      "form": "καθημένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "participle",
      "number": "sg",
      "gender": "fem",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθημενον": [
    {
      "lemma": "κάθημαι",
      "form": "καθήμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "participle",
      "number": "sg",
      "gender": "neut",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησομενοσ": [
    {
      "lemma": "κάθημαι",
      "form": "καθησόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "number": "sg",
      "gender": "masc",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησομενη": [
    {
      "lemma": "κάθημαι",
      "form": "καθησομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "number": "sg",
      "gender": "fem",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθησομενον": [
    {
      "lemma": "κάθημαι",
      "form": "καθησόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "number": "sg",
      "gender": "neut",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεδουμενοσ": [
    {
      "lemma": "κάθημαι",
      "form": "καθεδούμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "number": "sg",
      "gender": "masc",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεδουμενη": [
    {
      "lemma": "κάθημαι",
      "form": "καθεδουμένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "number": "sg",
      "gender": "fem",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεδουμενον": [
    {
      "lemma": "κάθημαι",
      "form": "καθεδούμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "number": "sg",
      "gender": "neut",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθεισ": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθείς",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "mood": "participle",
      "number": "sg",
      "gender": "masc",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθεισα": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθεῖσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "mood": "participle",
      "number": "sg",
      "gender": "fem",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "καθεσθεν": [
    {
      "lemma": "κάθημαι",
      "form": "καθεσθέν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "mood": "participle",
      "number": "sg",
      "gender": "neut",
      "case": "nom",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυναμαι": [
    {
      "lemma": "δύναμαι",
      "form": "δύναμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "1sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνασαι": [
    {
      "lemma": "δύναμαι",
      "form": "δύνασαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "2sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυναται": [
    {
      "lemma": "δύναμαι",
      "form": "δύναται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "3sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυναμεθα": [
    {
      "lemma": "δύναμαι",
      "form": "δυνάμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "1pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνασθε": [
    {
      "lemma": "δύναμαι",
      "form": "δύνασθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "2pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνανται": [
    {
      "lemma": "δύναμαι",
      "form": "δύνανται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "3pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνωμαι": [
    {
      "lemma": "δύναμαι",
      "form": "δύνωμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "number": "sg",
      "person": "1sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνη": [
    {
      "lemma": "δύναμαι",
      "form": "δύνῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "number": "sg",
      "person": "2sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνηται": [
    {
      "lemma": "δύναμαι",
      "form": "δύνηται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "number": "sg",
      "person": "3sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνωμεθα": [
    {
      "lemma": "δύναμαι",
      "form": "δυνώμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "number": "pl",
      "person": "1pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησθε": [
    {
      "lemma": "δύναμαι",
      "form": "δύνησθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "number": "pl",
      "person": "2pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνωνται": [
    {
      "lemma": "δύναμαι",
      "form": "δύνωνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "number": "pl",
      "person": "3pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυναιμην": [
    {
      "lemma": "δύναμαι",
      "form": "δυναίμην",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "number": "sg",
      "person": "1sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυναιο": [
    {
      "lemma": "δύναμαι",
      "form": "δύναιο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "number": "sg",
      "person": "2sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυναιτο": [
    {
      "lemma": "δύναμαι",
      "form": "δύναιτο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "number": "sg",
      "person": "3sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυναιμεθα": [
    {
      "lemma": "δύναμαι",
      "form": "δυναίμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "number": "pl",
      "person": "1pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυναισθε": [
    {
      "lemma": "δύναμαι",
      "form": "δύναισθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "number": "pl",
      "person": "2pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυναιντο": [
    {
      "lemma": "δύναμαι",
      "form": "δύναιντο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "number": "pl",
      "person": "3pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνασθω": [
    {
      "lemma": "δύναμαι",
      "form": "δυνάσθω",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "number": "sg",
      "person": "3sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνασθωσαν": [
    {
      "lemma": "δύναμαι",
      "form": "δυνάσθωσαν",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "number": "pl",
      "person": "3pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνασθαι": [
    {
      "lemma": "δύναμαι",
      "form": "δύνασθαι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυναμενοσ": [
    {
      "lemma": "δύναμαι",
      "form": "δυνάμενος",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "masc",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυναμενη": [
    {
      "lemma": "δύναμαι",
      "form": "δυναμένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "fem",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυναμενον": [
    {
      "lemma": "δύναμαι",
      "form": "δυνάμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "neut",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εδυναμην": [
    {
      "lemma": "δύναμαι",
      "form": "ἐδυνάμην",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "1sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εδυνω": [
    {
      "lemma": "δύναμαι",
      "form": "ἐδύνω",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "2sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εδυνατο": [
    {
      "lemma": "δύναμαι",
      "form": "ἐδύνατο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "3sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εδυναμεθα": [
    {
      "lemma": "δύναμαι",
      "form": "ἐδυνάμεθα",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "1pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εδυνασθε": [
    {
      "lemma": "δύναμαι",
      "form": "ἐδύνασθε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "2pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εδυναντο": [
    {
      "lemma": "δύναμαι",
      "form": "ἐδύναντο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "3pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησομαι": [
    {
      "lemma": "δύναμαι",
      "form": "δυνήσομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "1sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησει": [
    {
      "lemma": "δύναμαι",
      "form": "δυνήσει",
      "kind": "finite",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "2sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησεται": [
    {
      "lemma": "δύναμαι",
      "form": "δυνήσεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "3sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησομεθα": [
    {
      "lemma": "δύναμαι",
      "form": "δυνησόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "1pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησεσθε": [
    {
      "lemma": "δύναμαι",
      "form": "δυνήσεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "2pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησονται": [
    {
      "lemma": "δύναμαι",
      "form": "δυνήσονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "3pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησοιμην": [
    {
      "lemma": "δύναμαι",
      "form": "δυνησοίμην",
      "kind": "finite",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "optative",
      "number": "sg",
      "person": "1sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησοιο": [
    {
      "lemma": "δύναμαι",
      "form": "δυνήσοιο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "optative",
      "number": "sg",
      "person": "2sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησοιτο": [
    {
      "lemma": "δύναμαι",
      "form": "δυνήσοιτο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "optative",
      "number": "sg",
      "person": "3sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησοιμεθα": [
    {
      "lemma": "δύναμαι",
      "form": "δυνησοίμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "optative",
      "number": "pl",
      "person": "1pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησοισθε": [
    {
      "lemma": "δύναμαι",
      "form": "δυνήσοισθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "optative",
      "number": "pl",
      "person": "2pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησοιντο": [
    {
      "lemma": "δύναμαι",
      "form": "δυνήσοιντο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "optative",
      "number": "pl",
      "person": "3pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησεσθαι": [
    {
      "lemma": "δύναμαι",
      "form": "δυνήσεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησομενοσ": [
    {
      "lemma": "δύναμαι",
      "form": "δυνησόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "masc",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησομενη": [
    {
      "lemma": "δύναμαι",
      "form": "δυνησομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "fem",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνησομενον": [
    {
      "lemma": "δύναμαι",
      "form": "δυνησόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "neut",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εδυνηθην": [
    {
      "lemma": "δύναμαι",
      "form": "ἐδυνήθην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "number": "sg",
      "person": "1sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εδυνηθησ": [
    {
      "lemma": "δύναμαι",
      "form": "ἐδυνήθης",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "number": "sg",
      "person": "2sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εδυνηθη": [
    {
      "lemma": "δύναμαι",
      "form": "ἐδυνήθη",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "number": "sg",
      "person": "3sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εδυνηθημεν": [
    {
      "lemma": "δύναμαι",
      "form": "ἐδυνήθημεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "number": "pl",
      "person": "1pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εδυνηθητε": [
    {
      "lemma": "δύναμαι",
      "form": "ἐδυνήθητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "number": "pl",
      "person": "2pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "εδυνηθησαν": [
    {
      "lemma": "δύναμαι",
      "form": "ἐδυνήθησαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "number": "pl",
      "person": "3pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνηθηναι": [
    {
      "lemma": "δύναμαι",
      "form": "δυνηθῆναι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "passive",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνηθεισ": [
    {
      "lemma": "δύναμαι",
      "form": "δυνηθείς",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "mood": "participle",
      "gender": "masc",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνηθεισα": [
    {
      "lemma": "δύναμαι",
      "form": "δυνηθεῖσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "mood": "participle",
      "gender": "fem",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δυνηθεν": [
    {
      "lemma": "δύναμαι",
      "form": "δυνηθέν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "mood": "participle",
      "gender": "neut",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δεδυνημαι": [
    {
      "lemma": "δύναμαι",
      "form": "δεδύνημαι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "1sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δεδυνησαι": [
    {
      "lemma": "δύναμαι",
      "form": "δεδύνησαι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "2sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δεδυνηται": [
    {
      "lemma": "δύναμαι",
      "form": "δεδύνηται",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "3sg",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δεδυνημεθα": [
    {
      "lemma": "δύναμαι",
      "form": "δεδυνήμεθα",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "1pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δεδυνησθε": [
    {
      "lemma": "δύναμαι",
      "form": "δεδύνησθε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "2pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δεδυνηνται": [
    {
      "lemma": "δύναμαι",
      "form": "δεδύνηνται",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "3pl",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δεδυνησθαι": [
    {
      "lemma": "δύναμαι",
      "form": "δεδυνῆσθαι",
      "kind": "infinitive",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "infinitive",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δεδυνημενοσ": [
    {
      "lemma": "δύναμαι",
      "form": "δεδυνημένος",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "masc",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δεδυνημενη": [
    {
      "lemma": "δύναμαι",
      "form": "δεδυνημένη",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "fem",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ],
  "δεδυνημενον": [
    {
      "lemma": "δύναμαι",
      "form": "δεδυνημένον",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "participle",
      "gender": "neut",
      "source": "stage16-deep-audit",
      "displayPriority": 7
    }
  ]
};
  for (const [key, entries] of Object.entries(patch)) {
    window.FORM_INDEX[key] = (window.FORM_INDEX[key] || []).concat(entries);
  }
})();
