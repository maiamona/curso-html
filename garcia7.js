let v=function(x){
    return x*2
}

function parimpar(n){
    if(n%2==0){
        return 'par'
    } else{
        return 'impar'
    }
}

function soma(n1, n2){
    return n1 + n2
}
/*
function soma(n1=0, n2=0){
    return n1 + n2
}
document.getElementById('res1').innerHTML=`a soma de 2 + 5 = ${soma(2)}`
*/ 
document.getElementById('res').innerHTML=`o valor 5 é ${parimpar(5)}`
document.getElementById('res1').innerHTML=`a soma de 2 + 5 = ${soma(2, 5)}`
document.getElementById('res2').innerHTML=`5 ao quadrado é ${v(5)}`