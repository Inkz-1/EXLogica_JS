function mostrarMaiorNumero() {
    alert("Comparação entre dois números");

    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira apenas números válidos.");
    } 
    else if (numero1 === numero2) {
        alert("Os números não devem ser iguais, tente novamente com valores diferentes.");
    } 
    else if (numero1 > numero2) {
        alert("O maior número é: " + numero1);
    } 
    else {
        alert("O maior número é: " + numero2);
    }
}
