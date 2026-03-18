# Integration notes

## What was changed in this build

- Deleted the six problematic library-only entries that had no safe paradigm:
  - λουμαίνω
  - πειθαρχεῖν
  - προτρέπω
  - ἀνέχω
  - συλλέγω
  - χαρίζομαι
- Normalized the library headword **σώζω** to the conjugated entry **σῴζω** and kept the unaccented/common classroom spelling as a display alias.
- Added a new **Sources** tab to the interface.
- Added source metadata for:
  - greek-conjugator-js
  - digital-gr
  - Diogenes / Morpheus compatibility
  - gsoc2019-greek-morpho
  - Morpheus Perseids
  - CLTK
  - Open Greek and Latin

## What is actually integrated now

### Fully integrated in the static app
- `greek-conjugator-js` imported conjugation layer
- local/core curated metadata
- digital-gr inspired quiz-level logic

### Integrated as source catalog / architecture reference
- Diogenes / Morpheus compatibility notes
- gsoc2019-greek-morpho reference notes
- Morpheus Perseids / CLTK / Open Greek and Latin planning layer

## What is **not** bundled yet

This package does **not** yet ship local Morpheus morphology tables or a live Morpheus API proxy. That would require either:
1. a server-side service, or
2. a conversion pipeline producing precomputed JSON artifacts suitable for GitHub Pages.

## Current counts after cleanup

- 891 unique lemmas in the library
- 891 lemmas with active conjugation data
- 0 malformed library-only entries left in the shipped package


## Source status refinement

The sources page now distinguishes among `integrated`, `integrated-partial`, and `integrated-reference`.
`integrated-reference` means that the source is functionally mapped inside the app architecture and has adapter/scaffold preparation, but is not claimed as fully bundled local morphology data.
