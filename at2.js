function palavrasEmMaiusculas(array) {
    const novoArray = [];
    for (let i = 0; i < array.length; i++) {
      novoArray.push(array[i].toUpperCase());
    }
    return novoArray;
  }
  
  const palavras = ["maçã", "banana", "laranja"];
  const palavrasMaiusculas = palavrasEmMaiusculas(palavras);
  console.log(palavrasMaiusculas);