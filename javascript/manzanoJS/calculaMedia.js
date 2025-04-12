function calcularSomaMedia() {
    alert("Cálculo da soma, média e total de valores positivos");

    let soma = 0;
    let contador = 0;

    while (true) {
        let entrada = prompt("Digite um número (negativo para sair):");
        let valor = parseFloat(entrada);

        if (isNaN(valor)) {
            alert("Entrada inválida. Digite um número válido.");
            continue;
        }

        if (valor < 0) {
            break;
        }

        soma += valor;
        contador++;
    }

    if (contador === 0) {
        alert("Nenhum valor positivo foi informado.");
    } 
    else {
        let media = soma / contador;
        alert("Soma: " + soma + "\nMédia: " + media.toFixed(2) + "\nQuantidade de valores: " + contador);
    }
}
