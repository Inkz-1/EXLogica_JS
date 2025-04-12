function avaliarSaldo() {
    let numeroConta = prompt("Digite o número da conta do cliente:");
    let saldo = parseFloat(prompt("Digite o saldo atual:"));
    let debito = parseFloat(prompt("Digite o valor do débito:"));
    let credito = parseFloat(prompt("Digite o valor do crédito:"));

    if (isNaN(saldo) || isNaN(debito) || isNaN(credito)) {
        alert("Por favor, insira apenas valores numéricos válidos.");
        return;
    }

    let saldoAtual = saldo - debito + credito;

    alert("Conta: " + numeroConta + " | Saldo Atual: R$ " + saldoAtual.toFixed(2));

    if (saldoAtual >= 0) {
        alert("Cliente com saldo Positivo.");
    } 
    else {
        alert("Cliente com saldo Negativo.");
    }
}