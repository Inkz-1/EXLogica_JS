function compararNumeros() {
    alert("Comparação de dois valores");
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));

    if (valor1 === valor2) {
        alert("Números iguais");
    } 
    else if (valor1 > valor2) {
        alert("Primeiro valor digitado é maior");
    } 
    else {
        alert("Segundo valor digitado é maior");
    }
}
