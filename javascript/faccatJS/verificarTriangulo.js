function verificarTriangulo() {
    alert("Verifique se os três valores digitados formam um triângulo");
    let A = parseFloat(prompt("Digite o valor do lado A:"));
    let B = parseFloat(prompt("Digite o valor do lado B:"));
    let C = parseFloat(prompt("Digite o valor do lado C:"));

    if (A < B + C && B < A + C && C < A + B) {
        alert("Esses valores FORMAM um triângulo.");
    } else {
        alert("Esses valores NÃO FORMAM um triângulo.");
    }
}
