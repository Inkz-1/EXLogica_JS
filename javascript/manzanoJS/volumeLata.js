function calcularVolume() {
    alert("Calculo do volume de uma lata de óleo")
    let raio = parseFloat(prompt("Digite o raio da lata:"));
    let altura = parseFloat(prompt("Digite a altura da lata:"));

    if (isNaN(raio) || isNaN(altura)) {
        alert("Por favor, digite um número válido.");
    } 
    else{
        let volume = Math.PI * raio * raio * altura;

        alert("O volume da lata de óleo é: " + volume.toFixed(2) + " cm³");
    }

}
