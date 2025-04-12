function calcularDuracaoJogo() {
    alert("Cálculo da duração do jogo");

    let horaInicio = parseInt(prompt("Digite a hora de início do jogo (0 a 23):"));
    let horaFim = parseInt(prompt("Digite a hora de término do jogo (0 a 23):"));

    if (isNaN(horaInicio) || isNaN(horaFim) || horaInicio < 0 || horaInicio > 23 || horaFim < 0 || horaFim > 23) {
        alert("Por favor, insira horas válidas entre 0 e 23.");
        return; //apenas apresenta esse alert
    }

    let duracao;
    if (horaInicio < horaFim) {
        duracao = horaFim - horaInicio;
    } 
    else {
        duracao = (24 - horaInicio) + horaFim;
    }

    alert("A duração do jogo foi de " + duracao + " horas.");
}