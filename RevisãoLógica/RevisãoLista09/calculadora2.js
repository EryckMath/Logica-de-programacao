function somar(vetor) {
    var soma = 0;
    for (var index = 0; index < vetor.length; index++) {
        soma = soma + vetor[index];
    }
    return soma;
}

function subtracao(vetor) {
    var subtrair = vetor[0];
    for (var index = 1; index < vetor.length; index++) {
        subtrair = subtrair - vetor[index];
    }
    return subtrair;
}

function multiplicar(vetor) {
    var multiplicacao = vetor[0];
    for (var index = 1; index < vetor.length; index++) {
        multiplicacao = multiplicacao * vetor[index];
    }
    return multiplicacao;
}

function divisao(vetor) {
    var dividir = vetor[0];
    for (var index = 1; index < vetor.length; index++) {
        dividir = dividir / vetor[index];
    }
    return dividir;
}

function calcular(vetor) {
    document.write(`O resultado da soma dos valores ${vetor.sort()} é ${somar(vetor)}<br>`);
    document.write(`O resultado da subtração dos valores ${vetor.sort()} é ${subtracao(vetor)}<br>`);
    document.write(`O resultado da multiplicação dos valores ${vetor.sort()} é ${multiplicar(vetor)}<br>`);
    document.write(`O resultado da divisão dos valores ${vetor.sort()} é ${divisao(vetor).toFixed(2)}<br>`);
}


