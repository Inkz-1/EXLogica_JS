function calculoTriangulo() {
    alert("Cálculo do triângulo");

    let baseTriangulo = parseFloat(prompt("Digite a base:"));
    let alturaTriangulo = parseFloat(prompt("Digite a altura:"));
    
    if (isNaN(baseTriangulo) || isNaN(alturaTriangulo)) {
        alert("Por favor, digite valores numéricos válidos.");
    } 
    else {
        let area = (baseTriangulo * alturaTriangulo) / 2;
        alert("A área do triângulo é: " + area.toFixed(2));
    }
}