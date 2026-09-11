const ADMIN_WA = "2250749382707";

const jobs = {
"Automobile & Maintenance": ["Mechanic / Mécanicien","Auto Electrician / Électricien Auto","Electromechanic / Électromécanicien","Diagnostic Technician / Technicien Diagnostic","Bodywork Panel Beater / Tôlier - Carrossier","Automotive Painter / Peintre Auto","Air Conditioning Technician / Technicien Clim Auto","Tire Specialist / Spécialiste Pneus","Car Washer / Laveur Auto","Detailing Specialist / Spécialiste Detailing"],
"Building & Construction": ["Bricklayer / Maçon","Plumber / Plombier","Building Electrician / Électricien Bâtiment","Site Foreman / Chef de Chantier","Site Manager / Conducteur de Travaux","Tiler / Carreleur","Building Painter / Peintre Bâtiment","Carpenter / Menuisier","Welder / Soudeur","Steel Fixer / Ferrailleur","Formwork Carpenter / Coffreur","Plasterer / Staffeur","Sanitary Installer / Installateur Sanitaire","Refrigeration Technician / Frigoriste","General Laborer / Manœuvre"],
"Restaurant & Hotel": ["Cook / Cuisinier","Head Chef / Chef Cuisinier","Pastry Chef / Pâtissier","Baker / Boulanger","Waiter/Waitress / Serveur","Maître d'Hôtel","Bartender / Barman","Cashier / Caissier","Receptionist / Réceptionniste","Host / Hôtesse","Dishwasher / Plongeur","Dining Room Manager / Responsable Salle","Delivery Person / Livreur","Housekeeping Manager / Gouvernante","Room Attendant / Femme de Chambre"],
"Cleaning & Home Services": ["Cleaning Agent / Agent de Nettoyage","Housekeeper / Femme de Ménage","House Help / Aide Ménagère","Ironing Person / Repasseur","Dry Cleaning Agent / Agent Pressing","Nanny / Nounou","Family Assistant / Aide Familiale","Gardener / Jardinier","Security Agent / Gardien","Private Driver / Chauffeur Privé"],
"Commerce & Administration": ["Sales Rep / Commercial","Sales Agent / Agent Commercial","Sales Manager / Chef des Ventes","Customer Advisor / Conseiller Clientèle","Salesperson / Vendeur","Administrative Assistant / Assistant Administratif","Secretary / Secrétaire","Receptionist / Réceptionniste","Stock Manager / Gestionnaire de Stock","Storekeeper / Magasinier","Accountant / Comptable","Store Manager / Responsable Magasin"],
"Technical, Industry & Maintenance": ["Maintenance Technician / Technicien Maintenance","Industrial Electrician / Électricien Industriel","Industrial Mechanic / Mécanicien Industriel","Welder / Soudeur Industriel","Boilermaker / Chaudronnier","Refrigeration Technician / Technicien Frigoriste","Machinery Technician / Technicien Machines","Machine Operator / Conducteur Machines","Quality Controller / Contrôleur Qualité"]
};

let workers = [
  {name:"Koffi Jean",city:"Grand-Bassam",job:"Cook / Cuisinier",wa:"2250749382707",rate:"15,000 FCFA",verified:true,rating:4.8},
  {name:"Awa Diallo",city:"Grand-Bassam",job:"Plumber / Plombier",wa:"2250749382707",rate:"10,000 FCFA",verified:true,rating:5.0},
  {name:"Moussa Traore",city:"Abidjan",job:"Mechanic / Mécanicien",wa:"2250749382707",rate:"12,000 FCFA",verified:true,rating:4.9},
  {name:"Fatou Bamba",city:"Grand-Bassam",job:"Cook / Cuisinier",wa:"2250749382707",rate:"15,000 FCFA",verified:true,rating:4.7},
  {name:"Yao Serge",city:"Abidjan",job:"Electrician / Électricien",wa:"2250749382707",rate:"12,000 FCFA",verified:false,rating:4.5}
];

const grid=document.getElementById('grid');
const cJob=document.getElementById('cJob');
const wJob=document.getElementById('wJob');
const cityFilter=document.getElementById('cityFilter');

