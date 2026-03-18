# Ancient Greek Verb Lab — Release Candidate v1.0.0

Static school-oriented web application for Ancient Greek verb morphology, prepared for GitHub Pages.

## What this release contains

This release combines:
- lemma lookup and verb-form analysis
- conjugation views for finite and non-finite forms
- a quiz module with ambiguity-safe filtering
- a library with philological reliability labels
- a classroom test tab for targeted pedagogical audit
- source transparency and integration notes

## Philological design principles

The application does not treat all data as equivalent. It distinguishes between:
- canonical school-core lemmas
- manually curated paradigms
- targeted hardening and slot validation layers
- imported morphology data
- reference-only or lower-confidence entries where needed

This distinction is deliberate. The goal is not merely to maximize volume, but to make the degree of philological control visible.

## GitHub Pages deployment

1. Create a new repository.
2. Upload all files from this folder to the repository root.
3. In repository settings, enable **GitHub Pages** from the main branch.
4. Keep the `.nojekyll` file in place.

## Main files

- `index.html` — main interface
- `styles.css` — presentation layer
- `app.js` — application logic
- `data/` — lemma, form and philology layers
- `COVERAGE.md` — current coverage statement
- `INTEGRATION_NOTES.md` — source and integration notes
- `CLASSROOM_TEST_PASS.md` — classroom testing overview
- `SPOTCHECK_NOTES.md` — spot-check notes
- `SLOT_VALIDATION_NOTES.md` — slot validation notes
- `TARGETED_FAILURE_REVIEW.md` — review notes for targeted failures
- `CHANGELOG.md` — release history
- `RELEASE_NOTES_v1.0.0.md` — release notes

## Recommended next step

The next development phase should focus on final philological maintenance:
- extending ambiguity coverage
- expanding manual paradigm coverage where pedagogically necessary
- adding further classroom-based validation from authentic school texts


## RC4 note

This release restores Recognition and Conjugation by fixing a startup-breaking missing DOM container for the conjugation spot-check panel.
