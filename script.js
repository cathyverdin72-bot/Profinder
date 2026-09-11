const jobs = {
"Automobile & Maintenance":["Mechanic","Auto Electrician","Panel Beater","Car Washer"],
"Building & Construction":["Mason","Plumber","Building Electrician","Tiler","Painter","Carpenter","Welder"],
"Restaurant & Hotel":["Cook","Baker","Waiter","Barman","Housekeeping"],
"Home Services":["Cleaner","House Help","Nanny","Gardener","Security Guard","Driver"],
"Commerce":["Sales Rep","Secretary","Accountant","Storekeeper"],
"Technical":["Maintenance Technician","Industrial Electrician","Machine Operator"]
};

const grid = document.getElementById('grid');
const cJob = document.getElementById('cJob');
const wJob = document.getElementById('wJob');

Object.keys(jobs).forEach(cat=>{
  let card = document.createElement('div');
  card.className='card';
  let html=`<h3>${cat}</h3><ul>`;
  jobs[cat].forEach(j=>{
    html+=`<li><span onclick="selectJob('${j}')">${j}</span> <button class="wa" onclick="contactWA('${j}')">WhatsApp</button></li>`;
    cJob.innerHTML+=`<option>${j}</option>`;
    wJob.innerHTML+=`<option>${j}</option>`;
  });
  html+=`</ul>`; card.innerHTML=html; grid.appendChild(card);
});

function doSearch(){
 let q=document.getElementById('q').value.toLowerCase();
 document.querySelectorAll('.card li').forEach(li=>{li.style.display=li.textContent.toLowerCase().includes(q)?'flex':'none'})
}
function selectJob(j){cJob.value=j; document.getElementById('client').scrollIntoView({behavior:'smooth'});}
function contactWA(job){
 window.open(`https://wa.me/2250700000000?text=Hello ProFinder, I need a ${job}`,'_blank');
}
function postRequest(){
 let job=cJob.value; let city=document.getElementById('cCity').value;
 window.open(`https://wa.me/2250700000000?text=NEW REQUEST: ${job} in ${city}`,'_blank');
}
let workers=[];
function addWorker(){
 let name=document.getElementById('wName').value;
 let city=document.getElementById('wCity').value;
 let job=wJob.value;
 let wa=document.getElementById('wWhatsapp').value;
 workers.push({name,city,job,wa});
 let div=document.getElementById('profiles');
 div.innerHTML+=`<div class="profile"><b>${name}</b><br>${job} - ${city}<br><a href="https://wa.me/${wa}" target="_blank"><button class="wa">Contact on WhatsApp</button></a></div>`;
}
function setLang(l){
 if(l==='fr'){
   document.getElementById('h1').innerText="Trouvez un Professionnel Près de Vous";
   document.getElementById('sub').innerText="Mécanicien, Plombier, Cuisinier - Réservez en 2 minutes";
 }
}
