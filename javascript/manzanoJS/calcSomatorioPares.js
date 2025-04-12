function calcularSomatorioPares() {
    alert("Somatório de pares");
    let somatorio = 0;
    let numero = 2;

    while (numero <= 500) {
        somatorio += numero;
        numero += 2;
    }

    alert("O somatório dos números pares de 1 a 500 é: " + somatorio);
}