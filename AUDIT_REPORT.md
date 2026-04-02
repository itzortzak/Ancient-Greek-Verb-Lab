# Ancient Greek Verb Lab — audit and consolidation report

Date: 2026-03-28

## What was corrected

- Consolidated the distributed document-review layers into current base files and added a last-load runtime patch (`data/zzzz_finalConsolidatedPatch.js`) so that stale tranche overrides no longer reintroduce old metadata or malformed tags.
- Normalized **503** malformed person/number tags in finite forms across **6** lemmas.
- Refreshed lexicon coverage / notes for **32** lemmas whose base library entries were stale although newer curated tranches already existed.
- Rebuilt strict-audit metadata coherently for **72** extra lemmas from the actually merged manual and slot-validation layers.

## Person-number tag normalization by lemma

- ἄημι: 2 corrected finite tag(s)
- γίγνομαι: 94 corrected finite tag(s)
- δίδωμι: 183 corrected finite tag(s)
- εἰμί: 33 corrected finite tag(s)
- λέγω: 185 corrected finite tag(s)
- νήθω: 6 corrected finite tag(s)

## Lexicon entries refreshed from newer verbMeta / tranche data

- ἀγωνίζομαι
- αἰτέω
- αἰτιῶμαι
- ἁμαρτάνω
- ἀποκρίνομαι
- ἀφικνέομαι
- βιάζομαι
- γηράσκω
- γράφω
- δέδοικα
- δείκνυμι
- εὑρίσκω
- ἧμαι
- κεῖμαι
- λείπω
- μέμνημαι
- οἴχομαι
- ὄμνυμι
- πείθω
- πυνθάνομαι
- ῥέω
- ῥήγνυμι
- ῥύομαι
- ῥώννυμι
- στρώννυμι
- συλλέγω
- ὑβρίζω
- ὑγιαίνω
- ὑπόκειμαι
- ψαύω
- ψεύδομαι
- ψηφίζω

## Strict-audit summary

- totalExtraLemmas: 72
- fullyAudited: 69
- partialOrPending: 3
- manualParadigmLemmas: 57
- slotValidatedLemmas: 58

## Extra lemmas that still remain uncertain / need further philological checking

- ἀγωνίζομαι: status=catalog-only; forms=0; slotChecks=0
- ἥκω: status=manual; forms=74; slotChecks=0
- σβέννυμι: status=manual; forms=181; slotChecks=0

## Completion patch

- Activated the previously nested package-sync manual paradigms at runtime.
- `ἀγωνίζομαι` is no longer left as stale `catalog-only` in the active globals; it now resolves from a 72-form manual layer already present in the package-sync object.
- `ἥκω` and `σβέννυμι` now ship with conservative manual paradigms built from the source-backed principal parts and grammatical patterns already cited in the bundle.
