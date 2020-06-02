function calcularGorjeta() {
    var valorConta = document.getElementById("valorConta").value
    var qualidadeServ = document.getElementById("qualidadeServ").value
    var quantidadePess = document.getElementById("quantidadePess").value

    //digitar valor inicial
    if (valorConta === '' || qualidadeServ == 0) {
        alert("Por favor inserir o valor")
        return
    }

    //verifica se a quantidade de pessoas e menor ou igual a 1
    if (quantidadePess === "" || quantidadePess <= 1) {
        quantidadePess = 1
        document.getElementById("cada").style.display = "none"
    } else {
        document.getElementById("cada").style.display = "block"
    }

    //calcular a gorjeta
    var total = (valorConta * qualidadeServ) / quantidadePess
        //arredonda o valor
    total = Math.round(total * 100) / 100
        //exibe sempre 2 casas depois da virgula
    total = total.toFixed(2)

    //mostrar valor da gorjeta
    document.getElementById("gorjetaTotal").style.display = "block"
    document.getElementById("gorjeta").innerHTML = total
}

//esconder o valor da gorjeta ao carregar
document.getElementById("gorjetaTotal").style.display = "none"
document.getElementById("cada").style.display = "none"


//calcular a gorjeta ao clicar
document.getElementById("calcular").onclick = function() {
    calcularGorjeta()
}