(function(){
  window.LEXICON_AUGMENT = window.LEXICON_AUGMENT || {extraVerbs:[], verbMeta:{}};
  window.LEXICON_AUGMENT.extraVerbs = window.LEXICON_AUGMENT.extraVerbs || [];
  window.LEXICON_AUGMENT.verbMeta = window.LEXICON_AUGMENT.verbMeta || {};
  const items = [
  {
    "lemma": "τίκτω",
    "gloss": "γεννώ, τίκτω",
    "coverage": "manual-mixed",
    "source": "05.2-principal-parts+oikonomou+generated-cleanup",
    "family": "irregular-tek-tok",
    "id": "x-stage17-tiktw",
    "principalParts": "τίκτω, τέξομαι / τέξω / τεκοῦμαι, ἔτεξα / ἔτεκον, τέτοκα",
    "sourceNotes": "Το 05.2 Αρχικοί Χρόνοι δίνει ρητά τίκτω, ἔτικτον, τέξομαι / τέξω / τεκοῦμαι, ἔτεξα, ἔτεκον, τέτοκα, ἐτετόκειν και για τη μέση/παθητική σειρά τίκτομαι, ἐτικτόμην, τεχθήσομαι, ἐτεξάμην, ἐτεκόμην. Ο Οικονόμου επιβεβαιώνει τον άξονα τίκτω — τέξομαι — ἔτεξα / ἔτεκον και τη ρίζα τεκ-/τοκ-.",
    "notes": "Stage 17: source-backed promotion with generated paradigm cleanup."
  },
  {
    "lemma": "ἀπόλλυμι",
    "gloss": "αφανίζω, καταστρέφω, χάνω · μέση: χάνομαι, αφανίζομαι",
    "coverage": "manual-mixed",
    "source": "05.2-principal-parts+oikonomou+generated-cleanup",
    "family": "mi-verb-ollymi-compound",
    "id": "x-stage17-apollymi",
    "principalParts": "ἀπόλλυμι / ἀπολλύω, ἀπολῶ, ἀπώλεσα, ἀπολώλεκα · μέση/παθητική: ἀπόλλυμαι, ἀπολοῦμαι, ἀπωλόμην, ἀπόλωλα",
    "sourceNotes": "Το 05.2 Αρχικοί Χρόνοι βεβαιώνει ρητά τον ενεργητικό άξονα ἀπόλλυμι / ἀπολλύω, ἀπώλλυν / ἀπώλλυον, ἀπολῶ, ἀπώλεσα, ἀπολώλεκα, ἀπωλωλέκειν και στη μέση/παθητική φωνή ἀπόλλυμαι, ἀπωλλύμην, ἀπολοῦμαι, ἀπωλόμην, ἀπόλωλα, ἀπωλώλειν. Ο Οικονόμου δίνει το ίδιο σύστημα και το χρησιμοποιεί ως βάση και για το ὄλλυμι.",
    "notes": "Stage 17: source-backed promotion with contracted-future normalization."
  },
  {
    "lemma": "ὄλλυμι",
    "gloss": "καταστρέφω, χάνω · μέση: χάνομαι, καταστρέφομαι",
    "coverage": "manual-mixed",
    "source": "05.2-principal-parts+oikonomou+apollymi-analogy-cleanup",
    "family": "mi-verb-ollymi-simple",
    "id": "x-stage17-ollymi",
    "principalParts": "ὄλλυμι, ὀλῶ, ὤλεσα / ὠλόμην, ὀλώλεκα, ὄλωλα",
    "sourceNotes": "Το 05.2 καταγράφει το ὄλλυμι ως «ἀφανίζω, καταστρέφω». Ο Οικονόμου παραπέμπει ρητά το ὄλλυμι στο ἀπόλλυμι και τεκμηριώνει ιδίως τον παρακείμενο ενεργητικής ὀλώλεκα και τον παρακείμενο της μέσης ὄλωλα. Στο stage 17 η λεπτομερής κλίση αναδομήθηκε με ασφαλή μετασχηματισμό του ίδιου παραδειγματικού συστήματος του ἀπόλλυμι.",
    "notes": "Stage 17: source-backed promotion via simple/compound paradigm alignment."
  },
  {
    "lemma": "ἱκνέομαι",
    "displayLemma": "ἱκνοῦμαι",
    "gloss": "φθάνω, έρχομαι, καταλήγω",
    "coverage": "manual-mixed",
    "source": "oikonomou+05.2-afiknoumai+manual-afikneomai-transform",
    "family": "contracted-epsilon-middle",
    "id": "x-stage17-hikneomai",
    "principalParts": "ἱκνέομαι / ἱκνοῦμαι, ἵξομαι, ἱκόμην, ἷγμαι",
    "sourceNotes": "Ο Οικονόμου παραπέμπει το ἱκνέομαι ρητά στο ἀφικνοῦμαι και συνδέει το θέμα με το ρ. θ. ἱκ-. Το 05.2 βεβαιώνει το (ἀφ)ἱκνοῦμαι = έρχομαι, φθάνω. Στο stage 17 προήχθη manual contracted layer για το απλό λήμμα με μετασχηματισμό του ήδη επιμελημένου bundle του ἀφικνέομαι, ώστε να προβάλλονται μόνο οι συνηρημένοι τύποι.",
    "notes": "Stage 17: contracted-only manual promotion for ἱκνέομαι."
  },
  {
    "lemma": "ἥκω",
    "gloss": "έχω έρθει, είμαι εδώ, φθάνω",
    "coverage": "manual-promoted-meta",
    "source": "05.1-grammar+05.2-principal-parts+oikonomou+existing-manual-layer",
    "family": "perfect-with-present-meaning",
    "id": "x-stage17-heko",
    "principalParts": "ἥκω, ἧκον, ἥξω",
    "sourceNotes": "Το 05.1 παραπέμπει το ἥκω στη γενική κατηγορία των παρακειμένων με σημασία ενεστώτα, το 05.2 δίνει ρητά «ἥκω = έχω έρθει», και ο Οικονόμου καταγράφει ἥκω, ἧκον, ἥξω. Το manual paradigm του λήμματος υπήρχε ήδη στο repo· στο stage 17 προστέθηκε καθαρή σχολική μεταδεδομένη αποτύπωση.",
    "notes": "Stage 17: source-backed lexical rationalization for ἥκω."
  }
];
  function norm(s){ return (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ς/g,"σ").toLowerCase(); }
  const existing = new Map(window.LEXICON_AUGMENT.extraVerbs.map((v,i)=>[norm(v.lemma), i]));
  for(const item of items){
    window.LEXICON_AUGMENT.verbMeta[item.lemma] = Object.assign({}, window.LEXICON_AUGMENT.verbMeta[item.lemma]||{}, item);
    const key = norm(item.lemma);
    if(existing.has(key)) window.LEXICON_AUGMENT.extraVerbs[existing.get(key)] = Object.assign({}, window.LEXICON_AUGMENT.extraVerbs[existing.get(key)]||{}, item);
    else { existing.set(key, window.LEXICON_AUGMENT.extraVerbs.length); window.LEXICON_AUGMENT.extraVerbs.push(item); }
  }
})();
