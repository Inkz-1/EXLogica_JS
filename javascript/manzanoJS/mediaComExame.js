function calcularMediaComExame() {
    alert("Calcule a media e caso a nota seja vermelha, considere a nota de exame.");
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let nota4 = parseFloat(prompt("Digite a terceira nota:"));
    let soma = nota1 + nota2 + nota3 + nota4;

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        alert("Por favor, insira notas válidas.");
        return;
    }
    let media = soma / 4;
    if (media >= 7) {
        alert("Aluno aprovado com média: " + media.toFixed(2));
    } else {
        let notaExame = parseFloat(prompt("A media foi baixa, o alunos está de recuperação. Digite a nota do exame:"));
        if (isNaN(notaExame)) {
            alert("Por favor, insira a nota do exame válida.");
            return;
        }
        let novaMedia = (media + notaExame) / 2;
        if (novaMedia >= 5) {
            alert("Aluno aprovado em exame com média: " + novaMedia.toFixed(2));
        } else {
            alert("Aluno reprovado com média: " + novaMedia.toFixed(2));
        }
    }
}
