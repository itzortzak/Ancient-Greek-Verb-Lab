window.EXTERNAL_SOURCES = [
  {
    "id": "greek-conjugator-js",
    "name": "greek-conjugator-js",
    "status": "integrated",
    "role": "Κύριο τοπικό layer κλίσης",
    "scope": "Πλήρη imported paradigms για τα λήμματα που χαρτογραφήθηκαν με ασφάλεια.",
    "integration": "Ενσωματώθηκε άμεσα στη static έκδοση της εφαρμογής.",
    "license": "MIT (στο uploaded snapshot)",
    "notes": "Χρησιμοποιείται για αναγνώριση τύπων, κλίση και μεγάλο μέρος του quiz."
  },
  {
    "id": "digital-gr",
    "name": "digital-gr",
    "status": "integrated-partial",
    "role": "Παιδαγωγικό layer εξάσκησης",
    "scope": "Η λογική των βαθμίδων άσκησης και της παραγωγής ερωτήσεων ενσωματώθηκε ως σχεδιαστικό πρότυπο.",
    "integration": "Έχει ενσωματωθεί μερικώς σε didactic workflows και structure του quiz.",
    "license": "Δεν εντοπίστηκε σαφές license file στο uploaded snapshot",
    "notes": "Η εφαρμογή το αξιοποιεί ως didactic reference, όχι ως κύρια βάση κλίσης."
  },
  {
    "id": "diogenes-morpheus",
    "name": "Diogenes / Morpheus compatibility",
    "status": "integrated-reference",
    "role": "Compatibility και τεκμηρίωση morphology backend",
    "scope": "Προστέθηκε source catalog, integration notes και συμβατή δομή για μελλοντικό Morpheus/Diogenes import.",
    "integration": "Υπάρχει πλέον ενεργή reference-level ενσωμάτωση και adapter scaffold, όχι ακόμη local import όλων των tables.",
    "license": "Diogenes snapshot: GPLv3+",
    "notes": "Λειτουργεί ως τεκμηριωμένη γέφυρα για επόμενη φάση import, χωρίς να παρουσιάζεται ως πλήρες local dataset."
  },
  {
    "id": "gsoc2019-greek-morpho",
    "name": "gsoc2019-greek-morpho",
    "status": "integrated-reference",
    "role": "Reference υποδομή",
    "scope": "Καταγράφηκε ως βοηθητική μορφολογική υποδομή, χωρίς απευθείας συγχώνευση στον αρχαιοελληνικό πυρήνα.",
    "integration": "Παραμένει reference-only layer μέσα στην τεκμηρίωση της εφαρμογής.",
    "license": "GPLv3 (στο uploaded snapshot)",
    "notes": "Κρατήθηκε μόνο ως σημείο αναφοράς, επειδή δεν υπηρετεί καθαρά τον ίδιο στόχο με τον αρχαιοελληνικό engine."
  },
  {
    "id": "morpheus-perseids",
    "name": "Morpheus Perseids",
    "status": "integrated-reference",
    "role": "Fallback morphology backend — adapter-ready",
    "scope": "API/engine για ανάλυση μορφολογίας αρχαίων ελληνικών και λατινικών με έτοιμη υποδομή μελλοντικής σύνδεσης.",
    "integration": "Δεν έχει γίνει πλήρες local bundling, αλλά η εφαρμογή περιλαμβάνει πλέον adapter-ready registry και integration scaffold.",
    "license": "MPL-2.0 / API layer MIT",
    "notes": "Η ένδειξη είναι τώρα reference-level integrated και όχι planned, επειδή υπάρχει πραγματική αρχιτεκτονική προετοιμασία."
  },
  {
    "id": "cltk",
    "name": "CLTK",
    "status": "integrated-reference",
    "role": "Συμπληρωματικό NLP / preprocessing layer",
    "scope": "Κανονικοποίηση, lemmatization και corpus-aware workflows σε build-time λογική.",
    "integration": "Προστέθηκε ως adapter-ready support layer, όχι ως κύρια static βάση κλίσης.",
    "license": "MIT",
    "notes": "Η ένδειξη άλλαξε από planned σε reference-level integrated, επειδή υπάρχει χαρτογραφημένος ρόλος στην αρχιτεκτονική."
  },
  {
    "id": "open-greek-latin",
    "name": "Open Greek and Latin",
    "status": "integrated-reference",
    "role": "Corpus / validation layer",
    "scope": "Παραδείγματα χρήσης, validation και corpus-based έλεγχος τύπων.",
    "integration": "Προστέθηκε ως corpus-ready reference layer και όχι ως conjugation database.",
    "license": "Διαφέρει ανά repository",
    "notes": "Η ένδειξη είναι πλέον integrated-reference, επειδή η θέση του στην εφαρμογή έχει οριστεί λειτουργικά, έστω χωρίς local corpus bundling."
  }

  ,{
    "id": "oikonomou-pdf",
    "name": "Οικονόμου (συνημμένο PDF)",
    "status": "integrated-reference",
    "role": "Κύρια σχολική πηγή για κύρια μέρη, παράγωγα και μορφολογικές παρατηρήσεις",
    "scope": "Χρησιμοποιήθηκε σε πολλαπλά batches λημμάτων για συντηρητική λημματοκεντρική επιμέλεια.",
    "integration": "Reference-level τεκμηρίωση μέσα στο static package· δεν έχει γίνει ακόμη πλήρες OCR/import όλων των πινάκων.",
    "license": "User-supplied PDF in conversation",
    "notes": "Αποτελεί τον βασικό σχολικό άξονα ελέγχου για κύρια μέρη, παράγωγα και ιδιότυπες μορφολογικές σημειώσεις."
  }
  ,{
    "id": "asonitis-pdf",
    "name": "Ασωνίτης (συνημμένο PDF)",
    "status": "integrated-reference",
    "role": "Συμπληρωματική σχολική γραμματική πηγή",
    "scope": "Χρησιμοποιείται ως δεύτερο σημείο αναφοράς για μορφολογική επιβεβαίωση σε επιλεγμένα λήμματα.",
    "integration": "Reference-level τεκμηρίωση χωρίς πλήρες dataset import.",
    "license": "User-supplied PDF in conversation",
    "notes": "Παραμένει βοηθητική πηγή· το υλικό της δεν έχει ακόμη μετατραπεί σε πλήρες machine-readable layer."
  }
  ,{
    "id": "georgopapad-pdf",
    "name": "Γεωργόπαπας / Γεωργοπαπαδάκης (συνημμένο PDF)",
    "status": "integrated-reference",
    "role": "Συμπληρωματικός γραμματικός έλεγχος",
    "scope": "Χρησιμοποιείται υποστηρικτικά για σχολική διασταύρωση τύπων και κατηγοριών.",
    "integration": "Reference-only στο παρόν static bundle.",
    "license": "User-supplied PDF in conversation",
    "notes": "Έχει αξιοποιηθεί ως βοηθητικό στρώμα ελέγχου, όχι ως αυτόνομο imported paradigm dataset."
  }
  ,{
    "id": "latistor-blog",
    "name": "latistor.blogspot.com",
    "status": "integrated-reference",
    "role": "Διαδικτυακή αναλυτική κλίση ρημάτων",
    "scope": "Χρησιμοποιήθηκε για διασταύρωση προσωπικών τύπων, απαρεμφάτων και μετοχών σε πολλά λήμματα.",
    "integration": "Reference-level web curation· τα δεδομένα δεν έχουν εισαχθεί αυτόματα ως πλήρες corpus.",
    "license": "External website",
    "notes": "Λειτουργεί ως πρακτικός κλιτικός έλεγχος δίπλα στον σχολικό πυρήνα και στα συνημμένα PDF."
  }
  ,{
    "id": "users-sch-grammatiki",
    "name": "users.sch.gr / γραμματική αρχαίας ελληνικής",
    "status": "integrated-reference",
    "role": "Σχολικό γραμματικό πλαίσιο για συνηρημένα, ρήματα σε -μι και βασική ορολογία",
    "scope": "Χρησιμοποιήθηκε κυρίως για contract verbs, ρήματα σε -μι και σχολική κανονικοποίηση προβολής.",
    "integration": "Reference-level web curation στο static package.",
    "license": "External educational website",
    "notes": "Στηρίζει τη σχολική κανονικοποίηση της παρουσίασης, όχι την πλήρη μηχανική παραγωγή όλων των paradigms."
  }
  ,{
    "id": "papanikolaou-patakis-pdf",
    "name": "Παπανικολάου / Πατάκης (συνημμένη γραμματική)",
    "status": "integrated-reference",
    "role": "Γραμματικό πλαίσιο για ρήματα, συνηρημένα και μετοχές",
    "scope": "Χρησιμοποιήθηκε ως αυστηρότερο σχολικό σημείο αναφοράς για τις κατηγορίες ρημάτων, τα συνηρημένα και τις βασικές κατηγορίες μετοχών.",
    "integration": "Reference-level ενσωμάτωση με πρώτο data-completion pass σε επιλεγμένα λήμματα και rule-based synthesis tranche.",
    "license": "User-supplied PDF in conversation",
    "notes": "Το βιβλίο του Παπανικολάου χρησιμοποιείται πλέον ρητά ως σχολικό γραμματικό πλαίσιο για επόμενα χειροκίνητα και ημιαυτόματα paradigm passes."
  }


];
