function somaQuadrados() {
    alert("Calculo da soma dos quadrados de A, B e C.");
    let a = parseFloat(prompt("Digite o valor de A:"));
    let b = parseFloat(prompt("Digite o valor de B:"));
    let c = parseFloat(prompt("Digite o valor de C:"));

    if (isNaN(a) || isNaN(b) || isNaN(c)){
        alert("Por favor, digite valores válidos.");
    }
    else {
        let resultado = (a * a) + (b * b) + (c * c);
        alert("Soma dos quadrados: " + resultado.toFixed(2));
    }
}
