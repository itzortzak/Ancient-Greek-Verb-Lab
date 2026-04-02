
## v1.5.99 / completion patch

- Ενεργοποιήθηκε στο runtime το nested package-sync manual layer που υπήρχε ήδη μέσα στο `data/zzzz_finalConsolidatedPatch.js` αλλά δεν συγχωνευόταν στο `window.MANUAL_PARADIGMS`.
- Το λήμμα **ἀγωνίζομαι** περνά πλέον από stale `catalog-only / pending` σε ενεργό manual paradigm με **72** μορφές (**58 finite**, **5 infinitives**, **9 participles**) και αντίστοιχο strict-audit sync.
- Το patch συγχρονίζει γενικά κάθε nested manual paradigm του package-sync object με τα runtime globals και αποτρέπει νέα metadata drift στο strict-audit layer.

## Release note v1.5.98 / tranche 93

Focused package-sync normalization for **ἄημι**.

- Replaced the noisy old **16-form** static payload with the already existing conservative runtime layer from the earlier document-review pass.
- The static package now exposes **ἄημι** consistently as **23 forms** (**11 finite**, **2 infinitives**, **10 participles**), including the added infinitive **ἀήμεναι**, the cleaned **3pl ἄεισι(ν)** tagging, and the explicit imperfect anchors **ἄη / ἄητο**.
- Refreshed the package-level **COMPREHENSIVE_AUDIT** metadata so that static Conjugation and audit tables no longer show the stale pre-sync footprint.

# Ancient Greek Verb Lab

## Release note v1.5.97 / tranche 92

Focused package-sync normalization for **γίνομαι** as alternate lemma entry to the full **γίγνομαι** family. The noisy imported **43-form** alias payload was replaced with a clean static alias layer aligned to the already-complete **γίγνομαι** paradigm, so the package now treats **γίνομαι** as a full school-safe access point to the same principal-part family (**γίγνομαι, γενήσομαι, ἐγενόμην, γεγένημαι / γέγονα**) instead of a malformed partial residue with macron-noise and truncated non-finite coverage.

## v1.5.93

- Νέο tranche 88 για το **ὑβρίζω** ως pass συγχρονισμού πακέτου και οριστικής ευθυγράμμισης των static αρχείων με το ήδη ενεργό curated runtime layer του tranche 16.
- Προστέθηκε τώρα το static per-lemma αρχείο του **ὑβρίζω** και ευθυγραμμίστηκαν τα **lemmaForms.filemap / manifest** με το ενεργό manual layer: **36 finite**, **4 infinitives**, **12 participles** (**52** μορφές συνολικά).
- Διορθώθηκε το package-level audit drift: τα **COMPREHENSIVE_AUDIT.json / md** δεν εμφανίζουν πλέον το λήμμα ως ψευδώς 20-μορφικό partial residue.

## v1.5.92

- Νέο tranche 87 για το **πρόσφημι** ως pass συγχρονισμού πακέτου και οριστικής ευθυγράμμισης των static αρχείων με το ήδη φορτούμενο curated runtime layer.
- Το per-lemma αρχείο του **πρόσφημι** ευθυγραμμίστηκε τώρα με το ενεργό manual paradigm του tranche 35: **36 finite**, **2 infinitives**, **12 participles** (**50** μορφές συνολικά).
- Διορθώθηκε το package-level audit drift: τα **COMPREHENSIVE_AUDIT.json / md** δεν εμφανίζουν πλέον το λήμμα ως ψευδώς 9-μορφικό imperfect-only residue.

## v1.5.91

- Νέο tranche 85 για το **ἁλίσκομαι**.
- Αντικαταστάθηκε το παλαιό sparse tranche 12 με expanded but conservative source-backed layer: πλήρες **present / imperfect middle-passive indicative**, **future middle indicative**, ανανεωμένος **β΄ aorist ἑάλων / ἥλων** με **subjunctive** και **optative** από τον Οἰκονόμου, ρητό **ἁλῶναι / ἁλούς**, και ασφαλή **perfect / pluperfect** anchors **ἑάλωκα / ἥλωκα / ἡλώκειν** με νέο form-index replacement.

## v1.5.89

