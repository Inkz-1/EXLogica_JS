function calcularCombustivel() {
    alert("Combustível com desconto!")
    let litros = parseFloat(prompt("Informe a quantidade de litros:"));
    let tipo = prompt("Informe o tipo de combustível (A para Álcool, G para Gasolina):").toUpperCase();

    let precoAlcool = 2.90;
    let precoGasolina = 3.30;

    let precoLitro, desconto;

    if (tipo === "A") {
        precoLitro = precoAlcool;
        desconto = litros <= 20 ? 0.03 : 0.05;
    } 
    else if (tipo === "G") {
        precoLitro = precoGasolina;
        desconto = litros <= 20 ? 0.04 : 0.06;
    } 
    else {
        alert("Tipo de combustível inválido.");
        return;
    }

    let valorBruto = litros * precoLitro;
    let valorDesconto = valorBruto * desconto;
    let valorFinal = valorBruto - valorDesconto;

    alert("Valor a ser pago: R$ " + valorFinal.toFixed(2));
}