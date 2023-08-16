function removerDuplicados(array) {
    const arraySemDuplicados = [];
    for (let i = 0; i < array.length; i++) {
      if (arraySemDuplicados.indexOf(array[i]) === -1) {
        arraySemDuplicados.push(array[i]);
      }
    }
    return arraySemDuplicados;
  }
  
  const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5, 5];
  const numerosSemDuplicados = removerDuplicados(numerosDuplicados);
  console.log(numerosSemDuplicados);