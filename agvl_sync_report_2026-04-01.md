# AGVL corrective sync report

Date: 2026-04-01

## Scope

Conservative corrective pass focused on a concrete static-package regression: a set of source-backed manual paradigms already present in `bootstrap.bundle.js` and/or `manual_patch_bundle_v1_5_*.json` was not surviving into the active `window.MANUAL_PARADIGMS` layer, because later static files reset the object. This pass restores those paradigms without inventing new forms.

## Restored manual paradigms

- αὐξάνω: restored into active `MANUAL_PARADIGMS` from `bootstrap.bundle.js`; active forms after patch: 35.
- γράφω: restored into active `MANUAL_PARADIGMS` from `manual_patch_bundle_v1_5_38.json`; active forms after patch: 70.
- εὑρίσκω: restored into active `MANUAL_PARADIGMS` from `manual_patch_bundle_v1_5_33.json`; active forms after patch: 70.
- λείπω: restored into active `MANUAL_PARADIGMS` from `manual_patch_bundle_v1_5_33.json`; active forms after patch: 70.
- πάρειμι: restored into active `MANUAL_PARADIGMS` from `manual_patch_bundle_v1_5_23.json`; active forms after patch: 36.
- πείθω: restored into active `MANUAL_PARADIGMS` from `manual_patch_bundle_v1_5_38.json`; active forms after patch: 70.
- προσεύχομαι: restored into active `MANUAL_PARADIGMS` from `manual_patch_bundle_v1_5_23.json`; active forms after patch: 36.
- πυνθάνομαι: restored into active `MANUAL_PARADIGMS` from `manual_patch_bundle_v1_5_33.json`; active forms after patch: 70.
- σβέννυμι: restored into active `MANUAL_PARADIGMS` from `bootstrap.bundle.js`; active forms after patch: 181.
- στρώννυμι: restored into active `MANUAL_PARADIGMS` from `bootstrap.bundle.js`; active forms after patch: 35.
- ἀκούω: restored into active `MANUAL_PARADIGMS` from `bootstrap.bundle.js`; active forms after patch: 70.
- ἥκω: restored into active `MANUAL_PARADIGMS` from `bootstrap.bundle.js`; active forms after patch: 74.
- ὑγιαίνω: restored into active `MANUAL_PARADIGMS` from `manual_patch_bundle_v1_5_22.json`; active forms after patch: 52.
- ὑπόκειμαι: restored into active `MANUAL_PARADIGMS` from `manual_patch_bundle_v1_5_23.json`; active forms after patch: 14.
- ῥήγνυμι: restored into active `MANUAL_PARADIGMS` from `bootstrap.bundle.js`; active forms after patch: 28.

## Strict-audit summary after sync

- manual paradigm lemmas in active layer: 97
- strict audit total extra lemmas: 75
- fully audited entries: 70
- remaining pending / needsAudit entries: 5

## Lemma-level status updates

- αὐξάνω: status=manual+slots, readiness=partial, manualForms=35, slotChecks=7, needsAudit=True.
- γράφω: status=manual+slots, readiness=advanced-source-backed, manualForms=70, slotChecks=8, needsAudit=False.
- εὑρίσκω: status=manual+slots, readiness=advanced-source-backed, manualForms=70, slotChecks=8, needsAudit=False.
- λείπω: status=manual+slots, readiness=advanced-source-backed, manualForms=70, slotChecks=8, needsAudit=False.
- πάρειμι: status=manual+slots, readiness=advanced-source-backed, manualForms=36, slotChecks=8, needsAudit=False.
- πείθω: status=manual+slots, readiness=advanced-source-backed, manualForms=70, slotChecks=8, needsAudit=False.
- προσεύχομαι: status=manual+slots, readiness=advanced-conservative, manualForms=36, slotChecks=6, needsAudit=True.
- πυνθάνομαι: status=manual+slots, readiness=advanced-source-backed, manualForms=70, slotChecks=8, needsAudit=False.
- σβέννυμι: status=manual, readiness=advanced-conservative, manualForms=181, slotChecks=0, needsAudit=False.
- στρώννυμι: status=manual+slots, readiness=conservative-partial, manualForms=35, slotChecks=10, needsAudit=True.
- ἀκούω: status=manual+slots, readiness=advanced-conservative, manualForms=70, slotChecks=20, needsAudit=False.
- ἥκω: status=manual, readiness=advanced-conservative, manualForms=74, slotChecks=0, needsAudit=False.
- ὑγιαίνω: status=manual+slots, readiness=advanced-conservative, manualForms=52, slotChecks=13, needsAudit=False.
- ὑπόκειμαι: status=manual+slots, readiness=advanced-conservative, manualForms=14, slotChecks=5, needsAudit=True.
- ῥήγνυμι: status=manual+slots, readiness=partial, manualForms=28, slotChecks=6, needsAudit=True.

## Source basis used for this corrective sync

- Internal package evidence: `bootstrap.bundle.js` and `manual_patch_bundle_v1_5_22/23/33/38.json`.
- Philological basis already encoded in those layers: the bundled source notes point back to the uploaded grammars and principal-part tables (especially *05.1 ΓΡΑΜΜΑΤΙΚΗ* and *05.2 Αρχικοί Χρόνοι* for verbs such as εὑρίσκω, λείπω, πυνθάνομαι, γράφω, πείθω, ὑγιαίνω, αὐξάνω, ἀκούω, ἥκω, σβέννυμι).

## Result

The delivered bundle no longer drops these curated manual paradigms at runtime. In practice, this upgrades Conjugation / Recognition coverage for fifteen lemmas and removes the stale pending state of ἥκω and σβέννυμι.