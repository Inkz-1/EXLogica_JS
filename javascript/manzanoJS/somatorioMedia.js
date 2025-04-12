function calcularMedia() {
    alert("Cálculo do somatório e média de 10 números");

    let contador = 1;
    let soma = 0;

    while (contador <= 10) {
        let valor = parseFloat(prompt("Digite o " + contador + "º valor:"));
        if (isNaN(valor)) {
            alert("Valor inválido. Tente novamente.");
            continue;
        }
        soma += valor;
        contador++;
    }
    let media = soma / 10;
    alert("Somatório: " + soma.toFixed(2) + "\nMédia: " + media.toFixed(2));
}
