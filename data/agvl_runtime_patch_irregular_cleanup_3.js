(function(){
  const TARGETS = ['μέμνημαι','ἔοικα','βούλομαι','ἧμαι'];
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase().trim(); }
  function slotKey(e){ return [e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|'); }
  function entrySig(e){ return [e.lemma||'',e.form||'',e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|'); }
  function clone(base, form){ const e = Object.assign({}, base); e.form = form; delete e.recognitionOnly; return e; }
  function variants(form){ const out=[form]; if((form||'').includes('(ν)')){ out.push(form.replace('(ν)','')); out.push(form.replace('(ν)','ν')); } return [...new Set(out)]; }
  function startsWithNorm(form, prefix){ return normalizeGreek(form).startsWith(normalizeGreek(prefix)); }
  function preferredPrefix(entries, prefix, fallback){ const found = entries.find(e => startsWithNorm(e.form, prefix)); return found ? found.form : fallback; }
  function one(entries, form){ return [clone(entries[0], form)]; }
  function combine(entries, forms){ return [clone(entries[0], forms.join(' / '))]; }

  function resolveMemnemai(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind==='finite' && tense==='present' && voice==='middle/passive' && mood==='subjunctive'){
      const map = {
        '1sg':'μεμνῶμαι', '2sg':'μεμνῇ', '3sg':'μεμνῆται',
        '1pl':'μεμνώμεθα', '2pl':'μεμνῆσθε', '3pl':'μεμνῶνται'
      };
      if(map[person]) return one(entries, map[person]);
    }
    if(kind==='finite' && tense==='present' && voice==='middle/passive' && mood==='optative'){
      const map = {
        '1sg':'μεμνῄμην', '2sg':'μεμνῇο', '3sg':'μεμνῇτο',
        '1pl':'μεμνῄμεθα', '2pl':'μεμνῇσθε', '3pl':'μεμνῇντο'
      };
      if(map[person]) return one(entries, map[person]);
    }
    if(kind==='finite' && tense==='present' && voice==='middle/passive' && mood==='imperative' && person==='3pl'){
      return combine(entries, ['μεμνήσθων','μεμνήσθωσαν']);
    }
    return one(entries, entries[0].form);
  }

  function resolveEoika(slot, entries){
    const [kind, tense, voice, mood, person, gender] = slot.split('|');
    if(kind==='finite' && tense==='perfect' && voice==='active' && mood==='indicative' && person==='3pl') return one(entries, 'ἐοίκασι(ν)');
    if(kind==='infinitive' && tense==='perfect' && voice==='active') return one(entries, 'εἰκέναι');
    if(kind==='participle' && tense==='perfect' && voice==='active'){
      const pref = gender === 'fem' ? 'εἰκυ' : 'εἰκ';
      return one(entries, preferredPrefix(entries, pref, entries[0].form));
    }
    return one(entries, entries[0].form);
  }

  function resolveHeimai(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind==='finite' && tense==='present' && voice==='middle/passive' && mood==='indicative' && person==='3pl') return one(entries, 'ἧνται');
    if(kind==='finite' && tense==='imperfect' && voice==='middle/passive' && mood==='indicative' && person==='3pl') return one(entries, 'ἧντο');
    return one(entries, entries[0].form);
  }

  const resolvers = {
    'μέμνημαι': resolveMemnemai,
    'ἔοικα': resolveEoika,
    'βούλομαι': (slot, entries) => one(entries, entries[0].form),
    'ἧμαι': resolveHeimai
  };

  const originalByLemma = {};
  const visibleByLemma = {};
  const stats = {};

  for(const lemma of TARGETS){
    const source = Array.isArray(window.MANUAL_PARADIGMS?.[lemma]) ? window.MANUAL_PARADIGMS[lemma].slice() : [];
    originalByLemma[lemma] = source.slice();
    const groups = new Map();
    const order = [];
    for(const e of source){
      const k = slotKey(e);
      if(!groups.has(k)){ groups.set(k, []); order.push(k); }
      groups.get(k).push(e);
    }
    const out = [];
    let duplicateGroups = 0;
    for(const k of order){
      const entries = groups.get(k);
      if(entries.length > 1) duplicateGroups++;
      const resolved = (resolvers[lemma] || ((slot, entries)=>one(entries, entries[0].form)))(k, entries);
      for(const e of resolved) out.push(e);
    }
    window.MANUAL_PARADIGMS[lemma] = out;
    visibleByLemma[lemma] = out;
    stats[lemma] = { originalEntries: source.length, visibleEntries: out.length, duplicateGroupsBefore: duplicateGroups, demotedRecognition: 0, addedRecognitionOnly: 0 };
  }

  window.FORM_INDEX = window.FORM_INDEX || {};
  const targetNorms = new Set(TARGETS.map(normalizeGreek));
  for(const [key, bucket] of Object.entries(window.FORM_INDEX)){
    if(!Array.isArray(bucket)) continue;
    const filtered = bucket.filter(entry => !targetNorms.has(normalizeGreek(entry.lemma||'')));
    if(filtered.length) window.FORM_INDEX[key] = filtered; else delete window.FORM_INDEX[key];
  }

  const explicitRecognitionOnly = {
    'βούλομαι': [
      {lemma:'βούλομαι', form:'ἠβουλόμην', kind:'finite', tense:'imperfect', voice:'middle/passive', mood:'indicative', person:'1sg', number:'sg', recognitionOnly:true},
      {lemma:'βούλομαι', form:'ἠβουλήθην', kind:'finite', tense:'aorist', voice:'passive', mood:'indicative', person:'1sg', number:'sg', recognitionOnly:true}
    ]
  };

  for(const lemma of TARGETS){
    const visible = visibleByLemma[lemma] || [];
    const visibleNormSig = new Set(visible.map(e => [normalizeGreek(e.lemma||''),normalizeGreek(e.form||''),e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|')));
    const allForIndex = [];
    for(const e of visible) allForIndex.push(Object.assign({}, e));
    for(const e of originalByLemma[lemma] || []){
      const normSig = [normalizeGreek(e.lemma||''),normalizeGreek(e.form||''),e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|');
      if(!visibleNormSig.has(normSig)){
        const r = Object.assign({}, e, {recognitionOnly:true});
        allForIndex.push(r);
        stats[lemma].demotedRecognition++;
      }
    }
    for(const e of (explicitRecognitionOnly[lemma] || [])){
      allForIndex.push(Object.assign({}, e));
      stats[lemma].addedRecognitionOnly++;
    }
    for(const item of allForIndex){
      for(const form of variants(item.form)){
        const key = normalizeGreek(form);
        const bucket = window.FORM_INDEX[key] = window.FORM_INDEX[key] || [];
        const entry = {lemma:item.lemma, form, kind:item.kind, tense:item.tense, voice:item.voice, mood:item.mood};
        if(item.person) entry.person = item.person;
        if(item.gender) entry.gender = item.gender;
        if(item.case) entry.case = item.case;
        if(item.number) entry.number = item.number;
        if(item.recognitionOnly) entry.recognitionOnly = true;
        const sig = entrySig(entry) + '|' + (entry.recognitionOnly ? 'R' : 'V');
        const seen = new Set(bucket.map(x => entrySig(x) + '|' + (x.recognitionOnly ? 'R' : 'V')));
        if(!seen.has(sig)) bucket.push(entry);
      }
    }
  }

  function scrubSlotValidations(obj){
    if(!obj || typeof obj !== 'object') return;
    const heimai = obj['ἧμαι'];
    if(heimai && Array.isArray(heimai.slots)){
      heimai.slots = heimai.slots.filter(s => !String(s.slot||'').includes('|epic'));
      heimai.summary = 'Tranche 95: visible cleanup του ἧμαι με ορατή διατήρηση μόνο των βασικών αττικών 3pl ἧνται / ἧντο και μεταφορά των επικών εἵαται / ἕαται, εἵατο / ἕατο σε recognition-only layer.';
    }
  }

  scrubSlotValidations(window.SLOT_VALIDATIONS);

  window.AGVL_RUNTIME_PATCH = Object.assign({}, window.AGVL_RUNTIME_PATCH, {
    irregularCleanup3: true,
    irregularCleanup3Lemmas: TARGETS.length,
    irregularCleanup3Stats: stats
  });
})();
