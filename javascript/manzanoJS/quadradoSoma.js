function quadradoDaSoma() {
    alert("Calculo do quadrado da soma de A, B e C.");
    let a = parseFloat(prompt("Digite o valor de A:"));
    let b = parseFloat(prompt("Digite o valor de B:"));
    let c = parseFloat(prompt("Digite o valor de C:"));
    let soma = a + b + c;

    if (isNaN(a) || isNaN(b) || isNaN(c)){
        alert("Por favor, digite valores válidos.");
    }
    else {
    let resultado = soma * soma;
    alert("Quadrado da soma: " + resultado.toFixed(2));
    }
}
