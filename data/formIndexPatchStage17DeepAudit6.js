(function(){
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase().trim().replace(/[^\p{L}]/gu,''); }
  window.FORM_INDEX = window.FORM_INDEX || {};
  const lemmas = ["τίκτω", "ἀπόλλυμι", "ὄλλυμι", "ἱκνέομαι", "ἥκω"];
  const normLemmaSet = new Set(lemmas.map(normalizeGreek));
  for (const [key, bucket] of Object.entries(window.FORM_INDEX)) {
    if (!Array.isArray(bucket)) continue;
    window.FORM_INDEX[key] = bucket.filter(entry => !normLemmaSet.has(normalizeGreek(entry.lemma||'')));
  }
  const patch = {
  "τικτω": [
    {
      "lemma": "τίκτω",
      "form": "τίκτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "τίκτω",
      "form": "τίκτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτεισ": [
    {
      "lemma": "τίκτω",
      "form": "τίκτεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτει": [
    {
      "lemma": "τίκτω",
      "form": "τίκτει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "τίκτω",
      "form": "τίκτει",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτομεν": [
    {
      "lemma": "τίκτω",
      "form": "τίκτομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτετε": [
    {
      "lemma": "τίκτω",
      "form": "τίκτετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "τίκτω",
      "form": "τίκτετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτουσι": [
    {
      "lemma": "τίκτω",
      "form": "τίκτουσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτουσιν": [
    {
      "lemma": "τίκτω",
      "form": "τίκτουσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτησ": [
    {
      "lemma": "τίκτω",
      "form": "τίκτῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτη": [
    {
      "lemma": "τίκτω",
      "form": "τίκτῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "τίκτω",
      "form": "τίκτῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "τίκτω",
      "form": "τίκτῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτωμεν": [
    {
      "lemma": "τίκτω",
      "form": "τίκτωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτητε": [
    {
      "lemma": "τίκτω",
      "form": "τίκτητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτωσι": [
    {
      "lemma": "τίκτω",
      "form": "τίκτωσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτωσιν": [
    {
      "lemma": "τίκτω",
      "form": "τίκτωσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτοιμι": [
    {
      "lemma": "τίκτω",
      "form": "τίκτοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτοισ": [
    {
      "lemma": "τίκτω",
      "form": "τίκτοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτοι": [
    {
      "lemma": "τίκτω",
      "form": "τίκτοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτοιμεν": [
    {
      "lemma": "τίκτω",
      "form": "τίκτοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτοιτε": [
    {
      "lemma": "τίκτω",
      "form": "τίκτοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτοιεν": [
    {
      "lemma": "τίκτω",
      "form": "τίκτοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτε": [
    {
      "lemma": "τίκτω",
      "form": "τίκτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτετω": [
    {
      "lemma": "τίκτω",
      "form": "τικτέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτοντων": [
    {
      "lemma": "τίκτω",
      "form": "τικτόντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτομαι": [
    {
      "lemma": "τίκτω",
      "form": "τίκτομαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτεται": [
    {
      "lemma": "τίκτω",
      "form": "τίκτεται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτομεθα": [
    {
      "lemma": "τίκτω",
      "form": "τικτόμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτεσθε": [
    {
      "lemma": "τίκτω",
      "form": "τίκτεσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "τίκτω",
      "form": "τίκτεσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτονται": [
    {
      "lemma": "τίκτω",
      "form": "τίκτονται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτωμαι": [
    {
      "lemma": "τίκτω",
      "form": "τίκτωμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτηται": [
    {
      "lemma": "τίκτω",
      "form": "τίκτηται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτωμεθα": [
    {
      "lemma": "τίκτω",
      "form": "τικτώμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτησθε": [
    {
      "lemma": "τίκτω",
      "form": "τίκτησθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτωνται": [
    {
      "lemma": "τίκτω",
      "form": "τίκτωνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτοιμην": [
    {
      "lemma": "τίκτω",
      "form": "τικτοίμην",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτοιο": [
    {
      "lemma": "τίκτω",
      "form": "τίκτοιο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτοιτο": [
    {
      "lemma": "τίκτω",
      "form": "τίκτοιτο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτοιμεθα": [
    {
      "lemma": "τίκτω",
      "form": "τικτοίμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτοισθε": [
    {
      "lemma": "τίκτω",
      "form": "τίκτοισθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτοιντο": [
    {
      "lemma": "τίκτω",
      "form": "τίκτοιντο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτου": [
    {
      "lemma": "τίκτω",
      "form": "τίκτου",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτεσθω": [
    {
      "lemma": "τίκτω",
      "form": "τικτέσθω",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτεσθων": [
    {
      "lemma": "τίκτω",
      "form": "τικτέσθων",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετικτον": [
    {
      "lemma": "τίκτω",
      "form": "ἔτικτον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "τίκτω",
      "form": "ἔτικτον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετικτεσ": [
    {
      "lemma": "τίκτω",
      "form": "ἔτικτες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετικτε": [
    {
      "lemma": "τίκτω",
      "form": "ἔτικτε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετικτεν": [
    {
      "lemma": "τίκτω",
      "form": "ἔτικτεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετικτομεν": [
    {
      "lemma": "τίκτω",
      "form": "ἐτίκτομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετικτετε": [
    {
      "lemma": "τίκτω",
      "form": "ἐτίκτετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετικτομην": [
    {
      "lemma": "τίκτω",
      "form": "ἐτικτόμην",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετικτου": [
    {
      "lemma": "τίκτω",
      "form": "ἐτίκτου",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετικτετο": [
    {
      "lemma": "τίκτω",
      "form": "ἐτίκτετο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετικτομεθα": [
    {
      "lemma": "τίκτω",
      "form": "ἐτικτόμεθα",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετικτεσθε": [
    {
      "lemma": "τίκτω",
      "form": "ἐτίκτεσθε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετικτοντο": [
    {
      "lemma": "τίκτω",
      "form": "ἐτίκτοντο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξω": [
    {
      "lemma": "τίκτω",
      "form": "τέξω",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξεισ": [
    {
      "lemma": "τίκτω",
      "form": "τέξεις",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξει": [
    {
      "lemma": "τίκτω",
      "form": "τέξει",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "τίκτω",
      "form": "τέξει",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξομεν": [
    {
      "lemma": "τίκτω",
      "form": "τέξομεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξετε": [
    {
      "lemma": "τίκτω",
      "form": "τέξετε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξουσι": [
    {
      "lemma": "τίκτω",
      "form": "τέξουσι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξουσιν": [
    {
      "lemma": "τίκτω",
      "form": "τέξουσιν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξοιμι": [
    {
      "lemma": "τίκτω",
      "form": "τέξοιμι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξοισ": [
    {
      "lemma": "τίκτω",
      "form": "τέξοις",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξοι": [
    {
      "lemma": "τίκτω",
      "form": "τέξοι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξοιμεν": [
    {
      "lemma": "τίκτω",
      "form": "τέξοιμεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξοιτε": [
    {
      "lemma": "τίκτω",
      "form": "τέξοιτε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξοιεν": [
    {
      "lemma": "τίκτω",
      "form": "τέξοιεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξομαι": [
    {
      "lemma": "τίκτω",
      "form": "τέξομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξη": [
    {
      "lemma": "τίκτω",
      "form": "τέξῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξεται": [
    {
      "lemma": "τίκτω",
      "form": "τέξεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξομεθα": [
    {
      "lemma": "τίκτω",
      "form": "τεξόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξεσθε": [
    {
      "lemma": "τίκτω",
      "form": "τέξεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξονται": [
    {
      "lemma": "τίκτω",
      "form": "τέξονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξοιμην": [
    {
      "lemma": "τίκτω",
      "form": "τεξοίμην",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξοιο": [
    {
      "lemma": "τίκτω",
      "form": "τέξοιο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξοιτο": [
    {
      "lemma": "τίκτω",
      "form": "τέξοιτο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξοιμεθα": [
    {
      "lemma": "τίκτω",
      "form": "τεξοίμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξοισθε": [
    {
      "lemma": "τίκτω",
      "form": "τέξοισθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξοιντο": [
    {
      "lemma": "τίκτω",
      "form": "τέξοιντο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησομαι": [
    {
      "lemma": "τίκτω",
      "form": "τεχθήσομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησει": [
    {
      "lemma": "τίκτω",
      "form": "τεχθήσει",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθηση": [
    {
      "lemma": "τίκτω",
      "form": "τεχθήσῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησεται": [
    {
      "lemma": "τίκτω",
      "form": "τεχθήσεται",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησομεθα": [
    {
      "lemma": "τίκτω",
      "form": "τεχθησόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησεσθε": [
    {
      "lemma": "τίκτω",
      "form": "τεχθήσεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησονται": [
    {
      "lemma": "τίκτω",
      "form": "τεχθήσονται",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησοιμην": [
    {
      "lemma": "τίκτω",
      "form": "τεχθησοίμην",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησοιο": [
    {
      "lemma": "τίκτω",
      "form": "τεχθήσοιο",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησοιτο": [
    {
      "lemma": "τίκτω",
      "form": "τεχθήσοιτο",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησοιμεθα": [
    {
      "lemma": "τίκτω",
      "form": "τεχθησοίμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησοισθε": [
    {
      "lemma": "τίκτω",
      "form": "τεχθήσοισθε",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησοιντο": [
    {
      "lemma": "τίκτω",
      "form": "τεχθήσοιντο",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεκον": [
    {
      "lemma": "τίκτω",
      "form": "ἔτεκον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "τίκτω",
      "form": "ἔτεκον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεκεσ": [
    {
      "lemma": "τίκτω",
      "form": "ἔτεκες",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεκε": [
    {
      "lemma": "τίκτω",
      "form": "ἔτεκε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεκεν": [
    {
      "lemma": "τίκτω",
      "form": "ἔτεκεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεκομεν": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέκομεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεκετε": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέκετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκω": [
    {
      "lemma": "τίκτω",
      "form": "τέκω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκησ": [
    {
      "lemma": "τίκτω",
      "form": "τέκῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκη": [
    {
      "lemma": "τίκτω",
      "form": "τέκῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "τίκτω",
      "form": "τέκῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκωμεν": [
    {
      "lemma": "τίκτω",
      "form": "τέκωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκητε": [
    {
      "lemma": "τίκτω",
      "form": "τέκητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκωσι": [
    {
      "lemma": "τίκτω",
      "form": "τέκωσι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκωσιν": [
    {
      "lemma": "τίκτω",
      "form": "τέκωσιν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκοιμι": [
    {
      "lemma": "τίκτω",
      "form": "τέκοιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκοισ": [
    {
      "lemma": "τίκτω",
      "form": "τέκοις",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκοι": [
    {
      "lemma": "τίκτω",
      "form": "τέκοι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκοιμεν": [
    {
      "lemma": "τίκτω",
      "form": "τέκοιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκοιτε": [
    {
      "lemma": "τίκτω",
      "form": "τέκοιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκοιεν": [
    {
      "lemma": "τίκτω",
      "form": "τέκοιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκε": [
    {
      "lemma": "τίκτω",
      "form": "τέκε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκετω": [
    {
      "lemma": "τίκτω",
      "form": "τεκέτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκετε": [
    {
      "lemma": "τίκτω",
      "form": "τέκετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκοντων": [
    {
      "lemma": "τίκτω",
      "form": "τεκόντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεκομην": [
    {
      "lemma": "τίκτω",
      "form": "ἐτεκόμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεκου": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέκου",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεκετο": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέκετο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεκομεθα": [
    {
      "lemma": "τίκτω",
      "form": "ἐτεκόμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεκεσθε": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέκεσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεκοντο": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέκοντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκωμαι": [
    {
      "lemma": "τίκτω",
      "form": "τέκωμαι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκηται": [
    {
      "lemma": "τίκτω",
      "form": "τέκηται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκωμεθα": [
    {
      "lemma": "τίκτω",
      "form": "τεκώμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκησθε": [
    {
      "lemma": "τίκτω",
      "form": "τέκησθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκωνται": [
    {
      "lemma": "τίκτω",
      "form": "τέκωνται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκοιμην": [
    {
      "lemma": "τίκτω",
      "form": "τεκοίμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκοιο": [
    {
      "lemma": "τίκτω",
      "form": "τέκοιο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκοιτο": [
    {
      "lemma": "τίκτω",
      "form": "τέκοιτο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκοιμεθα": [
    {
      "lemma": "τίκτω",
      "form": "τεκοίμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκοισθε": [
    {
      "lemma": "τίκτω",
      "form": "τέκοισθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκοιντο": [
    {
      "lemma": "τίκτω",
      "form": "τέκοιντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκου": [
    {
      "lemma": "τίκτω",
      "form": "τεκοῦ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκεσθω": [
    {
      "lemma": "τίκτω",
      "form": "τεκέσθω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκεσθε": [
    {
      "lemma": "τίκτω",
      "form": "τέκεσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκεσθων": [
    {
      "lemma": "τίκτω",
      "form": "τεκέσθων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεχθην": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέχθην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεχθησ": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέχθης",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεχθη": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέχθη",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεχθημεν": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέχθημεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεχθητε": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέχθητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετεχθησαν": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέχθησαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθω": [
    {
      "lemma": "τίκτω",
      "form": "τεχθῶ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησ": [
    {
      "lemma": "τίκτω",
      "form": "τεχθῇς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθη": [
    {
      "lemma": "τίκτω",
      "form": "τεχθῇ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθωμεν": [
    {
      "lemma": "τίκτω",
      "form": "τεχθῶμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθητε": [
    {
      "lemma": "τίκτω",
      "form": "τεχθῆτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "τίκτω",
      "form": "τέχθητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθωσι": [
    {
      "lemma": "τίκτω",
      "form": "τεχθῶσι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθωσιν": [
    {
      "lemma": "τίκτω",
      "form": "τεχθῶσιν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθειην": [
    {
      "lemma": "τίκτω",
      "form": "τεχθείην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθειησ": [
    {
      "lemma": "τίκτω",
      "form": "τεχθείης",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθειη": [
    {
      "lemma": "τίκτω",
      "form": "τεχθείη",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθειημεν": [
    {
      "lemma": "τίκτω",
      "form": "τεχθείημεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθειμεν": [
    {
      "lemma": "τίκτω",
      "form": "τεχθεῖμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθειητε": [
    {
      "lemma": "τίκτω",
      "form": "τεχθείητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθειτε": [
    {
      "lemma": "τίκτω",
      "form": "τεχθεῖτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθειησαν": [
    {
      "lemma": "τίκτω",
      "form": "τεχθείησαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθειεν": [
    {
      "lemma": "τίκτω",
      "form": "τεχθεῖεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθητι": [
    {
      "lemma": "τίκτω",
      "form": "τέχθητι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθητω": [
    {
      "lemma": "τίκτω",
      "form": "τεχθήτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθεντων": [
    {
      "lemma": "τίκτω",
      "form": "τεχθέντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκα": [
    {
      "lemma": "τίκτω",
      "form": "τέτοκα",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκασ": [
    {
      "lemma": "τίκτω",
      "form": "τέτοκας",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκε": [
    {
      "lemma": "τίκτω",
      "form": "τέτοκε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "τίκτω",
      "form": "τέτοκε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκεν": [
    {
      "lemma": "τίκτω",
      "form": "τέτοκεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκαμεν": [
    {
      "lemma": "τίκτω",
      "form": "τετόκαμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκατε": [
    {
      "lemma": "τίκτω",
      "form": "τετόκατε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκασι": [
    {
      "lemma": "τίκτω",
      "form": "τετόκασι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκασιν": [
    {
      "lemma": "τίκτω",
      "form": "τετόκασιν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκω": [
    {
      "lemma": "τίκτω",
      "form": "τετόκω",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκησ": [
    {
      "lemma": "τίκτω",
      "form": "τετόκῃς",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκη": [
    {
      "lemma": "τίκτω",
      "form": "τετόκῃ",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκωμεν": [
    {
      "lemma": "τίκτω",
      "form": "τετόκωμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκητε": [
    {
      "lemma": "τίκτω",
      "form": "τετόκητε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκωσι": [
    {
      "lemma": "τίκτω",
      "form": "τετόκωσι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκωσιν": [
    {
      "lemma": "τίκτω",
      "form": "τετόκωσιν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκοιην": [
    {
      "lemma": "τίκτω",
      "form": "τετοκοίην",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκοιμι": [
    {
      "lemma": "τίκτω",
      "form": "τετόκοιμι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκοιησ": [
    {
      "lemma": "τίκτω",
      "form": "τετοκοίης",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκοισ": [
    {
      "lemma": "τίκτω",
      "form": "τετόκοις",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκοιη": [
    {
      "lemma": "τίκτω",
      "form": "τετοκοίη",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκοι": [
    {
      "lemma": "τίκτω",
      "form": "τετόκοι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκοιμεν": [
    {
      "lemma": "τίκτω",
      "form": "τετόκοιμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκοιτε": [
    {
      "lemma": "τίκτω",
      "form": "τετόκοιτε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκοιεν": [
    {
      "lemma": "τίκτω",
      "form": "τετόκοιεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκετω": [
    {
      "lemma": "τίκτω",
      "form": "τετοκέτω",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκετε": [
    {
      "lemma": "τίκτω",
      "form": "τετόκετε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκοντων": [
    {
      "lemma": "τίκτω",
      "form": "τετοκόντων",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμαι": [
    {
      "lemma": "τίκτω",
      "form": "τέτεγμαι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεξαι": [
    {
      "lemma": "τίκτω",
      "form": "τέτεξαι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεκται": [
    {
      "lemma": "τίκτω",
      "form": "τέτεκται",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμεθα": [
    {
      "lemma": "τίκτω",
      "form": "τετέγμεθα",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεχθε": [
    {
      "lemma": "τίκτω",
      "form": "τέτεχθε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "τίκτω",
      "form": "τέτεχθε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεκαται": [
    {
      "lemma": "τίκτω",
      "form": "τετέκαται",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενοσω": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένος ὦ",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενοσησ": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένος ᾖς",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενοση": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένος ᾖ",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενοιωμεν": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένοι ὦμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενοιητε": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένοι ἦτε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενοιωσι": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένοι ὦσι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενοιωσιν": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένοι ὦσιν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενοσειην": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένος εἴην",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενοσειησ": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένος εἴης",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενοσειη": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένος εἴη",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ειμεν": [
    {
      "lemma": "τίκτω",
      "form": "εἶμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενοιειημεν": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένοι εἴημεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ειτε": [
    {
      "lemma": "τίκτω",
      "form": "εἶτε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενοιειητε": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένοι εἴητε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ειεν": [
    {
      "lemma": "τίκτω",
      "form": "εἶεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενοιειησαν": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένοι εἴησαν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεξο": [
    {
      "lemma": "τίκτω",
      "form": "τέτεξο",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεχθω": [
    {
      "lemma": "τίκτω",
      "form": "τετέχθω",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεχθων": [
    {
      "lemma": "τίκτω",
      "form": "τετέχθων",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετετοκειν": [
    {
      "lemma": "τίκτω",
      "form": "ἐτετόκειν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "τίκτω",
      "form": "ἐτετόκειν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετετοκη": [
    {
      "lemma": "τίκτω",
      "form": "ἐτετόκη",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετετοκεισ": [
    {
      "lemma": "τίκτω",
      "form": "ἐτετόκεις",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετετοκησ": [
    {
      "lemma": "τίκτω",
      "form": "ἐτετόκης",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετετοκει": [
    {
      "lemma": "τίκτω",
      "form": "ἐτετόκει",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετετοκεμεν": [
    {
      "lemma": "τίκτω",
      "form": "ἐτετόκεμεν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετετοκετε": [
    {
      "lemma": "τίκτω",
      "form": "ἐτετόκετε",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετετοκεσαν": [
    {
      "lemma": "τίκτω",
      "form": "ἐτετόκεσαν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετετεγμην": [
    {
      "lemma": "τίκτω",
      "form": "ἐτετέγμην",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετετεξο": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέτεξο",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετετεκτο": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέτεκτο",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετετεγμεθα": [
    {
      "lemma": "τίκτω",
      "form": "ἐτετέγμεθα",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετετεχθε": [
    {
      "lemma": "τίκτω",
      "form": "ἐτέτεχθε",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ετετεκατο": [
    {
      "lemma": "τίκτω",
      "form": "ἐτετέκατο",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτειν": [
    {
      "lemma": "τίκτω",
      "form": "τίκτειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτεσθαι": [
    {
      "lemma": "τίκτω",
      "form": "τίκτεσθαι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "middle/passive",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξειν": [
    {
      "lemma": "τίκτω",
      "form": "τέξειν",
      "kind": "infinitive",
      "tense": "future",
      "voice": "active",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξεσθαι": [
    {
      "lemma": "τίκτω",
      "form": "τέξεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησεσθαι": [
    {
      "lemma": "τίκτω",
      "form": "τεχθήσεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "passive",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκειν": [
    {
      "lemma": "τίκτω",
      "form": "τεκεῖν",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκεσθαι": [
    {
      "lemma": "τίκτω",
      "form": "τεκέσθαι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "middle",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθηναι": [
    {
      "lemma": "τίκτω",
      "form": "τεχθῆναι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "passive",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκεναι": [
    {
      "lemma": "τίκτω",
      "form": "τετοκέναι",
      "kind": "infinitive",
      "tense": "perfect",
      "voice": "active",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεχθαι": [
    {
      "lemma": "τίκτω",
      "form": "τετέχθαι",
      "kind": "infinitive",
      "tense": "perfect",
      "voice": "middle/passive",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτων": [
    {
      "lemma": "τίκτω",
      "form": "τίκτων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτουσα": [
    {
      "lemma": "τίκτω",
      "form": "τίκτουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτον": [
    {
      "lemma": "τίκτω",
      "form": "τίκτον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτομενοσ": [
    {
      "lemma": "τίκτω",
      "form": "τικτόμενος",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτομενη": [
    {
      "lemma": "τίκτω",
      "form": "τικτομένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τικτομενον": [
    {
      "lemma": "τίκτω",
      "form": "τικτόμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξων": [
    {
      "lemma": "τίκτω",
      "form": "τέξων",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξουσα": [
    {
      "lemma": "τίκτω",
      "form": "τέξουσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξον": [
    {
      "lemma": "τίκτω",
      "form": "τέξον",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξομενοσ": [
    {
      "lemma": "τίκτω",
      "form": "τεξόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξομενη": [
    {
      "lemma": "τίκτω",
      "form": "τεξομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεξομενον": [
    {
      "lemma": "τίκτω",
      "form": "τεξόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησομενοσ": [
    {
      "lemma": "τίκτω",
      "form": "τεχθησόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησομενη": [
    {
      "lemma": "τίκτω",
      "form": "τεχθησομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθησομενον": [
    {
      "lemma": "τίκτω",
      "form": "τεχθησόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκων": [
    {
      "lemma": "τίκτω",
      "form": "τεκών",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκουσα": [
    {
      "lemma": "τίκτω",
      "form": "τεκοῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκον": [
    {
      "lemma": "τίκτω",
      "form": "τεκόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκομενοσ": [
    {
      "lemma": "τίκτω",
      "form": "τεκόμενος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκομενη": [
    {
      "lemma": "τίκτω",
      "form": "τεκομένη",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεκομενον": [
    {
      "lemma": "τίκτω",
      "form": "τεκόμενον",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθεισ": [
    {
      "lemma": "τίκτω",
      "form": "τεχθείς",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθεισα": [
    {
      "lemma": "τίκτω",
      "form": "τεχθεῖσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τεχθεν": [
    {
      "lemma": "τίκτω",
      "form": "τεχθέν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκωσ": [
    {
      "lemma": "τίκτω",
      "form": "τετοκώς",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκυια": [
    {
      "lemma": "τίκτω",
      "form": "τετοκυῖα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετοκοσ": [
    {
      "lemma": "τίκτω",
      "form": "τετοκός",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενοσ": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένος",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενη": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένη",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "τετεγμενον": [
    {
      "lemma": "τίκτω",
      "form": "τετεγμένον",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυμι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυσ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύς",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυσι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυσιν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυτε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυασι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύασι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυασιν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύασιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυω": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυησ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυη": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυωμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυητε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυωσι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύωσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυωσιν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύωσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυοιμι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυοισ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυοι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυοιμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυοιτε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυοιεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυτω": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυντων": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυμαι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυσαι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυσαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυται": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυμεθα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυμεσθα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύμεσθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυσθε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυνται": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυωμαι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύωμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυηται": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύηται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυωμεθα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλυώμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυωμεσθα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλυώμεσθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυησθε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύησθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυωνται": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύωνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυοιμην": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλυοίμην",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυοιο": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύοιο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυοιτο": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύοιτο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυοιμεθα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλυοίμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυοιμεσθα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλυοίμεσθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυοισθε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύοισθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυοιντο": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύοιντο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυσο": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυσο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυσθω": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύσθω",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυσθων": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύσθων",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλλυον": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλλυον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλλυσ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλλυς",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλλυ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλλυ",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλλυε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλλυε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλλυεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλλυεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλλυμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλλυμεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλλυτε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλλυτε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλλυσαν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλλυσαν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλλυμην": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλλύμην",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλλυσο": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλλυσο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλλυτο": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλλυτο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλλυμεθα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλλύμεθα",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλλυσθε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλλυσθε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλλυντο": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλλυντο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολω": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολῶ",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεισ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολεῖς",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολει": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολεῖ",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολεῖ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολουμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῦμεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολειτε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολεῖτε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολουσι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῦσι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολουσιν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῦσιν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιμι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῖμι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιην": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοίην",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοισ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῖς",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιησ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοίης",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῖ",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιη": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοίη",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῖμεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιημεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοίημεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιτε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῖτε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιητε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοίητε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῖεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιησαν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοίησαν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολουμαι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῦμαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολη": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολῇ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπόλῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολειται": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολεῖται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολουμεθα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολούμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεισθε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολεῖσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολουνται": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῦνται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιμην": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοίμην",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοίμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιო": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῖო",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιο": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῖο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλοιο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπόλοιο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιτο": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῖτο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλοιτο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπόλοιτο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιμεθα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοίμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοίμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοισθε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῖσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλοισθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπόλοισθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολοιντο": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῖντο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλοιντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπόλοιντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλεσα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλεσα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλεσασ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλεσας",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλεσε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλεσε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλεσεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλεσεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλεσαμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλέσαμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλεσατε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλέσατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλεσαν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλεσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσω": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσησ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεση": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσωμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσητε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσωσι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσωσι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσωσιν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσωσιν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσαιμι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσαιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσαισ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσαις",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσειασ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσειας",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσαι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσαι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσαι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσειε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσειε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσειεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσειεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσαιμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσαιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσαιτε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσαιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσαιεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσαιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσειαν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσειαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσον": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλεσον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπόλεσον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσατω": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολεσάτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσατε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσαντων": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολεσάντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλομην": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλόμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπωλόμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλου": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλου",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπώλου",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλετο": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλετο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλομεθα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλόμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπωλόμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλεσθε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλεσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλοντο": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπώλοντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπώλοντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωμαι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλωμαι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπόλωμαι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποληται": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόληται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπόληται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωμεθα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολησθε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλησθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπόλησθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωνται": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλωνται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπόλωνται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολου": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῦ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσθω": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσθω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσθε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλεσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ἀπόλεσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσθων": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσθων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλεκα",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλωλα",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκασ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλεκας",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλασ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλωλας",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλεκε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλεκε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλεκεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλωλε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλωλε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλωλεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκαμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκαμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλαμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλαμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκατε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκατε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλατε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλατε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκασι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκασι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκασιν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκασιν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλασι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλασι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλασιν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλασιν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκω": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκω",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλω": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλω",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκησ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκῃς",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλησ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλῃς",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκη": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκῃ",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλη": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλῃ",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκωμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκωμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλωμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλωμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκητε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκητε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλητε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλητε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκωσι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκωσι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκωσιν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκωσιν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλωσι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλωσι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλωσιν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλωσιν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκοιμι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκοιμι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκοιην": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλεκοίην",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλοιην": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλοίην",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλοιμι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλοιμι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκοισ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκοις",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκοιησ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλεκοίης",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλοιησ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλοίης",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλοισ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλοις",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκοι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκοι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκοιη": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλεκοίη",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλοιη": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλοίη",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλοι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλοι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκοιμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκοιμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλοιμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλοιμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκοιτε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκοιτε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλοιτε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλοιτε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκοιεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκοιεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλοιεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλοιεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλετω": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέτω",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκετω": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλεκέτω",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκετε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέκετε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλετε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολώλετε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκοντων": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλεκόντων",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλοντων": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλόντων",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλωλειν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλώλειν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλώλειν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλωλη": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλώλη",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλωλεισ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλώλεις",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλωλησ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλώλης",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλωλει": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλώλει",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλωλεμεν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλώλεμεν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλωλετε": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλώλετε",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απωλωλεσαν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπωλώλεσαν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυναι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύναι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυσθαι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπόλλυσθαι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "middle/passive",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολειν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολεῖν",
      "kind": "infinitive",
      "tense": "future",
      "voice": "active",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεισθαι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολεῖσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεναι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλέναι",
      "kind": "infinitive",
      "tense": "perfect",
      "voice": "active",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκεναι": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλεκέναι",
      "kind": "infinitive",
      "tense": "perfect",
      "voice": "active",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυσα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλῦσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυον": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλυόν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυμενοσ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύμενος",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυμενη": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλυμένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολλυμενον": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολλύμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολων": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολῶν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολουσα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῦσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολουν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολοῦν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολουμενοσ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολούμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολουμενη": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολουμένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολουμενον": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολούμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσασ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσασα": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσασα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολεσαν": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολέσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκωσ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλεκώς",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλωσ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλώς",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκυια": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλεκυῖα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλυια": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλυῖα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλεκοσ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλεκός",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "απολωλοσ": [
    {
      "lemma": "ἀπόλλυμι",
      "form": "ἀπολωλός",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυμι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυσ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύς",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυσι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυσιν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυτε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυασι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύασι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυασιν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύασιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυω": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυησ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυη": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυωμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυητε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυωσι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύωσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυωσιν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύωσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυοιμι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυοισ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυοι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυοιμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυοιτε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυοιεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυτω": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυντων": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυμαι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυσαι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυσαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυται": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυμεθα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυμεσθα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύμεσθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυσθε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυνται": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυωμαι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύωμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυηται": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύηται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυωμεθα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλυώμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυωμεσθα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλυώμεσθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυησθε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύησθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυωνται": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύωνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυοιμην": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλυοίμην",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυοιο": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύοιο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυοιτο": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύοιτο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυοιμεθα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλυοίμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυοιμεσθα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλυοίμεσθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυοισθε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύοισθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυοιντο": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύοιντο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυσο": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυσο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυσθω": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύσθω",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυσθων": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύσθων",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλλυον": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλλυον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλλυσ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλλυς",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλλυ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλλυ",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλλυε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλλυε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλλυεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλλυεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλλυμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλλυμεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλλυτε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλλυτε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλλυσαν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλλυσαν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλλυμην": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὠλλύμην",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλλυσο": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλλυσο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλλυτο": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλλυτο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλλυμεθα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὠλλύμεθα",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλλυσθε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλλυσθε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλλυντο": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλλυντο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολω": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλῶ",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεισ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλεῖς",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολει": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλεῖ",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλεῖ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολουμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῦμεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολειτε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλεῖτε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολουσι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῦσι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολουσιν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῦσιν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιμι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῖμι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιην": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοίην",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοισ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῖς",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιησ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοίης",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῖ",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιη": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοίη",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῖμεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιημεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοίημεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιτε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῖτε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιητε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοίητε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῖεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιησαν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοίησαν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολουμαι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῦμαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολη": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλῇ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολειται": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλεῖται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολουμεθα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλούμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεισθε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλεῖσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολουνται": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῦνται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιμην": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοίμην",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοίμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιო": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῖო",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιο": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῖο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιτο": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῖτο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιμεθα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοίμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοίμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοισθε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῖσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολοιντο": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῖντο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλεσα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλεσα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλεσασ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλεσας",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλεσε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλεσε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλεσεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλεσεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλεσαμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὠλέσαμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλεσατε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὠλέσατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλεσαν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλεσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσω": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσησ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεση": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσωμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσητε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσωσι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσωσι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσωσιν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσωσιν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσαιμι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσαιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσαισ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσαις",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσειασ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσειας",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσαι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσαι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσαι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσειε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσειε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσειεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσειεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσαιμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσαιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσαιτε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσαιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσαιεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσαιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσειαν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσειαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσατω": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλεσάτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσατε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσαντων": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλεσάντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλετο": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλετο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλεσθε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὤλεσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωμεθα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολου": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῦ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσθω": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσθω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσθων": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσθων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλεκα",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλωλα",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκασ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλεκας",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλασ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλωλας",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλεκε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλεκε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλεκεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλωλε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλωλε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλωλεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκαμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκαμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλαμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλαμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκατε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκατε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλατε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλατε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκασι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκασι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκασιν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκασιν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλασι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλασι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλασιν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλασιν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκω": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκω",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλω": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλω",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκησ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκῃς",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλησ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλῃς",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκη": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκῃ",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλη": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλῃ",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκωμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκωμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλωμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλωμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκητε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκητε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλητε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλητε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκωσι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκωσι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκωσιν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκωσιν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλωσι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλωσι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλωσιν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλωσιν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκοιμι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκοιμι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκοιην": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλεκοίην",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλοιην": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλοίην",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλοιμι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλοιμι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκοισ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκοις",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκοιησ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλεκοίης",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλοιησ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλοίης",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλοισ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλοις",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκοι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκοι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκοιη": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλεκοίη",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλοιη": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλοίη",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλοι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλοι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκοιμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκοιμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλοιμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλοιμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκοιτε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκοιτε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλοιτε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλοιτε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκοιεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκοιεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλοιεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλοιεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλετω": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέτω",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκετω": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλεκέτω",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκετε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέκετε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλετε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλώλετε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκοντων": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλεκόντων",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλοντων": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλόντων",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλωλειν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὠλώλειν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ὄλλυμι",
      "form": "ὠλώλειν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλωλη": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὠλώλη",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλωλεισ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὠλώλεις",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλωλησ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὠλώλης",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλωλει": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὠλώλει",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλωλεμεν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὠλώλεμεν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλωλετε": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὠλώλετε",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ωλωλεσαν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὠλώλεσαν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυναι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύναι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυσθαι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὄλλυσθαι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "middle/passive",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολειν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλεῖν",
      "kind": "infinitive",
      "tense": "future",
      "voice": "active",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεισθαι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλεῖσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεναι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλέναι",
      "kind": "infinitive",
      "tense": "perfect",
      "voice": "active",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκεναι": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλεκέναι",
      "kind": "infinitive",
      "tense": "perfect",
      "voice": "active",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυσα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλῦσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυον": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλυόν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυμενοσ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύμενος",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυμενη": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλυμένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολλυμενον": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλλύμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολων": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλῶν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολουσα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῦσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολουν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλοῦν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολουμενοσ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλούμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολουμενη": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλουμένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολουμενον": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλούμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσασ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσασα": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσασα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολεσαν": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλέσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκωσ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλεκώς",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλωσ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλώς",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκυια": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλεκυῖα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλυια": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλυῖα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλεκοσ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλεκός",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ολωλοσ": [
    {
      "lemma": "ὄλλυμι",
      "form": "ὀλωλός",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνουμαι": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνοῦμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνη": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνῇ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνῇ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνειται": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνεῖται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνουμεθα": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνούμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνούμεθα",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνεισθε": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνεῖσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνεῖσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνεῖσθε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνουνται": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνοῦνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνωμαι": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνῶμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνηται": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνῆται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνωμεθα": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνώμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνησθε": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνῆσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνωνται": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνῶνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνοιμην": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνοίμην",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνοιο": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνοῖο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνοιτο": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνοῖτο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνοιμεθα": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνοίμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνοισθε": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνοῖσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνοιντο": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνοῖντο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνου": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνοῦ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνοῦ",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνεισθω": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνείσθω",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνεισθων": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνείσθων",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνουμην": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνούμην",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνειτο": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνεῖτο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνουντο": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνοῦντο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ιξομαι": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵξομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ιξη": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵξῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ιξεται": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵξεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ιξομεθα": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱξόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ιξεσθε": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵξεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ιξονται": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵξονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικομην": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκόμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικου": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵκου",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκοῦ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικετο": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵκετο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικομεθα": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκόμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικεσθε": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵκεσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵκεσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικοντο": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵκοντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικωμαι": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵκωμαι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικη": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵκῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικηται": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵκηται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "αφικωμεθα": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἀφικώμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικησθε": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵκησθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικωνται": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵκωνται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικοιμην": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκοίμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικοιο": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵκοιο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικοιτο": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵκοιτο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικοιμεθα": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκοίμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικοισθε": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵκοισθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικοιντο": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵκοιντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικεσθω": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκέσθω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικεσθων": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκέσθων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ιγμαι": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἷγμαι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ιγμην": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵγμην",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνεισθαι": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνεῖσθαι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ιξεσθαι": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἵξεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικεσθαι": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκέσθαι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνουμενοσ": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνούμενος",
      "kind": "participle",
      "tense": "present",
      "voice": "middle",
      "mood": "participle",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνουμενη": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνουμένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle",
      "mood": "participle",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικνουμενον": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκνούμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle",
      "mood": "participle",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ιξομενοσ": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱξόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ιξομενη": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱξομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ιξομενον": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱξόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικομενοσ": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκόμενος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "mood": "participle",
      "gender": "masc",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικομενη": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκομένη",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "mood": "participle",
      "gender": "fem",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ],
  "ικομενον": [
    {
      "lemma": "ἱκνέομαι",
      "form": "ἱκόμενον",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "mood": "participle",
      "gender": "neut",
      "source": "stage17-deep-audit",
      "displayPriority": 7
    }
  ]
};
  for (const [key, entries] of Object.entries(patch)) {
    window.FORM_INDEX[key] = (window.FORM_INDEX[key] || []).concat(entries);
  }
})();
