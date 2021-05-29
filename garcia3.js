function verificar(){
    var data= new Date();
    var ano=data.getFullYear();
    var fano=document.getElementById('txtano').value;
    var res=document.getElementById('res');
    if (fano.length ==0 || fano>ano){
        window.alert(`[erro] Verifique os dados e coloque novamente`)
    } else{
        var fsex=document.getElementsByName('radsex');
        var idade=ano-Number(fano);
        /*res.innerHTML=`Idade calculada: ${idade}`*/
    var genero='';
    var img=document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fsex[0].checked){
        genero='Homem';
        if (idade >=0 && idade<3){
img.setAttribute('src', 'bebemenino.jpg');
        } else if (idade >=3 && idade<10){
            img.setAttribute('src', 'criancahomem.jpg');
        }else if ( idade<18){
            img.setAttribute('src', 'adolescentehomem.jpg');
        }else if ( idade<29){
            img.setAttribute('src', 'jovemhomem.jpg');
        }else if ( idade<55){
            img.setAttribute('src', 'senhor.jpg');
        }else if ( idade<150){
            img.setAttribute('src', 'velho.jpg');
        }
    } else if (fsex[1].checked){
        genero='Mulher';
        if (idade >=0 && idade<3){
            img.setAttribute('src', 'bebemenina.jpg');
        } else if (idade >=3 && idade<10){
            img.setAttribute('src', 'criancamenina.jpg');
        }else if ( idade<18){
            img.setAttribute('src', 'adolescentemulher.jpg');
        }else if ( idade<29){
            img.setAttribute('src', 'jovemmulher.jpg');
        }else if ( idade<55){
            img.setAttribute('src', 'senhora.jpg');
        }else if ( idade<150){
            img.setAttribute('src', 'velha.jpg');
        }
    }
    res.style.textAlign='center'
    res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
res.appendChild(img);    
}
}