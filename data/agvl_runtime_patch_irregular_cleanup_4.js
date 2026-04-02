(function(){
  const TARGETS = ['μίγνυμι','ἔχω','πήγνυμι','σβέννυμι'];
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
        if(toks.some(t => norm.startsWith(normalizeGreek(t)) || norm.includes(normalizeGreek(t)))){
          chosenIndex = i;
          break;
        }
      }
      if(chosenIndex >= 0){
        used.add(chosenIndex);
        out.push(entries[chosenIndex].form);
      }
    }
    for(let i=0;i<entries.length;i++) if(!used.has(i)) out.push(entries[i].form);
    return [...new Set(out)];
  }

  function resolveMignymi(slot, entries){
    const [kind, tense, voice] = slot.split('|');
    if(entries.length > 1 && voice === 'passive' && (tense === 'future' || tense === 'aorist')){
      const forms = tense === 'future'
        ? selectForms(entries, [['μειχθ','μειχθη'], ['μιγησ','μιγη']])
        : selectForms(entries, [['μιχθ','μειχθ'], ['μιγ','μιγη']]);
      return combine(entries, forms);
    }
    return one(entries, entries[0].form);
  }

  function resolveEcho(slot, entries){
    const [kind, tense, voice] = slot.split('|');
    if(entries.length > 1 && tense === 'future' && (voice === 'active' || voice === 'middle')){
      const forms = selectForms(entries, [['ἕξ','ἑξ'], ['σχήσ','σχησ']]);
      return combine(entries, forms);
    }
    return one(entries, entries[0].form);
  }

  function resolvePegnymi(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(entries.length > 1 && kind === 'finite' && tense === 'imperfect' && voice === 'active' && mood === 'indicative' && person === '1sg'){
      return combine(entries, selectForms(entries, [['ἐπήγνυν','επηγνυν'], ['ἐπήγνυον','επηγνυον']]));
    }
    if(entries.length > 1 && voice === 'passive' && tense === 'aorist'){
      return combine(entries, selectForms(entries, [['πηχθ','ἐπηχθ'], ['παγ','ἐπάγ']]));
    }
    return one(entries, entries[0].form);
  }

  function resolveSbennymi(slot, entries){
    const [kind, tense, voice] = slot.split('|');
    if(entries.length > 1 && tense === 'aorist' && voice === 'active'){
      const forms = selectForms(entries, [['σβεσ','ἐσβεσ'], ['σβη','ἐσβη','σβα']]);
      return combine(entries, forms);
    }
    return one(entries, entries[0].form);
  }

  const resolvers = {
    'μίγνυμι': resolveMignymi,
    'ἔχω': resolveEcho,
    'πήγνυμι': resolvePegnymi,
    'σβέννυμι': resolveSbennymi
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
    irregularCleanup4: true,
    irregularCleanup4Lemmas: TARGETS.length,
    irregularCleanup4Stats: stats
  });
})();
