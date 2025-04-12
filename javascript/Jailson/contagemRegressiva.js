function contagemRegressiva() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, digite um número válido e positivo.");
        return;
    }

    let resultado = "Contagem regressiva:\n";

    while (numero >= 0) {
        resultado += numero + "\n";
        numero--;
    }
    alert(resultado);
}