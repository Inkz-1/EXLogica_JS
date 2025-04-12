function calculoRetangulo() {
    alert("Cálculo do retângulo");

    let alturaRetangulo = parseFloat(prompt("Digite a altura:"));
    let larguraRetangulo = parseFloat(prompt("Digite a largura:"));

    if (isNaN(alturaRetangulo) || isNaN(larguraRetangulo)) {
        alert("Por favor, digite valores numéricos válidos.");
    } 
    else {
        let area = alturaRetangulo * larguraRetangulo;
        alert("A área do retângulo é: " + area.toFixed(2));
    }
}