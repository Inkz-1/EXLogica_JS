function calculoHexagono() {
    alert("Cálculo do hexágono");

    let perimetro = parseFloat(prompt("Digite o perímetro:"));
    let apotema = parseFloat(prompt("Digite a apótema:"));

    if (isNaN(perimetro) || isNaN(apotema)) {
        alert("Por favor, digite valores numéricos válidos.");
    } 
    else {
        let area = (perimetro * apotema) / 2;
        alert("A área do hexágono é: " + area.toFixed(2));
    }
}