
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

let x= 42;

//Installationsprompt

function install() {
let first = localStorage.getItem('first');
if (isNaN(first)){
x=666;
document.getElementById("ios-prompt").style.display = "block";
    }
}
install();


function app(){

//Link speichern
let link = "https://www.soscisurvey.de/emotrack2/?q=emotrack&s=";
console.log(link);

//SERIAL
//aus SMS/Weiterleitungslink
  
let params1 = new URLSearchParams(document.location.search.substring(1));
let serial = parseInt(params1.get("s"), 10);

//aus lokalem Speicher

if(isNaN(serial)){
serial = localStorage.getItem('serial');
}  

localStorage.setItem('serial', serial);

let sosci_link = link+serial;
console.log(sosci_link);
window.location.href = sosci_link;
  
}

if (x == 42) {
  localStorage.setItem('first', '123');
  app();
}