- Νέο tranche 84 για το **ἵστημι**.
- Προστέθηκε expanded source-backed μι-verb layer με πλήρες **present / imperfect active** και **middle-passive**, **future active / middle / passive** με **optative**, transitive **α΄ aorist ἔστησα**, intransitive **β΄ aorist ἔστην** με moods, **passive aorist ἐστάθην**, conservative **perfect / pluperfect active** core με attested alternants **ἕσταμεν, ἑστᾶσι, ἑστηκέναι, ἑστάναι**, future-perfect anchor **ἑστήξω**, ανανεωμένα **infinitives / participles** και νέο form-index replacement.

## v1.5.88

- Νέο tranche 83 για το ἥκω.
- Προστέθηκε source-backed stative-perfective active paradigm με present-value και imperfect-value layer, future active, aorist active, infinitives, participles και νέο form-index replacement.

## v1.5.87
- Νέο tranche 82 για το **λέγω** με expanded source-backed multistem saying-verb layer: πλήρες **present / imperfect active** και **middle-passive** με εγκλίσεις, dual **future active** axis **λέξω / ἐρῶ**, active aorist με κύριο άξονα **εἶπον** και useful α΄ alternants **εἶπα** μαζί με parallel **ἔλεξα** indicative anchors, dual **future / aorist passive** axes **λεχθήσομαι / ῥηθήσομαι** και **ἐλέχθην / ἐρρήθην**, conservative **perfect / pluperfect** active και middle-passive core με **future perfect εἰρήσομαι**, ανανεωμένα **infinitives / participles** και νέο form-index replacement που αφαιρεί τα legacy generated buckets του λήμματος.

## v1.5.86
- Νέο tranche 81 για το **δείδω** με expanded source-backed defective-fear layer: present-value indicative διπλού άξονα **δέδοικα / δέδια**, ρητούς sparse subjunctive / imperative τύπους από το 05.1, restored imperfect-value εναλλαγές **ἐδεδοίκειν / ἐδεδίειν**, πλήρες **future middle** indicative / optative και πλήρες **aorist active** με moods από το **Binder3**, ανανεωμένα **infinitives / participles** και νέο form-index replacement που αφαιρεί τα speculative generated buckets του λήμματος.

## 1.5.84
- Νέο tranche 79 για το **τίθημι** με expanded source-backed μι-verb layer: πλήρες **present / imperfect active** και **middle-passive**, **future active / middle / passive** με **optative**, **aorist active / middle / passive** με moods, συντηρητικό **perfect / pluperfect** core με τους διπλούς άξονες **τέθηκα / τέθεικα** και **τέθημαι / τέθειμαι**, νέα **infinitives / participles** και νέο form-index replacement που προτάσσει το curated layer στην Αναγνώριση και στην Κλίση.

## v1.5.83
- Νέο tranche 78 για το **ἵημι** με expanded source-backed μι-verb layer: πλήρες **present / imperfect active** και **middle-passive**, **future active / middle / passive** με **optative**, **aorist active / middle / passive** με moods, συντηρητικό **perfect / pluperfect** core, νέα **infinitives / participles** και νέο form-index replacement που προτάσσει το curated layer στην Αναγνώριση και στην Κλίση.

## v1.5.81
- Νέο tranche 76 για το **βιάζομαι** με refreshed source-backed mixed-deponent layer: πλήρες **present middle** με εγκλίσεις, **imperfect middle**, **future middle** και **future passive** πλέον και με **optative** coverage, πλήρες **aorist middle** και **aorist passive** με moods, συντηρητικά **perfect / pluperfect** anchors και νέο **perfect non-finite** core (**βεβιάσθαι, βεβιασμένος** κτλ.), μαζί με νέο form-index replacement που προτάσσει το curated layer στην Αναγνώριση και στην Κλίση.

## v1.5.80
- Νέο tranche 75 για το **οἶδα** με expanded source-backed knowledge-perfect layer: καθαρό present-value school-core system (**οἶδα, οἶσθα, οἶδε, ἴσμεν, ἴστε, ἴσασι(ν)**), restored imperfect-value axis (**ᾔδειν / ᾔδη**, **ᾔδεις / ᾔδησθα** κτλ.), dual future development **εἰδήσω / εἴσομαι**, refreshed infinitives / participles και νέο form-index replacement που απομακρύνει malformed legacy alternants όπως **εἴδομεν**, **οἶδας**, **ἴδμεν**, **ἠείδειν** από την προτεραιότητα Recognition / Conjugation.

