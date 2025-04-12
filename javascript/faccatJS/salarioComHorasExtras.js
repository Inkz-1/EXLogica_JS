function calcularSalario() {
    alert("Cálculo do Salário com Horas Extras");

    let horasTrabalhadas = parseFloat(prompt("Digite o número total de horas trabalhadas no mês:"));
    let valorHora = parseFloat(prompt("Digite o valor do salário por hora:"));

    if (isNaN(horasTrabalhadas) || isNaN(valorHora) || horasTrabalhadas < 0 || valorHora < 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let horasRegulares = 40 * 4;
    let salarioTotal;

    if (horasTrabalhadas > horasRegulares) {
        let horasExtras = horasTrabalhadas - horasRegulares;
        let valorHoraExtra = valorHora * 1.5;
        salarioTotal = (horasRegulares * valorHora) + (horasExtras * valorHoraExtra);
    } 
    else {
        salarioTotal = horasTrabalhadas * valorHora;
    }

    alert("O salário total do funcionário é R$ " + salarioTotal.toFixed(2));
}