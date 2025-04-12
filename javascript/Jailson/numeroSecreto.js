function adivinharNumero() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativa;

    alert("Tente adivinhar o número secreto entre 1 e 10.");

    do {
        tentativa = parseInt(prompt("Digite um número entre 1 e 10:"));

        if (tentativa < 1 || tentativa > 10 || isNaN(tentativa)) {
            alert("Por favor, digite um número válido entre 1 e 10.");
        } else if (tentativa < numeroSecreto) {
            alert("O número secreto é maior. Tente novamente!");
        } else if (tentativa > numeroSecreto) {
            alert("O número secreto é menor. Tente novamente!");
        }
    } while (tentativa !== numeroSecreto);

    alert("Parabéns! Você acertou o número secreto.");
}
