function conversaoTemperatura() {
    alert("Conversão de temperaturas de Celsius para Fahrenheit (de 10°C até 100°C)");

    let fahrenheit;

    for (let celsius = 10; celsius <= 100; celsius += 10) {
        fahrenheit = (celsius * 9 / 5) + 32;
        alert("Temperatura: " + celsius + "°C = " + fahrenheit + "°F");
    }
}