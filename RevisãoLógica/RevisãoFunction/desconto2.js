function calcularDesconto(num){
    var desconto = 0;
    for(var i = 0; i < num.length; i++){
        desconto = num * 0.08;
    }
    return desconto;
}
