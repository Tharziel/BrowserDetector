let userAgent = navigator.userAgent; // Navigator est un object qui contient des infos à propos du navigateur
//console.log(userAgent);
let browser;
if (userAgent.match(/edg/i)) {
    browser ='edge';
} else if(userAgent.match(/firefox|fxios/i)){
    browser ='firefox';
} else if(userAgent.match(/opr/i)){
    browser ='opera';
} else if(userAgent.match(/chrome|chromium|vrios/i)){
    browser ='chrome';
} else if(userAgent.match(/safari/i)){
    browser ='safari';
}else{
    alert('Navigateur non pris en charge !')
}
console.log(browser);

const BROWSER = document.querySelector(`.${browser}`);
BROWSER.classList.add('isSelected');