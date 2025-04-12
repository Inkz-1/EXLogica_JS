function calcularIdades() {
    alert("Comparação de idades e soma entre elas")
    let homem1 = parseInt(prompt("Digite a idade do primeiro homem:"));
    let homem2 = parseInt(prompt("Digite a idade do segundo homem:"));
    let mulher1 = parseInt(prompt("Digite a idade da primeira mulher:"));
    let mulher2 = parseInt(prompt("Digite a idade da segunda mulher:"));

    let homemMaisVelho, homemMaisNovo;
    if (homem1 > homem2) {
        homemMaisVelho = homem1;
        homemMaisNovo = homem2;
    } 
    else {
        homemMaisVelho = homem2;
        homemMaisNovo = homem1;
    }

    let mulherMaisVelha, mulherMaisNova;
    if (mulher1 > mulher2) {
        mulherMaisVelha = mulher1;
        mulherMaisNova = mulher2;
    } 
    else {
        mulherMaisVelha = mulher2;
        mulherMaisNova = mulher1;
    }

    let soma = homemMaisVelho + mulherMaisNova;
    let produto = homemMaisNovo * mulherMaisVelha;

    alert("Soma do homem mais velho com a mulher mais nova: " + soma);
    alert("Produto do homem mais novo com a mulher mais velha: " + produto);
}
