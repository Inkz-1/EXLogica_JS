function calculoQuadrado() {
    alert("Cálculo do quadrado");

    let ladoQuadrado = parseFloat(prompt("Digite o lado do quadrado:"));

    if (isNaN(ladoQuadrado)) {
        alert("Por favor, digite um valor numérico válido.");
    } 
    else {
        let area = ladoQuadrado * ladoQuadrado;
        alert("A área do quadrado é: " + area.toFixed(2));
    }
}