function init(){
  cJob.innerHTML='<option value="">-- Choisissez --</option>';
  wJob.innerHTML='<option value="">-- Choisissez --</option>';
  grid.innerHTML='';
  Object.keys(jobs).forEach(cat=>{
    let card=document.createElement('div'); card.className='card'; card.dataset.cat=cat;
    let html=`<h3>${cat}</h3><ul>`;
    jobs[cat].forEach(j=>{
      html+=`<li data-job="${j.toLowerCase()}"><span onclick="selectJob('${j}')">${j}</span> <button class="wa" onclick="contactWA('${j}')">WhatsApp</button></li>`;
      cJob.innerHTML+=`<option value="${j}">${j}</option>`;
      wJob.innerHTML+=`<option value="${j}">${j}</option>`;
    });
    html+=`</ul>`; card.innerHTML=html; grid.appendChild(card);
  });
  renderWorkers(workers);
  document.getElementById('totalJobs').innerText=71;
  document.getElementById('totalWorkers').innerText=workers.length;
}

// --- FIXED SEARCH ---
function doSearch(){
  const q = document.getElementById('q').value.toLowerCase().trim();
  const city = cityFilter ? cityFilter.value.toLowerCase() : "";
  let found = 0;

  // 1. Filter Job Cards
  document.querySelectorAll('.card').forEach(card=>{
    let visibleItems = 0;
    card.querySelectorAll('li').forEach(li=>{
      const jobText = li.dataset.job;
      const matchJob = !q || jobText.includes(q);
      // city filter does not apply to cards, only workers
      if(matchJob){ li.style.display='flex'; visibleItems++; } else { li.style.display='none'; }
    });
    if(visibleItems>0){ card.style.display='block'; found+=visibleItems; } else { card.style.display='none'; }
  });

  // 2. Filter Worker Profiles
  const filteredWorkers = workers.filter(w=>{
    const matchJob = !q || w.job.toLowerCase().includes(q);
    const matchCity = !city || w.city.toLowerCase().includes(city);
    return matchJob && matchCity;
  });
  renderWorkers(filteredWorkers);

  // 3. Scroll to results + show message
  document.getElementById('grid').scrollIntoView({behavior:'smooth'});
  if(filteredWorkers.length===0 && found===0){
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:30px;background:var(--card);border-radius:12px">
    <h3>Aucun résultat pour "${q}" à ${city||'toutes villes'}</h3>
    <p>Essayez "Plombier" ou "Cuisinier" sans ville</p>
    <button onclick="resetSearch()" style="padding:10px 20px;background:#0d2a54;color:#fff;border:none;border-radius:8px;margin-top:10px">Voir tout</button></div>`;
  }
}

function resetSearch(){
  document.getElementById('q').value='';
  if(cityFilter) cityFilter.value='';
  init();
}

function filterCat(keyword){
  if(keyword==='all'){ init(); return; }
  document.getElementById('q').value=keyword;
  doSearch();
}

function selectJob(j){ cJob.value=j; document.getElementById('client').scrollIntoView({behavior:'smooth'}); }
function contactWA(job){ window.open(`https://wa.me/${ADMIN_WA}?text=${encodeURIComponent("Bonjour ProFinder CI, je cherche un "+job+" à Grand-Bassam")}`,'_blank'); }
function renderWorkers(list){
  const div=document.getElementById('profiles'); div.innerHTML='';
  if(list.length===0){ div.innerHTML='<p>Aucun pro trouvé. Essayez une autre ville ou métier.</p>'; return; }
  list.forEach(w=>{
    div.innerHTML+=`<div class="profile"><span class="badge">${w.verified?'Vérifié ✅':'Nouveau'}</span>
    <b>${w.name}</b> ⭐ ${w.rating}<br>${w.job}<br>📍 ${w.city} - ${w.rate}<br><br>
    <a href="https://wa.me/${w.wa}?text=${encodeURIComponent("Bonjour "+w.name+", je vous ai trouvé sur ProFinder CI pour "+w.job)}" target="_blank">
    <button class="wa">WhatsApp</button></a></div>`;
  });
}
function toggleTheme(){ document.body.classList.toggle('dark'); const btn=document.getElementById('themeBtn'); if(!btn)return; btn.innerText=document.body.classList.contains('dark')?'☀️ Light':'🌙 Dark'; const logo=document.querySelector('.logo img'); if(logo){ logo.src=document.body.classList.contains('dark')?'logo-dark.png':'logo.png'; } }
function setLang(l){ /* translation code from before */ }

init();
