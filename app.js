(function(){
  const TENSE_LABELS={present:'ενεστώτας',imperfect:'παρατατικός',future:'μέλλοντας',aorist:'αόριστος',perfect:'παρακείμενος',pluperfect:'υπερσυντέλικος','future perfect':'συντελεσμένος μέλλοντας'};
  const VOICE_LABELS={active:'ενεργητική',middle:'μέση',passive:'παθητική','middle/passive':'μέση/παθητική',middlepassive:'μέση/παθητική'};
  const MOOD_LABELS={indicative:'οριστική',subjunctive:'υποτακτική',optative:'ευκτική',imperative:'προστακτική',infinitive:'απαρέμφατο',participle:'μετοχή'};
  const LEMMA_ALIASES={
    'τιμω':['τιμάω','τιμῶ'],
    'ποιω':['ποιέω','ποιῶ'],
    'δηλω':['δηλόω','δηλῶ'],
    'ζητω':['ζητέω','ζητῶ'],
    'καλω':['καλέω','καλῶ'],
    'βοηθω':['βοηθέω','βοηθῶ'],
    'λεγω':['λέγω','εἶπον'],
    'οραω':['ὁράω','εἶδον'],
    'φερω':['φέρω','ἤνεγκον','οἴσω'],
    'λαμβανω':['λαμβάνω','ἔλαβον'],
    'γιγνομαι':['γίγνομαι','ἐγενόμην']
  };
  function lemmaEquivalentSet(lemma){
    const key=normalizeGreek(lemma||'');
    const direct=(LEMMA_ALIASES[key]||[]).map(normalizeGreek);
    const reverse=Object.values(LEMMA_ALIASES).filter(arr=>arr.map(normalizeGreek).includes(key)).flat().map(normalizeGreek);
    return Array.from(new Set([key, ...direct, ...reverse]));
  }
  const CASE_LABELS={nom:'ονομαστική',gen:'γενική',dat:'δοτική',acc:'αιτιατική',voc:'κλητική'};
  const GENDER_LABELS={masc:'αρσενικό',fem:'θηλυκό',neut:'ουδέτερο'};
  const NUMBER_LABELS={sg:'ενικός',du:'δυϊκός',pl:'πληθυντικός'};
  const PERSON_LABELS={ '1sg':'α΄ ενικό','2sg':'β΄ ενικό','3sg':'γ΄ ενικό','1du':'α΄ δυϊκό','2du':'β΄ δυϊκό','3du':'γ΄ δυϊκό','1pl':'α΄ πληθυντικό','2pl':'β΄ πληθυντικό','3pl':'γ΄ πληθυντικό' };
  const PERSON_ORDER=['1sg','2sg','3sg','1du','2du','3du','1pl','2pl','3pl'];
  const verbs=(window.VERB_DATA||[]);
  const lemmaForms=window.LEMMA_FORMS||{};
  const externalSources=(window.EXTERNAL_SOURCES||[]);
  const philologyData=(window.PHILOLOGY_DATA||{});
  const hardeningData=(window.PHILOLOGY_HARDENING||{});
  const manualCurationData=(window.MANUAL_CURATION||{});
  const spotChecksData=(window.SPOT_CHECKS||{});
  const slotValidationData=(window.SLOT_VALIDATIONS||{});
  const manualParadigms=(window.MANUAL_PARADIGMS||{});
  const multipleAnalysesData=(window.MULTIPLE_ANALYSES||{});
  const classroomTestsData=(window.CLASSROOM_TESTS||{tests:[]});
  const canonicalLemmaSet=new Set((philologyData.canonicalLemmas||[]).map(normalizeGreek));
  const hardeningLemmaMap=Object.fromEntries(Object.entries(hardeningData.targetedLemmas||{}).map(([k,v])=>[normalizeGreek(k),v]));
  const manualCurationMap=Object.fromEntries(Object.entries(manualCurationData.curatedLemmas||{}).map(([k,v])=>[normalizeGreek(k),v]));
  const spotCheckMap=Object.fromEntries(Object.entries(spotChecksData||{}).map(([k,v])=>[normalizeGreek(k),v]));
  const slotValidationMap=Object.fromEntries(Object.entries(slotValidationData||{}).map(([k,v])=>[normalizeGreek(k),v]));
  const manualParadigmNormMap=Object.fromEntries(Object.keys(manualParadigms).map(k=>[normalizeGreek(k),k]));
  const multipleAnalysisNotes=multipleAnalysesData.notes||{};
  Object.assign(multipleAnalysisNotes,{
    "τιματε": multipleAnalysisNotes["τιματε"] || {display:"τιμᾶτε", alternatives:["ενεστώτας ενεργητική οριστική β΄ πληθυντικό","ενεστώτας ενεργητική προστακτική β΄ πληθυντικό"], note:"Συνηρημένος τύπος με σχολικά ουσιώδη αμφισημία ανάμεσα σε οριστική και προστακτική."},
    "ποιειτε": multipleAnalysisNotes["ποιειτε"] || {display:"ποιεῖτε", alternatives:["ενεστώτας ενεργητική οριστική β΄ πληθυντικό","ενεστώτας ενεργητική προστακτική β΄ πληθυντικό"], note:"Συνηρημένος τύπος με κοινή αμφισημία στη σχολική γραμματική."},
    "δηλουτε": multipleAnalysisNotes["δηλουτε"] || {display:"δηλοῦτε", alternatives:["ενεστώτας ενεργητική οριστική β΄ πληθυντικό","ενεστώτας ενεργητική προστακτική β΄ πληθυντικό"], note:"Συνηρημένος τύπος με διπλή έγκυρη ανάλυση."},
    "ζητειτε": multipleAnalysisNotes["ζητειτε"] || {display:"ζητεῖτε", alternatives:["ενεστώτας ενεργητική οριστική β΄ πληθυντικό","ενεστώτας ενεργητική προστακτική β΄ πληθυντικό"], note:"Συνηρημένος τύπος που χρειάζεται συμφραστική αποσαφήνιση."},
    "καλειτε": multipleAnalysisNotes["καλειτε"] || {display:"καλεῖτε", alternatives:["ενεστώτας ενεργητική οριστική β΄ πληθυντικό","ενεστώτας ενεργητική προστακτική β΄ πληθυντικό"], note:"Συνηρημένος τύπος με σχολικά ουσιώδη αμφισημία."},
    "βοηθειτε": multipleAnalysisNotes["βοηθειτε"] || {display:"βοηθεῖτε", alternatives:["ενεστώτας ενεργητική οριστική β΄ πληθυντικό","ενεστώτας ενεργητική προστακτική β΄ πληθυντικό"], note:"Συνηρημένος τύπος με κοινή αμφισημία στη σχολική χρήση."}
  });
  function $(sel){ return document.querySelector(sel); }
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase().trim(); }
  function stripLengthMarks(s){ return (s||'').normalize('NFD').replace(/[\u0304\u0306]/g,'').normalize('NFC'); }
  function label(map,key){ return map[key]||key||'—'; }
  function canonicalPerson(entryOrPerson, maybeNumber){
    const person = typeof entryOrPerson==='object' ? entryOrPerson?.person : entryOrPerson;
    const number = typeof entryOrPerson==='object' ? entryOrPerson?.number : maybeNumber;
    if(!person) return null;
    const raw=String(person).trim();
    const m=raw.match(/^([123])(sg|du|pl)?$/);
    if(!m) return raw;
    const stem=m[1];
    const normalizedNumber = (number && ['sg','du','pl'].includes(String(number))) ? String(number) : null;
    const suffix = normalizedNumber || m[2] || null;
    return suffix ? `${stem}${suffix}` : raw;
  }
  function personLabel(key, number){ return PERSON_LABELS[canonicalPerson(key, number)]||canonicalPerson(key, number)||key||'—'; }
  function normalizeVoice(v){
    const x=normalizeGreek(v||'');
    if(x==='middlepassive' || x==='middle/passive') return 'middle';
    return x;
  }
  function sameLemma(a,b){
    const aSet=lemmaEquivalentSet(a);
    const bSet=lemmaEquivalentSet(b);
    return aSet.some(x=>bSet.includes(x)) || normalizeGreek(displayLemma(a))===normalizeGreek(displayLemma(b));
  }
  function escapeHtml(s){ return String(s||'').replace(/[&<>"']/g, m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m])); }
  function familyLabel(v){ return (philologyData.familyLabels||{})[v?.family] || v?.family || '—'; }
  function hardeningInfo(lemma){ return hardeningLemmaMap[normalizeGreek(lemma||'')] || null; }
  function manualCurationInfo(lemma){ return manualCurationMap[normalizeGreek(lemma||'')] || null; }
  function spotCheckInfo(lemma){ return spotCheckMap[normalizeGreek(lemma||'')] || null; }
  function reliabilityInfo(v){
    const norm=normalizeGreek(v?.lemma||'');
    const hasForms=Boolean(conjugableByNorm[norm]);
    if(v?.source==='core-manual') return {key:'manual', label:(philologyData.reliabilityLabels||{}).manual||'πλήρως ελεγμένο', className:'manual'};
    if(v?.source==='core') return {key:'reviewed', label:(philologyData.reliabilityLabels||{}).reviewed||'ελεγμένο core λήμμα', className:'reviewed'};
    if(canonicalLemmaSet.has(norm)) return {key:'canonical-import', label:(philologyData.reliabilityLabels||{})['canonical-import']||'κανονικό σχολικό λήμμα', className:'canonical'};
    if(hasForms) return {key:'imported', label:(philologyData.reliabilityLabels||{}).imported||'εισαγόμενο layer', className:'supplemental'};
    return {key:'catalog', label:(philologyData.reliabilityLabels||{}).catalog||'βιβλιογραφική εγγραφή', className:'catalog'};
  }
  function hasManualParadigm(lemma){ return Boolean(manualParadigmNormMap[normalizeGreek(lemma||'')]); }
  function slotValidationInfo(lemma){ return slotValidationMap[normalizeGreek(lemma||'')] || null; }
  function preferredLemmaKey(lemma){
    const norm=normalizeGreek(lemma||'');
    return manualParadigmNormMap[norm] || conjugableByNorm[norm] || lemma;
  }
  function lemmaRecord(lemma){
    const norm=normalizeGreek(lemma);
    return verbs.find(v=>normalizeGreek(v.lemma)===norm) || {lemma};
  }
  function uniqBy(arr,keyFn){ const seen=new Set(); return arr.filter(x=>{ const k=keyFn(x); if(seen.has(k)) return false; seen.add(k); return true; }); }
  function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
  function randomItem(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
  function contractType(lemma){
    const s=stripLengthMarks(lemma);
    if(/άω$|αω$/.test(s)) return 'alpha';
    if(/έω$|εω$/.test(s)) return 'epsilon';
    if(/όω$|οω$/.test(s)) return 'omicron';
    return null;
  }
  function displayLemma(lemma){
    const s=stripLengthMarks(lemma);
    const t=contractType(s);
    if(t) return s.replace(/άω$|αω$|έω$|εω$|όω$|οω$/,'ῶ');
    return s;
  }
  function contractAlphaForm(s){
    return s
      .replace(/άουσιν$/,'ῶσιν').replace(/άουσι$/,'ῶσι').replace(/αουσιν$/,'ῶσιν').replace(/αουσι$/,'ῶσι')
      .replace(/άομεθα$/,'ώμεθα').replace(/αομεθα$/,'ώμεθα')
      .replace(/άομεν$/,'ῶμεν').replace(/αομεν$/,'ῶμεν')
      .replace(/άονται$/,'ῶνται').replace(/αονται$/,'ῶνται')
      .replace(/άομαι$/,'ῶμαι').replace(/αομαι$/,'ῶμαι')
      .replace(/άεσθαι$/,'ᾶσθαι').replace(/αεσθαι$/,'ᾶσθαι')
      .replace(/άειν$/,'ᾶν').replace(/αειν$/,'ᾶν')
      .replace(/άεσθε$/,'ᾶσθε').replace(/αεσθε$/,'ᾶσθε')
      .replace(/άεται$/,'ᾶται').replace(/αεται$/,'ᾶται')
      .replace(/άητον$/,'ᾶτον').replace(/αητον$/,'ᾶτον').replace(/άετον$/,'ᾶτον').replace(/αετον$/,'ᾶτον')
      .replace(/άετε$/,'ᾶτε').replace(/αετε$/,'ᾶτε')
      .replace(/άεις$/,'ᾷς').replace(/αεις$/,'ᾷς')
      .replace(/άει$/,'ᾷ').replace(/αει$/,'ᾷ')
      .replace(/αώμεν$/,'ῶμεν').replace(/αῶμεν$/,'ῶμεν')
      .replace(/αώμαι$/,'ῶμαι').replace(/αῶμαι$/,'ῶμαι')
      .replace(/αώντων$/,'ώντων').replace(/αωντων$/,'ώντων')
      .replace(/άωντες$/,'ῶντες').replace(/αωντες$/,'ῶντες')
      .replace(/άων$/,'ῶν').replace(/αων$/,'ῶν')
      .replace(/άουσ/,'ῶσ').replace(/αουσ/,'ῶσ')
      .replace(/άον$/,'ῶν').replace(/αον$/,'ῶν')
      .replace(/αομέν/,'ωμέν').replace(/αομεν/,'ωμεν')
      .replace(/άω$/,'ῶ').replace(/αω$/,'ῶ');
  }
  function contractEpsilonForm(s){
    return s
      .replace(/έουσιν$/,'οῦσιν').replace(/έουσι$/,'οῦσι').replace(/εουσιν$/,'οῦσιν').replace(/εουσι$/,'οῦσι')
      .replace(/έομεθα$/,'ούμεθα').replace(/εομεθα$/,'ούμεθα')
      .replace(/έομεν$/,'οῦμεν').replace(/εομεν$/,'οῦμεν')
      .replace(/έονται$/,'οῦνται').replace(/εονται$/,'οῦνται')
      .replace(/έομαι$/,'οῦμαι').replace(/εομαι$/,'οῦμαι')
      .replace(/έεσθαι$/,'εῖσθαι').replace(/εεσθαι$/,'εῖσθαι')
      .replace(/έειν$/,'εῖν').replace(/εειν$/,'εῖν')
      .replace(/έεσθε$/,'εῖσθε').replace(/εεσθε$/,'εῖσθε')
      .replace(/έεται$/,'εῖται').replace(/εεται$/,'εῖται')
      .replace(/έητον$/,'εῖτον').replace(/εητον$/,'εῖτον').replace(/έετον$/,'εῖτον').replace(/εετον$/,'εῖτον')
      .replace(/έετε$/,'εῖτε').replace(/εετε$/,'εῖτε')
      .replace(/έεις$/,'εῖς').replace(/εεις$/,'εῖς')
      .replace(/έει$/,'εῖ').replace(/εει$/,'εῖ')
      .replace(/έωντες$/,'οῦντες').replace(/εωντες$/,'οῦντες')
      .replace(/έων$/,'ῶν').replace(/εων$/,'ῶν')
      .replace(/έουσ/,'οῦσ').replace(/εουσ/,'οῦσ')
      .replace(/έον$/,'οῦν').replace(/εον$/,'οῦν')
      .replace(/εομέν/,'ουμέν').replace(/εομεν/,'ουμεν')
      .replace(/έω$/,'ῶ').replace(/εω$/,'ῶ');
  }
  function contractOmicronForm(s){
    return s
      .replace(/όουσιν$/,'οῦσιν').replace(/όουσι$/,'οῦσι').replace(/οουσιν$/,'οῦσιν').replace(/οουσι$/,'οῦσι')
      .replace(/όομεθα$/,'ούμεθα').replace(/οομεθα$/,'ούμεθα')
      .replace(/όομεν$/,'οῦμεν').replace(/οομεν$/,'οῦμεν')
      .replace(/όονται$/,'οῦνται').replace(/οονται$/,'οῦνται')
      .replace(/όομαι$/,'οῦμαι').replace(/οομαι$/,'οῦμαι')
      .replace(/όειν$/,'οῦν').replace(/οειν$/,'οῦν')
      .replace(/όεσθαι$/,'οῦσθαι').replace(/οεσθαι$/,'οῦσθαι')
      .replace(/όεσθε$/,'οῦσθε').replace(/οεσθε$/,'οῦσθε')
      .replace(/όεται$/,'οῦται').replace(/οεται$/,'οῦται')
      .replace(/όετε$/,'οῦτε').replace(/οετε$/,'οῦτε')
      .replace(/όεις$/,'οῖς').replace(/οεις$/,'οῖς')
      .replace(/όει$/,'οῖ').replace(/οει$/,'οῖ')
      .replace(/όωντες$/,'οῦντες').replace(/οωντες$/,'οῦντες')
      .replace(/όων$/,'ῶν').replace(/οων$/,'ῶν')
      .replace(/όουσ/,'οῦσ').replace(/οουσ/,'οῦσ')
      .replace(/όον$/,'οῦν').replace(/οον$/,'οῦν')
      .replace(/οομέν/,'ουμέν').replace(/οομεν/,'ουμεν')
      .replace(/όω$/,'ῶ').replace(/οω$/,'ῶ');
  }
  function displayForm(entry){
    const base=stripLengthMarks(entry.form||'');
    const t=contractType(entry.lemma||'');
    if(!t) return base;
    if(t==='alpha') return contractAlphaForm(base);
    if(t==='epsilon') return contractEpsilonForm(base);
    if(t==='omicron') return contractOmicronForm(base);
    return base;
  }
  const conjugableLemmas=Object.keys(lemmaForms).sort((a,b)=>a.localeCompare(b,'el'));
  const conjugableByNorm=Object.fromEntries(conjugableLemmas.map(l=>[normalizeGreek(l),l]));
  const conjugableNormSet=new Set(conjugableLemmas.map(normalizeGreek));
  let flatForms=null;
  let formIndex=null;
  function buildRuntimeIndexes(){
    if(flatForms && formIndex) return;
    flatForms=[];
    formIndex={};
    const allLemmaKeys=uniqBy([...(conjugableLemmas||[]), ...Object.keys(manualParadigms||{})], x=>normalizeGreek(x));
    allLemmaKeys.forEach(lemma=>{
      const norm=normalizeGreek(lemma);
      const entries = manualParadigmNormMap[norm] ? (manualParadigms[manualParadigmNormMap[norm]]||[]) : (lemmaForms[lemma]||[]);
      entries.forEach(entry=>{
        const enriched={...entry, lemma};
        flatForms.push(enriched);
        const display=displayForm(enriched);
        const norm=normalizeGreek(entry.form);
        if(!formIndex[norm]) formIndex[norm]=[];
        formIndex[norm].push(enriched);
        const displayNorm=normalizeGreek(display);
        if(displayNorm!==norm){ if(!formIndex[displayNorm]) formIndex[displayNorm]=[]; formIndex[displayNorm].push(enriched); }
      });
    });
    Object.keys(formIndex).forEach(k=>{
      formIndex[k]=uniqBy(formIndex[k],x=>JSON.stringify(x));
    });
  }
  function buildHeroStats(){
    const cards=[
      {title:'Αναγνώριση τύπων', text:'Άμεση μορφολογική ανάλυση ρηματικών τύπων.'},
      {title:'Κλίση λημμάτων', text:'Προβολή πεπερασμένων και μη προσωπικών τύπων.'},
      {title:'Εξάσκηση', text:'Παιγνιώδης εξάσκηση με άμεση ανατροφοδότηση.'},
      {title:'Σχολική χρήση', text:'Κατάλληλη για μάθημα, μελέτη και φύλλα εργασίας.'}
    ];
    $('#hero-stats').innerHTML=cards.map(s=>`<div class="stat-card"><strong>${s.title}</strong><span>${s.text}</span></div>`).join('');
  }
  function activateTabs(){
    const loadedTabs = new Set(['analyze','conjugate']);
    document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{
      document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(x=>x.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector(`#tab-${btn.dataset.tab}`).classList.add('active');
      if(!loadedTabs.has(btn.dataset.tab)){
        if(btn.dataset.tab==='quiz') newQuiz();
        if(btn.dataset.tab==='classroom') runClassroomTests();
        if(btn.dataset.tab==='library') renderLibrary();
        if(btn.dataset.tab==='sources') renderSources();
        loadedTabs.add(btn.dataset.tab);
      } else {
        if(btn.dataset.tab==='quiz') newQuiz();
        if(btn.dataset.tab==='classroom') runClassroomTests();
      }
    }));
  }
  function ambiguityNoteFor(form){
    return multipleAnalysisNotes[normalizeGreek(form||'')] || null;
  }
  function renderAnalysisResults(results){
    const box=$('#analyze-results');
    const note = ambiguityNoteFor($('#analyze-input').value);
    if(!results.length){
      box.innerHTML=`<div class="result-card"><h3>Δεν βρέθηκε ασφαλής αντιστοίχιση</h3><p class="muted">Ο τύπος δεν εντοπίστηκε στα εισαγμένα δεδομένα κλίσης. Δοκίμασε πολυτονική ή μονοτονική γραφή ή αναζήτησε το λήμμα στη βιβλιοθήκη.</p></div>`;
      return;
    }
    const noteHtml = note ? `<div class="result-card ambiguity-card"><div class="badges"><span class="badge manual">πολλαπλή ανάλυση</span><span class="badge reviewed">χειροκίνητη επιμέλεια</span></div><h3>${escapeHtml(note.display||$('#analyze-input').value)}</h3><p class="muted">${escapeHtml(note.note||'Ο τύπος επιδέχεται περισσότερες από μία μορφολογικές ερμηνείες.')}</p><ul class="ambiguity-list">${(note.alternatives||[]).map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul></div>` : '';
    box.innerHTML= noteHtml + results.map(r=>{
      const meta=[];
      meta.push(`<div><strong>Είδος</strong><span>${r.kind==='finite'?'πεπερασμένος τύπος':r.kind==='infinitive'?'απαρέμφατο':'μετοχή'}</span></div>`);
      meta.push(`<div><strong>Χρόνος</strong><span>${label(TENSE_LABELS,r.tense)}</span></div>`);
      meta.push(`<div><strong>Φωνή</strong><span>${label(VOICE_LABELS,r.voice)}</span></div>`);
      meta.push(`<div><strong>Έγκλιση</strong><span>${label(MOOD_LABELS,r.mood)}</span></div>`);
      if(r.person) meta.push(`<div><strong>Πρόσωπο</strong><span>${personLabel(r)}</span></div>`);
      if(r.gender) meta.push(`<div><strong>Γένος</strong><span>${label(GENDER_LABELS,r.gender)}</span></div>`);
      if(r.case) meta.push(`<div><strong>Πτώση</strong><span>${label(CASE_LABELS,r.case)}</span></div>`);
      if(r.number) meta.push(`<div><strong>Αριθμός</strong><span>${label(NUMBER_LABELS,r.number)}</span></div>`);
      return `<div class="result-card"><div class="badges"><span class="badge full">${escapeHtml(displayLemma(r.lemma))}</span><span class="badge supplemental">πλήρης κλιτική εγγραφή</span></div><h3>${escapeHtml(displayForm(r))}</h3><div class="definition-list">${meta.join('')}</div></div>`;
    }).join('');
  }
  function analyze(){
    buildRuntimeIndexes();
    const q=normalizeGreek($('#analyze-input').value);
    renderAnalysisResults((formIndex[q]||[]).slice(0,20));
  }
  function populateVerbSelect(){
    const sel=$('#verb-select');
    sel.innerHTML=conjugableLemmas.map(l=>`<option value="${escapeHtml(l)}">${escapeHtml(displayLemma(l))}</option>`).join('');
  }
  function formsForLemma(lemma){
    const norm=normalizeGreek(lemma);
    if(manualParadigmNormMap[norm]) return (manualParadigms[manualParadigmNormMap[norm]]||[]).slice();
    const resolved=conjugableByNorm[norm] || lemma;
    return (lemmaForms[resolved]||[]).slice();
  }
  function renderConjugation(){
    const lemma=$('#verb-select').value;
    const mode=$('#view-select').value;
    const forms=formsForLemma(lemma);
    const metaVerb=verbs.find(v=>normalizeGreek(v.lemma)===normalizeGreek(lemma));
    const finite=forms.filter(x=>x.kind==='finite');
    const summary=[];
    summary.push(`<strong>${escapeHtml(displayLemma(lemma))}</strong>`);
    if(hasManualParadigm(lemma)) summary.push('χειροκίνητα επιμελημένο paradigm');
    if(metaVerb?.gloss && metaVerb.gloss !== 'Συμπληρωματικό λήμμα') summary.push(`νεοελληνική μετάφραση: ${escapeHtml(metaVerb.gloss)}`);
    if(metaVerb?.principalParts) summary.push(`κύρια μέρη: ${escapeHtml(metaVerb.principalParts)}`);
    const hard=hardeningInfo(lemma);
    const curated=manualCurationInfo(lemma);
    const spot=spotCheckInfo(lemma);
    const slotValidation=slotValidationInfo(lemma);
    if(hard) summary.push(`philology hardening: ${escapeHtml(hard.group)}`);
    if(curated) summary.push(`χειροκίνητη λημματοκεντρική επιμέλεια: ${escapeHtml(curated.family)}`);
    if(spot) summary.push(`spot-check: ${escapeHtml(spot.summary)}`);
    if(slotValidation) summary.push(`slot-by-slot validation: ${escapeHtml(slotValidation.summary)}`);
    $('#conjugation-summary').innerHTML=summary.join(' · ');
    const spotBox=$('#conjugation-spotcheck');
    const spotHtml = spot ? (()=>{
      const validated=(spot.validated||[]).map(x=>`<span class="badge canonical">${escapeHtml(x)}</span>`).join(' ');
      return `<div class="result-card"><h3>Spot-check λήμματος</h3><p>${escapeHtml(spot.summary||'')}</p><p><strong>Επιβεβαιωμένοι βασικοί τύποι:</strong></p><div class="badges">${validated}</div><p class="notes-compact"><strong>Σημείο προσοχής:</strong> ${escapeHtml(spot.caution||'')}</p><p class="notes-compact"><strong>Επόμενο βήμα:</strong> ${escapeHtml(spot.nextStep||'')}</p></div>`;
    })() : '';
    const slotHtml = slotValidation ? (()=>{
      const slots=(slotValidation.slots||[]).map(s=>`<div class="cell"><div class="label">${escapeHtml(s.label||s.slot||'')}</div><div class="form">${escapeHtml(s.form||'')}</div><div class="notes-compact">${escapeHtml(s.note||'')}</div></div>`).join('');
      return `<div class="result-card"><h3>Slot-by-slot validation</h3><p>${escapeHtml(slotValidation.summary||'')}</p><div class="grid-six">${slots}</div></div>`;
    })() : '';
    spotBox.innerHTML = spotHtml + slotHtml;
    const out=$('#conjugation-output');
    if(mode==='finite'){
      const groups={};
      finite.forEach(f=>{ const k=`${f.tense}|${f.voice}|${f.mood}`; (groups[k]=groups[k]||[]).push(f); });
      const orderT=['present','imperfect','future','aorist','perfect','pluperfect','future perfect'];
      const orderM=['indicative','subjunctive','optative','imperative'];
      const orderV=['active','middle','middle/passive','passive','middlepassive'];
      const keys=Object.keys(groups).sort((a,b)=>{
        const [ta,va,ma]=a.split('|'); const [tb,vb,mb]=b.split('|');
        return orderT.indexOf(ta)-orderT.indexOf(tb) || orderV.indexOf(va)-orderV.indexOf(vb) || orderM.indexOf(ma)-orderM.indexOf(mb);
      });
      out.innerHTML=keys.map(k=>{
        const [tense,voice,mood]=k.split('|');
        const entries=groups[k].slice().sort((a,b)=>PERSON_ORDER.indexOf(canonicalPerson(a)||'')-PERSON_ORDER.indexOf(canonicalPerson(b)||''));
        return `<div class="table-block"><h3>${label(TENSE_LABELS,tense)} • ${label(VOICE_LABELS,voice)} • ${label(MOOD_LABELS,mood)}</h3><div class="grid-six">${entries.map(e=>`<div class="cell"><div class="label">${personLabel(e)}</div><div class="form">${escapeHtml(displayForm(e))}</div></div>`).join('')}</div></div>`;
      }).join('') || '<div class="result-card"><p>Δεν υπάρχουν διαθέσιμοι ρηματικοί τύποι για το λήμμα.</p></div>';
    } else if(mode==='infinitive'){
      const filtered=forms.filter(x=>x.kind==='infinitive');
      out.innerHTML=`<div class="results-grid">${filtered.map(f=>`<div class="result-card"><div class="badges"><span class="badge full">${label(TENSE_LABELS,f.tense)}</span><span class="badge">${label(VOICE_LABELS,f.voice)}</span></div><h3>${escapeHtml(displayForm(f))}</h3></div>`).join('')}</div>` || '<div class="result-card"><p>Δεν υπάρχουν διαθέσιμα απαρέμφατα.</p></div>';
    } else {
      const filtered=forms.filter(x=>x.kind==='participle');
      out.innerHTML=`<div class="results-grid">${filtered.map(f=>`<div class="result-card"><div class="badges"><span class="badge full">${label(TENSE_LABELS,f.tense)}</span><span class="badge">${label(VOICE_LABELS,f.voice)}</span></div><h3>${escapeHtml(displayForm(f))}</h3><p class="muted">${label(GENDER_LABELS,f.gender)} • ${label(CASE_LABELS,f.case)} • ${label(NUMBER_LABELS,f.number)}</p></div>`).join('')}</div>` || '<div class="result-card"><p>Δεν υπάρχουν διαθέσιμες μετοχές.</p></div>';
    }
  }
  const quizPoolCache = {};
  function poolForLevel(level){
    buildRuntimeIndexes();
    if(quizPoolCache[level]) return quizPoolCache[level];
    let pool=flatForms;
    if(level==='easy') pool=pool.filter(x=>x.kind==='finite' && x.mood==='indicative' && ['present','imperfect','future','aorist'].includes(x.tense));
    if(level==='advanced') pool=pool.filter(x=>x.kind!=='finite' || !['present','imperfect','future','aorist'].includes(x.tense) || x.mood!=='indicative');
    quizPoolCache[level]=pool;
    return pool;
  }
  let quizState={score:0,attempts:0,current:null};
  function formatChoice(x){
    let s=`${displayLemma(x.lemma)} — ${label(TENSE_LABELS,x.tense)} • ${label(VOICE_LABELS,x.voice)} • ${label(MOOD_LABELS,x.mood)}`;
    if(x.person) s+=` • ${personLabel(x)}`;
    if(x.gender) s+=` • ${label(GENDER_LABELS,x.gender)} • ${label(CASE_LABELS,x.case)} • ${label(NUMBER_LABELS,x.number)}`;
    return s;
  }
  function bindQuizChoiceEvents(){
    document.querySelectorAll('.quiz-choice').forEach(btn=>btn.addEventListener('click',()=>answerQuiz(Number(btn.dataset.idx))));
  }
  function newQuiz(){
    let pool=poolForLevel($('#quiz-level').value);
    pool=pool.filter(x=>!ambiguityNoteFor(x.form));
    if(!$('#quiz-finite').checked) pool=pool.filter(x=>x.kind!=='finite');
    if(!$('#quiz-nonfinite').checked) pool=pool.filter(x=>x.kind==='finite');
    pool=uniqBy(pool, x=>`${normalizeGreek(displayForm(x))}|${formatChoice(x)}`);
    if(!pool.length){
      $('#quiz-box').textContent='Δεν υπάρχει διαθέσιμο pool για τις τρέχουσες επιλογές.';
      $('#quiz-choices').innerHTML='';
      return;
    }
    const answer=randomItem(pool);
    const sameLemmaPool = pool.filter(x=>sameLemma(x.lemma, answer.lemma) && formatChoice(x)!==formatChoice(answer));
    let distractors = uniqBy(shuffle(sameLemmaPool), x=>formatChoice(x)).slice(0,3);
    if(distractors.length<3){
      const sameFamilyPool = pool.filter(x=>{
        const xr=lemmaRecord(x.lemma), ar=lemmaRecord(answer.lemma);
        return xr && ar && xr.family && ar.family && xr.family===ar.family && formatChoice(x)!==formatChoice(answer);
      });
      for(const item of uniqBy(shuffle(sameFamilyPool), x=>formatChoice(x))){
        if(distractors.length>=3) break;
        if(!distractors.some(d=>formatChoice(d)===formatChoice(item))) distractors.push(item);
      }
    }
    if(distractors.length<3){
      const fallback=uniqBy(shuffle(pool.filter(x=>formatChoice(x)!==formatChoice(answer))), x=>formatChoice(x));
      for(const item of fallback){
        if(distractors.length>=3) break;
        if(!distractors.some(d=>formatChoice(d)===formatChoice(item))) distractors.push(item);
      }
    }
    const choices=shuffle([answer,...distractors]).slice(0,4);
    quizState.current={answer,choices};
    $('#quiz-box').textContent=displayForm(answer);
    $('#quiz-feedback').textContent='';
    if(choices.length<2){
      $('#quiz-choices').innerHTML='<div class="result-card"><p>Δεν ήταν δυνατό να δημιουργηθούν επαρκείς επιλογές για την τρέχουσα ερώτηση.</p></div>';
      return;
    }
    $('#quiz-choices').innerHTML=choices.map((c,i)=>`<button type="button" class="quiz-choice" data-idx="${i}"><span class="quiz-choice-index">${i+1}.</span> <span class="quiz-choice-text">${escapeHtml(formatChoice(c))}</span></button>`).join('');
    bindQuizChoiceEvents();
  }
  function answerQuiz(i){
    const picked=quizState.current.choices[i];
    const ok=formatChoice(picked)===formatChoice(quizState.current.answer);
    quizState.attempts++; if(ok) quizState.score++;
    $('#score').textContent=quizState.score; $('#attempts').textContent=quizState.attempts;
    const manualNote = hasManualParadigm(quizState.current.answer.lemma) ? ' Η ερώτηση προήλθε από χειροκίνητα επιμελημένο paradigm.' : '';
    $('#quiz-feedback').innerHTML=ok?`Σωστό.${manualNote}`:`Λάθος. Σωστή απάντηση: ${escapeHtml(formatChoice(quizState.current.answer))}.${manualNote}`;
  }
  function coverageBucket(v){
    if(hasManualParadigm(v.lemma)) return 'full-core';
    const canonicalLemma=conjugableByNorm[normalizeGreek(v.lemma)];
    if(!canonicalLemma) return 'catalog';
    return v.source==='greek-conjugator-js' ? 'full-imported' : 'full-core';
  }
  function renderLibrary(){
    const q=normalizeGreek($('#library-search').value);
    const coverage=$('#coverage-filter').value;
    const sourceFilter=$('#source-filter').value;
    const philologyFilter=$('#philology-filter').value;
    const rows=verbs.filter(v=>{
      const okText=!q || normalizeGreek(v.lemma).includes(q) || normalizeGreek(v.gloss||'').includes(q) || normalizeGreek(v.displayLemma||'').includes(q);
      const bucket=coverageBucket(v);
      const okCoverage=coverage==='all' || coverage===bucket;
      const sourceKey=v.source==='core' && v.coverage==='manual' ? 'core-manual' : (v.source||'core');
      const okSource=sourceFilter==='all' || sourceFilter===sourceKey;
      const rel=reliabilityInfo(v).key;
      const okPhilology = philologyFilter==='all' || (philologyFilter==='canonical' && canonicalLemmaSet.has(normalizeGreek(v.lemma))) || (philologyFilter==='reviewed' && ['manual','reviewed'].includes(rel)) || (philologyFilter==='imported' && ['canonical-import','imported'].includes(rel)) || (philologyFilter==='hardening' && Boolean(hardeningInfo(v.lemma))) || (philologyFilter==='curated' && Boolean(manualCurationInfo(v.lemma))); 
      return okText && okCoverage && okSource && okPhilology;
    });
        $('#library-results').innerHTML=rows.slice(0,500).map(v=>{
      const canonicalLemma=conjugableByNorm[normalizeGreek(v.lemma)];
      const hasForms=Boolean(canonicalLemma) || hasManualParadigm(v.lemma);
      const formsCount=hasManualParadigm(v.lemma) ? formsForLemma(v.lemma).length : (canonicalLemma ? (lemmaForms[canonicalLemma]||[]).length : 0);
      const title=v.displayLemma ? `${escapeHtml(v.displayLemma)} <span class="muted">(${escapeHtml(v.lemma)})</span>` : escapeHtml(displayLemma(v.lemma));
      const rel=reliabilityInfo(v);
      const hard=hardeningInfo(v.lemma);
      const curated=manualCurationInfo(v.lemma);
      const spot=spotCheckInfo(v.lemma);
      return `<div class="verb-card"><div class="badges">${hasForms?'<span class="badge full">κλίση διαθέσιμη</span>':'<span class="badge catalog">μόνο λημματολόγιο</span>'}<span class="badge ${rel.className}">${escapeHtml(rel.label)}</span><span class="badge">${escapeHtml(v.source||'core')}</span>${canonicalLemmaSet.has(normalizeGreek(v.lemma))?'<span class="badge canonical">canonical</span>':''}${hard?'<span class="badge manual">targeted hardening</span>':''}${curated?'<span class="badge reviewed">χειροκίνητη επιμέλεια</span>':''}${spot?'<span class="badge canonical">spot-check</span>':''}${slotValidationInfo(v.lemma)?'<span class="badge manual">slot validation</span>':''}${hasManualParadigm(v.lemma)?'<span class="badge full">manual paradigm</span>':''}</div><h3>${title}</h3><p class="muted">${escapeHtml(v.gloss||'—')}</p><p class="family-line"><strong>Οικογένεια:</strong> ${escapeHtml(curated?.family || familyLabel(v))}</p>${hard?`<p><strong>Hardening ομάδα:</strong> ${escapeHtml(hard.group)}</p><p class="notes-compact">${escapeHtml(hard.note||'')}</p>`:''}${curated?`<p><strong>Επίπεδο επιμέλειας:</strong> χειροκίνητη λημματοκεντρική επιμέλεια</p><p class="notes-compact">${escapeHtml(curated.schoolNote||'')}</p><p class="notes-compact"><strong>Προσοχή:</strong> ${escapeHtml(curated.caution||'')}</p><p class="notes-compact"><strong>Διδακτική χρήση:</strong> ${escapeHtml(curated.recommendation||'')}</p>`:''}${spot?`<p><strong>Spot-check:</strong> επιβεβαιωμένο λημματικό πέρασμα</p><p class="notes-compact">${escapeHtml(spot.summary||'')}</p><p class="notes-compact"><strong>Σημείο προσοχής:</strong> ${escapeHtml(spot.caution||'')}</p>`:''}${slotValidationInfo(v.lemma)?`<p><strong>Slot validation:</strong> χειροκίνητα ελεγμένα βασικά κλιτικά slots</p><p class="notes-compact">${escapeHtml(slotValidationInfo(v.lemma).summary||'')}</p>`:''}${hasForms?`<p><strong>Τύποι:</strong> ${formsCount}</p>`:''}${v.principalParts?`<p><strong>Κύρια μέρη:</strong> ${escapeHtml(v.principalParts)}</p>`:''}${v.notes?`<p class="notes-compact">${escapeHtml(v.notes)}</p>`:''}</div>`;
    }).join('') + (rows.length>500?`<div class="verb-card"><p>Εμφανίζονται τα πρώτα 500 αποτελέσματα. Χρησιμοποίησε αναζήτηση για ακριβέστερο φιλτράρισμα.</p></div>`:'');
  }
  function renderSources(){
    $('#source-results').innerHTML=externalSources.map(s=>{
      const adapter=(window.SOURCE_ADAPTERS||{})[s.id];
      const badgeClass=s.status==='integrated'?'full':s.status==='integrated-partial'?'manual':'supplemental';
      const adapterLine=adapter ? `<p><strong>Adapter / scaffold:</strong> ${escapeHtml(adapter.mode)}${adapter.buildPipelineReady?` • ${escapeHtml('build-pipeline-ready')}`:''}${adapter.localBundled?` • ${escapeHtml('local-bundled')}`:''}</p><p class="muted">${escapeHtml(adapter.notes||'')}</p>` : '';
      return `<div class="verb-card"><div class="badges"><span class="badge ${badgeClass}">${escapeHtml(s.status)}</span>${adapter&&adapter.uiLinked?'<span class="badge">ui-linked</span>':''}</div><h3>${escapeHtml(s.name)}</h3><p><strong>Ρόλος:</strong> ${escapeHtml(s.role)}</p><p><strong>Έκταση:</strong> ${escapeHtml(s.scope)}</p><p><strong>Τρέχουσα ενσωμάτωση:</strong> ${escapeHtml(s.integration)}</p><p><strong>License / status:</strong> ${escapeHtml(s.license)}</p>${adapterLine}<p class="muted">${escapeHtml(s.notes)}</p></div>`;
    }).join('');
  }
  function entryMatchesExpected(entry, test){
    if(!sameLemma(entry.lemma, test.lemma)) return false;
    if((test.tense||'') && (entry.tense||'')!==test.tense) return false;
    if((test.voice||'') && normalizeVoice(entry.voice)!==normalizeVoice(test.voice)) return false;
    if((test.mood||'') && (entry.mood||'')!==test.mood) return false;
    if((test.person||'') && canonicalPerson(entry.person, entry.number)!==test.person) return false;
    if((test.gender||'') && (entry.gender||'') && (entry.gender||'')!==test.gender) return false;
    if((test.case||'') && (entry.case||'') && (entry.case||'')!==test.case) return false;
    if((test.number||'') && (entry.number||'') && (entry.number||'')!==test.number) return false;
    return true;
  }
  function runClassroomTests(){
    buildRuntimeIndexes();
    const tests=(classroomTestsData.tests||[]);
    const results=tests.map(test=>{
      const hits=(formIndex[normalizeGreek(test.form)]||[]).slice();
      const exactMatches=hits.filter(entry=>entryMatchesExpected(entry,test));
      const ambiguity=ambiguityNoteFor(test.form);
      const pass=exactMatches.length>0;
      const reviewLevel=pass ? 'resolved' : (hits.length ? 'needs-targeted-review' : 'missing-from-index');
      return {...test, hits, pass, exactMatches, ambiguity, reviewLevel};
    });
    renderClassroomTests(results);
  }
  function renderClassroomTests(results){
    const box=$('#classroom-results');
    const pillBox=$('#classroom-summary-pills');
    const passed=results.filter(r=>r.pass).length;
    const review=results.length-passed;
    const missing=results.filter(r=>r.reviewLevel==='missing-from-index').length;
    const targeted=results.filter(r=>r.reviewLevel==='needs-targeted-review').length;
    pillBox.innerHTML=`<span class="pill success">Επιτυχείς έλεγχοι: ${passed}</span><span class="pill ${review? 'soft':''}">${review?`Χρειάζονται επανέλεγχο: ${review}`:'Δεν υπάρχουν εκκρεμότητες στο τρέχον test set'}</span>${targeted?`<span class="pill soft">Στοχευμένος έλεγχος: ${targeted}</span>`:''}${missing?`<span class="pill soft">Λείπουν από το index: ${missing}</span>`:''}`;
    box.innerHTML=results.map(r=>{
      const statusClass=r.pass?'manual':'supplemental';
      const statusLabel=r.pass?'επιτυχής αντιστοίχιση':(r.reviewLevel==='missing-from-index'?'δεν βρέθηκε στο index':'χρειάζεται στοχευμένο έλεγχο');
      const expected=`${displayLemma(r.lemma)} • ${label(TENSE_LABELS,r.tense)}${r.voice?` • ${label(VOICE_LABELS,r.voice)}`:''}${r.mood?` • ${label(MOOD_LABELS,r.mood)}`:''}${r.person?` • ${personLabel(r.person)}`:''}${r.gender?` • ${label(GENDER_LABELS,r.gender)} • ${label(CASE_LABELS,r.case)} • ${label(NUMBER_LABELS,r.number)}`:''}`;
      const hitsHtml=r.hits.length?`<p><strong>Αναλύσεις που βρέθηκαν:</strong> ${r.hits.length}</p><ul class="compact-list">${r.hits.slice(0,4).map(h=>`<li>${escapeHtml(formatChoice(h))}</li>`).join('')}</ul>`:`<p><strong>Αναλύσεις που βρέθηκαν:</strong> 0</p>`;
      const ambiguityHtml=r.ambiguity?`<p class="notes-compact"><strong>Σημείωση αμφισημίας:</strong> ${escapeHtml(r.ambiguity.note||'')}</p>`:'';
      return `<div class="result-card"><div class="badges"><span class="badge ${statusClass}">${statusLabel}</span>${r.ambiguity?'<span class="badge canonical">πολλαπλή ανάλυση</span>':''}</div><h3>${escapeHtml(r.form)}</h3><p><strong>Στόχος ελέγχου:</strong> ${escapeHtml(r.label||'σχολικός τύπος')}</p><p><strong>Αναμενόμενη ανάλυση:</strong> ${escapeHtml(expected)}</p>${hitsHtml}${ambiguityHtml}</div>`;
    }).join('');
  }
  function buildWorksheet(){
    buildRuntimeIndexes();
    const count=Math.max(4,Math.min(40,Number($('#worksheet-count').value)||12));
    const mode=$('#worksheet-mode').value;
    const level=$('#worksheet-level').value;
    const pool=shuffle(poolForLevel(level)).slice(0,count);
    const box=$('#worksheet-output');
    if(mode==='recognition'){
      box.innerHTML=`<h3>Φύλλο εργασίας: Αναγνώριση τύπων</h3>` + pool.map((p,i)=>`<div class="worksheet-item"><strong>${i+1}.</strong> ${escapeHtml(p.form)}<br><small class="muted">Να αναγνωριστεί το λήμμα, ο χρόνος, η φωνή και η έγκλιση${p.kind==='finite'?', καθώς και το πρόσωπο':''}${p.kind==='participle'?', καθώς και γένος, πτώση, αριθμός':''}.</small></div>`).join('');
    } else {
      box.innerHTML=`<h3>Φύλλο εργασίας: Σχηματισμός τύπων</h3>` + pool.map((p,i)=>`<div class="worksheet-item"><strong>${i+1}.</strong> Να σχηματίσετε τον τύπο του ρήματος <strong>${escapeHtml(displayLemma(p.lemma))}</strong>: ${label(TENSE_LABELS,p.tense)} • ${label(VOICE_LABELS,p.voice)} • ${label(MOOD_LABELS,p.mood)}${p.person?` • ${personLabel(p)}`:''}${p.gender?` • ${label(GENDER_LABELS,p.gender)} • ${label(CASE_LABELS,p.case)} • ${label(NUMBER_LABELS,p.number)}`:''}</div>`).join('');
    }
  }
  function wireEvents(){
    $('#analyze-btn').addEventListener('click', analyze);
    $('#analyze-input').addEventListener('keydown', e=>{ if(e.key==='Enter') analyze(); });
    $('#verb-select').addEventListener('change', renderConjugation);
    $('#view-select').addEventListener('change', renderConjugation);
    $('#new-quiz').addEventListener('click', newQuiz);
    $('#quiz-level').addEventListener('change', newQuiz);
    $('#quiz-finite').addEventListener('change', newQuiz);
    $('#quiz-nonfinite').addEventListener('change', newQuiz);
    $('#library-search').addEventListener('input', renderLibrary);
    $('#coverage-filter').addEventListener('change', renderLibrary);
    $('#source-filter').addEventListener('change', renderLibrary);
    $('#philology-filter').addEventListener('change', renderLibrary);
    $('#build-worksheet').addEventListener('click', buildWorksheet);
    const classroomBtn=$('#run-classroom-tests'); if(classroomBtn) classroomBtn.addEventListener('click', runClassroomTests);
    $('#print-worksheet').addEventListener('click', ()=>window.print());
  }
  const activeCountPill=document.getElementById('active-count-pill'); if(activeCountPill) activeCountPill.textContent='Σχολικός πυρήνας και επιμελημένα paradigms';
  buildHeroStats();
  activateTabs();
  populateVerbSelect();
  renderConjugation();
  wireEvents();
})();
