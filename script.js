let resultadoTela = document.getElementById('resultado')
let mode = document.getElementById('mode')
let calculadora = document.getElementById('calculadora')
let deleteButton = document.getElementById('botaoDeletar')
let historico = document.getElementById('historico')
let modeStatus = 0
let operacao = ""

function mudarMode(){
    if(modeStatus == 0) {
        mode.classList.add('active')
        calculadora.classList.add('active')
        modeStatus = 1
    } else {
        mode.classList.remove('active')
        calculadora.classList.remove('active')
        modeStatus = 0
    }
}
function miniClear() {
    if (operacao !== '') {
        operacao = operacao.slice(-1) === " " ? operacao.slice(0, -3) : operacao.slice(0, -1);
        resultadoTela.value = operacao;
    }
}
function clearResult() {
    operacao = ""
    historico.innerText = operacao
    resultadoTela.value = operacao
}
function numberIncrement(valor){
    if(typeof operacao === 'string' || operacao == '') {
        operacao = operacao + valor
        resultadoTela.value = operacao
    }
}
function operatorIncrement(valor) {
    if (operacao !== '') {
        const lastChar = operacao.toString().charAt(operacao.length - 1);
        operacao = isNaN(parseInt(lastChar)) ? operacao.slice(0, -3) : operacao;
        operacao = `${operacao} ${valor} `;
        resultadoTela.value = operacao;
    }
}
function resultado() {
    if(operacao != "" && operacao.toString().slice(-1) !== " ") 
    {
        historico.innerText = operacao
        operacao = eval(operacao)
        resultadoTela.value = operacao
    }   
}
function inputValidate(input){
    input.value = input.value.replace(/\D/g, '');
}