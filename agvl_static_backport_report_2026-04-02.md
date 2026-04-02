# AGVL v4 static back-port cleanup

Ημερομηνία: 2026-04-02

## Τι έκλεισε
- Έκλεισαν τα runtime partial λήμματα: ἀρέσκω, ἀρκέω, γηράσκω, ὑβρίζω, ἔπειμι, ἄγω, αἱρέω, ἐσθίω, λαγχάνω, κτείνω, ἕπομαι, ὄμνυμι.
- Έγινε static back-port των ήδη audited runtime entries: ἀκούω, προσεύχομαι, πάρειμι, αὐξάνω, ἀγωνίζομαι, ῥήγνυμι, στρώννυμι, συλλέγω, ὑγιαίνω, εὑρίσκω, λείπω, πυνθάνομαι, γράφω, πείθω, ὑπόκειμαι.

## Κύριες παρεμβάσεις
- ενημερώθηκε το `data/manualParadigms.js` με πλήρη static αποκατάσταση του ὄμνυμι,
- ενημερώθηκε το `data/slotValidations.js` με back-filled validation anchors για τα έντεκα manual-only λήμματα,
- ενημερώθηκε το `data/strictAudit.js` ώστε η static βάση να συμφωνεί πλέον με το audited runtime state,
- ενημερώθηκαν τα `data/zzzz_finalConsolidatedPatch_latest.js` και `data/zzzz_finalConsolidatedPatch_v4.js` για τελική σύγκλιση static ↔ runtime.

## Αποτέλεσμα
- totalExtraLemmas: 75
- fullyAudited: 75
- partialOrPending: 0
- manualParadigmLemmas: 75
- slotValidatedLemmas: 72

## Ειδικά για το ὄμνυμι
- static manual forms: 173
- finite: 142
- infinitives: 7
- participles: 24
- slot checks: 24

## Verification
Έγινε syntax check στα ενημερωμένα JS αρχεία και runtime φόρτωση του συνδυασμού `manualParadigms.js + slotValidations.js + strictAudit.js + zzzz_finalConsolidatedPatch_latest.js`. Το αποτέλεσμα δίνει πλέον **κανένα** partial/pending λήμμα.
