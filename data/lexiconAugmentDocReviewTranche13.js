(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => (v.lemma||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase()));
  const additions = [
    {
      lemma: 'ἁμαρτάνω',
      gloss: 'σφάλλω, αστοχώ, αποτυγχάνω',
      coverage: 'manual',
      source: 'manual-pdf',
      family: 'tan-present',
      id: 'x024',
      principalParts: 'ἁμαρτάνω, ἁμαρτήσομαι, ἥμαρτον, ἡμάρτηκα · παθητ. ἁμαρτάνεται, ἡμαρτήθη, ἡμάρτηται',
      derivatives: ['ἁμαρτία', 'ἁμάρτημα', 'ἁμαρτωλός', 'ἀναμάρτητος'],
      sourceNotes: '05.2 Αρχικοί Χρόνοι, Οικονόμου και Τζαρτζάνος δίνουν ρητά: ἡμάρτανον, ἁμαρτήσομαι, ἥμαρτον, ἡμάρτηκα, καθώς και την απρόσωπη παθητική σειρά ἁμαρτάνεται, ἡμαρτάνετο, ἡμαρτήθη, ἡμάρτηται. Το Binder1 επιβεβαιώνει και τους μη προσωπικούς τύπους ἁμαρτεῖν και ἁμαρτών.',
      notes: 'Από το v1.5.16 το λήμμα διαθέτει χειροκίνητο paradigm με αναλυτική κλίση του ενεργητικού πυρήνα και συντηρητική απρόσωπη παθητική κάλυψη.'
    },
    {
      lemma: 'ἀνύω',
      gloss: 'τελειώνω, κατορθώνω, εκτελώ',
      coverage: 'manual',
      source: 'manual-pdf',
      family: 'y-omega',
      id: 'x025',
      principalParts: 'ἀνύω, ἀνύσω, ἤνυσα, ἤνυκα · παθητ. ἀνύτομαι, ἠνυσάμην, ἠνύσθην, ἤνυσμαι',
      derivatives: ['ἀνυστός'],
      sourceNotes: 'Ο Οικονόμου δίνει ρητά: ἀνύω/ἀνύτω, ἤνυον, ἀνύσω, ἤνυσα, ἤνυκα, ἀνύτομαι, ἠνυσάμην, ἠνύσθην, ἤνυσμαι, καθώς και το ρηματικό επίθετο ἀνυστός. Η παρούσα έκδοση κρατά συντηρητική ανάπτυξη για απαρέμφατα και μετοχές πάνω στον βεβαιωμένο χρονικό πυρήνα.',
      notes: 'Νέο συντηρητικό λήμμα με πλήρη ενεργητικό βασικό κορμό και περιορισμένη μέση/παθητική ανάπτυξη.'
    }
  ];
  for(const item of additions){
    const key=(item.lemma||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase();
    if(!existing.has(key)) window.LEXICON_AUGMENT.extraVerbs.push(item);
  }
})();
