/*
var n1=Number.parseInt(window.prompt('digite um numero'));
var n2=Number.parseInt(window.prompt('digite outro numero'));
var s=n1+n2;
window.alert(`${n1} + ${n2} = ${s}`);
*/

var nome= window.prompt('qual o seu nome:');
document.write(`o nome <strong>${nome}</strong> tem ${nome.length} letras <br>`);
document.write(`seu nome em maiusculo é <strong>${nome.toUpperCase()}</strong><br>`);
document.write(`seu nome em menusculo é <strong>${nome.toLowerCase()}</strong><br>`);
window.document.write(window.document.charset+'<br>');
window.document.write(window.navigator.appName+ '<br>');
window.document.write(window.document.URL+'<br>');
var corpo=window.document.body;
var mona=window.document.getElementsByTagName('p')[1];
var d=window.document.getElementById('s');
mona.style.color = 'red';
window.document.write(mona.innerText);
/*corpo.style.background='orange';*/
d.style.background= 'orange';
//d.innerText= 'Maiamona';
//window.document.getElementById('s').innerHTML='Maiamona';
window.document.querySelector('h1#s').style.color='red';