function calcularFatorial() {
    alert("Fatoriais dos números ímpares de 1 a 10");

    let soma = 0;

    for (let i = 1; i <= 10; i += 2) {
        let fatorial = 1;
        for (let j = 1; j <= i; j++) {
            fatorial *= j;
        }
        soma += fatorial;
    }

    alert("A soma dos fatoriais dos ímpares de 1 a 10 é: " + soma);
}