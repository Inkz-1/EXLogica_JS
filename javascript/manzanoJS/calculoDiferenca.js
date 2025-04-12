function calcularDiferenca() {
    alert("Calculo da diferença do maior pelo menor");
    let a = parseFloat(prompt("Digite o primeiro valor inteiro:"));
    let b = parseFloat(prompt("Digite o segundo valor inteiro:"));

    if (isNaN(a) || isNaN(b)) {
        alert("Por favor, digite valores válidos.");
        return;
    }
    let maior, menor;
    if (a > b) {
        maior = a;
        menor = b;
    } 
    else if( a == b){
        alert("Número iguais!")
        return;
    }
    else {
        maior = b;
        menor = a;
    }
    let diferenca = maior - menor;
    alert("A diferença entre " + maior + " e " + menor + " é: " + diferenca);
}
