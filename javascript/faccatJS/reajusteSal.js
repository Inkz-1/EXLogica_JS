function calcularReajusteSalarial() {
    alert("Cálculo de Reajuste Salarial");

    let salarioAtual = parseFloat(prompt("Digite o salário atual:"));
    let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (%):"));

    if (isNaN(salarioAtual) || isNaN(percentualReajuste)) {
        alert("Por favor, digite valores válidos.");
    } else {
        let reajuste = salarioAtual * (percentualReajuste / 100);
        let novoSalario = salarioAtual + reajuste;

        alert(
            "Salário atual: R$ " + salarioAtual.toFixed(2) + " Percentual de reajuste: " + percentualReajuste +("% ") + " Novo salário: R$ " + novoSalario.toFixed(2)
        );
    }
}