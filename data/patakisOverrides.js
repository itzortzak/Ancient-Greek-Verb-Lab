(function(){
  const GP = window.GENERATED_PARADIGMS = window.GENERATED_PARADIGMS || {};
  const SV = window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  const SA = window.STRICT_AUDIT = window.STRICT_AUDIT || {generatedAt:'2026-03-20', summary:{}, lemmas:{}};
  SA.lemmas = SA.lemmas || {};
  SA.summary = SA.summary || {};

  function finite(lemma, form, tense, voice, mood, person, number){
    return {lemma, form, kind:'finite', tense, voice, mood, person, number};
  }
  function inf(lemma, form, tense, voice){
    return {lemma, form, kind:'infinitive', tense, voice, mood:'infinitive'};
  }
  function part(lemma, form, tense, voice, gender){
    return {lemma, form, kind:'participle', tense, voice, mood:'participle', gender};
  }

  GP['τιμάω'] = [
    finite('τιμάω','τιμῶ','present','active','indicative','1sg','sg'),
    finite('τιμάω','τιμᾷς','present','active','indicative','2sg','sg'),
    finite('τιμάω','τιμᾷ','present','active','indicative','3sg','sg'),
    finite('τιμάω','τιμῶμεν','present','active','indicative','1pl','pl'),
    finite('τιμάω','τιμᾶτε','present','active','indicative','2pl','pl'),
    finite('τιμάω','τιμῶσιν','present','active','indicative','3pl','pl'),
    finite('τιμάω','τιμήσω','future','active','indicative','1sg','sg'),
    finite('τιμάω','ἐτίμησα','aorist','active','indicative','1sg','sg'),
    finite('τιμάω','τετίμηκα','perfect','active','indicative','1sg','sg'),
    finite('τιμάω','τετίμημαι','perfect','middle/passive','indicative','1sg','sg'),
    inf('τιμάω','τιμᾶν','present','active'),
    inf('τιμάω','τιμῆσαι','aorist','active'),
    inf('τιμάω','τετιμηκέναι','perfect','active'),
    part('τιμάω','τιμῶν','present','active','masc'),
    part('τιμάω','τιμῶσα','present','active','fem'),
    part('τιμάω','τιμῶν','present','active','neut'),
    part('τιμάω','τιμήσας','aorist','active','masc'),
    part('τιμάω','τιμήσασα','aorist','active','fem'),
    part('τιμάω','τιμῆσαν','aorist','active','neut'),
    part('τιμάω','τετιμημένος','perfect','middle/passive','masc'),
    part('τιμάω','τετιμημένη','perfect','middle/passive','fem'),
    part('τιμάω','τετιμημένον','perfect','middle/passive','neut')
  ];

  GP['ποιέω'] = [
    finite('ποιέω','ποιῶ','present','active','indicative','1sg','sg'),
    finite('ποιέω','ποιεῖς','present','active','indicative','2sg','sg'),
    finite('ποιέω','ποιεῖ','present','active','indicative','3sg','sg'),
    finite('ποιέω','ποιοῦμεν','present','active','indicative','1pl','pl'),
    finite('ποιέω','ποιεῖτε','present','active','indicative','2pl','pl'),
    finite('ποιέω','ποιοῦσιν','present','active','indicative','3pl','pl'),
    finite('ποιέω','ποιήσω','future','active','indicative','1sg','sg'),
    finite('ποιέω','ἐποίησα','aorist','active','indicative','1sg','sg'),
    finite('ποιέω','πεποίηκα','perfect','active','indicative','1sg','sg'),
    finite('ποιέω','πεποίημαι','perfect','middle/passive','indicative','1sg','sg'),
    inf('ποιέω','ποιεῖν','present','active'),
    inf('ποιέω','ποιῆσαι','aorist','active'),
    inf('ποιέω','πεποιηκέναι','perfect','active'),
    part('ποιέω','ποιῶν','present','active','masc'),
    part('ποιέω','ποιοῦσα','present','active','fem'),
    part('ποιέω','ποιοῦν','present','active','neut'),
    part('ποιέω','ποιήσας','aorist','active','masc'),
    part('ποιέω','ποιήσασα','aorist','active','fem'),
    part('ποιέω','ποιῆσαν','aorist','active','neut'),
    part('ποιέω','πεποιημένος','perfect','middle/passive','masc'),
    part('ποιέω','πεποιημένη','perfect','middle/passive','fem'),
    part('ποιέω','πεποιημένον','perfect','middle/passive','neut')
  ];

  GP['φιλέω'] = [
    finite('φιλέω','φιλῶ','present','active','indicative','1sg','sg'),
    finite('φιλέω','φιλεῖς','present','active','indicative','2sg','sg'),
    finite('φιλέω','φιλεῖ','present','active','indicative','3sg','sg'),
    finite('φιλέω','φιλοῦμεν','present','active','indicative','1pl','pl'),
    finite('φιλέω','φιλεῖτε','present','active','indicative','2pl','pl'),
    finite('φιλέω','φιλοῦσιν','present','active','indicative','3pl','pl'),
    finite('φιλέω','φιλήσω','future','active','indicative','1sg','sg'),
    finite('φιλέω','ἐφίλησα','aorist','active','indicative','1sg','sg'),
    inf('φιλέω','φιλεῖν','present','active'),
    inf('φιλέω','φιλῆσαι','aorist','active'),
    part('φιλέω','φιλῶν','present','active','masc'),
    part('φιλέω','φιλοῦσα','present','active','fem'),
    part('φιλέω','φιλοῦν','present','active','neut'),
    part('φιλέω','φιλήσας','aorist','active','masc'),
    part('φιλέω','φιλήσασα','aorist','active','fem'),
    part('φιλέω','φιλῆσαν','aorist','active','neut')
  ];

  GP['ζητέω'] = [
    finite('ζητέω','ζητῶ','present','active','indicative','1sg','sg'),
    finite('ζητέω','ζητεῖς','present','active','indicative','2sg','sg'),
    finite('ζητέω','ζητεῖ','present','active','indicative','3sg','sg'),
    finite('ζητέω','ζητοῦμεν','present','active','indicative','1pl','pl'),
    finite('ζητέω','ζητεῖτε','present','active','indicative','2pl','pl'),
    finite('ζητέω','ζητοῦσιν','present','active','indicative','3pl','pl'),
    finite('ζητέω','ζητήσω','future','active','indicative','1sg','sg'),
    finite('ζητέω','ἐζήτησα','aorist','active','indicative','1sg','sg'),
    inf('ζητέω','ζητεῖν','present','active'),
    inf('ζητέω','ζητῆσαι','aorist','active'),
    part('ζητέω','ζητῶν','present','active','masc'),
    part('ζητέω','ζητοῦσα','present','active','fem'),
    part('ζητέω','ζητοῦν','present','active','neut'),
    part('ζητέω','ζητήσας','aorist','active','masc'),
    part('ζητέω','ζητήσασα','aorist','active','fem'),
    part('ζητέω','ζητῆσαν','aorist','active','neut')
  ];

  GP['οἰκέω'] = [
    finite('οἰκέω','οἰκῶ','present','active','indicative','1sg','sg'),
    finite('οἰκέω','οἰκεῖς','present','active','indicative','2sg','sg'),
    finite('οἰκέω','οἰκεῖ','present','active','indicative','3sg','sg'),
    finite('οἰκέω','οἰκοῦμεν','present','active','indicative','1pl','pl'),
    finite('οἰκέω','οἰκεῖτε','present','active','indicative','2pl','pl'),
    finite('οἰκέω','οἰκοῦσιν','present','active','indicative','3pl','pl'),
    finite('οἰκέω','οἰκήσω','future','active','indicative','1sg','sg'),
    finite('οἰκέω','ᾤκησα','aorist','active','indicative','1sg','sg'),
    finite('οἰκέω','ᾤκηκα','perfect','active','indicative','1sg','sg'),
    inf('οἰκέω','οἰκεῖν','present','active'),
    inf('οἰκέω','οἰκῆσαι','aorist','active'),
    part('οἰκέω','οἰκῶν','present','active','masc'),
    part('οἰκέω','οἰκοῦσα','present','active','fem'),
    part('οἰκέω','οἰκοῦν','present','active','neut'),
    part('οἰκέω','οἰκήσας','aorist','active','masc'),
    part('οἰκέω','οἰκήσασα','aorist','active','fem'),
    part('οἰκέω','οἰκῆσαν','aorist','active','neut')
  ];

  GP['ὑμνέω'] = [
    finite('ὑμνέω','ὑμνῶ','present','active','indicative','1sg','sg'),
    finite('ὑμνέω','ὑμνεῖς','present','active','indicative','2sg','sg'),
    finite('ὑμνέω','ὑμνεῖ','present','active','indicative','3sg','sg'),
    finite('ὑμνέω','ὑμνοῦμεν','present','active','indicative','1pl','pl'),
    finite('ὑμνέω','ὑμνεῖτε','present','active','indicative','2pl','pl'),
    finite('ὑμνέω','ὑμνοῦσιν','present','active','indicative','3pl','pl'),
    finite('ὑμνέω','ὑμνήσω','future','active','indicative','1sg','sg'),
    finite('ὑμνέω','ὕμνησα','aorist','active','indicative','1sg','sg'),
    inf('ὑμνέω','ὑμνεῖν','present','active'),
    inf('ὑμνέω','ὑμνῆσαι','aorist','active'),
    part('ὑμνέω','ὑμνῶν','present','active','masc'),
    part('ὑμνέω','ὑμνοῦσα','present','active','fem'),
    part('ὑμνέω','ὑμνοῦν','present','active','neut'),
    part('ὑμνέω','ὑμνήσας','aorist','active','masc'),
    part('ὑμνέω','ὑμνήσασα','aorist','active','fem'),
    part('ὑμνέω','ὑμνῆσαν','aorist','active','neut')
  ];

  GP['θηράω'] = [
    finite('θηράω','θηρῶ','present','active','indicative','1sg','sg'),
    finite('θηράω','θηρᾷς','present','active','indicative','2sg','sg'),
    finite('θηράω','θηρᾷ','present','active','indicative','3sg','sg'),
    finite('θηράω','θηρῶμεν','present','active','indicative','1pl','pl'),
    finite('θηράω','θηρᾶτε','present','active','indicative','2pl','pl'),
    finite('θηράω','θηρῶσιν','present','active','indicative','3pl','pl'),
    finite('θηράω','θηράσω','future','active','indicative','1sg','sg'),
    finite('θηράω','ἐθήρασα','aorist','active','indicative','1sg','sg'),
    inf('θηράω','θηρᾶν','present','active'),
    inf('θηράω','θηρᾶσαι','aorist','active'),
    part('θηράω','θηρῶν','present','active','masc'),
    part('θηράω','θηρῶσα','present','active','fem'),
    part('θηράω','θηρῶν','present','active','neut'),
    part('θηράω','θηράσας','aorist','active','masc'),
    part('θηράω','θηράσασα','aorist','active','fem'),
    part('θηράω','θηρᾶσαν','aorist','active','neut')
  ];

  GP['αἰτιῶμαι'] = [
    finite('αἰτιῶμαι','αἰτιῶμαι','present','middle/passive','indicative','1sg','sg'),
    finite('αἰτιῶμαι','αἰτιᾷ','present','middle/passive','indicative','2sg','sg'),
    finite('αἰτιῶμαι','αἰτιᾶται','present','middle/passive','indicative','3sg','sg'),
    finite('αἰτιῶμαι','αἰτιώμεθα','present','middle/passive','indicative','1pl','pl'),
    finite('αἰτιῶμαι','αἰτιᾶσθε','present','middle/passive','indicative','2pl','pl'),
    finite('αἰτιῶμαι','αἰτιῶνται','present','middle/passive','indicative','3pl','pl'),
    finite('αἰτιῶμαι','αἰτιάσομαι','future','middle','indicative','1sg','sg'),
    finite('αἰτιῶμαι','ᾐτιασάμην','aorist','middle','indicative','1sg','sg'),
    inf('αἰτιῶμαι','αἰτιᾶσθαι','present','middle'),
    inf('αἰτιῶμαι','αἰτιάσασθαι','aorist','middle'),
    part('αἰτιῶμαι','αἰτιώμενος','present','middle','masc'),
    part('αἰτιῶμαι','αἰτιωμένη','present','middle','fem'),
    part('αἰτιῶμαι','αἰτιώμενον','present','middle','neut'),
    part('αἰτιῶμαι','αἰτιασάμενος','aorist','middle','masc'),
    part('αἰτιῶμαι','αἰτιασαμένη','aorist','middle','fem'),
    part('αἰτιῶμαι','αἰτιασάμενον','aorist','middle','neut')
  ];

  GP['θεάομαι'] = [
    finite('θεάομαι','θεῶμαι','present','middle/passive','indicative','1sg','sg'),
    finite('θεάομαι','θεᾷ','present','middle/passive','indicative','2sg','sg'),
    finite('θεάομαι','θεᾶται','present','middle/passive','indicative','3sg','sg'),
    finite('θεάομαι','θεώμεθα','present','middle/passive','indicative','1pl','pl'),
    finite('θεάομαι','θεᾶσθε','present','middle/passive','indicative','2pl','pl'),
    finite('θεάομαι','θεῶνται','present','middle/passive','indicative','3pl','pl'),
    finite('θεάομαι','θεάσομαι','future','middle','indicative','1sg','sg'),
    finite('θεάομαι','ἐθεασάμην','aorist','middle','indicative','1sg','sg'),
    finite('θεάομαι','τεθέαμαι','perfect','middle/passive','indicative','1sg','sg'),
    finite('θεάομαι','ἐθεάθην','aorist','passive','indicative','1sg','sg'),
    inf('θεάομαι','θεᾶσθαι','present','middle'),
    inf('θεάομαι','θεάσασθαι','aorist','middle'),
    part('θεάομαι','θεώμενος','present','middle','masc'),
    part('θεάομαι','θεωμένη','present','middle','fem'),
    part('θεάομαι','θεώμενον','present','middle','neut'),
    part('θεάομαι','θεασάμενος','aorist','middle','masc'),
    part('θεάομαι','θεασαμένη','aorist','middle','fem'),
    part('θεάομαι','θεασάμενον','aorist','middle','neut'),
    part('θεάομαι','τεθεαμένος','perfect','middle/passive','masc'),
    part('θεάομαι','τεθεαμένη','perfect','middle/passive','fem'),
    part('θεάομαι','τεθεαμένον','perfect','middle/passive','neut')
  ];

  GP['ὑπισχνέομαι'] = [
    finite('ὑπισχνέομαι','ὑπισχνοῦμαι','present','middle/passive','indicative','1sg','sg'),
    finite('ὑπισχνέομαι','ὑπισχνῇ','present','middle/passive','indicative','2sg','sg'),
    finite('ὑπισχνέομαι','ὑπισχνεῖται','present','middle/passive','indicative','3sg','sg'),
    finite('ὑπισχνέομαι','ὑπισχνούμεθα','present','middle/passive','indicative','1pl','pl'),
    finite('ὑπισχνέομαι','ὑπισχνεῖσθε','present','middle/passive','indicative','2pl','pl'),
    finite('ὑπισχνέομαι','ὑπισχνοῦνται','present','middle/passive','indicative','3pl','pl'),
    finite('ὑπισχνέομαι','ὑποσχήσομαι','future','middle','indicative','1sg','sg'),
    finite('ὑπισχνέομαι','ὑπεσχόμην','aorist','middle','indicative','1sg','sg'),
    finite('ὑπισχνέομαι','ὑπέσχημαι','perfect','middle/passive','indicative','1sg','sg'),
    inf('ὑπισχνέομαι','ὑπισχνεῖσθαι','present','middle'),
    inf('ὑπισχνέομαι','ὑποσχέσθαι','aorist','middle'),
    part('ὑπισχνέομαι','ὑπισχνούμενος','present','middle','masc'),
    part('ὑπισχνέομαι','ὑπισχνουμένη','present','middle','fem'),
    part('ὑπισχνέομαι','ὑπισχνούμενον','present','middle','neut'),
    part('ὑπισχνέομαι','ὑποσχόμενος','aorist','middle','masc'),
    part('ὑπισχνέομαι','ὑποσχομένη','aorist','middle','fem'),
    part('ὑπισχνέομαι','ὑποσχόμενον','aorist','middle','neut')
  ];

  GP['ἀφικνέομαι'] = [
    finite('ἀφικνέομαι','ἀφικνοῦμαι','present','middle/passive','indicative','1sg','sg'),
    finite('ἀφικνέομαι','ἀφικνῇ','present','middle/passive','indicative','2sg','sg'),
    finite('ἀφικνέομαι','ἀφικνεῖται','present','middle/passive','indicative','3sg','sg'),
    finite('ἀφικνέομαι','ἀφικνούμεθα','present','middle/passive','indicative','1pl','pl'),
    finite('ἀφικνέομαι','ἀφικνεῖσθε','present','middle/passive','indicative','2pl','pl'),
    finite('ἀφικνέομαι','ἀφικνοῦνται','present','middle/passive','indicative','3pl','pl'),
    finite('ἀφικνέομαι','ἀφίξομαι','future','middle','indicative','1sg','sg'),
    finite('ἀφικνέομαι','ἀφικόμην','aorist','middle','indicative','1sg','sg'),
    inf('ἀφικνέομαι','ἀφικνεῖσθαι','present','middle'),
    inf('ἀφικνέομαι','ἀφικέσθαι','aorist','middle'),
    part('ἀφικνέομαι','ἀφικνούμενος','present','middle','masc'),
    part('ἀφικνέομαι','ἀφικνουμένη','present','middle','fem'),
    part('ἀφικνέομαι','ἀφικνούμενον','present','middle','neut'),
    part('ἀφικνέομαι','ἀφικόμενος','aorist','middle','masc'),
    part('ἀφικνέομαι','ἀφικομένη','aorist','middle','fem'),
    part('ἀφικνέομαι','ἀφικόμενον','aorist','middle','neut')
  ];

  SV['αἰτιῶμαι'] = {
    status: 'slot-validated',
    summary: 'Στοχευμένος έλεγχος βασικών σχολικών slots για συνηρημένο αποθετικό σε -άομαι/-ῶμαι.',
    slots: [
      {slot:'present|middle|indicative|1sg', label:'ενεστώτας • μέση • οριστική • α΄ ενικό', form:'αἰτιῶμαι', note:'συνηρημένος λημματικός τύπος'},
      {slot:'present|middle|indicative|3sg', label:'ενεστώτας • μέση • οριστική • γ΄ ενικό', form:'αἰτιᾶται', note:'βασικός προσωπικός τύπος'},
      {slot:'future|middle|indicative|1sg', label:'μέλλοντας • μέση • οριστική • α΄ ενικό', form:'αἰτιάσομαι', note:'κανονικός αποθετικός μέλλοντας'},
      {slot:'aorist|middle|indicative|1sg', label:'αόριστος • μέση • οριστική • α΄ ενικό', form:'ᾐτιασάμην', note:'βασικός αοριστικός τύπος'},
      {slot:'present|middle|infinitive', label:'ενεστώτας • μέση • απαρέμφατο', form:'αἰτιᾶσθαι', note:'συνηρημένο απαρέμφατο'},
      {slot:'present|middle|participle|masc.nom.sg', label:'ενεστώτας • μέση • μετοχή • αρσενικό ον. εν.', form:'αἰτιώμενος', note:'χαρακτηριστική μετοχική βάση'}
    ]
  };

  SV['ἀφικνέομαι'] = {
    status: 'slot-validated',
    summary: 'Έλεγχος βασικών slots για το ιδιότυπο αποθετικό συνηρημένο ἀφικνέομαι.',
    slots: [
      {slot:'present|middle|indicative|1sg', label:'ενεστώτας • μέση • οριστική • α΄ ενικό', form:'ἀφικνοῦμαι', note:'συνηρημένη σχολική μορφή'},
      {slot:'present|middle|indicative|3sg', label:'ενεστώτας • μέση • οριστική • γ΄ ενικό', form:'ἀφικνεῖται', note:'βασικός αφηγηματικός τύπος'},
      {slot:'future|middle|indicative|1sg', label:'μέλλοντας • μέση • οριστική • α΄ ενικό', form:'ἀφίξομαι', note:'χαρακτηριστικός μελλοντικός τύπος'},
      {slot:'aorist|middle|indicative|1sg', label:'αόριστος • μέση • οριστική • α΄ ενικό', form:'ἀφικόμην', note:'βασικός αοριστικός τύπος'},
      {slot:'aorist|middle|infinitive', label:'αόριστος • μέση • απαρέμφατο', form:'ἀφικέσθαι', note:'σχολικά χρήσιμο απαρέμφατο'},
      {slot:'aorist|middle|participle|masc.nom.sg', label:'αόριστος • μέση • μετοχή • αρσενικό ον. εν.', form:'ἀφικόμενος', note:'βασική μετοχική βάση'}
    ]
  };

  SV['ὑπισχνέομαι'] = {
    status: 'slot-validated',
    summary: 'Έλεγχος βασικών slots για το συνηρημένο αποθετικό ὑπισχνέομαι/ὑπισχνοῦμαι.',
    slots: [
      {slot:'present|middle|indicative|1sg', label:'ενεστώτας • μέση • οριστική • α΄ ενικό', form:'ὑπισχνοῦμαι', note:'συνηρημένος λημματικός τύπος'},
      {slot:'present|middle|indicative|3sg', label:'ενεστώτας • μέση • οριστική • γ΄ ενικό', form:'ὑπισχνεῖται', note:'βασικός τύπος'},
      {slot:'future|middle|indicative|1sg', label:'μέλλοντας • μέση • οριστική • α΄ ενικό', form:'ὑποσχήσομαι', note:'ανώμαλος μελλοντικός σχηματισμός'},
      {slot:'aorist|middle|indicative|1sg', label:'αόριστος • μέση • οριστική • α΄ ενικό', form:'ὑπεσχόμην', note:'βασικός αοριστικός τύπος'},
      {slot:'present|middle|infinitive', label:'ενεστώτας • μέση • απαρέμφατο', form:'ὑπισχνεῖσθαι', note:'συνηρημένο απαρέμφατο'},
      {slot:'aorist|middle|participle|masc.nom.sg', label:'αόριστος • μέση • μετοχή • αρσενικό ον. εν.', form:'ὑποσχόμενος', note:'χαρακτηριστική μετοχή'}
    ]
  };



  GP['ψαύω'] = [
    finite('ψαύω','ψαύω','present','active','indicative','1sg','sg'),
    finite('ψαύω','ψαύεις','present','active','indicative','2sg','sg'),
    finite('ψαύω','ψαύει','present','active','indicative','3sg','sg'),
    finite('ψαύω','ψαύομεν','present','active','indicative','1pl','pl'),
    finite('ψαύω','ψαύετε','present','active','indicative','2pl','pl'),
    finite('ψαύω','ψαύουσιν','present','active','indicative','3pl','pl'),
    finite('ψαύω','ψαύσω','future','active','indicative','1sg','sg'),
    finite('ψαύω','ἔψαυσα','aorist','active','indicative','1sg','sg'),
    inf('ψαύω','ψαύειν','present','active'),
    inf('ψαύω','ψαῦσαι','aorist','active'),
    part('ψαύω','ψαύων','present','active','masc'),
    part('ψαύω','ψαύουσα','present','active','fem'),
    part('ψαύω','ψαῦον','present','active','neut'),
    part('ψαύω','ψαύσας','aorist','active','masc'),
    part('ψαύω','ψαύσασα','aorist','active','fem'),
    part('ψαύω','ψαῦσαν','aorist','active','neut')
  ];

  GP['ψηφίζω'] = [
    finite('ψηφίζω','ψηφίζω','present','active','indicative','1sg','sg'),
    finite('ψηφίζω','ψηφίζεις','present','active','indicative','2sg','sg'),
    finite('ψηφίζω','ψηφίζει','present','active','indicative','3sg','sg'),
    finite('ψηφίζω','ψηφίζομεν','present','active','indicative','1pl','pl'),
    finite('ψηφίζω','ψηφίζετε','present','active','indicative','2pl','pl'),
    finite('ψηφίζω','ψηφίζουσιν','present','active','indicative','3pl','pl'),
    finite('ψηφίζω','ψηφιῶ','future','active','indicative','1sg','sg'),
    finite('ψηφίζω','ἐψήφισα','aorist','active','indicative','1sg','sg'),
    finite('ψηφίζω','ἐψήφικα','perfect','active','indicative','1sg','sg'),
    finite('ψηφίζω','ἐψήφισμαι','perfect','middle/passive','indicative','1sg','sg'),
    finite('ψηφίζω','ἐψηφίσθην','aorist','passive','indicative','1sg','sg'),
    inf('ψηφίζω','ψηφίζειν','present','active'),
    inf('ψηφίζω','ψηφίσαι','aorist','active'),
    inf('ψηφίζω','ἐψηφικέναι','perfect','active'),
    inf('ψηφίζω','ἐψηφίσθαι','perfect','middle/passive'),
    inf('ψηφίζω','ψηφισθῆναι','aorist','passive'),
    part('ψηφίζω','ψηφίζων','present','active','masc'),
    part('ψηφίζω','ψηφίζουσα','present','active','fem'),
    part('ψηφίζω','ψηφίζον','present','active','neut'),
    part('ψηφίζω','ψηφίσας','aorist','active','masc'),
    part('ψηφίζω','ψηφίσασα','aorist','active','fem'),
    part('ψηφίζω','ψηφῖσαν','aorist','active','neut'),
    part('ψηφίζω','ἐψηφισμένος','perfect','middle/passive','masc'),
    part('ψηφίζω','ἐψηφισμένη','perfect','middle/passive','fem'),
    part('ψηφίζω','ἐψηφισμένον','perfect','middle/passive','neut'),
    part('ψηφίζω','ψηφισθείς','aorist','passive','masc'),
    part('ψηφίζω','ψηφισθεῖσα','aorist','passive','fem'),
    part('ψηφίζω','ψηφισθέν','aorist','passive','neut')
  ];

  GP['ψεύδομαι'] = [
    finite('ψεύδομαι','ψεύδομαι','present','middle/passive','indicative','1sg','sg'),
    finite('ψεύδομαι','ψεύδῃ','present','middle/passive','indicative','2sg','sg'),
    finite('ψεύδομαι','ψεύδεται','present','middle/passive','indicative','3sg','sg'),
    finite('ψεύδομαι','ψευδόμεθα','present','middle/passive','indicative','1pl','pl'),
    finite('ψεύδομαι','ψεύδεσθε','present','middle/passive','indicative','2pl','pl'),
    finite('ψεύδομαι','ψεύδονται','present','middle/passive','indicative','3pl','pl'),
    finite('ψεύδομαι','ψεύσομαι','future','middle','indicative','1sg','sg'),
    finite('ψεύδομαι','ἐψευσάμην','aorist','middle','indicative','1sg','sg'),
    finite('ψεύδομαι','ψευσθήσομαι','future','passive','indicative','1sg','sg'),
    finite('ψεύδομαι','ἐψεύσθην','aorist','passive','indicative','1sg','sg'),
    inf('ψεύδομαι','ψεύδεσθαι','present','middle/passive'),
    inf('ψεύδομαι','ψεύσασθαι','aorist','middle'),
    inf('ψεύδομαι','ψευσθῆναι','aorist','passive'),
    part('ψεύδομαι','ψευδόμενος','present','middle/passive','masc'),
    part('ψεύδομαι','ψευδομένη','present','middle/passive','fem'),
    part('ψεύδομαι','ψευδόμενον','present','middle/passive','neut'),
    part('ψεύδομαι','ψευσάμενος','aorist','middle','masc'),
    part('ψεύδομαι','ψευσαμένη','aorist','middle','fem'),
    part('ψεύδομαι','ψευσάμενον','aorist','middle','neut'),
    part('ψεύδομαι','ψευσθείς','aorist','passive','masc'),
    part('ψεύδομαι','ψευσθεῖσα','aorist','passive','fem'),
    part('ψεύδομαι','ψευσθέν','aorist','passive','neut')
  ];

  GP['ῥίπτω'] = [
    finite('ῥίπτω','ῥίπτω','present','active','indicative','1sg','sg'),
    finite('ῥίπτω','ῥίπτεις','present','active','indicative','2sg','sg'),
    finite('ῥίπτω','ῥίπτει','present','active','indicative','3sg','sg'),
    finite('ῥίπτω','ῥίπτομεν','present','active','indicative','1pl','pl'),
    finite('ῥίπτω','ῥίπτετε','present','active','indicative','2pl','pl'),
    finite('ῥίπτω','ῥίπτουσιν','present','active','indicative','3pl','pl'),
    finite('ῥίπτω','ῥίψω','future','active','indicative','1sg','sg'),
    finite('ῥίπτω','ἔρριψα','aorist','active','indicative','1sg','sg'),
    finite('ῥίπτω','ἔρριφα','perfect','active','indicative','1sg','sg'),
    finite('ῥίπτω','ἔρριμμαι','perfect','middle/passive','indicative','1sg','sg'),
    finite('ῥίπτω','ἐρρίφθην','aorist','passive','indicative','1sg','sg'),
    inf('ῥίπτω','ῥίπτειν','present','active'),
    inf('ῥίπτω','ῥῖψαι','aorist','active'),
    inf('ῥίπτω','ἐρριφέναι','perfect','active'),
    inf('ῥίπτω','ἐρρῖφθαι','perfect','middle/passive'),
    inf('ῥίπτω','ῥιφθῆναι','aorist','passive'),
    part('ῥίπτω','ῥίπτων','present','active','masc'),
    part('ῥίπτω','ῥίπτουσα','present','active','fem'),
    part('ῥίπτω','ῥίπτον','present','active','neut'),
    part('ῥίπτω','ῥίψας','aorist','active','masc'),
    part('ῥίπτω','ῥίψασα','aorist','active','fem'),
    part('ῥίπτω','ῥῖψαν','aorist','active','neut'),
    part('ῥίπτω','ἐρριμμένος','perfect','middle/passive','masc'),
    part('ῥίπτω','ἐρριμμένη','perfect','middle/passive','fem'),
    part('ῥίπτω','ἐρριμμένον','perfect','middle/passive','neut'),
    part('ῥίπτω','ῥιφθείς','aorist','passive','masc'),
    part('ῥίπτω','ῥιφθεῖσα','aorist','passive','fem'),
    part('ῥίπτω','ῥιφθέν','aorist','passive','neut')
  ];

  GP['ὑβρίζω'] = [
    finite('ὑβρίζω','ὑβρίζω','present','active','indicative','1sg','sg'),
    finite('ὑβρίζω','ὑβρίζεις','present','active','indicative','2sg','sg'),
    finite('ὑβρίζω','ὑβρίζει','present','active','indicative','3sg','sg'),
    finite('ὑβρίζω','ὑβρίζομεν','present','active','indicative','1pl','pl'),
    finite('ὑβρίζω','ὑβρίζετε','present','active','indicative','2pl','pl'),
    finite('ὑβρίζω','ὑβρίζουσιν','present','active','indicative','3pl','pl'),
    finite('ὑβρίζω','ὕβρισα','aorist','active','indicative','1sg','sg'),
    finite('ὑβρίζω','ὑβρίσθην','aorist','passive','indicative','1sg','sg'),
    inf('ὑβρίζω','ὑβρίζειν','present','active'),
    inf('ὑβρίζω','ὑβρίσαι','aorist','active'),
    inf('ὑβρίζω','ὑβρισθῆναι','aorist','passive'),
    part('ὑβρίζω','ὑβρίζων','present','active','masc'),
    part('ὑβρίζω','ὑβρίζουσα','present','active','fem'),
    part('ὑβρίζω','ὑβρίζον','present','active','neut'),
    part('ὑβρίζω','ὑβρίσας','aorist','active','masc'),
    part('ὑβρίζω','ὑβρίσασα','aorist','active','fem'),
    part('ὑβρίζω','ὑβρῖσαν','aorist','active','neut'),
    part('ὑβρίζω','ὑβρισθείς','aorist','passive','masc'),
    part('ὑβρίζω','ὑβρισθεῖσα','aorist','passive','fem'),
    part('ὑβρίζω','ὑβρισθέν','aorist','passive','neut')
  ];

  SV['ψαύω'] = {
    status: 'slot-validated',
    summary: 'Έλεγχος βασικών σχολικών slots για το κανονικό ρήμα ψαύω.',
    slots: [
      {slot:'present|active|indicative|1sg', label:'ενεστώτας • ενεργητική • οριστική • α΄ ενικό', form:'ψαύω', note:'βασικός λημματικός τύπος'},
      {slot:'present|active|indicative|3sg', label:'ενεστώτας • ενεργητική • οριστική • γ΄ ενικό', form:'ψαύει', note:'τυπικός ενεστωτικός τύπος'},
      {slot:'future|active|indicative|1sg', label:'μέλλοντας • ενεργητική • οριστική • α΄ ενικό', form:'ψαύσω', note:'τακτικός μελλοντικός σχηματισμός'},
      {slot:'aorist|active|indicative|1sg', label:'αόριστος • ενεργητική • οριστική • α΄ ενικό', form:'ἔψαυσα', note:'βασικός αοριστικός τύπος'},
      {slot:'present|active|infinitive', label:'ενεστώτας • ενεργητική • απαρέμφατο', form:'ψαύειν', note:'μη προσωπικός τύπος'},
      {slot:'present|active|participle|masc.nom.sg', label:'ενεστώτας • ενεργητική • μετοχή • αρσενικό ον. εν.', form:'ψαύων', note:'βασική μετοχική βάση'}
    ]
  };

  SV['ψηφίζω'] = {
    status: 'slot-validated',
    summary: 'Έλεγχος βασικών slots για το ρήμα ψηφίζω με ενεργητική και παθητική σειρά.',
    slots: [
      {slot:'present|active|indicative|1sg', label:'ενεστώτας • ενεργητική • οριστική • α΄ ενικό', form:'ψηφίζω', note:'βασικός λημματικός τύπος'},
      {slot:'future|active|indicative|1sg', label:'μέλλοντας • ενεργητική • οριστική • α΄ ενικό', form:'ψηφιῶ', note:'αττικοελληνικός μέλλοντας'},
      {slot:'aorist|active|indicative|1sg', label:'αόριστος • ενεργητική • οριστική • α΄ ενικό', form:'ἐψήφισα', note:'βασικός αοριστικός τύπος'},
      {slot:'perfect|active|indicative|1sg', label:'παρακείμενος • ενεργητική • οριστική • α΄ ενικό', form:'ἐψήφικα', note:'βεβαιωμένος παρακειμενικός τύπος'},
      {slot:'aorist|passive|indicative|1sg', label:'αόριστος • παθητική • οριστική • α΄ ενικό', form:'ἐψηφίσθην', note:'τυπικός παθητικός αόριστος'},
      {slot:'aorist|active|participle|masc.nom.sg', label:'αόριστος • ενεργητική • μετοχή • αρσενικό ον. εν.', form:'ψηφίσας', note:'χαρακτηριστική μετοχή'}
    ]
  };

  SV['ψεύδομαι'] = {
    status: 'slot-validated',
    summary: 'Έλεγχος βασικών slots για το αποθετικό ψεύδομαι με μέση και παθητική σειρά.',
    slots: [
      {slot:'present|middle/passive|indicative|1sg', label:'ενεστώτας • μέση/παθητική • οριστική • α΄ ενικό', form:'ψεύδομαι', note:'βασικός λημματικός τύπος'},
      {slot:'present|middle/passive|indicative|3sg', label:'ενεστώτας • μέση/παθητική • οριστική • γ΄ ενικό', form:'ψεύδεται', note:'τακτικός ενεστωτικός τύπος'},
      {slot:'future|middle|indicative|1sg', label:'μέλλοντας • μέση • οριστική • α΄ ενικό', form:'ψεύσομαι', note:'βασικός μελλοντικός τύπος'},
      {slot:'aorist|middle|indicative|1sg', label:'αόριστος • μέση • οριστική • α΄ ενικό', form:'ἐψευσάμην', note:'χαρακτηριστικός αποθετικός αόριστος'},
      {slot:'aorist|passive|indicative|1sg', label:'αόριστος • παθητική • οριστική • α΄ ενικό', form:'ἐψεύσθην', note:'παθητικός αόριστος'},
      {slot:'aorist|middle|participle|masc.nom.sg', label:'αόριστος • μέση • μετοχή • αρσενικό ον. εν.', form:'ψευσάμενος', note:'βασική αοριστική μετοχή'}
    ]
  };

  SV['ῥίπτω'] = {
    status: 'slot-validated',
    summary: 'Έλεγχος βασικών slots για το ρήμα ῥίπτω με ενεργητική, παρακειμενική και παθητική σειρά.',
    slots: [
      {slot:'present|active|indicative|1sg', label:'ενεστώτας • ενεργητική • οριστική • α΄ ενικό', form:'ῥίπτω', note:'βασικός λημματικός τύπος'},
      {slot:'future|active|indicative|1sg', label:'μέλλοντας • ενεργητική • οριστική • α΄ ενικό', form:'ῥίψω', note:'μετατροπή χειλοϋπερωικού σε -ψ-'},
      {slot:'aorist|active|indicative|1sg', label:'αόριστος • ενεργητική • οριστική • α΄ ενικό', form:'ἔρριψα', note:'τυπικός αοριστικός τύπος'},
      {slot:'perfect|active|indicative|1sg', label:'παρακείμενος • ενεργητική • οριστική • α΄ ενικό', form:'ἔρριφα', note:'βεβαιωμένος παρακείμενος'},
      {slot:'aorist|passive|indicative|1sg', label:'αόριστος • παθητική • οριστική • α΄ ενικό', form:'ἐρρίφθην', note:'παθητικός αόριστος'},
      {slot:'aorist|passive|participle|masc.nom.sg', label:'αόριστος • παθητική • μετοχή • αρσενικό ον. εν.', form:'ῥιφθείς', note:'βασική παθητική μετοχή'}
    ]
  };

  SV['ὑβρίζω'] = {
    status: 'slot-validated',
    summary: 'Έλεγχος βασικών slots για το ρήμα ὑβρίζω με συντηρητική κάλυψη αορίστου και παθητικού αορίστου.',
    slots: [
      {slot:'present|active|indicative|1sg', label:'ενεστώτας • ενεργητική • οριστική • α΄ ενικό', form:'ὑβρίζω', note:'βασικός λημματικός τύπος'},
      {slot:'present|active|indicative|3sg', label:'ενεστώτας • ενεργητική • οριστική • γ΄ ενικό', form:'ὑβρίζει', note:'τακτικός ενεστωτικός τύπος'},
      {slot:'aorist|active|indicative|1sg', label:'αόριστος • ενεργητική • οριστική • α΄ ενικό', form:'ὕβρισα', note:'βεβαιωμένος αοριστικός τύπος'},
      {slot:'aorist|passive|indicative|1sg', label:'αόριστος • παθητική • οριστική • α΄ ενικό', form:'ὑβρίσθην', note:'βεβαιωμένος παθητικός αόριστος'},
      {slot:'aorist|active|infinitive', label:'αόριστος • ενεργητική • απαρέμφατο', form:'ὑβρίσαι', note:'αναλογικός σχηματισμός από τον αόριστο'},
      {slot:'aorist|passive|participle|masc.nom.sg', label:'αόριστος • παθητική • μετοχή • αρσενικό ον. εν.', form:'ὑβρισθείς', note:'παθητική μετοχική βάση'}
    ]
  };

  function setAudit(lemma, forms, slotChecks){
    SA.lemmas[lemma] = {
      lemma,
      status:'generated+slots',
      readiness:'partial',
      manualForms:0,
      finite:forms.filter(x=>x.kind==='finite').length,
      infinitives:forms.filter(x=>x.kind==='infinitive').length,
      participles:forms.filter(x=>x.kind==='participle').length,
      slotChecks,
      curated:true,
      needsAudit:true,
      summary:`grammar-based synthesis + slot validation · forms ${forms.length} · slot checks ${slotChecks}`
    };
  }
  setAudit('αἰτιῶμαι', GP['αἰτιῶμαι'], 6);
  setAudit('ἀφικνέομαι', GP['ἀφικνέομαι'], 6);
  setAudit('ψαύω', GP['ψαύω'], 6);
  setAudit('ψηφίζω', GP['ψηφίζω'], 6);
  setAudit('ψεύδομαι', GP['ψεύδομαι'], 6);
  setAudit('ῥίπτω', GP['ῥίπτω'], 6);
  setAudit('ὑβρίζω', GP['ὑβρίζω'], 6);
})();
