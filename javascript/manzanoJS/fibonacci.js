function mostrarFibonacci() {
    alert("Série de Fibonacci até o 15º termo");

    let termo1 = 1;
    let termo2 = 1;
    let contador = 3;
    let resultado = termo1 + " " + termo2 + " ";

    while (contador <= 15) {
        let proximo = termo1 + termo2;
        resultado += proximo + " ";
        termo1 = termo2;
        termo2 = proximo;
        contador++;
    }

    alert("Série de Fibonacci:\n" + resultado);
}