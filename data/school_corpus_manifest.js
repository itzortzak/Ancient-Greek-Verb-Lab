window.SCHOOL_CORPUS = Object.assign(window.SCHOOL_CORPUS || {}, {
  version: '2026-07-20-school-full-r3',
  schemaVersion: 2,
  scope: 'Αρχαιοελληνικοί τύποι από τα συνημμένα σχολικά εγχειρίδια της Α΄ Λυκείου',
  method: 'Εξαγωγή από τα αρχαιοελληνικά τμήματα των PDF, κανονικοποίηση Unicode και διασταύρωση κατά την εκτέλεση με τον μορφολογικό δείκτη της εφαρμογής.',
  books: [
    { id: 'historians_old', title: 'Αρχαίοι Έλληνες Ιστοριογράφοι (Ξενοφών, Θουκυδίδης)', short: 'Ιστοριογράφοι (παλαιό)', edition: 'Βιβλίο μαθητή, Α΄ Λυκείου', pdfPages: 442 },
    { id: 'anthology_student', title: 'Ανθολόγιο Γλωσσικής Διδασκαλίας', short: 'Ανθολόγιο — Βιβλίο', edition: 'Βιβλίο μαθητή/μαθήτριας, Α΄ Λυκείου', pdfPages: 146 },
    { id: 'anthology_workbook', title: 'Ανθολόγιο Γλωσσικής Διδασκαλίας', short: 'Ανθολόγιο — Τετράδιο', edition: 'Τετράδιο εργασιών, Α΄ Λυκείου', pdfPages: 130 },
    { id: 'xenophon_student', title: 'Ξενοφών, Ελληνικά', short: 'Ξενοφών — Βιβλίο', edition: 'Βιβλίο μαθητή/μαθήτριας, Α΄ Λυκείου', pdfPages: 147 },
    { id: 'xenophon_workbook', title: 'Ξενοφών, Ελληνικά', short: 'Ξενοφών — Τετράδιο', edition: 'Τετράδιο εργασιών, Α΄ Λυκείου', pdfPages: 66 },
    { id: 'lysias_student', title: 'Λυσίας, Κατά Ερατοσθένους', short: 'Λυσίας — Βιβλίο', edition: 'Βιβλίο μαθητή/μαθήτριας, Α΄ Λυκείου', pdfPages: 147 },
    { id: 'lysias_workbook', title: 'Λυσίας, Κατά Ερατοσθένους', short: 'Λυσίας — Τετράδιο', edition: 'Τετράδιο εργασιών, Α΄ Λυκείου', pdfPages: 66 }
  ],
  tokenBookOrder: [
    'historians_old',
    'anthology_student',
    'anthology_workbook',
    'xenophon_student',
    'xenophon_workbook',
    'lysias_student',
    'lysias_workbook'
  ],
  tokenCount: 11530,
  packedEncoding: 'gzip+base64',
  packedSchema: '[normalizedForm,bookBitmask]',
  packedPartCount: 7,
  packedPartFiles: [
    'data/school_corpus_compact_01.js',
    'data/school_corpus_compact_02.js',
    'data/school_corpus_compact_03.js',
    'data/school_corpus_compact_04.js',
    'data/school_corpus_compact_05a.js',
    'data/school_corpus_compact_05b.js',
    'data/school_corpus_compact_06.js'
  ],
  appPartCount: 4,
  appPartFiles: [
    'data/app_bundle_packed_01.js',
    'data/app_bundle_packed_02.js',
    'data/app_bundle_packed_03.js',
    'data/app_bundle_packed_04.js'
  ],
  corpusSha256: '73f7e64250f2427c05d5c5704beb96dba9e55097136ea36dede5c3f48a211742',
  appSourceSha256: 'df0908e07c3cca4292c9bb5fc49456d97f99bbd39672367abaff58f15b396e29',
  notes: [
    'Το Kalos παραμένει διαθέσιμο μόνο ως συμπληρωματική πηγή αναγνώρισης τύπων.',
    'Η κλίση προβάλλει κατά προτεραιότητα τα πλήρη χειροκίνητα και προ-Kalos παραδείγματα.',
    'Η συμπαγής βάση αποθηκεύει αντιστοίχιση τύπου προς σχολικό εγχειρίδιο και όχι αναπαραγωγή του κειμένου των βιβλίων.'
  ]
});
window.SCHOOL_CORPUS.tokens = window.SCHOOL_CORPUS.tokens || [];
