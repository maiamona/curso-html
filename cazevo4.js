var a = window.document.getElementById('area');
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function clicar(){
    a.innerText='clicou';
    a.style.background='blue';
}

function entrar(){
    a.innerText='entrou';
    a.style.background='red';
    
}

function sair(){
    a.innerText='saiu';
    a.style.background='green';
}

