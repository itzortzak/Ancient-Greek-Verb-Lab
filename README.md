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
