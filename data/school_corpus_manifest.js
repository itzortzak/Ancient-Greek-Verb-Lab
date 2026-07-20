window.SCHOOL_CORPUS = Object.assign(window.SCHOOL_CORPUS || {}, {
  version: '2026-07-20-r1',
  schemaVersion: 1,
  scope: 'Αρχαιοελληνικοί ρηματικοί τύποι από τα συνημμένα σχολικά εγχειρίδια της Α΄ Λυκείου',
  method: 'Εξαγωγή των αρχαιοελληνικών τμημάτων των PDF, κανονικοποίηση Unicode και αντιστοίχιση με τον μορφολογικό δείκτη της εφαρμογής κατά την εκτέλεση.',
  books: [
    { id: 'historians_old', title: 'Αρχαίοι Έλληνες Ιστοριογράφοι (Ξενοφών, Θουκυδίδης)', short: 'Ιστοριογράφοι (παλαιό)', edition: 'Βιβλίο μαθητή, Α΄ Λυκείου', pdfPages: 442 },
    { id: 'anthology_student', title: 'Ανθολόγιο Γλωσσικής Διδασκαλίας', short: 'Ανθολόγιο — Βιβλίο', edition: 'Βιβλίο μαθητή/μαθήτριας, Α΄ Λυκείου', pdfPages: 146 },
    { id: 'anthology_workbook', title: 'Ανθολόγιο Γλωσσικής Διδασκαλίας', short: 'Ανθολόγιο — Τετράδιο', edition: 'Τετράδιο εργασιών, Α΄ Λυκείου', pdfPages: 130 },
    { id: 'xenophon_student', title: 'Ξενοφών, Ελληνικά', short: 'Ξενοφών — Βιβλίο', edition: 'Βιβλίο μαθητή/μαθήτριας, Α΄ Λυκείου', pdfPages: 147 },
    { id: 'xenophon_workbook', title: 'Ξενοφών, Ελληνικά', short: 'Ξενοφών — Τετράδιο', edition: 'Τετράδιο εργασιών, Α΄ Λυκείου', pdfPages: 66 },
    { id: 'lysias_student', title: 'Λυσίας, Κατά Ερατοσθένους', short: 'Λυσίας — Βιβλίο', edition: 'Βιβλίο μαθητή/μαθήτριας, Α΄ Λυκείου', pdfPages: 147 },
    { id: 'lysias_workbook', title: 'Λυσίας, Κατά Ερατοσθένους', short: 'Λυσίας — Τετράδιο', edition: 'Τετράδιο εργασιών, Α΄ Λυκείου', pdfPages: 66 },
    { id: 'historians_teacher', title: 'Αρχαίοι Έλληνες Ιστοριογράφοι — Βιβλίο εκπαιδευτικού', short: 'Ιστοριογράφοι — Εκπαιδευτικού', edition: 'Βιβλίο εκπαιδευτικού, Α΄ Λυκείου', pdfPages: 109, corpusAlias: 'historians_old', note: 'Παράλληλο διδακτικό υλικό· οι αρχαιοελληνικοί τύποι αντιστοιχίζονται με το βιβλίο μαθητή.' }
  ],
  tokenCount: 13309,
  packedEncoding: 'gzip+base64',
  packedPartCount: 2,
  packedPartFiles: [
    'data/school_corpus_packed_01.js',
    'data/school_corpus_packed_02.js'
  ],
  viewerPartCount: 2,
  viewerPartFiles: [
    'data/viewer_school_packed_01.js',
    'data/viewer_school_packed_02.js'
  ],
  notes: [
    'Το Kalos διατηρείται ως συμπληρωματική πηγή αναγνώρισης τύπων.',
    'Η πλήρης κλίση προτιμά τα χειροκίνητα και προ-Kalos παραδείγματα.',
    'Οι αναγραφόμενες σελίδες ακολουθούν την αρίθμηση του αντίστοιχου PDF.',
    'Η ετυμολογική πληροφορία εμφανίζεται μόνο όταν υπάρχει τεκμηριωμένο μεταδεδομένο ή ασφαλής μορφολογική ανάλυση σύνθεσης.'
  ]
});
window.SCHOOL_CORPUS.tokens = window.SCHOOL_CORPUS.tokens || [];
