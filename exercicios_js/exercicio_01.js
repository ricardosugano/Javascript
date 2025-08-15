// LISTA DE EXERCÍCIOS - 13/08/2025
// O DESAFIO DA CALCULADORA UNIVERSAL

//Tarefa 1 - Saudação Personalizada
const saudacaoPersonalizada = (function (nome1){
  document.write(`<p><strong>Tarefa 1 </strong> </p> `);
  document.write(`<p>Olá, <strong> ${nome1}</strong>! Bem-vindo(a) à Calculadora Universal!</p> `
  );
})("Ricardo")

//Tarefa 2 - Operação Matemática
const operacaoMatematica = (numer1, operador2, numer2) => {
  return eval(`${numer1} ${operador2} ${numer2}`);
};
let numer1 = prompt("Digite o primeiro número");
let operador2 = prompt("Digite a operação");
let numer2 = prompt("Digite o segundo número");
document.write(`<p><strong>Tarefa 2 </strong> </p> `);
document.write(`<p>O resultado de (${numer1} ${operador2} ${numer2}) é igual a ${operacaoMatematica(numer1,operador2, numer2)}.</p>`
);

//tarefa 3 - ARROW FUNCTION (função anônima)
let x = prompt("Digite o número a dobrar");
const calculaDobro = (x) => {
  return x * 2;
};
document.write(`<p><strong>Tarefa 3 </strong> </p> `);
document.write(`<p>O dobro de ${x} é ${calculaDobro(x)}.</p>`)

//tarefa 4 - ARROW FUNCTION
let y = prompt("Digite o número a diidir");
const calcularMetade = (y) => {
  return y / 2;
};
document.write(`<p><strong>Tarefa 4 </strong> </p> `);
document.write(`<p>A metade de ${y} é ${calcularMetade(y)}.</p>`)


// tarefa 5 -IIFE - Função Imediata (Immediately Invoked Functions Expression)
const iife = (function() {
  document.write(`<p><strong>Tarefa 5 </strong> </p> `);
  document.write("<p>Calculadora Universal pronta para uso!</p>")
})();

