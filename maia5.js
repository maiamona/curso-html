let lista=[1, 2, 3, 4, 5, 6, 7, 8, 9];
lista.sort();
lista.reverse()
for (let i=0; i<lista.length; i++){
    
    if(lista[i]%2!=0){
        continue;
    }
    console.log(lista[i]);
}

