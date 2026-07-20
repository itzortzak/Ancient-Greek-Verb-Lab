(function(){
  'use strict';
  async function boot(){
    const parts=window.AGVL_VIEWER_PACKED_PARTS||[];
    if(!parts.length) throw new Error('Δεν βρέθηκε το πακέτο λειτουργίας της εφαρμογής.');
    if(typeof DecompressionStream!=='function') throw new Error('Ο φυλλομετρητής δεν υποστηρίζει την αποσυμπίεση της εφαρμογής.');
    const binary=atob(parts.join(''));
    const bytes=new Uint8Array(binary.length);
    for(let i=0;i<binary.length;i+=1) bytes[i]=binary.charCodeAt(i);
    const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    const source=await new Response(stream).text();
    const blobUrl=URL.createObjectURL(new Blob([source],{type:'text/javascript;charset=utf-8'}));
    const script=document.createElement('script');
    script.src=blobUrl;
    script.onload=()=>URL.revokeObjectURL(blobUrl);
    script.onerror=()=>{URL.revokeObjectURL(blobUrl);throw new Error('Αποτυχία εκκίνησης της εφαρμογής.');};
    document.body.appendChild(script);
  }
  boot().catch(error=>{
    console.error(error);
    const status=document.getElementById('analyzeStatus');
    if(status) status.textContent=error.message||String(error);
  });
})();
