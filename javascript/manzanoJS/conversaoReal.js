function converterRealParaDolar() {
    alert("Conversão de Real para Dólar.");
    let cotacao = parseFloat(prompt("Digite a cotação do dólar:"));
    let reais = parseFloat(prompt("Digite a quantidade de reais:"));
    if (isNaN(cotacao) || isNaN(reais)) {
        alert("Por favor, digite valores válidos.");
    }
    else {
        let dolar = reais / cotacao;
        alert("Valor em dólares: $ " + dolar.toFixed(2));
    }
}
