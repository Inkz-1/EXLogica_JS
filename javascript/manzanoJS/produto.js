function calcularGraos() {
    alert("Multiplição de números (grãos) ate a 64° posição");
    let totalGraos = 0;

    for (let i = 1; i <= 64; i++) {
        totalGraos += Math.pow(2, i - 1);
    }
    alert("O total de grãos de trigo no tabuleiro de xadrez é: " + totalGraos);
}