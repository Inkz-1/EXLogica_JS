function verificarDivisibilidade() {
    alert("Verificação de números divisíveis por 2 e 3.");

    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));
    let num3 = parseInt(prompt("Digite o terceiro número:"));
    let num4 = parseInt(prompt("Digite o quarto número:"));

    let divisiveis = [];

    // Verifica divisibilidade por 2 e 3
    if (num1 % 2 === 0 && num1 % 3 === 0) {
        divisiveis.push(num1);
    }
    if (num2 % 2 === 0 && num2 % 3 === 0) {
        divisiveis.push(num2);
    }
    if (num3 % 2 === 0 && num3 % 3 === 0) {
        divisiveis.push(num3);
    }
    if (num4 % 2 === 0 && num4 % 3 === 0) {
        divisiveis.push(num4);
    }

    if (divisiveis.length > 0) {
        alert("Os números divisíveis por 2 e 3 são: " + divisiveis.join(", "));
    } else {
        alert("Nenhum número é divisível por 2 e 3.");
    }
}