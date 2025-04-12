function lerValores() {
    alert("Leitura infinita de valores positivos");

    let maiorValor = -Infinity;
    let menorValor = Infinity;

    let valor= 0;
  
    while (valor >= 0) {
        valor = parseInt(prompt("Digite um número inteiro positivo (ou um valor negativo para terminar):"));

        if (valor >= 0) {
            if (valor > maiorValor) {
                maiorValor = valor;
            }
            if (valor < menorValor) {
                menorValor = valor;
            }
        }
    }
    if (isNaN(valor)) {
        alert("Por favor, insira algum valor!");
        return;
    }
    alert("Maior valor informado: " + maiorValor);
    alert("Menor valor informado: " + menorValor);
}
