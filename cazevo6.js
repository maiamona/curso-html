function calcular(){
    var txtv=document.getElementById('txtvel').value;
  var res =document.querySelector('div#res');
    var vel = Number(txtv);
    res.innerHTML= `<p>Sua velocidade atual é de <strong> ${vel}Km/h</strong></p>`
    if(vel>60){
        res.innerHTML+=`<p>voce esta <strong>MULTADO</strong> por excesso de velocidade</p>`
    } 
    res.innerHTML+=`<p>Dirija sempre com cinto de segurança</p>`

}

/*
terefa
Voce é Angolano ou estrangeiro
*/ 