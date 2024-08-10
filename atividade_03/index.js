const precoCustoProduto = parseInt(prompt("Informe o preço de custo do produto:"));
const acrescimo = parseInt(prompt("Informe o percentual de acréscimo:"));

const valorVenda = precoCustoProduto * (1 + (acrescimo / 100));

document.write(`O valor da venda do produto será de: ${valorVenda}`)