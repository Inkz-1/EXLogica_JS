function trocarValores() {
    alert("Troca dos valores digitados");

    let a = prompt("Digite o valor de A:");
    let b = prompt("Digite o valor de B:");

    if (isNaN(a) || isNaN(b)) {
        alert("Por favor, digite valores válidos.");
    } 
    else { 
    let temp = a;
    a = b;
    b = temp;

    alert("Após a troca:\nValor de A: " + a + "\nValor de B: " + b);
    }
}
