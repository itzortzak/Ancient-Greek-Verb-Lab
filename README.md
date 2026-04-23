# Ancient Greek Verb Lab

Έκδοση έτοιμη για αποθετήριο GitHub / GitHub Pages.

## Δομή πακέτου
- `index.html` στη ρίζα του αποθετηρίου
- `style.css` στη ρίζα
- `viewer.js` στη ρίζα
- `data/` με όλα τα ενεργά bundles και τα Kalos finite shards
- `.nojekyll` για συμβατότητα με GitHub Pages

## Χρήσιμη σημείωση για το upload
Το μεγάλο bundle `generatedParadigmsKaikkiStage3` έχει ήδη σπάσει σε 4 επιμέρους αρχεία (`part01`–`part04`) ώστε η έκδοση να είναι πιο φιλική για upload στο GitHub.

## Προτεινόμενος τρόπος ανεβάσματος
Η πιο καθαρή λύση είναι να βάλεις τα περιεχόμενα αυτού του πακέτου στη ρίζα ενός τοπικού clone του αποθετηρίου και να κάνεις commit / push.

## Τι περιλαμβάνει αυτή η έκδοση
- τη σταθεροποιημένη βάση AGVL της 2026-04-17
- το πλήρες Kalos finite import και τα cleanup passes της 2026-04-22
- το final locked Kalos finite layer
- το non-destructive quantity display normalization της 2026-04-23

Η κανονικοποίηση quantity marks εφαρμόζεται μόνο στο display layer. Το raw Kalos finite dataset παραμένει αμετάβλητο.
