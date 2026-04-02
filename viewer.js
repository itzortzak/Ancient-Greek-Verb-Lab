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

  const lexiconRoot = window.LEXICON_AUGMENT || {};
  const verbMeta = lexiconRoot.verbMeta || lexiconRoot || {};
  const manualParadigms = window.MANUAL_PARADIGMS || {};
  const generatedParadigms = window.GENERATED_PARADIGMS || {};
  const strictAudit = (window.STRICT_AUDIT && window.STRICT_AUDIT.lemmas) || {};
  const formIndex = window.FORM_INDEX || {};
  const classroomTests = (window.CLASSROOM_TESTS && window.CLASSROOM_TESTS.tests) || [];

  const lemmaSelect = document.getElementById('lemmaSelect');
  const lemmaSearch = document.getElementById('lemmaSearch');
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
  function getParadigmEntries(lemma) { return manualParadigms[lemma] || generatedParadigms[lemma] || []; }
  function getDisplayLemma(lemma) {
    const meta = verbMeta[lemma] || {};
    if (meta.displayLemma && meta.displayLemma !== lemma) return `${lemma} · ${meta.displayLemma}`;
    return lemma;
  }
  const lemmaList = [...new Set([...Object.keys(manualParadigms), ...Object.keys(generatedParadigms)])].sort((a,b)=>a.localeCompare(b,'el'));
  for (const lemma of lemmaList) {
    const opt = document.createElement('option');
    opt.value = lemma; opt.textContent = getDisplayLemma(lemma); opt.dataset.coverage = getParadigmSource(lemma); lemmaSelect.appendChild(opt);
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
    const meta = verbMeta[lemma] || {}; const audit = strictAudit[lemma] || null; const sourceKind = getParadigmSource(lemma); const bits = [];
    const coverageLabel = sourceKind === 'manual' ? 'χειροκίνητο / επιμελημένο' : sourceKind === 'generated' ? 'γενετικό / μη πλήρως επιμελημένο' : 'χωρίς διαθέσιμο paradigm';
    bits.push(`<span class="badge">κάλυψη: ${coverageLabel}</span>`);
    if (meta.gloss) bits.push(`<span class="badge">σημασία: ${meta.gloss}</span>`);
    if (meta.principalParts) bits.push(`<span class="badge">αρχικοί χρόνοι: ${meta.principalParts}</span>`);
    if (meta.family) bits.push(`<span class="badge">κατηγορία: ${meta.family}</span>`);
    if (audit && audit.summary) bits.push(`<span class="badge">audit: ${audit.summary}</span>`);
    if (meta.source) bits.push(`<span class="badge">πηγή layer: ${meta.source}</span>`);
    if (sourceKind === 'generated') bits.push('<div class="minor-note">Το λήμμα προβάλλεται από βασικό generated paradigm. Η κλίση είναι χρήσιμη ως πρόχειρος οδηγός, αλλά δεν έχει ακόμη περάσει πλήρες χειροκίνητο φιλολογικό audit slot-by-slot.</div>');
    if (meta.notes) bits.push(`<div>${meta.notes}</div>`); if (meta.sourceNotes) bits.push(`<div class="minor-note">${meta.sourceNotes}</div>`); lemmaMeta.innerHTML = bits.join(' ');
  }
  function renderLemma(lemma) { updateLemmaMeta(lemma); renderFinite(lemma); renderNonFinite(lemma); }

  function analyzeForm(query) {
    const raw = String(query || '').trim();
    const normalized = normalizeGreek(raw);
    if (!normalized) {
      analyzeStatus.textContent = 'Δώσε έναν τύπο για αναγνώριση.';
      analyzeResults.innerHTML = '<div class="empty-state">Δεν έχει δοθεί τύπος.</div>';
      return;
    }
    const hits = dedupeForms((formIndex[normalized] || []).slice()).sort((a, b) => {
      const pa = a.displayPriority ?? 999, pb = b.displayPriority ?? 999;
      if (pa !== pb) return pa - pb;
      return labelFor(a).localeCompare(labelFor(b), 'el');
    });
    analyzeStatus.textContent = `Αναζήτηση για: ${raw}`;
    if (!hits.length) {
      analyzeResults.innerHTML = `<div class="empty-state">Δεν βρέθηκε αναγνώριση για τον τύπο <strong>${escapeHtml(raw)}</strong>.</div>`;
      return;
    }
    const rows = hits.map(h => `<tr>
      <td>${escapeHtml(h.form || raw)}</td>
      <td>${escapeHtml(h.lemma || '—')}</td>
      <td>${escapeHtml(labelFor(h))}</td>
    </tr>`).join('');
    analyzeResults.innerHTML = `
      <div class="result-count">Βρέθηκαν ${hits.length} αναλύσεις.</div>
      <div class="table-wrap">
        <table class="data-table analysis-table">
          <thead><tr><th>Τύπος</th><th>Λήμμα</th><th>Αναγνώριση</th></tr></thead>
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
  function buildQuestion() {
    if (!classroomTests.length) {
      gameCard.innerHTML = '<div class="empty-state">Δεν υπάρχουν διαθέσιμα δεδομένα παιχνιδιού.</div>';
      return;
    }
    const correct = classroomTests[Math.floor(Math.random() * classroomTests.length)];
    const correctLabel = `${correct.lemma} — ${labelFor(correct)}`;
    const distractors = shuffled(classroomTests.filter(t => t.form !== correct.form || t.lemma !== correct.lemma))
      .map(t => `${t.lemma} — ${labelFor(t)}`)
      .filter((v, i, a) => a.indexOf(v) === i && v !== correctLabel)
      .slice(0, 3);
    const options = shuffled([correctLabel, ...distractors]);
    gameState.current = { form: correct.form, correctLabel, options };
    gameState.answered = false;
    renderQuestion();
  }
  function renderQuestion(selected = null) {
    if (!gameState.current) return;
    const { form, correctLabel, options } = gameState.current;
    const buttons = options.map(opt => {
      let cls = 'game-option';
      if (selected) {
        if (opt === correctLabel) cls += ' correct';
        else if (opt === selected) cls += ' wrong';
      }
      return `<button type="button" class="${cls}" data-option="${escapeHtml(opt)}" ${selected ? 'disabled' : ''}>${escapeHtml(opt)}</button>`;
    }).join('');
    const feedback = selected ? `<div class="game-feedback">${selected === correctLabel ? 'Σωστό.' : `Λάθος. Σωστή απάντηση: ${escapeHtml(correctLabel)}`}</div>` : '';
    gameCard.innerHTML = `
      <div class="game-score">Σκορ: ${gameState.score}/${gameState.total}</div>
      <div class="game-form">${escapeHtml(form)}</div>
      <div class="game-options">${buttons}</div>
      ${feedback}`;
    gameCard.querySelectorAll('.game-option').forEach(btn => btn.addEventListener('click', () => {
      if (gameState.answered) return;
      gameState.answered = true;
      gameState.total += 1;
      if (btn.dataset.option === correctLabel) gameState.score += 1;
      renderQuestion(btn.dataset.option);
    }));
  }

  lemmaSelect.addEventListener('change', () => renderLemma(lemmaSelect.value));
  lemmaSearch.addEventListener('input', () => {
    const q = lemmaSearch.value.trim().toLowerCase();
    const match = lemmaList.find(l => l.toLowerCase().includes(q) || getDisplayLemma(l).toLowerCase().includes(q));
    if (match) { lemmaSelect.value = match; renderLemma(match); }
  });
  analyzeBtn.addEventListener('click', () => analyzeForm(analyzeInput.value));
  analyzeInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') analyzeForm(analyzeInput.value); });
  newQuestionBtn.addEventListener('click', buildQuestion);

  if (lemmaList.length) { lemmaSelect.value = lemmaList[0]; renderLemma(lemmaList[0]); }
  analyzeResults.innerHTML = '<div class="empty-state">Οι αναλύσεις θα εμφανιστούν εδώ.</div>';
  analyzeStatus.textContent = 'Έτοιμο για αναγνώριση.';
  buildQuestion();
})();
