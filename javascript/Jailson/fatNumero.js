function calcularFatorial() {
    let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
    let fatorial = 1;
    let i = 1;

    do {
        fatorial *= i;
        i++;
    } while (i <= numero);

    alert("O fatorial de " + numero + " é: " + fatorial);
}