const jobs = {
"Automobile & Maintenance / Automobile et Entretien": [
  "Mécanicien / Mechanic",
  "Électricien Auto / Auto Electrician",
  "Électromécanicien / Electromechanic",
  "Technicien Diagnostic / Diagnostic Technician",
  "Tôlier - Carrossier / Bodywork Panel Beater",
  "Peintre Automobile / Automotive Painter",
  "Technicien Climatisation Auto / Air Conditioning Technician",
  "Spécialiste Pneus / Tire Specialist",
  "Laveur Auto / Car Washer",
  "Spécialiste Detailing / Detailing Specialist"
],
"Bâtiment & Construction / Building & Construction": [
  "Maçon / Bricklayer",
  "Plombier / Plumber",
  "Électricien Bâtiment / Building Electrician",
  "Chef de Chantier / Site Foreman",
  "Conducteur de Travaux / Site Manager",
  "Carreleur / Tiler",
  "Peintre Bâtiment / Building Painter",
  "Menuisier / Carpenter",
  "Soudeur / Welder",
  "Ferrailleur / Steel Fixer",
  "Coffreur / Formwork Carpenter",
  "Staffeur - Plâtrier / Plasterer",
  "Installateur Sanitaire / Sanitary Installer",
  "Froid et Climatisation / Refrigeration Technician",
  "Manœuvre / General Laborer"
],
"Restauration & Hôtellerie / Restaurant & Hotel": [
  "Cuisinier / Cook",
  "Chef Cuisinier / Head Chef",
  "Pâtissier / Pastry Chef",
  "Boulanger / Baker",
  "Serveur / Serveuse / Waiter/Waitress",
  "Maître d'Hôtel",
  "Barman / Bartender",
  "Caissier / Cashier",
  "Réceptionniste / Receptionist",
  "Hôtesse / Host",
  "Plongeur / Dishwasher",
  "Responsable Salle / Dining Room Manager",
  "Livreur / Delivery Person",
  "Gouvernante / Housekeeping Manager",
  "Femme de Chambre / Room Attendant"
],
"Entretien & Services à Domicile / Cleaning & Home Services": [
  "Agent de Nettoyage / Cleaning Agent",
  "Femme de Ménage / Housekeeper",
  "Aide Ménagère / House Help",
  "Repasseur / Ironing Person",
  "Agent Pressing / Dry Cleaning Agent",
  "Nounou / Nanny - Babysitter",
  "Aide Familiale / Family Assistant",
  "Jardinier / Gardener",
  "Gardien / Guard - Security Agent",
  "Chauffeur Privé / Private Driver"
],
"Commerce & Administration / Commerce & Administration": [
  "Commercial / Sales Rep",
  "Agent Commercial / Sales Agent",
  "Chef des Ventes / Sales Manager",
  "Conseiller Clientèle / Customer Advisor",
  "Vendeur / Salesperson",
  "Assistant Administratif / Administrative Assistant",
  "Secrétaire / Secretary",
  "Réceptionniste / Receptionist",
  "Gestionnaire de Stock / Stock Manager",
  "Magasinier / Storekeeper",
  "Comptable / Accountant",
  "Responsable Magasin / Store Manager"
],
"Technique, Industrie & Maintenance / Technical, Industry & Maintenance": [
  "Technicien de Maintenance / Maintenance Technician",
  "Électricien Industriel / Industrial Electrician",
  "Mécanicien Industriel / Industrial Mechanic",
  "Soudeur Industriel / Welder",
  "Chaudronnier / Boilermaker",
  "Technicien Frigoriste / Refrigeration Technician",
  "Technicien Machines / Machinery Technician",
  "Conducteur de Machines / Machine Operator",
  "Contrôleur Qualité / Quality Controller"
]
};

// This will auto-fill all dropdowns and cards with the 71 jobs
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

console.log("Total professions loaded: ", document.querySelectorAll('#cJob option').length - 1);
