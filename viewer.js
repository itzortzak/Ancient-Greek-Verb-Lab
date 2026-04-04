(function () {
  const MOOD_ORDER = ['indicative', 'subjunctive', 'optative', 'imperative'];
  const MOOD_LABELS = {
    indicative: 'Οριστική', subjunctive: 'Υποτακτική', optative: 'Ευκτική', imperative: 'Προστακτική', infinitive: 'Απαρέμφατο', participle: 'Μετοχή'
  };
  const TENSE_ORDER = ['present', 'imperfect', 'future', 'future perfect', 'aorist', 'perfect', 'pluperfect'];
  const TENSE_LABELS = {
    present: 'Ενεστώτας', imperfect: 'Παρατατικός', future: 'Μέλλοντας', 'future perfect': 'Συντελεσμένος μέλλοντας', aorist: 'Αόριστος', perfect: 'Παρακείμενος', pluperfect: 'Υπερσυντέλικος'
  };
  const VOICE_ORDER = ['active', 'middle', 'passive', 'middle/passive'];
  const VOICE_LABELS = { active: 'Ενεργητική', middle: 'Μέση', passive: 'Παθητική', 'middle/passive': 'Μέση / Παθητική' };
  const PERSON_ROWS = [ ['sg','1sg','α΄ ενικό'], ['sg','2sg','β΄ ενικό'], ['sg','3sg','γ΄ ενικό'], ['pl','1pl','α΄ πληθυντικό'], ['pl','2pl','β΄ πληθυντικό'], ['pl','3pl','γ΄ πληθυντικό'] ];
  const CASE_ORDER = ['nom', 'gen', 'dat', 'acc', 'voc'];
  const CASE_LABELS = { nom: 'Ονομαστική', gen: 'Γενική', dat: 'Δοτική', acc: 'Αιτιατική', voc: 'Κλητική' };
  const GENDER_ORDER = ['masc', 'fem', 'neut'];
  const GENDER_LABELS = { masc: 'Αρσενικό', fem: 'Θηλυκό', neut: 'Ουδέτερο' };
  const NUMBER_LABELS = { sg: 'εν.', pl: 'πλ.' };
  const NUMBER_FULL_LABELS = { sg: 'ενικός', pl: 'πληθυντικός' };
  const PERSON_LABELS = { '1sg':'α΄ ενικό', '2sg':'β΄ ενικό', '3sg':'γ΄ ενικό', '1pl':'α΄ πληθυντικό', '2pl':'β΄ πληθυντικό', '3pl':'γ΄ πληθυντικό' };
  const MOOD_DESCRIPTOR_LABELS = {
    indicative: 'οριστικής', subjunctive: 'υποτακτικής', optative: 'ευκτικής', imperative: 'προστακτικής', infinitive: 'απαρεμφάτου', participle: 'μετοχής'
  };
  const TENSE_DESCRIPTOR_LABELS = {
    present: 'ενεστώτα', imperfect: 'παρατατικού', future: 'μέλλοντα', 'future perfect': 'συντελεσμένου μέλλοντα', aorist: 'αορίστου', perfect: 'παρακειμένου', pluperfect: 'υπερσυντελίκου'
  };
  const VOICE_DESCRIPTOR_LABELS = {
    active: 'ενεργητικής φωνής', middle: 'μέσης φωνής', passive: 'παθητικής φωνής', 'middle/passive': 'μέσης / παθητικής φωνής'
  };

  const lexiconRoot = window.LEXICON_AUGMENT || {};
  const baseVerbMeta = lexiconRoot.verbMeta || lexiconRoot || {};
  const extraVerbMeta = Object.fromEntries(((lexiconRoot.extraVerbs || []).filter(entry => entry && entry.lemma)).map(entry => [entry.lemma, entry]));
  const verbMeta = Object.assign({}, extraVerbMeta, baseVerbMeta);
  const manualParadigms = window.MANUAL_PARADIGMS || {};
  const generatedParadigms = window.GENERATED_PARADIGMS || {};
  const strictAudit = (window.STRICT_AUDIT && window.STRICT_AUDIT.lemmas) || {};
  const formIndex = window.FORM_INDEX || {};
  const classroomTests = (window.CLASSROOM_TESTS && window.CLASSROOM_TESTS.tests) || [];

  const lemmaSelect = document.getElementById('lemmaSelect');
  const lemmaSearch = document.getElementById('lemmaSearch');
  const prevLemmaBtn = document.getElementById('prevLemmaBtn');
  const nextLemmaBtn = document.getElementById('nextLemmaBtn');
  const lemmaPosition = document.getElementById('lemmaPosition');
  const lemmaMeta = document.getElementById('lemmaMeta');
  const finiteSection = document.getElementById('finiteSection');
  const nonFiniteSection = document.getElementById('nonFiniteSection');

  const analyzeInput = document.getElementById('analyzeInput');
  const analyzeBtn = document.getElementById('analyzeBtn');
  const analyzeStatus = document.getElementById('analyzeStatus');
  const analyzeResults = document.getElementById('analyzeResults');

  const newQuestionBtn = document.getElementById('newQuestionBtn');
  const gameCard = document.getElementById('gameCard');

  function escapeHtml(str) {
    return String(str ?? '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }

  function normalizeGreek(str) {
    return String(str || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ς/g, 'σ')
      .replace(/[^\p{L}]/gu, '')
      .toLowerCase();
  }

  function labelFor(entry) {
    const parts = [];
    if (entry.kind === 'finite') {
      if (entry.tense) parts.push(TENSE_LABELS[entry.tense] || entry.tense);
      if (entry.voice) parts.push(VOICE_LABELS[entry.voice] || entry.voice);
      if (entry.mood) parts.push(MOOD_LABELS[entry.mood] || entry.mood);
      if (entry.person) parts.push(PERSON_LABELS[entry.person] || entry.person);
    } else if (entry.kind === 'infinitive') {
      parts.push('Απαρέμφατο');
      if (entry.tense) parts.push(TENSE_LABELS[entry.tense] || entry.tense);
      if (entry.voice) parts.push(VOICE_LABELS[entry.voice] || entry.voice);
    } else if (entry.kind === 'participle') {
      parts.push('Μετοχή');
      if (entry.tense) parts.push(TENSE_LABELS[entry.tense] || entry.tense);
      if (entry.voice) parts.push(VOICE_LABELS[entry.voice] || entry.voice);
      if (entry.gender) parts.push(GENDER_LABELS[entry.gender] || entry.gender);
      if (entry.number) parts.push(NUMBER_FULL_LABELS[entry.number] || entry.number);
      if (entry.case) parts.push(CASE_LABELS[entry.case] || entry.case);
    }
    return parts.join(' · ');
  }

  function getParadigmSource(lemma) {
    if (manualParadigms[lemma]) return 'manual';
    if (generatedParadigms[lemma]) return 'generated';
    return 'missing';
  }
  function sourceRank(entry) {
    const source = String(entry?.source || '').toLowerCase();
    const priority = entry?.displayPriority;
    if (typeof priority === 'number') return priority;
    if (source.includes('stage4') || source.includes('manual') || source.includes('stage7')) return 10;
    if (source.includes('patch')) return 20;
    if (source.includes('generated')) return 40;
    if (source.includes('kaikki')) return 60;
    return 100;
  }
  function stripGreekDiacritics(str) {
    return String(str || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ς/g, 'σ').toLowerCase();
  }
  function detectContractType(lemma) {
    const bare = stripGreekDiacritics(lemma);
    if (bare.endsWith('αω')) return 'ao';
    if (bare.endsWith('εω')) return 'eo';
    if (bare.endsWith('οω')) return 'oo';
    if (bare.endsWith('ηω')) return 'eo';
    if (bare.endsWith('ωω')) return 'oo';
    return null;
  }
  function deriveContractedLemma(lemma) {
    return detectContractType(lemma) ? `${lemma.slice(0, -2)}ῶ` : null;
  }
  function isLikelyGreekGloss(gloss) {
    return !!gloss && !/[A-Za-z]/.test(gloss);
  }
  function isUncontractedFormForType(form, contractType) {
    const bare = stripGreekDiacritics(form);
    const seqs = { ao: ['αω','αε','αο','αη'], eo: ['εω','εε','εο','εη'], oo: ['οω','οε','οο','οη'] }[contractType] || [];
    return seqs.some(seq => bare.includes(seq));
  }
  function filterContractedEntries(lemma, entries) {
    const contractType = detectContractType(lemma);
    if (!contractType) return entries;
    const grouped = new Map();
    for (const entry of entries) {
      const key = [entry.kind || '', entry.tense || '', entry.voice || '', entry.mood || '', entry.person || '', entry.number || '', entry.gender || '', entry.case || ''].join('|');
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key).push(entry);
    }
    const filtered = [];
    for (const bucket of grouped.values()) {
      const contracted = bucket.filter(entry => !isUncontractedFormForType(entry.form, contractType));
      filtered.push(...(contracted.length ? contracted : bucket));
    }
    return filtered;
  }
  function getParadigmEntries(lemma) {
    const entries = manualParadigms[lemma] || generatedParadigms[lemma] || [];
    return filterContractedEntries(lemma, entries);
  }
  function getDisplayLemma(lemma) {
    const meta = verbMeta[lemma] || {};
    if (meta.displayLemma) return meta.displayLemma;
    const contracted = deriveContractedLemma(lemma);
    return contracted || lemma;
  }
  function normalizeGreekGlossText(gloss) {
    return String(gloss || '')
      .replace(/\s+/g, ' ')
      .replace(/\s*·\s*/g, ' · ')
      .replace(/\s*,\s*/g, ', ')
      .replace(/\s*;\s*/g, '; ')
      .trim();
  }
  function getSafeGreekGloss(lemma) {
    const meta = verbMeta[lemma] || {};
    const candidates = [meta.gloss_el, meta.gloss, meta.meaning_el, meta.meaning];
    const gloss = normalizeGreekGlossText(candidates.find(isLikelyGreekGloss) || '');
    return isLikelyGreekGloss(gloss) ? gloss : '';
  }
  const lemmaList = [...new Set([...Object.keys(manualParadigms), ...Object.keys(generatedParadigms), ...Object.keys(verbMeta)])].sort((a,b)=>(getDisplayLemma(a)).localeCompare(getDisplayLemma(b),'el'));
  const lemmaIndexMap = new Map(lemmaList.map((lemma, index) => [lemma, index]));
  const displayLemmaBuckets = new Map();
  for (const lemma of lemmaList) {
    const display = getDisplayLemma(lemma);
    if (!displayLemmaBuckets.has(display)) displayLemmaBuckets.set(display, []);
    displayLemmaBuckets.get(display).push(lemma);
  }
  function getOptionLabel(lemma) {
    const display = getDisplayLemma(lemma);
    const bucket = displayLemmaBuckets.get(display) || [];
    if (bucket.length <= 1) return display;
    return `${display} [${lemma}]`;
  }
  function updateLemmaPosition(lemma) {
    if (!lemmaPosition) return;
    const index = lemmaIndexMap.get(lemma);
    if (typeof index !== 'number') {
      lemmaPosition.textContent = '';
      return;
    }
    lemmaPosition.textContent = `Λήμμα ${index + 1} από ${lemmaList.length}`;
  }
  function selectLemma(lemma, options = {}) {
    if (!lemma || !lemmaIndexMap.has(lemma)) return;
    lemmaSelect.value = lemma;
    renderLemma(lemma);
    if (options.activateTab !== false) activateTab('conjugationTab');
  }
  for (const lemma of lemmaList) {
    const opt = document.createElement('option');
    opt.value = lemma; opt.textContent = getOptionLabel(lemma); opt.dataset.coverage = getParadigmSource(lemma); lemmaSelect.appendChild(opt);
  }
  function normalizePerson(number, person) { if (number === 'pl' && person === '1sg') return '1pl'; if (number === 'pl' && person === '2sg') return '2pl'; if (number === 'pl' && person === '3sg') return '3pl'; return person; }
  function dedupeForms(forms) { const seen = new Set(); return forms.filter(f => { const key = JSON.stringify(f); if (seen.has(key)) return false; seen.add(key); return true; }); }
  function getFiniteForms(lemma) { return dedupeForms(getParadigmEntries(lemma).filter(x => x.kind === 'finite')); }
  function getNonFiniteForms(lemma) { return dedupeForms(getParadigmEntries(lemma).filter(x => x.kind !== 'finite')); }
  function collectCellForms(forms, number, person) {
    const targetPerson = normalizePerson(number, person);
    const hits = forms.filter(f => f.number === number && normalizePerson(f.number, f.person) === targetPerson).map(f => f.form);
    return [...new Set(hits)];
  }

  function renderFinite(lemma) {
    const finite = getFiniteForms(lemma); finiteSection.innerHTML = '';
    for (const mood of MOOD_ORDER) {
      const moodForms = finite.filter(f => f.mood === mood); if (!moodForms.length) continue;
      const moodBlock = document.createElement('section'); moodBlock.className = 'mood-block'; moodBlock.innerHTML = `<h2 class="mood-title">${MOOD_LABELS[mood]}</h2>`;
      for (const tense of TENSE_ORDER) {
        const tenseForms = moodForms.filter(f => f.tense === tense); if (!tenseForms.length) continue;
        const tenseBlock = document.createElement('div'); tenseBlock.className = 'tense-block'; tenseBlock.innerHTML = `<h3 class="tense-title">${TENSE_LABELS[tense]}</h3>`;
        const voiceGrid = document.createElement('div'); voiceGrid.className = 'voice-grid';
        for (const voice of VOICE_ORDER) {
          const voiceForms = tenseForms.filter(f => f.voice === voice); if (!voiceForms.length) continue;
          const voiceCard = document.createElement('div'); voiceCard.className = 'voice-card';
          const rows = PERSON_ROWS.map(([number, person, label]) => {
            const cellForms = collectCellForms(voiceForms, number, person);
            return `<tr><th scope="row">${label}</th><td class="${cellForms.length ? '' : 'empty'}">${cellForms.length ? cellForms.join(' · ') : '—'}</td></tr>`;
          }).join('');
          voiceCard.innerHTML = `<h4>${VOICE_LABELS[voice] || voice}</h4><div class="table-wrap"><table class="data-table"><tbody>${rows}</tbody></table></div>`;
          voiceGrid.appendChild(voiceCard);
        }
        tenseBlock.appendChild(voiceGrid); moodBlock.appendChild(tenseBlock);
      }
      finiteSection.appendChild(moodBlock);
    }
  }

  function renderInfinitives(nonFinite) {
    const infinitives = nonFinite.filter(f => f.kind === 'infinitive');
    if (!infinitives.length) return '';
    const grouped = {};
    for (const f of infinitives) { const key = `${f.tense}|${f.voice}`; grouped[key] = grouped[key] || []; grouped[key].push(f.form); }
    const tenses = TENSE_ORDER.filter(t => infinitives.some(f => f.tense === t));
    const voices = VOICE_ORDER.filter(v => infinitives.some(f => f.voice === v));
    const rows = tenses.map(tense => `<tr><th scope="row">${TENSE_LABELS[tense] || tense}</th>${voices.map(voice=>{
      const key=`${tense}|${voice}`; const forms=[...(new Set(grouped[key]||[]))]; return `<td class="${forms.length?'':'empty'}">${forms.length?forms.join(' · '):'—'}</td>`;
    }).join('')}</tr>`).join('');
    return `
      <div class="voice-card nonfinite-table-card">
        <div class="table-wrap">
          <table class="data-table matrix-table">
            <thead><tr><th>Χρόνος</th>${voices.map(v=>`<th>${VOICE_LABELS[v] || v}</th>`).join('')}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
  }

  function renderParticiples(nonFinite) {
    const participles = nonFinite.filter(f => f.kind === 'participle');
    if (!participles.length) return '';
    const blocks = [];
    const tenseVoiceKeys = [...new Set(participles.map(f => `${f.tense}|${f.voice}`))].sort((a,b)=> TENSE_ORDER.indexOf(a.split('|')[0]) - TENSE_ORDER.indexOf(b.split('|')[0]));
    for (const key of tenseVoiceKeys) {
      const [tense, voice] = key.split('|');
      const forms = participles.filter(f => `${f.tense}|${f.voice}` === key);
      const tables = ['sg','pl'].map(number => {
        const body = CASE_ORDER.map(kase => {
          const cells = GENDER_ORDER.map(gender => {
            const hits = forms.filter(f => f.gender === gender && (f.number || 'sg') === number && (f.case || 'nom') === kase).map(f => f.form);
            const uniq = [...new Set(hits)];
            return `<td class="${uniq.length ? '' : 'empty'}">${uniq.length ? uniq.join(' · ') : '—'}</td>`;
          }).join('');
          return `<tr><th scope="row">${CASE_LABELS[kase]}</th>${cells}</tr>`;
        }).join('');
        return `<div class="table-wrap participle-number-table"><h5>${number === 'sg' ? 'Ενικός' : 'Πληθυντικός'}</h5><table class="data-table matrix-table"><thead><tr><th>Πτώση</th>${GENDER_ORDER.map(g=>`<th>${GENDER_LABELS[g]}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table></div>`;
      }).join('');
      blocks.push(`<div class="voice-card nonfinite-table-card"><h4>${TENSE_LABELS[tense]} · ${VOICE_LABELS[voice] || voice}</h4>${tables}</div>`);
    }
    return `<section class="mood-block"><h2 class="mood-title">Μετοχές</h2><div class="nonfinite-grid">${blocks.join('')}</div></section>`;
  }

  function renderNonFinite(lemma) {
    const nonFinite = getNonFiniteForms(lemma); nonFiniteSection.innerHTML = '';
    const infHtml = renderInfinitives(nonFinite);
    if (infHtml) { const block = document.createElement('section'); block.className = 'mood-block'; block.innerHTML = `<h2 class="mood-title">Απαρέμφατα</h2><div class="nonfinite-grid">${infHtml}</div>`; nonFiniteSection.appendChild(block); }
    const partHtml = renderParticiples(nonFinite); if (partHtml) nonFiniteSection.insertAdjacentHTML('beforeend', partHtml);
  }

  function updateLemmaMeta(lemma) {
    const safeGloss = getSafeGreekGloss(lemma);
    lemmaMeta.innerHTML = safeGloss ? `<span class="badge">σημασία: ${escapeHtml(safeGloss)}</span>` : '';
  }
  function renderLemma(lemma) {
    updateLemmaPosition(lemma);
    updateLemmaMeta(lemma);
    renderFinite(lemma);
    renderNonFinite(lemma);
    if (!finiteSection.innerHTML.trim()) {
      finiteSection.innerHTML = '<section class="card"><div class="empty-state">Δεν καταγράφονται διαθέσιμοι πεπερασμένοι τύποι για το συγκεκριμένο λήμμα στο τρέχον σύνολο δεδομένων.</div></section>';
    }
    if (!nonFiniteSection.innerHTML.trim()) {
      nonFiniteSection.innerHTML = '<section class="card"><div class="empty-state">Δεν καταγράφονται διαθέσιμα απαρέμφατα ή μετοχές για το συγκεκριμένο λήμμα στο τρέχον σύνολο δεδομένων.</div></section>';
    }
  }

  const kaikkiStage2 = {
    bucketCount: 48,
    basePath: 'data/kaikki_stage2',
    loaded: new Set(),
    pending: new Map(),
    everActivated: false
  };

  function entrySignature(entry) {
    return [entry.lemma || '', entry.form || '', entry.kind || '', entry.tense || '', entry.voice || '', entry.mood || '', entry.person || '', entry.gender || '', entry.case || '', entry.number || ''].join('|');
  }
  function analysisDisplaySignature(entry) {
    return [entry.lemma || '', entry.form || '', labelFor(entry)].join('|');
  }
  function dedupeAnalysisHits(entries) {
    const kept = new Map();
    for (const entry of entries || []) {
      const key = analysisDisplaySignature(entry);
      const prev = kept.get(key);
      if (!prev || sourceRank(entry) < sourceRank(prev)) kept.set(key, entry);
    }
    return [...kept.values()];
  }


  const fallbackRecognitionCache = new Map();
  function expandAlternativeForms(form) {
    const out = new Set();
    const queue = [String(form || '').trim()];
    while (queue.length) {
      const current = queue.pop();
      if (!current) continue;
      if (/\(ν\)/.test(current)) {
        queue.push(current.replace(/\(ν\)/g, ''));
        queue.push(current.replace(/\(ν\)/g, 'ν'));
        continue;
      }
      if (current.includes(' / ')) {
        current.split(/\s*\/\s*/).forEach(part => queue.push(part));
        continue;
      }
      out.add(current.replace(/\s+/g, ' ').trim());
    }
    return [...out];
  }
  function buildFallbackRecognitions(normalized) {
    if (fallbackRecognitionCache.has(normalized)) return fallbackRecognitionCache.get(normalized);
    const results = [];
    for (const lemma of lemmaList) {
      for (const entry of getParadigmEntries(lemma)) {
        if (!entry || !entry.form) continue;
        for (const variant of expandAlternativeForms(entry.form)) {
          if (normalizeGreek(variant) !== normalized) continue;
          const normalizedEntry = Object.assign({}, entry, {
            form: variant,
            source: entry.source || 'runtime-fallback',
            displayPriority: Math.min(sourceRank(entry), 35)
          });
          results.push(normalizedEntry);
        }
      }
    }
    const deduped = dedupeAnalysisHits(results);
    fallbackRecognitionCache.set(normalized, deduped);
    return deduped;
  }

  function bucketForNormalizedKey(key) {
    if (!key) return 0;
    const cps = [key.codePointAt(0) || 0, key.codePointAt(1) || 0, key.codePointAt(2) || 0];
    return ((cps[0] * 31) + (cps[1] * 17) + cps[2]) % kaikkiStage2.bucketCount;
  }

  function mergeShardIntoFormIndex(shard) {
    if (!shard || typeof shard !== 'object') return;
    for (const [key, arr] of Object.entries(shard)) {
      if (!Array.isArray(arr) || !arr.length) continue;
      const bucket = formIndex[key] = formIndex[key] || [];
      const seen = new Set(bucket.map(entrySignature));
      for (const item of arr) {
        const normalizedItem = Object.assign({ displayPriority: 1200, source: 'kaikki-stage2' }, item);
        const sig = entrySignature(normalizedItem);
        if (seen.has(sig)) continue;
        seen.add(sig);
        bucket.push(normalizedItem);
      }
    }
  }

  async function ensureKaikkiBucketLoaded(normalizedKey) {
    if (!normalizedKey) return { loaded: false, bucketId: null };
    const bucketId = bucketForNormalizedKey(normalizedKey);
    if (kaikkiStage2.loaded.has(bucketId)) return { loaded: false, bucketId };
    if (kaikkiStage2.pending.has(bucketId)) {
      await kaikkiStage2.pending.get(bucketId);
      return { loaded: true, bucketId };
    }
    const file = `${kaikkiStage2.basePath}/form_index_bucket_${String(bucketId).padStart(2, '0')}.json`;
    const promise = fetch(file)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        mergeShardIntoFormIndex(data);
        kaikkiStage2.loaded.add(bucketId);
        kaikkiStage2.everActivated = true;
      })
      .catch(err => {
        console.warn('Kaikki stage-2 bucket load failed:', bucketId, err);
      })
      .finally(() => {
        kaikkiStage2.pending.delete(bucketId);
      });
    kaikkiStage2.pending.set(bucketId, promise);
    await promise;
    return { loaded: kaikkiStage2.loaded.has(bucketId), bucketId };
  }

  async function analyzeForm(query) {
    const raw = String(query || '').trim();
    const normalized = normalizeGreek(raw);
    if (!normalized) {
      analyzeStatus.textContent = 'Δώσε έναν τύπο για αναγνώριση.';
      analyzeResults.innerHTML = '<div class="empty-state">Δεν έχει δοθεί τύπος.</div>';
      return;
    }
    analyzeStatus.textContent = `Αναζήτηση για: ${raw}`;
    const stage2Info = await ensureKaikkiBucketLoaded(normalized);
    let hits = dedupeAnalysisHits(dedupeForms((formIndex[normalized] || []).slice()));
    let usedFallback = false;
    if (!hits.length) {
      hits = buildFallbackRecognitions(normalized);
      usedFallback = !!hits.length;
    }
    hits = hits.sort((a, b) => {
      const pa = sourceRank(a), pb = sourceRank(b);
      if (pa !== pb) return pa - pb;
      const lemmaDiff = getDisplayLemma(a.lemma || '').localeCompare(getDisplayLemma(b.lemma || ''), 'el');
      if (lemmaDiff) return lemmaDiff;
      return labelFor(a).localeCompare(labelFor(b), 'el');
    });
    const stage2Note = stage2Info.loaded ? ' · φορτώθηκε επιπλέον shard Kaikki stage-2' : (kaikkiStage2.everActivated ? ' · διαθέσιμη και επέκταση Kaikki stage-2' : '');
    const fallbackNote = usedFallback ? ' · χρησιμοποιήθηκε εναλλακτική σάρωση παραδειγμάτων' : '';
    analyzeStatus.textContent = `Αναζήτηση για: ${raw}${stage2Note}${fallbackNote}`;
    if (!hits.length) {
      analyzeResults.innerHTML = `<div class="empty-state">Δεν βρέθηκε αναγνώριση για τον τύπο <strong>${escapeHtml(raw)}</strong>.</div>`;
      return;
    }
    const rows = hits.map(h => {
      const gloss = getSafeGreekGloss(h.lemma || '');
      const displayLemma = h.lemma ? getDisplayLemma(h.lemma) : '—';
      const lemmaButton = h.lemma
        ? `<button type="button" class="lemma-open-btn" data-lemma="${escapeHtml(h.lemma)}">${escapeHtml(displayLemma)}</button>`
        : escapeHtml(displayLemma);
      return `<tr>
      <td>${escapeHtml(h.form || raw)}</td>
      <td><div>${lemmaButton}</div>${gloss ? `<div class="table-subtle">${escapeHtml(gloss)}</div>` : ''}</td>
      <td>${escapeHtml(labelFor(h))}</td>
    </tr>`;
    }).join('');
    analyzeResults.innerHTML = `
      <div class="result-count">Βρέθηκαν ${hits.length} αναλύσεις.</div>
      <div class="table-wrap">
        <table class="data-table analysis-table">
          <thead><tr><th>Τύπος</th><th>Λήμμα · σημασία</th><th>Αναγνώριση</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }

  const tabButtons = [...document.querySelectorAll('.tab-btn')];
  const tabPanels = [...document.querySelectorAll('.tab-panel')];
  function activateTab(id) {
    tabButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === id));
    tabPanels.forEach(panel => panel.classList.toggle('active', panel.id === id));
  }
  tabButtons.forEach(btn => btn.addEventListener('click', () => activateTab(btn.dataset.tab)));

  let gameState = { score: 0, total: 0, current: null, answered: false };
  function shuffled(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  const gameLemmaPool = Object.keys(manualParadigms).filter(lemma => {
    const finite = dedupeForms((manualParadigms[lemma] || []).filter(entry => entry.kind === 'finite' && entry.form));
    return new Set(finite.map(entry => entry.form)).size >= 4;
  });
  function buildGamePrompt(entry) {
    const parts = [];
    if (entry.person) parts.push(PERSON_LABELS[entry.person] || entry.person);
    if (entry.tense) parts.push(TENSE_DESCRIPTOR_LABELS[entry.tense] || entry.tense);
    if (entry.mood) parts.push(MOOD_DESCRIPTOR_LABELS[entry.mood] || entry.mood);
    if (entry.voice) parts.push(VOICE_DESCRIPTOR_LABELS[entry.voice] || entry.voice);
    const gloss = getSafeGreekGloss(entry.lemma);
    const glossPart = gloss ? ` (${gloss})` : '';
    return `Βρες τον σωστό τύπο του ρήματος ${getDisplayLemma(entry.lemma)}${glossPart}: ${parts.join(', ')}.`;
  }

  function similarityScore(correct, candidate) {
    let score = 0;
    if (candidate.tense === correct.tense) score += 100;
    if (candidate.voice === correct.voice) score += 100;
    if (candidate.mood === correct.mood) score += 100;
    if (candidate.number === correct.number) score += 25;
    if (candidate.person === correct.person) score += 20;
    if (candidate.form === correct.form) score -= 1000;
    return score;
  }

  function pickPedagogicalDistractors(correct, entries) {
    const uniqueByForm = new Map();
    for (const entry of entries) {
      if (!entry.form || entry.form === correct.form) continue;
      const prev = uniqueByForm.get(entry.form);
      if (!prev || similarityScore(correct, entry) > similarityScore(correct, prev)) uniqueByForm.set(entry.form, entry);
    }
    const ranked = [...uniqueByForm.values()].sort((a, b) => {
      const diff = similarityScore(correct, b) - similarityScore(correct, a);
      if (diff) return diff;
      return labelFor(a).localeCompare(labelFor(b), 'el');
    });
    const primary = ranked.filter(entry => entry.tense === correct.tense && entry.voice === correct.voice && entry.mood === correct.mood);
    const secondary = ranked.filter(entry => !(entry.tense === correct.tense && entry.voice === correct.voice && entry.mood === correct.mood));
    return [...primary, ...secondary].slice(0, 3).map(entry => entry.form);
  }
  function buildQuestion() {
    if (!gameLemmaPool.length) {
      gameCard.innerHTML = '<div class="empty-state">Δεν υπάρχουν διαθέσιμα δεδομένα παιχνιδιού.</div>';
      return;
    }
    let selectedLemma = null;
    let entries = [];
    let correct = null;
    let options = [];
    for (let tries = 0; tries < 80; tries++) {
      const candidateLemma = gameLemmaPool[Math.floor(Math.random() * gameLemmaPool.length)];
      const candidateEntries = dedupeForms((manualParadigms[candidateLemma] || []).filter(entry => entry.kind === 'finite' && entry.form));
      if (new Set(candidateEntries.map(entry => entry.form)).size < 4) continue;
      const candidateCorrect = candidateEntries[Math.floor(Math.random() * candidateEntries.length)];
      const distractors = pickPedagogicalDistractors(candidateCorrect, candidateEntries);
      const fallbackDistractors = shuffled(candidateEntries.filter(entry => entry.form !== candidateCorrect.form))
        .map(entry => entry.form)
        .filter((form, index, arr) => arr.indexOf(form) === index && !distractors.includes(form))
        .slice(0, 6);
      const optionSet = [...new Set([candidateCorrect.form, ...distractors, ...fallbackDistractors])].slice(0, 4);
      if (optionSet.length < 4) continue;
      selectedLemma = candidateLemma;
      entries = candidateEntries;
      correct = candidateCorrect;
      options = shuffled(optionSet);
      break;
    }
    if (!selectedLemma || entries.length < 4 || !correct || options.length < 4) {
      gameCard.innerHTML = '<div class="empty-state">Δεν υπάρχουν επαρκή δεδομένα παιχνιδιού για το τρέχον σύνολο λημμάτων.</div>';
      return;
    }
    gameState.current = {
      lemma: selectedLemma,
      prompt: buildGamePrompt(correct),
      correctForm: correct.form,
      correctLabel: labelFor(correct),
      options
    };
    gameState.answered = false;
    renderQuestion();
  }
  function renderQuestion(selected = null) {
    if (!gameState.current) return;
    const { lemma, prompt, correctForm, correctLabel, options } = gameState.current;
    const buttons = options.map(opt => {
      let cls = 'game-option';
      if (selected) {
        if (opt === correctForm) cls += ' correct';
        else if (opt === selected) cls += ' wrong';
      }
      return `<button type="button" class="${cls}" data-option="${escapeHtml(opt)}" ${selected ? 'disabled' : ''}>${escapeHtml(opt)}</button>`;
    }).join('');
    const feedback = selected ? `<div class="game-feedback">${selected === correctForm ? 'Σωστό.' : `Λάθος. Σωστή απάντηση: ${escapeHtml(correctForm)}`}<div class="game-feedback-meta">${escapeHtml(correctLabel || '')}</div><div class="game-feedback-actions"><button type="button" class="secondary-btn game-open-lemma-btn" data-lemma="${escapeHtml(lemma)}">Άνοιγμα στην Κλίση</button></div></div>` : '';
    gameCard.innerHTML = `
      <div class="game-score">Σκορ: ${gameState.score}/${gameState.total}</div>
      <div class="game-form">${escapeHtml(prompt)}</div>
      <div class="minor-note">Όλες οι επιλογές ανήκουν στο ίδιο ρήμα: <strong>${escapeHtml(getOptionLabel(lemma))}</strong></div>
      <div class="game-options">${buttons}</div>
      ${feedback}`;
    gameCard.querySelectorAll('.game-option').forEach(btn => btn.addEventListener('click', () => {
      if (gameState.answered) return;
      gameState.answered = true;
      gameState.total += 1;
      if (btn.dataset.option === correctForm) gameState.score += 1;
      renderQuestion(btn.dataset.option);
    }));
    const openLemmaBtn = gameCard.querySelector('.game-open-lemma-btn');
    if (openLemmaBtn) {
      openLemmaBtn.addEventListener('click', () => selectLemma(openLemmaBtn.dataset.lemma));
    }
  }

  analyzeResults.addEventListener('click', (event) => {
    const btn = event.target.closest('.lemma-open-btn');
    if (!btn) return;
    selectLemma(btn.dataset.lemma);
  });
  lemmaSelect.addEventListener('change', () => renderLemma(lemmaSelect.value));
  lemmaSearch.addEventListener('input', () => {
    const raw = lemmaSearch.value.trim();
    const q = normalizeGreek(raw);
    if (!q) return;
    const match = lemmaList.find(l => {
      const safeGloss = getSafeGreekGloss(l);
      return normalizeGreek(l).includes(q)
        || normalizeGreek(getDisplayLemma(l)).includes(q)
        || normalizeGreek(getOptionLabel(l)).includes(q)
        || (safeGloss && normalizeGreek(safeGloss).includes(q));
    });
    if (match) selectLemma(match, { activateTab: false });
  });
  if (prevLemmaBtn) {
    prevLemmaBtn.addEventListener('click', () => {
      const current = lemmaIndexMap.get(lemmaSelect.value);
      if (typeof current !== 'number' || current <= 0) return;
      selectLemma(lemmaList[current - 1], { activateTab: false });
    });
  }
  if (nextLemmaBtn) {
    nextLemmaBtn.addEventListener('click', () => {
      const current = lemmaIndexMap.get(lemmaSelect.value);
      if (typeof current !== 'number' || current >= lemmaList.length - 1) return;
      selectLemma(lemmaList[current + 1], { activateTab: false });
    });
  }
  analyzeBtn.addEventListener('click', async () => { await analyzeForm(analyzeInput.value); });
  analyzeInput.addEventListener('keydown', async (e) => { if (e.key === 'Enter') await analyzeForm(analyzeInput.value); });
  newQuestionBtn.addEventListener('click', buildQuestion);

  if (lemmaList.length) { selectLemma(lemmaList[0], { activateTab: false }); }
  analyzeResults.innerHTML = '<div class="empty-state">Οι αναλύσεις θα εμφανιστούν εδώ.</div>';
  analyzeStatus.textContent = 'Έτοιμο για αναγνώριση.';
  buildQuestion();
})();
