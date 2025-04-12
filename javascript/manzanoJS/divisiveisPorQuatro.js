function mostrarDivisiveisPor4() {
    alert("Números divisiveis por 4");
    let numero = 1;

    while (numero < 200) {
        if (numero % 4 === 0) {
            console.log(numero);
        }
        numero++; 
    }
}