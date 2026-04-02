(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
{
  "lemma": "φέρω",
  "gloss": "φέρω, υποφέρω, φορώ, βαστώ, οδηγώ",
  "coverage": "manual",
  "source": "05.2-principal-parts+05.1+tzartzanos+binder1",
  "family": "multistem-irregular-active",
  "id": "x101",
  "principalParts": "φέρω, ἤνεγκον (και ἤνεγκα), ἐνήνοχα · φέρομαι, οἴσομαι, ἠνεγκάμην, οἰσθήσομαι / ἐνεχθήσομαι, ἠνέχθην, ἐνήνεγμαι",
  "derivatives": [
    "φορά",
    "φόρος",
    "συμφορά"
  ],
  "sourceNotes": "Το 05.2 Αρχικοί Χρόνοι δίνει το λήμμα φέρω και τη βασική σημασιολογική του περιοχή. Το 05.1 Γραμματική καταγράφει ρητά το β΄ αόριστο ἤνεγκον και τον αττικό αναδιπλασιασμό/παρακείμενο ἐνήνοχα. Ο Τζαρτζάνος δίνει το πλήρες σύστημα των αρχικών χρόνων: φέρω, παρατ. ἔφερον, μέλλ. οἴσω, αόρ. α΄ ἤνεγκα καὶ β΄ ἤνεγκον, παρακμ. ἐνήνοχα, ὑπερσ. ἐνηνόχειν, φέρομαι, παρατ. ἐφερόμην, μέσος μέλλ. οἴσομαι, μέσ. αόρ. ἠνεγκάμην, παθ. μέλλ. οἰσθήσομαι καὶ ἐνεχθήσομαι, παθ. αόρ. ἠνέχθην, παρακμ. ἐνήνεγμαι, ὑπερσ. ἐνηνέγμην. Το Binder1 δίνει αναλυτικά τον β΄ αόριστο ενεργητικής: ἤνεγκον, ἐνέγκω, ἐνέγκοιμι, ἔνεγκε, ἐνεγκεῖν, ἐνεγκών.",
  "notes": "Tranche 68: expanded source-backed multistem paradigm for φέρω. Replaces the older seed paradigm with full present/imperfect active and middle-passive moods, future active and middle with optative, explicit dual passive-future axis (οἰσθησ- / ἐνεχθησ-), β΄ aorist active with moods and α΄-variant indicative anchors, aorist middle and passive school-core layers, conservative perfect/pluperfect active core, safe perfect/pluperfect middle-passive anchors, refreshed infinitives/participles and form-index replacement."
}
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set([...(window.LEXICON_AUGMENT.extraVerbs||[]).map(v => norm(v.lemma)), ...((window.VERB_DATA||[]).map(v => norm(v.lemma)))]);
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
