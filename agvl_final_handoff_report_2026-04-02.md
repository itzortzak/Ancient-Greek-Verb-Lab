# AGVL final viewer and audit handoff · 2026-04-02

## Τι ελέγχθηκε

- runtime φόρτωση του bundle: bootstrap + consolidated patch + όλα τα runtime cleanup / consistency patches
- έλεγχος ότι στο τελικό runtime layer δεν απομένει δυϊκός αριθμός
- έλεγχος ότι στο τελικό runtime layer δεν απομένουν base-only μετοχές στα **MANUAL_PARADIGMS**
- έλεγχος συμφωνίας **MANUAL_PARADIGMS / STRICT_AUDIT / SLOT_VALIDATIONS**
- τεχνικός έλεγχος της **viewer.js** για την ενότητα **Κλίση**

## Τι βρέθηκε

1. Η **viewer.js** διάβαζε λανθασμένα το `window.LEXICON_AUGMENT` ως flat λεξικό. Τα πραγματικά μεταδεδομένα λημμάτων βρίσκονται στο nested object `verbMeta`. Αποτέλεσμα: η μπάρα μεταδεδομένων στην Κλίση δεν εμφάνιζε αξιόπιστα **σημασία / αρχικούς χρόνους / κατηγορία / notes** για τα λήμματα.

2. Η λίστα λημμάτων της Κλίσης στηριζόταν μόνο στα `MANUAL_PARADIGMS`, με αποτέλεσμα να μένουν εκτός dropdown τα generated-only λήμματα: θεάομαι, θηράω, οἰκέω, ποιέω, τιμάω, ὑμνέω, ὑπισχνέομαι, φιλέω.

3. Η αναζήτηση της Κλίσης έψαχνε μόνο στο raw lemma και όχι και στο `displayLemma`, άρα ορισμένες κανονικοποιημένες ή συνηρημένες μορφές δεν εντοπίζονταν εύκολα.

## Τι διορθώθηκε

### 1. Διορθώθηκαν τα metadata της Κλίσης
Η Κλίση τραβά πλέον σωστά τα στοιχεία από `LEXICON_AUGMENT.verbMeta`. Εμφανίζονται ξανά:
- σημασία
- αρχικοί χρόνοι
- κατηγορία / family
- audit summary όπου υπάρχει
- notes και sourceNotes

### 2. Ενοποιήθηκε η ορατή λημματική λίστα
Το dropdown και η αναζήτηση της Κλίσης συγχωνεύουν πλέον:
- `MANUAL_PARADIGMS`
- `GENERATED_PARADIGMS`

Για generated-only λήμματα εμφανίζεται ρητή προειδοποίηση ότι η κλίση είναι **βασικό generated paradigm** και όχι πλήρως χειροκίνητα audited layer. Αυτό είναι προτιμότερο από την πλήρη απόκρυψή τους.

### 3. Ενισχύθηκε η αναζήτηση
Η αναζήτηση ελέγχει πλέον και το `displayLemma`, όχι μόνο το canonical lemma key.

## Συνοπτικός πίνακας κατάστασης

| Κατηγορία | Πλήθος |
|---|---:|
| χειροκίνητα / επιμελημένα λήμματα | 98 |
| generated λήμματα συνολικά | 18 |
| generated-only λήμματα | 8 |
| εγγραφές verb metadata | 188 |
| εγγραφές strict audit | 98 |
| εγγραφές slot validations | 105 |
| λήμματα με ενεργό needsAudit στο τελικό runtime layer | 0 |

## Έλεγχος τελικού runtime layer

- δυϊκοί τύποι στο τελικό runtime layer: **0**
- base-only μετοχές στα MANUAL_PARADIGMS: **0**
- mismatch μετρητών μεταξύ MANUAL_PARADIGMS και STRICT_AUDIT: **0**
- λήμματα MANUAL_PARADIGMS χωρίς slot validations: **0**

## Διορθώθηκαν / συμπληρώθηκαν / παραμένουν αβέβαια

| Κατηγορία | Λήμματα / ζήτημα |
|---|---|
| διορθώθηκαν | τεχνικά όλα τα λήμματα της Κλίσης ως προς την ανάγνωση metadata από `verbMeta` |
| συμπληρώθηκαν | ορατή πρόσβαση στην Κλίση για τα generated-only λήμματα **θεάομαι, θηράω, οἰκέω, ποιέω, τιμάω, ὑμνέω, ὑπισχνέομαι, φιλέω** |
| παραμένουν αβέβαια / θέλουν περαιτέρω έλεγχο | τα ίδια τα generated-only λήμματα δεν έχουν ακόμη πλήρες χειροκίνητο philological slot-by-slot audit· η εφαρμογή τα σημειώνει πλέον ρητά ως generated coverage |

## Αρχεία που τροποποιήθηκαν

- `viewer.js`
- `agvl_final_handoff_report_2026-04-02.md`
- `agvl_final_handoff_report_2026-04-02.json`
