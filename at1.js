function somarElementos(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
    return soma;
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const resultado = somarElementos(numeros);
  console.log(resultado);