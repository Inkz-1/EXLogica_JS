function calcularPrestacaoEmAtraso() {
    alert("Prestação em atraso.");

    let valor = parseFloat(prompt("Digite o valor da prestação:"));
    let taxa = parseFloat(prompt("Digite a taxa de juros (em %):"));
    let tempo = parseInt(prompt("Digite o tempo em dias de atraso:"));

    if (isNaN(valor) || isNaN(texa) || isNaN(tempo)) {
        alert("Por favor, digite valores válidos.");
    }
    else {
        let prestacao = valor + (valor * taxa / 100) * tempo;

        alert("O valor da prestação em atraso é: R$ " + prestacao.toFixed(2));
    }
}
