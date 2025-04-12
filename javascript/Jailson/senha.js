function verificarSenha() {
    const senhaCorreta = "1234";
    let senha;

    do {
        senha = prompt("Digite a senha de 4 dígitos:");

        if (senha !== senhaCorreta) {
            alert("Senha incorreta! Tente novamente.");
        }
    } while (senha !== senhaCorreta);

    alert("Senha correta! Acesso concedido.");
}