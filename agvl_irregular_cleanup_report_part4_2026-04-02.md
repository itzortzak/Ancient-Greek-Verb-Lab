# Ancient Greek Verb Lab — Irregular cleanup pass 4 (2026-04-02)
## Σύνοψη
- Στοχευμένα λήμματα: **4**
- Duplicate visible slot-groups πριν από το pass: **268**
- Visible entries μετά το cleanup: **1511**
- Entries που διατηρήθηκαν μόνο για Recognition: **536**
- Νέες recognition-only προσθήκες: **0**

## Πίνακας κατάστασης

| Κατηγορία | Λήμματα |
|---|---|
| διορθώθηκαν / κανονικοποιήθηκαν | μίγνυμι, ἔχω, πήγνυμι, σβέννυμι |
| ελέγχθηκαν / συμπληρώθηκαν χωρίς visible cleanup | — |
| παραμένουν αβέβαια / θέλουν περαιτέρω έλεγχο | — |

## μίγνυμι

- Κατάσταση: **corrected+normalized**
- Αρχικά visible/manual entries: **464**
- Visible entries μετά το pass: **368**
- Duplicate visible slot-groups πριν από το pass: **96**
- Recognition-only demotions: **192**
- Recognition-only additions: **0**
- Πηγές / βάση ελέγχου: 05.2 Αρχικοί Χρόνοι, Binder1, Οἰκονόμου
- Τι βρέθηκε: Στο visible layer υπήρχαν διπλές σειρές για τον παθητικό μέλλοντα και τον παθητικό αόριστο, επειδή συνυπήρχαν οι α΄-τύποι μειχθήσομαι / ἐμείχθην και οι β΄-τύποι μιγήσομαι / ἐμίγην σε όλους σχεδόν τους finite, infinitive και participial slots.
- Τι διορθώθηκε: Οι δύο τεκμηριωμένοι άξονες διατηρήθηκαν ορατά, αλλά συμπιέστηκαν slot-by-slot ως μειχθήσομαι / μιγήσομαι, ἐμείχθην / ἐμίγην κτλ., ενώ τα μεμονωμένα παλιά entries πέρασαν στο recognition-only layer.

## ἔχω

- Κατάσταση: **corrected+normalized**
- Αρχικά visible/manual entries: **514**
- Visible entries μετά το pass: **428**
- Duplicate visible slot-groups πριν από το pass: **86**
- Recognition-only demotions: **172**
- Recognition-only additions: **0**
- Πηγές / βάση ελέγχου: Οἰκονόμου, 05.2 Αρχικοί Χρόνοι
- Τι βρέθηκε: Το visible layer έδειχνε σε ξεχωριστές γραμμές τον διπλό μέλλοντα ἕξω και σχήσω, καθώς και τον μέσο μέλλοντα ἕξομαι και σχήσομαι, με αποτέλεσμα εκτεταμένο duplicate cluster και στους future infinitives και participles.
- Τι διορθώθηκε: Κρατήθηκαν ορατά και οι δύο σοβαρά τεκμηριωμένοι άξονες, αλλά ενοποιήθηκαν ως ἕξω / σχήσω, ἕξομαι / σχήσομαι, ἕξειν / σχήσειν, ἕξων / σχήσων κτλ. Τα παλαιά χωριστά entries μεταφέρθηκαν στο recognition-only layer.

## πήγνυμι

- Κατάσταση: **corrected+normalized**
- Αρχικά visible/manual entries: **377**
- Visible entries μετά το pass: **323**
- Duplicate visible slot-groups πριν από το pass: **54**
- Recognition-only demotions: **108**
- Recognition-only additions: **0**
- Πηγές / βάση ελέγχου: Οἰκονόμου, Τζαρτζάνος, Binder1
- Τι βρέθηκε: Παρέμεναν visible duplicates ανάμεσα στον β΄ παθητικό άξονα παγήσομαι / ἐπάγην και στην παράλληλη σειρά ἐπήχθην με τις αναλογικές της αναπτύξεις, καθώς και διτυπία στο 1sg του παρατατικού ἐπήγνυν / ἐπήγνυον.
- Τι διορθώθηκε: Η visible κλίση κρατήθηκε χωρίς απώλεια υλικού, αλλά συμπιέστηκε slot-by-slot: ἐπήγνυν / ἐπήγνυον και ἐπήχθην / ἐπάγην, πηχθῶ / παγῶ, πηχθῆναι / παγῆναι κτλ. Τα χωριστά legacy entries πέρασαν στο recognition-only layer.

## σβέννυμι

- Κατάσταση: **corrected+normalized**
- Αρχικά visible/manual entries: **424**
- Visible entries μετά το pass: **392**
- Duplicate visible slot-groups πριν από το pass: **32**
- Recognition-only demotions: **64**
- Recognition-only additions: **0**
- Πηγές / βάση ελέγχου: Τζαρτζάνος, 05.2 Αρχικοί Χρόνοι
- Τι βρέθηκε: Στο visible layer συνυπήρχε ο α΄ αόριστος ἔσβεσα με τον β΄ ἔσβην, μαζί με διπλές infinitive και participial σειρές σβέσαι / σβῆναι και σβέσας / σβὰς κτλ.
- Τι διορθώθηκε: Δεν αφαιρέθηκε κανένας τεκμηριωμένος τύπος. Ο ορατός άξονας ενοποιήθηκε ως ἔσβεσα / ἔσβην, σβέσαι / σβῆναι, σβέσας / σβὰς κτλ., ενώ τα παλαιά χωριστά entries διατηρήθηκαν για recognition-only χρήση.

## Παρατηρήσεις

- Το pass αυτό δούλεψε πάνω στο ήδη patched app και έσβησε τα μεγάλα duplicate clusters του runtime manual layer χωρίς να αφαιρέσει τεκμηριωμένο υλικό.
- Όπου υπήρχαν δύο σοβαρά τεκμηριωμένοι άξονες, αυτοί δεν απορρίφθηκαν· ενώθηκαν στην ίδια visible γραμμή με `/`.
- Δεν προστέθηκαν speculative νέοι χρόνοι ή νέες ανώμαλες σειρές.