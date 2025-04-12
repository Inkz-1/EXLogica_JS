function mostrarModulo() {
    alert("Módulo de um número inteiro");
    let num = parseInt(prompt("Digite um valor inteiro (positivo ou negativo):"));
    
    if (isNaN(num)) {
        alert("Por favor, digite um número válido.");
        return;
    }
    let modulo;
    if (num < 0) {
        modulo = -num;
    } 
    else {
        modulo = num;
    }
    alert("O módulo de " + num + " é: " + modulo);
}
