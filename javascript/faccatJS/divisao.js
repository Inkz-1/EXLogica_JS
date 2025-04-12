function divisao() {
    alert("Divisão de dois valores");
    let numero1 = parseFloat(prompt("Digite o primeiro valor:"));
    let numero2 = parseFloat(prompt("Digite o segundo valor:"));
    
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira apenas números válidos.");
    } 
    else if (numero2 === 0) {
        alert("Divisão por zero não é permitida.");
    } 
    else {
        let divisao = numero1 / numero2;
        alert("O resultado da divisão é: " + divisao.toFixed(2));
    }
}