## v1.5.79
- Νέο tranche 74 για το **δέδοικα** με expanded source-backed fear-perfect layer: πλήρες perfect-present indicative dual axis (**δέδοικα / δέδια**), ρητούς sparse subjunctive/imperative τύπους του σχολικού πίνακα, restored pluperfect-imperfect alternants (**ἐδεδοίκειν / ἐδεδίειν**), πλήρες future middle indicative/optative και aorist active με moods από το **Binder3**, refreshed infinitives/participles και νέο form-index replacement.

## v1.5.78
- Νέο tranche 73 για το **ἧμαι** με expanded source-backed stative-perfective-present layer: πλήρες present/imperfect indicative με dual και epic παραλλαγές του γ΄ πληθυντικού, συντηρητικούς περιφραστικούς present subjunctive/optative τύπους για την Κλίση, present imperative, απαρέμφατο, μετοχές και νέο form-index replacement που κρατά εκτός Recognition τους πολυλεκτικούς τύπους.

## v1.5.76
- Νέο tranche 71 για το ὑπόκειμαι με expanded source-backed compound-stative layer παράλληλο προς το κεῖμαι: πλήρες present/imperfect indicative, periphrastic + monolexical present subjunctive/optative, present imperative, future middle indicative/optative, ανανεωμένα απαρέμφατα και μετοχές, και form-index replacement που κρατά τους πολυλεκτικούς περιφραστικούς τύπους εκτός Recognition.

## v1.5.75
- Προστέθηκε tranche 70 για το **οἴχομαι** με expanded source-backed stative-deponent layer: full present/imperfect middle with moods, future middle indicative/optative, safe perfect/pluperfect anchors, refreshed infinitives/participles, and form-index replacement.

## v1.5.75 · doc-review tranche 69

Focused pass on **ἔχω**.

- **ἔχω** now has an expanded source-backed multistem layer: full present/imperfect active and middle-passive with moods, dual future active axes **ἕξω / σχήσω**, and dual future middle axes **ἕξομαι / σχήσομαι** with optative coverage.
- The app now gives **ἔχω** a fuller irregular school-core β΄ aorist system: active moods (**ἔσχον, σχῶ, σχοίην, σχές**) and middle moods (**ἐσχόμην, σχῶμαι, σχοίμην, σχοῦ**), together with bracketed passive anchors **σχεθήσομαι** and **ἐσχέθην** from *05.2 Αρχικοί Χρόνοι*.
- Added conservative perfect/pluperfect active and middle-passive core (**ἔσχηκα, ἐσχήκειν, ἔσχημαι, ἐσχήμην**), refreshed infinitives and participles, upgraded strict-audit / slot-validation records, and a new form-index replacement so that the curated ἔχω layer now takes precedence in Recognition and Conjugation.

## v1.5.72 · doc-review tranche 67

Focused pass on **κεῖμαι**.

- **κεῖμαι** now has an expanded source-backed stative-perfective-present layer: full present/imperfect indicative, periphrastic + monolexical present subjunctive and optative, present imperative, and a regular future middle series with optative.
- The app now keeps the school-table distinction between **multiword periphrastics** such as **κείμενος ὦ** / **κείμενος εἴην** and the **monolexical** forms **κέηται, κέησθε, κέωνται, κέοιτο, κέοιντο**.
- Added refreshed infinitives and participles, upgraded strict-audit and slot-validation records, and a new form-index replacement so that the curated κεῖμαι layer now takes precedence in conjugation while keeping multiword periphrastic forms out of Recognition.

## v1.5.69
- Νέο tranche για το μέμνημαι με expanded source-backed memory-perfect layer: διορθωμένοι μονολεκτικοί optative τύποι σε -ῄ-, πλήρης present-value indicative/subjunctive/optative/imperative ανάπτυξη, προσθήκη περιφραστικών subj/optative τύπων στην ενότητα Κλίση, πλήρες imperfect-value pluperfect indicative core και form-index replacement που κρατά εκτός αναγνώρισης τους πολυλεκτικούς τύπους.
## v1.5.68
- Νέο tranche για το δείκνυμι με expanded source-backed school-core layer: πλήρες present/imperfect active και middle/passive κατά το 05.1, future active και middle, passive future, aorist active/middle/passive, conservative perfect-active core, safe perfect/pluperfect middle-passive anchors, νέα απαρέμφατα, μετοχές και form-index replacement για το λήμμα.
## v1.5.67
- Νέο tranche για το ζητέω με contracted school-core layer, conservative perfect/pluperfect core και form-index replacement των malformed generated contracted forms.

