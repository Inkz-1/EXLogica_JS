function idadeDias() {
    alert("Descubra quantos dias você já viveu");

    let anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
    let mesNascimento = parseInt(prompt("Digite o mês de nascimento(1 a 12):"));
    let diaNascimento = parseInt(prompt("Digite o dia de nascimento:"));

    let anoAtual = parseInt(prompt("Digite o ano atual:"));
    let mesAtual = parseInt(prompt("Digite o mês atual:"));
    let diaAtual = parseInt(prompt("Digite o dia atual:"));

    if (
        isNaN(anoNascimento) || isNaN(mesNascimento) || isNaN(diaNascimento) ||
        isNaN(anoAtual) || isNaN(mesAtual) || isNaN(diaAtual)
    ) {
        alert("Por favor, preencha todos os campos com valores numéricos válidos.");
    } 
    else {
        let totalDiasNascimento = (anoNascimento * 365) + (mesNascimento * 30) + diaNascimento;
        let totalDiasAtual = (anoAtual * 365) + (mesAtual * 30) + diaAtual;
        let totalVivido = totalDiasAtual - totalDiasNascimento;
        let idade = anoAtual - anoNascimento;

        alert(
            "Nascido em " + diaNascimento + "/" + mesNascimento + "/" + anoNascimento + " Você tem: " + idade + " anos." + " Você viveu aproximadamente " + totalVivido + " dias. Parabéns. Sua história ainda está longe do fim. Continue deixando sua marca no mundo!");
    }
}