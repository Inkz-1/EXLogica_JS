function ordenarValores() {
    alert("Ordem Crescente");

    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, digite valores válidos.");
    } 
    else if (valor1 === valor2) {
        alert("Os valores devem ser diferentes.");
    } 
    else {
        if (valor1 < valor2) {
            alert("Ordem crescente: " + valor1 + ", " + valor2);
        } 
        else {
            alert("Ordem crescente: " + valor2 + ", " + valor1);
        }
    }
}