function calcularVolumeCaixa() {
    alert("Cálculo do volume de uma caixa retangular.");

    let comprimento = parseFloat(prompt("Digite o comprimento da caixa:"));
    let largura = parseFloat(prompt("Digite a largura da caixa:"));
    let altura = parseFloat(prompt("Digite a altura da caixa:"));

    if (isNaN(comprimento) || isNaN(largura) || isNaN(altura)) {
        alert("Por favor, digite valores válidos.");
    }
    else {
        let volume = comprimento * largura * altura;

        alert("O volume da caixa é: " + volume.toFixed(2) + " m³");
    }
}

