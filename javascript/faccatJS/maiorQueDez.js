function verificarMaiorQueDez() {
    alert("Verificação de número...");

    let valor = parseFloat(prompt("Digite um número:"));

    if (isNaN(valor)) {
        alert("Por favor, insira um número válido.");
    } 
    else if (valor > 10) {
        alert("É MAIOR QUE 10!");
    } 
    else if (valor == 10) {
        alert(" VALOR IGUAL A 10!");
    } 
    else {
        alert("NÃO É MAIOR QUE 10!");
    }
}