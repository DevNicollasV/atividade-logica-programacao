const valorDolar = 5.51;

const valorReal = Number(prompt("Digite o valor em Reais R$:"));
const calcular = (valorDolar * valorReal).toFixed(2)
document.write(`$${valorDolar} dolares em reais dá: R$${calcular}`)