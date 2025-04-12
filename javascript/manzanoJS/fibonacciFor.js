function calcularFibonacci() {
    
    let n = 15;
    let fib1 = 1;
    let fib2 = 1;
    let resultado = fib1 + ", " + fib2;

    for (let i = 3; i <= n; i++) {
        let proximo = fib1 + fib2;
        resultado += ", " + proximo;
        fib1 = fib2;
        fib2 = proximo;
    }

    alert("Série de Fibonacci até o 15º termo: " + resultado);
}
