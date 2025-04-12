function mostrarQuadrados() {
    alert("Mostrando os quadrados de 15 a 200.");

    let numero = 15;
    do {
        alert("Número: " + numero + " | Quadrado: " + (numero * numero));
        numero++;
    } while (numero <= 200);
}