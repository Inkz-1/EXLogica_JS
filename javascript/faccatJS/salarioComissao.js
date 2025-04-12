function calcularSalarioComissao() {
    alert("Cálculo de Salário com Comissão");

    let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor:"));
    let valorVendas = parseFloat(prompt("Digite o valor total das vendas:"));

    if (isNaN(salarioFixo) || isNaN(valorVendas)) {
        alert("Por favor, insira valores válidos.");
    } 
    else {
        let comissao;

        if (valorVendas <= 1500) {
            comissao = valorVendas * 0.03;
        } 
        else {
            comissao = (1500 * 0.03) + ((valorVendas - 1500) * 0.05);
        }
        let salarioTotal = salarioFixo + comissao;
        alert("O salário total do vendedor é: R$ " + salarioTotal.toFixed(2));
    }
}