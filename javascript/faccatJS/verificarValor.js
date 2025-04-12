function verificarValor() {
    alert("Análise do valor digitado");
    let valor = parseFloat(prompt("Digite um valor:"));

    if (isNaN(valor)) {
        alert("Por favor, insira um valor numérico válido.");
        return;
    }

    if (valor > 0) {
        alert("O valor é positivo.");
    } 
    else if (valor < 0) {
        alert("O valor é negativo.");
    } 
    else {
        alert("O valor é zero.");
    }
}