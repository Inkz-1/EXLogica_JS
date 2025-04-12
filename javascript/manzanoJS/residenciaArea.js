function calcularArea() {
    alert("Cálculo da área de cômodos da residência");

    let areaTotal = 0;
    let continuar = "SIM";

    while (continuar.toUpperCase() === "SIM") {
        let nomeComodo = prompt("Digite o nome do cômodo:");
        let largura = parseFloat(prompt("Digite a largura do " + nomeComodo + ":"));
        let comprimento = parseFloat(prompt("Digite o comprimento do " + nomeComodo + ":"));

        let areaComodo = largura * comprimento;
        areaTotal += areaComodo;

        alert("Área do " + nomeComodo + ": " + areaComodo.toFixed(2) + " m²");

        continuar = prompt("Deseja calcular outro cômodo? (SIM/NAO):");

        if (continuar.toUpperCase() === "NAO") {
            alert("Área total da residência: " + areaTotal.toFixed(2) + " m²");
        }
    }
}
