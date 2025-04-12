function mostrarPotencias() {
    alert("Apresentação das potências de 3, do expoente 0 até 15");

    let expoente = 0;
    let resultado = "";

    while (expoente <= 15) {
        let potencia = Math.pow(3, expoente);
        resultado += "3 ^ " + expoente + " = " + potencia + "\n";
        expoente++;
    }

    alert(resultado);
}