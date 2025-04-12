function divisaoInteira() {
    alert("Divisão");
    let dividendo = parseInt(prompt("Digite o dividendo (número a ser dividido):"));
    let divisor = parseInt(prompt("Digite o divisor (número pelo qual se vai dividir):"));

    if (divisor === 0) {
        alert("Não é possível dividir por zero.");
        return;
    }

    let quociente = 0;

    while (dividendo >= divisor) {
        dividendo -= divisor; 
        quociente++;
    }

    alert("Resultado da divisão inteira: " + quociente);
}