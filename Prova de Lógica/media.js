function calcularMedia() {
    var media = (primeiraNota + segundaNota) / 2;
    if (media <= 3) {
        document.write(`${nome}, sua média foi ${media}, logo seu conceito é: Precisa melhorar.`);
    }
    if ((media >= 3.1) && (media <= 6)) {
        document.write(`${nome}, sua média foi ${media}, logo seu conceito é: Regular.`);
    }
    if ((media >= 6.1) && (media <= 8)) {
        document.write(`${nome}, sua média foi ${media}, logo seu conceito é: Bom.`);
    }
    if ((media >= 8.1) && (media <= 10)) {
        document.write(`${nome}, sua média foi ${media}, logo seu conceito é: Muito bom.`);
    }
    if(media > 10){
        document.write(`Sua média é inválida.`)
    }  
}