(function () {
  const w = window;
  const root = w.LEXICON_AUGMENT = w.LEXICON_AUGMENT || {};
  root.verbMeta = root.verbMeta || {};
  const manual = w.MANUAL_PARADIGMS = w.MANUAL_PARADIGMS || {};
  const generated = w.GENERATED_PARADIGMS = w.GENERATED_PARADIGMS || {};
  const formIndex = w.FORM_INDEX = w.FORM_INDEX || {};
  const aliases = w.AGVL_SEARCH_ALIASES = w.AGVL_SEARCH_ALIASES || {};

  function normalizeGreek(str) {
    return String(str || '')
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/ς/g, 'σ')
      .replace(/[^\p{L}]/gu, '')
      .toLowerCase();
  }
  function clone(entry, lemma, form) {
    return Object.assign({}, entry, { lemma: lemma || entry.lemma, form: form || entry.form });
  }
  function sig(entry) {
    return [entry.lemma||'', entry.form||'', entry.kind||'', entry.tense||'', entry.voice||'', entry.mood||'', entry.person||'', entry.number||'', entry.gender||'', entry.case||''].join('|');
  }
  function ensureAlias(lemma, value) {
    const bucket = aliases[lemma] = Array.isArray(aliases[lemma]) ? aliases[lemma] : [];
    if (!bucket.includes(value)) bucket.push(value);
  }
  function addEntryToFormIndex(entry) {
    if (!entry || !entry.form) return;
    const key = normalizeGreek(entry.form);
    if (!key) return;
    const bucket = formIndex[key] = Array.isArray(formIndex[key]) ? formIndex[key] : [];
    const entrySig = sig(entry);
    if (!bucket.some(item => sig(item) === entrySig)) bucket.push(entry);
  }
  function upsertManualEntry(lemma, entry) {
    const bucket = manual[lemma] = Array.isArray(manual[lemma]) ? manual[lemma] : [];
    const entrySig = sig(entry);
    if (!bucket.some(item => sig(item) === entrySig)) bucket.push(entry);
    addEntryToFormIndex(entry);
  }

  // Disambiguation labels for the two homographic normalized lemmas.
  root.verbMeta['εἰμί'] = Object.assign({}, root.verbMeta['εἰμί'] || {}, {
    disambiguationHint: 'είμαι'
  });
  root.verbMeta['εἶμι'] = Object.assign({}, root.verbMeta['εἶμι'] || {}, {
    disambiguationHint: 'πορεύομαι'
  });

  // Prevent contracted display collision with ζῶ by keeping ζέω visually distinct.
  if (root.verbMeta['ζέω']) {
    root.verbMeta['ζέω'] = Object.assign({}, root.verbMeta['ζέω'], {
      displayLemma: 'ζέω',
      disambiguationHint: 'βράζω'
    });
  }

  // Complete the school-facing alias layer for ζάω / ζῶ and key principal forms.
  ensureAlias('ζάω', 'ζάω');
  ensureAlias('ζάω', 'ζω');
  ensureAlias('ζάω', 'ἐβίωσα');
  ensureAlias('ζάω', 'ἔζησα');
  ensureAlias('ζῶ', 'ζάω');
  ensureAlias('ζῶ', 'ζω');
  ensureAlias('ζῶ', 'ἐβίωσα');
  ensureAlias('ζῶ', 'ἔζησα');

  const sourceEntries = []
    .concat(Array.isArray(manual['ζῶ']) ? manual['ζῶ'] : [])
    .concat(Array.isArray(generated['ζῶ']) ? generated['ζῶ'] : []);
  const present1 = sourceEntries.find(e => e.form === 'ζῶ' && e.kind === 'finite' && e.mood === 'indicative' && e.tense === 'present' && e.voice === 'active' && e.person === '1sg');
  const futureMid = sourceEntries.find(e => e.form === 'βιώσομαι') || sourceEntries.find(e => e.form === 'ζήσομαι');
  const perfect1 = sourceEntries.find(e => e.form === 'βεβίωκα');

  const additions = [];
  if (present1) {
    additions.push(clone(present1, 'ζῶ', 'ζάω'));
    additions.push(clone(present1, 'ζάω', 'ζάω'));
  }
  additions.push({ lemma: 'ζῶ', form: 'ἔζησα', kind: 'finite', mood: 'indicative', tense: 'aorist', voice: 'active', person: '1sg', number: 'sg' });
  additions.push({ lemma: 'ζάω', form: 'ἔζησα', kind: 'finite', mood: 'indicative', tense: 'aorist', voice: 'active', person: '1sg', number: 'sg' });
  additions.push({ lemma: 'ζῶ', form: 'ἐβίωσα', kind: 'finite', mood: 'indicative', tense: 'aorist', voice: 'active', person: '1sg', number: 'sg' });
  additions.push({ lemma: 'ζάω', form: 'ἐβίωσα', kind: 'finite', mood: 'indicative', tense: 'aorist', voice: 'active', person: '1sg', number: 'sg' });
  if (futureMid) additions.push(clone(futureMid, 'ζάω', futureMid.form));
  if (perfect1) additions.push(clone(perfect1, 'ζάω', 'βεβίωκα'));

  additions.forEach(entry => upsertManualEntry(entry.lemma, entry));
})();
