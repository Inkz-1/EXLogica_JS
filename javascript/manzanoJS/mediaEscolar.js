function calcularMedia() {
    alert("Verifique se o aluno foi aprovado com base em 4 notas.");
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let nota4 = parseFloat(prompt("Digite a terceira nota:"));
    let soma = nota1 + nota2 + nota3 + nota4;

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        alert("Por favor, insira notas válidas.");
        return;
    }
    else {
        let media = soma / 4;
        if (media >= 5) {
            alert("Aluno aprovado com média: " + media.toFixed(2));
        } else {
            alert("Aluno reprovado com média: " + media.toFixed(2));
        }
    }

}
