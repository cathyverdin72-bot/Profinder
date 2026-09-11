// COMPLETE DATABASE - 71 PROFESSIONS
const jobs = {
"Automobile & Maintenance": [
  "Mechanic","Auto Electrician","Electromechanic","Diagnostic Technician",
  "Bodywork Panel Beater","Automotive Painter","Air Conditioning Technician",
  "Tire Specialist","Car Washer","Detailing Specialist"
],
"Building & Construction": [
  "Bricklayer / Maçon","Plumber / Plombier","Building Electrician / Électricien Bâtiment",
  "Site Foreman / Chef de Chantier","Site Manager / Conducteur de Travaux","Tiler / Carreleur",
  "Building Painter / Peintre Bâtiment","Carpenter / Menuisier","Welder / Soudeur",
  "Steel Fixer / Ferrailleur","Formwork Carpenter / Coffreur","Plasterer / Staffeur",
  "Sanitary Installer / Installateur Sanitaire","Refrigeration Technician / Frigoriste","General Laborer / Manœuvre"
],
"Restaurant & Hotel": [
  "Cook / Cuisinier","Head Chef / Chef Cuisinier","Pastry Chef / Pâtissier","Baker / Boulanger",
  "Waiter/Waitress / Serveur","Maître d'Hôtel","Bartender / Barman","Cashier / Caissier",
  "Receptionist / Réceptionniste","Host / Hôtesse","Dishwasher / Plongeur",
  "Dining Room Manager / Responsable Salle","Delivery Person / Livreur",
  "Housekeeping Manager / Gouvernante","Room Attendant / Femme de Chambre"
],
"Cleaning & Home Services": [
  "Cleaning Agent / Agent de Nettoyage","Housekeeper / Femme de Ménage",
  "House Help / Aide Ménagère","Ironing Person / Repasseur","Dry Cleaning Agent / Agent Pressing",
  "Nanny / Nounou","Family Assistant / Aide Familiale","Gardener / Jardinier",
  "Security Agent / Gardien","Private Driver / Chauffeur Privé"
],
"Commerce & Administration": [
  "Sales Rep / Commercial","Sales Agent / Agent Commercial","Sales Manager / Chef des Ventes",
  "Customer Advisor / Conseiller Clientèle","Salesperson / Vendeur",
  "Administrative Assistant / Assistant Administratif","Secretary / Secrétaire",
  "Receptionist / Réceptionniste","Stock Manager / Gestionnaire de Stock",
  "Storekeeper / Magasinier","Accountant / Comptable","Store Manager / Responsable Magasin"
],
"Technical, Industry & Maintenance": [
  "Maintenance Technician / Technicien de Maintenance","Industrial Electrician / Électricien Industriel",
  "Industrial Mechanic / Mécanicien Industriel","Welder / Soudeur","Boilermaker / Chaudronnier",
  "Refrigeration Technician / Frigoriste","Machinery Technician / Technicien Machines",
  "Machine Operator / Conducteur de Machines","Quality Controller / Contrôleur Qualité"
]
};

// TRANSLATIONS FOR UI
const trans = {
en:{
  h1:"Find Any Professional Near You",
  sub:"Mechanic, Plumber, Cook, Driver, Nanny - Book in 2 minutes",
  searchBtn:"Search",
  searchPh:"Search e.g Plumber, Cook...",
  clientTitle:"🏢 Client Dashboard - I Need a Service",
  workerTitle:"👷 Worker Dashboard - I Offer a Service",
  postBtn:"Post Request & Share on WhatsApp",
  createBtn:"Create My Professional Profile",
  liveTitle:"Live Professionals Available",
  waBtn:"WhatsApp"
},
fr:{
  h1:"Trouvez un Professionnel Près de Vous",
  sub:"Mécanicien, Plombier, Cuisinier, Chauffeur, Nounou - Réservez en 2 minutes",
  searchBtn:"Rechercher",
  searchPh:"Rechercher ex: Plombier, Cuisinier...",
  clientTitle:"🏢 Espace Client - J'ai Besoin d'un Service",
  workerTitle:"👷 Espace Prestataire - Je Propose un Service",
  postBtn:"Publier & Partager sur WhatsApp",
  createBtn:"Créer Mon Profil Professionnel",
  liveTitle:"Professionnels Disponibles",
  waBtn:"Contacter sur WhatsApp"
}
};

let lang='en';
function setLang(l){
  lang=l;
  document.getElementById('h1').innerText=trans[l].h1;
  document.getElementById('sub').innerText=trans[l].sub;
  document.getElementById('searchBtn').innerText=trans[l].searchBtn;
  document.getElementById('q').placeholder=trans[l].searchPh;
  document.getElementById('clientTitle').innerText=trans[l].clientTitle;
  document.getElementById('workerTitle').innerText=trans[l].workerTitle;
  document.getElementById('postBtn').innerText=trans[l].postBtn;
  document.getElementById('createBtn').innerText=trans[l].createBtn;
  document.getElementById('liveTitle').innerText=trans[l].liveTitle;
  renderWorkers();
}

const grid = document.getElementById('grid');
const cJob = document.getElementById('cJob');
const wJob = document.getElementById('wJob');

Object.keys(jobs).forEach(cat=>{
  let card = document.createElement('div');
  card.className='card';
  let html=`<h3>${cat}</h3><ul>`;
  jobs[cat].forEach(j=>{
    html+=`<li><span>${j}</span> <button class="wa" onclick="contactWA('${j}')">${trans[lang].waBtn}</button></li>`;
    cJob.innerHTML+=`<option>${j}</option>`;
    wJob.innerHTML+=`<option>${j}</option>`;
  });
  html+=`</ul>`; card.innerHTML=html; grid.appendChild(card);
});

function doSearch(){
  let q=document.getElementById('q').value.toLowerCase();
  document.querySelectorAll('.card li').forEach(li=>{li.style.display=li.textContent.toLowerCase().includes(q)?'flex':'none'});
}
function contactWA(job){window.open(`https://wa.me/2250700000000?text=Hello ProFinder CI, I need a ${job}`,'_blank');}
function postRequest(){
  let job=document.getElementById('cJob').value; let city=document.getElementById('cCity').value;
  let msg=encodeURIComponent(`NEW CLIENT REQUEST\nJob: ${job}\nCity: ${city}\nFrom: ProFinder CI website`);
  window.open(`https://wa.me/2250700000000?text=${msg}`,'_blank');
}
let workers=[
  {name:"Koffi Jean",city:"Grand-Bassam",job:"Plumber / Plombier",wa:"2250701234567",rate:"10,000 FCFA"},
  {name:"Awa Diallo",city:"Abidjan",job:"Cook / Cuisinier",wa:"2250707654321",rate:"15,000 FCFA"}
];
function addWorker(){
  let name=document.getElementById('wName').value;
  let city=document.getElementById('wCity').value;
  let job=wJob.value;
  let wa=document.getElementById('wWhatsapp').value;
  let rate=document.getElementById('wRate').value;
  if(!name||!wa) return alert("Add Name and WhatsApp");
  workers.push({name,city,job,wa,rate});
  renderWorkers();
}
function renderWorkers(){
  let div=document.getElementById('profiles'); div.innerHTML="";
  workers.forEach(w=>{
    div.innerHTML+=`<div class="profile"><b>${w.name}</b><br>${w.job}<br>📍 ${w.city} - ${w.rate}<br><br>
    <a href="https://wa.me/${w.wa}?text=Hello ${w.name}, I found you on ProFinder CI" target="_blank">
    <button class="wa">${trans[lang].waBtn}</button></a></div>`;
  });
}
renderWorkers();
