function calculoLosango() {
    alert("Cálculo do losango");

    let diagonalMaior = parseFloat(prompt("Digite a diagonal maior:"));
    let diagonalMenor = parseFloat(prompt("Digite a diagonal menor:"));

    if (isNaN(diagonalMaior) || isNaN(diagonalMenor)) {
        alert("Por favor, digite valores numéricos válidos.");
    } 
    else {
        let area = (diagonalMaior * diagonalMenor) / 2;
        alert("A área do losango é: " + area.toFixed(2));
    }
}