function calcularConceitoAluno() {
    alert("Media do aluno")
    let n1 = parseFloat(prompt("Digite a nota 1:"));
    let n2 = parseFloat(prompt("Digite a nota 2:"));
    let n3 = parseFloat(prompt("Digite a nota 3:"));
    let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));

    let mediaAproveitamento = (n1 + (n2 * 2) + (n3 * 3) + mediaExercicios) / 7;
    let conceito = "";

    if (mediaAproveitamento >= 9.0) {
        conceito = "A";
    } 
    else if (mediaAproveitamento >= 7.5) {
        conceito = "B";
    } else if (mediaAproveitamento >= 6.0) {
        conceito = "C";
    } else {
        conceito = "D";
    }

    alert("Média de Aproveitamento: " + mediaAproveitamento.toFixed(2));
    alert("Conceito: " + conceito);
}