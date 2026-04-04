# AGVL Nonfinite Consistency Report — Part 11

Date: 2026-04-02

## Target
- ὑγιαίνω

## What was done
- removed the three remaining base-only aorist active participles
- expanded the aorist active participle into a full case-aware family
- rebuilt the relevant `FORM_INDEX` buckets for the aorist active participle
- backfilled `STRICT_AUDIT` and `SLOT_VALIDATIONS` metadata for the lemma

## Result
- base-only aorist participles removed: **3**
- explicit aorist participle entries added: **30**
- residual base-only entries after the pass: **0**
- total visible entries for the lemma after the pass: **133**

## Philological note
The expansion was kept deliberately conservative. The aorist participle was developed from the attested aorist **ὑγίανα** and declined according to the standard school-safe pattern **-ας, -ασα, -αν**. No extra parallel stems were invented.

## Files modified
- `index.html`
- `data/agvl_runtime_patch_nonfinite_consistency_11.js`
