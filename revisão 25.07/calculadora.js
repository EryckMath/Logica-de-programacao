function carregarVetor(){
    var x = [];
    var num = Number(prompt("Informe um número:"));
    while(num != 0){
        x.push(num);
        num = Number(prompt("Informe um número:[0 para sair]"));
    }
    return x;
}

function soma(vetor){
    var somar = 0
    for(var index in vetor){
        somar = somar + vetor[index];
    }
    return somar
}

function subtracao(vetor){
    var subtrair = vetor[0];
    for(var index in vetor){
        if(index != 0){
            subtrair = subtrair - vetor[index]
        }
        
    }
    return subtrair
}

function multiplicacao(vetor){
    var multiplicar = 1;
    for(var index in vetor){
        multiplicar = multiplicar * vetor[index];
    }
    return multiplicar
}

function divisao(vetor){
    var dividir = vetor[0];
    for(var index in vetor){
        if(index != 0){
            dividir = dividir / vetor[index];
        }
    }
    return dividir
}
function aumento(valor){
    return valor * 1.1
}

function calcular(vetor){
    var x = soma(vetor)
    document.write(`A soma dos números do vetor é: ${soma(vetor)}<br>`);
    document.write(`A multiplicação do vetor é: ${multiplicacao(vetor)}<br>`);
    document.write(`A subtração dos números do vetor é: ${subtracao(vetor)}<br>`);
    document.write(`A divisão dos números do vetor é: ${divisao(vetor)}<br>`);
    document.write(`A soma dos números do vetor é: ${soma(vetor)}, esse valor com 10% de aumento ficará ${aumento(valor)}<br>`);
}










/*function calcular(vetor){
    document.write(`A soma dos valores ${vetor.sort()} é igual a ${soma(vetor)} <br>`)
    document.write(`A subtração dos valores ${vetor.sort()} é igual a ${subtracao(vetor)} <br>`)
}*/
