(function(){
  function normalizeGreek(s){ return (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ς/g,'σ').toLowerCase().trim(); }
  window.FORM_INDEX = window.FORM_INDEX || {};
  const rows = [
    ["ἀνύω","ἀνύω","finite","present","active","indicative","1sg",null,null,"sg"],
    ["ἀνύεις","ἀνύω","finite","present","active","indicative","2sg",null,null,"sg"],
    ["ἀνύει","ἀνύω","finite","present","active","indicative","3sg",null,null,"sg"],
    ["ἀνύομεν","ἀνύω","finite","present","active","indicative","1pl",null,null,"pl"],
    ["ἀνύετε","ἀνύω","finite","present","active","indicative","2pl",null,null,"pl"],
    ["ἀνύουσι(ν)","ἀνύω","finite","present","active","indicative","3pl",null,null,"pl"],
    ["ἤνυον","ἀνύω","finite","imperfect","active","indicative","1sg",null,null,"sg"],
    ["ἤνυες","ἀνύω","finite","imperfect","active","indicative","2sg",null,null,"sg"],
    ["ἤνυε(ν)","ἀνύω","finite","imperfect","active","indicative","3sg",null,null,"sg"],
    ["ἠνύομεν","ἀνύω","finite","imperfect","active","indicative","1pl",null,null,"pl"],
    ["ἠνύετε","ἀνύω","finite","imperfect","active","indicative","2pl",null,null,"pl"],
    ["ἀνύσω","ἀνύω","finite","future","active","indicative","1sg",null,null,"sg"],
    ["ἤνυσα","ἀνύω","finite","aorist","active","indicative","1sg",null,null,"sg"],
    ["ἤνυκα","ἀνύω","finite","perfect","active","indicative","1sg",null,null,"sg"],
    ["ἀνύτομαι","ἀνύω","finite","present","middle/passive","indicative","1sg",null,null,"sg"],
    ["ἠνυσάμην","ἀνύω","finite","aorist","middle","indicative","1sg",null,null,"sg"],
    ["ἠνύσθην","ἀνύω","finite","aorist","passive","indicative","1sg",null,null,"sg"],
    ["ἤνυσμαι","ἀνύω","finite","perfect","middle/passive","indicative","1sg",null,null,"sg"],
    ["ἀνύειν","ἀνύω","infinitive","present","active","infinitive",null,null,null,null],
    ["ἀνῦσαι","ἀνύω","infinitive","aorist","active","infinitive",null,null,null,null],
    ["ἀνύσασθαι","ἀνύω","infinitive","aorist","middle","infinitive",null,null,null,null],
    ["ἀνυσθῆναι","ἀνύω","infinitive","aorist","passive","infinitive",null,null,null,null],
    ["ἀνύων","ἀνύω","participle","present","active","participle",null,"masc","nom","sg"],
    ["ἀνύουσα","ἀνύω","participle","present","active","participle",null,"fem","nom","sg"],
    ["ἀνῦον","ἀνύω","participle","present","active","participle",null,"neut","nom","sg"],
    ["ἀνύσας","ἀνύω","participle","aorist","active","participle",null,"masc","nom","sg"],
    ["ἀνύσασα","ἀνύω","participle","aorist","active","participle",null,"fem","nom","sg"],
    ["ἀνῦσαν","ἀνύω","participle","aorist","active","participle",null,"neut","nom","sg"],
    ["ἀνυσθείς","ἀνύω","participle","aorist","passive","participle",null,"masc","nom","sg"],
    ["ἀνυσθεῖσα","ἀνύω","participle","aorist","passive","participle",null,"fem","nom","sg"],
    ["ἀνυσθέν","ἀνύω","participle","aorist","passive","participle",null,"neut","nom","sg"]
  ];
  for(const row of rows){
    const [form,lemma,kind,tense,voice,mood,person,gender,caseValue,number] = row;
    const key = normalizeGreek(form);
    const entry = {lemma,kind,tense,voice,mood};
    if(person) entry.person = person;
    if(gender) entry.gender = gender;
    if(caseValue) entry.case = caseValue;
    if(number) entry.number = number;
    const arr = window.FORM_INDEX[key] = window.FORM_INDEX[key] || [];
    if(!arr.some(e => e.lemma===entry.lemma && e.kind===entry.kind && e.tense===entry.tense && e.voice===entry.voice && e.mood===entry.mood && (e.person||'')===(entry.person||'') && (e.gender||'')===(entry.gender||'') && (e.case||'')===(entry.case||'') && (e.number||'')===(entry.number||''))){
      arr.push(entry);
    }
  }
})();
