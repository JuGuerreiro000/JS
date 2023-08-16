function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  }
  
  const numero = 5;
  const fatorial = calcularFatorial(numero);
  console.log(fatorial);