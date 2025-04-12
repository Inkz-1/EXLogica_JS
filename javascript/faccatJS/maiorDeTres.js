function maiorDeTres() {
    alert("Saiba qual o maior valor dentre os três números digitados");
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));
    let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        alert("Por favor, digite apenas números válidos.");
        return;
    }

    let maior;

    if (valor1 > valor2 && valor1 > valor3) {
        maior = valor1;
    } 
    else if (valor2 > valor1 && valor2 > valor3) {
        maior = valor2;
    } 
    else {
        maior = valor3;
    }

    alert("O maior valor é: " + maior);
}
