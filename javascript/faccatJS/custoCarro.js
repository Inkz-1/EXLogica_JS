function calcularCustoFinalCarro() {
    alert("Cálculo do Custo Final de um Carro");

    let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));

    if (isNaN(custoFabrica)) {
        alert("Por favor, digite um valor válido.");
    } 
    else {
        let percentualDistribuidor = 0.28;
        let percentualImpostos = 0.45;

        let valorDistribuidor = custoFabrica * percentualDistribuidor;
        let valorImpostos = custoFabrica * percentualImpostos;
        let custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

        alert(
            "Custo de fábrica: R$ " + custoFabrica.toFixed(2) + "\n" +
            "Distribuidor (28%): R$ " + valorDistribuidor.toFixed(2) + "\n" +
            "Impostos (45%): R$ " + valorImpostos.toFixed(2) + "\n" +
            "Custo final ao consumidor: R$ " + custoFinal.toFixed(2)
        );
    }
}