function calcularQuadradoDiferenca() {
    alert("Calcula o quadrado da diferença entre A e B.");
    let a = parseInt(prompt("Digite o valor de A:"));
    let b = parseInt(prompt("Digite o valor de B:"));

    if (isNaN(a) || isNaN(b)) {
        alert("Por favor, digite valores válidos.");
    }
    else {
    let diferenca = a - b;
    let resultado = diferenca * diferenca;
    alert("O quadrado da diferença é: " + resultado);
    }
}
