function calcularFatoriais() {
    alert("Cálculo do somatório dos fatoriais de 15 números");

    let somatorio = 0;

    for (let i = 1; i <= 15; i++) {
        let valor = parseInt(prompt("Digite o " + i+"º "+ "valor inteiro positivo:"));

        if (isNaN(valor) || valor < 0) {
            alert("Valor inválido! Digite um número inteiro positivo.");
            i--;
            continue;
        }

        let fatorial = 1;
        for (let j = 2; j <= valor; j++) {
            fatorial *= j;
        }

        somatorio += fatorial;
    }
    alert("O somatório dos fatoriais é: " + somatorio);
}