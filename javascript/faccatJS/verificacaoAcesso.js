function verificarAcesso() {
    alert("Acesse sua conta (código 1234 e senha 9999)")
    let codigoUsuario = parseInt(prompt("Digite o código do usuário:"));

    if (codigoUsuario !== 1234) {
        alert("Usuário inválido!");
    } 
    else {
        let senha = parseInt(prompt("Digite a senha:"));
        if (senha !== 9999) {
            alert("Senha incorreta");
        } 
        else {
            alert("Acesso permitido");
        }
    }
}
