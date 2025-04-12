function Tabuada() {
    alert("Tabuada do número digitado");
    let numero = parseInt(prompt("Digite um valor: "));
    let contador = 1;
    let resultado = "";
    
    while (contador<= 10){
        resultado += numero + " X " + contador + " = " + (numero * contador) + "\n";
        contador ++;
    }
    alert(resultado);
    
}


