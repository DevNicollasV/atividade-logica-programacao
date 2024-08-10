const valorDepositado = Number(prompt("Digite o valor que foi Depositado:"));
const taxaJuros = 0.0007
const calcular = valorDepositado * (1 + taxaJuros);
document.write(`O rendimento que deu foi: ${calcular}`)