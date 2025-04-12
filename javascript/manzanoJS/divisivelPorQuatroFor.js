function mostrarDivisiveisPor4() {
    alert("Números divisíveis por 4")

    for (let contador = 1; contador < 200; contador++) {
        if (contador % 4 === 0) {
            alert(contador);
        }
    }
}