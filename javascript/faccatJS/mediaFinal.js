function calcularMediaFinal() {
    alert("Cálculo da Média do Aluno");

    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, digite apenas números válidos.");
    } 
    else {
        let mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

        alert(
            "Notas informadas: " + "\n" + "Primeira nota: " + nota1.toFixed(1)  + " Segunda nota: " + nota2.toFixed(1) + " Terceira nota: " + nota3.toFixed(1)  + "\n" + "Média final: " + mediaFinal.toFixed(2));
    }
}