function diasemNumeros() {
    alert("Dias da semana em números");
    let numero = parseInt(prompt("Digite um valor (1 a 7): "));

    switch (numero) {
        case 1:
            alert("Você digitou 1.");
            alert("Domingo");
            break;
        case 2:
            alert("Você digitou 2.");
            alert("Segunda-Feira");
            break;
        case 3:
            alert("Você digitou 3.");
            alert("Terça-Feira");
            break;
        case 4:
            alert("Você digitou 4.");
            alert("Quarta-Feira");
        case 5:
            alert("Você digitou 5.");
            alert("Quinta-Feira");
            break;
        case 6:
            alert("Você digitou 6.");
            alert("Sexta-Feira");
            break;
        case 7:
            alert("Você digitou 7.");
            alert("Sábado");
            break;
        default:
            alert("Você digitou: " + numero);
            alert("Não possui número correspondente");
            break;
    }
}