- **ῥώννυμι** now has an expanded source-backed school-core layer with full present/imperfect active and middle-passive coverage by the δείκνυμι pattern, future and aorist active, passive future, passive aorist, and safe perfect/pluperfect anchors with the attested special perfect imperative **ἔρρωσο** and participial axis **ἐρρωμένος**.
- **ὁράω** now has an expanded school-core layer with full present/imperfect active and middle-passive coverage, future middle, second aorist active and middle, future passive, passive aorist, new infinitives and participial axes; the pass keeps the competing perfect stems only as source anchors and also repairs the broken tranche-59 form-index patch for **ψαύω**.
- **ψαύω** now has a curated active school-core layer with full present/imperfect/future/aorist active coverage, plus present/future/aorist infinitives and participles; the pass deliberately avoids speculative middle/passive historical expansion and replaces the recognition bucket with the curated manual layer.
- **σκεδάννυμι** now has a curated school-core layer with full present/imperfect active and middle-passive coverage by the δείκνυμι pattern, future active from **σκεδάσω** with conservative anchor **σκεδῶ**, passive future **σκεδασθήσομαι**, aorist active/middle **ἐσκέδασα, ἐσκεδασάμην**, passive aorist **ἐσκεδάσθην**, and safe perfect middle-passive anchors **ἐσκέδασμαι / ἐσκεδάσμην** with source-backed participial layer **σκεδασμένος**.
- **σβέννυμι** now has a curated school-core layer with full present/imperfect active and middle-passive coverage by the δείκνυμι pattern, future active (**σβέσω**), future middle (**σβήσομαι**), future passive (**σβεσθήσομαι**), aorist active/middle (**ἔσβεσα, ἐσβεσάμην**), passive aorist (**ἐσβέσθην**), and conservative anchors for **ἔσβην, ἔσβηκα / ἔσβεσμαι, ἐσβήκειν / ἐσβέσμην**.
## v1.5.66
- Νέο tranche για το ῥώννυμι με expanded source-backed school-core layer: πλήρες present/imperfect ενεργητικής και μέσης-παθητικής κατά το δείκνυμι, future και aorist active, passive future, passive aorist, perfect/pluperfect anchors, νέα απαρέμφατα, μετοχές και form-index replacement για το λήμμα.

## v1.5.65
- Νέο tranche για το ὁράω με expanded school-core layer: present/imperfect active και middle/passive, future middle, β΄ aorist active και middle, future passive, παθητικό αόριστο, απαρέμφατα, μετοχές και repair του broken tranche-59 form-index patch για το ψαύω.

## v1.5.64
- Νέο tranche για το ψαύω με πλήρες active school-core layer: present/imperfect/future/aorist active, non-finite τύποι και form-index replacement για το λήμμα.

## v1.5.20
- Νέο doc-review tranche για **ἀναλίσκω** και **ἀποκρίνομαι** με ενισχυμένη αναλυτική κλίση, απαρέμφατα και μετοχές.
- Νέα slot validations, strict-audit εγγραφές και form-index patches για τα δύο λήμματα.
- Ενημερωμένα per-lemma αρχεία για γρηγορότερη και ακριβέστερη προβολή στην ενότητα «Κλίση».

## Ancient Greek Verb Lab


Added in v1.5.75 (tranche 69)
- New expanded source-backed tranche for **ἔχω**.
- Added full **present / imperfect active** with moods.
- Added full **present / imperfect middle-passive** with moods.
- Added dual **future active** axis (**ἕξω / σχήσω**) and dual **future middle** axis (**ἕξομαι / σχήσομαι**) with optative coverage.
- Added full **β΄ aorist active** and **β΄ aorist middle** with moods.
- Added conservative **perfect / pluperfect active** and **perfect / pluperfect middle-passive** core.
- Added bracketed passive anchors **σχεθήσομαι** and **ἐσχέθην** from *05.2 Αρχικοί Χρόνοι*.
- Refreshed infinitives and participles and added form-index replacement for **ἔχω**.

Current build: 1.5.86

- Fine-grained form-index buckets for faster Recognition loading.
- Chunked quiz pools for lighter first load in Game.
- Per-lemma loading for Conjugation retained.

