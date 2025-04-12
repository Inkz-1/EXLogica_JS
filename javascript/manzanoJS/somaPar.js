function somarPares500() {
    alert("Cálculo do somatório de números pares entre 1 e 500");

    let soma = 0;
    let i = 1;

    while (i <= 500) {
        if (i % 2 === 0) {
            soma += i;
        }
        i++;
    }

    alert("A soma dos números pares de 1 a 500 é: " + soma);
}