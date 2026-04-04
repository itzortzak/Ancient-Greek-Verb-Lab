# Ancient Greek Verb Lab — focused audit and patch report

Date: 2026-04-02

## Scope of this pass

This pass addressed two concrete runtime / philological presentation problems that were still visible in the shipped bundle:

1. **Finite forms tagged as `future perfect` were present in the data but were not rendered at all in Conjugation.**
2. **Participles were present for many lemmas only as source-backed nominative singular forms (sometimes with `case/number`, sometimes only with `gender`), so the previous viewer either showed them incompletely or left users with the misleading impression that a full declensional table existed.**

## What was changed

### Corrected

- `viewer.js`
  - Added support for the tense `future perfect`.
  - Added the Greek label **Συντελεσμένος μέλλοντας**.
  - This restores visibility for the finite future-perfect series already encoded in the data.

### Supplemented / clarified

- `viewer.js`
  - Participles without explicit `case/number` are now rendered conservatively as **nominative singular source forms**, instead of disappearing from view.
  - Added an explicit note whenever the runtime data contain only these basic nominative forms and **not** a hand-entered full declensional table.

- `style.css`
  - Added `.minor-note` styling for the new philological/runtime warning note in the participle panels.

## Runtime audit summary

- Total lemmas in `window.MANUAL_PARADIGMS`: **98**
- Lemmas with participles: **96**
- Lemmas whose participles are stored only as nominative-singular forms with some tags: **54**
- Lemmas whose participles are stored only as gender triplets without explicit `case/number`: **42**
- Lemmas containing finite `future perfect` forms: **2**

## Lemmas affected by the future-perfect display fix

λέγω, ἵστημι

## Lemmas that still need full hand-entered participle declension

### Group A — nominative singular already tagged as `nom.sg`

λαμβάνω, λέγω, ἔχω, φέρω, ἵστημι, ἀποκρίνομαι, λανθάνω, μανθάνω, πάσχω, πίπτω, ὁράω, ἀποθνῄσκω, ἀναλίσκω, ἄπειμι, συμπίπτω, ἧμαι, κάθημαι, ἔπειμι, κεῖμαι, ἐπίσταμαι, μέμνημαι, δέδοικα, ἔρχομαι, βαίνω, τρέχω, τυγχάνω, ἄγω, αἱρέω, ἐσθίω, λαγχάνω, μένω, γιγνώσκω, κτείνω, ἕπομαι, ψαύω, ῥέω, ζώννυμι, αἰτιῶμαι, ζητέω, δείκνυμι, ἵημι, ῥήγνυμι, αὐξάνω, στρώννυμι, ἥκω, σβέννυμι, προσεύχομαι, ὑπόκειμαι, πάρειμι, εὑρίσκω, λείπω, πυνθάνομαι, γράφω, πείθω

### Group B — only gender triplets present, without explicit `case/number`

γίγνομαι, δίδωμι, τίθημι, βούλομαι, δύναμαι, πορεύομαι, μάχομαι, φημί, εἰμί, οἶδα, μεταφωνέω, ἀφικνέομαι, ψεύδομαι, ψηφίζω, ῥίπτω, ἁμαρτάνω, ἀνύω, αἰσθάνομαι, ἀμύνω, ἄημι, νήθω, εἶμι, οἴχομαι, βιάζομαι, ὑβρίζω, ῥύομαι, πήγνυμι, μίγνυμι, κεράννυμι, σκεδάννυμι, αἰτέω, ῥώννυμι, ἀρκέω, ἔοικα, ἀρέσκω, γηράσκω, ἁλίσκομαι, ἀγωνίζομαι, συλλέγω, ἀκούω, ὑγιαίνω, ὄμνυμι

## Editorial conclusion

This patch **does improve the application immediately**: forms no longer vanish from the interface merely because the viewer did not recognize their tense or because participle entries lacked explicit `case/number` tags.

At the same time, this pass does **not** pretend that the participial subsystem is now fully complete. For the lemmas listed above, the next philological step is a **true source-backed expansion of all participial cases and numbers**, lemma by lemma.
