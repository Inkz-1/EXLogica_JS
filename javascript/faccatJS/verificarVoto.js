function verificarVoto() {
    alert("Verificação de direito ao voto");

    let anoAtual = parseInt(prompt("Digite o ano atual:"));
    let anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));

    if (isNaN(anoAtual) || isNaN(anoNascimento)) {
        alert("Por favor, insira apenas números válidos.");
    } 
    else {
        let idade = anoAtual - anoNascimento;

        if (idade >= 16) {
            alert("Você tem " + idade + " anos. Já pode votar!");
        } 
        else {
            alert("Você tem " + idade + " anos. Ainda não pode votar.");
        }
    }
}
