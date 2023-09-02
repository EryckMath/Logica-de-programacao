function medias(vetor) {
    var soma = 0;
    for (var index = 0; index < vetor.length; index++) {
        soma = soma + vetor[index];
    }
    media = soma / vetor.length
    return media;
}
function calcularMediaDoVetor(vetor) {
    document.write(`A média do ${vetor} é: ${medias(vetor).toFixed(1)}`)
}

