(()=>{
  const header=document.getElementById('siteHeader');
  const toggle=document.getElementById('menuToggle');
  const nav=document.getElementById('mainNav');
  const sync=()=>header.classList.toggle('scrolled',window.scrollY>38);
  addEventListener('scroll',sync,{passive:true});sync();
  if(toggle&&nav){
    toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
  }
  const year=document.getElementById('siteYear');if(year)year.textContent=new Date().getFullYear();
  const slides=[...document.querySelectorAll('.slide')],counter=document.getElementById('slideIndex');let slide=0;
  const show=i=>{if(!slides.length)return;slide=(i+slides.length)%slides.length;slides.forEach((el,idx)=>{el.classList.toggle('is-active',idx===slide);el.setAttribute('aria-hidden',String(idx!==slide));});if(counter)counter.textContent=String(slide+1).padStart(2,'0')};
  document.getElementById('prevSlide')?.addEventListener('click',()=>show(slide-1));
  document.getElementById('nextSlide')?.addEventListener('click',()=>show(slide+1));
  document.getElementById('photoStage')?.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')show(slide-1);if(e.key==='ArrowRight')show(slide+1)});
  if(slides.length){
    show(0);
    const stage=document.getElementById('photoStage');
    let pointerX=null;
    stage?.addEventListener('touchstart',e=>{pointerX=e.changedTouches?.[0]?.screenX??null},{passive:true});
    stage?.addEventListener('touchend',e=>{if(pointerX===null)return;const dist=(e.changedTouches?.[0]?.screenX??pointerX)-pointerX;pointerX=null;if(Math.abs(dist)>50)show(slide+(dist<0?1:-1))},{passive:true});
  }
  const service=new URLSearchParams(location.search).get('service');
  const select=document.getElementById('inqService');
  const lookup={film:'Film & Video',photo:'Photography',editing:'Editing & Motion',digital:'Digital & Creative'};
  if(select&&lookup[service])select.value=lookup[service];
  const form=document.getElementById('inquiryForm');
  form?.addEventListener('submit',e=>{
    e.preventDefault();
    const get=id=>document.getElementById(id).value.trim();
    const subject=`Moonrise House project inquiry — ${get('inqService')}`;
    const body=`Hi Josh,\n\n${get('inqMessage')}\n\nProject type: ${get('inqService')}\nName: ${get('inqName')}\nEmail: ${get('inqEmail')}`;
    document.getElementById('formNotice').textContent='Your email app should open with a prepared draft. Review it and click Send to complete the inquiry.';
    window.location.href=`mailto:steichen.josh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
