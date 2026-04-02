(function(){
  const TARGETS = ['εἰμί','γίγνομαι','λέγω','δίδωμι','τίθημι','ἵστημι','ἵημι'];
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase().trim(); }
  function slotKey(e){ return [e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|'); }
  function entrySig(e){ return [e.lemma||'',e.form||'',e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|'); }
  function clone(base, form){ const e = Object.assign({}, base); e.form = form; delete e.recognitionOnly; return e; }
  function variants(form){ const out=[form]; if((form||'').includes('(ν)')){ out.push(form.replace('(ν)','')); out.push(form.replace('(ν)','ν')); } return [...new Set(out)]; }
  function startsWithNorm(form, prefix){ return normalizeGreek(form).startsWith(normalizeGreek(prefix)); }
  function includesNorm(form, token){ return normalizeGreek(form).includes(normalizeGreek(token)); }
  function pick(entries, predicate){ return entries.find(predicate); }
  function pickForm(entries, predicate, fallback){ const found = pick(entries, predicate); return found ? found.form : fallback; }
  function one(entries, form){ return [clone(entries[0], form)]; }
  function combine(entries, forms){ return [clone(entries[0], forms.join(' / '))]; }
  function optNu(entries, base){ return one(entries, base); }
  function keepAll(entries){ return entries.map(e => Object.assign({}, e)); }

  function resolveEimi(slot, entries){
    const [kind, tense, voice, mood, person, gender, kase, number] = slot.split('|');
    if(kind==='participle' && tense==='present' && voice==='active'){
      const chosen = pick(entries, e => !startsWithNorm(e.form,'ἐ')) || entries[0];
      return [clone(chosen, chosen.form)];
    }
    if(kind==='infinitive' && tense==='present') return one(entries,'εἶναι');
    if(kind==='infinitive' && tense==='future') return one(entries,'ἔσεσθαι');
    if(kind==='finite' && tense==='present' && mood==='indicative'){
      if(person==='1sg') return one(entries,'εἰμί');
      if(person==='2sg') return one(entries,'εἶ');
      if(person==='3sg') return one(entries,'ἐστί(ν)');
      if(person==='1pl') return one(entries,'ἐσμέν');
      if(person==='3pl') return one(entries,'εἰσί(ν)');
    }
    if(kind==='finite' && tense==='present' && mood==='subjunctive'){
      if(person==='1sg') return one(entries,'ὦ');
      if(person==='3sg') return one(entries,'ᾖ');
      if(person==='3pl') return one(entries,'ὦσι(ν)');
    }
    if(kind==='finite' && tense==='present' && mood==='optative'){
      if(person==='2sg') return one(entries,'εἴης');
      if(person==='1pl') return combine(entries,['εἴημεν','εἶμεν']);
      if(person==='2pl') return combine(entries,['εἴητε','εἶτε']);
      if(person==='3pl') return combine(entries,['εἴησαν','εἶεν']);
    }
    if(kind==='finite' && tense==='present' && mood==='imperative'){
      if(person==='2sg') return one(entries,'ἴσθι');
      if(person==='3pl') return combine(entries,['ἔστων','ὄντων','ἔστωσαν']);
    }
    if(kind==='finite' && tense==='imperfect' && mood==='indicative'){
      if(person==='1sg') return combine(entries,['ἦ','ἦν']);
      if(person==='2sg') return one(entries,'ἦσθα');
      if(person==='3sg') return one(entries,'ἦν');
      if(person==='3pl') return one(entries,'ἦσαν');
    }
    if(kind==='finite' && tense==='future' && voice==='middle' && mood==='indicative'){
      if(person==='1sg') return one(entries,'ἔσομαι');
      if(person==='2sg') return combine(entries,['ἔσῃ','ἔσει']);
      if(person==='3sg') return one(entries,'ἔσται');
    }
    return one(entries, entries[0].form);
  }

  function resolveGignomai(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind==='finite' && tense==='present' && mood==='indicative' && person==='2sg') return combine(entries,['γίγνῃ','γίγνει']);
    if(kind==='finite' && tense==='future' && voice==='middle' && mood==='indicative' && person==='2sg') return combine(entries,['γενήσῃ','γενήσει']);
    if(kind==='finite' && tense==='aorist' && mood==='indicative' && (voice==='middle' || voice==='passive')){
      const chosen = pick(entries, e => startsWithNorm(e.form,'ἐ')) || entries[0];
      return one(entries, chosen.form);
    }
    if(kind==='finite' && tense==='aorist' && voice==='passive' && mood==='subjunctive' && person==='3pl') return one(entries,'γενηθῶσι(ν)');
    if(kind==='finite' && tense==='aorist' && voice==='passive' && mood==='optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = { '1pl':['γενηθείημεν','γενηθεῖμεν'], '2pl':['γενηθείητε','γενηθεῖτε'], '3pl':['γενηθείησαν','γενηθεῖεν'] };
      return combine(entries,map[person]);
    }
    if(kind==='finite' && tense==='perfect' && voice==='active' && mood==='indicative'){
      if(person==='3sg') return one(entries,'γέγονε(ν)');
      if(person==='3pl') return one(entries,'γεγόνασι(ν)');
    }
    if(kind==='finite' && tense==='perfect' && voice==='active' && mood==='subjunctive' && person==='3pl') return one(entries,'γεγόνωσι(ν)');
    if(kind==='finite' && tense==='perfect' && voice==='active' && mood==='optative'){
      if(person==='1sg') return one(entries,'γεγόνοιμι');
      if(person==='2sg') return one(entries,'γεγόνοις');
      if(person==='3sg') return one(entries,'γεγόνοι');
    }
    if(kind==='finite' && tense==='perfect' && voice==='middle/passive' && mood==='subjunctive' && person==='3pl') return one(entries,'γεγενημένοι ὦσι(ν)');
    if(kind==='finite' && tense==='perfect' && voice==='middle/passive' && mood==='optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = {
        '1pl':['γεγενημένοι εἴημεν','γεγενημένοι εἶμεν'],
        '2pl':['γεγενημένοι εἴητε','γεγενημένοι εἶτε'],
        '3pl':['γεγενημένοι εἴησαν','γεγενημένοι εἶεν']
      };
      return combine(entries,map[person]);
    }
    if(kind==='finite' && tense==='pluperfect' && voice==='active' && mood==='indicative'){
      if(person==='1sg') return one(entries,'ἐγεγόνειν');
      if(person==='2sg') return one(entries,'ἐγεγόνεις');
      if(person==='3sg') return one(entries,'ἐγεγόνει');
    }
    return one(entries, (pick(entries, e => startsWithNorm(e.form,'ἐ')) || entries[0]).form);
  }

  function resolveLego(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind==='finite' && tense==='future' && voice==='active' && mood==='indicative'){
      const form = pickForm(entries, e => startsWithNorm(e.form,'ἐρ'), entries[0].form);
      return one(entries, form);
    }
    if(kind==='finite' && tense==='future' && voice==='passive' && mood==='indicative'){
      const form = pickForm(entries, e => startsWithNorm(e.form,'ῥη') || startsWithNorm(e.form,'ρη'), entries[0].form);
      return one(entries, form);
    }
    if(kind==='finite' && tense==='aorist' && voice==='active' && mood==='indicative'){
      const want = { '1sg':'εἶπον', '2sg':'εἶπες', '3sg':'εἶπε(ν)', '1pl':'εἴπομεν', '2pl':'εἴπετε', '3pl':'εἶπον' };
      if(want[person]) return one(entries, want[person]);
    }
    if(kind==='finite' && tense==='aorist' && voice==='active' && mood==='optative' && person==='1pl') return one(entries,'εἴποιμεν');
    if(kind==='finite' && tense==='aorist' && voice==='active' && mood==='imperative' && person==='2pl') return one(entries,'εἴπετε');
    if(kind==='finite' && tense==='aorist' && voice==='passive' && mood==='indicative'){
      const form = pickForm(entries, e => includesNorm(e.form,'ερρη'), entries[0].form);
      return one(entries, form);
    }
    if(kind==='finite' && tense==='perfect' && voice==='middle/passive' && mood==='indicative' && person==='1sg') return one(entries,'εἴρημαι');
    if(kind==='infinitive' && tense==='aorist') return one(entries,'εἰπεῖν');
    if(kind==='participle' && tense==='aorist' && voice==='active'){
      const chosen = pick(entries, e => startsWithNorm(e.form,'εἰπ') || startsWithNorm(e.form,'ειπ')) || entries[0];
      return one(entries, chosen.form);
    }
    return one(entries, entries[0].form);
  }

  function resolveDidomi(slot, entries){
    const [kind, tense, voice, mood, person, gender, kase, number] = slot.split('|');
    if(kind==='participle' && tense==='future' && (voice==='active' || voice==='middle')){
      const chosen = pick(entries, e => !startsWithNorm(e.form,'διδωσ')) || entries[0];
      return one(entries, chosen.form);
    }
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='indicative'){
      if(person==='3sg') return one(entries,'δίδωσι(ν)');
      if(person==='3pl') return one(entries,'διδόασι(ν)');
    }
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='subjunctive' && person==='3pl') return one(entries,'διδῶσι(ν)');
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = { '1pl':['διδοίημεν','διδοῖμεν'], '2pl':['διδοίητε','διδοῖτε'], '3pl':['διδοίησαν','διδοῖεν'] };
      return combine(entries,map[person]);
    }
    if(kind==='finite' && tense==='imperfect' && voice==='active' && mood==='indicative'){
      const map = { '1sg':'ἐδίδουν', '2sg':'ἐδίδους', '3sg':'ἐδίδου', '1pl':'ἐδίδομεν', '2pl':'ἐδίδοτε', '3pl':'ἐδίδοσαν' };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='imperfect' && voice==='middle/passive' && mood==='indicative'){
      const map = { '1sg':'ἐδιδόμην', '2sg':'ἐδίδοσο', '3sg':'ἐδίδοτο', '1pl':'ἐδιδόμεθα', '2pl':'ἐδίδοσθε', '3pl':'ἐδίδοντο' };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='future' && (voice==='active' || voice==='middle')){
      const chosen = pick(entries, e => !startsWithNorm(e.form,'διδωσ')) || entries[0];
      if(mood==='indicative' && voice==='middle' && person==='2sg') return combine(entries,['δώσῃ','δώσει']);
      if(mood==='indicative' && voice==='active' && person==='3pl') return one(entries,'δώσουσι(ν)');
      if(mood==='indicative' && voice==='middle' && person==='1sg') return one(entries,'δώσομαι');
      if(mood==='indicative' && voice==='middle' && person==='3sg') return one(entries,'δώσεται');
      if(mood==='indicative' && voice==='middle' && person==='1pl') return one(entries,'δωσόμεθα');
      if(mood==='indicative' && voice==='middle' && person==='2pl') return one(entries,'δώσεσθε');
      if(mood==='indicative' && voice==='middle' && person==='3pl') return one(entries,'δώσονται');
      if(mood==='indicative' && voice==='active' && person==='1sg') return one(entries,'δώσω');
      if(mood==='indicative' && voice==='active' && person==='2sg') return one(entries,'δώσεις');
      if(mood==='indicative' && voice==='active' && person==='3sg') return one(entries,'δώσει');
      if(mood==='indicative' && voice==='active' && person==='1pl') return one(entries,'δώσομεν');
      if(mood==='indicative' && voice==='active' && person==='2pl') return one(entries,'δώσετε');
      if(mood==='optative' && voice==='active'){
        const map = {'1sg':'δώσοιμι','2sg':'δώσοις','3sg':'δώσοι','1pl':'δώσοιμεν','2pl':'δώσοιτε','3pl':'δώσοιεν'};
        if(map[person]) return one(entries,map[person]);
      }
      if(mood==='optative' && voice==='middle'){
        const map = {'1sg':'δωσοίμην','2sg':'δώσοιο','3sg':'δώσοιτο','1pl':'δωσοίμεθα','2pl':'δώσοισθε','3pl':'δώσοιντο'};
        if(map[person]) return one(entries,map[person]);
      }
      if(kind==='infinitive' && voice==='active') return one(entries,'δώσειν');
      if(kind==='infinitive' && voice==='middle') return one(entries,'δώσεσθαι');
      return one(entries, chosen.form);
    }
    if(kind==='infinitive' && tense==='future' && voice==='active') return one(entries,'δώσειν');
    if(kind==='infinitive' && tense==='future' && voice==='middle') return one(entries,'δώσεσθαι');
    if(kind==='finite' && tense==='aorist' && voice==='active' && mood==='indicative'){
      const map = { '1sg':'ἔδωκα', '2sg':'ἔδωκας', '3sg':'ἔδωκε(ν)', '1pl':'ἔδομεν', '2pl':'ἔδοτε', '3pl':'ἔδοσαν' };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='aorist' && voice==='active' && mood==='subjunctive'){
      const map = { '1sg':'δῶ', '2sg':'δῷς', '3sg':'δῷ', '1pl':'δῶμεν', '2pl':'δῶτε', '3pl':'δῶσι(ν)' };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='aorist' && voice==='active' && mood==='optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = { '1pl':['δοίημεν','δοῖμεν'], '2pl':['δοίητε','δοῖτε'], '3pl':['δοίησαν','δοῖεν'] };
      return combine(entries,map[person]);
    }
    if(kind==='infinitive' && tense==='aorist' && voice==='active') return one(entries,'δοῦναι');
    if(kind==='finite' && tense==='aorist' && voice==='middle' && mood==='indicative'){
      const map = { '1sg':'ἐδόμην', '2sg':'ἔδου', '3sg':'ἔδοτο', '1pl':'ἐδόμεθα', '2pl':'ἔδοσθε', '3pl':'ἔδοντο' };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='aorist' && voice==='middle' && mood==='subjunctive'){
      const map = { '1sg':'δῶμαι', '1pl':'δώμεθα', '3sg':'δῶται' };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='aorist' && voice==='middle' && mood==='optative'){
      const map = { '1pl':'δοίμεθα', '3pl':'δοῖντο' };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='aorist' && voice==='passive' && mood==='indicative'){
      const chosen = pick(entries, e => startsWithNorm(e.form,'ἐ')) || entries[0];
      return one(entries, chosen.form);
    }
    if(kind==='finite' && tense==='aorist' && voice==='passive' && mood==='subjunctive'){
      const map = { '1sg':'δοθῶ', '2sg':'δοθῇς', '3sg':'δοθῇ', '3pl':'δοθῶσι(ν)' };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='aorist' && voice==='passive' && mood==='optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = { '1pl':['δοθείημεν','δοθεῖμεν'], '2pl':['δοθείητε','δοθεῖτε'], '3pl':['δοθείησαν','δοθεῖεν'] };
      return combine(entries,map[person]);
    }
    if(kind==='finite' && tense==='perfect' && voice==='active' && mood==='indicative'){
      if(person==='3sg') return one(entries,'δέδωκε(ν)');
      if(person==='3pl') return one(entries,'δεδώκασι(ν)');
    }
    if(kind==='finite' && tense==='perfect' && voice==='active' && mood==='subjunctive' && person==='3pl') return one(entries,'δεδώκωσι(ν)');
    if(kind==='finite' && tense==='perfect' && voice==='active' && mood==='optative'){
      const map = {'1sg':'δεδώκοιμι','2sg':'δεδώκοις','3sg':'δεδώκοι'};
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='perfect' && voice==='middle/passive' && mood==='subjunctive' && person==='3pl') return one(entries,'δεδομένοι ὦσι(ν)');
    if(kind==='finite' && tense==='perfect' && voice==='middle/passive' && mood==='optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = { '1pl':['δεδομένοι εἴημεν','δεδομένοι εἶμεν'], '2pl':['δεδομένοι εἴητε','δεδομένοι εἶτε'], '3pl':['δεδομένοι εἴησαν','δεδομένοι εἶεν'] };
      return combine(entries,map[person]);
    }
    if(kind==='finite' && tense==='pluperfect' && voice==='active' && mood==='indicative'){
      const map = { '1sg':'ἐδεδώκειν', '2sg':'ἐδεδώκεις', '3sg':'ἐδεδώκει' };
      if(map[person]) return one(entries,map[person]);
    }
    return one(entries, (pick(entries, e => startsWithNorm(e.form,'ἐ')) || pick(entries, e => !startsWithNorm(e.form,'διδω') && !includesNorm(e.form,'δοσκ')) || entries[0]).form);
  }

  function resolveTithemi(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind==='participle' && tense==='perfect' && voice==='active'){
      const chosen = pick(entries, e => startsWithNorm(e.form,'τεθηκ')) || entries[0];
      return one(entries, chosen.form);
    }
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = { '1pl':['τιθείημεν','τιθεῖμεν'], '2pl':['τιθείητε','τιθεῖτε'], '3pl':['τιθείησαν','τιθεῖεν'] };
      return combine(entries,map[person]);
    }
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='imperative' && person==='3pl') return combine(entries,['τιθέντων','τιθέτωσαν']);
    if(kind==='finite' && tense==='aorist' && voice==='active' && mood==='indicative'){
      if(person==='3sg') return one(entries,'ἔθηκε(ν)');
      if(person==='3pl') return combine(entries,['ἔθεσαν','ἔθηκαν']);
    }
    if(kind==='finite' && tense==='aorist' && voice==='active' && mood==='optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = { '1pl':['θείημεν','θεῖμεν'], '2pl':['θείητε','θεῖτε'], '3pl':['θείησαν','θεῖεν'] };
      return combine(entries,map[person]);
    }
    if(kind==='finite' && tense==='perfect' && voice==='active' && mood==='indicative'){
      const map = { '1sg':'τέθηκα', '2sg':'τέθηκας', '3sg':'τέθηκε(ν)', '1pl':'τεθήκαμεν', '2pl':'τεθήκατε', '3pl':'τεθήκασι(ν)' };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='pluperfect' && voice==='active' && mood==='indicative'){
      const map = { '1sg':'ἐτεθήκειν', '2sg':'ἐτεθήκεις', '3sg':'ἐτεθήκει', '1pl':'ἐτεθήκεμεν', '2pl':'ἐτεθήκετε', '3pl':'ἐτεθήκεσαν' };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='infinitive' && tense==='perfect' && voice==='active') return one(entries,'τεθηκέναι');
    if(kind==='finite' && tense==='present' && voice==='middle/passive' && mood==='imperative' && person==='3pl') return combine(entries,['τιθέσθων','τιθέσθωσαν']);
    if(kind==='finite' && tense==='aorist' && voice==='passive' && mood==='optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = { '1pl':['τεθείημεν','τεθεῖμεν'], '2pl':['τεθείητε','τεθεῖτε'], '3pl':['τεθείησαν','τεθεῖεν'] };
      return combine(entries,map[person]);
    }
    if(kind==='finite' && tense==='perfect' && voice==='middle/passive' && mood==='indicative'){
      const map = { '1sg':'τέθημαι', '2sg':'τέθησαι', '3sg':'τέθηται', '1pl':'τεθήμεθα', '2pl':'τέθησθε', '3pl':'τέθηνται' };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='finite' && tense==='pluperfect' && voice==='middle/passive' && mood==='indicative'){
      const map = { '1sg':'ἐτεθήμην', '2sg':'ἐτέθησο', '3sg':'ἐτέθητο', '1pl':'ἐτεθήμεθα', '2pl':'ἐτέθησθε', '3pl':'ἐτέθηντο' };
      if(map[person]) return one(entries,map[person]);
    }
    return one(entries, (pick(entries, e => startsWithNorm(e.form,'τεθη')) || entries[0]).form);
  }

  function resolveHistemi(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = { '1pl':['ἱσταίημεν','ἱσταῖμεν'], '2pl':['ἱσταίητε','ἱσταῖτε'], '3pl':['ἱσταίησαν','ἱσταῖεν'] };
      return combine(entries,map[person]);
    }
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='imperative' && person==='3pl') return combine(entries,['ἱστάντων','ἱστάντωσαν']);
    if(kind==='finite' && tense==='present' && voice==='middle/passive' && mood==='imperative' && person==='3pl') return combine(entries,['ἱστάσθων','ἱστάσθωσαν']);
    if(kind==='finite' && tense==='aorist' && voice==='active') return combine(entries, entries.map(e => e.form));
    if(kind==='infinitive' && tense==='aorist' && voice==='active') return combine(entries, entries.map(e => e.form));
    if(kind==='participle' && tense==='aorist' && voice==='active') return combine(entries, entries.map(e => e.form));
    if(kind==='finite' && tense==='aorist' && voice==='middle' && mood==='imperative' && person==='3pl') return combine(entries,['στησάσθων','στησάσθωσαν']);
    if(kind==='finite' && tense==='aorist' && voice==='passive' && mood==='optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = { '1pl':['σταθείημεν','σταθεῖμεν'], '2pl':['σταθείητε','σταθεῖτε'], '3pl':['σταθείησαν','σταθεῖεν'] };
      return combine(entries,map[person]);
    }
    if(kind==='finite' && tense==='aorist' && voice==='passive' && mood==='imperative' && person==='3pl') return combine(entries,['σταθέντων','σταθήτωσαν']);
    if(kind==='finite' && tense==='perfect' && voice==='active' && mood==='indicative'){
      if(person==='1pl') return one(entries,'ἑστήκαμεν');
      if(person==='2pl') return one(entries,'ἑστήκατε');
      if(person==='3pl') return one(entries,'ἑστήκασι(ν)');
    }
    if(kind==='finite' && tense==='pluperfect' && voice==='active' && mood==='indicative'){
      const map = { '1sg':'εἱστήκειν', '2sg':'εἱστήκεις', '3sg':'εἱστήκει', '1pl':'εἱστήκεμεν', '2pl':'εἱστήκετε', '3pl':'εἱστήκεσαν' };
      if(map[person]) return one(entries,map[person]);
    }
    if(kind==='infinitive' && tense==='perfect' && voice==='active') return one(entries,'ἑστηκέναι');
    if(kind==='participle' && tense==='perfect' && voice==='active') return combine(entries, entries.map(e => e.form));
    return one(entries, entries[0].form);
  }

  function resolveHiemi(slot, entries){
    const [kind, tense, voice, mood, person] = slot.split('|');
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='indicative' && person==='2sg') return combine(entries,['ἵης','ἱεῖς']);
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = { '1pl':['ἱείημεν','ἱεῖμεν'], '2pl':['ἱείητε','ἱεῖτε'], '3pl':['ἱείησαν','ἱεῖεν'] };
      return combine(entries,map[person]);
    }
    if(kind==='finite' && tense==='present' && voice==='active' && mood==='imperative' && person==='3pl') return combine(entries,['ἱέντων','ἱέντωσαν']);
    if(kind==='finite' && tense==='imperfect' && voice==='active' && mood==='indicative' && person==='1sg') return combine(entries,['ἵην','ἵειν']);
    if(kind==='finite' && tense==='aorist' && voice==='active' && mood==='optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = { '1pl':['εἵημεν','εἷμεν'], '2pl':['εἵητε','εἷτε'], '3pl':['εἵησαν','εἷεν'] };
      return combine(entries,map[person]);
    }
    if(kind==='finite' && tense==='aorist' && voice==='passive' && mood==='optative' && ['1pl','2pl','3pl'].includes(person)){
      const map = { '1pl':['ἑθείημεν','ἑθεῖμεν'], '2pl':['ἑθείητε','ἑθεῖτε'], '3pl':['ἑθείησαν','ἑθεῖεν'] };
      return combine(entries,map[person]);
    }
    return one(entries, entries[0].form);
  }

  const resolvers = {
    'εἰμί': resolveEimi,
    'γίγνομαι': resolveGignomai,
    'λέγω': resolveLego,
    'δίδωμι': resolveDidomi,
    'τίθημι': resolveTithemi,
    'ἵστημι': resolveHistemi,
    'ἵημι': resolveHiemi
  };

  const originalByLemma = {};
  const visibleByLemma = {};
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
    for(const k of order){
      const entries = groups.get(k);
      const resolved = (resolvers[lemma] || ((slot, entries)=>one(entries, entries[0].form)))(k, entries);
      for(const e of resolved){ out.push(e); keptVisible++; }
    }
    window.MANUAL_PARADIGMS[lemma] = out;
    visibleByLemma[lemma] = out;
  }

  window.FORM_INDEX = window.FORM_INDEX || {};
  const targetNorms = new Set(TARGETS.map(normalizeGreek));
  for(const [key,bucket] of Object.entries(window.FORM_INDEX)){
    if(!Array.isArray(bucket)) continue;
    const filtered = bucket.filter(entry => !targetNorms.has(normalizeGreek(entry.lemma||'')));
    if(filtered.length) window.FORM_INDEX[key] = filtered; else delete window.FORM_INDEX[key];
  }

  for(const lemma of TARGETS){
    const visible = visibleByLemma[lemma] || [];
    const visibleSeen = new Set(visible.map(entrySig));
    const visibleNormSig = new Set(visible.map(e => [normalizeGreek(e.lemma||''),normalizeGreek(e.form||''),e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|')));

    const allForIndex = [];
    for(const e of visible) allForIndex.push(Object.assign({}, e));
    for(const e of originalByLemma[lemma] || []){
      const normSig = [normalizeGreek(e.lemma||''),normalizeGreek(e.form||''),e.kind||'',e.tense||'',e.voice||'',e.mood||'',e.person||'',e.gender||'',e.case||'',e.number||''].join('|');
      if(!visibleNormSig.has(normSig)){
        const r = Object.assign({}, e, { recognitionOnly:true });
        allForIndex.push(r);
        demotedRecognition++;
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
    irregularCleanup:true,
    irregularCleanupLemmas: TARGETS.length,
    irregularCleanupVisibleEntries: keptVisible,
    irregularCleanupRecognitionEntries: demotedRecognition
  });
})();
