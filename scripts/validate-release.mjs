import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { gunzipSync } from 'node:zlib';

const root = process.cwd();
const report = {
  checkedAt: new Date().toISOString(),
  manifest: null,
  corpus: {},
  viewer: {},
  html: {},
  warnings: [],
};

function absolute(relativePath) {
  return path.join(root, relativePath);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function read(relativePath) {
  const file = absolute(relativePath);
  assert(fs.existsSync(file), `Λείπει το αρχείο: ${relativePath}`);
  return fs.readFileSync(file, 'utf8');
}

function evaluateManifest() {
  const source = read('data/school_corpus_manifest.js');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  new vm.Script(source, { filename: 'data/school_corpus_manifest.js' }).runInContext(sandbox);
  const manifest = sandbox.window.SCHOOL_CORPUS;
  assert(manifest && typeof manifest === 'object', 'Το school corpus manifest δεν δημιουργεί window.SCHOOL_CORPUS.');
  return manifest;
}

function packedPayload(relativePath, globalName) {
  const source = read(relativePath);
  assert(source.includes(globalName), `${relativePath}: απουσιάζει το ${globalName}.`);
  const matches = [...source.matchAll(/\.push\((['"])([\s\S]*?)\1\)\s*;?/g)];
  assert(matches.length === 1, `${relativePath}: αναμένονταν ακριβώς ένα packed payload, βρέθηκαν ${matches.length}.`);
  const payload = matches[0][2].replace(/\s+/g, '');
  assert(/^[A-Za-z0-9+/=]+$/.test(payload), `${relativePath}: το packed payload περιέχει μη έγκυρους χαρακτήρες.`);
  return payload;
}

function inflate(files, globalName) {
  const payload = files.map((file) => packedPayload(file, globalName)).join('');
  assert(payload.length > 100, `${globalName}: το packed payload είναι υπερβολικά μικρό.`);
  const buffer = Buffer.from(payload, 'base64');
  assert(buffer.length > 64, `${globalName}: αποτυχία αποκωδικοποίησης base64.`);
  return gunzipSync(buffer).toString('utf8');
}

function inferCorpusCount(data) {
  if (Array.isArray(data)) return data.length;
  if (!data || typeof data !== 'object') return null;
  for (const key of ['tokens', 'entries', 'records', 'forms']) {
    if (Array.isArray(data[key])) return data[key].length;
    if (data[key] && typeof data[key] === 'object') return Object.keys(data[key]).length;
  }
  return Object.keys(data).length;
}

function parseCorpus(source) {
  try {
    return { kind: 'json', data: JSON.parse(source) };
  } catch (jsonError) {
    const sandbox = { window: {} };
    vm.createContext(sandbox);
    new vm.Script(source, { filename: 'school-corpus-unpacked.js' }).runInContext(sandbox);
    const data = sandbox.window.SCHOOL_CORPUS_DATA
      || sandbox.window.SCHOOL_CORPUS?.tokens
      || sandbox.window.SCHOOL_CORPUS;
    assert(data, `Το school corpus δεν είναι έγκυρο JSON ή αναγνωρίσιμο JavaScript: ${jsonError.message}`);
    return { kind: 'javascript', data };
  }
}

const manifest = evaluateManifest();
report.manifest = {
  version: manifest.version,
  tokenCount: manifest.tokenCount,
  packedPartCount: manifest.packedPartCount,
  viewerPartCount: manifest.viewerPartCount,
};

const corpusFiles = Array.isArray(manifest.packedPartFiles) && manifest.packedPartFiles.length
  ? manifest.packedPartFiles
  : Array.from({ length: Number(manifest.packedPartCount || 0) }, (_, index) =>
      `data/school_corpus_packed_${String(index + 1).padStart(2, '0')}.js`);
const viewerFiles = Array.isArray(manifest.viewerPartFiles) && manifest.viewerPartFiles.length
  ? manifest.viewerPartFiles
  : Array.from({ length: Number(manifest.viewerPartCount || 0) }, (_, index) =>
      `data/viewer_school_packed_${String(index + 1).padStart(2, '0')}.js`);

assert(corpusFiles.length > 0, 'Δεν δηλώθηκαν αρχεία school corpus.');
assert(viewerFiles.length > 0, 'Δεν δηλώθηκαν αρχεία packed viewer.');
if (manifest.packedPartCount != null) {
  assert(corpusFiles.length === Number(manifest.packedPartCount), 'Ασυμφωνία packedPartCount και packedPartFiles.');
}
if (manifest.viewerPartCount != null) {
  assert(viewerFiles.length === Number(manifest.viewerPartCount), 'Ασυμφωνία viewerPartCount και viewerPartFiles.');
}

const corpusSource = inflate(corpusFiles, 'SCHOOL_CORPUS_PACKED_PARTS');
assert(corpusSource.length > 1000, 'Το αποσυμπιεσμένο school corpus είναι υπερβολικά μικρό.');
assert(/[\u0370-\u03ff\u1f00-\u1fff]/u.test(corpusSource), 'Το school corpus δεν περιέχει ελληνικό κείμενο.');
const corpusParsed = parseCorpus(corpusSource);
const inferredCount = inferCorpusCount(corpusParsed.data);
if (manifest.tokenCount != null && inferredCount != null) {
  assert(inferredCount === Number(manifest.tokenCount),
    `Ασυμφωνία πλήθους school corpus: manifest=${manifest.tokenCount}, πραγματικό=${inferredCount}.`);
}
report.corpus = {
  files: corpusFiles,
  compressedBytes: corpusFiles.reduce((sum, file) => sum + fs.statSync(absolute(file)).size, 0),
  unpackedBytes: Buffer.byteLength(corpusSource, 'utf8'),
  encoding: corpusParsed.kind,
  inferredCount,
};

const viewerSource = inflate(viewerFiles, 'AGVL_VIEWER_PACKED_PARTS');
assert(viewerSource.length > 5000, 'Ο αποσυμπιεσμένος viewer είναι υπερβολικά μικρός.');
new vm.Script(viewerSource, { filename: 'viewer.school.unpacked.js' });
for (const marker of ['analyzeInput', 'lemmaSelect', 'gameCard', 'SCHOOL_CORPUS']) {
  assert(viewerSource.includes(marker), `Ο packed viewer δεν περιέχει το αναμενόμενο marker: ${marker}`);
}
report.viewer = {
  files: viewerFiles,
  compressedBytes: viewerFiles.reduce((sum, file) => sum + fs.statSync(absolute(file)).size, 0),
  unpackedBytes: Buffer.byteLength(viewerSource, 'utf8'),
};

const indexSource = read('index.html');
const viewerLoader = read('viewer.js');
new vm.Script(viewerLoader, { filename: 'viewer.js' });
const requiredIds = [
  'analyzeInput', 'analyzeBtn', 'analyzeStatus', 'analyzeResults',
  'bookFilter', 'lemmaSearch', 'lemmaSelect', 'lemmaOverview',
  'finiteSection', 'nonFiniteSection', 'gameCard', 'corpusSummary',
];
for (const id of requiredIds) {
  assert(indexSource.includes(`id="${id}"`), `Το index.html δεν περιέχει το απαιτούμενο id: ${id}`);
}
const scriptSources = [...indexSource.matchAll(/<script\s+[^>]*src="([^"]+)"/g)].map((match) => match[1]);
for (const src of scriptSources) {
  if (/^(?:https?:)?\/\//.test(src)) continue;
  const clean = src.split(/[?#]/, 1)[0];
  assert(fs.existsSync(absolute(clean)), `Το index.html αναφέρεται σε ανύπαρκτο script: ${src}`);
}
assert(fs.existsSync(absolute('style.css')), 'Λείπει το style.css.');
assert(fs.statSync(absolute('style.css')).size > 1000, 'Το style.css είναι υπερβολικά μικρό.');
report.html = {
  scriptCount: scriptSources.length,
  requiredIds: requiredIds.length,
};

const forbidden = [
  '.school-build-marker',
  'data/school_corpus_compact_01.js',
  'data/school_corpus_compact_02.js',
  'data/school_corpus_compact_03.js',
  'data/school_corpus_packed_03.js',
  'data/school_corpus_packed_04.js',
  'data/school_corpus_packed_05.js',
  'data/school_corpus_v2_part01.js',
];
for (const relativePath of forbidden) {
  assert(!fs.existsSync(absolute(relativePath)), `Παρέμεινε προσωρινό αρχείο: ${relativePath}`);
}

fs.writeFileSync(absolute('validation-report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log('AGVL school-corpus validation: PASS');
console.log(JSON.stringify(report, null, 2));
