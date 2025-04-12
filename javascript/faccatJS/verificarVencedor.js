function resultadoJogo() {
    alert("Qual o time vencedor?");
    let time1 = prompt("Digite o nome do primeiro time:");
    let time2 = prompt("Digite o nome do segundo time:");

    let gols1 = parseInt(prompt("Quantos gols o " + time1 + " fez?"));
    let gols2 = parseInt(prompt("Quantos gols o " + time2 + " fez?"));

    if (gols1 > gols2) {
        alert("O vencedor foi: " + time1);
    } 
    else if (gols2 > gols1) {
        alert("O vencedor foi: " + time2);
    } 
    else {
        alert("EMPATE");
    }
}