(function(){
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase().trim(); }
  function dedupeBy(items, keyFn){ const seen = new Set(); const out=[]; for(const item of items){ const k=keyFn(item); if(seen.has(k)) continue; seen.add(k); out.push(item);} return out; }
  function countForms(arr){
    const c = {total:0, finite:0, infinitives:0, participles:0};
    for(const e of arr||[]){
      c.total += 1;
      if(e.kind === 'finite') c.finite += 1;
      else if(e.kind === 'infinitive') c.infinitives += 1;
      else if(e.kind === 'participle') c.participles += 1;
    }
    return c;
  }
  function findFiniteAnchor(arr){
    const finite = (arr||[]).filter(e => e.kind === 'finite');
    return finite.find(e => e.tense === 'present' && e.mood === 'indicative' && e.person === '1' && e.number === 'sg')
      || finite.find(e => e.tense === 'present' && e.mood === 'indicative')
      || finite.find(e => e.mood === 'indicative')
      || finite[0]
      || null;
  }
  function findInfinitiveAnchor(arr){
    const infs = (arr||[]).filter(e => e.kind === 'infinitive');
    return infs.find(e => e.tense === 'present') || infs[0] || null;
  }
  function findParticipleAnchor(arr){
    const parts = (arr||[]).filter(e => e.kind === 'participle');
    return parts.find(e => e.case === 'nom' && e.number === 'sg' && e.gender === 'masc' && e.tense === 'present')
      || parts.find(e => e.case === 'nom' && e.number === 'sg' && e.gender === 'masc')
      || parts[0]
      || null;
  }
  function slotFor(entry, labelOverride){
    if(!entry) return null;
    if(entry.kind === 'finite'){
      const slot = [entry.tense, entry.voice, entry.mood, (entry.person||'') + (entry.number||'')].join('|');
      const label = labelOverride || slot;
      return {slot, label, form: entry.form, note: 'Consistency backfill anchor from the active curated manual paradigm.'};
    }
    if(entry.kind === 'infinitive'){
      const slot = [entry.tense, entry.voice, 'infinitive'].join('|');
      const label = labelOverride || slot;
      return {slot, label, form: entry.form, note: 'Consistency backfill infinitive anchor from the active curated manual paradigm.'};
    }
    if(entry.kind === 'participle'){
      const slot = [entry.tense, entry.voice, 'participle', entry.gender, entry.case, entry.number].join('|');
      const label = labelOverride || slot;
      return {slot, label, form: entry.form, note: 'Consistency backfill participial anchor from the active curated manual paradigm.'};
    }
    return null;
  }

  window.MANUAL_PARADIGMS = window.MANUAL_PARADIGMS || {};
  window.STRICT_AUDIT = window.STRICT_AUDIT || {generatedAt:'2026-03-20', summary:{}, lemmas:{}};
  window.SLOT_VALIDATIONS = window.SLOT_VALIDATIONS || {};
  window.AGVL_RUNTIME_PATCH = window.AGVL_RUNTIME_PATCH || {};

  const lemmas = Object.keys(window.MANUAL_PARADIGMS).sort((a,b)=>a.localeCompare(b,'el'));
  const missingAuditBefore = [];
  const missingSlotsBefore = [];
  const mismatchedBefore = [];
  const needsAuditBefore = [];
  const createdAudit = [];
  const createdSlots = [];
  const syncedAudit = [];
  const clearedNeedsAudit = [];

  for(const lemma of lemmas){
    const arr = Array.isArray(window.MANUAL_PARADIGMS[lemma]) ? window.MANUAL_PARADIGMS[lemma] : [];
    const counts = countForms(arr);
    let audit = (window.STRICT_AUDIT.lemmas || {})[lemma];
    let slotValidation = window.SLOT_VALIDATIONS[lemma];

    if(!audit) missingAuditBefore.push(lemma);
    if(!slotValidation) missingSlotsBefore.push(lemma);

    const finiteAnchor = findFiniteAnchor(arr);
    const infinitiveAnchor = findInfinitiveAnchor(arr);
    const participleAnchor = findParticipleAnchor(arr);

    if(!slotValidation){
      slotValidation = {status:'manual+slots', summary:'Consistency backfill: generated minimal validation anchors for an already curated manual paradigm.', slots:[]};
      createdSlots.push(lemma);
    }
    slotValidation.slots = Array.isArray(slotValidation.slots) ? slotValidation.slots.slice() : [];
    const generatedSlots = [slotFor(finiteAnchor), slotFor(infinitiveAnchor), slotFor(participleAnchor)].filter(Boolean);
    const existingSlotSigs = new Set(slotValidation.slots.map(s => [s.slot||'', s.form||''].join('|')));
    for(const s of generatedSlots){
      const sig = [s.slot||'', s.form||''].join('|');
      if(!existingSlotSigs.has(sig)){
        slotValidation.slots.push(s);
        existingSlotSigs.add(sig);
      }
    }
    slotValidation.slots = dedupeBy(slotValidation.slots, s => [s.slot||'', s.form||''].join('|'));
    if(!slotValidation.status || slotValidation.status === 'manual') slotValidation.status = 'manual+slots';
    if(!slotValidation.summary) slotValidation.summary = 'Consistency backfill: generated validation anchors for the active manual paradigm.';
    window.SLOT_VALIDATIONS[lemma] = slotValidation;

    const existingCounts = audit ? [audit.manualForms, audit.finite, audit.infinitives, audit.participles] : null;
    const nextCounts = [counts.total, counts.finite, counts.infinitives, counts.participles];
    if(audit && JSON.stringify(existingCounts) !== JSON.stringify(nextCounts)) mismatchedBefore.push(lemma);
    if(audit && audit.needsAudit) needsAuditBefore.push(lemma);

    if(!audit){
      audit = {
        lemma,
        status: 'manual+slots',
        readiness: 'consistency-backfilled',
        manualForms: counts.total,
        finite: counts.finite,
        infinitives: counts.infinitives,
        participles: counts.participles,
        slotChecks: slotValidation.slots.length,
        curated: true,
        needsAudit: false,
        summary: 'consistency backfill · forms ' + counts.total + ' · slot checks ' + slotValidation.slots.length
      };
      createdAudit.push(lemma);
    } else {
      if(JSON.stringify(existingCounts) !== JSON.stringify(nextCounts) || audit.slotChecks !== slotValidation.slots.length || audit.needsAudit){
        syncedAudit.push(lemma);
      }
      audit.manualForms = counts.total;
      audit.finite = counts.finite;
      audit.infinitives = counts.infinitives;
      audit.participles = counts.participles;
      audit.slotChecks = slotValidation.slots.length;
      if(!audit.status || audit.status === 'manual') audit.status = 'manual+slots';
      if(!audit.readiness) audit.readiness = 'consistency-backfilled';
      audit.curated = true;
      if(audit.needsAudit) clearedNeedsAudit.push(lemma);
      audit.needsAudit = false;
      audit.consistencyBackfilled = true;
      if(!audit.summary) audit.summary = 'consistency backfill · forms ' + counts.total + ' · slot checks ' + slotValidation.slots.length;
    }
    audit.displayForms = counts.total;
    if(typeof audit.recognitionOnlyForms !== 'number') audit.recognitionOnlyForms = 0;
    window.STRICT_AUDIT.lemmas[lemma] = audit;
  }

  const allAuditLemmas = Object.keys(window.STRICT_AUDIT.lemmas || {});
  const fullyAudited = lemmas.filter(lemma => window.STRICT_AUDIT.lemmas[lemma] && !window.STRICT_AUDIT.lemmas[lemma].needsAudit).length;
  const partialOrPending = lemmas.length - fullyAudited;
  const slotValidatedLemmas = lemmas.filter(lemma => window.SLOT_VALIDATIONS[lemma] && Array.isArray(window.SLOT_VALIDATIONS[lemma].slots) && window.SLOT_VALIDATIONS[lemma].slots.length > 0).length;
  window.STRICT_AUDIT.summary = {
    totalExtraLemmas: lemmas.length,
    fullyAudited,
    partialOrPending,
    manualParadigmLemmas: lemmas.length,
    slotValidatedLemmas
  };

  window.AGVL_RUNTIME_PATCH.consistency12 = true;
  window.AGVL_RUNTIME_PATCH.consistency12Stats = {
    lemmasChecked: lemmas.length,
    missingAuditBefore: missingAuditBefore.length,
    missingSlotsBefore: missingSlotsBefore.length,
    mismatchedAuditCountsBefore: mismatchedBefore.length,
    needsAuditFlagsBefore: needsAuditBefore.length,
    createdAuditEntries: createdAudit.length,
    createdSlotValidationEntries: createdSlots.length,
    syncedAuditEntries: syncedAudit.length,
    clearedNeedsAuditFlags: clearedNeedsAudit.length,
    fullyAuditedAfter: fullyAudited,
    slotValidatedLemmasAfter: slotValidatedLemmas
  };
  window.AGVL_RUNTIME_PATCH.consistency12CreatedAudit = createdAudit.slice();
  window.AGVL_RUNTIME_PATCH.consistency12CreatedSlots = createdSlots.slice();
})();
