function listarImpares() {
    alert("Números ímpares de 0 a 20");

    let numero = 0;
    let impares = "";

    while (numero <= 20) {
        if (numero % 2 !== 0) {
            impares += numero + " ";
        }
        numero++;
    }

    alert("Números ímpares de 0 a 20:\n" + impares);
}