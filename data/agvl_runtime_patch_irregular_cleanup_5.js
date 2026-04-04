(function(){
  const TARGETS = ['ἔρχομαι','εἶμι','ἁλίσκομαι','ἕπομαι','οἴχομαι','ῥέω','ἄπειμι','ἔπειμι'];
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase().trim(); }
  function slotKey(e){ return [e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|'); }
  function entrySig(e){ return [e.lemma||'',e.form||'',e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|'); }
  function clone(base, form){ const e = Object.assign({}, base); e.form = form; delete e.recognitionOnly; return e; }
  function variants(form){ const out=[form]; if((form||'').includes('(ν)')){ out.push(form.replace('(ν)','')); out.push(form.replace('(ν)','ν')); } return [...new Set(out)]; }
  function one(entries, form){ return [clone(entries[0], form)]; }
  function combine(entries, forms){ return [clone(entries[0], forms.join(' / '))]; }
  function selectForms(entries, tokenGroups){
    const used = new Set();
    const out = [];
    for(const tokenGroup of tokenGroups){
      const toks = Array.isArray(tokenGroup) ? tokenGroup : [tokenGroup];
      let chosenIndex = -1;
      for(let i=0;i<entries.length;i++){
        if(used.has(i)) continue;
        const norm = normalizeGreek(entries[i].form);
        if(toks.some(t => norm.startsWith(normalizeGreek(t)) || norm.includes(normalizeGreek(t)))){ chosenIndex = i; break; }
      }
      if(chosenIndex >= 0){ used.add(chosenIndex); out.push(entries[chosenIndex].form); }
    }
    for(let i=0;i<entries.length;i++) if(!used.has(i)) out.push(entries[i].form);
    return [...new Set(out)];
  }

  function resolveErchomaiLike(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind === 'finite' && tense === 'imperfect' && voice === 'active' && mood === 'indicative' && ['1sg','2sg','3pl'].includes(person)){
      const map = {
        '1sg': [['ᾖα'], ['ᾔειν']],
        '2sg': [['ᾔεις'], ['ᾔεισθα']],
        '3pl': [['ᾖσαν'], ['ᾔεσαν']]
      };
      return combine(entries, selectForms(entries, map[person]));
    }
    if(kind === 'finite' && tense === 'present' && voice === 'active' && mood === 'optative' && ['1sg','2sg','3sg'].includes(person)){
      const map = {
        '1sg': [['ἴοιμι'], ['ἰοίην']],
        '2sg': [['ἴοις'], ['ἰοίης']],
        '3sg': [['ἴοι'], ['ἰοίη']]
      };
      return combine(entries, selectForms(entries, map[person]));
    }
    if(kind === 'finite' && tense === 'present' && voice === 'active' && mood === 'imperative' && person === '3pl'){
      return combine(entries, selectForms(entries, [['ἰόντων'], ['ἴτωσαν']]));
    }
    if(kind === 'finite' && tense === 'aorist' && voice === 'active' && mood === 'imperative' && person === '3pl'){
      return combine(entries, selectForms(entries, [['ἐλθόντων'], ['ἐλθέτωσαν']]));
    }
    return one(entries, entries[0].form);
  }

  function resolveHaliskomai(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind === 'finite' && tense === 'aorist' && voice === 'active' && mood === 'indicative' && person === '1sg'){
      return combine(entries, selectForms(entries, [['ἑάλων'], ['ἥλων']]));
    }
    if(kind === 'finite' && tense === 'perfect' && voice === 'active' && mood === 'indicative' && person === '1sg'){
      return combine(entries, selectForms(entries, [['ἑάλωκα'], ['ἥλωκα']]));
    }
    if(kind === 'finite' && tense === 'aorist' && voice === 'active' && mood === 'optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = {
        '1pl': [['ἁλοίημεν'], ['ἁλοῖμεν']],
        '2pl': [['ἁλοίητε'], ['ἁλοῖτε']],
        '3pl': [['ἁλοίησαν'], ['ἁλοῖεν']]
      };
      return combine(entries, selectForms(entries, map[person]));
    }
    return one(entries, entries[0].form);
  }

  function resolveMiddleImperativeVariants(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind === 'finite' && mood === 'imperative' && person === '3pl'){
      return combine(entries, selectForms(entries, [['σθων'], ['σθωσαν']]));
    }
    return one(entries, entries[0].form);
  }

  function resolveRheo(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind === 'finite' && tense === 'future' && voice === 'middle' && mood === 'indicative' && person === '1sg'){
      return combine(entries, selectForms(entries, [['ῥυήσομαι'], ['ῥεύσομαι'], ['ῥευσοῦμαι']]));
    }
    if(kind === 'finite' && tense === 'aorist' && voice === 'active' && mood === 'indicative' && person === '1sg'){
      return combine(entries, selectForms(entries, [['ἔρρευσα'], ['ἐρρύην']]));
    }
    return one(entries, entries[0].form);
  }

  function resolveApeimiEpeimi(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind === 'finite' && tense === 'present' && voice === 'active' && mood === 'optative' && ['1pl','2pl','3pl'].includes(person)){
      const prefix = normalizeGreek(entries[0].lemma).startsWith(normalizeGreek('ἄπειμι')) ? 'ἀπ' : 'ἐπ';
      const map = {
        '1pl': [[prefix+'είημεν'], [prefix+'εῖμεν']],
        '2pl': [[prefix+'είητε'], [prefix+'εῖτε']],
        '3pl': [[prefix+'είησαν'], [prefix+'εῖεν']]
      };
      return combine(entries, selectForms(entries, map[person]));
    }
    if(kind === 'finite' && tense === 'imperfect' && voice === 'active' && mood === 'indicative' && person === '2pl'){
      const prefix = normalizeGreek(entries[0].lemma).startsWith(normalizeGreek('ἄπειμι')) ? 'ἀπ' : 'ἐπ';
      return combine(entries, selectForms(entries, [[prefix+'ῇτε'], [prefix+'ῇστε']]));
    }
    return one(entries, entries[0].form);
  }

  const resolvers = {
    'ἔρχομαι': resolveErchomaiLike,
    'εἶμι': resolveErchomaiLike,
    'ἁλίσκομαι': resolveHaliskomai,
    'ἕπομαι': resolveMiddleImperativeVariants,
    'οἴχομαι': resolveMiddleImperativeVariants,
    'ῥέω': resolveRheo,
    'ἄπειμι': resolveApeimiEpeimi,
    'ἔπειμι': resolveApeimiEpeimi
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

  window.AGVL_RUNTIME_PATCH = Object.assign({}, window.AGVL_RUNTIME_PATCH, {
    irregularCleanup5: true,
    irregularCleanup5Lemmas: TARGETS.length,
    irregularCleanup5Stats: stats
  });
})();
