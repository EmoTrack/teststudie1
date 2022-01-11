
function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

//if(!iOS()){
//  window.location.href="https://emotrack.github.io/?first=123";
//}


//Link speichern
let link = "https://www.soscisurvey.de/emotrack2/?q=emotrack&s=";


//Automatische Weiterleitung falls der Link ?s= inkludiert (bei den SMS-Benachrichtigungen ist das der Fall)

function refer() {
let params1 = new URLSearchParams(document.location.search.substring(1));
value = parseInt(params1.get("s"), 10);
console.log(value);
if(!isNaN(value)){
localStorage.setItem('serial', value);
document.getElementById("eingabefeld").style.display = "none";
let check_link1 = link+value;
window.location.href = check_link1;
}
}
refer();

function remove() {

  let params = new URLSearchParams(document.location.search.substring(1));
  first = parseInt(params.get("first"), 10);
  if (first == 666) {
    localStorage.removeItem('serial');
    document.getElementById("eingabefeld").style.display = "block";
    alert("Fehlerhafter Code");
  }
}

remove();

//Sendet den Code an Sosci

function send(){
    let token = document.querySelector("#token").value;
    localStorage.setItem('serial', token);
    check = String(token);
    let link1 = "https://www.soscisurvey.de/emotrack2/?q=emotrack01&s=";
    let check_link = link1+check;
    window.location.href = check_link;
}
 
//Läd Code aus dem lokalen Speicher
let serial = localStorage.getItem('serial');


//Falls ein Code geladen werden kann, wird automatisch zu Sosci weitergeleitet

if (serial == null){
if (isNaN(first)){
  document.getElementById("eingabefeld").style.display = "block";}
}
else
{
if (isNaN(first)){
document.getElementById("eingabefeld").style.display = "none";
check = String(serial); 
let link = "https://www.soscisurvey.de/emotrack2/?q=emotrack&s=";
let check_link = link+check;
window.location.href = check_link;
}
}



