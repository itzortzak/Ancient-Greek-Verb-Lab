(function(){
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase().trim().replace(/[^\p{L}]/gu,''); }
  function entrySig(e){ return [e.lemma,e.form,e.kind,e.tense,e.voice,e.mood,e.person||'',e.gender||'',e.case||'',e.number||''].join('|'); }
  window.FORM_INDEX = window.FORM_INDEX || {};
  const lemmas = ["ἀποθνῄσκω", "γιγνώσκω", "λαμβάνω", "λανθάνω", "μανθάνω", "μένω"];
  const normLemmaSet = new Set(lemmas.map(normalizeGreek));
  for (const [key, bucket] of Object.entries(window.FORM_INDEX)) {
    if (!Array.isArray(bucket)) continue;
    window.FORM_INDEX[key] = bucket.filter(entry => !normLemmaSet.has(normalizeGreek(entry.lemma||'')));
  }
  const patch = {
  "αποθνησκω": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκεισ": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκει": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκομεν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκετε": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκουσιν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκουσι": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "απεθνησκον": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπέθνῃσκον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπέθνῃσκον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "απεθνησκεσ": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπέθνῃσκες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "απεθνησκε": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπέθνῃσκε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "απεθνησκεν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπέθνῃσκε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "απεθνησκομεν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπεθνῄσκομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "απεθνησκετε": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπεθνῄσκετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκησ": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκη": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκωμεν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκητε": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκωσιν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκωσι": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκοιμι": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκοισ": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκοι": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκοιμεν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκοιτε": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκοιεν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκε": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῇσκε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκετω": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῃσκέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκοντων": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῃσκόντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκετωσαν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῃσκέτωσαν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανουμαι": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανοῦμαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανη": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανῇ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθάνῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανειται": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανεῖται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανουμεθα": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανούμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανεισθε": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανεῖσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανουνται": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανοῦνται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "απεθανον": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπέθανον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπέθανον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "απεθανεσ": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπέθανες",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "απεθανε": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπέθανε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "απεθανεν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπέθανε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "απεθανομεν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπεθάνομεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "απεθανετε": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπεθάνετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανω": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθάνω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανησ": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθάνῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανωμεν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθάνωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανητε": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθάνητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανωσιν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθάνωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανωσι": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθάνωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανοιμι": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθάνοιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανοισ": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθάνοις",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανοι": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθάνοι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανοιμεν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθάνοιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανοιτε": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθάνοιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανοιεν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθάνοιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανε": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀπόθανε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανετω": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανέτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανετε": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθάνετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανοντων": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανόντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανετωσαν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανέτωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκειν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανεισθαι": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανεῖσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανειν": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανεῖν",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκων": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκουσα": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθνησκον": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθνῄσκον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανουμενοσ": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανούμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανουμενη": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανουμένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανουμενον": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανούμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανων": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανών",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανουσα": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανοῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "αποθανον": [
    {
      "lemma": "ἀποθνῄσκω",
      "form": "ἀποθανόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκω": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκεισ": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκει": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκομεν": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκετε": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκουσιν": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκουσι": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εγιγνωσκον": [
    {
      "lemma": "γιγνώσκω",
      "form": "ἐγίγνωσκον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "γιγνώσκω",
      "form": "ἐγίγνωσκον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εγιγνωσκεσ": [
    {
      "lemma": "γιγνώσκω",
      "form": "ἐγίγνωσκες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εγιγνωσκεν": [
    {
      "lemma": "γιγνώσκω",
      "form": "ἐγίγνωσκε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εγιγνωσκε": [
    {
      "lemma": "γιγνώσκω",
      "form": "ἐγίγνωσκε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εγιγνωσκομεν": [
    {
      "lemma": "γιγνώσκω",
      "form": "ἐγιγνώσκομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εγιγνωσκετε": [
    {
      "lemma": "γιγνώσκω",
      "form": "ἐγιγνώσκετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκησ": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκη": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκωμεν": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκητε": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκωσιν": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκωσι": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκοιμι": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκοισ": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκοι": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκοιμεν": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκοιτε": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκοιεν": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκε": [
    {
      "lemma": "γιγνώσκω",
      "form": "γίγνωσκε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκετω": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνωσκέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκοντων": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνωσκόντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκετωσαν": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνωσκέτωσαν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωσομαι": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνώσομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωση": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνώσῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωσεται": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνώσεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωσομεθα": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωσεσθε": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνώσεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωσονται": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνώσονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εγνων": [
    {
      "lemma": "γιγνώσκω",
      "form": "ἔγνων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εγνωσ": [
    {
      "lemma": "γιγνώσκω",
      "form": "ἔγνως",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εγνω": [
    {
      "lemma": "γιγνώσκω",
      "form": "ἔγνω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εγνωμεν": [
    {
      "lemma": "γιγνώσκω",
      "form": "ἔγνωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εγνωτε": [
    {
      "lemma": "γιγνώσκω",
      "form": "ἔγνωτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εγνωσαν": [
    {
      "lemma": "γιγνώσκω",
      "form": "ἔγνωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνω": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνῷ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωσ": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνῷς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωμεν": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωτε": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωσιν": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωσι": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνοιην": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνοίην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνοιησ": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνοίης",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνοιη": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνοίη",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνοιμεν": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνοῖμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνοιτε": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνοῖτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνοιεν": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνοῖεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωθι": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶθι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωτω": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνώτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνοντων": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωτωσαν": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνώτωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκειν": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωσεσθαι": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνώσεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωναι": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶναι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκων": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκουσα": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γιγνωσκον": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωσομενοσ": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωσομενη": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνωσομενον": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνουσ": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνούς",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνουσα": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνοῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "γνον": [
    {
      "lemma": "γιγνώσκω",
      "form": "γνόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανω": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανεισ": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανει": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανομεν": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανετε": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανουσιν": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανουσι": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαμβανον": [
    {
      "lemma": "λαμβάνω",
      "form": "ἐλάμβανον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "λαμβάνω",
      "form": "ἐλάμβανον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαμβανεσ": [
    {
      "lemma": "λαμβάνω",
      "form": "ἐλάμβανες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαμβανεν": [
    {
      "lemma": "λαμβάνω",
      "form": "ἐλάμβανε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαμβανε": [
    {
      "lemma": "λαμβάνω",
      "form": "ἐλάμβανε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαμβανομεν": [
    {
      "lemma": "λαμβάνω",
      "form": "ἐλαμβάνομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαμβανετε": [
    {
      "lemma": "λαμβάνω",
      "form": "ἐλαμβάνετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανησ": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανη": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανωμεν": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανητε": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανωσιν": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανωσι": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανοιμι": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανοισ": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανοι": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανοιμεν": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανοιτε": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανοιεν": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανε": [
    {
      "lemma": "λαμβάνω",
      "form": "λάμβανε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανετω": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβανέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανοντων": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβανόντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανετωσαν": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβανέτωσαν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ληψομαι": [
    {
      "lemma": "λαμβάνω",
      "form": "λήψομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ληψη": [
    {
      "lemma": "λαμβάνω",
      "form": "λήψῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ληψεται": [
    {
      "lemma": "λαμβάνω",
      "form": "λήψεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ληψομεθα": [
    {
      "lemma": "λαμβάνω",
      "form": "ληψόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ληψεσθε": [
    {
      "lemma": "λαμβάνω",
      "form": "λήψεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ληψονται": [
    {
      "lemma": "λαμβάνω",
      "form": "λήψονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαβον": [
    {
      "lemma": "λαμβάνω",
      "form": "ἔλαβον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "λαμβάνω",
      "form": "ἔλαβον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαβεσ": [
    {
      "lemma": "λαμβάνω",
      "form": "ἔλαβες",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαβεν": [
    {
      "lemma": "λαμβάνω",
      "form": "ἔλαβε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαβε": [
    {
      "lemma": "λαμβάνω",
      "form": "ἔλαβε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαβομεν": [
    {
      "lemma": "λαμβάνω",
      "form": "ἐλάβομεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαβετε": [
    {
      "lemma": "λαμβάνω",
      "form": "ἐλάβετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβω": [
    {
      "lemma": "λαμβάνω",
      "form": "λάβω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβησ": [
    {
      "lemma": "λαμβάνω",
      "form": "λάβῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβη": [
    {
      "lemma": "λαμβάνω",
      "form": "λάβῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβωμεν": [
    {
      "lemma": "λαμβάνω",
      "form": "λάβωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβητε": [
    {
      "lemma": "λαμβάνω",
      "form": "λάβητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβωσιν": [
    {
      "lemma": "λαμβάνω",
      "form": "λάβωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβωσι": [
    {
      "lemma": "λαμβάνω",
      "form": "λάβωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβοιμι": [
    {
      "lemma": "λαμβάνω",
      "form": "λάβοιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβοισ": [
    {
      "lemma": "λαμβάνω",
      "form": "λάβοις",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβοι": [
    {
      "lemma": "λαμβάνω",
      "form": "λάβοι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβοιμεν": [
    {
      "lemma": "λαμβάνω",
      "form": "λάβοιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβοιτε": [
    {
      "lemma": "λαμβάνω",
      "form": "λάβοιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβοιεν": [
    {
      "lemma": "λαμβάνω",
      "form": "λάβοιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβε": [
    {
      "lemma": "λαμβάνω",
      "form": "λαβέ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβετω": [
    {
      "lemma": "λαμβάνω",
      "form": "λαβέτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβετε": [
    {
      "lemma": "λαμβάνω",
      "form": "λάβετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβοντων": [
    {
      "lemma": "λαμβάνω",
      "form": "λαβόντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβετωσαν": [
    {
      "lemma": "λαμβάνω",
      "form": "λαβέτωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανειν": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ληψεσθαι": [
    {
      "lemma": "λαμβάνω",
      "form": "λήψεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβειν": [
    {
      "lemma": "λαμβάνω",
      "form": "λαβεῖν",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανων": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανουσα": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαμβανον": [
    {
      "lemma": "λαμβάνω",
      "form": "λαμβάνον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ληψομενοσ": [
    {
      "lemma": "λαμβάνω",
      "form": "ληψόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ληψομενη": [
    {
      "lemma": "λαμβάνω",
      "form": "ληψομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ληψομενον": [
    {
      "lemma": "λαμβάνω",
      "form": "ληψόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβων": [
    {
      "lemma": "λαμβάνω",
      "form": "λαβών",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβουσα": [
    {
      "lemma": "λαμβάνω",
      "form": "λαβοῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαβον": [
    {
      "lemma": "λαμβάνω",
      "form": "λαβόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανω": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "λανθάνω",
      "form": "λανθάνω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανεισ": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανει": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανομεν": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανετε": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "λανθάνω",
      "form": "λανθάνετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανουσι": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανουσιν": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελανθανον": [
    {
      "lemma": "λανθάνω",
      "form": "ἐλάνθανον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "λανθάνω",
      "form": "ἐλάνθανον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελανθανεσ": [
    {
      "lemma": "λανθάνω",
      "form": "ἐλάνθανες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελανθανεν": [
    {
      "lemma": "λανθάνω",
      "form": "ἐλάνθανε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελανθανε": [
    {
      "lemma": "λανθάνω",
      "form": "ἐλάνθανε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελανθανομεν": [
    {
      "lemma": "λανθάνω",
      "form": "ἐλανθάνομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελανθανετε": [
    {
      "lemma": "λανθάνω",
      "form": "ἐλανθάνετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανησ": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανη": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανωμεν": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανητε": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανωσιν": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανωσι": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανοιμι": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανοισ": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανοι": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανοιμεν": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανοιτε": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανοιεν": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανε": [
    {
      "lemma": "λανθάνω",
      "form": "λάνθανε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανετω": [
    {
      "lemma": "λανθάνω",
      "form": "λανθανέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανοντων": [
    {
      "lemma": "λανθάνω",
      "form": "λανθανόντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανετωσαν": [
    {
      "lemma": "λανθάνω",
      "form": "λανθανέτωσαν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λησω": [
    {
      "lemma": "λανθάνω",
      "form": "λήσω",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λησεισ": [
    {
      "lemma": "λανθάνω",
      "form": "λήσεις",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λησει": [
    {
      "lemma": "λανθάνω",
      "form": "λήσει",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λησομεν": [
    {
      "lemma": "λανθάνω",
      "form": "λήσομεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λησετε": [
    {
      "lemma": "λανθάνω",
      "form": "λήσετε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λησουσιν": [
    {
      "lemma": "λανθάνω",
      "form": "λήσουσι(ν)",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λησουσι": [
    {
      "lemma": "λανθάνω",
      "form": "λήσουσι(ν)",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαθον": [
    {
      "lemma": "λανθάνω",
      "form": "ἔλαθον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "λανθάνω",
      "form": "ἔλαθον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαθεσ": [
    {
      "lemma": "λανθάνω",
      "form": "ἔλαθες",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαθε": [
    {
      "lemma": "λανθάνω",
      "form": "ἔλαθε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαθεν": [
    {
      "lemma": "λανθάνω",
      "form": "ἔλαθε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαθομεν": [
    {
      "lemma": "λανθάνω",
      "form": "ἐλάθομεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "ελαθετε": [
    {
      "lemma": "λανθάνω",
      "form": "ἐλάθετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθω": [
    {
      "lemma": "λανθάνω",
      "form": "λάθω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθησ": [
    {
      "lemma": "λανθάνω",
      "form": "λάθῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθη": [
    {
      "lemma": "λανθάνω",
      "form": "λάθῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθωμεν": [
    {
      "lemma": "λανθάνω",
      "form": "λάθωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθητε": [
    {
      "lemma": "λανθάνω",
      "form": "λάθητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθωσιν": [
    {
      "lemma": "λανθάνω",
      "form": "λάθωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθωσι": [
    {
      "lemma": "λανθάνω",
      "form": "λάθωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθοιμι": [
    {
      "lemma": "λανθάνω",
      "form": "λάθοιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθοισ": [
    {
      "lemma": "λανθάνω",
      "form": "λάθοις",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθοι": [
    {
      "lemma": "λανθάνω",
      "form": "λάθοι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθοιμεν": [
    {
      "lemma": "λανθάνω",
      "form": "λάθοιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθοιτε": [
    {
      "lemma": "λανθάνω",
      "form": "λάθοιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθοιεν": [
    {
      "lemma": "λανθάνω",
      "form": "λάθοιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθε": [
    {
      "lemma": "λανθάνω",
      "form": "λάθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθετω": [
    {
      "lemma": "λανθάνω",
      "form": "λαθέτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθετε": [
    {
      "lemma": "λανθάνω",
      "form": "λάθετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθοντων": [
    {
      "lemma": "λανθάνω",
      "form": "λαθόντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθετωσαν": [
    {
      "lemma": "λανθάνω",
      "form": "λαθέτωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανειν": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λησειν": [
    {
      "lemma": "λανθάνω",
      "form": "λήσειν",
      "kind": "infinitive",
      "tense": "future",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθειν": [
    {
      "lemma": "λανθάνω",
      "form": "λαθεῖν",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανων": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανουσα": [
    {
      "lemma": "λανθάνω",
      "form": "λανθάνουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λανθανον": [
    {
      "lemma": "λανθάνω",
      "form": "λανθᾶνον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λησων": [
    {
      "lemma": "λανθάνω",
      "form": "λήσων",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λησουσα": [
    {
      "lemma": "λανθάνω",
      "form": "λήσουσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λησον": [
    {
      "lemma": "λανθάνω",
      "form": "λῆσον",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθων": [
    {
      "lemma": "λανθάνω",
      "form": "λαθών",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθουσα": [
    {
      "lemma": "λανθάνω",
      "form": "λαθοῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "λαθον": [
    {
      "lemma": "λανθάνω",
      "form": "λαθόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανω": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μανθάνω",
      "form": "μανθάνω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανεισ": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανει": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανομεν": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανετε": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μανθάνω",
      "form": "μανθάνετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανουσιν": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανουσι": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμανθανον": [
    {
      "lemma": "μανθάνω",
      "form": "ἐμάνθανον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μανθάνω",
      "form": "ἐμάνθανον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμανθανεσ": [
    {
      "lemma": "μανθάνω",
      "form": "ἐμάνθανες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμανθανεν": [
    {
      "lemma": "μανθάνω",
      "form": "ἐμάνθανε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμανθανε": [
    {
      "lemma": "μανθάνω",
      "form": "ἐμάνθανε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμανθανομεν": [
    {
      "lemma": "μανθάνω",
      "form": "ἐμανθάνομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμανθανετε": [
    {
      "lemma": "μανθάνω",
      "form": "ἐμανθάνετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανησ": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανη": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανωμεν": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανητε": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανωσιν": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανωσι": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανοιμι": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανοισ": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανοι": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανοιμεν": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανοιτε": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανοιεν": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανε": [
    {
      "lemma": "μανθάνω",
      "form": "μάνθανε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανετω": [
    {
      "lemma": "μανθάνω",
      "form": "μανθανέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανοντων": [
    {
      "lemma": "μανθάνω",
      "form": "μανθανόντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανετωσαν": [
    {
      "lemma": "μανθάνω",
      "form": "μανθανέτωσαν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθησομαι": [
    {
      "lemma": "μανθάνω",
      "form": "μαθήσομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθηση": [
    {
      "lemma": "μανθάνω",
      "form": "μαθήσῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθησεται": [
    {
      "lemma": "μανθάνω",
      "form": "μαθήσεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθησομεθα": [
    {
      "lemma": "μανθάνω",
      "form": "μαθησόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθησεσθε": [
    {
      "lemma": "μανθάνω",
      "form": "μαθήσεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθησονται": [
    {
      "lemma": "μανθάνω",
      "form": "μαθήσονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμαθον": [
    {
      "lemma": "μανθάνω",
      "form": "ἔμαθον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μανθάνω",
      "form": "ἔμαθον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμαθεσ": [
    {
      "lemma": "μανθάνω",
      "form": "ἔμαθες",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμαθεν": [
    {
      "lemma": "μανθάνω",
      "form": "ἔμαθε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμαθε": [
    {
      "lemma": "μανθάνω",
      "form": "ἔμαθε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμαθομεν": [
    {
      "lemma": "μανθάνω",
      "form": "ἐμάθομεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμαθετε": [
    {
      "lemma": "μανθάνω",
      "form": "ἐμάθετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθω": [
    {
      "lemma": "μανθάνω",
      "form": "μάθω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθησ": [
    {
      "lemma": "μανθάνω",
      "form": "μάθῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθη": [
    {
      "lemma": "μανθάνω",
      "form": "μάθῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθωμεν": [
    {
      "lemma": "μανθάνω",
      "form": "μάθωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθητε": [
    {
      "lemma": "μανθάνω",
      "form": "μάθητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθωσιν": [
    {
      "lemma": "μανθάνω",
      "form": "μάθωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθωσι": [
    {
      "lemma": "μανθάνω",
      "form": "μάθωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθοιμι": [
    {
      "lemma": "μανθάνω",
      "form": "μάθοιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθοισ": [
    {
      "lemma": "μανθάνω",
      "form": "μάθοις",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθοι": [
    {
      "lemma": "μανθάνω",
      "form": "μάθοι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθοιμεν": [
    {
      "lemma": "μανθάνω",
      "form": "μάθοιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθοιτε": [
    {
      "lemma": "μανθάνω",
      "form": "μάθοιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθοιεν": [
    {
      "lemma": "μανθάνω",
      "form": "μάθοιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθε": [
    {
      "lemma": "μανθάνω",
      "form": "μάθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθετω": [
    {
      "lemma": "μανθάνω",
      "form": "μαθέτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθετε": [
    {
      "lemma": "μανθάνω",
      "form": "μάθετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθοντων": [
    {
      "lemma": "μανθάνω",
      "form": "μαθόντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθετωσαν": [
    {
      "lemma": "μανθάνω",
      "form": "μαθέτωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανειν": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθησεσθαι": [
    {
      "lemma": "μανθάνω",
      "form": "μαθήσεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθειν": [
    {
      "lemma": "μανθάνω",
      "form": "μαθεῖν",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανων": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανουσα": [
    {
      "lemma": "μανθάνω",
      "form": "μανθάνουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μανθανον": [
    {
      "lemma": "μανθάνω",
      "form": "μανθᾶνον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθησομενοσ": [
    {
      "lemma": "μανθάνω",
      "form": "μαθησόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθησομενη": [
    {
      "lemma": "μανθάνω",
      "form": "μαθησομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθησομενον": [
    {
      "lemma": "μανθάνω",
      "form": "μαθησόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθων": [
    {
      "lemma": "μανθάνω",
      "form": "μαθών",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθουσα": [
    {
      "lemma": "μανθάνω",
      "form": "μαθοῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μαθον": [
    {
      "lemma": "μανθάνω",
      "form": "μαθόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενω": [
    {
      "lemma": "μένω",
      "form": "μένω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μένω",
      "form": "μένω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μένω",
      "form": "μενῶ",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενεισ": [
    {
      "lemma": "μένω",
      "form": "μένεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μένω",
      "form": "μενεῖς",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενει": [
    {
      "lemma": "μένω",
      "form": "μένει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μένω",
      "form": "μενεῖ",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενομεν": [
    {
      "lemma": "μένω",
      "form": "μένομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενετε": [
    {
      "lemma": "μένω",
      "form": "μένετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μένω",
      "form": "μένετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενουσιν": [
    {
      "lemma": "μένω",
      "form": "μένουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μένω",
      "form": "μενοῦσι(ν)",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενουσι": [
    {
      "lemma": "μένω",
      "form": "μένουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μένω",
      "form": "μενοῦσι(ν)",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμενον": [
    {
      "lemma": "μένω",
      "form": "ἔμενον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μένω",
      "form": "ἔμενον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμενεσ": [
    {
      "lemma": "μένω",
      "form": "ἔμενες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμενεν": [
    {
      "lemma": "μένω",
      "form": "ἔμενε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμενε": [
    {
      "lemma": "μένω",
      "form": "ἔμενε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμενομεν": [
    {
      "lemma": "μένω",
      "form": "ἐμένομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμενετε": [
    {
      "lemma": "μένω",
      "form": "ἐμένετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενησ": [
    {
      "lemma": "μένω",
      "form": "μένῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενη": [
    {
      "lemma": "μένω",
      "form": "μένῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενωμεν": [
    {
      "lemma": "μένω",
      "form": "μένωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενητε": [
    {
      "lemma": "μένω",
      "form": "μένητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενωσιν": [
    {
      "lemma": "μένω",
      "form": "μένωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενωσι": [
    {
      "lemma": "μένω",
      "form": "μένωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενοιμι": [
    {
      "lemma": "μένω",
      "form": "μένοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενοισ": [
    {
      "lemma": "μένω",
      "form": "μένοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενοι": [
    {
      "lemma": "μένω",
      "form": "μένοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενοιμεν": [
    {
      "lemma": "μένω",
      "form": "μένοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενοιτε": [
    {
      "lemma": "μένω",
      "form": "μένοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενοιεν": [
    {
      "lemma": "μένω",
      "form": "μένοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενε": [
    {
      "lemma": "μένω",
      "form": "μένε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενετω": [
    {
      "lemma": "μένω",
      "form": "μενέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενοντων": [
    {
      "lemma": "μένω",
      "form": "μενόντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενετωσαν": [
    {
      "lemma": "μένω",
      "form": "μενέτωσαν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενουμεν": [
    {
      "lemma": "μένω",
      "form": "μενοῦμεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενειτε": [
    {
      "lemma": "μένω",
      "form": "μενεῖτε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμεινα": [
    {
      "lemma": "μένω",
      "form": "ἔμεινα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμεινασ": [
    {
      "lemma": "μένω",
      "form": "ἔμεινας",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμεινεν": [
    {
      "lemma": "μένω",
      "form": "ἔμεινε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμεινε": [
    {
      "lemma": "μένω",
      "form": "ἔμεινε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμειναμεν": [
    {
      "lemma": "μένω",
      "form": "ἐμείναμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμεινατε": [
    {
      "lemma": "μένω",
      "form": "ἐμείνατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "εμειναν": [
    {
      "lemma": "μένω",
      "form": "ἔμειναν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μεινω": [
    {
      "lemma": "μένω",
      "form": "μείνω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μεινησ": [
    {
      "lemma": "μένω",
      "form": "μείνῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μεινη": [
    {
      "lemma": "μένω",
      "form": "μείνῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μεινωμεν": [
    {
      "lemma": "μένω",
      "form": "μείνωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μεινητε": [
    {
      "lemma": "μένω",
      "form": "μείνητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μεινωσιν": [
    {
      "lemma": "μένω",
      "form": "μείνωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μεινωσι": [
    {
      "lemma": "μένω",
      "form": "μείνωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μειναιμι": [
    {
      "lemma": "μένω",
      "form": "μείναιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μειναισ": [
    {
      "lemma": "μένω",
      "form": "μείναις",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μειναι": [
    {
      "lemma": "μένω",
      "form": "μεῖναι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μένω",
      "form": "μεῖναι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μειναιμεν": [
    {
      "lemma": "μένω",
      "form": "μεῖναιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μειναιτε": [
    {
      "lemma": "μένω",
      "form": "μεῖναιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μειναιεν": [
    {
      "lemma": "μένω",
      "form": "μεῖναιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μεινον": [
    {
      "lemma": "μένω",
      "form": "μεῖνον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μεινατω": [
    {
      "lemma": "μένω",
      "form": "μεινάτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μεινατε": [
    {
      "lemma": "μένω",
      "form": "μείνατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μειναντων": [
    {
      "lemma": "μένω",
      "form": "μεινάντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μεινατωσαν": [
    {
      "lemma": "μένω",
      "form": "μεινάτωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενειν": [
    {
      "lemma": "μένω",
      "form": "μένειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μένω",
      "form": "μενεῖν",
      "kind": "infinitive",
      "tense": "future",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενων": [
    {
      "lemma": "μένω",
      "form": "μένων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μένω",
      "form": "μενῶν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενουσα": [
    {
      "lemma": "μένω",
      "form": "μένουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    },
    {
      "lemma": "μένω",
      "form": "μενοῦσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενον": [
    {
      "lemma": "μένω",
      "form": "μένον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μενουν": [
    {
      "lemma": "μένω",
      "form": "μενοῦν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μεινασ": [
    {
      "lemma": "μένω",
      "form": "μείνας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "masc",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μεινασα": [
    {
      "lemma": "μένω",
      "form": "μείνασα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "fem",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ],
  "μειναν": [
    {
      "lemma": "μένω",
      "form": "μεῖναν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "gender": "neut",
      "case": "nom",
      "number": "sg",
      "source": "stage15-deep-audit",
      "displayPriority": 7
    }
  ]
};
  for (const [key, entries] of Object.entries(patch)) {
    const existing = Array.isArray(window.FORM_INDEX[key]) ? window.FORM_INDEX[key].slice() : [];
    const seen = new Set(existing.map(entrySig));
    for (const entry of entries) {
      const sig = entrySig(entry);
      if (!seen.has(sig)) { existing.push(entry); seen.add(sig); }
    }
    window.FORM_INDEX[key] = existing;
  }
})();
