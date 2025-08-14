// LISTA DE EXERCÍCIOS - 13/08/2025
// O DESAFIO DA CALCULADORA UNIVERSAL

//Tarefa 1 - Saudação Personalizada
const saudacaoPersonalizada = (function (nome1){
  document.write(`<p>Olá, <strong> ${nome1}</strong>! Bem-vindo(a) à Calculadora Universal!</p> `
  );
})("Ricardo")

//Tarefa 2 - Operação Matemática
const operacaoMatematica = (numer1, operador2, numer2) => {
  return eval(`${numer1} ${operador2} ${numer2}`);
};
document.write(`<p>O resultado de é igual a ${operacaoMatematica(1100,"-", 1)}.</p>`
);

//tarefa 3 - ARROW FUNCTION (função anônima)
const calculaDobro = (x) => {
  return x * 2;
};
document.write(`<p>O dobro do número é ${calculaDobro(900)}.</p>`)


//tarefa 4 - ARROW FUNCTION (função anônima) com mais de um parêmetro
const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
// eval no Javascript é uma função nativa que realiza cálculos a partir de dois números e um operador.
document.write(`<p>O resultado da operação é ${calc(1100,"-", 1)}.</p>`)

//SIMPLIFICANDO ARROW FUNCTION com um único retorno
const calculadora = (num1, operador, num2) =>
  eval(`${num1} ${operador} ${num2}`);
document.write(`<p>O resultado da operação é ${calculadora(1100,"+", 1)}.</p>`)

// IIFE - Função Imediata (Immediately Invoked Functions Expression)
const iife = (function() {
  document.write("<p>Estou sendo executada imediatamente!</p>")
})();

//iife com parâmetro
const loadUser = (function (user){
  document.write(`<p>Carregando as informações do usuário: <strong> ${user}</strong>...</p>`
  );
})("Ricardo")
