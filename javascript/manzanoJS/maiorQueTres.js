function verificarValor() {
    alert("Se o valor for maior que 3 ele não sera mostrado")
    let valor = parseInt(prompt("Digite um valor inteiro:"));

    if (valor <= 3) {
        alert("Valor: " + valor);
    } else {
        alert("O valor é maior que 3 e não será mostrado.");
    }
}
