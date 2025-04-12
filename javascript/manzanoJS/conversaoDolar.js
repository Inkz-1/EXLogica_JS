function converterDolarParaReal() {
    alert("Conversão de Dólar para Real.");
    let cotacao = parseFloat(prompt("Digite a cotação do dólar:"));
    let quantidade = parseFloat(prompt("Digite a quantidade de dólares:"));

    if (isNaN(cotacao) || isNaN(quantidade)) {
        alert("Por favor, digite valores válidos.");
    }
    else {
        let valorReal = cotacao * quantidade;
        alert("Valor em reais: R$ " + valorReal.toFixed(2));
    }
}
