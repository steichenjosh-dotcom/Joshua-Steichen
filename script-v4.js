const clientFiles=["HIBU.png", "CRMEA.png", "American Heart Association.png", "TCR.png", "PETA.png", "United Way.png", "CR Kernels.png", "Go Daddy.png", "Transamerica.png", "ESPN.png", "UC Davis.png", "TIGI.png", "Barrack Obama.png", "Dubuque Symphony Orchestra.png", "Moo TV.png", "PSAV.png", "JDIFF.png", "REMAX.png", "Metro Studios.png", "National Dance Academy.png", "ADM.png", "Aegon.png", "Salvation Army.png", "ABC.png", "US Bank.png", "Loxahatchee.png", "Green Bay Packers.png", "Double Tree.png", "Fossil Trace Golf Club.png", "Marriott.png", "Childrens Miracle Network.png", "Dupont Pioneer.png", "Wired Production Group.png", "Two Rivers Bank and Trust.png", "Breakers.png", "UofNebraska.png", "Big Ten Network.png", "Iowa State.png", "WLC.png", "Bonita Bay.png", "ACT.png", "UofIowa.png", "NECA.png", "Kirkwood CC.png", "IBEW.png", "Klein Tools.png", "Pixel Flex.png", "Alliant Energy.png", "CR Freedom Festival.png", "Berthel Fisher.png", "CR Bank and Trust.png", "Spectrum Health.png", "March of Dimes.png", "Kaiser Permanente.png", "Rockwell Collins.png", "Cheetah Digital.png", "Johns Island Club.png", "American Cancer Society.png", "Specialized.png", "Minnesota Twins.png", "Hon.png", "CR Country Club.png", "Mercy Hospital.png", "UofArizona.png"];
const artistFiles=["Dwight Yakam.png", "Hank Williams II.png", "Joe Walsh.png", "Jake Owen.png", "REO Speedwagon.png", "Lady Antebellum.png", "Everclear.png", "Zac Brown Band.png", "One Republic.png", "Train.png", "Gin Blossoms.png", "Justin Moore.png", "Blake Shelton.png", "Joan Jett.png", "Dierks Bently.png", "Alan Jackson.png", "Grand Funk Railroad.png", "Eli Young Band.png", "Montgomery Gentry.png", "Sugar Ray.png", "Bruce Springsteen.png", "Rodney Atkins.png", "Toby Keith.png", "Sugar Hill Gang.png", "Tonic.png", "Better Than Ezra.png", "Diamond Rio.png", "Cheap Trick.png", "Craig Morgan.png", "Mirand Lambert.png", "Lynryd Skynryd.png", "Thomas Rhett.png", "Josh Turner.png", "Brantley Gilbert.png", "Keith Urban.png", "Billy Currington.png", "Filter.png", "zz top.png", "Survivor.png", "Bad Company.png", "Flo Rida.png"];
function fill(sel,folder,list){const el=document.querySelector(sel);if(!el)return;const set=[...list,...list];el.innerHTML=set.map(f=>`<div class="logo-item"><img loading="lazy" src="${folder}/${encodeURIComponent(f)}" alt=""></div>`).join('')}
fill('.track.clients','assets/logos/clients_all',clientFiles);fill('.track.artists','assets/logos/artists_all',artistFiles);

// Logo rails stay still until hovered. Cursor position controls a moderate scroll,
// while a center "lens" enlarges marks near the middle of the viewport.
document.querySelectorAll('.marquee').forEach((rail, index)=>{
  const track=rail.querySelector('.track');
  let x=0, velocity=0, raf=null;
  const halfWidth=()=>track.scrollWidth/2;
  const magnify=()=>{
    const rr=rail.getBoundingClientRect();
    const center=rr.left+rr.width/2;
    const radius=Math.min(rr.width*.38,520);
    track.querySelectorAll('.logo-item').forEach(item=>{
      const r=item.getBoundingClientRect();
      const d=Math.abs((r.left+r.width/2)-center);
      const t=Math.max(0,1-d/radius);
      const eased=t*t*(3-2*t);
      const scale=.78 + eased*.57;
      item.style.transform=`scale(${scale.toFixed(3)})`;
      item.style.opacity='1';
    });
  };
  const tick=()=>{
    x += velocity;
    const half=halfWidth();
    if(half){ while(x <= -half) x += half; while(x > 0) x -= half; }
    track.style.transform=`translateX(${x}px)`;
    magnify();
    if(Math.abs(velocity)>.01) raf=requestAnimationFrame(tick); else {raf=null;magnify();}
  };
  rail.addEventListener('mouseenter',magnify);
  rail.addEventListener('mousemove',e=>{
    const r=rail.getBoundingClientRect();
    const n=((e.clientX-r.left)/r.width-.5)*2;
    velocity=-n*2.30;
    magnify();
    if(!raf) raf=requestAnimationFrame(tick);
  });
  rail.addEventListener('mouseleave',()=>{velocity=0;magnify()});
  rail.addEventListener('touchstart',()=>{velocity=index?1.10:-1.10;if(!raf)raf=requestAnimationFrame(tick)},{passive:true});
  rail.addEventListener('touchend',()=>{velocity=0},{passive:true});
  requestAnimationFrame(magnify);
  window.addEventListener('resize',magnify);
});

