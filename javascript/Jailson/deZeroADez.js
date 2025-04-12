function exibirNumeros() {
    alert("Numeros de 1 a 10 usando laço repita");

    let numero = 1;
    let resultado = "";

    do {
        resultado += numero + " ";
        numero++;
    } while (numero <= 10);

    alert(resultado);
}