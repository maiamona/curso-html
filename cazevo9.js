function salvar(){
    var nota=document.getElementById('nota').value;
    var result=document.getElementById('res');
    if (nota>=0 && nota<7){
        result.innerHTML=`<p>estas reprovado com (${nota}/20) valores, nota insuficiente obs:catação maxima =(20/20)</p>` 
    } else if (nota>=7 && nota<12){
        result.innerHTML=`<p>voce esta no recurso com (${nota}/20) valores, nota insuficiente obs:catação maxima =(20/20)</p>`
    } else if (nota>=12 && nota<=20){
        result.innerHTML=`<p>voce esta aprovado com (${nota}/20) valores, nota suficiente obs:catação maxima =(20/20)</p>`
    } else {
        result.innerHTML=`<p>Nota invalida a nota vai de 0 a 20. Atualiza a pagina e volta a selecionar a NOTA</p>`
    }

}
