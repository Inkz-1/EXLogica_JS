function calculoTrapezio() {
    alert("Cálculo do trapézio");

    let baseMaior = parseFloat(prompt("Digite a base maior:"));
    let baseMenor = parseFloat(prompt("Digite a base menor:"));
    let altura = parseFloat(prompt("Digite a altura:"));

    if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) {
        alert("Por favor, digite valores numéricos válidos.");
    } 
    else {
        let area = ((baseMaior + baseMenor) * altura) / 2;
        alert("A área do trapézio é: " + area.toFixed(2));
    }
}