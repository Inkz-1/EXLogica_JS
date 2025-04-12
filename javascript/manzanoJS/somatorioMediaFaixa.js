function somarPares() {
    alert("Cálculo da soma e média dos valores pares entre 50 e 70");

    let numero = 50;
    let soma = 0;
    let quantidade = 0;

    while (numero <= 70) {
        if (numero % 2 === 0) {
            soma += numero;
            quantidade++;
        }
        numero++;
    }

    let media = soma / quantidade;
    alert("Soma dos pares: " + soma + "\nMédia: " + media.toFixed(2));
}
