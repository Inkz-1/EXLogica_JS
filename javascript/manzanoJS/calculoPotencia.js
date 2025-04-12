function calcularPotencia() {
    alert("Cálculo da potência de uma base elevada a um expoente");

    let base = parseFloat(prompt("Digite o valor da base:"));
    let expoente = parseInt(prompt("Digite o valor do expoente:"));

    if (isNaN(base) || isNaN(expoente)) {
        alert("Valores inválidos.");
        return;
    }

    let resultado = base ** expoente;

    alert(base + " elevado a " + expoente + " é igual a " + resultado);
}