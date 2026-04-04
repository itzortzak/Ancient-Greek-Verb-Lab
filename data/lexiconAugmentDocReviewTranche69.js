(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
  {
    "lemma": "ἔχω",
    "gloss": "ἔχω, κρατώ, κατέχω, έχω, βρίσκομαι",
    "coverage": "manual",
    "source": "05.2-principal-parts+05.1+tzartzanos+oikonomou+binder1+binder4",
    "family": "multistem-irregular-active-middle",
    "id": "x102",
    "principalParts": "ἔχω, εἶχον, ἕξω καὶ σχήσω, ἔσχον, ἔσχηκα · ἔχομαι, εἰχόμην, ἕξομαι καὶ σχήσομαι, ἐσχόμην, [σχεθήσομαι], [ἐσχέθην], ἔσχημαι, ἐσχήμην",
    "derivatives": [
      "ἕξις",
      "σχῆμα",
      "σχέσις"
    ],
    "sourceNotes": "Το 05.2 Αρχικοί Χρόνοι δίνει ρητά: ἔχω, εἶχον, ἕξω / σχήσω, ἔσχον, ἔσχηκα, ἐσχήκειν· και για τη μέση/παθητική σειρά: ἔχομαι, εἰχόμην, ἕξομαι / σχήσομαι, [σχεθήσομαι], ἐσχόμην, [ἐσχέθην], ἔσχημαι, ἐσχήμην. Το 05.1 Γραμματική καταγράφει ρητά ότι ο β΄ αόριστος ἔσχον σχηματίζει υποτακτική και ευκτική με ανύψωση τόνου, καθώς και προστακτική σχές. Ο Οικονόμου και ο Τζαρτζάνος δίνουν το πλήρες σύστημα: ἔχω, εἶχον, ἕξω και σχήσω, ἔσχον (σχῶ, σχοίην, σχές, σχεῖν, σχών), ἔσχηκα· ἔχομαι, εἰχόμην, ἕξομαι και σχήσομαι, ἐσχόμην (σχῶμαι κτλ.), ἔσχημαι.",
    "notes": "Tranche 69: expanded source-backed multistem paradigm for ἔχω. Adds full present/imperfect active and middle-passive moods, dual future axis ἕξω / σχήσω and ἕξομαι / σχήσομαι with optative coverage, β΄ aorist active and middle with moods, conservative perfect/pluperfect active and middle-passive core, bracketed passive-future/aorist anchors from 05.2, refreshed infinitives/participles and form-index replacement."
  }
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set([...(window.LEXICON_AUGMENT.extraVerbs||[]).map(v => norm(v.lemma)), ...((window.VERB_DATA||[]).map(v => norm(v.lemma)))]);
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
