function calcularSalarioFinalVendedor() {
    alert("Cálculo do Salário Final do Vendedor");

    let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor:"));
    let carrosVendidos = parseInt(prompt("Digite o número de carros vendidos:"));
    let valorPorCarro = parseFloat(prompt("Digite o valor da comissão fixa por carro vendido:"));
    let totalVendas = parseFloat(prompt("Digite o valor total das vendas efetuadas:"));

    if (isNaN(salarioFixo) ||isNaN(carrosVendidos) ||isNaN(valorPorCarro) ||isNaN(totalVendas)) {
        alert("Por favor, preencha todos os campos com valores válidos.");
    } 
    else {
        let comissaoFixa = carrosVendidos * valorPorCarro;
        let comissaoPercentual = totalVendas * 0.05;
        let salarioFinal = salarioFixo + comissaoFixa + comissaoPercentual;

        alert(
            "Salário fixo: R$ " + salarioFixo.toFixed(2) + "\n" + "Comissão fixa: R$ " + comissaoFixa.toFixed(2) + "\n" +"Comissão 5% sobre vendas: R$ " + comissaoPercentual.toFixed(2) + "\n" + "Salário final: R$ " + salarioFinal.toFixed(2));
    }
}