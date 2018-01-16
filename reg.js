var min=[97,  48, 58, 33, 44,  94,];
var max=[122, 57, 59, 34, 46,  96,];
var P0R0L="", dl=10;
function Rnd(min, max){return Math.floor(Math.random()*(max-min+1))+min}
function FRndChr(i){1==i?i=0:i=Rnd(0,5);return String.fromCharCode(Math.floor(Math.random()*(max[i]-min[i]+1))+min[i]);}
for(var i=1, j=1; i<=dl; i++, j=i){if(j==dl)j=1;P0R0L+=FRndChr(j)};

document.getElementById('accountname').value=P0R0L;
document.getElementById('password').value=P0R0L;
document.getElementById('reenter_password').value=P0R0L;
document.getElementById('email').value=P0R0L+"@mailforspam.com";
document.getElementById('reenter_email').value=P0R0L+"@mailforspam.com";
document.getElementById('i_agree_check').checked = true;

window.open("https://www.mfsa.info/mail/"+P0R0L+"/1");
