function contarLetra(str, letra) {
    const letraLowerCase = letra.toLowerCase();
    const strLowerCase = str.toLowerCase();
    
    let contador = 0;
    for (let i = 0; i < strLowerCase.length; i++) {
      if (strLowerCase[i] === letraLowerCase) {
        contador++;
      }
    }
    return contador;
  }
  
 
  const frase = "O rato roeu a roupa do rei de Roma";
  const letraAlvo = "r";
  console.log(contarLetra(frase, letraAlvo));
  
  
  
  
  
  