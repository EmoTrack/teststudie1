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
let params = new URLSearchParams(document.location.search);
let serial = params.get("s");


function install() {
let first = localStorage.getItem('y');
console.log(first);
if (first== 123){
x=666;
document.getElementById("ios-prompt").style.display = "block";
document.getElementById("help").style.display = "block";
    }
localStorage.removeItem('y');
localStorage.clear(); 
}
install();
console.log(x);

function app(){

//Link speichern
let link = "https://s2survey.net/EmoWebstudie/?q=emotrack&s=";
console.log(link);

//SERIAL
//aus SMS/Weiterleitungslink

let sosci_link = link+serial;
console.log(sosci_link);
window.location.href = sosci_link;

}

if(x==42){app();}

function done(){app()};

