(function(){
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase().trim().replace(/[^\p{L}]/gu,''); }
  function entrySig(e){ return [e.lemma,e.form,e.kind,e.tense,e.voice,e.mood,e.person||'',e.gender||'',e.case||'',e.number||''].join('|'); }
  window.FORM_INDEX = window.FORM_INDEX || {};
  const lemmas = ["λείπω", "εὑρίσκω", "πυνθάνομαι", "τυγχάνω", "ὁράω", "ἔχω"];
  const normLemmaSet = new Set(lemmas.map(normalizeGreek));
  for(const [key, bucket] of Object.entries(window.FORM_INDEX)){ if(!Array.isArray(bucket)) continue; window.FORM_INDEX[key] = bucket.filter(entry => !normLemmaSet.has(normalizeGreek(entry.lemma||''))); }
  const patch = {
  "λειπω": [
    {
      "lemma": "λείπω",
      "form": "λείπω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "λείπω",
      "form": "λείπω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "λειπεισ": [
    {
      "lemma": "λείπω",
      "form": "λείπεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "λειπει": [
    {
      "lemma": "λείπω",
      "form": "λείπει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "λειπομεν": [
    {
      "lemma": "λείπω",
      "form": "λείπομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "λειπετε": [
    {
      "lemma": "λείπω",
      "form": "λείπετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "λείπω",
      "form": "λείπετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "λειπουσιν": [
    {
      "lemma": "λείπω",
      "form": "λείπουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "λείπω",
      "form": "λείπουσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "λειπουσι": [
    {
      "lemma": "λείπω",
      "form": "λείπουσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ελειπον": [
    {
      "lemma": "λείπω",
      "form": "ἔλειπον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "λείπω",
      "form": "ἔλειπον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ελειπεσ": [
    {
      "lemma": "λείπω",
      "form": "ἔλειπες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ελειπεν": [
    {
      "lemma": "λείπω",
      "form": "ἔλειπε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "λείπω",
      "form": "ἔλειπεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ελειπε": [
    {
      "lemma": "λείπω",
      "form": "ἔλειπε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ελειπομεν": [
    {
      "lemma": "λείπω",
      "form": "ἐλείπομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ελειπετε": [
    {
      "lemma": "λείπω",
      "form": "ἐλείπετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "λειπησ": [
    {
      "lemma": "λείπω",
      "form": "λείπῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "λειπη": [
    {
      "lemma": "λείπω",
      "form": "λείπῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "λειπωμεν": [
    {
      "lemma": "λείπω",
      "form": "λείπωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "λειπητε": [
    {
      "lemma": "λείπω",
      "form": "λείπητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "λειπωσιν": [
    {
      "lemma": "λείπω",
      "form": "λείπωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "λείπω",
      "form": "λείπωσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "λειπωσι": [
    {
      "lemma": "λείπω",
      "form": "λείπωσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "λειποιμι": [
    {
      "lemma": "λείπω",
      "form": "λείποιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "λειποισ": [
    {
      "lemma": "λείπω",
      "form": "λείποις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "λειποι": [
    {
      "lemma": "λείπω",
      "form": "λείποι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "λειποιμεν": [
    {
      "lemma": "λείπω",
      "form": "λείποιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "λειποιτε": [
    {
      "lemma": "λείπω",
      "form": "λείποιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "λειποιεν": [
    {
      "lemma": "λείπω",
      "form": "λείποιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "λειπε": [
    {
      "lemma": "λείπω",
      "form": "λεῖπε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "λειπετω": [
    {
      "lemma": "λείπω",
      "form": "λειπέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "λειποντων": [
    {
      "lemma": "λείπω",
      "form": "λειπόντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "λειπετωσαν": [
    {
      "lemma": "λείπω",
      "form": "λειπέτωσαν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "λειψω": [
    {
      "lemma": "λείπω",
      "form": "λείψω",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "λειψεισ": [
    {
      "lemma": "λείπω",
      "form": "λείψεις",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "λειψει": [
    {
      "lemma": "λείπω",
      "form": "λείψει",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "λειψομεν": [
    {
      "lemma": "λείπω",
      "form": "λείψομεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "λειψετε": [
    {
      "lemma": "λείπω",
      "form": "λείψετε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "λειψουσιν": [
    {
      "lemma": "λείπω",
      "form": "λείψουσι(ν)",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "λείπω",
      "form": "λείψουσιν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "λειψουσι": [
    {
      "lemma": "λείπω",
      "form": "λείψουσι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ελιπον": [
    {
      "lemma": "λείπω",
      "form": "ἔλιπον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "λείπω",
      "form": "ἔλιπον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ελιπεσ": [
    {
      "lemma": "λείπω",
      "form": "ἔλιπες",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ελιπεν": [
    {
      "lemma": "λείπω",
      "form": "ἔλιπε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "λείπω",
      "form": "ἔλιπεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ελιπε": [
    {
      "lemma": "λείπω",
      "form": "ἔλιπε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ελιπομεν": [
    {
      "lemma": "λείπω",
      "form": "ἐλίπομεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ελιπετε": [
    {
      "lemma": "λείπω",
      "form": "ἐλίπετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "λιπω": [
    {
      "lemma": "λείπω",
      "form": "λίπω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "λιπησ": [
    {
      "lemma": "λείπω",
      "form": "λίπῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "λιπη": [
    {
      "lemma": "λείπω",
      "form": "λίπῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "λιπωμεν": [
    {
      "lemma": "λείπω",
      "form": "λίπωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "λιπητε": [
    {
      "lemma": "λείπω",
      "form": "λίπητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "λιπωσιν": [
    {
      "lemma": "λείπω",
      "form": "λίπωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "λείπω",
      "form": "λίπωσιν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "λιπωσι": [
    {
      "lemma": "λείπω",
      "form": "λίπωσι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "λιποιμι": [
    {
      "lemma": "λείπω",
      "form": "λίποιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "λιποισ": [
    {
      "lemma": "λείπω",
      "form": "λίποις",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "λιποι": [
    {
      "lemma": "λείπω",
      "form": "λίποι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "λιποιμεν": [
    {
      "lemma": "λείπω",
      "form": "λίποιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "λιποιτε": [
    {
      "lemma": "λείπω",
      "form": "λίποιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "λιποιεν": [
    {
      "lemma": "λείπω",
      "form": "λίποιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "λιπε": [
    {
      "lemma": "λείπω",
      "form": "λίπε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "λιπετω": [
    {
      "lemma": "λείπω",
      "form": "λιπέτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "λιπετε": [
    {
      "lemma": "λείπω",
      "form": "λίπετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "λιποντων": [
    {
      "lemma": "λείπω",
      "form": "λιπόντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "λιπετωσαν": [
    {
      "lemma": "λείπω",
      "form": "λιπέτωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "λειπειν": [
    {
      "lemma": "λείπω",
      "form": "λείπειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "λειψειν": [
    {
      "lemma": "λείπω",
      "form": "λείψειν",
      "kind": "infinitive",
      "tense": "future",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "λιπειν": [
    {
      "lemma": "λείπω",
      "form": "λιπεῖν",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "λειπων": [
    {
      "lemma": "λείπω",
      "form": "λείπων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "λειπουσα": [
    {
      "lemma": "λείπω",
      "form": "λείπουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "λειπον": [
    {
      "lemma": "λείπω",
      "form": "λεῖπον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "λειψων": [
    {
      "lemma": "λείπω",
      "form": "λείψων",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "λειψουσα": [
    {
      "lemma": "λείπω",
      "form": "λείψουσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "λειψον": [
    {
      "lemma": "λείπω",
      "form": "λεῖψον",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "λιπων": [
    {
      "lemma": "λείπω",
      "form": "λιπών",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "λιπουσα": [
    {
      "lemma": "λείπω",
      "form": "λιποῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "λιπον": [
    {
      "lemma": "λείπω",
      "form": "λιπόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "ευρισκω": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "ευρισκεισ": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ευρισκει": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ευρισκομεν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ευρισκετε": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "ευρισκουσιν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκουσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ευρισκουσι": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκουσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ηυρισκον": [
    {
      "lemma": "εὑρίσκω",
      "form": "ηὕρισκον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "εὑρίσκω",
      "form": "ηὕρισκον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ηυρισκεσ": [
    {
      "lemma": "εὑρίσκω",
      "form": "ηὕρισκες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ηυρισκεν": [
    {
      "lemma": "εὑρίσκω",
      "form": "ηὕρισκε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "εὑρίσκω",
      "form": "ηὕρισκεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ηυρισκε": [
    {
      "lemma": "εὑρίσκω",
      "form": "ηὕρισκε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ηυρισκομεν": [
    {
      "lemma": "εὑρίσκω",
      "form": "ηὑρίσκομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ηυρισκετε": [
    {
      "lemma": "εὑρίσκω",
      "form": "ηὑρίσκετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "ευρισκησ": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ευρισκη": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ευρισκωμεν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ευρισκητε": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "ευρισκωσιν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκωσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ευρισκωσι": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκωσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ευρισκοιμι": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "ευρισκοισ": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ευρισκοι": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ευρισκοιμεν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ευρισκοιτε": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "ευρισκοιεν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ευρισκε": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕρισκε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ευρισκετω": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρισκέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ευρισκοντων": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρισκόντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ευρισκετωσαν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρισκέτωσαν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ευρησω": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρήσω",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "ευρησεισ": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρήσεις",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ευρησει": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρήσει",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ευρησομεν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρήσομεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ευρησετε": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρήσετε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "ευρησουσιν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρήσουσι(ν)",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρήσουσιν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ευρησουσι": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρήσουσι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ηυρον": [
    {
      "lemma": "εὑρίσκω",
      "form": "ηὗρον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "εὑρίσκω",
      "form": "ηὗρον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ηυρεσ": [
    {
      "lemma": "εὑρίσκω",
      "form": "ηὗρες",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ηυρεν": [
    {
      "lemma": "εὑρίσκω",
      "form": "ηὗρε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "εὑρίσκω",
      "form": "ηὗρεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ηυρε": [
    {
      "lemma": "εὑρίσκω",
      "form": "ηὗρε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ηυρομεν": [
    {
      "lemma": "εὑρίσκω",
      "form": "ηὕρομεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ηυρετε": [
    {
      "lemma": "εὑρίσκω",
      "form": "ηὕρετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "ευρω": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕρω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "ευρησ": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕρῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ευρη": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕρῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ευρωμεν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕρωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ευρητε": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕρητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "ευρωσιν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕρωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "εὑρίσκω",
      "form": "εὕρωσιν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ευρωσι": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕρωσι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ευροιμι": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕροιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "ευροισ": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕροις",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ευροι": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕροι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ευροιμεν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕροιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ευροιτε": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕροιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "ευροιεν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕροιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ευρε": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕρε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ευρετω": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρέτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ευρετε": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὕρετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "ευροντων": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρόντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ευρετωσαν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρέτωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ευρισκειν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "ευρησειν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρήσειν",
      "kind": "infinitive",
      "tense": "future",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "ευρειν": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρεῖν",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "ευρισκων": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "ευρισκουσα": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "ευρισκον": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρίσκον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "ευρησων": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρήσων",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "ευρησουσα": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρήσουσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "ευρησον": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρῆσον",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "ευρων": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρών",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "ευρουσα": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑροῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "ευρον": [
    {
      "lemma": "εὑρίσκω",
      "form": "εὑρόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "πυνθανομαι": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθάνομαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "πυνθανη": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθάνῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθάνῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "πυνθανεται": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθάνεται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "πυνθανομεθα": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθανόμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "πυνθανεσθε": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθάνεσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθάνεσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "πυνθανονται": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθάνονται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "επυνθανομην": [
    {
      "lemma": "πυνθάνομαι",
      "form": "ἐπυνθανόμην",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "επυνθανου": [
    {
      "lemma": "πυνθάνομαι",
      "form": "ἐπυνθάνου",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "επυνθανετο": [
    {
      "lemma": "πυνθάνομαι",
      "form": "ἐπυνθάνετο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "επυνθανομεθα": [
    {
      "lemma": "πυνθάνομαι",
      "form": "ἐπυνθανόμεθα",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "επυνθανεσθε": [
    {
      "lemma": "πυνθάνομαι",
      "form": "ἐπυνθάνεσθε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "επυνθανοντο": [
    {
      "lemma": "πυνθάνομαι",
      "form": "ἐπυνθάνοντο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "πυνθανωμαι": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθάνωμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "πυνθανηται": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθάνηται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "πυνθανωμεθα": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθανώμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "πυνθανησθε": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθάνησθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "πυνθανωνται": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθάνωνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "πυνθανοιμην": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθανοίμην",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "πυνθανοιο": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθανοῖο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "πυνθανοιτο": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθανοῖτο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "πυνθανοιμεθα": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθανοίμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "πυνθανοισθε": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθανοῖσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "πυνθανοιντο": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθανοῖντο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "πυνθανου": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθάνου",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "πυνθανεσθω": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθανέσθω",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "πυνθανεσθων": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθανέσθων",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "πυνθανεσθωσαν": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθανέσθωσαν",
      "kind": "finite",
      "tense": "present",
      "voice": "middle",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "πευσομαι": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πεύσομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "πευση": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πεύσῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "πευσεται": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πεύσεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "πευσομεθα": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πευσόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "πευσεσθε": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πεύσεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "πευσονται": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πεύσονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "επυθομην": [
    {
      "lemma": "πυνθάνομαι",
      "form": "ἐπυθόμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "επυθου": [
    {
      "lemma": "πυνθάνομαι",
      "form": "ἐπύθου",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "επυθετο": [
    {
      "lemma": "πυνθάνομαι",
      "form": "ἐπύθετο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "επυθομεθα": [
    {
      "lemma": "πυνθάνομαι",
      "form": "ἐπυθόμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "επυθεσθε": [
    {
      "lemma": "πυνθάνομαι",
      "form": "ἐπύθεσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "επυθοντο": [
    {
      "lemma": "πυνθάνομαι",
      "form": "ἐπύθοντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "πυθωμαι": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πύθωμαι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "πυθη": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πύθῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "πυθηται": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πύθηται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "πυθωμεθα": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυθώμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "πυθησθε": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πύθησθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "πυθωνται": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πύθωνται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "πυθοιμην": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυθοίμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "πυθοιο": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυθοῖο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "πυθοιτο": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυθοῖτο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "πυθοιμεθα": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυθοίμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "πυθοισθε": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυθοῖσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "πυθοιντο": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυθοῖντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "πυθου": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πύθου",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "πυθεσθω": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυθέσθω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "πυθεσθε": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πύθεσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "πυθεσθων": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυθέσθων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "πυθεσθωσαν": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυθέσθωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "πυνθανεσθαι": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθάνεσθαι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "πευσεσθαι": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πεύσεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "πυθεσθαι": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυθέσθαι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "πυνθανομενοσ": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθανόμενος",
      "kind": "participle",
      "tense": "present",
      "voice": "middle",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "πυνθανομενη": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθανομένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "πυνθανομενον": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυνθανόμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "πευσομενοσ": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πευσόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "πευσομενη": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πευσομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "πευσομενον": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πευσόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "πυθομενοσ": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυθόμενος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "πυθομενη": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυθομένη",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "πυθομενον": [
    {
      "lemma": "πυνθάνομαι",
      "form": "πυθόμενον",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "τυγχανω": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "τυγχανεισ": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "τυγχανει": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "τυγχανομεν": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "τυγχανετε": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "τυγχανουσιν": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνουσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "τυγχανουσι": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνουσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ετυγχανον": [
    {
      "lemma": "τυγχάνω",
      "form": "ἐτύγχανον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "τυγχάνω",
      "form": "ἐτύγχανον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ετυγχανεσ": [
    {
      "lemma": "τυγχάνω",
      "form": "ἐτύγχανες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ετυγχανεν": [
    {
      "lemma": "τυγχάνω",
      "form": "ἐτύγχανε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "τυγχάνω",
      "form": "ἐτύγχανεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ετυγχανε": [
    {
      "lemma": "τυγχάνω",
      "form": "ἐτύγχανε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ετυγχανομεν": [
    {
      "lemma": "τυγχάνω",
      "form": "ἐτυγχάνομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ετυγχανετε": [
    {
      "lemma": "τυγχάνω",
      "form": "ἐτυγχάνετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "τευξομαι": [
    {
      "lemma": "τυγχάνω",
      "form": "τεύξομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "τευξη": [
    {
      "lemma": "τυγχάνω",
      "form": "τεύξῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "τευξεται": [
    {
      "lemma": "τυγχάνω",
      "form": "τεύξεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "τευξομεθα": [
    {
      "lemma": "τυγχάνω",
      "form": "τευξόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "τευξεσθε": [
    {
      "lemma": "τυγχάνω",
      "form": "τεύξεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "τευξονται": [
    {
      "lemma": "τυγχάνω",
      "form": "τεύξονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ετυχον": [
    {
      "lemma": "τυγχάνω",
      "form": "ἔτυχον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "τυγχάνω",
      "form": "ἔτυχον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ετυχεσ": [
    {
      "lemma": "τυγχάνω",
      "form": "ἔτυχες",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ετυχεν": [
    {
      "lemma": "τυγχάνω",
      "form": "ἔτυχε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "τυγχάνω",
      "form": "ἔτυχεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ετυχε": [
    {
      "lemma": "τυγχάνω",
      "form": "ἔτυχε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ετυχομεν": [
    {
      "lemma": "τυγχάνω",
      "form": "ἐτύχομεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ετυχετε": [
    {
      "lemma": "τυγχάνω",
      "form": "ἐτύχετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "τυγχανησ": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "τυγχανη": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "τυγχανωμεν": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "τυγχανητε": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "τυγχανωσιν": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνωσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "τυγχανωσι": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνωσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "τυχω": [
    {
      "lemma": "τυγχάνω",
      "form": "τύχω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "τυχησ": [
    {
      "lemma": "τυγχάνω",
      "form": "τύχῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "τυχη": [
    {
      "lemma": "τυγχάνω",
      "form": "τύχῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "τυχωμεν": [
    {
      "lemma": "τυγχάνω",
      "form": "τύχωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "τυχητε": [
    {
      "lemma": "τυγχάνω",
      "form": "τύχητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "τυχωσιν": [
    {
      "lemma": "τυγχάνω",
      "form": "τύχωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "τυγχάνω",
      "form": "τύχωσιν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "τυχωσι": [
    {
      "lemma": "τυγχάνω",
      "form": "τύχωσι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "τυγχανε": [
    {
      "lemma": "τυγχάνω",
      "form": "τύγχανε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "τυγχανετω": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχανέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "τυγχανοντων": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχανόντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "τυχε": [
    {
      "lemma": "τυγχάνω",
      "form": "τύχε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "τυχετω": [
    {
      "lemma": "τυγχάνω",
      "form": "τυχέτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "τυχετε": [
    {
      "lemma": "τυγχάνω",
      "form": "τύχετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "τυχοντων": [
    {
      "lemma": "τυγχάνω",
      "form": "τυχόντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "τυγχανειν": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "τευξεσθαι": [
    {
      "lemma": "τυγχάνω",
      "form": "τεύξεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive",
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "τυχειν": [
    {
      "lemma": "τυγχάνω",
      "form": "τυχεῖν",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "τυγχανων": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "τυγχανουσα": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "τυγχανον": [
    {
      "lemma": "τυγχάνω",
      "form": "τυγχάνον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "τευξομενοσ": [
    {
      "lemma": "τυγχάνω",
      "form": "τευξόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "τευξομενη": [
    {
      "lemma": "τυγχάνω",
      "form": "τευξομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "τευξομενον": [
    {
      "lemma": "τυγχάνω",
      "form": "τευξόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "τυχων": [
    {
      "lemma": "τυγχάνω",
      "form": "τυχών",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "τυχουσα": [
    {
      "lemma": "τυγχάνω",
      "form": "τυχοῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "τυχον": [
    {
      "lemma": "τυγχάνω",
      "form": "τυχόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "ορω": [
    {
      "lemma": "ὁράω",
      "form": "ὁρῶ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "ορασ": [
    {
      "lemma": "ὁράω",
      "form": "ὁρᾷς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ορα": [
    {
      "lemma": "ὁράω",
      "form": "ὁρᾷ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ορωμεν": [
    {
      "lemma": "ὁράω",
      "form": "ὁρῶμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ορατε": [
    {
      "lemma": "ὁράω",
      "form": "ὁρᾶτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "ορωσιν": [
    {
      "lemma": "ὁράω",
      "form": "ὁρῶσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ὁράω",
      "form": "ὁρῶσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ορωσι": [
    {
      "lemma": "ὁράω",
      "form": "ὁρῶσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "οψομαι": [
    {
      "lemma": "ὁράω",
      "form": "ὄψομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "οψη": [
    {
      "lemma": "ὁράω",
      "form": "ὄψῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "οψεται": [
    {
      "lemma": "ὁράω",
      "form": "ὄψεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "οψομεθα": [
    {
      "lemma": "ὁράω",
      "form": "ὀψόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "οψεσθε": [
    {
      "lemma": "ὁράω",
      "form": "ὄψεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "οψονται": [
    {
      "lemma": "ὁράω",
      "form": "ὄψονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ειδον": [
    {
      "lemma": "ὁράω",
      "form": "εἶδον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ὁράω",
      "form": "εἶδον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ειδεσ": [
    {
      "lemma": "ὁράω",
      "form": "εἶδες",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ειδεν": [
    {
      "lemma": "ὁράω",
      "form": "εἶδε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ὁράω",
      "form": "εἶδεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ειδε": [
    {
      "lemma": "ὁράω",
      "form": "εἶδε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ειδομεν": [
    {
      "lemma": "ὁράω",
      "form": "εἴδομεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ειδετε": [
    {
      "lemma": "ὁράω",
      "form": "εἴδετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "οραν": [
    {
      "lemma": "ὁράω",
      "form": "ὁρᾶν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "ιδειν": [
    {
      "lemma": "ὁράω",
      "form": "ἰδεῖν",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive",
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "ορων": [
    {
      "lemma": "ὁράω",
      "form": "ὁρῶν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "ιδων": [
    {
      "lemma": "ὁράω",
      "form": "ἰδών",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": "participle",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εχω": [
    {
      "lemma": "ἔχω",
      "form": "ἔχω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ἔχω",
      "form": "ἔχω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εχεισ": [
    {
      "lemma": "ἔχω",
      "form": "ἔχεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εχει": [
    {
      "lemma": "ἔχω",
      "form": "ἔχει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εχομεν": [
    {
      "lemma": "ἔχω",
      "form": "ἔχομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εχετε": [
    {
      "lemma": "ἔχω",
      "form": "ἔχετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ἔχω",
      "form": "ἔχετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εχουσιν": [
    {
      "lemma": "ἔχω",
      "form": "ἔχουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ἔχω",
      "form": "ἔχουσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εχουσι": [
    {
      "lemma": "ἔχω",
      "form": "ἔχουσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εχησ": [
    {
      "lemma": "ἔχω",
      "form": "ἔχῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εχη": [
    {
      "lemma": "ἔχω",
      "form": "ἔχῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ἔχω",
      "form": "ἔχῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ἔχω",
      "form": "ἔχῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εχωμεν": [
    {
      "lemma": "ἔχω",
      "form": "ἔχωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εχητε": [
    {
      "lemma": "ἔχω",
      "form": "ἔχητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εχωσιν": [
    {
      "lemma": "ἔχω",
      "form": "ἔχωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ἔχω",
      "form": "ἔχωσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εχωσι": [
    {
      "lemma": "ἔχω",
      "form": "ἔχωσι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εχοιμι": [
    {
      "lemma": "ἔχω",
      "form": "ἔχοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εχοισ": [
    {
      "lemma": "ἔχω",
      "form": "ἔχοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εχοι": [
    {
      "lemma": "ἔχω",
      "form": "ἔχοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εχοιμεν": [
    {
      "lemma": "ἔχω",
      "form": "ἔχοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εχοιτε": [
    {
      "lemma": "ἔχω",
      "form": "ἔχοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εχοιεν": [
    {
      "lemma": "ἔχω",
      "form": "ἔχοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εχε": [
    {
      "lemma": "ἔχω",
      "form": "ἔχε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εχετω": [
    {
      "lemma": "ἔχω",
      "form": "ἐχέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εχοντων": [
    {
      "lemma": "ἔχω",
      "form": "ἐχόντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ειχον": [
    {
      "lemma": "ἔχω",
      "form": "εἶχον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ἔχω",
      "form": "εἶχον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ειχεσ": [
    {
      "lemma": "ἔχω",
      "form": "εἶχες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ειχεν": [
    {
      "lemma": "ἔχω",
      "form": "εἶχε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ἔχω",
      "form": "εἶχεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ειχε": [
    {
      "lemma": "ἔχω",
      "form": "εἶχε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ειχομεν": [
    {
      "lemma": "ἔχω",
      "form": "εἴχομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ειχετε": [
    {
      "lemma": "ἔχω",
      "form": "εἴχετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εξω": [
    {
      "lemma": "ἔχω",
      "form": "ἕξω",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εξεισ": [
    {
      "lemma": "ἔχω",
      "form": "ἕξεις",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εξει": [
    {
      "lemma": "ἔχω",
      "form": "ἕξει",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εξομεν": [
    {
      "lemma": "ἔχω",
      "form": "ἕξομεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εξετε": [
    {
      "lemma": "ἔχω",
      "form": "ἕξετε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εξουσιν": [
    {
      "lemma": "ἔχω",
      "form": "ἕξουσι(ν)",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ἔχω",
      "form": "ἕξουσιν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εξουσι": [
    {
      "lemma": "ἔχω",
      "form": "ἕξουσι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εξοιμι": [
    {
      "lemma": "ἔχω",
      "form": "ἕξοιμι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εξοισ": [
    {
      "lemma": "ἔχω",
      "form": "ἕξοις",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εξοι": [
    {
      "lemma": "ἔχω",
      "form": "ἕξοι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εξοιμεν": [
    {
      "lemma": "ἔχω",
      "form": "ἑξοίμεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εξοιτε": [
    {
      "lemma": "ἔχω",
      "form": "ἕξοιτε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εξοιεν": [
    {
      "lemma": "ἔχω",
      "form": "ἕξοιεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "σχησω": [
    {
      "lemma": "ἔχω",
      "form": "σχήσω",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "σχησεισ": [
    {
      "lemma": "ἔχω",
      "form": "σχήσεις",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "σχησει": [
    {
      "lemma": "ἔχω",
      "form": "σχήσει",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "σχησομεν": [
    {
      "lemma": "ἔχω",
      "form": "σχήσομεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "σχησετε": [
    {
      "lemma": "ἔχω",
      "form": "σχήσετε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "σχησουσιν": [
    {
      "lemma": "ἔχω",
      "form": "σχήσουσι(ν)",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ἔχω",
      "form": "σχήσουσιν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "σχησουσι": [
    {
      "lemma": "ἔχω",
      "form": "σχήσουσι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "σχησοιμι": [
    {
      "lemma": "ἔχω",
      "form": "σχήσοιμι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "σχησοισ": [
    {
      "lemma": "ἔχω",
      "form": "σχήσοις",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "σχησοι": [
    {
      "lemma": "ἔχω",
      "form": "σχήσοι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "σχησοιμεν": [
    {
      "lemma": "ἔχω",
      "form": "σχησοίμεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "σχησοιτε": [
    {
      "lemma": "ἔχω",
      "form": "σχήσοιτε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "σχησοιεν": [
    {
      "lemma": "ἔχω",
      "form": "σχήσοιεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εσχον": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ἔχω",
      "form": "ἔσχον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εσχεσ": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχες",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εσχεν": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ἔχω",
      "form": "ἔσχεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εσχε": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εσχομεν": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχομεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εσχετε": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "σχω": [
    {
      "lemma": "ἔχω",
      "form": "σχῶ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "σχησ": [
    {
      "lemma": "ἔχω",
      "form": "σχῇς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "σχη": [
    {
      "lemma": "ἔχω",
      "form": "σχῇ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ἔχω",
      "form": "σχῇ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "σχωμεν": [
    {
      "lemma": "ἔχω",
      "form": "σχῶμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "σχητε": [
    {
      "lemma": "ἔχω",
      "form": "σχῆτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "σχωσιν": [
    {
      "lemma": "ἔχω",
      "form": "σχῶσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ἔχω",
      "form": "σχῶσιν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "σχωσι": [
    {
      "lemma": "ἔχω",
      "form": "σχῶσι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "σχοιην": [
    {
      "lemma": "ἔχω",
      "form": "σχοίην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "σχοιησ": [
    {
      "lemma": "ἔχω",
      "form": "σχοίης",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "σχοιη": [
    {
      "lemma": "ἔχω",
      "form": "σχοίη",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "σχοιμεν": [
    {
      "lemma": "ἔχω",
      "form": "σχοῖμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "σχοιτε": [
    {
      "lemma": "ἔχω",
      "form": "σχοῖτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "σχοιεν": [
    {
      "lemma": "ἔχω",
      "form": "σχοῖεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "σχεσ": [
    {
      "lemma": "ἔχω",
      "form": "σχές",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "σχετω": [
    {
      "lemma": "ἔχω",
      "form": "σχέτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "σχετε": [
    {
      "lemma": "ἔχω",
      "form": "σχέτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "σχοντων": [
    {
      "lemma": "ἔχω",
      "form": "σχόντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εσχηκα": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχηκα",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εσχηκασ": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχηκας",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εσχηκεν": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχηκε(ν)",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ἔχω",
      "form": "ἔσχηκεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εσχηκε": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχηκε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εσχηκαμεν": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχήκαμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εσχηκατε": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχήκατε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εσχηκασιν": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχηκασι(ν)",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ἔχω",
      "form": "ἔσχηκασιν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εσχηκασι": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχηκασι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εσχηκειν": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχήκειν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εσχηκεισ": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχήκεις",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εσχηκει": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχήκει",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εσχηκεμεν": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχήκεμεν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εσχηκετε": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχήκετε",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εσχηκεσαν": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχήκεσαν",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "active",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εχομαι": [
    {
      "lemma": "ἔχω",
      "form": "ἔχομαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εχεται": [
    {
      "lemma": "ἔχω",
      "form": "ἔχεται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εχομεθα": [
    {
      "lemma": "ἔχω",
      "form": "ἐχόμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εχεσθε": [
    {
      "lemma": "ἔχω",
      "form": "ἔχεσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ἔχω",
      "form": "ἔχεσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εχονται": [
    {
      "lemma": "ἔχω",
      "form": "ἔχονται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εχωμαι": [
    {
      "lemma": "ἔχω",
      "form": "ἔχωμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εχηται": [
    {
      "lemma": "ἔχω",
      "form": "ἔχηται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εχωμεθα": [
    {
      "lemma": "ἔχω",
      "form": "ἐχώμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εχησθε": [
    {
      "lemma": "ἔχω",
      "form": "ἔχησθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εχωνται": [
    {
      "lemma": "ἔχω",
      "form": "ἔχωνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εχοιμην": [
    {
      "lemma": "ἔχω",
      "form": "ἐχοίμην",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εχοιο": [
    {
      "lemma": "ἔχω",
      "form": "ἔχοιο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εχοιτο": [
    {
      "lemma": "ἔχω",
      "form": "ἔχοιτο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εχοιμεθα": [
    {
      "lemma": "ἔχω",
      "form": "ἐχοίμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εχοισθε": [
    {
      "lemma": "ἔχω",
      "form": "ἔχοισθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εχοιντο": [
    {
      "lemma": "ἔχω",
      "form": "ἔχοιντο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εχου": [
    {
      "lemma": "ἔχω",
      "form": "ἔχου",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εχεσθω": [
    {
      "lemma": "ἔχω",
      "form": "ἐχέσθω",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εχεσθων": [
    {
      "lemma": "ἔχω",
      "form": "ἐχέσθων",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "ειχομην": [
    {
      "lemma": "ἔχω",
      "form": "εἰχόμην",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "ειχου": [
    {
      "lemma": "ἔχω",
      "form": "εἴχου",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "ειχετο": [
    {
      "lemma": "ἔχω",
      "form": "εἴχετο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "ειχομεθα": [
    {
      "lemma": "ἔχω",
      "form": "εἰχόμεθα",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "ειχεσθε": [
    {
      "lemma": "ἔχω",
      "form": "εἴχεσθε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "ειχοντο": [
    {
      "lemma": "ἔχω",
      "form": "εἴχοντο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εξομαι": [
    {
      "lemma": "ἔχω",
      "form": "ἕξομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εξη": [
    {
      "lemma": "ἔχω",
      "form": "ἕξῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εξεται": [
    {
      "lemma": "ἔχω",
      "form": "ἕξεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εξομεθα": [
    {
      "lemma": "ἔχω",
      "form": "ἑξόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εξεσθε": [
    {
      "lemma": "ἔχω",
      "form": "ἕξεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εξονται": [
    {
      "lemma": "ἔχω",
      "form": "ἕξονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εξοιμην": [
    {
      "lemma": "ἔχω",
      "form": "ἑξοίμην",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εξοιο": [
    {
      "lemma": "ἔχω",
      "form": "ἕξοιο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εξοιτο": [
    {
      "lemma": "ἔχω",
      "form": "ἕξοιτο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εξοιμεθα": [
    {
      "lemma": "ἔχω",
      "form": "ἑξοίμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εξοισθε": [
    {
      "lemma": "ἔχω",
      "form": "ἕξοισθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εξοιντο": [
    {
      "lemma": "ἔχω",
      "form": "ἕξοιντο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "σχησομαι": [
    {
      "lemma": "ἔχω",
      "form": "σχήσομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "σχηση": [
    {
      "lemma": "ἔχω",
      "form": "σχήσῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "σχησεται": [
    {
      "lemma": "ἔχω",
      "form": "σχήσεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "σχησομεθα": [
    {
      "lemma": "ἔχω",
      "form": "σχησόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "σχησεσθε": [
    {
      "lemma": "ἔχω",
      "form": "σχήσεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "σχησονται": [
    {
      "lemma": "ἔχω",
      "form": "σχήσονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "σχησοιμην": [
    {
      "lemma": "ἔχω",
      "form": "σχησοίμην",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "σχησοιο": [
    {
      "lemma": "ἔχω",
      "form": "σχήσοιο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "σχησοιτο": [
    {
      "lemma": "ἔχω",
      "form": "σχήσοιτο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "σχησοιμεθα": [
    {
      "lemma": "ἔχω",
      "form": "σχησοίμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "σχησοισθε": [
    {
      "lemma": "ἔχω",
      "form": "σχήσοισθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "σχησοιντο": [
    {
      "lemma": "ἔχω",
      "form": "σχήσοιντο",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εσχομην": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχόμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εσχου": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχου",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εσχετο": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχετο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εσχομεθα": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχόμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εσχεσθε": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχεσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εσχοντο": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχοντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "σχωμαι": [
    {
      "lemma": "ἔχω",
      "form": "σχῶμαι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "σχηται": [
    {
      "lemma": "ἔχω",
      "form": "σχῆται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "σχωμεθα": [
    {
      "lemma": "ἔχω",
      "form": "σχώμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "σχησθε": [
    {
      "lemma": "ἔχω",
      "form": "σχῆσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "σχωνται": [
    {
      "lemma": "ἔχω",
      "form": "σχῶνται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "σχοιμην": [
    {
      "lemma": "ἔχω",
      "form": "σχοίμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "σχοιο": [
    {
      "lemma": "ἔχω",
      "form": "σχοῖο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "σχοιτο": [
    {
      "lemma": "ἔχω",
      "form": "σχοῖτο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "σχοιμεθα": [
    {
      "lemma": "ἔχω",
      "form": "σχοίμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "σχοισθε": [
    {
      "lemma": "ἔχω",
      "form": "σχοῖσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "σχοιντο": [
    {
      "lemma": "ἔχω",
      "form": "σχοῖντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "σχου": [
    {
      "lemma": "ἔχω",
      "form": "σχοῦ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "σχεσθω": [
    {
      "lemma": "ἔχω",
      "form": "σχέσθω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "σχεσθε": [
    {
      "lemma": "ἔχω",
      "form": "σχέσθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "σχεσθων": [
    {
      "lemma": "ἔχω",
      "form": "σχέσθων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "σχεθησομαι": [
    {
      "lemma": "ἔχω",
      "form": "σχεθήσομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εσχεθην": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχέθην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εσχημαι": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχημαι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εσχησαι": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχησαι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εσχηται": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχηται",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εσχημεθα": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχήμεθα",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "ἔχω",
      "form": "ἐσχήμεθα",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1pl",
      "number": "pl"
    }
  ],
  "εσχησθε": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχησθε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ἔχω",
      "form": "ἐσχῆσθε",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2pl",
      "number": "pl"
    }
  ],
  "εσχηνται": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχηνται",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εσχημην": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχήμην",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "1sg",
      "number": "sg"
    }
  ],
  "εσχησο": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχῆσο",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "2sg",
      "number": "sg"
    }
  ],
  "εσχητο": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχῆτο",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3sg",
      "number": "sg"
    }
  ],
  "εσχηντο": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχῆντο",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "person": "3pl",
      "number": "pl"
    }
  ],
  "εχειν": [
    {
      "lemma": "ἔχω",
      "form": "ἔχειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "εχεσθαι": [
    {
      "lemma": "ἔχω",
      "form": "ἔχεσθαι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "middle/passive",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "εξειν": [
    {
      "lemma": "ἔχω",
      "form": "ἕξειν",
      "kind": "infinitive",
      "tense": "future",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "εξεσθαι": [
    {
      "lemma": "ἔχω",
      "form": "ἕξεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "σχησειν": [
    {
      "lemma": "ἔχω",
      "form": "σχήσειν",
      "kind": "infinitive",
      "tense": "future",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "σχησεσθαι": [
    {
      "lemma": "ἔχω",
      "form": "σχήσεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "σχειν": [
    {
      "lemma": "ἔχω",
      "form": "σχεῖν",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "σχεσθαι": [
    {
      "lemma": "ἔχω",
      "form": "σχέσθαι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "middle",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "εσχηκεναι": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχηκεναι",
      "kind": "infinitive",
      "tense": "perfect",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "εσχησθαι": [
    {
      "lemma": "ἔχω",
      "form": "ἔσχησθαι",
      "kind": "infinitive",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6
    }
  ],
  "εχων": [
    {
      "lemma": "ἔχω",
      "form": "ἔχων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εχουσα": [
    {
      "lemma": "ἔχω",
      "form": "ἔχουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εχον": [
    {
      "lemma": "ἔχω",
      "form": "ἔχον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εχομενοσ": [
    {
      "lemma": "ἔχω",
      "form": "ἐχόμενος",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εχομενη": [
    {
      "lemma": "ἔχω",
      "form": "ἐχομένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εχομενον": [
    {
      "lemma": "ἔχω",
      "form": "ἐχόμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εξων": [
    {
      "lemma": "ἔχω",
      "form": "ἕξων",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εξουσα": [
    {
      "lemma": "ἔχω",
      "form": "ἕξουσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εξον": [
    {
      "lemma": "ἔχω",
      "form": "ἕξον",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εξομενοσ": [
    {
      "lemma": "ἔχω",
      "form": "ἑξόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εξομενη": [
    {
      "lemma": "ἔχω",
      "form": "ἑξομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εξομενον": [
    {
      "lemma": "ἔχω",
      "form": "ἑξόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχησων": [
    {
      "lemma": "ἔχω",
      "form": "σχήσων",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχησουσα": [
    {
      "lemma": "ἔχω",
      "form": "σχήσουσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχησον": [
    {
      "lemma": "ἔχω",
      "form": "σχήσον",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχησομενοσ": [
    {
      "lemma": "ἔχω",
      "form": "σχησόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχησομενη": [
    {
      "lemma": "ἔχω",
      "form": "σχησομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχησομενον": [
    {
      "lemma": "ἔχω",
      "form": "σχησόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχων": [
    {
      "lemma": "ἔχω",
      "form": "σχών",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχουσα": [
    {
      "lemma": "ἔχω",
      "form": "σχοῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχον": [
    {
      "lemma": "ἔχω",
      "form": "σχόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχομενοσ": [
    {
      "lemma": "ἔχω",
      "form": "σχόμενος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχομενη": [
    {
      "lemma": "ἔχω",
      "form": "σχομένη",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχομενον": [
    {
      "lemma": "ἔχω",
      "form": "σχόμενον",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχεθεισ": [
    {
      "lemma": "ἔχω",
      "form": "σχεθείς",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχεθεισα": [
    {
      "lemma": "ἔχω",
      "form": "σχεθεῖσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "σχεθεν": [
    {
      "lemma": "ἔχω",
      "form": "σχεθέν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εσχηκωσ": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχηκώς",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εσχηκυια": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχηκυῖα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εσχηκοσ": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχηκός",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εσχημενοσ": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχημένος",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εσχημενη": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχημένη",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    }
  ],
  "εσχημενον": [
    {
      "lemma": "ἔχω",
      "form": "ἐσχημένον",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": null,
      "source": "stage14-deep-audit",
      "displayPriority": 6,
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    }
  ]
};
  for (const [key, entries] of Object.entries(patch)) {
    const bucket = window.FORM_INDEX[key] = window.FORM_INDEX[key] || [];
    const seen = new Set(bucket.map(entrySig));
    for (const entry of entries) {
      const signature = entrySig(entry);
      if (!seen.has(signature)) { bucket.push(entry); seen.add(signature); }
    }
  }
})();
