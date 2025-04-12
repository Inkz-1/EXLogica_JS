function verificarEstoque() {
    alert("Verifique a quantidade disponível em estoque");
    let qtdAtual = parseInt(prompt("Digite a quantidade atual em estoque:"));
    let qtdMaxima = parseInt(prompt("Digite a quantidade máxima em estoque:"));
    let qtdMinima = parseInt(prompt("Digite a quantidade mínima em estoque:"));

    if (isNaN(qtdAtual) || isNaN(qtdMaxima) || isNaN(qtdMinima)) {
        alert("Insira apenas valores numéricos válidos.");
        return;
    }

    let qtdMedia = (qtdMaxima + qtdMinima) / 2;

    alert("Quantidade média: " + qtdMedia);

    if (qtdAtual >= qtdMedia) {
        alert("Não efetuar compra");
    } 
    else {
        alert("Efetuar compra");
    }
}