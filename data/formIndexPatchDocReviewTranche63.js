(function(){
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase().trim(); }
  function entrySig(e){ return [e.lemma,e.form,e.kind,e.tense,e.voice,e.mood,e.person||'',e.gender||'',e.case||'',e.number||''].join('|'); }
  function variants(form){ const out=[form]; if(form.includes('(ν)')){ out.push(form.replace('(ν)','')); out.push(form.replace('(ν)','ν')); } return [...new Set(out)]; }
  window.FORM_INDEX = window.FORM_INDEX || {};
  const lemmas = ["δείκνυμι"];
  const normLemmaSet = new Set(lemmas.map(normalizeGreek));
  for(const [key, bucket] of Object.entries(window.FORM_INDEX)){ if(!Array.isArray(bucket)) continue; window.FORM_INDEX[key] = bucket.filter(entry => !normLemmaSet.has(normalizeGreek(entry.lemma||''))); }
  const source = window.MANUAL_PARADIGMS || {};
  for(const lemma of lemmas){ const arr = source[lemma] || []; for(const item of arr){ for(const form of variants(item.form)){ const key = normalizeGreek(form); const bucket = window.FORM_INDEX[key] = window.FORM_INDEX[key] || []; const entry = {lemma:item.lemma, form, kind:item.kind, tense:item.tense, voice:item.voice, mood:item.mood}; if(item.person) entry.person=item.person; if(item.gender) entry.gender=item.gender; if(item.case) entry.case=item.case; if(item.number) entry.number=item.number; const sig = entrySig(entry); const seen = new Set(bucket.map(entrySig)); if(!seen.has(sig)) bucket.push(entry); } } }
})();
