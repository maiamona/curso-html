let carros =['BMW', 'Volvo', 'Saab', 'Ford', 'mona', 'garcia'];
list: {
    console.log(carros[0]);
    console.log(carros[1]);
    break list;
    console.log(carros[2]);
    console.log(carros[3]);
}
console.log(carros[4]);
console.log(carros[5]);
for (let i=1; i<10;i++){
    if(i===3){
        continue;
    }
    console.log(`o numero atual é ${i}`)
}

for(let num=1; num<10;num++){
    if (num===5){
        break;
    }
    console.log(`o numero é ${num}`)
}