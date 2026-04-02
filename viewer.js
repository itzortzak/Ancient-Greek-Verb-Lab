(function () {
  const MOOD_ORDER = ['indicative', 'subjunctive', 'optative', 'imperative'];
  const MOOD_LABELS = {
    indicative: 'Οριστική',
    subjunctive: 'Υποτακτική',
    optative: 'Ευκτική',
    imperative: 'Προστακτική',
    infinitive: 'Απαρέμφατο',
    participle: 'Μετοχή'
  };
  const TENSE_ORDER = ['present', 'imperfect', 'future', 'aorist', 'perfect', 'pluperfect'];
  const TENSE_LABELS = {
    present: 'Ενεστώτας',
    imperfect: 'Παρατατικός',
    future: 'Μέλλοντας',
    aorist: 'Αόριστος',
    perfect: 'Παρακείμενος',
    pluperfect: 'Υπερσυντέλικος'
  };
  const VOICE_ORDER = ['active', 'middle', 'passive', 'middle/passive'];
  const VOICE_LABELS = {
    active: 'Ενεργητική',
    middle: 'Μέση',
    passive: 'Παθητική',
    'middle/passive': 'Μέση / Παθητική'
  };
  const PERSON_ROWS = [
    ['sg','1sg','α΄ ενικό'],
    ['sg','2sg','β΄ ενικό'],
    ['sg','3sg','γ΄ ενικό'],
    ['du','2du','β΄ δυϊκό'],
    ['du','3du','γ΄ δυϊκό'],
    ['pl','1pl','α΄ πληθυντικό'],
    ['pl','2pl','β΄ πληθυντικό'],
    ['pl','3pl','γ΄ πληθυντικό']
  ];
  const CASE_ORDER = ['nom', 'gen', 'dat', 'acc', 'voc'];
  const CASE_LABELS = { nom: 'Ονομαστική', gen: 'Γενική', dat: 'Δοτική', acc: 'Αιτιατική', voc: 'Κλητική' };
  const GENDER_ORDER = ['masc', 'fem', 'neut'];
  const GENDER_LABELS = { masc: 'Αρσενικό', fem: 'Θηλυκό', neut: 'Ουδέτερο' };
  const NUMBER_LABELS = { sg: 'εν.', du: 'δυ.', pl: 'πλ.' };

  const lexicon = window.LEXICON_AUGMENT || {};
  const paradigms = window.MANUAL_PARADIGMS || {};
  const lemmaSelect = document.getElementById('lemmaSelect');
  const lemmaSearch = document.getElementById('lemmaSearch');
  const lemmaMeta = document.getElementById('lemmaMeta');
  const finiteSection = document.getElementById('finiteSection');
  const nonFiniteSection = document.getElementById('nonFiniteSection');

  const lemmaList = Object.keys(paradigms).sort((a,b)=>a.localeCompare(b,'el'));
  for (const lemma of lemmaList) {
    const opt = document.createElement('option');
    opt.value = lemma;
    opt.textContent = lemma;
    lemmaSelect.appendChild(opt);
  }

  function normalizePerson(number, person) {
    if (number === 'pl' && person === '1sg') return '1pl';
    if (number === 'pl' && person === '2sg') return '2pl';
    if (number === 'pl' && person === '3sg') return '3pl';
    return person;
  }

  function dedupeForms(forms) {
    const seen = new Set();
    return forms.filter(f => {
      const key = JSON.stringify(f);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function getFiniteForms(lemma) {
    return dedupeForms((paradigms[lemma] || []).filter(x => x.kind === 'finite'));
  }

  function getNonFiniteForms(lemma) {
    return dedupeForms((paradigms[lemma] || []).filter(x => x.kind !== 'finite'));
  }

  function collectCellForms(forms, number, person) {
    const targetPerson = normalizePerson(number, person);
    const hits = forms.filter(f => f.number === number && normalizePerson(f.number, f.person) === targetPerson).map(f => f.form);
    return [...new Set(hits)];
  }

  function renderFinite(lemma) {
    const finite = getFiniteForms(lemma);
    finiteSection.innerHTML = '';

    for (const mood of MOOD_ORDER) {
      const moodForms = finite.filter(f => f.mood === mood);
      if (!moodForms.length) continue;

      const moodBlock = document.createElement('section');
      moodBlock.className = 'mood-block';
      moodBlock.innerHTML = `<h2 class="mood-title">${MOOD_LABELS[mood]}</h2>`;

      for (const tense of TENSE_ORDER) {
        const tenseForms = moodForms.filter(f => f.tense === tense);
        if (!tenseForms.length) continue;

        const tenseBlock = document.createElement('div');
        tenseBlock.className = 'tense-block';
        tenseBlock.innerHTML = `<h3 class="tense-title">${TENSE_LABELS[tense]}</h3>`;

        const voiceGrid = document.createElement('div');
        voiceGrid.className = 'voice-grid';

        for (const voice of VOICE_ORDER) {
          const voiceForms = tenseForms.filter(f => f.voice === voice);
          if (!voiceForms.length) continue;

          const voiceCard = document.createElement('div');
          voiceCard.className = 'voice-card';
          const rows = PERSON_ROWS.map(([number, person, label]) => {
            const cellForms = collectCellForms(voiceForms, number, person);
            return `<tr><th scope="row">${label}</th><td class="${cellForms.length ? '' : 'empty'}">${cellForms.length ? cellForms.join(' · ') : '—'}</td></tr>`;
          }).join('');

          voiceCard.innerHTML = `
            <h4>${VOICE_LABELS[voice] || voice}</h4>
            <div class="table-wrap">
              <table class="data-table">
                <tbody>${rows}</tbody>
              </table>
            </div>
          `;
          voiceGrid.appendChild(voiceCard);
        }

        tenseBlock.appendChild(voiceGrid);
        moodBlock.appendChild(tenseBlock);
      }

      finiteSection.appendChild(moodBlock);
    }
  }

  function renderInfinitives(nonFinite) {
    const infinitives = nonFinite.filter(f => f.kind === 'infinitive');
    if (!infinitives.length) return '';
    const grouped = {};
    for (const f of infinitives) {
      const key = `${f.tense}|${f.voice}`;
      grouped[key] = grouped[key] || [];
      grouped[key].push(f.form);
    }
    const rows = Object.entries(grouped)
      .sort((a,b)=> TENSE_ORDER.indexOf(a[0].split('|')[0]) - TENSE_ORDER.indexOf(b[0].split('|')[0]))
      .map(([key, forms]) => {
        const [tense, voice] = key.split('|');
        return `<tr><th scope="row">${TENSE_LABELS[tense]} · ${VOICE_LABELS[voice] || voice}</th><td>${[...new Set(forms)].join(' · ')}</td></tr>`;
      }).join('');
    return `<div class="voice-card"><h3 class="subtle-title">Απαρέμφατα</h3><div class="table-wrap"><table class="data-table"><tbody>${rows}</tbody></table></div></div>`;
  }

  function renderParticiples(nonFinite) {
    const participles = nonFinite.filter(f => f.kind === 'participle');
    if (!participles.length) return '';
    const blocks = [];
    const tenseVoiceKeys = [...new Set(participles.map(f => `${f.tense}|${f.voice}`))]
      .sort((a,b)=> TENSE_ORDER.indexOf(a.split('|')[0]) - TENSE_ORDER.indexOf(b.split('|')[0]));

    for (const key of tenseVoiceKeys) {
      const [tense, voice] = key.split('|');
      const forms = participles.filter(f => `${f.tense}|${f.voice}` === key);
      let body = '';
      for (const gender of GENDER_ORDER) {
        for (const number of ['sg','du','pl']) {
          for (const kase of CASE_ORDER) {
            const hits = forms.filter(f => f.gender === gender && f.number === number && f.case === kase).map(f => f.form);
            if (!hits.length) continue;
            body += `<tr><th scope="row">${GENDER_LABELS[gender]} ${NUMBER_LABELS[number]} · ${CASE_LABELS[kase]}</th><td>${[...new Set(hits)].join(' · ')}</td></tr>`;
          }
        }
      }
      blocks.push(`
        <div class="voice-card">
          <h4>${TENSE_LABELS[tense]} · ${VOICE_LABELS[voice] || voice}</h4>
          <div class="table-wrap"><table class="data-table"><tbody>${body || '<tr><td class="empty">—</td></tr>'}</tbody></table></div>
        </div>
      `);
    }
    return `<section class="mood-block"><h2 class="mood-title">Μετοχές</h2><div class="nonfinite-grid">${blocks.join('')}</div></section>`;
  }

  function renderNonFinite(lemma) {
    const nonFinite = getNonFiniteForms(lemma);
    nonFiniteSection.innerHTML = '';
    const infHtml = renderInfinitives(nonFinite);
    if (infHtml) {
      const block = document.createElement('section');
      block.className = 'mood-block';
      block.innerHTML = `<h2 class="mood-title">Απαρέμφατα</h2><div class="nonfinite-grid">${infHtml}</div>`;
      nonFiniteSection.appendChild(block);
    }
    const partHtml = renderParticiples(nonFinite);
    if (partHtml) {
      nonFiniteSection.insertAdjacentHTML('beforeend', partHtml);
    }
  }

  function updateLemmaMeta(lemma) {
    const meta = lexicon[lemma] || {};
    const bits = [];
    if (meta.gloss) bits.push(`<span class="badge">σημασία: ${meta.gloss}</span>`);
    if (meta.principalParts) bits.push(`<span class="badge">αρχικοί χρόνοι: ${meta.principalParts}</span>`);
    if (meta.family) bits.push(`<span class="badge">κατηγορία: ${meta.family}</span>`);
    if (meta.notes) bits.push(`<div>${meta.notes}</div>`);
    lemmaMeta.innerHTML = bits.join(' ');
  }

  function renderLemma(lemma) {
    updateLemmaMeta(lemma);
    renderFinite(lemma);
    renderNonFinite(lemma);
  }

  lemmaSelect.addEventListener('change', () => renderLemma(lemmaSelect.value));
  lemmaSearch.addEventListener('input', () => {
    const q = lemmaSearch.value.trim().toLowerCase();
    const match = lemmaList.find(l => l.toLowerCase().includes(q));
    if (match) {
      lemmaSelect.value = match;
      renderLemma(match);
    }
  });

  lemmaSelect.value = lemmaList[0];
  renderLemma(lemmaList[0]);
})();
