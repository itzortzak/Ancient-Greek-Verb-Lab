import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { gunzipSync } from 'node:zlib';

const root = process.cwd();
const report = {
  checkedAt: new Date().toISOString(),
  release: {},
  corpus: {},
  app: {},
  html: {},
  compatibility: {},
};

function absolute(relativePath) {
  return path.join(root, relativePath);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function exists(relativePath) {
  return fs.existsSync(absolute(relativePath));
}

function read(relativePath) {
  assert(exists(relativePath), `Λείπει το αρχείο: ${relativePath}`);
  return fs.readFileSync(absolute(relativePath), 'utf8');
}

function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

function evaluateWindowFiles(files) {
  const sandbox = { window: {}, console };
  sandbox.window.window = sandbox.window;
  vm.createContext(sandbox);
  for (const file of files) {
    new vm.Script(read(file), { filename: file }).runInContext(sandbox);
  }
  return sandbox.window;
}

function decodePacked(files, globalName, label) {
  const windowObject = evaluateWindowFiles(files);
  const parts = windowObject[globalName];
  assert(Array.isArray(parts), `${label}: δεν δημιουργήθηκε πίνακας ${globalName}.`);
  assert(parts.length === files.length,
    `${label}: αναμένονταν ${files.length} τμήματα, φορτώθηκαν ${parts.length}.`);
  assert(parts.every(part => typeof part === 'string' && part.length > 100),
    `${label}: εντοπίστηκε κενό ή μη έγκυρο τμήμα.`);
  const encoded = parts.join('');
  assert(/^[A-Za-z0-9+/=]+$/.test(encoded), `${label}: μη έγκυρο base64.`);
  const compressed = Buffer.from(encoded, 'base64');
  assert(compressed.length > 64, `${label}: υπερβολικά μικρό συμπιεσμένο πακέτο.`);
  const unpacked = gunzipSync(compressed);
  assert(unpacked.length > 1000, `${label}: υπερβολικά μικρό αποσυμπιεσμένο πακέτο.`);
  return { parts, encoded, compressed, unpacked };
}

function assertBalancedBraces(source, label) {
  let depth = 0;
  let quote = null;
  let escaped = false;
  let inComment = false;
  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];
    if (inComment) {
      if (char === '*' && next === '/') { inComment = false; index += 1; }
      continue;
    }
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '/' && next === '*') { inComment = true; index += 1; continue; }
    if (char === '"' || char === "'") { quote = char; continue; }
    if (char === '{') depth += 1;
    if (char === '}') depth -= 1;
    assert(depth >= 0, `${label}: κλείνει αγκύλη χωρίς αντίστοιχο άνοιγμα.`);
  }
  assert(depth === 0, `${label}: μη ισοζυγισμένες αγκύλες.`);
}

const manifestWindow = evaluateWindowFiles(['data/school_corpus_manifest.js']);
const manifest = manifestWindow.SCHOOL_CORPUS;
assert(manifest && typeof manifest === 'object', 'Το manifest δεν δημιουργεί window.SCHOOL_CORPUS.');
assert(Array.isArray(manifest.books) && manifest.books.length === 7,
  `Αναμένονταν 7 σχολικές πηγές, δηλώθηκαν ${manifest.books?.length ?? 0}.`);
assert(Array.isArray(manifest.tokenBookOrder) && manifest.tokenBookOrder.length === manifest.books.length,
  'Το tokenBookOrder δεν συμφωνεί με τον κατάλογο βιβλίων.');
assert(Number.isInteger(manifest.tokenCount) && manifest.tokenCount > 10000,
  'Μη έγκυρο tokenCount στο manifest.');
assert(Array.isArray(manifest.packedPartFiles) && manifest.packedPartFiles.length === manifest.packedPartCount,
  'Ασυμφωνία packedPartFiles και packedPartCount.');
assert(Array.isArray(manifest.appPartFiles) && manifest.appPartFiles.length === manifest.appPartCount,
  'Ασυμφωνία appPartFiles και appPartCount.');
