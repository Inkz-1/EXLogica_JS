function antecessor() {
    alert("Descubra o número antecessor");

    let numeroDigitado = parseFloat(prompt("Digite um número:"));

    if (isNaN(numeroDigitado)) {
        alert("Por favor, digite um número válido.");
    } 
    else{
        let antecessor = numeroDigitado - 1;
        alert("O antecessor do número digitado é: " + antecessor);
    }
}