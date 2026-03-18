# Targeted Failure Review

This pass focused on false negatives in the classroom test tab.

Resolved categories:
- contracted lemmas displayed in contracted form but stored under uncontracted lemmas
- alternate lemma forms used by imported data (e.g. λέγω / εἶπον)
- imported participles missing explicit case/number metadata
- person/number mismatches already normalized in the runtime layer

Examples resolved:
- τιμᾷ
- ποιεῖτε
- δηλοῦμεν
- καλεῖν
- ἔλαβον / λαβών
- εἶπον
