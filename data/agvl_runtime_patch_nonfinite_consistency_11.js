(function(){
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase().trim(); }
  function entrySig(e){ return [e.lemma||'', e.form||'', e.kind||'', e.tense||'', e.voice||'', e.mood||'', e.person||'', e.number||'', e.gender||'', e.case||''].join('|'); }
  window.MANUAL_PARADIGMS = window.MANUAL_PARADIGMS || {};
  window.FORM_INDEX = window.FORM_INDEX || {};
  window.STRICT_AUDIT = window.STRICT_AUDIT || {generatedAt:'2026-03-20', summary:{}, lemmas:{}};
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};

  const TARGET = 'ὑγιαίνω';

  function mk(form, gender, number, kase){
    return { lemma: TARGET, form, kind:'participle', tense:'aorist', voice:'active', mood:'participle', gender, number, case:kase };
  }

  // σχολικά ασφαλής ανάπτυξη από τον βεβαιωμένο αόριστο ὑγίανα
  // κατά το πρότυπο λύσας, λύσασα, λῦσαν.
  const expandedAoristParticiple = [
    mk('ὑγιάνας','masc','sg','nom'), mk('ὑγιάναντος','masc','sg','gen'), mk('ὑγιάναντι','masc','sg','dat'), mk('ὑγιάναντα','masc','sg','acc'), mk('ὑγιάνας','masc','sg','voc'),
    mk('ὑγιανάσα','fem','sg','nom'), mk('ὑγιανάσης','fem','sg','gen'), mk('ὑγιανάσῃ','fem','sg','dat'), mk('ὑγιανάσαν','fem','sg','acc'), mk('ὑγιανάσα','fem','sg','voc'),
    mk('ὑγιᾶναν','neut','sg','nom'), mk('ὑγιάναντος','neut','sg','gen'), mk('ὑγιάναντι','neut','sg','dat'), mk('ὑγιᾶναν','neut','sg','acc'), mk('ὑγιᾶναν','neut','sg','voc'),
    mk('ὑγιάναντες','masc','pl','nom'), mk('ὑγιανάντων','masc','pl','gen'), mk('ὑγιάνασι','masc','pl','dat'), mk('ὑγιάναντας','masc','pl','acc'), mk('ὑγιάναντες','masc','pl','voc'),
    mk('ὑγιανάσαι','fem','pl','nom'), mk('ὑγιανασῶν','fem','pl','gen'), mk('ὑγιανάσαις','fem','pl','dat'), mk('ὑγιανάσας','fem','pl','acc'), mk('ὑγιανάσαι','fem','pl','voc'),
    mk('ὑγιάναντα','neut','pl','nom'), mk('ὑγιανάντων','neut','pl','gen'), mk('ὑγιάνασι','neut','pl','dat'), mk('ὑγιάναντα','neut','pl','acc'), mk('ὑγιάναντα','neut','pl','voc')
  ];

  const oldBaseForms = new Set(['ὑγιάνας','ὑγιάνασα','ὑγιᾶναν']);
  const arr = Array.isArray(window.MANUAL_PARADIGMS[TARGET]) ? window.MANUAL_PARADIGMS[TARGET].slice() : [];
  let removedBaseOnly = 0;
  let next = arr.filter(e => {
    const remove = e && e.mood === 'participle' && e.tense === 'aorist' && e.voice === 'active' && oldBaseForms.has(e.form) && !('case' in e);
    if(remove) removedBaseOnly += 1;
    return !remove;
  });
  next.push(...expandedAoristParticiple);

  const seen = new Set();
  next = next.filter(e => {
    const sig = entrySig(e);
    if(seen.has(sig)) return false;
    seen.add(sig);
    return true;
  });
  window.MANUAL_PARADIGMS[TARGET] = next;

  const normTarget = normalizeGreek(TARGET);
  for(const [key,bucket] of Object.entries(window.FORM_INDEX)){
    if(!Array.isArray(bucket)) continue;
    window.FORM_INDEX[key] = bucket.filter(entry => !(normalizeGreek(entry.lemma||'') === normTarget && entry.mood === 'participle' && entry.tense === 'aorist' && entry.voice === 'active'));
  }
  for(const item of next){
    if(!item.form) continue;
    const key = normalizeGreek(item.form);
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

  const stats = next.reduce((acc,e)=>{
    if(e.kind === 'finite') acc.finite += 1;
    else if(e.kind === 'infinitive') acc.infinitives += 1;
    else if(e.kind === 'participle') acc.participles += 1;
    return acc;
  }, {finite:0, infinitives:0, participles:0});

  window.STRICT_AUDIT.lemmas[TARGET] = Object.assign({}, window.STRICT_AUDIT.lemmas[TARGET] || {}, {
    lemma: TARGET,
    status: 'manual+slots',
    readiness: 'partial',
    manualForms: next.length,
    finite: stats.finite,
    infinitives: stats.infinitives,
    participles: stats.participles,
    slotChecks: 7,
    curated: true,
    needsAudit: true,
    summary: 'manual paradigm + slot validation + πλήρης ανάπτυξη αοριστικής μετοχής · forms ' + next.length + ' · slot checks 7'
  });

  const sv = window.SLOT_VALIDATIONS[TARGET] || {status:'manual+slots', summary:'', slots:[]};
  const slotSig = x => [x.slot||'', x.form||''].join('|');
  const extraSlot = {
    slot: 'aorist|active|participle|fem.gen.sg',
    label: 'αόριστος • ενεργητική • μετοχή • θηλυκό γεν. εν.',
    form: 'ὑγιανάσης',
    note: 'συμπληρωμένος ασφαλής κλιτικός τύπος από τον βεβαιωμένο αόριστο ὑγίανα'
  };
  const slotSeen = new Set((sv.slots||[]).map(slotSig));
  if(!slotSeen.has(slotSig(extraSlot))) (sv.slots = sv.slots || []).push(extraSlot);
  sv.status = 'manual+slots';
  sv.summary = 'Document-review tranche 11: πλήρης ανάπτυξη της αοριστικής ενεργητικής μετοχής του ὑγιαίνω με metadata backfill.';
  window.SLOT_VALIDATIONS[TARGET] = sv;

  const residuals = (window.MANUAL_PARADIGMS[TARGET] || []).filter(e => e.mood === 'participle' && !('case' in e)).map(e => [TARGET, e.tense, e.voice, e.form]);

  window.AGVL_RUNTIME_PATCH = Object.assign({}, window.AGVL_RUNTIME_PATCH || {}, {
    nonFiniteConsistency11: true,
    nonFiniteConsistency11Target: TARGET,
    nonFiniteConsistency11Stats: {
      lemmasTargeted: 1,
      aoristParticipleEntriesAdded: expandedAoristParticiple.length,
      baseOnlyEntriesRemoved: removedBaseOnly,
      visibleEntriesAfter: next.length,
      residualBaseOnlyAfter: residuals.length
    },
    nonFiniteConsistency11Residuals: residuals
  });
})();
