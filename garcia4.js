function salvar(){
var num =document.getElementById('valor').value;
var result= document.getElementById('res');
var numero=Number(num);

var i=0;
while(i<=10){
    let item=document.createElement('option')
item.text=`${numero} X ${i} = ${numero*i} `;
item.value=`tab${i}`
result.appendChild(item)
i++;
}
/*
for (let i=0; i>=10; i++){
    console.log(` ${numero} X ${i} = ${numero * i}`);
}
*/
result.innerHTML=`${item}`
}
/*
<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
*/ 