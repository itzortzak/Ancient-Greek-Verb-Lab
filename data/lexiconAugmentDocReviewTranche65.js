(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  const items = [
{
  "lemma": "συλλέγω",
  "gloss": "συγκεντρώνω, συλλέγω",
  "coverage": "manual",
  "source": "05.2-principal-parts+oikonomou+05.1-passive-example",
  "family": "compound-irregular",
  "id": "x098",
  "principalParts": "συλλέγω, συνέλεγον, συλλέξω, συνέλεξα, συνείλοχα, συνειλόχειν · μ/π συλλέγομαι, συνελεγόμην, συλλέξομαι, συνελεξάμην, συλλεχθήσομαι/συλλεγήσομαι, συνελέχθην/συνελέγην, συνείλεγμαι/συλλέλεγμαι",
  "derivatives": [
    "σύλλογος",
    "συλλογή",
    "συλλεκτικός",
    "συλλέκτης"
  ],
  "sourceNotes": "Το 05.2 Αρχικοί Χρόνοι δίνει ρητά για το συλλέγω τους άξονες συλλέξω, συνέλεξα, συνείλοχα και στην μέση/παθητική συλλέξομαι, συνελεξάμην, συλλεχθήσομαι, συλλεγήσομαι, συνελέχθην, συνελέγην, συνείλεγμαι / συλλέλεγμαι. Ο Οικονόμου επιβεβαιώνει την ίδια εικόνα και σημειώνει ρητά ότι το σύνθετο έχει παθητικό αόριστο α΄ συνελέχθην και β΄ συνελέγην. Το 05.1 Γραμματική χρησιμοποιεί επίσης το συλλέγομαι → συνελέγην ως τυπικό παράδειγμα του παθητικού αορίστου β΄.",
  "notes": "Tranche 65: νέο expanded source-backed compound-irregular layer για το συλλέγω. Το παλαιότερο tranche-16 indicative/non-finite layer αντικαθίσταται από πληρέστερο school-core paradigm: πλήρες present/imperfect active και middle/passive με εγκλίσεις, future active και middle με optative, aorist active και middle με εγκλίσεις, β΄ passive series με εγκλίσεις, ρητή διατήρηση των alpha/beta passive indicative σειρών, νέα non-finite coverage και form-index replacement για το λήμμα."
}
];
  const norm = s => (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ς/g,'σ').toLowerCase();
  const existing = new Set(window.LEXICON_AUGMENT.extraVerbs.map(v => norm(v.lemma)));
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  for(const item of items){ window.LEXICON_AUGMENT.verbMeta[item.lemma] = item; if(!existing.has(norm(item.lemma))) window.LEXICON_AUGMENT.extraVerbs.push(item); }
})();