## v1.5.18
- Νέο document-review tranche για τα αἰσθάνομαι και ἀμύνω.
- Το αἰσθάνομαι αποκτά χειροκίνητο deponent paradigm με present/imperfect, future middle, β΄ aorist middle, singleton perfect/pluperfect, απαρέμφατα και μετοχές.
- Το ἀμύνω αποκτά expanded active / middle-passive manual paradigm με contracted future active, μέση σειρά, νέα απαρέμφατα και μετοχές.

## v1.5.15

- sharded loading για `formIndex` ανά αρχικό γράμμα
- sharded loading για `lemmaForms` ανά αρχικό γράμμα
- compact prebuilt quiz pools ανά επίπεδο
- αφαίρεση των legacy monolithic `formIndex.js` και `lemmaForms.js` από το package

## v1.5.13
- Αφαιρέθηκε το πλαίσιο «Lazy loading ανά ενότητα» από το hero.
- Αφαιρέθηκαν από τη διεπαφή οι ενότητες «Βιβλιοθήκη», «Teacher mode» και «Έλεγχος τάξης».
- Η ενότητα «Πηγές» μετονομάστηκε σε «Βιβλιογραφία» και αποδίδει πλέον βασικές αναφορές σε σύστημα Harvard.
- Προστέθηκαν guards στα event bindings, ώστε η απλοποιημένη διεπαφή να λειτουργεί χωρίς σφάλματα μετά την αφαίρεση των παραπάνω panels.

## v1.5.12
- Performance / UX refactor χωρίς νέο φιλολογικό tranche.
- Αφαιρέθηκε το περιττό hero anchor `#tab-analyze` και αντικαταστάθηκε από πιο ελαφρύ hero state.
- Τα πολύ μεγάλα data files δεν φορτώνονται πλέον όλα στην εκκίνηση: το `formIndex.js` φορτώνεται lazy για Αναγνώριση / Classroom / Quiz και το `lemmaForms.js` lazy για Κλίση / Βιβλιοθήκη.
- Τα μικρότερα data layers ενοποιήθηκαν σε `data/bootstrap.bundle.js`, ώστε να μειωθούν δραστικά τα αρχικά HTTP requests.
- Η Κλίση δεν επιχειρεί πλέον να στήσει dropdown και πίνακες από το πρώτο paint· αρχικοποιείται όταν ανοίγει η αντίστοιχη καρτέλα.
- Το Quiz χρησιμοποιεί πλέον cache ανά επίπεδο και συνδυασμό φίλτρων, ώστε οι επόμενες ερωτήσεις να δίνονται αισθητά γρηγορότερα.

## v1.5.11
- Νέο document-review tranche για τα ἀκούω και ἁλίσκομαι.
- Το ἀκούω αποκτά χειροκίνητο active / middle-passive / passive paradigm με σχολικό μέλλοντα ἀκούσομαι, perfect ἀκήκοα, νέα απαρέμφατα και μετοχές.
- Το ἁλίσκομαι αποκτά συντηρητικό deponent/passive manual paradigm με πλήρες present/imperfect layer, μέλλοντα ἁλώσομαι, β΄ αόριστο ἑάλων και βεβαιωμένους μη προσωπικούς τύπους ἁλῶναι, ἁλούς.

## v1.5.9
- Νέο document-review tranche για τα ψεύδομαι και ψηφίζω.
- Το ψεύδομαι αποκτά πλήρες deponent/passive manual paradigm με present, imperfect, future, aorist, perfect, απαρέμφατα και μετοχές.
- Το ψηφίζω αποκτά expanded active / middle-passive / passive manual paradigm με συνηρημένο μέλλοντα, αόριστο, παρακείμενο, απαρέμφατα και μετοχές.
- Διορθώθηκε και η προτεραιότητα φόρτωσης manual paradigms, ώστε τα νεότερα tranche overrides να υπερισχύουν των seed paradigms του lexiconAugment.

## v1.5.8
- Νέο document-review tranche για τα αἰτιῶμαι και στρώννυμι.
- Το αἰτιῶμαι αποκτά πλήρες συνηρημένο present middle/passive layer, imperfect, future middle, aorist middle, συντηρητικό passive layer και νέους μη προσωπικούς τύπους.
- Το στρώννυμι αποκτά συντηρητικό πολυθεματικό manual layer με present, βεβαιωμένους ιστορικούς χρόνους, perfect / pluperfect, απαρέμφατα και μετοχές.

