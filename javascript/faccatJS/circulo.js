function calculoCirculo() {
    alert("Cálculo do círculo");

    let diametro = parseFloat(prompt("Digite o diâmetro do círculo:"));

    if (isNaN(diametro)) {
        alert("Por favor, digite um valor numérico válido.");
    } 
    else {
        let raio = diametro / 2;
        let area = Math.PI * Math.pow(raio, 2);
        alert("A área do círculo é: " + area.toFixed(2));
    }
}