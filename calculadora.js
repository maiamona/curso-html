// Criando uma variável para capturar o elemento
// do HTML pelo Id. Este elemento mostrará os valores no display.
let inputResultado = document.getElementById("inputDisplayResultado");
// Objeto para mantermos controle dos dados e funcão para calcular.
let calculo = {
    valorSalvo: null,
    funcaoParaCalcular: null
};
let res=document.getElementById('res');
// Ao carregar a janela, inicializa os métodos e variaveis
window.addEventListener("load", function () {
    atribuirEventos();
})
// Adiciona o número na tela
function inserirNumero() {
    // Se o valor na tela não for um número,
    // substitui pelo número/valor do botão
    if (isNaN(inputResultado.value)) {
        inputResultado.value = event.target.textContent;
        // Senão, adiciona o texto junto com o existente
    } else {
        // Se o valor na tela for zero, substitui o valor na tela pelo número clicado
        if (inputResultado.value == 0) {
            inputResultado.value = event.target.textContent;
        // Senão adiciona o número ao input para criar digitos maiores que 0
        } else {
            inputResultado.value += event.target.textContent;
        }
    }
}
function atribuirEventos() {
    //Atribui eventos aos números
    document.getElementById("btnValor0").addEventListener("click", inserirNumero);
    document.getElementById("btnValor1").addEventListener("click", inserirNumero);
    document.getElementById("btnValor2").addEventListener("click", inserirNumero);
    document.getElementById("btnValor3").addEventListener("click", inserirNumero);
    document.getElementById("btnValor4").addEventListener("click", inserirNumero);
    document.getElementById("btnValor5").addEventListener("click", inserirNumero);
    document.getElementById("btnValor6").addEventListener("click", inserirNumero);
    document.getElementById("btnValor7").addEventListener("click", inserirNumero);
    document.getElementById("btnValor8").addEventListener("click", inserirNumero);
    document.getElementById("btnValor9").addEventListener("click", inserirNumero);
}
// Função que soma dois valores
function somarValores(valor1, valor2){
    return valor1 + valor2;
}
// Função que subtrai o segundo valor do primeiro
function subtrairValores(valor1, valor2){
    return valor1 - valor2;
}
// Função que multiplica dois valores
function multiplcarValores(valor1, valor2){
    return valor1 * valor2;
}
// Função que divide o primeiro valor pelo segundo
function dividirValores(valor1, valor2){
    if(valor2 == 0){
        return "Erro, divisão por zero!";
    }else{
        return valor1 / valor2;
    }
}
// Limpa todos os dados do input e objeto de calculo
function limparDados() {
    inputResultado.value = "";
    calculo.valorSalvo = null;
    calculo.funcaoParaCalcular = null;
}
function inserirPonto(){
    if(inputResultado.value === "" || isNaN(inputResultado.value)){
        inputResultado.value = "0.";
    }else if(!inputResultado.value.includes(".")){
        inputResultado.value = inputResultado.value + ".";
    }
}
function atribuirOperacao(operador){
    if(operador == "+"){
        calculo.funcaoParaCalcular = somarValores;
    } else if(operador == "-"){
        calculo.funcaoParaCalcular = subtrairValores;
    } else if(operador == "*"){
        calculo.funcaoParaCalcular = multiplcarValores;
    } else {
        calculo.funcaoParaCalcular = dividirValores;
    }
}
// função que atualiza o objeto calculo ao clicar nos operadores
function clicarOperador() {
    if(!isNaN(inputResultado.value)){
        if(calculo.valorSalvo == null){
            calculo.valorSalvo = Number(inputResultado.value);
        }else if(calculo.funcaoParaCalcular != null){
            calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));
        }
    }
    let operador = event.target.textContent;
    atribuirOperacao(operador);
    inputResultado.value = operador;
}
function clicarResultado() {
    if(!isNaN(inputResultado.value) && calculo.funcaoParaCalcular != null){
        let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));
        inputResultado.value = resultado;
        calculo.valorSalvo = resultado;
        calculo.funcaoParaCalcular = null;
    }
}