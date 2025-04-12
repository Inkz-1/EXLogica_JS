function calcularRaizes() {
    alert("Equação de segundo grau");
    let a = parseFloat(prompt("Digite o valor de a: "));
    let b = parseFloat(prompt("Digite o valor de b: "));
    let c = parseFloat(prompt("Digite o valor de c"));
    let delta = (b ** 2) - (4 * a * c);
    let raiz1;
    let raiz2;

    if (delta > 0) {
        raiz1 = (-(b) + Math.sqrt(delta)) / (2 * a);
        raiz2 = (-(b) - Math.sqrt(delta)) / (2 * a);
        alert("O valor da primeira raiz é :" + raiz1toFixed(2));
        alert("O valor da segunda raiz é: " + raiz2toFixed(2));
    }
    else if (delta == 0) {
        raiz1 = ((-b) + Math.sqrt(delta)) / (2 * a);
        alert("O valor da primeira raiz é :" + raiz1toFixed(2));
    }
    else {
        alert("Equação não possui raíz real.");
    }
}
