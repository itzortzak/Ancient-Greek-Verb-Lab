(function(){
  const TARGETS = [
  "συμπίπτω",
  "ἄημι",
  "νήθω",
  "λαγχάνω",
  "μένω",
  "γιγνώσκω",
  "κτείνω",
  "ζώννυμι",
  "σκεδάννυμι",
  "γηράσκω"
];
  const COLLAPSED = {
  "συμπίπτω": [
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συνέπιπτον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συνέπιπτες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συνέπιπτε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συνεπίπτομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συνεπίπτετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συνέπιπτον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσοῦμαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσεῖ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσεῖται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσούμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσεῖσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσοῦνται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συνέπεσον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συνέπεσες",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συνέπεσε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συνεπέσομεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συνεπέσετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συνέπεσον / συνέπεσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσεῖσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσεῖν",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτοντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτοντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτοντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπιπτόντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτουσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτοντας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτοντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπιπτούσης",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπιπτούσῃ",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτουσαν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτουσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπιπτουσῶν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπιπτούσαις",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπιπτούσας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτουσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπῖπτον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτοντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτοντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπῖπτον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπῖπτον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπιπτόντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτουσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπίπτοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσών",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσών",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσοῦσι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόντας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσοῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσούσης",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσούσῃ",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσοῦσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσοῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσοῦσαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσουσῶν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσούσαις",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσούσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσοῦσαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσοῦσι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "συμπίπτω",
      "form": "συμπεσόντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "pl"
    }
  ],
  "ἄημι": [
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓́ημῐ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "1sg"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓́ησῐ / ᾰ̓́ησῐν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓́εισῐ / ᾰ̓́εισῐν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "3pl"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓ήτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓́ηται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓ῆναι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "ἄημι",
      "form": "ἄη",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ἄημι",
      "form": "ἄητο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓είς",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀέντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀέντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀέντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓είς",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀέντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀέντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀεῖσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀέντας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀέντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓εῖσᾰ",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀείσης",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀείσῃ",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀεῖσαν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓εῖσᾰ",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀεῖσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀεισῶν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀείσαις",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀείσας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀεῖσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓έν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀέντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀέντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓έν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓έν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀέντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀέντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀεῖσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀέντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀέντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓ήμενος",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένου",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένῳ",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένε",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓ημένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένης",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένῃ",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένην",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓ημένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓ήμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένου",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένῳ",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓ήμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "ἄημι",
      "form": "ᾰ̓ήμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένοι",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένων",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένοις",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένους",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένοι",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημέναι",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένων",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημέναις",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένας",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημέναι",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένα",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένων",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένοις",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένα",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "ἄημι",
      "form": "ἀημένα",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    }
  ],
  "νήθω": [
    {
      "lemma": "νήθω",
      "form": "νήθεσκον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "1sg"
    },
    {
      "lemma": "νήθω",
      "form": "νήθεσκον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "3pl"
    },
    {
      "lemma": "νήθω",
      "form": "νήθεσκες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "2sg"
    },
    {
      "lemma": "νήθω",
      "form": "νήθεσκε / νήθεσκεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "νήθω",
      "form": "νηθέσκομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "1pl"
    },
    {
      "lemma": "νήθω",
      "form": "νηθέσκετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "2pl"
    },
    {
      "lemma": "νήθω",
      "form": "νηθεσκόμην",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "1sg"
    },
    {
      "lemma": "νήθω",
      "form": "νηθέσκου",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "2sg"
    },
    {
      "lemma": "νήθω",
      "form": "νηθέσκετο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "νήθω",
      "form": "νηθεσκόμεθᾰ",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "1pl"
    },
    {
      "lemma": "νήθω",
      "form": "νηθέσκεσθε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "2pl"
    },
    {
      "lemma": "νήθω",
      "form": "νηθέσκοντο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "number": "pl",
      "person": "3pl"
    },
    {
      "lemma": "νήθω",
      "form": "νήθω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "νήθω",
      "form": "νήθεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "νήθω",
      "form": "νήθει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "νήθω",
      "form": "νήθομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "νήθω",
      "form": "νήθετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "νήθω",
      "form": "νήθουσιν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "νήθω",
      "form": "νήθειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "νήθω",
      "form": "νήθων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "νήθω",
      "form": "νήθοντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "νήθω",
      "form": "νήθοντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "νήθω",
      "form": "νήθοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "νήθω",
      "form": "νήθων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "νήθω",
      "form": "νήθοντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "νήθω",
      "form": "νηθόντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "νήθω",
      "form": "νήθουσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "νήθω",
      "form": "νήθοντας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "νήθω",
      "form": "νήθοντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "νήθω",
      "form": "νήθουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "νήθω",
      "form": "νηθούσης",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "νήθω",
      "form": "νηθούσῃ",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "νήθω",
      "form": "νήθουσαν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "νήθω",
      "form": "νήθουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "νήθω",
      "form": "νήθουσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "νήθω",
      "form": "νηθουσῶν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "νήθω",
      "form": "νηθούσαις",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "νήθω",
      "form": "νηθούσας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "νήθω",
      "form": "νήθουσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "νήθω",
      "form": "νήθον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "νήθω",
      "form": "νήθοντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "νήθω",
      "form": "νήθοντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "νήθω",
      "form": "νήθον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "νήθω",
      "form": "νήθον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "νήθω",
      "form": "νήθοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "νήθω",
      "form": "νηθόντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "νήθω",
      "form": "νήθουσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "νήθω",
      "form": "νήθοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "νήθω",
      "form": "νήθοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    }
  ],
  "λαγχάνω": [
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ἐλάγχανον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ἐλάγχανες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ἐλάγχανε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ἐλαγχάνομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ἐλαγχάνετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ἐλάγχανον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάγχανε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχανέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχανόντων / λαγχανέτωσαν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λήξομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λήξῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λήξεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λήξεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λήξονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ἔλαχον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ἔλαχες",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ἔλαχε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ἐλάχομεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ἐλάχετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ἔλαχον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάχω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάχῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάχῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάχωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάχητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάχωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάχοιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάχοις",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάχοι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάχοιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάχοιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάχοιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάχε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχέτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λάχετε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόντων / λαχέτωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λήξεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχεῖν",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχανόντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνουσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοντας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχανούσης",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχανούσῃ",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνουσαν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνουσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχανουσῶν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχανούσαις",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχανούσας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνουσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχᾶνον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχᾶνον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχᾶνον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχανόντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνουσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαγχάνοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένου",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένῳ",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένε",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένης",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένῃ",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένην",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένου",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένῳ",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένοι",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένων",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένοις",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένους",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένοι",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομέναι",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένων",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομέναις",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένας",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομέναι",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένα",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένων",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένοις",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένα",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "ληξομένα",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχών",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχών",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχοῦσι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόντας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχοῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχούσης",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχούσῃ",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχοῦσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχοῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχοῦσαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχουσῶν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχούσαις",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχούσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχοῦσαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχοῦσι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "λαγχάνω",
      "form": "λαχόντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "pl"
    }
  ],
  "μένω": [
    {
      "lemma": "μένω",
      "form": "μένω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "ἔμενον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "ἔμενες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "ἔμενε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "ἐμένομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "ἐμένετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "ἔμενον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενόντων / μενέτωσαν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενῶ",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενεῖς",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενεῖ",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦμεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενεῖτε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦσι(ν)",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "ἔμεινα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "ἔμεινας",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "ἔμεινε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "ἐμείναμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "ἐμείνατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "ἔμειναν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μείνω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείνῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείνῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείνωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μείνητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μείνωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μείναιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείναις",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μεῖναι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μεῖναιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μεῖναιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μεῖναιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μεῖνον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μεινάτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείνατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μεινάντων / μεινάτωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "μένω",
      "form": "μενεῖν",
      "kind": "infinitive",
      "tense": "future",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "μένω",
      "form": "μεῖναι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "μένω",
      "form": "μένων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένοντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένοντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένοντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενόντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένουσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένοντας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένοντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενούσης",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενούσῃ",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένουσαν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένουσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενουσῶν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενούσαις",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενούσας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένουσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένοντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένοντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μένοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενόντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένουσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μένοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενῶν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦντος",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦντι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦντα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενῶν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦντες",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενούντων",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦσι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦντας",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦντες",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενούσης",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενούσῃ",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦσαν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦσαι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενουσῶν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενούσαις",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενούσας",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦσαι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦντος",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦντι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦντα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενούντων",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦσι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦντα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μενοῦντα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μείνας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείναντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείναντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείναντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείνας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείναντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μεινάντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μείνασι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μείναντας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μείναντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μείνασα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μεινάσης",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μεινάσῃ",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείνασαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείνασα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείνασαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μεινασῶν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μεινάσαις",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μεινάσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μείνασαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μεῖναν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείναντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείναντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μεῖναν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μεῖναν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "μένω",
      "form": "μείναντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μεινάντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μείνασι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μείναντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "μένω",
      "form": "μείναντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "pl"
    }
  ],
  "γιγνώσκω": [
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "ἐγίγνωσκον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "ἐγίγνωσκες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "ἐγίγνωσκε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "ἐγιγνώσκομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "ἐγιγνώσκετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "ἐγίγνωσκον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γίγνωσκε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνωσκέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνωσκόντων / γιγνωσκέτωσαν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνώσομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνώσῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνώσεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνώσεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνώσονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "ἔγνων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "ἔγνως",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "ἔγνω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "ἔγνωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "ἔγνωτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "ἔγνωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνῷς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνῷ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνοίην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνοίης",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνοίη",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνοῖμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνοῖτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνοῖεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶθι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνώτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντων / γνώτωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνώσεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνῶναι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνωσκόντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκουσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοντας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνωσκούσης",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνωσκούσῃ",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκουσαν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκουσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνωσκουσῶν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνωσκούσαις",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνωσκούσας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκουσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνωσκόντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκουσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γιγνώσκοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένου",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένῳ",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένε",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένης",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένῃ",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένην",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένου",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένῳ",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένοι",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένων",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένοις",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένους",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένοι",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομέναι",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένων",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομέναις",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένας",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομέναι",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένα",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένων",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένοις",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένα",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνωσομένα",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνούς",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνούς",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνοῦσι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνοῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνούσης",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνούσῃ",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνοῦσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνοῦσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνοῦσαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνουσῶν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνούσαις",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνούσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνοῦσαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνοῦσι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "γιγνώσκω",
      "form": "γνόντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "pl"
    }
  ],
  "κτείνω": [
    {
      "lemma": "κτείνω",
      "form": "κτείνω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "ἔκτεινον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "ἔκτεινες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "ἔκτεινε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "ἐκτείνομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "ἐκτείνετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "ἔκτεινον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεῖνε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινόντων / κτεινέτωσαν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενῶ",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενεῖς",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενεῖ",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦμεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενεῖτε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦσι(ν)",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "ἔκτεινα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "ἔκτεινας",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "ἔκτεινε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "ἐκτείναμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "ἐκτείνατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "ἔκτειναν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναις",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεῖνον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινάτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινάντων / κτεινάτωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενεῖν",
      "kind": "infinitive",
      "tense": "future",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεῖναι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινόντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνουσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοντας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινούσης",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινούσῃ",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνουσαν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνουσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινουσῶν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινούσαις",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινούσας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνουσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεῖνον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεῖνον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεῖνον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινόντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνουσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενῶν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦντος",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦντι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦντα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενῶν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦντες",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενούντων",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦσι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦντας",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦντες",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενούσης",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενούσῃ",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦσαν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦσαι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενουσῶν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενούσαις",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενούσας",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦσαι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦντος",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦντι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦντα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενούντων",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦσι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦντα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτενοῦντα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινάντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνασι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναντας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνασα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινάσης",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινάσῃ",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνασαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνασα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνασαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινασῶν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινάσαις",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινάσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνασαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "case": "voc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεῖναν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεῖναν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεῖναν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "sg"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "nom",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτεινάντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "gen",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείνασι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "dat",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "acc",
      "number": "pl"
    },
    {
      "lemma": "κτείνω",
      "form": "κτείναντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "case": "voc",
      "number": "pl"
    }
  ],
  "ζώννυμι": [
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύασι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύναι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυσαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύωμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύηται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυώμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύησθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύωνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυοίμην",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύοιο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύοιτο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυοίμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύοισθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύοιντο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυσο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύσθω",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύσθων",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώννυσθαι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "infinitive"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἐζώννυν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἐζώννυς",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἐζώννυ",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἐζώννυμεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἐζώννυτε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἐζώννυσαν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἐζωννύμην",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἐζώννυσο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἐζώννυτο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἐζωννύμεθα",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἐζώννυσθε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἐζώννυντο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἔζωσα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἔζωσας",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἔζωσε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἐζώσαμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἐζώσατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἔζωσαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαις",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαιεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζῶσον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωσάτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωσάντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζῶσαι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ἔζωσμαι / ἔζωμαι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύς",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "masc",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "masc",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "masc",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "masc",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύς",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "masc",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "masc",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "masc",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννῦσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "masc",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύντας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "masc",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "masc",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννῦσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "fem",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύσης",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "fem",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύσῃ",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "fem",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννῦσαν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "fem",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννῦσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "fem",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννῦσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "fem",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυσῶν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "fem",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύσαις",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "fem",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύσας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "fem",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννῦσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "fem",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "neut",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "neut",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "neut",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "neut",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "sg",
      "gender": "neut",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "neut",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "neut",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννῦσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "neut",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "neut",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "number": "pl",
      "gender": "neut",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύμενος",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "masc",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένου",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "masc",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένῳ",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "masc",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "masc",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένε",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "masc",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "fem",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένης",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "fem",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένῃ",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "fem",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένην",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "fem",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "fem",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "neut",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένου",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "neut",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένῳ",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "neut",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "neut",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννύμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "sg",
      "gender": "neut",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένοι",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "masc",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένων",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "masc",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένοις",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "masc",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένους",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "masc",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένοι",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "masc",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμέναι",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "fem",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένων",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "fem",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμέναις",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "fem",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένας",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "fem",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμέναι",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "fem",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένα",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "neut",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένων",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "neut",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένοις",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "neut",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένα",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "neut",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωννυμένα",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "number": "pl",
      "gender": "neut",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "masc",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "masc",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "masc",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "masc",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "masc",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "masc",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωσάντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "masc",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσασι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "masc",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαντας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "masc",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "masc",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσασα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "fem",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωσάσης",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "fem",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωσάσῃ",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "fem",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσασαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "fem",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσασα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "fem",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσασαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "fem",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωσασῶν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "fem",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωσάσαις",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "fem",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωσάσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "fem",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσασαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "fem",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζῶσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "neut",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "neut",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "neut",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζῶσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "neut",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζῶσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "sg",
      "gender": "neut",
      "case": "voc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "neut",
      "case": "nom"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζωσάντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "neut",
      "case": "gen"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσασι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "neut",
      "case": "dat"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "neut",
      "case": "acc"
    },
    {
      "lemma": "ζώννυμι",
      "form": "ζώσαντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "number": "pl",
      "gender": "neut",
      "case": "voc"
    }
  ],
  "σκεδάννυμι": [
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύασι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύναι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυσαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύωμαι",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύηται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυώμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύησθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύωνται",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυοίμην",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύοιο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύοιτο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυοίμεθα",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύοισθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύοιντο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυσο",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύσθω",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυσθε",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύσθων",
      "kind": "finite",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάννυσθαι",
      "kind": "infinitive",
      "tense": "present",
      "voice": "middle/passive",
      "mood": "infinitive"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάννυν / ἐσκεδάννυον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάννυς",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάννυ",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάννυμεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάννυτε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάννυσαν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδαννύμην",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάννυσο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάννυτο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδαννύμεθα",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάννυσθε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάννυντο",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσω / σκεδῶ",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσεις",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσει",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσομεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσετε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσουσι(ν)",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοιμι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοις",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοι",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοιμεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοιτε",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοιεν",
      "kind": "finite",
      "tense": "future",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσειν",
      "kind": "infinitive",
      "tense": "future",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθήσομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθήσῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθήσεται",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθήσεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθήσονται",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησοίμην",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθήσοιο",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθήσοιτο",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησοίμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθήσοισθε",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθήσοιντο",
      "kind": "finite",
      "tense": "future",
      "voice": "passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθήσεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "passive",
      "mood": "infinitive"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκέδασα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκέδασας",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκέδασε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάσαμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάσατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκέδασαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσειας",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσειε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσειαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκέδασον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασάτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασάντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδασάμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάσω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάσατο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδασάμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάσασθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάσαντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσωμαι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσηται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασώμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσησθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσωνται",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαίμην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαιο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαιτο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαίμεθα",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαισθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαιντο",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκέδασαι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασάσθω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκέδασασθε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασάσθων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "middle",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσασθαι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "middle",
      "mood": "infinitive"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάσθην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάσθης",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάσθη",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάσθημεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάσθητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάσθησαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "indicative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθῶ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθῇς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθῇ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθῶμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθῆτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθῶσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "subjunctive",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθείην",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθείης",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθείη",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθεῖμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "1pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθεῖτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθεῖεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "optative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσθητι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "2sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθήτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "3sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσθητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "2pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "passive",
      "mood": "imperative",
      "person": "3pl",
      "number": "pl"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθῆναι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "passive",
      "mood": "infinitive"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκέδασμαι",
      "kind": "finite",
      "tense": "perfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "ἐσκεδάσμην",
      "kind": "finite",
      "tense": "pluperfect",
      "voice": "middle/passive",
      "mood": "indicative",
      "person": "1sg",
      "number": "sg"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύς",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύς",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννῦσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύντας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννῦσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύσης",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύσῃ",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννῦσαν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννῦσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννῦσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυσῶν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύσαις",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύσας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννῦσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννῦσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύμενος",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένου",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένῳ",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένε",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένης",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένῃ",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένην",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένη",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένου",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένῳ",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννύμενον",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένοι",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένων",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένοις",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένους",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένοι",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμέναι",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένων",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμέναις",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένας",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμέναι",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένα",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένων",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένοις",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένα",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδαννυμένα",
      "kind": "participle",
      "tense": "present",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσων",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοντος",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοντι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοντα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσων",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοντες",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασόντων",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσουσι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοντας",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοντες",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσουσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασούσης",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασούσῃ",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσουσαν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσουσα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσουσαι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασουσῶν",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασούσαις",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασούσας",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσουσαι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσον",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοντος",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοντι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσον",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσον",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοντα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασόντων",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσουσι",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοντα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσοντα",
      "kind": "participle",
      "tense": "future",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένου",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένῳ",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένον",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένε",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένης",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένῃ",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένην",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένου",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένῳ",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένοι",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένων",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένοις",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένους",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένοι",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομέναι",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένων",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομέναις",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένας",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομέναι",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένα",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένων",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένοις",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένα",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθησομένα",
      "kind": "participle",
      "tense": "future",
      "voice": "passive",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασάντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσασι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαντας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσασα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασάσης",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασάσῃ",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσασαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσασα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσασαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασασῶν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασάσαις",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασάσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσασαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασάντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσασι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδάσαντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασάμενος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένου",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένῳ",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένον",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένε",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένη",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένης",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένῃ",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένην",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένη",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασάμενον",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένου",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένῳ",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασάμενον",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασάμενον",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένοι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένοις",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένους",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένοι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμέναι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμέναις",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμέναι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένοις",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασαμένα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "middle",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθείς",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθείς",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθεῖσι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέντας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθεῖσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθείσης",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθείσῃ",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθεῖσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθεῖσα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθεῖσαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθεισῶν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθείσαις",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθείσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθεῖσαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθεῖσι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασθέντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "passive",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένος",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένου",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένῳ",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένον",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένε",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένη",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένης",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένῃ",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένην",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένη",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένον",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένου",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένῳ",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένον",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένον",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένοι",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένων",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένοις",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένους",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένοι",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμέναι",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένων",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμέναις",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένας",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμέναι",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένων",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένοις",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "σκεδάννυμι",
      "form": "σκεδασμένα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "middle/passive",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    }
  ],
  "γηράσκω": [
    {
      "lemma": "γηράσκω",
      "form": "γηράσκω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "1sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκεις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "2sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκει",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκομεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "1pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "2pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκουσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "3pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "number": "sg",
      "person": "1sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκῃς",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "number": "sg",
      "person": "2sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκῃ",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκωμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "number": "pl",
      "person": "1pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκητε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "number": "pl",
      "person": "2pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκωσι(ν)",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "subjunctive",
      "number": "pl",
      "person": "3pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοιμι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "number": "sg",
      "person": "1sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοις",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "number": "sg",
      "person": "2sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοι",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοιμεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "number": "pl",
      "person": "1pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοιτε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "number": "pl",
      "person": "2pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοιεν",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "optative",
      "number": "pl",
      "person": "3pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γήρασκε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "number": "sg",
      "person": "2sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασκέτω",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκετε",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "number": "pl",
      "person": "2pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασκόντων",
      "kind": "finite",
      "tense": "present",
      "voice": "active",
      "mood": "imperative",
      "number": "pl",
      "person": "3pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "ἐγήρασκον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "1sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "ἐγήρασκες",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "2sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "ἐγήρασκε(ν)",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "ἐγηράσκομεν",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "1pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "ἐγηράσκετε",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "2pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "ἐγήρασκον",
      "kind": "finite",
      "tense": "imperfect",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "3pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσομαι",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "number": "sg",
      "person": "1sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσῃ",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "number": "sg",
      "person": "2sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσεται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασόμεθα",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "number": "pl",
      "person": "1pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσεσθε",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "number": "pl",
      "person": "2pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσονται",
      "kind": "finite",
      "tense": "future",
      "voice": "middle",
      "mood": "indicative",
      "number": "pl",
      "person": "3pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "ἐγήρασα / ἐγήραν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "1sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "ἐγήρασας",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "2sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "ἐγήρασε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "ἐγηράσαμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "1pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "ἐγηράσατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "2pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "ἐγήρασαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "3pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "number": "sg",
      "person": "1sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσῃς",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "number": "sg",
      "person": "2sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσῃ",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσωμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "number": "pl",
      "person": "1pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσητε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "number": "pl",
      "person": "2pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσωσι(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "subjunctive",
      "number": "pl",
      "person": "3pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσαιμι",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "number": "sg",
      "person": "1sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσειας",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "number": "sg",
      "person": "2sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσειε(ν)",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσαιμεν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "number": "pl",
      "person": "1pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσαιτε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "number": "pl",
      "person": "2pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσειαν",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "optative",
      "number": "pl",
      "person": "3pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γήρασον",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "number": "sg",
      "person": "2sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασάτω",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσατε",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "number": "pl",
      "person": "2pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασάντων",
      "kind": "finite",
      "tense": "aorist",
      "voice": "active",
      "mood": "imperative",
      "number": "pl",
      "person": "3pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγήρακα",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "1sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγήρακας",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "2sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγήρακε(ν)",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "number": "sg",
      "person": "3sg"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγήρακαμεν",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "1pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγήρακατε",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "2pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγήρακασι(ν)",
      "kind": "finite",
      "tense": "perfect",
      "voice": "active",
      "mood": "indicative",
      "number": "pl",
      "person": "3pl"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκειν",
      "kind": "infinitive",
      "tense": "present",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσεσθαι",
      "kind": "infinitive",
      "tense": "future",
      "voice": "middle",
      "mood": "infinitive"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρᾶσαι",
      "kind": "infinitive",
      "tense": "aorist",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακέναι",
      "kind": "infinitive",
      "tense": "perfect",
      "voice": "active",
      "mood": "infinitive"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασκόντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκουσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοντας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοντες",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασκούσης",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασκούσῃ",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκουσαν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκουσα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκουσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασκουσῶν",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασκούσαις",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασκούσας",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκουσαι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρᾶσκον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοντος",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοντι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρᾶσκον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρᾶσκον",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασκόντων",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκουσι",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσκοντα",
      "kind": "participle",
      "tense": "present",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασόμενος",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένου",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένῳ",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένε",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένης",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένῃ",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένην",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένη",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένου",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένῳ",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασόμενον",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένοι",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένων",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένοις",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένους",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένοι",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομέναι",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένων",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομέναις",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένας",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομέναι",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένα",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένων",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένοις",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένα",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασομένα",
      "kind": "participle",
      "tense": "future",
      "voice": "middle",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσαντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσαντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσαντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσαντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασάντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσασι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσαντας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσαντες",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσασα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασάσης",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασάσῃ",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσασαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσασα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσασαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασασῶν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασάσαις",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασάσας",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσασαι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρᾶσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσαντος",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσαντι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρᾶσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρᾶσαν",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσαντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηρασάντων",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσασι",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσαντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γηράσαντα",
      "kind": "participle",
      "tense": "aorist",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακώς",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακότος",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακότι",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακότα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακώς",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακότες",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακότων",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακόσι",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακότας",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακότες",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "masc",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακυῖα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακυίας",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακυίᾳ",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακυῖαν",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακυῖα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακυῖαι",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακυιῶν",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακυίαις",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακυίας",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακυῖαι",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "fem",
      "number": "pl",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακός",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακότος",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακότι",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακός",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακός",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "number": "sg",
      "case": "voc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακότα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "nom"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακότων",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "gen"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακόσι",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "dat"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακότα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "acc"
    },
    {
      "lemma": "γηράσκω",
      "form": "γεγηρακότα",
      "kind": "participle",
      "tense": "perfect",
      "voice": "active",
      "gender": "neut",
      "number": "pl",
      "case": "voc"
    }
  ]
};
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase().trim(); }
  function slotKey(e){ return [e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|'); }
  function entrySig(e){ return [normalizeGreek(e.lemma||''),normalizeGreek(e.form||''),e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|'); }
  function clone(e){ return Object.assign({}, e); }
  function variants(form){ const out=[form]; if((form||'').includes('(ν)')){ out.push(form.replace('(ν)','')); out.push(form.replace('(ν)','ν')); } if((form||'').includes(' / ')){ for(const part of form.split(/\s*\/\s*/)) out.push(part); } return [...new Set(out.filter(Boolean))]; }
  const tenseOrder = ['present','imperfect','future','aorist','perfect','pluperfect','future perfect'];
  const voiceOrder = ['active','middle','passive','middle/passive'];
  const moodOrder = ['indicative','subjunctive','optative','imperative','infinitive','participle'];
  const personOrder = ['1sg','2sg','3sg','1pl','2pl','3pl'];
  const genderOrder = ['masc','fem','neut'];
  const caseOrder = ['nom','gen','dat','acc','voc'];
  function rank(a,b,order){ return order.indexOf(a)-order.indexOf(b); }
  function sortEntries(arr){ return arr.slice().sort((a,b)=> rank(a.kind||'', b.kind||'', ['finite','infinitive','participle']) || rank(a.tense||'', b.tense||'', tenseOrder) || rank(a.voice||'', b.voice||'', voiceOrder) || rank(a.mood||'', b.mood||'', moodOrder) || rank(a.person||'', b.person||'', personOrder) || rank(a.gender||'', b.gender||'', genderOrder) || rank(a.case||'', b.case||'', caseOrder) || rank(a.number||'', b.number||'', ['sg','pl']) || 0); }
  const originalByLemma = {};
  const visibleByLemma = {};
  const stats = {};
  for(const lemma of TARGETS){
    const original = Array.isArray(window.MANUAL_PARADIGMS?.[lemma]) ? window.MANUAL_PARADIGMS[lemma].map(clone) : [];
    originalByLemma[lemma] = original;
    const finalVisible = sortEntries((COLLAPSED[lemma]||[]).map(clone));
    window.MANUAL_PARADIGMS[lemma] = finalVisible;
    visibleByLemma[lemma] = finalVisible;
    stats[lemma] = { originalEntries: original.length, visibleEntries: finalVisible.length, duplicateSlotGroupsCollapsed: Math.max(0, original.length - finalVisible.length), demotedRecognition: 0 };
  }
  window.FORM_INDEX = window.FORM_INDEX || {};
  const targetNorms = new Set(TARGETS.map(normalizeGreek));
  for(const [key,bucket] of Object.entries(window.FORM_INDEX)){
    if(!Array.isArray(bucket)) continue;
    const filtered = bucket.filter(entry => !targetNorms.has(normalizeGreek(entry.lemma||'')));
    if(filtered.length) window.FORM_INDEX[key] = filtered; else delete window.FORM_INDEX[key];
  }
  function pushIndex(entry){
    for(const form of variants(entry.form)){
      const key = normalizeGreek(form);
      const bucket = window.FORM_INDEX[key] = window.FORM_INDEX[key] || [];
      const out = {lemma: entry.lemma, form, kind: entry.kind, tense: entry.tense, voice: entry.voice, mood: entry.mood};
      if(entry.person) out.person = entry.person;
      if(entry.gender) out.gender = entry.gender;
      if(entry.case) out.case = entry.case;
      if(entry.number) out.number = entry.number;
      if(entry.recognitionOnly) out.recognitionOnly = true;
      const sig = entrySig(out) + '|' + (out.recognitionOnly ? 'R' : 'V');
      const seen = new Set(bucket.map(x => entrySig(x) + '|' + (x.recognitionOnly ? 'R' : 'V')));
      if(!seen.has(sig)) bucket.push(out);
    }
  }
  for(const lemma of TARGETS){
    const visible = visibleByLemma[lemma] || [];
    const visibleSig = new Set(visible.map(entrySig));
    for(const e of visible) pushIndex(e);
    for(const e of originalByLemma[lemma] || []){
      if(!visibleSig.has(entrySig(e)) || !visible.some(v => slotKey(v)===slotKey(e) && v.form===e.form)){
        const r = clone(e); r.recognitionOnly = true; pushIndex(r); stats[lemma].demotedRecognition++;
      }
    }
  }
  window.AGVL_RUNTIME_PATCH = Object.assign({}, window.AGVL_RUNTIME_PATCH, {
    irregularCleanup8: true,
    irregularCleanup8Lemmas: TARGETS.length,
    irregularCleanup8Stats: stats
  });
})();
