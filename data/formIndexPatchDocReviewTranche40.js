(function(){
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase().trim(); }
  function entrySig(e){ return [e.lemma,e.form,e.kind,e.tense,e.voice,e.mood,e.person||'',e.gender||'',e.case||'',e.number||''].join('|'); }
  function variants(form){ return [form]; }
  window.FORM_INDEX = window.FORM_INDEX || {};
  const lemma = 'ἄημι';
  const source = (window.MANUAL_PARADIGMS || {})[lemma] || [];
  const legacyForms = [
    'ᾰ̓́ημῐ','ᾰ̓́ησῐ','ᾰ̓́ησῐν','ᾰ̓́ητον','ᾰ̓́εισῐ','ᾰ̓́εισῐν','ᾰ̓ήτω','ᾰ̓́ηται',
    'ᾰ̓ῆναι','ᾰ̓είς','ᾰ̓ήμενος','ᾰ̓εῖσᾰ','ᾰ̓ημένη','ᾰ̓έν','ᾰ̓ήμενον','ἄη','ἄητο'
  ];
  const refreshForms = new Set(source.map(x => x.form).concat(legacyForms));
  for(const form of refreshForms){
    const key = normalizeGreek(form);
    const bucket = window.FORM_INDEX[key];
    if(!Array.isArray(bucket)) continue;
    window.FORM_INDEX[key] = bucket.filter(entry => entry.lemma !== lemma);
  }
  for(const item of source){
    for(const form of variants(item.form)){
      const key = normalizeGreek(form);
      const bucket = window.FORM_INDEX[key] = window.FORM_INDEX[key] || [];
      const entry = { lemma:item.lemma, form, kind:item.kind, tense:item.tense, voice:item.voice, mood:item.mood };
      if(item.person) entry.person = item.person;
      if(item.gender) entry.gender = item.gender;
      if(item.case) entry.case = item.case;
      if(item.number) entry.number = item.number;
      const sig = entrySig(entry);
      const seen = new Set(bucket.map(entrySig));
      if(!seen.has(sig)) bucket.push(entry);
    }
  }
})();
