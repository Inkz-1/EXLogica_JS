function calcularFatorial() {
    alert("Fatoriais dos números ímpares de 1 a 10");

    let fatorial;

    for (let num = 1; num <= 10; num++) {
        if (num % 2 !== 0) {
            fatorial = 1;

            for (let i = 1; i <= num; i++) {
                fatorial *= i;
            }

            alert("Fatorial de " + num + " é: " + fatorial);
        }
    }
}