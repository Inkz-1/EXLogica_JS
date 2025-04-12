function calcularCombustivel() {
    alert("Calcule a quantidade de combustível usada em uma viagem");
    let tempo = parseFloat(prompt("Digite o tempo gasto na viagem:"));
    let velocidade = parseFloat(prompt("Digite a velocidade média:"));

    if (isNaN(tempo) || isNaN(velocidade)) {
        alert("Por favor, digite um número válido.");
    } 
    else{
    let distancia = tempo * velocidade;
    let litrosUsados = distancia / 12;

    alert(
        "Velocidade média: " + velocidade + " km/h\n" + "Tempo gasto: " + tempo + " horas\n" + "Distância percorrida: " + distancia.toFixed(2) + " km\n" + "Litros de combustível usados: " + litrosUsados.toFixed(2) + " L");
    }
}