assert(manifest.packedPartCount === 7, 'Η τελική έκδοση πρέπει να χρησιμοποιεί 7 compact corpus shards.');
assert(manifest.appPartCount === 4, 'Η τελική έκδοση πρέπει να χρησιμοποιεί 4 app bundle shards.');
for (const file of [...manifest.packedPartFiles, ...manifest.appPartFiles]) {
  assert(exists(file), `Το manifest παραπέμπει σε ανύπαρκτο αρχείο: ${file}`);
}
report.release = {
  version: manifest.version,
  books: manifest.books.length,
  tokenCount: manifest.tokenCount,
  corpusParts: manifest.packedPartCount,
  appParts: manifest.appPartCount,
};

const corpusPackage = decodePacked(
  manifest.packedPartFiles,
  'SCHOOL_CORPUS_PACKED_PARTS',
  'Σχολικό σώμα'
);
const corpusDigest = sha256(corpusPackage.unpacked);
assert(corpusDigest === manifest.corpusSha256,
  `Αποτυχία SHA-256 σχολικού σώματος: ${corpusDigest}.`);
const tokens = JSON.parse(corpusPackage.unpacked.toString('utf8'));
assert(Array.isArray(tokens), 'Το αποσυμπιεσμένο σχολικό σώμα δεν είναι πίνακας JSON.');
assert(tokens.length === manifest.tokenCount,
  `Ασυμφωνία tokenCount: manifest=${manifest.tokenCount}, payload=${tokens.length}.`);
const tokenKeys = new Set();
const maxMask = (1 << manifest.tokenBookOrder.length) - 1;
for (let index = 0; index < tokens.length; index += 1) {
  const entry = tokens[index];
  assert(Array.isArray(entry) && entry.length === 2, `Μη έγκυρη σχολική εγγραφή στη θέση ${index}.`);
  const [form, mask] = entry;
  assert(typeof form === 'string' && form.length > 0, `Κενός τύπος στη θέση ${index}.`);
  assert(Number.isInteger(mask) && mask > 0 && mask <= maxMask,
    `Μη έγκυρο bitmask στη θέση ${index}: ${mask}.`);
  assert(!tokenKeys.has(form), `Διπλή κανονικοποιημένη εγγραφή: ${form}.`);
  tokenKeys.add(form);
}
assert(tokens.some(([form]) => /[\u0370-\u03ff\u1f00-\u1fff]/u.test(form)),
  'Το σχολικό σώμα δεν περιέχει ελληνικούς χαρακτήρες.');
report.corpus = {
  files: manifest.packedPartFiles,
  compressedBytes: corpusPackage.compressed.length,
  unpackedBytes: corpusPackage.unpacked.length,
  entries: tokens.length,
  uniqueEntries: tokenKeys.size,
  sha256: corpusDigest,
};

const appPackage = decodePacked(manifest.appPartFiles, 'AGVL_APP_PACKED_PARTS', 'Εφαρμογή');
const appDigest = sha256(appPackage.unpacked);
assert(appDigest === manifest.appSourceSha256,
  `Αποτυχία SHA-256 εφαρμογής: ${appDigest}.`);
const appSource = appPackage.unpacked.toString('utf8');
new vm.Script(appSource, { filename: 'agvl-school-app.js' });
for (const marker of ['SCHOOL_CORPUS', 'analyzeInput', 'lemmaSelect', 'finiteSection', 'nonFiniteSection', 'gameCard']) {
  assert(appSource.includes(marker), `Η εφαρμογή δεν περιέχει το αναμενόμενο marker: ${marker}`);
}
report.app = {
  files: manifest.appPartFiles,
  compressedBytes: appPackage.compressed.length,
  unpackedBytes: appPackage.unpacked.length,
  sha256: appDigest,
};

const loader = read('viewer.js');
new vm.Script(loader, { filename: 'viewer.js' });
for (const marker of ['packedPartFiles', 'appPartFiles', 'corpusSha256', 'appSourceSha256', 'AGVL_APP_PACKED_PARTS']) {
  assert(loader.includes(marker), `Το viewer.js δεν περιέχει το αναμενόμενο marker: ${marker}`);
}

