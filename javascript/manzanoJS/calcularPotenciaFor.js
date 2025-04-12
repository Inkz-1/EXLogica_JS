function calcularPotencia() {
    alert("Cálculo de potência: base elevada ao expoente");

    let base = parseInt(prompt("Digite a base:"));
    let expoente = parseInt(prompt("Digite o expoente:"));
    
    let resultado = 1;

    for (let i = 1; i <= expoente; i++) {
        resultado *= base;
    }

    alert("O resultado de " + base + " elevado a " + expoente + " é: " + resultado);
}