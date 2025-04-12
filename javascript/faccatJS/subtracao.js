function subtracao() {
    alert("Subtração de dois valores");
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, digite apenas números válidos.");
    } 
    else{
        let subtracao = numero1 - numero2;
        alert("A subtração dos números digitados é: " + subtracao.toFixed(2));
    }
}