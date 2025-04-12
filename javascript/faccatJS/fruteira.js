function calcularValorFrutas() {
    alert("Feira de morangos e maças!")
    let kgMorango = parseFloat(prompt("Digite a quantidade de morangos (em Kg):"));
    let kgMaca = parseFloat(prompt("Digite a quantidade de maçãs (em Kg):"));

    let precoMorango = kgMorango <= 5 ? 2.50 : 2.20; //if e else 
    let precoMaca = kgMaca <= 5 ? 1.80 : 1.50;

    let totalMorango = kgMorango * precoMorango;
    let totalMaca = kgMaca * precoMaca;

    let pesoTotal = kgMorango + kgMaca;
    let valorTotal = totalMorango + totalMaca;

    if (pesoTotal > 8 || valorTotal > 25) {
        valorTotal = valorTotal * 0.90;
    }

    alert("Valor total a ser pago: R$ " + valorTotal.toFixed(2));
}
