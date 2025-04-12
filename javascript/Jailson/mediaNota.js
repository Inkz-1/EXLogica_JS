function calcularMediaNotas() {
    alert("Calculo infinito de notas");
    let soma = 0;
    let contador = 0;
    let nota;


    do {
        nota = parseFloat(prompt("Digite uma nota entre 0 e 10:")); 

        if (nota >= 0 && nota <= 10) {
            soma += nota;
            contador++;
        } else if (nota >= 0) {
            alert("Nota inválida, por favor insira um valor entre 0 e 10.");
        }
    } while (nota >= 0 && nota <= 10);

    if (contador > 0) {
        let media = soma / contador;
        alert("A média das notas inseridas é: " + media.toFixed(2));
    } else {
        alert("Nenhuma nota válida foi inserida.");
    }
}
