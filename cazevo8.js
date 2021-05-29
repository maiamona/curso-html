/*
terefa
Voce é Angolano ou estrangeiro .toUpperCase
a.style.background='red'; text-transform: uppercase;
*/ 
function salvar(){
var nome1= document.getElementById('nome').value;
var result= document.getElementById('res');
if(nome1=='Angolana' || nome1=='angolana' || nome1=='ANGOLANA'){
    nome1='angolano';
    result.innerHTML=`<p>voce é <strong> ${nome1}</strong></p>`
} else{
    result.innerHTML=`<p>voce é <strong>ESTRANGEIRO</strong></p>`
}
}