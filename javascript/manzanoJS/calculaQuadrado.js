function calcularQuadrados() {
    alert("Quadrados dos números inteiros de 15 a 200.");

    let resultado = "";

    for (let i = 15; i <= 200; i++) {
        resultado += "O quadrado de " + i + " é " + (i * i) + "\n";
    }

    alert(resultado);
}
