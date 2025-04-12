function identificarMaiorEMenor() {
    alert("Identificação do maior e menor valor.");

    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));
    let num3 = parseInt(prompt("Digite o terceiro número:"));
    let num4 = parseInt(prompt("Digite o quarto número:"));
    let num5 = parseInt(prompt("Digite o quinto número:"));

    let maior = num1;
    let menor = num1;

    // Verificando o maior e o menor valor
    if (num2 > maior) maior = num2;
    if (num2 < menor) menor = num2;

    if (num3 > maior) maior = num3;
    if (num3 < menor) menor = num3;

    if (num4 > maior) maior = num4;
    if (num4 < menor) menor = num4;

    if (num5 > maior) maior = num5;
    if (num5 < menor) menor = num5;

    alert("O maior número é: " + maior);
    alert("O menor número é: " + menor);
}
