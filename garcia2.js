function carregar(){
var msg=window.document.getElementById('msg');
var img=window.document.getElementById('imagen');
var data=new Date();
var hora = data.getHours();
var min =data.getMinutes();

msg.innerHTML=`agora são <strong>${hora} : ${min}</strong> `
if(hora >=5 && hora <12){
    msg.innerHTML+=` bom dia para ti`
    img.src = `manha.jpg`
    document.body.style.backgroundColor = "#e8da8c";
} else if(hora >=12 && hora <19){
    msg.innerHTML+=` boa tarde para ti`
    img.src = `tarde.jpg`
    document.body.style.backgroundColor = '#f5821f';
} else if( hora >=19 &&  hora < 23){
    msg.innerHTML+=` boa noite para ti`
    img.src = `noite.jpg`
    document.body.style.backgroundColor = '#3e3535';
} else if(hora >=0 && hora <5){
    msg.innerHTML+=` boa noite para ti ja passa da meia noite`
    img.src = `noite.jpg` 
    document.body.style.backgroundColor = '#3e3535';
}

}