document.querySelectorAll('#year').forEach(x=>x.textContent=new Date().getFullYear());const lb=document.querySelector('.lightbox');if(lb){document.querySelectorAll('.photo-card img').forEach(img=>img.addEventListener('click',()=>{lb.querySelector('img').src=img.src;lb.classList.add('open')}));lb.querySelector('button').onclick=()=>lb.classList.remove('open');lb.onclick=e=>{if(e.target===lb)lb.classList.remove('open')}}

// Photography filmstrip
const photoAlts=[
  'Quito from the Basilica tower','Papallacta sunset','Behind Basilica bars','Ecuador jungle sunset',
  'Papallacta bridge','Red Rocks sunset','Great Sand Dunes National Park','Telluride sunset',
  'Zapata Falls','Bishop Castle','Calf Creek Falls, Utah','Grand Staircase, Utah',
  'Zebra Slot Canyon','Zebra Slot Canyon trail','Delicate Arch sunrise','Landscape Arch sunset',
  'Bryce Canyon','Fairyland Trail, Bryce Canyon','Canyonlands','Condor','Lion','Hawk-headed parrot',
  'Mandrill','Jellyfish','Parrot clay lick in Ecuador','Cable car over Quito','Quito from above',
  'River sunset in Ecuador','Basilica entrance in Quito','Itamandi EcoLodge','Quito panorama',
  'Basilica interior','Equator line in Ecuador','Papallacta resort','Upper Lake, Colorado',
  'Great Sand Dunes National Park','Devils Garden panorama','Devils Garden, Arches','Arches National Park',
  'Corona Arch sunset','Arches sunrise','Turret Arch through the Windows','Light at Arches National Park',
  'Windows Arch','Sunset at Arches','Bryce Canyon','Fairyland Trail, Bryce Canyon','Canyonlands National Park'
];
const photoOrder=[15,22,31,6,28,10,41,20,33,17,25,3,45,21,29,12,35,24,39,2,30,16,26,8,43,23,32,7,40,11,27,18,34,5,46,1,42,13,36,9,44,14,37,4,47,19,38,48];
const photoStrip=document.querySelector('#photo-filmstrip');
if(photoStrip){
  photoStrip.innerHTML=photoOrder.map((fileNumber,i)=>{
    const alt=photoAlts[fileNumber-1];
    const number=String(fileNumber).padStart(2,'0');
    const src=`assets/photos_v10/p${number}.jpg`;
    return `<button class="film-thumb${i===0?' active':''}" data-full="${src}" data-alt="${alt}"><img loading="lazy" src="${src}" alt="${alt}"></button>`;
  }).join('');
}

const stage=document.querySelector('#photo-stage-image');
const thumbs=[...document.querySelectorAll('.film-thumb')];
if(stage&&thumbs.length){thumbs.forEach((b,i)=>b.addEventListener('click',()=>{stage.src=b.dataset.full;stage.alt=b.dataset.alt||'Joshua Steichen photography';thumbs.forEach(x=>x.classList.remove('active'));b.classList.add('active');const c=document.querySelector('#photo-counter');if(c)c.textContent=String(i+1).padStart(2,'0')+' / '+String(thumbs.length).padStart(2,'0');}));}

const photoBox=document.querySelector('#photo-lightbox');
const photoBoxImg=document.querySelector('#photo-lightbox-image');
if(stage&&photoBox&&photoBoxImg){
  stage.addEventListener('click',()=>{photoBoxImg.src=stage.src;photoBoxImg.alt=stage.alt||'';photoBox.classList.add('open');photoBox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';});
  const closePhoto=()=>{photoBox.classList.remove('open');photoBox.setAttribute('aria-hidden','true');document.body.style.overflow='';};
  photoBox.addEventListener('click',closePhoto);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closePhoto();});
}

document.querySelectorAll('.vimeo-player').forEach(player=>{
  const poster=player.querySelector('.vimeo-poster');
  if(!poster)return;
  poster.addEventListener('click',()=>{
    const iframe=document.createElement('iframe');
    iframe.src=player.dataset.vimeo;
    iframe.title=poster.getAttribute('aria-label')||'Vimeo video player';
    iframe.allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share';
    iframe.referrerPolicy='strict-origin-when-cross-origin';
    iframe.allowFullscreen=true;
    player.replaceChildren(iframe);
  });
});
