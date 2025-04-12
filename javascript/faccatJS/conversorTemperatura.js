function fahrenheitParaCelsius() {
    alert("Conversor de Temperatura Fahrenheit para Celsius");

    let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));

    if (isNaN(fahrenheit)) {
        alert("Por favor, insira um valor numérico válido.");
    } 
    else {
        let celsius = (fahrenheit - 32) * 5 / 9;

        alert(
            "Temperatura em Fahrenheit: " + fahrenheit.toFixed(2) + "° "+ "\n"+ "Temperatura convertida em Celsius: " + celsius.toFixed(2) + "°"
        );
    }
}