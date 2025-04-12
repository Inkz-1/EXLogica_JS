function contarVogais() {
    let palavra;

    while (true) {
        palavra = prompt("Digite uma palavra (ou 'sair' para finalizar):");

        if (palavra.toLowerCase() === "sair") {
            alert("Programa encerrado.");
            break;
        }

        let contadorVogais = 0;
        
        for (let i = 0; i < palavra.length; i++) {
            let letra = palavra[i].toLowerCase();
            if ("aeiou".includes(letra)) {
                contadorVogais++;
            }
        }
        
        alert("A palavra '" + palavra + "' possui " + contadorVogais + " vogais.");
    }
}