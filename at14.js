function inverterOrdemPalavras(str) {
    const palavras = str.split(" ");
    const palavrasReversas = palavras.reverse();
    const resultado = palavrasReversas.join(" ");
    return resultado;
  }
  
  const frase = "O rato roeu a roupa do rei de Roma";
  const fraseInvertida = inverterOrdemPalavras(frase);
  console.log(fraseInvertida);