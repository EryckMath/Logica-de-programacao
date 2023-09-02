function calcularArea() {
    var area = lado ** 2;
    return area;
}
function imprimirArea() {
    document.write(` A  área do quadrado é: ${calcularArea()}`)
}
function calcularPerimetro() {
    var perimetro = lado * 4;
    document.write(`<br>O perímetro do quadrado é: ${perimetro}`)
}