const compatibilityOne = read('data/school_corpus_packed_01.js');
const compatibilityTwo = read('data/school_corpus_packed_02.js');
assert(compatibilityOne.includes('AGVL_SCHOOL_CORPUS_COMPAT'), 'Λείπει το compatibility bootstrap 01.');
assert(compatibilityTwo.includes('AGVL_SCHOOL_CORPUS_COMPAT'), 'Λείπει το compatibility bootstrap 02.');
assert(!compatibilityOne.includes('.push(') && !compatibilityTwo.includes('.push('),
  'Τα compatibility αρχεία δεν πρέπει να περιέχουν παλαιό packed payload.');
report.compatibility = {
  bootstrapFiles: ['data/school_corpus_packed_01.js', 'data/school_corpus_packed_02.js'],
};

const html = read('index.html');
const requiredIds = [
  'analyzeInput', 'analyzeBtn', 'analyzeStatus', 'analyzeResults',
  'bookFilter', 'lemmaSearch', 'lemmaSelect', 'lemmaOverview',
  'finiteSection', 'nonFiniteSection', 'gameCard', 'boardGameArea', 'corpusSummary'
];
for (const id of requiredIds) {
  assert(new RegExp(`id=["']${id}["']`).test(html), `Λείπει το απαιτούμενο στοιχείο #${id}.`);
}
const scriptSources = [...html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*><\/script>/gi)]
  .map(match => match[1]);
for (const source of scriptSources) {
  if (/^(?:https?:)?\/\//i.test(source)) continue;
  assert(exists(source.split(/[?#]/, 1)[0]), `Το index.html παραπέμπει σε ανύπαρκτο script: ${source}`);
}
const manifestIndex = scriptSources.indexOf('data/school_corpus_manifest.js');
const compatOneIndex = scriptSources.indexOf('data/school_corpus_packed_01.js');
const compatTwoIndex = scriptSources.indexOf('data/school_corpus_packed_02.js');
const loaderIndex = scriptSources.indexOf('viewer.js');
assert(manifestIndex >= 0 && compatOneIndex > manifestIndex && compatTwoIndex > compatOneIndex && loaderIndex > compatTwoIndex,
  'Λανθασμένη σειρά φόρτωσης manifest, compatibility bootstrap και viewer.js.');
const style = read('style.css');
assert(style.length > 10000, 'Το style.css είναι υπερβολικά μικρό.');
assertBalancedBraces(style, 'style.css');
for (const selector of ['.tabs', '.lemma-overview', '.game-shell', '.school-form']) {
  assert(style.includes(selector), `Λείπει βασικός CSS selector: ${selector}`);
}
report.html = {
  scripts: scriptSources.length,
  requiredIds: requiredIds.length,
  styleBytes: Buffer.byteLength(style, 'utf8'),
};

const forbidden = [
  '.school-build-marker',
  'data/viewer_school_packed_01.js',
  'data/viewer_school_packed_02.js',
  'data/school_corpus_compact_05.js',
  'data/school_corpus_packed_03.js',
  'data/school_corpus_packed_04.js',
  'data/school_corpus_packed_05.js',
  'data/school_corpus_v2_part01.js'
];
const leftovers = forbidden.filter(exists);
assert(leftovers.length === 0, `Παρέμειναν προσωρινά αρχεία:\n- ${leftovers.join('\n- ')}`);

fs.writeFileSync(absolute('validation-report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log('AGVL school-corpus validation: PASS');
console.log(`School entries: ${tokens.length.toLocaleString('el-GR')}`);
console.log(`School sources: ${manifest.books.length}`);
console.log(`Decoded app source: ${appSource.length.toLocaleString('el-GR')} characters`);
console.log(`Corpus SHA-256: ${corpusDigest}`);
console.log(`App SHA-256: ${appDigest}`);
