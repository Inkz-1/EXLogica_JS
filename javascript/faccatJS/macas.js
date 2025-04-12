function calcularPrecoMacas() {
    alert("Cálculo do preço das maçãs");

    let quantidade = parseInt(prompt("Quantas maçãs você deseja comprar?"));

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Digite uma quantidade válida.");
    } 
    else {
        let precoUnitario;

        if (quantidade < 12) {
            precoUnitario = 1.30;
        } 
        else {
            precoUnitario = 1.00;
        }

        let custoTotal = quantidade * precoUnitario;

        alert("Você comprou " + quantidade + " maçã(s). Total a pagar: R$ " + custoTotal.toFixed(2));
    }
}