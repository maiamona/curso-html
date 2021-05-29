function ligar(){
    document.getElementById('myImage').src='lampadaon.jpg'
}

function desligar(){
    document.getElementById('myImage').src='lampadaoff.jpg'
}

function desligar2(){
    document.getElementById('myImag').src='lampadaoff.jpg'
}

function quebrar(){
    document.getElementById('myImag').src='lampadabrock.jpg'
}

function toCelsius(f) {
    return (5/9) * (f-32);
  }
  document.getElementById("demo").innerHTML = toCelsius(77);