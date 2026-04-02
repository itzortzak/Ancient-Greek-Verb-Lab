
(function(){
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase().trim(); }
  function entrySig(e){ return [e.lemma||'', e.form||'', e.kind||'', e.tense||'', e.voice||'', e.mood||'', e.person||'', e.number||'', e.gender||'', e.case||''].join('|'); }
  window.MANUAL_PARADIGMS = window.MANUAL_PARADIGMS || {};
  window.FORM_INDEX = window.FORM_INDEX || {};

  const TARGETS = ['συλλέγω','ῥήγνυμι','στρώννυμι','ὑπόκειμαι','ὑγιαίνω'];

  function mk(lemma, tense, voice, form, gender, number, kase){
    const e = {lemma, form, kind:'participle', tense, voice, mood:'participle', gender};
    if(number) e.number = number;
    if(kase) e.case = kase;
    return e;
  }

  function familyMenos(lemma, tense, voice, masc, fem, neut){
    const stemM = masc.replace(/μενος$/u,'');
    const stemF = fem.replace(/μενη$/u,'');
    const stemN = neut.replace(/μενον$/u,'');
    return [
      mk(lemma,tense,voice,masc,'masc','sg','nom'), mk(lemma,tense,voice,stemM+'μενου','masc','sg','gen'), mk(lemma,tense,voice,stemM+'μενῳ','masc','sg','dat'), mk(lemma,tense,voice,stemM+'μενον','masc','sg','acc'), mk(lemma,tense,voice,stemM+'μενε','masc','sg','voc'),
      mk(lemma,tense,voice,fem,'fem','sg','nom'), mk(lemma,tense,voice,stemF+'μένης','fem','sg','gen'), mk(lemma,tense,voice,stemF+'μένῃ','fem','sg','dat'), mk(lemma,tense,voice,stemF+'μένην','fem','sg','acc'), mk(lemma,tense,voice,fem,'fem','sg','voc'),
      mk(lemma,tense,voice,neut,'neut','sg','nom'), mk(lemma,tense,voice,stemN+'μενου','neut','sg','gen'), mk(lemma,tense,voice,stemN+'μενῳ','neut','sg','dat'), mk(lemma,tense,voice,neut,'neut','sg','acc'), mk(lemma,tense,voice,neut,'neut','sg','voc'),
      mk(lemma,tense,voice,stemM+'μενοι','masc','pl','nom'), mk(lemma,tense,voice,stemM+'μενων','masc','pl','gen'), mk(lemma,tense,voice,stemM+'μενοις','masc','pl','dat'), mk(lemma,tense,voice,stemM+'μενους','masc','pl','acc'), mk(lemma,tense,voice,stemM+'μενοι','masc','pl','voc'),
      mk(lemma,tense,voice,stemF+'μέναι','fem','pl','nom'), mk(lemma,tense,voice,stemF+'μενων','fem','pl','gen'), mk(lemma,tense,voice,stemF+'μέναις','fem','pl','dat'), mk(lemma,tense,voice,stemF+'μένας','fem','pl','acc'), mk(lemma,tense,voice,stemF+'μέναι','fem','pl','voc'),
      mk(lemma,tense,voice,stemN+'μενα','neut','pl','nom'), mk(lemma,tense,voice,stemN+'μενων','neut','pl','gen'), mk(lemma,tense,voice,stemN+'μενοις','neut','pl','dat'), mk(lemma,tense,voice,stemN+'μενα','neut','pl','acc'), mk(lemma,tense,voice,stemN+'μενα','neut','pl','voc')
    ];
  }

  function familySas(lemma, tense, voice, masc, fem, neut){
    const stemM = masc.replace(/ας$/u,'');
    const stemF = fem.replace(/ασα$/u,'');
    const stemN = neut.replace(/αν$/u,'');
    return [
      mk(lemma,tense,voice,masc,'masc','sg','nom'), mk(lemma,tense,voice,stemM+'αντος','masc','sg','gen'), mk(lemma,tense,voice,stemM+'αντι','masc','sg','dat'), mk(lemma,tense,voice,stemM+'αντα','masc','sg','acc'), mk(lemma,tense,voice,masc,'masc','sg','voc'),
      mk(lemma,tense,voice,fem,'fem','sg','nom'), mk(lemma,tense,voice,stemF+'άσης','fem','sg','gen'), mk(lemma,tense,voice,stemF+'άσῃ','fem','sg','dat'), mk(lemma,tense,voice,stemF+'ασαν','fem','sg','acc'), mk(lemma,tense,voice,fem,'fem','sg','voc'),
      mk(lemma,tense,voice,neut,'neut','sg','nom'), mk(lemma,tense,voice,stemN+'αντος','neut','sg','gen'), mk(lemma,tense,voice,stemN+'αντι','neut','sg','dat'), mk(lemma,tense,voice,neut,'neut','sg','acc'), mk(lemma,tense,voice,neut,'neut','sg','voc'),
      mk(lemma,tense,voice,stemM+'αντες','masc','pl','nom'), mk(lemma,tense,voice,stemM+'άντων','masc','pl','gen'), mk(lemma,tense,voice,stemM+'ασι','masc','pl','dat'), mk(lemma,tense,voice,stemM+'αντας','masc','pl','acc'), mk(lemma,tense,voice,stemM+'αντες','masc','pl','voc'),
      mk(lemma,tense,voice,stemF+'ασαι','fem','pl','nom'), mk(lemma,tense,voice,stemF+'ασῶν','fem','pl','gen'), mk(lemma,tense,voice,stemF+'άσαις','fem','pl','dat'), mk(lemma,tense,voice,stemF+'άσας','fem','pl','acc'), mk(lemma,tense,voice,stemF+'ασαι','fem','pl','voc'),
      mk(lemma,tense,voice,stemN+'αντα','neut','pl','nom'), mk(lemma,tense,voice,stemN+'άντων','neut','pl','gen'), mk(lemma,tense,voice,stemN+'ασι','neut','pl','dat'), mk(lemma,tense,voice,stemN+'αντα','neut','pl','acc'), mk(lemma,tense,voice,stemN+'αντα','neut','pl','voc')
    ];
  }

  const expansions = {
    'συλλέγω': [
      { tense:'aorist', voice:'active', oldForms:['συλλέξας','συλλέξασα','συλλέξαν'], entries: familySas('συλλέγω','aorist','active','συλλέξας','συλλέξασα','συλλέξαν') }
    ],
    'ῥήγνυμι': [
      { tense:'present', voice:'middle/passive', oldForms:['ῥηγνύμενος','ῥηγνυμένη','ῥηγνύμενον'], entries: familyMenos('ῥήγνυμι','present','middle/passive','ῥηγνύμενος','ῥηγνυμένη','ῥηγνύμενον') },
      { tense:'aorist', voice:'active', oldForms:['ῥήξας','ῥήξασα','ῥῆξαν'], entries: familySas('ῥήγνυμι','aorist','active','ῥήξας','ῥήξασα','ῥῆξαν') }
    ],
    'στρώννυμι': [
      { tense:'present', voice:'middle/passive', oldForms:['στορνύμενος','στορνυμένη','στορνύμενον'], entries: familyMenos('στρώννυμι','present','middle/passive','στορνύμενος','στορνυμένη','στορνύμενον') }
    ],
    'ὑπόκειμαι': [
      { tense:'present', voice:'middle/passive', oldForms:['ὑποκείμενος','ὑποκειμένη','ὑποκείμενον'], entries: familyMenos('ὑπόκειμαι','present','middle/passive','ὑποκείμενος','ὑποκειμένη','ὑποκείμενον') }
    ]
  };

  const stats = { lemmasTargeted: TARGETS.length, groupsExpanded: 0, visibleEntriesAdded: 0, oldBaseOnlyEntriesRemoved: 0, remainingBaseOnlyAfter: 0 };
  const perLemma = {};

  for(const lemma of TARGETS){
    const arr = Array.isArray(window.MANUAL_PARADIGMS[lemma]) ? window.MANUAL_PARADIGMS[lemma].slice() : [];
    let next = arr.slice();
    let removed = 0, added = 0;
    for(const spec of (expansions[lemma]||[])){
      const oldSet = new Set(spec.oldForms);
      const beforeLen = next.length;
      next = next.filter(e => !(e && e.mood==='participle' && e.tense===spec.tense && e.voice===spec.voice && oldSet.has(e.form) && !('case' in e)));
      removed += beforeLen - next.length;
      next.push(...spec.entries);
      added += spec.entries.length;
      stats.groupsExpanded += 1;
    }
    // de-duplicate exact entries
    const seen = new Set();
    next = next.filter(e => { const sig = entrySig(e); if(seen.has(sig)) return false; seen.add(sig); return true; });
    window.MANUAL_PARADIGMS[lemma] = next;
    perLemma[lemma] = { removedBaseOnlyEntries: removed, addedExpandedEntries: added, visibleEntriesAfter: next.length };
    stats.oldBaseOnlyEntriesRemoved += removed;
    stats.visibleEntriesAdded += added;
  }

  // rebuild FORM_INDEX only for targeted lemmas
  const normLemmaSet = new Set(TARGETS.map(normalizeGreek));
  for(const [key,bucket] of Object.entries(window.FORM_INDEX)){
    if(!Array.isArray(bucket)) continue;
    window.FORM_INDEX[key] = bucket.filter(entry => !normLemmaSet.has(normalizeGreek(entry.lemma||'')));
  }
  for(const lemma of TARGETS){
    const arr = window.MANUAL_PARADIGMS[lemma] || [];
    for(const item of arr){
      const form = item.form;
      if(!form) continue;
      const key = normalizeGreek(form);
      const bucket = window.FORM_INDEX[key] = window.FORM_INDEX[key] || [];
      const entry = {lemma:item.lemma, form:item.form, kind:item.kind, tense:item.tense, voice:item.voice, mood:item.mood};
      if(item.person) entry.person=item.person;
      if(item.number) entry.number=item.number;
      if(item.gender) entry.gender=item.gender;
      if(item.case) entry.case=item.case;
      const sig = entrySig(entry);
      const existing = new Set(bucket.map(entrySig));
      if(!existing.has(sig)) bucket.push(entry);
    }
  }

  const residuals = [];
  for(const lemma of TARGETS){
    for(const item of (window.MANUAL_PARADIGMS[lemma]||[])){
      if(item.mood==='participle' && !('case' in item)) residuals.push([lemma,item.tense,item.voice,item.form]);
    }
  }
  stats.remainingBaseOnlyAfter = residuals.length;

  window.AGVL_RUNTIME_PATCH = Object.assign({}, window.AGVL_RUNTIME_PATCH || {}, {
    nonFiniteConsistency10: true,
    nonFiniteConsistency10Targets: TARGETS,
    nonFiniteConsistency10Stats: stats,
    nonFiniteConsistency10Residuals: residuals
  });
})();
