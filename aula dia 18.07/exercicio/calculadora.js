function somarTresNumeros(a,b,c){
    var soma = a + b + c;
    return soma;
}
function subtrairTresNumeros(a, b, c){
    var subtração = a - b - c;
    return subtração;
}
function multiplicarTresNumeros(a,b,c){
    var multiplicação = a * b * c;
    return multiplicação;
}
function divisaoTresNumeros(a, b, c){
    var divisao = a / b / c;
    return divisao;
}
function calcular(a,b,c){
    document.write(`O resultado da soma dos valores ${a}, ${b} e ${c} é ${somarTresNumeros(a,b,c)}<br>`);
    document.write(`O resultado da subtração dos valores ${a}, ${b} e ${c} é ${subtrairTresNumeros(a,b,c)}<br>`);
    document.write(`O resultado da multiplicação dos valores ${a}, ${b} e ${c} é ${multiplicarTresNumeros(a,b,c)}<br>`);
    document.write(`O resultado da divisão dos valores ${a}, ${b} e ${c} é ${divisaoTresNumeros(a,b,c)}<br>`);
}
