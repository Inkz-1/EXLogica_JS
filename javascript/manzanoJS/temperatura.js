function converterTemperatura() {
    alert("Conversor de Celsius para Fahrenheit")
    let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

    if (isNaN(celsius)) {
        alert("Por favor, digite um número válido.");
    } 
    else{
        let fahrenheit = (9 * celsius + 160) / 5;

        alert("Temperatura em Fahrenheit: " + fahrenheit.toFixed(2) + "°F");
    }
}
  
