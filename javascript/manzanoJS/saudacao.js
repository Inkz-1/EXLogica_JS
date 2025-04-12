function saudarPessoa() {
    let nome = prompt("Digite seu nome:");
    let sexo = prompt("Digite seu sexo (M para masculino ou F para feminino):").toUpperCase();

    if (sexo === "M") {
        alert("Ilmo Sr. " + nome + ", como vai hoje?");
    } else if (sexo === "F") {
        alert("Ilma Sra. " + nome + ", tudo bem?");
    } else {
        alert("Sexo inválido. Por favor, digite 'M' para masculino ou 'F' para feminino.");
    }
}