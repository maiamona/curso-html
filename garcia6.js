let mona=[7, 4, 6, 8, 2, 5];
var res1=document.getElementById('res1');
var soma=''
console.log(`o array tem ${mona.length} posição`)
mona.push(1)//acrescenta 1 no array mona

let valores=[9, 3, 2, 8, 4, 5];

document.getElementById('res').innerHTML=`<p><b>no array ${valores}</b></p>`
/*
for(let post=0; post<valores.length; post++){
   soma+=`a posição ${post} tem o valor ${valores[post]}<br>`
}
*/
for(let post in valores){
    soma+=`a posição ${post} tem o valor ${valores[post]}<br>`
}
document.getElementById('res2').innerHTML=`o array tem ${valores.length} posição. <br> 8 esta na posição ${valores.indexOf(8)}`
document.getElementById('res3').innerHTML=`contagem crescente ${valores.sort()} `

res1.innerHTML=soma