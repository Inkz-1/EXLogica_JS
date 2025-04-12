function sucessor() {
    alert("Descubra o número sucessor");

    let numeroDigitado = parseFloat(prompt("Digite um número:"));

    if (isNaN(numeroDigitado)) {
        alert("Por favor, digite um número válido.");
    } 
    else{
        let sucessor = numeroDigitado + 1;
        alert("O sucessor do número digitado é: " + sucessor);
    }
}