## v1.5.7
- Νέο document-review tranche για τα ἀρέσκω και γηράσκω.
- Το ἀρέσκω αποκτά χειροκίνητο present/middle system, aorist active και middle, καθώς και μη προσωπικούς τύπους.
- Το γηράσκω αποκτά χειροκίνητο present layer, μέλλοντα μέσης φωνής, αόριστο α΄, συντηρητική καταγραφή του εναλλακτικού αορίστου β΄ ἐγήραν και perfect active layer.

## v1.5.6
- Νέο document-review tranche για το ἀρκέω και ορατή επιβεβαίωση της συνηρημένης προβολής αἰτέω → αἰτῶ.
- Το ἀρκέω περνά σε χειροκίνητο contracted visible paradigm με πεπερασμένους τύπους, απαρέμφατα και μετοχές.
- Προστέθηκαν slot validations και classroom tests για το ἀρκέω.

## v1.5.5
- Νέο document-review tranche για τα αἰτέω και πρόσφημι.
- Το αἰτέω πέρασε σε χειροκίνητο contracted visible paradigm με πεπερασμένους τύπους, απαρέμφατα και μετοχές.
- Το πρόσφημι αναβαθμίστηκε από slots-only σε συντηρητικό manual+slots epic layer, με διορθωμένους imperfect plural tags και το μαρτυρημένο προσφάσθαι.

## v1.5.4
- Νέο document-review tranche για τα αὐξάνω και ὑγιαίνω.
- Προστέθηκαν χειροκίνητα paradigms, απαρέμφατα, μετοχές και slot validations με συντηρητική σχολική τεκμηρίωση.
- Επικαιροποιήθηκε το strict-audit status των δύο λημμάτων.

## v1.5.3
- Νέο document-review tranche για τα ὑβρίζω και ψαύω.
- Προστέθηκαν χειροκίνητα σχολικά paradigms, μη προσωπικοί τύποι και slot validations.
- Επικαιροποιήθηκε το strict-audit status των δύο λημμάτων.


## v1.4.8
- Νέο tranche τεκμηριωτικού ελέγχου και συμπλήρωσης για τα μεταφωνέω, ἀφικνέομαι, ἀποκρίνομαι.
- Προστέθηκαν νέοι non-finite τύποι (απαρέμφατα, μετοχές) και slot validations.
- Η λημματική προβολή των συνηρημένων διατηρείται συνηρημένη.

# Ancient Greek Verb Lab

Version: 1.3.7

Final audit / cleanup pass:
- normalized release metadata to 1.3.7
- corrected visible footer release label
- enriched Sources tab with the uploaded PDF references and the two external grammar sites used during curation
- preserved the existing lexical augmentation and manual paradigms

Package type: static GitHub Pages bundle.


## v1.3.8 strict-audit pass

- Added `data/strictAudit.js` to track the current audit state of all post-core/new lemmas.
- Added `AUDIT_REPORT.md` with a generated inventory of manual forms, infinitives, participles, and slot-validation coverage.
- Updated the Library and Conjugation views to display explicit strict-audit status instead of implying equal philological maturity across all added lemmas.
- This pass is an honest hardening/audit layer; it does **not** claim that exhaustive slot-by-slot manual verification is complete for every new lemma.


## v1.3.9 manual audit tranche

This pass adds real hand-entered audit material for selected new lemmas (δείκνυμι, συλλέγω, ψεύδομαι, ψηφίζω, ζητέω, ῥέω). It does not claim complete slot-by-slot completion for all 23 extra lemmas; instead it raises the audited coverage for a smaller set with explicit manual paradigms and slot validations.


## v1.3.10 contracted-lemma display normalization

- normalized all contracted verb lemmas to appear in contracted display form in the UI
- library cards no longer expose uncontracted citation lemmas in parentheses for contracted verbs
- added display normalization for contracted middle/passive lemmas such as -άομαι, -έομαι, -όομαι
- kept internal lemma keys unchanged for data compatibility and search stability


## v1.4.1 grammar integration tranche

- Προστέθηκε ρητή αναφορά στη Γραμματική Πατάκη ως σχολικό γραμματικό πλαίσιο.
- Προστέθηκε πρώτο grammar-based synthesis tranche για επιλεγμένα λήμματα (αἰτέω, ἀρκέω, ψαύω), με rule-based παραγωγή πολλών πεπερασμένων και μη προσωπικών τύπων από πρότυπα των συνηρημένων και των ρημάτων σε -ω.
- Το tranche αυτό δεν παρουσιάζεται ως πλήρες slot-by-slot audit όλου του corpus.


