let num1=7;
let numero=document.getElementById('numero').innerHTML;
if(num1==2){
    console.log('num1: 2');
} else if(num1==1){
    console.log('num1: 1');
} else{
    console.log('num1: ' + num1)
}
if(numero % 2==0){
    alert('o numero é par')
}else{
    alert('o numero é impar')
}