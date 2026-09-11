const ADMIN_WA = "2250749382707"; // Your number 07 49 382 707
// ... [keep all previous 71 jobs code from last message] ...
function contactWA(job){
 window.open(`https://wa.me/${ADMIN_WA}?text=${encodeURIComponent("Bonjour ProFinder CI, je cherche un "+job)}`,"_blank");
}
function postRequest(){
 let job=document.getElementById('cJob').value;
 let city=document.getElementById('cCity').value;
 let desc=document.getElementById('cDesc').value;
 let msg=`🔧 NOUVELLE DEMANDE CLIENT - ProFinder CI\nMétier: ${job}\nVille: ${city}\nDétails: ${desc}`;
 window.open(`https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(msg)}`,"_blank");
}
function toggleTheme(){
 document.body.classList.toggle('dark');
 document.getElementById('themeBtn').innerText = document.body.classList.contains('dark') ? "☀️ Light" : "🌙 Dark";
}
