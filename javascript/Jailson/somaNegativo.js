function somarNumeros() {
    alert("Digite números positivos para somar. Digite um número negativo para encerrar.");

    let soma = 0;
    let numero;

    do {
        numero = parseFloat(prompt("Digite um número positivo:"));

        if (numero >= 0) {
            soma += numero;
        }

    } while (numero >= 0);

    alert("A soma total dos números positivos é: " + soma);
}