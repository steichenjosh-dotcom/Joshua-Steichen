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
  // Inquiry settings: set the data-formspree-endpoint attribute on contact.html
  // to the exact https://formspree.io/f/<FORM_ID> URL from Formspree.
  // Until configured, retain a functional, clearly labeled email-draft option.
  const searchParams=new URLSearchParams(location.search);
  const service=searchParams.get('service');
  const requestedPackage=searchParams.get('package');
  const select=document.getElementById('inqService');
  const websiteField=document.getElementById('websitePackageField');
  const packageSelect=document.getElementById('inqPackage');
  const lookup={
    film:'Film & Video',photo:'Photography',
    editing:'Editing & Motion',digital:'Digital & Creative',
    website:'Website Design',web:'Website Design'
  };
  const packages={
    starter:'Moonrise Starter ($595 introductory)',
    business:'Moonrise Business ($995 introductory)',
    living:'Moonrise Living ($1,495 introductory)'
  };
  if(select&&lookup[service])select.value=lookup[service];
  function syncWebsitePackage(){
    if(!select||!websiteField||!packageSelect)return;
    const visible=select.value==='Website Design';
    websiteField.hidden=!visible;
    packageSelect.disabled=!visible;
  }
  if(select)select.addEventListener('change',syncWebsitePackage);
  if(packageSelect&&packages[requestedPackage])packageSelect.value=packages[requestedPackage];
  syncWebsitePackage();

  const form=document.getElementById('inquiryForm');
  if(form){
    const notice=document.getElementById('formNotice');
    const submit=document.getElementById('inquirySubmit');
    const submitLabel=document.getElementById('inquirySubmitLabel');
    const endpoint=(form.dataset.formspreeEndpoint||'').trim();
    const isRealEndpoint=(()=>{
      try{
        const url=new URL(endpoint);
        return url.origin==='https://formspree.io' &&
          /^\/f\/[A-Za-z0-9_-]+\/?$/.test(url.pathname) &&
          !url.search && !url.hash;
      }catch(err){return false;}
    })();
    if(isRealEndpoint){
      submitLabel.textContent='Send Inquiry';
      notice.textContent='Your message will be submitted through Formspree. Please avoid including sensitive information.';
    }else{
      submitLabel.textContent='Prepare Email';
      notice.textContent='This opens a prepared email draft. Please review it and click Send to complete your inquiry.';
    }

    form.addEventListener('submit',async event=>{
      event.preventDefault();
      if(!form.checkValidity()){
        form.reportValidity();
        return;
      }
      const get=id=>(document.getElementById(id)?.value||'').trim();
      const packageName=packageSelect&&!packageSelect.disabled?packageSelect.value:'';
      const subject='Moonrise House project inquiry — '+get('inqService');
      if(!isRealEndpoint){
        const body=[
          'Hi Moonrise House,',
          '',
          get('inqMessage'),
          '',
          'Project type: '+get('inqService'),
          ...(packageName?['Website package: '+packageName]:[]),
          'Name: '+get('inqName'),
          'Email: '+get('inqEmail')
        ].join('\n');
        notice.dataset.state='info';
        notice.textContent='Your email app should open with a prepared draft. Please review it and click Send — this step does not submit automatically.';
        window.location.href='mailto:josh@moonrisehouse.com?subject='+
          encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
        return;
      }

      submit.disabled=true;
      submitLabel.textContent='Sending…';
      notice.dataset.state='info';
      notice.textContent='Sending your inquiry…';
      try{
        const payload=new FormData(form);
        payload.set('_subject',subject);
        const response=await fetch(endpoint,{
          method:'POST',
          body:payload,
          headers:{Accept:'application/json'}
        });
        if(response.ok){
          notice.dataset.state='success';
          notice.textContent='Thank you! Your inquiry was submitted successfully. Moonrise House will review it and get back to you.';
          form.reset();
          syncWebsitePackage();
        }else if(response.status===429){
          notice.dataset.state='error';
          notice.textContent='Too many requests right now. Please wait and try again, or use the email link above.';
        }else{
          notice.dataset.state='error';
          notice.textContent='We couldn’t send your inquiry. Please try again or use the email link above. Your details are still in the form.';
        }
      }catch(error){
        notice.dataset.state='error';
        notice.textContent='We couldn’t confirm delivery. Please check your connection and try again, or use the email link above.';
      }finally{
        submit.disabled=false;
        submitLabel.textContent='Send Inquiry';
      }
    });
  }
})();
