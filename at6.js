function calcularMediaAritmetica(array) {
    if (array.length === 0) {
      return 0;
    }
  
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
  
    return soma / array.length;
  }
  
  const numeros = [10, 20, 30, 40, 50];
  const media = calcularMediaAritmetica(numeros);
  console.log(media); 