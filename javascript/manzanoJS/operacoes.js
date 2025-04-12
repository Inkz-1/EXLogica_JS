function operacoesDistributivas() {
    alert("Operações de adição e multiplicação entre quatro números.");

    let a = parseInt(prompt("Digite o valor de A:"));
    let b = parseInt(prompt("Digite o valor de B:"));
    let c = parseInt(prompt("Digite o valor de C:"));
    let d = parseInt(prompt("Digite o valor de D:"));

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        alert("Por favor, digite valores válidos.");
    } 
    else { 
    let resultados = "";

    // A com B, C e D
    resultados += "A + B = " + (a + b) + " | A * B = " + (a * b) + "\n";
    resultados += "A + C = " + (a + c) + " | A * C = " + (a * c) + "\n";
    resultados += "A + D = " + (a + d) + " | A * D = " + (a * d) + "\n";

    // B com C e D
    resultados += "B + C = " + (b + c) + " | B * C = " + (b * c) + "\n";
    resultados += "B + D = " + (b + d) + " | B * D = " + (b * d) + "\n";

    // C com D
    resultados += "C + D = " + (c + d) + " | C * D = " + (c * d);

    alert(resultados);
}
}
