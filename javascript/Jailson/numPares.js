function exibirPares() {
    alert("Números pares de 2 a 20:");

    let numero = 2;
    let resultado = "";

    do {
        resultado += numero + "\n";
        numero += 2;
    } while (numero <= 20);

    alert(resultado);
}