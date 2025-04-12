function converterCelsiusParaFahrenheit() {
    alert("Conversão de Celsius para Fahrenheit de 10 em 10 graus");

    let celsius = 10;
    let resultado = "";

    while (celsius <= 100) {
        let fahrenheit = (9 * celsius + 160) / 5;
        resultado += celsius + "°C = " + fahrenheit.toFixed(2) + "°F\n";
        celsius += 10;
    }

    alert(resultado);
}
