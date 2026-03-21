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
    'αιτω':['αἰτέω','αἰτῶ'],
    'αιτιωμαι':['αἰτιάομαι','αἰτιῶμαι'],
    'αρκω':['ἀρκέω','ἀρκῶ'],
    'αφικνουμαι':['ἀφικνέομαι','ἀφικνοῦμαι'],
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
  const lexiconAugment=(window.LEXICON_AUGMENT||{});
  const baseVerbs=(window.VERB_DATA||[]);
  const verbMetaAugment=lexiconAugment.verbMeta||{};
  const extraVerbs=lexiconAugment.extraVerbs||[];
  const verbs=[...baseVerbs.map(v=>Object.assign({}, v, verbMetaAugment[v.lemma]||{})), ...extraVerbs];
  let lemmaForms=window.LEMMA_FORMS||{};
  const bibliographyEntries=[
    {
      citation:'Ασωνίτης, Ν.Σ. and Αναγνωστόπουλος, Β.Δ. (n.d.) <em>Λεξικόν των βασικών ρημάτων ανωμάλων και ομαλών της Αρχαίας Ελληνικής γλώσσας και κυρίως της αττικής διαλέκτου</em>. Αθήνα: Εκδόσεις Χρυσάφη Πανέση.',
      note:'Βασικό λεξικογραφικό βοήθημα για αρχικούς χρόνους, παράγωγα και συμπληρωματικές μορφολογικές παρατηρήσεις.'
    },
    {
      citation:'Γεωργοπαπαδάκος, Α. (1964) <em>Λεξικόν ανωμάλων ρημάτων της Αρχαίας Ελληνικής γλώσσης: μετά παραρτήματος περιέχοντος τα ανώμαλα ονόματα</em>. 8η έκδ. Θεσσαλονίκη: Βιβλιοπωλείον Μόλχο.',
      note:'Χρησιμοποιείται για επιβεβαίωση ανωμάλων ρημάτων και ιστορικών τύπων.'
    },
    {
      citation:'Οικονόμου, Μ.Χ. (2014) <em>Γραμματική της Αρχαίας Ελληνικής</em>. Αθήνα: Ινστιτούτο Τεχνολογίας Υπολογιστών και Εκδόσεων «Διόφαντος».',
      note:'Κύρια σχολική γραμματική αναφορά για κατηγορίες ρημάτων, συνηρημένα και βασικούς κλιτικούς σχηματισμούς.'
    },
    {
      citation:'Παπανικολάου, Γ. (2010) <em>Γραμματική της Αρχαίας Ελληνικής Γλώσσας: θεωρία και ασκήσεις</em>. Αθήνα: Εκδόσεις Πατάκη.',
      note:'Χρησιμοποιείται ως συμπληρωματικό σχολικό γραμματικό πλαίσιο για ρήματα, μετοχές και συνηρημένους τύπους.'
    },
    {
      citation:'Τζαρτζάνος, Α.Α. (1967) <em>Γραμματική της Αρχαίας Ελληνικής Γλώσσης</em>. Αθήναι: Οργανισμός Εκδόσεως Διδακτικών Βιβλίων.',
      note:'Χρήσιμη για συγκριτικό έλεγχο τυπολογικών κατηγοριών και παραδοσιακής σχολικής ορολογίας.'
    }
  ];
  const philologyData=(window.PHILOLOGY_DATA||{});
  const hardeningData=(window.PHILOLOGY_HARDENING||{});
  const manualCurationData=(window.MANUAL_CURATION||{});
  const spotChecksData=(window.SPOT_CHECKS||{});
  const slotValidationData=(window.SLOT_VALIDATIONS||{});
  const manualParadigms={...((lexiconAugment&&lexiconAugment.manualParadigms)||{}), ...(window.MANUAL_PARADIGMS||{})};
  const generatedParadigms=(window.GENERATED_PARADIGMS||{});
  const strictAudit=((window.STRICT_AUDIT||{}).lemmas)||{};
  const multipleAnalysesData=(window.MULTIPLE_ANALYSES||{});
  const classroomTestsData=(window.CLASSROOM_TESTS||{tests:[]});
  const canonicalLemmaSet=new Set((philologyData.canonicalLemmas||[]).map(normalizeGreek));
  const hardeningLemmaMap=Object.fromEntries(Object.entries(hardeningData.targetedLemmas||{}).map(([k,v])=>[normalizeGreek(k),v]));
  const manualCurationMap=Object.fromEntries(Object.entries(manualCurationData.curatedLemmas||{}).map(([k,v])=>[normalizeGreek(k),v]));
  const spotCheckMap=Object.fromEntries(Object.entries(spotChecksData||{}).map(([k,v])=>[normalizeGreek(k),v]));
  const slotValidationMap=Object.fromEntries(Object.entries(slotValidationData||{}).map(([k,v])=>[normalizeGreek(k),v]));
  const manualParadigmNormMap=Object.fromEntries(Object.keys(manualParadigms).map(k=>[normalizeGreek(k),k]));
  const generatedParadigmNormMap=Object.fromEntries(Object.keys(generatedParadigms).map(k=>[normalizeGreek(k),k]));
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
    if(hasGeneratedParadigm(v?.lemma)) return {key:'generated', label:'grammar-based synthesis', className:'supplemental'};
    if(hasForms) return {key:'imported', label:(philologyData.reliabilityLabels||{}).imported||'εισαγόμενο layer', className:'supplemental'};
    return {key:'catalog', label:(philologyData.reliabilityLabels||{}).catalog||'βιβλιογραφική εγγραφή', className:'catalog'};
  }
  function hasManualParadigm(lemma){ return Boolean(manualParadigmNormMap[normalizeGreek(lemma||'')]); }
  function hasGeneratedParadigm(lemma){ return Boolean(generatedParadigmNormMap[normalizeGreek(lemma||'')]); }
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
    if(/άομαι$|αομαι$/.test(s)) return s.replace(/άομαι$|αομαι$/,'ῶμαι');
    if(/έομαι$|εομαι$/.test(s)) return s.replace(/έομαι$|εομαι$/,'οῦμαι');
    if(/όομαι$|οομαι$/.test(s)) return s.replace(/όομαι$|οομαι$/,'οῦμαι');
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
  let conjugableLemmas=[];
  let conjugableByNorm={};
  let conjugableNormSet=new Set();
  let formIndex=window.FORM_INDEX||{};
  let quizPools={};
  const scriptLoadPromises={};
  const loadedFormIndexShards=new Set();
  const loadedLemmaFormShards=new Set();
  const loadedQuizLevels=new Set();
  let lemmaFormsManifestLoaded=Array.isArray(window.LEMMA_FORM_LEMMAS);
  function shardIdFor(value){
    const norm=normalizeGreek(value||'');
    const ch=norm.charAt(0);
    return ch && ch >= 'α' && ch <= 'ω' ? ch : 'other';
  }
  function rebuildConjugationLookup(){
    const manifestLemmas=Array.isArray(window.LEMMA_FORM_LEMMAS) ? window.LEMMA_FORM_LEMMAS : [];
    conjugableLemmas=uniqBy([...verbs.map(v=>v.lemma), ...manifestLemmas, ...Object.keys(lemmaForms), ...Object.keys(manualParadigms||{}), ...Object.keys(generatedParadigms||{})], x=>normalizeGreek(x)).sort((a,b)=>a.localeCompare(b,'el'));
    conjugableByNorm=Object.fromEntries(conjugableLemmas.map(l=>[normalizeGreek(l),l]));
    conjugableNormSet=new Set(conjugableLemmas.map(normalizeGreek));
  }
  rebuildConjugationLookup();
  function loadScript(src){
    if(scriptLoadPromises[src]) return scriptLoadPromises[src];
    scriptLoadPromises[src]=new Promise((resolve,reject)=>{
      const script=document.createElement('script');
      script.src=src;
      script.defer=true;
      script.onload=()=>resolve();
      script.onerror=()=>reject(new Error(`Failed to load ${src}`));
      document.body.appendChild(script);
    });
    return scriptLoadPromises[src];
  }
  async function ensureLemmaManifestLoaded(){
    if(lemmaFormsManifestLoaded) return;
    await loadScript('data/lemmaForms.manifest.js');
    lemmaFormsManifestLoaded=true;
    rebuildConjugationLookup();
  }
  async function ensureLemmaShardLoaded(lemma){
    const shard=shardIdFor(lemma);
    if(loadedLemmaFormShards.has(shard)) return;
    await loadScript(`data/lemmaForms-shards/${shard}.js`);
    lemmaForms=window.LEMMA_FORMS||{};
    loadedLemmaFormShards.add(shard);
  }
  async function ensureLemmaFormsLoaded(){
    await ensureLemmaManifestLoaded();
    const pending=(window.LEMMA_FORM_LEMMAS||[]).map(lemma=>ensureLemmaShardLoaded(lemma));
    await Promise.all(pending);
    rebuildConjugationLookup();
  }
  async function ensureFormIndexShardLoaded(query){
    const shard=shardIdFor(query);
    if(loadedFormIndexShards.has(shard)) return;
    await loadScript(`data/formIndex-shards/${shard}.js`);
    formIndex=window.FORM_INDEX||{};
    loadedFormIndexShards.add(shard);
  }
  async function ensureFormIndexLoaded(){
    const greekShards='αβγδεζηθικλμνξοπρστυφχψω'.split('');
    await Promise.all([...greekShards,'other'].map(sh=>ensureFormIndexShardLoaded(sh)));
  }
  function indexEntriesFor(query, rawForm=''){
    const norm=normalizeGreek(query||'');
    return (formIndex&&formIndex[norm] ? formIndex[norm] : []).map(entry=>({ ...entry, form: rawForm || entry.form || query }));
  }
  function unpackQuizEntry(row){
    const [form,lemma,kind,tense,voice,mood,person,gender,caseValue,number]=row;
    const entry={form,lemma,kind,tense,voice,mood};
    if(person) entry.person=person;
    if(gender) entry.gender=gender;
    if(caseValue) entry.case=caseValue;
    if(number) entry.number=number;
    return entry;
  }
  async function ensureQuizPoolBuilt(level='mixed'){
    if(loadedQuizLevels.has(level) && quizPools[level]) return;
    const varName=`QUIZ_POOL_${String(level||'mixed').toUpperCase()}`;
    await loadScript(`data/quiz/${level}.js`);
    quizPools[level]=(window[varName]||[]).map(unpackQuizEntry);
    loadedQuizLevels.add(level);
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
    const loadedTabs = new Set(['analyze']);
    document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click', async ()=>{
      document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(x=>x.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector(`#tab-${btn.dataset.tab}`).classList.add('active');
      if(btn.dataset.tab==='conjugate' && !loadedTabs.has('conjugate')){
        await ensureLemmaManifestLoaded();
        populateVerbSelect();
        await renderConjugation();
        loadedTabs.add('conjugate');
        return;
      }
      if(btn.dataset.tab==='quiz'){
        await newQuiz();
        loadedTabs.add('quiz');
        return;
      }
      if(btn.dataset.tab==='bibliography' && !loadedTabs.has('bibliography')){
        renderBibliography();
        loadedTabs.add('bibliography');
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
      box.innerHTML=`<div class="result-card"><h3>Δεν βρέθηκε ασφαλής αντιστοίχιση</h3><p class="muted">Ο τύπος δεν εντοπίστηκε στα εισαγμένα δεδομένα κλίσης. Δοκίμασε πολυτονική ή μονοτονική γραφή ή έλεγξε το λήμμα στην καρτέλα «Κλίση».</p></div>`;
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
      if(r.number) meta.push(`<div><strong>Αριθμός</strong><span>${label(NUMBER_LABELS,r.number)}</span></div>`);
      if(r.case) meta.push(`<div><strong>Πτώση</strong><span>${label(CASE_LABELS,r.case)}</span></div>`);
      return `<div class="result-card"><div class="badges"><span class="badge full">${escapeHtml(displayLemma(r.lemma))}</span><span class="badge supplemental">πλήρης κλιτική εγγραφή</span></div><h3>${escapeHtml(displayForm(r))}</h3>${r.kind==='participle' ? `<p class="muted">${label(GENDER_LABELS,r.gender)} • ${label(NUMBER_LABELS,r.number)} • ${label(CASE_LABELS,r.case)}</p>` : ''}<div class="definition-list">${meta.join('')}</div></div>`;
    }).join('');
  }
  async function analyze(){
    const raw=$('#analyze-input').value.trim();
    const box=$('#analyze-results');
    if(!raw){
      box.innerHTML='<div class="result-card"><p>Πληκτρολόγησε έναν ρηματικό τύπο για ανάλυση.</p></div>';
      return;
    }
    box.innerHTML='<div class="result-card"><p>Φορτώνεται ο δείκτης αναγνώρισης…</p></div>';
    await ensureFormIndexShardLoaded(raw);
    renderAnalysisResults(indexEntriesFor(raw, raw).slice(0,20));
  }
  function populateVerbSelect(){
    const sel=$('#verb-select');
    const previous=sel.value;
    sel.innerHTML=conjugableLemmas.map(l=>`<option value="${escapeHtml(l)}">${escapeHtml(displayLemma(l))}</option>`).join('');
    if(previous && conjugableNormSet.has(normalizeGreek(previous))) sel.value=previous;
  }
  async function formsForLemma(lemma){
    const norm=normalizeGreek(lemma);
    if(manualParadigmNormMap[norm]) return (manualParadigms[manualParadigmNormMap[norm]]||[]).slice();
    if(generatedParadigmNormMap[norm]) return (generatedParadigms[generatedParadigmNormMap[norm]]||[]).slice();
    await ensureLemmaManifestLoaded();
    const resolved=conjugableByNorm[norm] || lemma;
    await ensureLemmaShardLoaded(resolved);
    return (lemmaForms[resolved]||[]).slice();
  }

  const STRICT_SCHOOL_PARTICIPLE_LEMMAS = new Set([
    'λαμβάνω','γίγνομαι','δίδωμι','τίθημι','ἵστημι','φημί','εἰμί','οἶδα','λέγω','φέρω','ὁράω','ἔχω'
  ].map(normalizeGreek));


  function curatedParticipleEntry(lemma, tense, voice, gender, kase, number, form){
    return {
      lemma,
      form,
      kind:'participle',
      tense,
      voice,
      mood:'participle',
      gender,
      case:kase,
      number,
      curated:true,
      variant:'school-exact'
    };
  }

  function addExactParticipleSeries(rows, lemma, tense, voice, type, forms){
    const add=(gender, items)=>{
      for(const [kase, number, form] of items){
        rows.push(curatedParticipleEntry(lemma, tense, voice, gender, kase, number, form));
      }
    };
    if(type==='manual'){
      Object.entries(forms).forEach(([gender, items])=>add(gender, items));
      return;
    }
    const mascNom=forms.masc;
    const femNom=forms.fem;
    const neutNom=forms.neut;
    if(type==='menos'){
      const stem=mascNom.replace(/ος$/,'');
      add('masc',[
        ['nom','sg',mascNom],['gen','sg',stem+'ου'],['dat','sg',stem+'ῳ'],['acc','sg',stem+'ον'],['voc','sg',stem+'ε'],
        ['nom','pl',stem+'οι'],['gen','pl',stem+'ων'],['dat','pl',stem+'οις'],['acc','pl',stem+'ους'],['voc','pl',stem+'οι']
      ]);
      const femStem=femNom.replace(/η$/,'');
      add('fem',[
        ['nom','sg',femNom],['gen','sg',femStem+'ης'],['dat','sg',femStem+'ῃ'],['acc','sg',femStem+'ην'],['voc','sg',femNom],
        ['nom','pl',femStem+'αι'],['gen','pl',stem+'ων'],['dat','pl',femStem+'αις'],['acc','pl',femStem+'ας'],['voc','pl',femStem+'αι']
      ]);
      const neutStem=neutNom.replace(/ον$/,'');
      add('neut',[
        ['nom','sg',neutNom],['gen','sg',stem+'ου'],['dat','sg',stem+'ῳ'],['acc','sg',neutNom],['voc','sg',neutNom],
        ['nom','pl',neutStem+'α'],['gen','pl',stem+'ων'],['dat','pl',stem+'οις'],['acc','pl',neutStem+'α'],['voc','pl',neutStem+'α']
      ]);
      return;
    }
    if(type==='wn'){
      const stem=mascNom.replace(/ών$/,'').replace(/ων$/,'');
      add('masc',[
        ['nom','sg',mascNom],['gen','sg',stem+'οντος'],['dat','sg',stem+'οντι'],['acc','sg',stem+'οντα'],['voc','sg',mascNom],
        ['nom','pl',stem+'οντες'],['gen','pl',stem+'όντων'],['dat','pl',stem+'οῦσι(ν)'],['acc','pl',stem+'οντας'],['voc','pl',stem+'οντες']
      ]);
      add('fem',[
        ['nom','sg',femNom],['gen','sg',stem+'ούσης'],['dat','sg',stem+'ούσῃ'],['acc','sg',stem+'οῦσαν'],['voc','sg',femNom],
        ['nom','pl',stem+'οῦσαι'],['gen','pl',stem+'ουσῶν'],['dat','pl',stem+'ούσαις'],['acc','pl',stem+'ούσας'],['voc','pl',stem+'οῦσαι']
      ]);
      add('neut',[
        ['nom','sg',neutNom],['gen','sg',stem+'οντος'],['dat','sg',stem+'οντι'],['acc','sg',neutNom],['voc','sg',neutNom],
        ['nom','pl',stem+'οντα'],['gen','pl',stem+'όντων'],['dat','pl',stem+'οῦσι(ν)'],['acc','pl',stem+'οντα'],['voc','pl',stem+'οντα']
      ]);
      return;
    }
    if(type==='ous'){
      const stem=mascNom.replace(/ούς$/,'').replace(/ους$/,'');
      add('masc',[
        ['nom','sg',mascNom],['gen','sg',stem+'όντος'],['dat','sg',stem+'όντι'],['acc','sg',stem+'όντα'],['voc','sg',mascNom],
        ['nom','pl',stem+'όντες'],['gen','pl',stem+'όντων'],['dat','pl',stem+'οῦσι(ν)'],['acc','pl',stem+'όντας'],['voc','pl',stem+'όντες']
      ]);
      add('fem',[
        ['nom','sg',femNom],['gen','sg',stem+'ούσης'],['dat','sg',stem+'ούσῃ'],['acc','sg',stem+'οῦσαν'],['voc','sg',femNom],
        ['nom','pl',stem+'οῦσαι'],['gen','pl',stem+'ουσῶν'],['dat','pl',stem+'ούσαις'],['acc','pl',stem+'ούσας'],['voc','pl',stem+'οῦσαι']
      ]);
      add('neut',[
        ['nom','sg',neutNom],['gen','sg',stem+'όντος'],['dat','sg',stem+'όντι'],['acc','sg',neutNom],['voc','sg',neutNom],
        ['nom','pl',stem+'όντα'],['gen','pl',stem+'όντων'],['dat','pl',stem+'οῦσι(ν)'],['acc','pl',stem+'όντα'],['voc','pl',stem+'όντα']
      ]);
      return;
    }
    if(type==='eis'){
      const stem=mascNom.replace(/είς$/,'').replace(/εις$/,'');
      add('masc',[
        ['nom','sg',mascNom],['gen','sg',stem+'έντος'],['dat','sg',stem+'έντι'],['acc','sg',stem+'έντα'],['voc','sg',mascNom],
        ['nom','pl',stem+'έντες'],['gen','pl',stem+'έντων'],['dat','pl',stem+'εῖσι(ν)'],['acc','pl',stem+'έντας'],['voc','pl',stem+'έντες']
      ]);
      add('fem',[
        ['nom','sg',femNom],['gen','sg',stem+'είσης'],['dat','sg',stem+'είσῃ'],['acc','sg',stem+'εῖσαν'],['voc','sg',femNom],
        ['nom','pl',stem+'εῖσαι'],['gen','pl',stem+'εισῶν'],['dat','pl',stem+'είσαις'],['acc','pl',stem+'είσας'],['voc','pl',stem+'εῖσαι']
      ]);
      add('neut',[
        ['nom','sg',neutNom],['gen','sg',stem+'έντος'],['dat','sg',stem+'έντι'],['acc','sg',neutNom],['voc','sg',neutNom],
        ['nom','pl',stem+'έντα'],['gen','pl',stem+'έντων'],['dat','pl',stem+'εῖσι(ν)'],['acc','pl',stem+'έντα'],['voc','pl',stem+'έντα']
      ]);
      return;
    }
    if(type==='as'){
      const stem=mascNom.replace(/άς$/,'').replace(/ας$/,'');
      add('masc',[
        ['nom','sg',mascNom],['gen','sg',stem+'άντος'],['dat','sg',stem+'ᾶντι'],['acc','sg',stem+'άντα'],['voc','sg',mascNom],
        ['nom','pl',stem+'άντες'],['gen','pl',stem+'άντων'],['dat','pl',stem+'ᾶσι(ν)'],['acc','pl',stem+'άντας'],['voc','pl',stem+'άντες']
      ]);
      add('fem',[
        ['nom','sg',femNom],['gen','sg',stem+'άσης'],['dat','sg',stem+'άσῃ'],['acc','sg',stem+'ᾶσαν'],['voc','sg',femNom],
        ['nom','pl',stem+'ᾶσαι'],['gen','pl',stem+'ασῶν'],['dat','pl',stem+'άσαις'],['acc','pl',stem+'άσας'],['voc','pl',stem+'ᾶσαι']
      ]);
      add('neut',[
        ['nom','sg',neutNom],['gen','sg',stem+'άντος'],['dat','sg',stem+'ᾶντι'],['acc','sg',neutNom],['voc','sg',neutNom],
        ['nom','pl',stem+'άντα'],['gen','pl',stem+'άντων'],['dat','pl',stem+'ᾶσι(ν)'],['acc','pl',stem+'άντα'],['voc','pl',stem+'άντα']
      ]);
    }
  }

  const EXACT_SCHOOL_PARTICIPLES = (()=>{
    const rows=[];
    addExactParticipleSeries(rows,'εἰμί','present','active','manual',{
      masc:[['nom','sg','ὤν'],['gen','sg','ὄντος'],['dat','sg','ὄντι'],['acc','sg','ὄντα'],['voc','sg','ὤν'],['nom','pl','ὄντες'],['gen','pl','ὄντων'],['dat','pl','οὖσι(ν)'],['acc','pl','ὄντας'],['voc','pl','ὄντες']],
      fem:[['nom','sg','οὖσα'],['gen','sg','οὔσης'],['dat','sg','οὔσῃ'],['acc','sg','οὖσαν'],['voc','sg','οὖσα'],['nom','pl','οὖσαι'],['gen','pl','οὐσῶν'],['dat','pl','οὔσαις'],['acc','pl','οὔσας'],['voc','pl','οὖσαι']],
      neut:[['nom','sg','ὄν'],['gen','sg','ὄντος'],['dat','sg','ὄντι'],['acc','sg','ὄν'],['voc','sg','ὄν'],['nom','pl','ὄντα'],['gen','pl','ὄντων'],['dat','pl','οὖσι(ν)'],['acc','pl','ὄντα'],['voc','pl','ὄντα']]
    });
    addExactParticipleSeries(rows,'εἰμί','future','middle','manual',{
      masc:[['nom','sg','ἐσόμενος'],['gen','sg','ἐσομένου'],['dat','sg','ἐσομένῳ'],['acc','sg','ἐσόμενον'],['voc','sg','ἐσόμενε'],['nom','pl','ἐσόμενοι'],['gen','pl','ἐσομένων'],['dat','pl','ἐσομένοις'],['acc','pl','ἐσομένους'],['voc','pl','ἐσόμενοι']],
      fem:[['nom','sg','ἐσομένη'],['gen','sg','ἐσομένης'],['dat','sg','ἐσομένῃ'],['acc','sg','ἐσομένην'],['voc','sg','ἐσομένη'],['nom','pl','ἐσόμεναι'],['gen','pl','ἐσομένων'],['dat','pl','ἐσομέναις'],['acc','pl','ἐσομένας'],['voc','pl','ἐσόμεναι']],
      neut:[['nom','sg','ἐσόμενον'],['gen','sg','ἐσομένου'],['dat','sg','ἐσομένῳ'],['acc','sg','ἐσόμενον'],['voc','sg','ἐσόμενον'],['nom','pl','ἐσόμενα'],['gen','pl','ἐσομένων'],['dat','pl','ἐσομένοις'],['acc','pl','ἐσόμενα'],['voc','pl','ἐσόμενα']]
    });
    addExactParticipleSeries(rows,'οἶδα','perfect','active','manual',{
      masc:[['nom','sg','εἰδώς'],['gen','sg','εἰδότος'],['dat','sg','εἰδότι'],['acc','sg','εἰδότα'],['voc','sg','εἰδώς'],['nom','pl','εἰδότες'],['gen','pl','εἰδότων'],['dat','pl','εἰδόσι(ν)'],['acc','pl','εἰδότας'],['voc','pl','εἰδότες']],
      fem:[['nom','sg','εἰδυῖα'],['gen','sg','εἰδυίας'],['dat','sg','εἰδυίᾳ'],['acc','sg','εἰδυῖαν'],['voc','sg','εἰδυῖα'],['nom','pl','εἰδυῖαι'],['gen','pl','εἰδυιῶν'],['dat','pl','εἰδυίαις'],['acc','pl','εἰδυίας'],['voc','pl','εἰδυῖαι']],
      neut:[['nom','sg','εἰδός'],['gen','sg','εἰδότος'],['dat','sg','εἰδότι'],['acc','sg','εἰδός'],['voc','sg','εἰδός'],['nom','pl','εἰδότα'],['gen','pl','εἰδότων'],['dat','pl','εἰδόσι(ν)'],['acc','pl','εἰδότα'],['voc','pl','εἰδότα']]
    });
    addExactParticipleSeries(rows,'φημί','present','active','as',{masc:'φάς',fem:'φᾶσα',neut:'φάν'});
    addExactParticipleSeries(rows,'φημί','future','active','wn',{masc:'φήσων',fem:'φήσουσα',neut:'φῆσον'});
    addExactParticipleSeries(rows,'φημί','aorist','active','as',{masc:'φήσας',fem:'φήσασα',neut:'φῆσαν'});
    addExactParticipleSeries(rows,'δίδωμι','present','active','ous',{masc:'διδούς',fem:'διδοῦσα',neut:'διδόν'});
    addExactParticipleSeries(rows,'δίδωμι','present','middle/passive','menos',{masc:'διδόμενος',fem:'διδομένη',neut:'διδόμενον'});
    addExactParticipleSeries(rows,'δίδωμι','aorist','active','ous',{masc:'δούς',fem:'δοῦσα',neut:'δόν'});
    addExactParticipleSeries(rows,'τίθημι','present','active','eis',{masc:'τιθείς',fem:'τιθεῖσα',neut:'τιθέν'});
    addExactParticipleSeries(rows,'τίθημι','present','middle/passive','menos',{masc:'τιθέμενος',fem:'τιθεμένη',neut:'τιθέμενον'});
    addExactParticipleSeries(rows,'τίθημι','aorist','active','eis',{masc:'θείς',fem:'θεῖσα',neut:'θέν'});
    addExactParticipleSeries(rows,'τίθημι','aorist','passive','eis',{masc:'τεθείς',fem:'τεθεῖσα',neut:'τεθέν'});
    addExactParticipleSeries(rows,'ἵστημι','present','active','as',{masc:'ἱστάς',fem:'ἱστᾶσα',neut:'ἱστάν'});
    addExactParticipleSeries(rows,'ἵστημι','present','middle/passive','menos',{masc:'ἱστάμενος',fem:'ἱσταμένη',neut:'ἱστάμενον'});
    addExactParticipleSeries(rows,'ἵστημι','aorist','active','as',{masc:'στήσας',fem:'στήσασα',neut:'στῆσαν'});
    addExactParticipleSeries(rows,'λέγω','present','active','manual',{
      masc:[['nom','sg','λέγων'],['gen','sg','λέγοντος'],['dat','sg','λέγοντι'],['acc','sg','λέγοντα'],['voc','sg','λέγων'],['nom','pl','λέγοντες'],['gen','pl','λεγόντων'],['dat','pl','λέγουσι(ν)'],['acc','pl','λέγοντας'],['voc','pl','λέγοντες']],
      fem:[['nom','sg','λέγουσα'],['gen','sg','λεγούσης'],['dat','sg','λεγούσῃ'],['acc','sg','λέγουσαν'],['voc','sg','λέγουσα'],['nom','pl','λέγουσαι'],['gen','pl','λεγουσῶν'],['dat','pl','λεγούσαις'],['acc','pl','λεγούσας'],['voc','pl','λέγουσαι']],
      neut:[['nom','sg','λέγον'],['gen','sg','λέγοντος'],['dat','sg','λέγοντι'],['acc','sg','λέγον'],['voc','sg','λέγον'],['nom','pl','λέγοντα'],['gen','pl','λεγόντων'],['dat','pl','λέγουσι(ν)'],['acc','pl','λέγοντα'],['voc','pl','λέγοντα']]
    });
    addExactParticipleSeries(rows,'λέγω','future','active','manual',{
      masc:[['nom','sg','ἐρῶν'],['gen','sg','ἐροῦντος'],['dat','sg','ἐροῦντι'],['acc','sg','ἐροῦντα'],['voc','sg','ἐρῶν'],['nom','pl','ἐροῦντες'],['gen','pl','ἐρούντων'],['dat','pl','ἐροῦσι(ν)'],['acc','pl','ἐροῦντας'],['voc','pl','ἐροῦντες']],
      fem:[['nom','sg','ἐροῦσα'],['gen','sg','ἐρούσης'],['dat','sg','ἐρούσῃ'],['acc','sg','ἐροῦσαν'],['voc','sg','ἐροῦσα'],['nom','pl','ἐροῦσαι'],['gen','pl','ἐρουσῶν'],['dat','pl','ἐρούσαις'],['acc','pl','ἐρούσας'],['voc','pl','ἐροῦσαι']],
      neut:[['nom','sg','ἐροῦν'],['gen','sg','ἐροῦντος'],['dat','sg','ἐροῦντι'],['acc','sg','ἐροῦν'],['voc','sg','ἐροῦν'],['nom','pl','ἐροῦντα'],['gen','pl','ἐρούντων'],['dat','pl','ἐροῦσι(ν)'],['acc','pl','ἐροῦντα'],['voc','pl','ἐροῦντα']]
    });
    addExactParticipleSeries(rows,'λέγω','aorist','active','manual',{
      masc:[['nom','sg','εἰπών'],['gen','sg','εἰπόντος'],['dat','sg','εἰπόντι'],['acc','sg','εἰπόντα'],['voc','sg','εἰπών'],['nom','pl','εἰπόντες'],['gen','pl','εἰπόντων'],['dat','pl','εἰποῦσι(ν)'],['acc','pl','εἰπόντας'],['voc','pl','εἰπόντες']],
      fem:[['nom','sg','εἰποῦσα'],['gen','sg','εἰπούσης'],['dat','sg','εἰπούσῃ'],['acc','sg','εἰποῦσαν'],['voc','sg','εἰποῦσα'],['nom','pl','εἰποῦσαι'],['gen','pl','εἰπουσῶν'],['dat','pl','εἰπούσαις'],['acc','pl','εἰπούσας'],['voc','pl','εἰποῦσαι']],
      neut:[['nom','sg','εἰπόν'],['gen','sg','εἰπόντος'],['dat','sg','εἰπόντι'],['acc','sg','εἰπόν'],['voc','sg','εἰπόν'],['nom','pl','εἰπόντα'],['gen','pl','εἰπόντων'],['dat','pl','εἰποῦσι(ν)'],['acc','pl','εἰπόντα'],['voc','pl','εἰπόντα']]
    });
    addExactParticipleSeries(rows,'ἔχω','present','active','manual',{
      masc:[['nom','sg','ἔχων'],['gen','sg','ἔχοντος'],['dat','sg','ἔχοντι'],['acc','sg','ἔχοντα'],['voc','sg','ἔχων'],['nom','pl','ἔχοντες'],['gen','pl','ἐχόντων'],['dat','pl','ἔχουσι(ν)'],['acc','pl','ἔχοντας'],['voc','pl','ἔχοντες']],
      fem:[['nom','sg','ἔχουσα'],['gen','sg','ἐχούσης'],['dat','sg','ἐχούσῃ'],['acc','sg','ἔχουσαν'],['voc','sg','ἔχουσα'],['nom','pl','ἔχουσαι'],['gen','pl','ἐχουσῶν'],['dat','pl','ἐχούσαις'],['acc','pl','ἐχούσας'],['voc','pl','ἔχουσαι']],
      neut:[['nom','sg','ἔχον'],['gen','sg','ἔχοντος'],['dat','sg','ἔχοντι'],['acc','sg','ἔχον'],['voc','sg','ἔχον'],['nom','pl','ἔχοντα'],['gen','pl','ἐχόντων'],['dat','pl','ἔχουσι(ν)'],['acc','pl','ἔχοντα'],['voc','pl','ἔχοντα']]
    });
    addExactParticipleSeries(rows,'ἔχω','future','active','manual',{
      masc:[['nom','sg','ἕξων'],['gen','sg','ἕξοντος'],['dat','sg','ἕξοντι'],['acc','sg','ἕξοντα'],['voc','sg','ἕξων'],['nom','pl','ἕξοντες'],['gen','pl','ἑξόντων'],['dat','pl','ἕξουσι(ν)'],['acc','pl','ἕξοντας'],['voc','pl','ἕξοντες']],
      fem:[['nom','sg','ἕξουσα'],['gen','sg','ἑξούσης'],['dat','sg','ἑξούσῃ'],['acc','sg','ἕξουσαν'],['voc','sg','ἕξουσα'],['nom','pl','ἕξουσαι'],['gen','pl','ἑξουσῶν'],['dat','pl','ἑξούσαις'],['acc','pl','ἑξούσας'],['voc','pl','ἕξουσαι']],
      neut:[['nom','sg','ἕξον'],['gen','sg','ἕξοντος'],['dat','sg','ἕξοντι'],['acc','sg','ἕξον'],['voc','sg','ἕξον'],['nom','pl','ἕξοντα'],['gen','pl','ἑξόντων'],['dat','pl','ἕξουσι(ν)'],['acc','pl','ἕξοντα'],['voc','pl','ἕξοντα']]
    });
    addExactParticipleSeries(rows,'ἔχω','aorist','active','manual',{
      masc:[['nom','sg','σχών'],['gen','sg','σχόντος'],['dat','sg','σχόντι'],['acc','sg','σχόντα'],['voc','sg','σχών'],['nom','pl','σχόντες'],['gen','pl','σχόντων'],['dat','pl','σχοῦσι(ν)'],['acc','pl','σχόντας'],['voc','pl','σχόντες']],
      fem:[['nom','sg','σχοῦσα'],['gen','sg','σχούσης'],['dat','sg','σχούσῃ'],['acc','sg','σχοῦσαν'],['voc','sg','σχοῦσα'],['nom','pl','σχοῦσαι'],['gen','pl','σχουσῶν'],['dat','pl','σχούσαις'],['acc','pl','σχούσας'],['voc','pl','σχοῦσαι']],
      neut:[['nom','sg','σχόν'],['gen','sg','σχόντος'],['dat','sg','σχόντι'],['acc','sg','σχόν'],['voc','sg','σχόν'],['nom','pl','σχόντα'],['gen','pl','σχόντων'],['dat','pl','σχοῦσι(ν)'],['acc','pl','σχόντα'],['voc','pl','σχόντα']]
    });
    addExactParticipleSeries(rows,'φέρω','present','active','manual',{
      masc:[['nom','sg','φέρων'],['gen','sg','φέροντος'],['dat','sg','φέροντι'],['acc','sg','φέροντα'],['voc','sg','φέρων'],['nom','pl','φέροντες'],['gen','pl','φερόντων'],['dat','pl','φέρουσι(ν)'],['acc','pl','φέροντας'],['voc','pl','φέροντες']],
      fem:[['nom','sg','φέρουσα'],['gen','sg','φερούσης'],['dat','sg','φερούσῃ'],['acc','sg','φέρουσαν'],['voc','sg','φέρουσα'],['nom','pl','φέρουσαι'],['gen','pl','φερουσῶν'],['dat','pl','φερούσαις'],['acc','pl','φερούσας'],['voc','pl','φέρουσαι']],
      neut:[['nom','sg','φέρον'],['gen','sg','φέροντος'],['dat','sg','φέροντι'],['acc','sg','φέρον'],['voc','sg','φέρον'],['nom','pl','φέροντα'],['gen','pl','φερόντων'],['dat','pl','φέρουσι(ν)'],['acc','pl','φέροντα'],['voc','pl','φέροντα']]
    });
    addExactParticipleSeries(rows,'φέρω','future','active','manual',{
      masc:[['nom','sg','οἴσων'],['gen','sg','οἴσοντος'],['dat','sg','οἴσοντι'],['acc','sg','οἴσοντα'],['voc','sg','οἴσων'],['nom','pl','οἴσοντες'],['gen','pl','οἰσόντων'],['dat','pl','οἴσουσι(ν)'],['acc','pl','οἴσοντας'],['voc','pl','οἴσοντες']],
      fem:[['nom','sg','οἴσουσα'],['gen','sg','οἰσούσης'],['dat','sg','οἰσούσῃ'],['acc','sg','οἴσουσαν'],['voc','sg','οἴσουσα'],['nom','pl','οἴσουσαι'],['gen','pl','οἰσουσῶν'],['dat','pl','οἰσούσαις'],['acc','pl','οἰσούσας'],['voc','pl','οἴσουσαι']],
      neut:[['nom','sg','οἶσον'],['gen','sg','οἴσοντος'],['dat','sg','οἴσοντι'],['acc','sg','οἶσον'],['voc','sg','οἶσον'],['nom','pl','οἴσοντα'],['gen','pl','οἰσόντων'],['dat','pl','οἴσουσι(ν)'],['acc','pl','οἴσοντα'],['voc','pl','οἴσοντα']]
    });
    addExactParticipleSeries(rows,'φέρω','aorist','active','manual',{
      masc:[['nom','sg','ἐνεγκών'],['gen','sg','ἐνεγκόντος'],['dat','sg','ἐνεγκόντι'],['acc','sg','ἐνεγκόντα'],['voc','sg','ἐνεγκών'],['nom','pl','ἐνεγκόντες'],['gen','pl','ἐνεγκόντων'],['dat','pl','ἐνεγκοῦσι(ν)'],['acc','pl','ἐνεγκόντας'],['voc','pl','ἐνεγκόντες']],
      fem:[['nom','sg','ἐνεγκοῦσα'],['gen','sg','ἐνεγκούσης'],['dat','sg','ἐνεγκούσῃ'],['acc','sg','ἐνεγκοῦσαν'],['voc','sg','ἐνεγκοῦσα'],['nom','pl','ἐνεγκοῦσαι'],['gen','pl','ἐνεγκουσῶν'],['dat','pl','ἐνεγκούσαις'],['acc','pl','ἐνεγκούσας'],['voc','pl','ἐνεγκοῦσαι']],
      neut:[['nom','sg','ἐνεγκόν'],['gen','sg','ἐνεγκόντος'],['dat','sg','ἐνεγκόντι'],['acc','sg','ἐνεγκόν'],['voc','sg','ἐνεγκόν'],['nom','pl','ἐνεγκόντα'],['gen','pl','ἐνεγκόντων'],['dat','pl','ἐνεγκοῦσι(ν)'],['acc','pl','ἐνεγκόντα'],['voc','pl','ἐνεγκόντα']]
    });
    addExactParticipleSeries(rows,'φέρω','aorist','passive','eis',{masc:'ἐνεχθείς',fem:'ἐνεχθεῖσα',neut:'ἐνεχθέν'});
    addExactParticipleSeries(rows,'ὁράω','present','active','manual',{
      masc:[['nom','sg','ὁρῶν'],['gen','sg','ὁρῶντος'],['dat','sg','ὁρῶντι'],['acc','sg','ὁρῶντα'],['voc','sg','ὁρῶν'],['nom','pl','ὁρῶντες'],['gen','pl','ὁρώντων'],['dat','pl','ὁρῶσι(ν)'],['acc','pl','ὁρῶντας'],['voc','pl','ὁρῶντες']],
      fem:[['nom','sg','ὁρῶσα'],['gen','sg','ὁρώσης'],['dat','sg','ὁρώσῃ'],['acc','sg','ὁρῶσαν'],['voc','sg','ὁρῶσα'],['nom','pl','ὁρῶσαι'],['gen','pl','ὁρωσῶν'],['dat','pl','ὁρώσαις'],['acc','pl','ὁρώσας'],['voc','pl','ὁρῶσαι']],
      neut:[['nom','sg','ὁρῶν'],['gen','sg','ὁρῶντος'],['dat','sg','ὁρῶντι'],['acc','sg','ὁρῶν'],['voc','sg','ὁρῶν'],['nom','pl','ὁρῶντα'],['gen','pl','ὁρώντων'],['dat','pl','ὁρῶσι(ν)'],['acc','pl','ὁρῶντα'],['voc','pl','ὁρῶντα']]
    });
    addExactParticipleSeries(rows,'ὁράω','future','middle','menos',{masc:'ὀψόμενος',fem:'ὀψομένη',neut:'ὀψόμενον'});
    addExactParticipleSeries(rows,'ὁράω','aorist','active','manual',{
      masc:[['nom','sg','ἰδών'],['gen','sg','ἰδόντος'],['dat','sg','ἰδόντι'],['acc','sg','ἰδόντα'],['voc','sg','ἰδών'],['nom','pl','ἰδόντες'],['gen','pl','ἰδόντων'],['dat','pl','ἰδοῦσι(ν)'],['acc','pl','ἰδόντας'],['voc','pl','ἰδόντες']],
      fem:[['nom','sg','ἰδοῦσα'],['gen','sg','ἰδούσης'],['dat','sg','ἰδούσῃ'],['acc','sg','ἰδοῦσαν'],['voc','sg','ἰδοῦσα'],['nom','pl','ἰδοῦσαι'],['gen','pl','ἰδουσῶν'],['dat','pl','ἰδούσαις'],['acc','pl','ἰδούσας'],['voc','pl','ἰδοῦσαι']],
      neut:[['nom','sg','ἰδόν'],['gen','sg','ἰδόντος'],['dat','sg','ἰδόντι'],['acc','sg','ἰδόν'],['voc','sg','ἰδόν'],['nom','pl','ἰδόντα'],['gen','pl','ἰδόντων'],['dat','pl','ἰδοῦσι(ν)'],['acc','pl','ἰδόντα'],['voc','pl','ἰδόντα']]
    });
    const byLemma={};
    rows.forEach(r=>{ ((byLemma[normalizeGreek(r.lemma)] = byLemma[normalizeGreek(r.lemma)] || [])).push(r); });
    return byLemma;
  })();

  function exactSchoolParticipleEntries(lemma){
    return (EXACT_SCHOOL_PARTICIPLES[normalizeGreek(lemma)]||[]).map(x=>({...x}));
  }

  function strictSchoolParticipleCuration(lemma, entries){
    const normLemma=normalizeGreek(lemma);
    if(!STRICT_SCHOOL_PARTICIPLE_LEMMAS.has(normLemma)) return entries.slice();
    const tensePriority=['present','aorist','perfect','future','imperfect','pluperfect','future perfect'];
    const formPriority=(e)=>{
      const display=displayForm(e);
      const normalized=normalizeGreek(display);
      let score=0;
      if(e.number==='du') score+=100;
      if(e.tense==='future perfect') score+=60;
      if(e.tense==='imperfect' || e.tense==='pluperfect') score+=40;
      if((e.variant||'').includes('alt')) score+=20;
      score += Math.max(0, tensePriority.indexOf(e.tense));
      score += normalized.length/100;
      return score;
    };
    const bestBySlot={};
    entries.forEach(e=>{
      if(e.number==='du') return;
      const slot=[e.tense||'',e.voice||'',e.gender||'',e.case||'',e.number||''].join('|');
      const current=bestBySlot[slot];
      if(!current || formPriority(e) < formPriority(current)) bestBySlot[slot]=e;
    });
    return Object.values(bestBySlot);
  }

  function buildSparseParticipleParadigm(entries){
    const byGender={};
    entries.forEach(e=>{ if(e.gender) byGender[e.gender]=e; });
    const genders=['masc','fem','neut'];
    if(!genders.some(g=>byGender[g])) return entries;
    const norm=s=>normalizeGreek(stripLengthMarks(s||''));
    const stripAcc=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').normalize('NFC');
    const make=(src, gender, kase, number, form)=>({
      ...src,
      gender,
      case:kase,
      number,
      form
    });
    const patterns=[];
    let masc=byGender.masc?.form||'';
    let fem=byGender.fem?.form||'';
    let neut=byGender.neut?.form||'';
    if(masc && (!fem || !neut)){
      const nOnlyMasc=norm(masc);
      if(normalizeGreek(entries[0]?.lemma||'')==='ειμι' && /^(ων|εων)$/.test(nOnlyMasc)){
        fem = fem || 'οὖσα';
        neut = neut || 'ὄν';
      } else if(/μενος$/.test(nOnlyMasc)){
        fem = fem || masc.replace(/μενος$/,'μενη');
        neut = neut || masc.replace(/μενος$/,'μενον');
      } else if(/(εις)$/.test(nOnlyMasc)){
        const stem=masc.replace(/είς$/,'').replace(/εις$/,'');
        fem = fem || stem+'εῖσα';
        neut = neut || stem+'έν';
      } else if(/ας$/.test(nOnlyMasc)){
        const stem=masc.replace(/ας$/,'');
        fem = fem || stem+'ασα';
        neut = neut || stem+'αν';
      } else if(/(ους)$/.test(nOnlyMasc)){
        const stem=masc.replace(/ούς$/,'').replace(/ους$/,'');
        fem = fem || stem+'οῦσα';
        neut = neut || stem+'όν';
      } else if(/ων$/.test(nOnlyMasc)){
        const stem=masc.replace(/ων$/,'').replace(/ών$/,'');
        fem = fem || stem+'ουσα';
        neut = neut || stem+'ον';
      }
      if(fem && !byGender.fem) byGender.fem={...(byGender.masc||entries[0]||{}), gender:'fem', form:fem};
      if(neut && !byGender.neut) byGender.neut={...(byGender.masc||entries[0]||{}), gender:'neut', form:neut};
    }
    const nMasc=norm(masc), nFem=norm(fem), nNeut=norm(neut);
    if(normalizeGreek(entries[0]?.lemma||'')==='ειμι' && /^(ων|εων)$/.test(nMasc) && /^(ουσα|εουσα)$/.test(nFem) && /^(ον|εον)$/.test(nNeut)){
      const src=byGender.masc||byGender.fem||byGender.neut||entries[0]||{};
      const forms=[];
      const push=(gender,kase,number,form)=>forms.push(make(src,gender,kase,number,form));
      const mascForms={sg:{nom:'ὤν',gen:'ὄντος',dat:'ὄντι',acc:'ὄντα',voc:'ὤν'},du:{nom:'ὄντε',gen:'ὄντοιν',dat:'ὄντοιν',acc:'ὄντε',voc:'ὄντε'},pl:{nom:'ὄντες',gen:'ὄντων',dat:'οὖσι(ν)',acc:'ὄντας',voc:'ὄντες'}};
      const femForms={sg:{nom:'οὖσα',gen:'οὔσης',dat:'οὔσῃ',acc:'οὖσαν',voc:'οὖσα'},du:{nom:'οὔσα',gen:'ουσαῖν',dat:'ουσαῖν',acc:'οὔσα',voc:'οὔσα'},pl:{nom:'οὖσαι',gen:'ουσῶν',dat:'ούσαις',acc:'οὔσας',voc:'οὖσαι'}};
      const neutForms={sg:{nom:'ὄν',gen:'ὄντος',dat:'ὄντι',acc:'ὄν',voc:'ὄν'},du:{nom:'ὄντε',gen:'ὄντοιν',dat:'ὄντοιν',acc:'ὄντε',voc:'ὄντε'},pl:{nom:'ὄντα',gen:'ὄντων',dat:'οὖσι(ν)',acc:'ὄντα',voc:'ὄντα'}};
      for (const [num,cases] of Object.entries(mascForms)) for (const [cs,form] of Object.entries(cases)) push('masc',cs,num,form);
      for (const [num,cases] of Object.entries(femForms)) for (const [cs,form] of Object.entries(cases)) push('fem',cs,num,form);
      for (const [num,cases] of Object.entries(neutForms)) for (const [cs,form] of Object.entries(cases)) push('neut',cs,num,form);
      return forms;
    }
    let type=null;
    if(/μενος$/.test(nMasc) && /μενη$/.test(nFem) && /μενον$/.test(nNeut)) type='menos';
    else if(/ως$/.test(nMasc) && /υια$/.test(nFem) && /ος$/.test(nNeut)) type='perfact';
    else if(/(εις)$/.test(nMasc) && /(εισα)$/.test(nFem) && /(εν)$/.test(nNeut)) type='eis';
    else if(/ας$/.test(nMasc) && /ασα$/.test(nFem) && /αν$/.test(nNeut)) type='as';
    else if(/ων$/.test(nMasc) && /ουσα$/.test(nFem) && /ον$/.test(nNeut)) type='on';
    if(!type) return entries;

    const forms=[];
    if(type==='menos'){
      const mStem=masc.replace(/ος$/,'');
      const fStem=fem.replace(/η$/,'');
      const nStem=neut.replace(/ον$/,'');
      const m={sg:{nom:'ος',gen:'ου',dat:'ῳ',acc:'ον',voc:'ε'},du:{nom:'ω',gen:'οιν',dat:'οιν',acc:'ω',voc:'ω'},pl:{nom:'οι',gen:'ων',dat:'οις',acc:'ους',voc:'οι'}};
      const f={sg:{nom:'η',gen:'ης',dat:'ῃ',acc:'ην',voc:'η'},du:{nom:'α',gen:'αιν',dat:'αιν',acc:'α',voc:'α'},pl:{nom:'αι',gen:'ων',dat:'αις',acc:'ας',voc:'αι'}};
      const n={sg:{nom:'ον',gen:'ου',dat:'ῳ',acc:'ον',voc:'ον'},du:{nom:'ω',gen:'οιν',dat:'οιν',acc:'ω',voc:'ω'},pl:{nom:'α',gen:'ων',dat:'οις',acc:'α',voc:'α'}};
      for (const [num,cases] of Object.entries(m)) for (const [cs,end] of Object.entries(cases)) forms.push(make(byGender.masc||byGender.fem||byGender.neut,'masc',cs,num,mStem+end));
      for (const [num,cases] of Object.entries(f)) for (const [cs,end] of Object.entries(cases)) forms.push(make(byGender.fem||byGender.masc||byGender.neut,'fem',cs,num,fStem+end));
      for (const [num,cases] of Object.entries(n)) for (const [cs,end] of Object.entries(cases)) forms.push(make(byGender.neut||byGender.masc||byGender.fem,'neut',cs,num,nStem+end));
    } else if(type==='on'){
      const mStem=masc.replace(/ων$/,'').replace(/ών$/,'');
      const fStem=fem.replace(/α$/,'');
      const nStem=neut.replace(/ον$/,'');
      const common={sg:{gen:'οντος',dat:'οντι'},du:{nom:'οντε',gen:'οντοιν',dat:'οντοιν',acc:'οντε',voc:'οντε'},pl:{nom:'οντες',gen:'οντων',acc:'οντας',voc:'οντες'}};
      forms.push(make(byGender.masc,'masc','nom','sg',masc));
      forms.push(make(byGender.masc,'masc','acc','sg',mStem+'οντα'));
      forms.push(make(byGender.masc,'masc','voc','sg',masc));
      for (const [num,cases] of Object.entries(common)) for (const [cs,end] of Object.entries(cases)) forms.push(make(byGender.masc,'masc',cs,num,mStem+end));
      forms.push(make(byGender.masc,'masc','dat','pl',mStem+'ουσι(ν)'));

      const fEnds={sg:{nom:'α',gen:'ης',dat:'ῃ',acc:'αν',voc:'α'},du:{nom:'α',gen:'αιν',dat:'αιν',acc:'α',voc:'α'},pl:{nom:'αι',gen:'ων',dat:'αις',acc:'ας',voc:'αι'}};
      for (const [num,cases] of Object.entries(fEnds)) for (const [cs,end] of Object.entries(cases)) forms.push(make(byGender.fem,'fem',cs,num,fStem+end));

      forms.push(make(byGender.neut,'neut','nom','sg',neut));
      forms.push(make(byGender.neut,'neut','gen','sg',nStem+'οντος'));
      forms.push(make(byGender.neut,'neut','dat','sg',nStem+'οντι'));
      forms.push(make(byGender.neut,'neut','acc','sg',neut));
      forms.push(make(byGender.neut,'neut','voc','sg',neut));
      forms.push(make(byGender.neut,'neut','nom','du',nStem+'οντε'));
      forms.push(make(byGender.neut,'neut','gen','du',nStem+'οντοιν'));
      forms.push(make(byGender.neut,'neut','dat','du',nStem+'οντοιν'));
      forms.push(make(byGender.neut,'neut','acc','du',nStem+'οντε'));
      forms.push(make(byGender.neut,'neut','voc','du',nStem+'οντε'));
      forms.push(make(byGender.neut,'neut','nom','pl',nStem+'οντα'));
      forms.push(make(byGender.neut,'neut','gen','pl',nStem+'οντων'));
      forms.push(make(byGender.neut,'neut','dat','pl',nStem+'ουσι(ν)'));
      forms.push(make(byGender.neut,'neut','acc','pl',nStem+'οντα'));
      forms.push(make(byGender.neut,'neut','voc','pl',nStem+'οντα'));
    } else if(type==='as'){
      const mStem=masc.replace(/ας$/,'');
      const fStem=fem.replace(/α$/,'');
      const nStem=neut.replace(/αν$/,'');
      forms.push(make(byGender.masc,'masc','nom','sg',masc));
      forms.push(make(byGender.masc,'masc','gen','sg',mStem+'αντος'));
      forms.push(make(byGender.masc,'masc','dat','sg',mStem+'αντι'));
      forms.push(make(byGender.masc,'masc','acc','sg',mStem+'αντα'));
      forms.push(make(byGender.masc,'masc','voc','sg',masc));
      forms.push(make(byGender.masc,'masc','nom','du',mStem+'αντε'));
      forms.push(make(byGender.masc,'masc','gen','du',mStem+'αντοιν'));
      forms.push(make(byGender.masc,'masc','dat','du',mStem+'αντοιν'));
      forms.push(make(byGender.masc,'masc','acc','du',mStem+'αντε'));
      forms.push(make(byGender.masc,'masc','voc','du',mStem+'αντε'));
      forms.push(make(byGender.masc,'masc','nom','pl',mStem+'αντες'));
      forms.push(make(byGender.masc,'masc','gen','pl',mStem+'αντων'));
      forms.push(make(byGender.masc,'masc','dat','pl',mStem+'ασι(ν)'));
      forms.push(make(byGender.masc,'masc','acc','pl',mStem+'αντας'));
      forms.push(make(byGender.masc,'masc','voc','pl',mStem+'αντες'));
      const fEnds={sg:{nom:'α',gen:'ης',dat:'ῃ',acc:'αν',voc:'α'},du:{nom:'α',gen:'αιν',dat:'αιν',acc:'α',voc:'α'},pl:{nom:'αι',gen:'ων',dat:'αις',acc:'ας',voc:'αι'}};
      for (const [num,cases] of Object.entries(fEnds)) for (const [cs,end] of Object.entries(cases)) forms.push(make(byGender.fem,'fem',cs,num,fStem+end));
      const nCommon={sg:{nom:'αν',gen:'αντος',dat:'αντι',acc:'αν',voc:'αν'},du:{nom:'αντε',gen:'αντοιν',dat:'αντοιν',acc:'αντε',voc:'αντε'},pl:{nom:'αντα',gen:'αντων',dat:'ασι(ν)',acc:'αντα',voc:'αντα'}};
      for (const [num,cases] of Object.entries(nCommon)) for (const [cs,end] of Object.entries(cases)) forms.push(make(byGender.neut,'neut',cs,num,nStem+end));
    } else if(type==='eis'){
      const mStem=masc.replace(/είς$/,'').replace(/εις$/,'');
      const fStem=fem.replace(/εῖσα$/,'').replace(/εισα$/,'');
      const nStem=neut.replace(/έν$/,'').replace(/εν$/,'');
      forms.push(make(byGender.masc,'masc','nom','sg',masc));
      forms.push(make(byGender.masc,'masc','gen','sg',mStem+'έντος'));
      forms.push(make(byGender.masc,'masc','dat','sg',mStem+'έντι'));
      forms.push(make(byGender.masc,'masc','acc','sg',mStem+'έντα'));
      forms.push(make(byGender.masc,'masc','voc','sg',masc));
      forms.push(make(byGender.masc,'masc','nom','du',mStem+'έντε'));
      forms.push(make(byGender.masc,'masc','gen','du',mStem+'έντοιν'));
      forms.push(make(byGender.masc,'masc','dat','du',mStem+'έντοιν'));
      forms.push(make(byGender.masc,'masc','acc','du',mStem+'έντε'));
      forms.push(make(byGender.masc,'masc','voc','du',mStem+'έντε'));
      forms.push(make(byGender.masc,'masc','nom','pl',mStem+'έντες'));
      forms.push(make(byGender.masc,'masc','gen','pl',mStem+'έντων'));
      forms.push(make(byGender.masc,'masc','dat','pl',mStem+'εῖσι(ν)'));
      forms.push(make(byGender.masc,'masc','acc','pl',mStem+'έντας'));
      forms.push(make(byGender.masc,'masc','voc','pl',mStem+'έντες'));
      const fEnds={sg:{nom:'εῖσα',gen:'είσης',dat:'είσῃ',acc:'εῖσαν',voc:'εῖσα'},du:{nom:'είσα',gen:'εισαῖν',dat:'εισαῖν',acc:'είσα',voc:'είσα'},pl:{nom:'εῖσαι',gen:'εισῶν',dat:'είσαις',acc:'είσας',voc:'εῖσαι'}};
      for (const [num,cases] of Object.entries(fEnds)) for (const [cs,end] of Object.entries(cases)) forms.push(make(byGender.fem,'fem',cs,num,fStem+end));
      const nCommon={sg:{nom:'έν',gen:'έντος',dat:'έντι',acc:'έν',voc:'έν'},du:{nom:'έντε',gen:'έντοιν',dat:'έντοιν',acc:'έντε',voc:'έντε'},pl:{nom:'έντα',gen:'έντων',dat:'εῖσι(ν)',acc:'έντα',voc:'έντα'}};
      for (const [num,cases] of Object.entries(nCommon)) for (const [cs,end] of Object.entries(cases)) forms.push(make(byGender.neut,'neut',cs,num,nStem+end));
    } else if(type==='perfact'){
      const mStem=neut.replace(/ός$/,'').replace(/ος$/,'');
      const fStem=fem.replace(/α$/,'');
      forms.push(make(byGender.masc,'masc','nom','sg',masc));
      forms.push(make(byGender.masc,'masc','gen','sg',mStem+'ότος'));
      forms.push(make(byGender.masc,'masc','dat','sg',mStem+'ότι'));
      forms.push(make(byGender.masc,'masc','acc','sg',mStem+'ότα'));
      forms.push(make(byGender.masc,'masc','voc','sg',masc));
      forms.push(make(byGender.masc,'masc','nom','du',mStem+'ότε'));
      forms.push(make(byGender.masc,'masc','gen','du',mStem+'ότοιν'));
      forms.push(make(byGender.masc,'masc','dat','du',mStem+'ότοιν'));
      forms.push(make(byGender.masc,'masc','acc','du',mStem+'ότε'));
      forms.push(make(byGender.masc,'masc','voc','du',mStem+'ότε'));
      forms.push(make(byGender.masc,'masc','nom','pl',mStem+'ότες'));
      forms.push(make(byGender.masc,'masc','gen','pl',mStem+'ότων'));
      forms.push(make(byGender.masc,'masc','dat','pl',mStem+'όσι(ν)'));
      forms.push(make(byGender.masc,'masc','acc','pl',mStem+'ότας'));
      forms.push(make(byGender.masc,'masc','voc','pl',mStem+'ότες'));
      const fEnds={sg:{nom:'α',gen:'ας',dat:'ᾳ',acc:'αν',voc:'α'},du:{nom:'α',gen:'αιν',dat:'αιν',acc:'α',voc:'α'},pl:{nom:'αι',gen:'ων',dat:'αις',acc:'ας',voc:'αι'}};
      for (const [num,cases] of Object.entries(fEnds)) for (const [cs,end] of Object.entries(cases)) forms.push(make(byGender.fem,'fem',cs,num,fStem+end));
      const nCommon={sg:{nom:'ός',gen:'ότος',dat:'ότι',acc:'ός',voc:'ός'},du:{nom:'ότε',gen:'ότοιν',dat:'ότοιν',acc:'ότε',voc:'ότε'},pl:{nom:'ότα',gen:'ότων',dat:'όσι(ν)',acc:'ότα',voc:'ότα'}};
      for (const [num,cases] of Object.entries(nCommon)) for (const [cs,end] of Object.entries(cases)) forms.push(make(byGender.neut,'neut',cs,num,mStem+end));
    }
    const dedup={};
    for(const f of forms){
      const key=[f.gender,f.case,f.number,normalizeGreek(displayForm(f))].join('|');
      dedup[key]=f;
    }
    return Object.values(dedup);
  }

  async function renderConjugation(){

  function renderParticipleDeclensionTable(entries){
    const orderN=['sg','du','pl'];
    const orderC=['nom','gen','dat','acc','voc'];
    const availableNumbers=orderN.filter(n=>entries.some(e=>e.number===n));
    const numbers=availableNumbers.length ? availableNumbers : ['sg','pl'];
    const slotMap={};
    for(const e of entries){
      const key=`${e.case}|${e.number}`;
      (slotMap[key]=slotMap[key]||[]).push(e);
    }
    const rows=orderC.map(c=>{
      const cells=numbers.map(n=>{
        const slot=(slotMap[`${c}|${n}`]||[])
          .slice()
          .sort((a,b)=>normalizeGreek(displayForm(a)).localeCompare(normalizeGreek(displayForm(b))))
          .map(e=>escapeHtml(displayForm(e)));
        const unique=[...new Set(slot)];
        return `<td>${unique.length ? unique.join('<br>') : '<span class="muted">—</span>'}</td>`;
      }).join('');
      return `<tr><th scope="row">${escapeHtml(label(CASE_LABELS,c))}</th>${cells}</tr>`;
    }).join('');
    const header=numbers.map(n=>`<th scope="col">${escapeHtml(label(NUMBER_LABELS,n))}</th>`).join('');
    return `<div class="participle-table-wrap"><table class="participle-table"><thead><tr><th scope="col">Πτώση</th>${header}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }
    const lemma=$('#verb-select').value;
    const mode=$('#view-select').value;
    const out=$('#conjugation-output');
    out.innerHTML='<div class="result-card"><p>Φορτώνονται τα δεδομένα κλίσης…</p></div>';
    const forms=await formsForLemma(lemma);
    const metaVerb=verbs.find(v=>normalizeGreek(v.lemma)===normalizeGreek(lemma));
    const finite=forms.filter(x=>x.kind==='finite');
    const summary=[];
    summary.push(`<strong>${escapeHtml(displayLemma(lemma))}</strong>`);
    if(hasManualParadigm(lemma)) summary.push('χειροκίνητα επιμελημένο paradigm');
    if(metaVerb?.gloss && metaVerb.gloss !== 'Συμπληρωματικό λήμμα') summary.push(`νεοελληνική μετάφραση: ${escapeHtml(metaVerb.gloss)}`);
    if(metaVerb?.principalParts) summary.push(`κύρια μέρη: ${escapeHtml(metaVerb.principalParts)}`);
    if(Array.isArray(metaVerb?.derivatives) && metaVerb.derivatives.length) summary.push(`νεοελληνικά/λεξιλογικά παράγωγα: ${escapeHtml(metaVerb.derivatives.join(', '))}`);
    if(metaVerb?.sourceNotes) summary.push(`πηγές επιμέλειας: ${escapeHtml(metaVerb.sourceNotes)}`);
    const auditInfo=strictAuditInfo(lemma);
    if(auditInfo){ summary.push(`strict audit: ${escapeHtml(auditInfo.status)} · manual forms ${auditInfo.manualForms} · slot checks ${auditInfo.slotChecks}`); }
    const hard=hardeningInfo(lemma);
    const curated=manualCurationInfo(lemma);
    const spot=spotCheckInfo(lemma);
    const slotValidation=slotValidationInfo(lemma);
    if(hard) summary.push(`philology hardening: ${escapeHtml(hard.group)}`);
    if(curated) summary.push(`χειροκίνητη λημματοκεντρική επιμέλεια: ${escapeHtml(curated.family)}`);
    if(spot) summary.push(`spot-check: ${escapeHtml(spot.summary)}`);
    if(slotValidation) summary.push(`slot-by-slot validation: ${escapeHtml(slotValidation.summary)}`);
    if(mode==='participle') summary.push('οι πίνακες μετοχών προβάλλονται με ενισχυμένη φιλολογική επιμέλεια, λημματοκεντρική αναπλήρωση ελλειπόντων γενών, ειδική κάλυψη για ανώμαλους τύπους, αυστηρότερο σχολικό φιλτράρισμα των σπανιότερων εναλλακτικών και απολύτως χειροκίνητη σχολική κλίση για εἰμί, οἶδα, φημί, δίδωμι, τίθημι, ἵστημι, λέγω, φέρω, ὁράω και ἔχω');
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
      const rawParticipleEntries=forms.filter(x=>x.kind==='participle');
      const sparseGroups={};
      rawParticipleEntries.forEach(f=>{
        const sparseKey=`${f.tense}|${f.voice}`;
        (sparseGroups[sparseKey]=sparseGroups[sparseKey]||[]).push(f);
      });
      const filtered=Object.values(sparseGroups).flatMap(group=>{
        const distinctSlots=new Set(group.filter(x=>x.case && x.number).map(x=>`${x.gender||''}|${x.case}|${x.number}`)).size;
        const distinctGenders=new Set(group.map(x=>x.gender).filter(Boolean)).size;
        const needsExpansion = distinctSlots < 10 || distinctGenders < 3;
        return needsExpansion ? buildSparseParticipleParadigm(group) : group;
      });
      const exactSchool = exactSchoolParticipleEntries(lemma);
      const schoolFiltered = exactSchool.length ? exactSchool : strictSchoolParticipleCuration(lemma, filtered);
      const grouped={};
      schoolFiltered.forEach(f=>{
        const k=`${f.tense}|${f.voice}|${f.gender}`;
        (grouped[k]=grouped[k]||[]).push(f);
      });
      const orderT=['present','imperfect','future','aorist','perfect','pluperfect','future perfect'];
      const orderV=['active','middle','middle/passive','passive','middlepassive'];
      const orderG=['masc','fem','neut'];
      const orderN=['sg','du','pl'];
      const orderC=['nom','gen','dat','acc','voc'];
      const keys=Object.keys(grouped).sort((a,b)=>{
        const [ta,va,ga]=a.split('|'); const [tb,vb,gb]=b.split('|');
        return orderT.indexOf(ta)-orderT.indexOf(tb) || orderV.indexOf(va)-orderV.indexOf(vb) || orderG.indexOf(ga)-orderG.indexOf(gb);
      });
      out.innerHTML=keys.map(k=>{
        const [tense,voice,gender]=k.split('|');
        const entries=grouped[k].slice().sort((a,b)=>orderN.indexOf(a.number)-orderN.indexOf(b.number) || orderC.indexOf(a.case)-orderC.indexOf(b.case) || normalizeGreek(displayForm(a)).localeCompare(normalizeGreek(displayForm(b))));
        return `<div class="table-block"><h3>${label(TENSE_LABELS,tense)} • ${label(VOICE_LABELS,voice)} • ${label(GENDER_LABELS,gender)}</h3>${renderParticipleDeclensionTable(entries)}</div>`;
      }).join('') || '<div class="result-card"><p>Δεν υπάρχουν διαθέσιμες μετοχές.</p></div>';
    }
  }
  const quizPoolCache = {};
  const questionPoolCache = {};
  function isDualEntry(x){
    return x?.number==='du' || /du$/.test(canonicalPerson(x)||'');
  }
  async function poolForLevel(level){
    await ensureQuizPoolBuilt(level);
    if(quizPoolCache[level]) return quizPoolCache[level];
    const pool=(quizPools[level]||[]).slice();
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
  async function newQuiz(){
    const level=$('#quiz-level').value;
    const finiteOn=$('#quiz-finite').checked;
    const nonFiniteOn=$('#quiz-nonfinite').checked;
    const filterKey=`${level}|${finiteOn?'1':'0'}|${nonFiniteOn?'1':'0'}`;
    $('#quiz-box').innerHTML='<div class="muted">Ετοιμάζεται το pool του παιχνιδιού…</div>';
    let pool=questionPoolCache[filterKey];
    if(!pool){
      pool=await poolForLevel(level);
      pool=pool.filter(x=>!ambiguityNoteFor(x.form));
      if(!finiteOn) pool=pool.filter(x=>x.kind!=='finite');
      if(!nonFiniteOn) pool=pool.filter(x=>x.kind==='finite');
      pool=uniqBy(pool, x=>`${normalizeGreek(displayForm(x))}|${formatChoice(x)}`);
      questionPoolCache[filterKey]=pool;
    }
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
    $('#quiz-box').innerHTML=`<strong>${escapeHtml(displayForm(answer))}</strong>${answer.kind==='participle' ? `<div class="muted">Επίλεξε τη σωστή αναγνώριση με γένος, αριθμό και πτώση.</div>` : ''}${level!=='advanced' ? '<div class="muted">Στο τρέχον επίπεδο δεν εμφανίζεται δυϊκός.</div>' : ''}`;
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
      const formsCount=hasManualParadigm(v.lemma)
        ? ((manualParadigms[manualParadigmNormMap[normalizeGreek(v.lemma)]]||[]).length)
        : (hasGeneratedParadigm(v.lemma)
            ? ((generatedParadigms[generatedParadigmNormMap[normalizeGreek(v.lemma)]]||[]).length)
            : (canonicalLemma ? (lemmaForms[canonicalLemma]||[]).length : 0));
      const title=escapeHtml(displayLemma(v.displayLemma || v.lemma));
      const rel=reliabilityInfo(v);
      const hard=hardeningInfo(v.lemma);
      const curated=manualCurationInfo(v.lemma);
      const spot=spotCheckInfo(v.lemma);
      const audit=strictAuditInfo(v.lemma);
      return `<div class="verb-card"><div class="badges">${hasForms?'<span class="badge full">κλίση διαθέσιμη</span>':'<span class="badge catalog">μόνο λημματολόγιο</span>'}<span class="badge ${rel.className}">${escapeHtml(rel.label)}</span><span class="badge">${escapeHtml(v.source||'core')}</span>${canonicalLemmaSet.has(normalizeGreek(v.lemma))?'<span class="badge canonical">canonical</span>':''}${hard?'<span class="badge manual">targeted hardening</span>':''}${curated?'<span class="badge reviewed">χειροκίνητη επιμέλεια</span>':''}${spot?'<span class="badge canonical">spot-check</span>':''}${slotValidationInfo(v.lemma)?'<span class="badge manual">slot validation</span>':''}${hasManualParadigm(v.lemma)?'<span class="badge full">manual paradigm</span>':''}${audit?`<span class="badge ${audit.needsAudit?'catalog':'full'}">strict audit: ${escapeHtml(audit.readiness)}</span>`:''}</div><h3>${title}</h3><p class="muted">${escapeHtml(v.gloss||'—')}</p><p class="family-line"><strong>Οικογένεια:</strong> ${escapeHtml(curated?.family || familyLabel(v))}</p>${hard?`<p><strong>Hardening ομάδα:</strong> ${escapeHtml(hard.group)}</p><p class="notes-compact">${escapeHtml(hard.note||'')}</p>`:''}${curated?`<p><strong>Επίπεδο επιμέλειας:</strong> χειροκίνητη λημματοκεντρική επιμέλεια</p><p class="notes-compact">${escapeHtml(curated.schoolNote||'')}</p><p class="notes-compact"><strong>Προσοχή:</strong> ${escapeHtml(curated.caution||'')}</p><p class="notes-compact"><strong>Διδακτική χρήση:</strong> ${escapeHtml(curated.recommendation||'')}</p>`:''}${audit?`<p><strong>Strict audit:</strong> ${escapeHtml(audit.status)}</p><p class="notes-compact">${escapeHtml(audit.summary||'')}</p>${audit.needsAudit?`<p class="notes-compact"><strong>Σημείωση:</strong> Δεν έχει ακόμη ολοκληρωθεί πλήρες χειροκίνητο slot-by-slot audit όλων των προσωπικών τύπων, απαρεμφάτων και μετοχών.</p>`:''}`:''}${spot?`<p><strong>Spot-check:</strong> επιβεβαιωμένο λημματικό πέρασμα</p><p class="notes-compact">${escapeHtml(spot.summary||'')}</p><p class="notes-compact"><strong>Σημείο προσοχής:</strong> ${escapeHtml(spot.caution||'')}</p>`:''}${slotValidationInfo(v.lemma)?`<p><strong>Slot validation:</strong> χειροκίνητα ελεγμένα βασικά κλιτικά slots</p><p class="notes-compact">${escapeHtml(slotValidationInfo(v.lemma).summary||'')}</p>`:''}${hasForms?`<p><strong>Τύποι:</strong> ${formsCount}</p>`:''}${v.principalParts?`<p><strong>Κύρια μέρη:</strong> ${escapeHtml(v.principalParts)}</p>`:''}${Array.isArray(v.derivatives)&&v.derivatives.length?`<p><strong>Παράγωγα:</strong> ${escapeHtml(v.derivatives.join(', '))}</p>`:''}${v.sourceNotes?`<p class="notes-compact"><strong>Πηγές επιμέλειας:</strong> ${escapeHtml(v.sourceNotes)}</p>`:''}${v.notes?`<p class="notes-compact">${escapeHtml(v.notes)}</p>`:''}</div>`;
    }).join('') + (rows.length>500?`<div class="verb-card"><p>Εμφανίζονται τα πρώτα 500 αποτελέσματα. Χρησιμοποίησε αναζήτηση για ακριβέστερο φιλτράρισμα.</p></div>`:'');
  }
  function renderBibliography(){
    const box=$('#bibliography-results');
    if(!box) return;
    box.innerHTML=bibliographyEntries.map(entry=>`<div class="verb-card bibliography-card"><div class="badges"><span class="badge reviewed">Harvard</span><span class="badge supplemental">βασική βιβλιογραφία</span></div><p class="bibliography-entry">${entry.citation}</p><p class="muted">${escapeHtml(entry.note||'')}</p></div>`).join('');
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
  async function runClassroomTests(){
    const box=$('#classroom-results');
    if(box) box.innerHTML='<div class="result-card"><p>Φορτώνεται ο δείκτης classroom tests…</p></div>';
    await ensureFormIndexLoaded();
    const tests=(classroomTestsData.tests||[]);
    const results=tests.map(test=>{
      const hits=indexEntriesFor(test.form, test.form).slice();
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
  async function buildWorksheet(){
    await ensureQuizPoolBuilt();
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
    const on=(sel, event, handler)=>{ const el=$(sel); if(el) el.addEventListener(event, handler); };
    on('#analyze-btn','click', ()=>{ analyze().catch(console.error); });
    on('#analyze-input','keydown', e=>{ if(e.key==='Enter') analyze().catch(console.error); });
    on('#verb-select','change', ()=>{ renderConjugation().catch(console.error); });
    on('#view-select','change', ()=>{ renderConjugation().catch(console.error); });
    on('#new-quiz','click', ()=>{ newQuiz().catch(console.error); });
    on('#quiz-level','change', ()=>{ newQuiz().catch(console.error); });
    on('#quiz-finite','change', ()=>{ newQuiz().catch(console.error); });
    on('#quiz-nonfinite','change', ()=>{ newQuiz().catch(console.error); });
    const rerenderLibrary=async ()=>{ await ensureLemmaManifestLoaded(); await ensureLemmaFormsLoaded(); renderLibrary(); };
    on('#library-search','input', ()=>{ rerenderLibrary().catch(console.error); });
    on('#coverage-filter','change', ()=>{ rerenderLibrary().catch(console.error); });
    on('#source-filter','change', ()=>{ rerenderLibrary().catch(console.error); });
    on('#philology-filter','change', ()=>{ rerenderLibrary().catch(console.error); });
    on('#build-worksheet','click', ()=>{ buildWorksheet().catch(console.error); });
    on('#run-classroom-tests','click', ()=>{ runClassroomTests().catch(console.error); });
    on('#print-worksheet','click', ()=>window.print());
  }
  const activeCountPill=document.getElementById('active-count-pill'); if(activeCountPill) activeCountPill.textContent='Σχολικός πυρήνας και επιμελημένα paradigms';
  buildHeroStats();
  activateTabs();
  wireEvents();
})();
