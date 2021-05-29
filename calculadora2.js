
document.getElementById('visor').disabled=true;
let esp2=document.getElementById('esp2')
let esp3=document.getElementById('esp3')
let esp4=document.getElementById('esp4')
let esp5=document.getElementById('esp6')
function limpar(){
    document.getElementById('visor').value=''
}

function preencher(valor){
    document.getElementById('visor').value+=valor
   
}

function calcular(){
    var resultado=0;
    resultado=document.getElementById('visor').value
    document.getElementById('visor').value=''
    document.getElementById('visor').value=eval(resultado)
}