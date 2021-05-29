var pessoa ={
    idade: 25,
    nome: "julio",
    sobreNome: "Moreira",
    altura: 1.85, 
    casado: false,
    aniversario: function() {
        pessoa.idade++;
    },
    nomeComSobrenome: function() {
        return (pessoa.nome=pessoa.nome+ " " + pessoa.sobreNome);
    }
};