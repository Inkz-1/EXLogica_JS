function mostrarPotenciasDeTres() {
    alert("Potências de 3");

    for (let expoente = 0; expoente <= 15; expoente++){
        let potencia = Math.pow(3, expoente);
        
        alert("3 elevado a " + expoente + " é " + potencia);
    }
}