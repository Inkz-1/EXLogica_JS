function mostrarTabuada() {
    let numero = parseInt(prompt("Digite um número para ver a tabuada:"));
    
    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    let resultado = "Tabuada do " + numero + ":\n";
    
    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    
    alert(resultado);
}
