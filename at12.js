function ehPalindromo(str) {
    const stringFormatada = str.replace(/\s/g, "").toLowerCase();
    
    const stringInvertida = stringFormatada.split("").reverse().join("");
    
    return stringFormatada === stringInvertida;
  }
  

  console.log(ehPalindromo("radar"));        
  console.log(ehPalindromo("palavra"));      
  console.log(ehPalindromo("Ame a ema"));    
  console.log(ehPalindromo("No lemon, no melon"));