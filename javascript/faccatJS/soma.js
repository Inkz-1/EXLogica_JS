function soma() {
    alert("Soma de dois valores");
    let numero1 = parseFloat(prompt("Digite o primeiro valor:"));
    let numero2 = parseFloat(prompt("Digite o segundo valor:"));
    
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, digite apenas números válidos.");
    } 
    else{
        let soma = numero1 + numero2;
        alert("O resultado da soma é: " + soma.toFixed(2));
    }
}