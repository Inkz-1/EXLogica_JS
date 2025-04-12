function verificarPositivoOuNegativo() {
    alert("Verificação de número positivo ou negativo");

    let valor = parseFloat(prompt("Digite um número:"));

    if (isNaN(valor)) {
        alert("Use um número válido.");
    } 
    else if (valor >= 0) {
        alert("O número é POSITIVO!");
    } 
    else {
        alert("O número é NEGATIVO!");
    }
}