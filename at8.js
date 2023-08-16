const carrinhoDeCompras = [];

function adicionarItemAoCarrinho(nome, preco, quantidade) {
  const item = {
    nome: nome,
    preco: preco,
    quantidade: quantidade
  };
  carrinhoDeCompras.push(item);
}

function calcularTotalDoCarrinho() {
  let total = 0;
  for (let i = 0; i < carrinhoDeCompras.length; i++) {
    total += carrinhoDeCompras[i].preco * carrinhoDeCompras[i].quantidade;
  }
  return total;
}

adicionarItemAoCarrinho("Camiseta", 25.99, 2);
adicionarItemAoCarrinho("Calça", 49.99, 1);
adicionarItemAoCarrinho("Meias", 7.99, 3);

console.log("Itens no Carrinho:");
for (let i = 0; i < carrinhoDeCompras.length; i++) {
  const item = carrinhoDeCompras[i];
  console.log(`${item.quantidade}x ${item.nome} - R$ ${item.preco.toFixed(2)} cada`);
}

const total = calcularTotalDoCarrinho();
console.log("Total do Carrinho: R$ " + total.toFixed(2));