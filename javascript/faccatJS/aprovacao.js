function verificarAprovacao() {
    alert("Verificação de aprovação do aluno");

    let nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação:"));
    let nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação:"));

    if (isNaN(nota1) || isNaN(nota2)) {
        alert("Notas inválidas, por favor, insira valores numéricos.");
    } 
    else {
        let media = (nota1 + nota2) / 2;

        if (media >= 6) {
            alert("Parabéns! Você foi aprovado com média: " + media.toFixed(2));
        } 
        else {
            alert("Infelizmente, você não foi aprovado. Sua média foi: " + media.toFixed(2));
        }
    }
}