## Patakis grammar tranche 2
Expanded the grammar-based synthesis layer for regular contracted verbs (ποιέω, φιλέω, ζητέω, οἰκέω, ὑμνέω, τιμάω, θηράω) and added slot validation for a representative subset. This tranche improves finite forms, infinitives, and participial coverage, but it is not yet a final universal manual audit for every non-core lemma.


## v1.4.3
- Προστέθηκε νέο Patakis override layer για συνηρημένα και αποθετικά συνηρημένα ρήματα.
- Διορθώθηκαν προβληματικοί generated contracted τύποι για επιλεγμένα λήμματα (π.χ. τιμάω, ποιέω, ζητέω, οἰκέω, ὑμνέω, θηράω).
- Προστέθηκαν νέα curated generated paradigms και slot validations για αἰτιῶμαι και ἀφικνέομαι, καθώς και νέο override tranche για θεάομαι και ὑπισχνέομαι.


## v1.4.3
- Added a second Patakis-based audit tranche for semi-regular non-contracted verbs and one deponent.
- Added curated generated paradigms and slot validations for ψαύω, ψηφίζω, ψεύδομαι, ῥίπτω, ὑβρίζω.
- This tranche strengthens finite, infinitive, and participial coverage without claiming full universal manual completion for every imported lemma.


## v1.4.5 strict manual tranche

This tranche advances six difficult extra lemmas with real hand-entered paradigm material and explicit slot validations: ῥέω, ῥήγνυμι, ῥώννυμι, ῥύομαι, οἴχομαι, βιάζομαι. It is still not presented as a universal closure of the whole extended corpus; it is a targeted stricter pass on high-friction lemmas.


## v1.4.6 comprehensive structural audit

This pass adds a package-level structural audit generated from the actual data files. It does **not** claim universal philological completion for every lemma. It records that all lemmas currently have at least some forms, while identifying the small set of low-coverage lemmas that still need the strictest manual review. See `COMPREHENSIVE_AUDIT.md` and `COMPREHENSIVE_AUDIT.json`.


## v1.4.7
- Στοχευμένη κανονικοποίηση συνηρημένου λήμματος: μεταφωνέω → μεταφωνῶ στην προβολή του UI.


## v1.4.9 — low-coverage document-review tranche
- Added conservative manual/document-review layer for ἄημι, νήθω, βάσκω, ἧμαι.
- Added slot-validation-only review for πρόσφημι.
- Cleaned low-coverage imperative-only and irregular entries without claiming full exhaustive closure.


## v1.5.1 — deponent medium-coverage document-review tranche
- Added a stricter manual/document-review layer for βούλομαι, δύναμαι, μάχομαι, πορεύομαι.
- Added explicit slot validations for the same four lemmas.
- This tranche raises finite, infinitive, and participial coverage for medium-low deponent lemmas without claiming total final closure of every rare slot in the whole corpus.


## v1.5.2
- Ορατή κανονικοποίηση του λήμματος αἰτιῶμαι σε όλα τα εμφανή σημεία της διεπαφής και των παιδαγωγικών σημειώσεων.
- Η μορφή αἰτιάομαι διατηρείται μόνο ως εσωτερικό alias αναζήτησης.


## v1.5.10 · doc-review tranche 11

Focused pass on **ῥίπτω** with new manual present/imperfect active and middle-passive layer, future in middle form according to the school table, passive series, infinitives, participles, slot validations and classroom checks. This tranche also strengthens slot validation for **δείκνυμι** and **συλλέγω** without replacing their existing conservative manual paradigms.

## v1.5.16 · doc-review tranche 13

Focused pass on **ἁμαρτάνω** and **ἀνύω**.

- **ἁμαρτάνω** now has a manual present/imperfect active layer, future in middle form (**ἁμαρτήσομαι**), second aorist (**ἥμαρτον**), perfect (**ἡμάρτηκα**), attested infinitives/participles (**ἁμαρτεῖν**, **ἁμαρτών**) and a conservative impersonal passive series (**ἁμαρτάνεται**, **ἡμαρτήθη**, **ἡμάρτηται**).
- **ἀνύω** now has a conservative manual active core with attested historical forms (**ἤνυον, ἀνύσω, ἤνυσα, ἤνυκα**) plus documented passive/middle points (**ἀνύτομαι, ἠνυσάμην, ἠνύσθην, ἤνυσμαι**), along with a limited non-finite layer.
- Added slot validations, strict-audit entries and analyze-index support for the newly introduced **ἀνύω** forms.


