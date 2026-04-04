(function(){
  const TARGETS = ['οἶδα','φημί','δύναμαι','ἐπίσταμαι','κεῖμαι','κάθημαι','δέδοικα'];
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase().trim(); }
  function slotKey(e){ return [e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|'); }
  function entrySig(e){ return [e.lemma||'',e.form||'',e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|'); }
  function clone(base, form){ const e = Object.assign({}, base); e.form = form; delete e.recognitionOnly; return e; }
  function variants(form){ const out=[form]; if((form||'').includes('(ν)')){ out.push(form.replace('(ν)','')); out.push(form.replace('(ν)','ν')); } return [...new Set(out)]; }
  function startsWithNorm(form, prefix){ return normalizeGreek(form).startsWith(normalizeGreek(prefix)); }
  function pick(entries, predicate){ return entries.find(predicate); }
  function one(entries, form){ return [clone(entries[0], form)]; }
  function combine(entries, forms){ return [clone(entries[0], forms.join(' / '))]; }
  function preferredPrefix(entries, prefix, fallback){ const found = pick(entries, e => startsWithNorm(e.form, prefix)); return found ? found.form : fallback; }

  function resolveOida(slot, entries){
    const [kind, tense, voice, mood, person, gender] = slot.split('|');
    if(kind==='finite' && tense==='perfect' && voice==='active' && mood==='indicative'){
      const map = {
        '1sg':'οἶδα', '2sg':'οἶσθα', '3sg':'οἶδε(ν)',
        '1pl':'ἴσμεν', '2pl':'ἴστε', '3pl':'ἴσασι(ν)'
      };
      if(map[person]) return one(entries, map[person]);
    }
    if(kind==='finite' && tense==='perfect' && voice==='active' && mood==='subjunctive' && person==='3pl') return one(entries,'εἰδῶσι(ν)');
    if(kind==='finite' && tense==='perfect' && voice==='active' && mood==='optative'){
      const map = {
        '1pl':['εἰδείημεν','εἰδεῖμεν'],
        '2pl':['εἰδείητε','εἰδεῖτε'],
        '3pl':['εἰδείησαν','εἰδεῖεν']
      };
      if(map[person]) return combine(entries, map[person]);
    }
    if(kind==='finite' && tense==='perfect' && voice==='active' && mood==='imperative'){
      if(person==='2sg') return one(entries,'ἴσθι');
      if(person==='3pl') return combine(entries,['ἴστων','ἴστωσαν']);
    }
    if(kind==='finite' && tense==='pluperfect' && voice==='active' && mood==='indicative'){
      const map = {
        '1sg':['ᾔδειν','ᾔδη'],
        '2sg':['ᾔδεις','ᾔδησθα'],
        '3sg':['ᾔδει','ᾔδη'],
        '1pl':['ᾖσμεν','ᾔδειμεν'],
        '2pl':['ᾖστε','ᾔδειτε'],
        '3pl':['ᾖσαν','ᾔδεσαν']
      };
      if(map[person]) return combine(entries, map[person]);
    }
    if(kind==='finite' && tense==='future' && voice==='middle' && mood==='indicative' && person==='2sg') return combine(entries,['εἴσῃ','εἴσει']);
    if(kind==='infinitive' && tense==='perfect' && voice==='active') return one(entries,'εἰδέναι');
    if(kind==='participle' && tense==='perfect' && voice==='active' && gender==='fem'){
      return one(entries, preferredPrefix(entries,'εἰδυ', entries[0].form));
    }
    return one(entries, entries[0].form);
  }

  function resolvePhemi(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='indicative'){
      if(person==='2sg') return one(entries,'φῄς');
      if(person==='3pl') return one(entries,'φασί(ν)');
    }
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='subjunctive'){
      if(person==='3sg') return one(entries,'φῇ');
      if(person==='3pl') return one(entries,'φῶσι(ν)');
    }
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='optative'){
      const map = {'1pl':'φαῖμεν','2pl':'φαῖτε','3pl':'φαῖεν'};
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='imperative' && person==='2sg') return one(entries,'φάθι');
    if(kind==='finite' && tense==='imperfect' && voice==='active' && mood==='indicative'){
      const map = {
        '1sg':'ἔφην','2sg':'ἔφησθα','3sg':'ἔφη','1pl':'ἔφαμεν','2pl':'ἔφατε','3pl':'ἔφασαν'
      };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='imperfect' && voice==='middle' && mood==='indicative'){
      const map = {
        '1sg':'ἐφάμην','2sg':'ἔφασο','3sg':'ἔφατο','1pl':'ἐφάμεθα','2pl':'ἔφασθε','3pl':'ἔφαντο'
      };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='future' && voice==='active' && mood==='indicative' && person==='3pl') return one(entries,'φήσουσι(ν)');
    if(kind==='finite' && tense==='aorist' && voice==='active' && mood==='indicative' && person==='3sg') return one(entries,'ἔφησε(ν)');
    if(kind==='finite' && tense==='aorist' && voice==='active' && mood==='subjunctive' && person==='3pl') return one(entries,'φήσωσι(ν)');
    if(kind==='finite' && tense==='aorist' && voice==='active' && mood==='optative'){
      const map = {'2sg':'φήσειας','3sg':'φήσειεν','3pl':'φήσειαν'};
      if(map[person]) return one(entries,map[person]);
    }
    return one(entries, entries[0].form);
  }

  function resolveEpistamai(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind==='finite' && tense==='present' && voice==='middle/passive' && mood==='imperative' && person==='2sg') return one(entries,'ἐπίστασο');
    if(kind==='finite' && tense==='imperfect' && voice==='middle/passive' && mood==='indicative' && person==='2sg') return one(entries,'ἠπίστασο');
    if(kind==='finite' && tense==='future' && voice==='middle/passive' && mood==='indicative' && person==='2sg') return combine(entries,['ἐπιστήσῃ','ἐπιστήσει']);
    if(kind==='finite' && tense==='aorist' && voice==='passive' && mood==='optative'){
      const map = {
        '1pl':['ἐπιστηθείημεν','ἐπιστηθεῖμεν'],
        '2pl':['ἐπιστηθείητε','ἐπιστηθεῖτε'],
        '3pl':['ἐπιστηθείησαν','ἐπιστηθεῖεν']
      };
      if(map[person]) return combine(entries,map[person]);
    }
    if(kind==='finite' && tense==='aorist' && voice==='passive' && mood==='imperative' && person==='3pl') return combine(entries,['ἐπιστηθέντων','ἐπιστηθέτωσαν']);
    return one(entries, entries[0].form);
  }

  function resolveKathemai(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind==='finite' && tense==='present' && voice==='middle/passive' && mood==='indicative' && person==='2sg') return combine(entries,['κάθησαι','κάθῃ']);
    if(kind==='finite' && tense==='present' && voice==='middle/passive' && mood==='subjunctive'){
      if(person==='1sg') return one(entries,'καθῶμαι');
      if(person==='2sg') return one(entries,'καθᾖ');
    }
    if(kind==='finite' && tense==='present' && voice==='middle/passive' && mood==='optative'){
      const map = {
        '1sg':'καθοίμην','2sg':'καθοῖο','3sg':'καθοῖτο','1pl':'καθοίμεθα','2pl':'καθοῖσθε','3pl':'καθοῖντο'
      };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='present' && voice==='middle/passive' && mood==='imperative' && person==='2sg') return combine(entries,['κάθησο','κάθου']);
    if(kind==='finite' && tense==='imperfect' && voice==='middle/passive' && mood==='indicative'){
      const map = {
        '1sg':'ἐκαθήμην','2sg':'ἐκάθησο','3sg':'ἐκάθητο','1pl':'ἐκαθήμεθα','2pl':'ἐκάθησθε','3pl':'ἐκάθηντο'
      };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='future' && voice==='middle' && mood==='indicative' && person==='1sg') return combine(entries,['καθήσομαι','καθεδοῦμαι']);
    if(kind==='finite' && tense==='future' && voice==='middle' && mood==='optative' && person==='1sg') return combine(entries,['καθησοίμην','καθεδοίμην']);
    if(kind==='infinitive' && tense==='future' && voice==='middle') return one(entries,'καθήσεσθαι');
    if(kind==='participle' && tense==='future' && voice==='middle') return one(entries, preferredPrefix(entries,'καθησο', entries[0].form));
    if(kind==='finite' && tense==='aorist' && voice==='passive' && mood==='optative'){
      const map = {
        '1pl':['καθεσθείημεν','καθεσθεῖμεν'],
        '2pl':['καθεσθείητε','καθεσθεῖτε'],
        '3pl':['καθεσθείησαν','καθεσθεῖεν']
      };
      if(map[person]) return combine(entries,map[person]);
    }
    if(kind==='finite' && tense==='aorist' && voice==='passive' && mood==='imperative' && person==='3pl') return combine(entries,['καθεσθέντων','καθεσθήτωσαν']);
    return one(entries, entries[0].form);
  }

  function resolveDedoika(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='indicative'){
      const map = {
        '1sg':'δέδοικα','2sg':'δέδοικας','3sg':'δέδοικε(ν)','1pl':'δεδοίκαμεν','2pl':'δεδοίκατε','3pl':'δεδοίκασι(ν)'
      };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='imperfect' && voice==='active' && mood==='indicative' && person==='3pl') return one(entries,'ἐδεδοίκεσαν');
    if(kind==='infinitive' && tense==='present' && voice==='active') return one(entries,'δεδοικέναι');
    if(kind==='participle' && tense==='present' && voice==='active') return one(entries, preferredPrefix(entries,'δεδοικ', entries[0].form));
    return one(entries, entries[0].form);
  }

  const resolvers = {
    'οἶδα': resolveOida,
    'φημί': resolvePhemi,
    'δύναμαι': (slot, entries) => one(entries, entries[0].form),
    'ἐπίσταμαι': resolveEpistamai,
    'κεῖμαι': (slot, entries) => one(entries, entries[0].form),
    'κάθημαι': resolveKathemai,
    'δέδοικα': resolveDedoika
  };

  const originalByLemma = {};
  const visibleByLemma = {};
  const stats = {};
  let keptVisible = 0;
  let demotedRecognition = 0;

  for(const lemma of TARGETS){
    const source = Array.isArray(window.MANUAL_PARADIGMS?.[lemma]) ? window.MANUAL_PARADIGMS[lemma].slice() : [];
    originalByLemma[lemma] = source.filter(e => !(e.number === 'du' || /du$/.test(e.person||'')));
    const groups = new Map();
    const order = [];
    for(const e of originalByLemma[lemma]){
      const k = slotKey(e);
      if(!groups.has(k)){ groups.set(k,[]); order.push(k); }
      groups.get(k).push(e);
    }
    const out = [];
    let duplicateGroups = 0;
    for(const k of order){
      const entries = groups.get(k);
      if(entries.length > 1) duplicateGroups++;
      const resolved = (resolvers[lemma] || ((slot, entries)=>one(entries, entries[0].form)))(k, entries);
      for(const e of resolved){ out.push(e); keptVisible++; }
    }
    window.MANUAL_PARADIGMS[lemma] = out;
    visibleByLemma[lemma] = out;
    stats[lemma] = { originalEntries: originalByLemma[lemma].length, visibleEntries: out.length, duplicateGroupsBefore: duplicateGroups, demotedRecognition: 0 };
  }

  window.FORM_INDEX = window.FORM_INDEX || {};
  const targetNorms = new Set(TARGETS.map(normalizeGreek));
  for(const [key, bucket] of Object.entries(window.FORM_INDEX)){
    if(!Array.isArray(bucket)) continue;
    const filtered = bucket.filter(entry => !targetNorms.has(normalizeGreek(entry.lemma||'')));
    if(filtered.length) window.FORM_INDEX[key] = filtered; else delete window.FORM_INDEX[key];
  }

  for(const lemma of TARGETS){
    const visible = visibleByLemma[lemma] || [];
    const visibleNormSig = new Set(visible.map(e => [normalizeGreek(e.lemma||''),normalizeGreek(e.form||''),e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|')));

    const allForIndex = [];
    for(const e of visible) allForIndex.push(Object.assign({}, e));
    for(const e of originalByLemma[lemma] || []){
      const normSig = [normalizeGreek(e.lemma||''),normalizeGreek(e.form||''),e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|');
      if(!visibleNormSig.has(normSig)){
        const r = Object.assign({}, e, { recognitionOnly:true });
        allForIndex.push(r);
        demotedRecognition++;
        stats[lemma].demotedRecognition++;
      }
    }
    for(const item of allForIndex){
      for(const form of variants(item.form)){
        const key = normalizeGreek(form);
        const bucket = window.FORM_INDEX[key] = window.FORM_INDEX[key] || [];
        const entry = {lemma:item.lemma, form, kind:item.kind, tense:item.tense, voice:item.voice, mood:item.mood};
        if(item.person) entry.person=item.person;
        if(item.gender) entry.gender=item.gender;
        if(item.case) entry.case=item.case;
        if(item.number) entry.number=item.number;
        if(item.recognitionOnly) entry.recognitionOnly = true;
        const sig = entrySig(entry) + '|' + (entry.recognitionOnly?'R':'V');
        const seen = new Set(bucket.map(x => entrySig(x) + '|' + (x.recognitionOnly?'R':'V')));
        if(!seen.has(sig)) bucket.push(entry);
      }
    }
  }

  window.AGVL_RUNTIME_PATCH = Object.assign({}, window.AGVL_RUNTIME_PATCH, {
    irregularCleanup2: true,
    irregularCleanup2Lemmas: TARGETS.length,
    irregularCleanup2VisibleEntries: keptVisible,
    irregularCleanup2RecognitionEntries: demotedRecognition,
    irregularCleanup2Stats: stats
  });
})();
