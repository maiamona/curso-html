var Pessoa = function(priNome, ultNome){
    this.priNome=priNome;
    this.ultNome=ultNome;
}

function logPessoa(Pessoa){
    
    console.log(Pessoa);
}

var joao=new Pessoa('joao', 'silva');
var mona=new Pessoa('maiamona', 'garcia');

logPessoa(joao);
logPessoa(mona);