## v1.5.70 · doc-review tranche 65

Focused pass on **συλλέγω**.

- **συλλέγω** now has an expanded source-backed compound-irregular layer: full present/imperfect active and middle/passive with moods, future active and middle with optative, aorist active and middle with moods, and upgraded non-finite coverage.
- The app now keeps explicit **alpha/beta passive** support for **συλλεχθήσομαι / συλλεγήσομαι** and **συνελέχθην / συνελέγην**, while using a fuller school-core conjugation axis for the beta passive series.
- Added slot validations, strict-audit upgrade, lemma metadata refresh, and a new form-index replacement so that the curated layer now takes precedence in recognition and conjugation.


## v1.5.77 — tranche 72
- Added expanded source-backed stative-perfective-present layer for κάθημαι based on 05.1 ΓΡΑΜΜΑΤΙΚΗ and 05.2 Αρχικοί Χρόνοι.
- Added full present/imperfect indicative, present subjunctive/optative/imperative, regular future indicative with explicit secondary axis καθεδοῦμαι, passive aorist with moods, refreshed infinitives/participles, and form-index replacement for κάθημαι.


## v1.5.82 — tranche 77
- Added expanded source-backed perfect-present layer for **ἔοικα** based on Binder3, Οικονόμου, and the principal-part confirmation of **εἴκω Β** in 05.2 Αρχικοί Χρόνοι.
- Added full present-value indicative/subjunctive/optative, imperfect-value pluperfect indicative, two infinitive variants (**εἰκέναι / ἐοικέναι**), two participial series (**εἰκώς / ἐοικώς**), and form-index replacement so the curated layer now takes precedence in recognition and conjugation.


## v1.5.85 — tranche 80
- Added expanded source-backed contracted layer for **αἰτέω** based on 05.2 Αρχικοί Χρόνοι, 05.1 ΓΡΑΜΜΑΤΙΚΗ, and Binder4.
- Added full present/imperfect active and middle/passive with moods, future active and future middle with optative, α΄ aorist active, passive aorist with moods, conservative perfect/pluperfect indicative core, refreshed infinitives/participles, and form-index replacement so the curated layer now takes precedence in recognition and conjugation.

## v1.5.91 tranche 86

Focused refresh for **οἴχομαι**.

- Reinstated the full curated **present / imperfect / future middle** layer already supported by the school-grammar sources, including the analogical **subjunctive / optative / imperative** rows used by the app’s conjugation view.
- Kept the package philologically conservative by adding only **safe principal-part anchors** for the perfect/pluperfect layer (**οἴχημαι, οἴχωκα, ᾢχηκα, ᾠχήμην, οἰχώκειν, ᾠχήκειν**).
- Refreshed the **strict-audit**, **slot-validation**, **lexicon metadata**, and **form-index replacement** so that the updated curated layer is preferred consistently in Recognition and Conjugation.

## v1.5.94 tranche 89

Focused package-sync refresh for **συλλέγω**.

- Added the missing static per-lemma payload for the already active advanced source-backed **συλλέγω** layer from tranche 65.
- Synchronized **lemmaForms.filemap / manifest** and the package-level **COMPREHENSIVE_AUDIT** metadata with the runtime layer now used by Recognition and Conjugation.
- The package now exposes **συλλέγω** consistently as **212 forms** (**174 finite**, **8 infinitives**, **30 participles**), including the expanded present/imperfect, future active and middle, aorist active and middle, and both passive series (**συλλεχθήσομαι / συλλεγήσομαι**, **συνελέχθην / συνελέγην**).

## v1.5.99 tranche 94

Focused package-sync refresh for **νήθω**.

- Replaced the stale static per-lemma payload for **νήθω** with the already active tranche-39 curated runtime layer.
- Synchronized the package-level **COMPREHENSIVE_AUDIT** metadata so Recognition and Conjugation expose the same package footprint now used at runtime.
- The package now exposes **νήθω** consistently as **54 forms** (**50 finite**, **1 infinitive**, **3 participles**), including the corrected iterative imperfect tagging and the regularized active present system with moods.
