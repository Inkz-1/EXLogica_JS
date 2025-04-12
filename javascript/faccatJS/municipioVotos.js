function calcularPercentualVotos() {
    alert("Cálculo de Percentual de Votos");

    let totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
    let votosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
    let votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
    let votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

    if (isNaN(totalEleitores) || isNaN(votosBrancos) || isNaN(votosNulos) || isNaN(votosValidos)) {
        alert("Por favor, insira apenas números válidos.");
    } else if (votosBrancos + votosNulos + votosValidos > totalEleitores) {
        alert("A soma dos votos é maior que o total de eleitores. Verifique os valores.");
    } else {
        let percBrancos = (votosBrancos / totalEleitores) * 100;
        let percNulos = (votosNulos / totalEleitores) * 100;
        let percValidos = (votosValidos / totalEleitores) * 100;

        alert(
            "Total de eleitores: " + totalEleitores + ". Votos brancos: " + votosBrancos + " (" + percBrancos + "%)" + " Votos nulos: " + votosNulos + " (" + percNulos + "%)" + " Votos válidos: " + votosValidos + " (" + percValidos + "%)"
        );
    }
}