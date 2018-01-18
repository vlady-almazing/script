var n=['accountname', 'email', 'reenter_email', 'password', 'reenter_password'];
var kol=[11, 9, 9, 11, 11];var min=[97, 48, 95, 47, 95, 47, 95, ];var max=[122, 57, 122, 57, 122, 57, 122,];
var r=['', '', '', '', Rnd(10, 99)+'_PASS-',], m='';
function Rnd(min, max){return Math.floor(Math.random()*(max-min+1))+min}
function Chr(i){1==i?i=0:i=Rnd(0,6);p=Rnd(min[i], max[i]);if(96==p||47==p)p=95;return String.fromCharCode(p);}
function Cre(d){for(var p='', i=1, j=1; i<=d; i++, j=i){if(j==d)j=1;p+=Chr(j)};return p;}
for(var i=0; i<=4; i++){if(3==i){for(var b=1; b<=5; min.pop(), max.pop(), b++){};}
min.push(58, 33, 44, 94, 63);max.push(59, 34, 46, 96, 90);
(2==i||4==i)?r[i-1]=r[i]+=Cre(kol[i]):r[i]=Cre(kol[i]);
if(2==i){r[i]+='@mailforspam.com';m=r[i-1]; r[i-1]+='@mailforspam.com';}}
for(var i=0; i<=4; i++){document.getElementById(n[i]).value=r[i]}
document.getElementById('i_agree_check').checked=true;
window.open('http://js.xn--c1adqbs.in.ua/index.php?m='+m);
//alert(' ');
// $('.input_note').click();
// alert("m = "+m+"\n"+r);
// document.getElementByClassName('input_note').click();
