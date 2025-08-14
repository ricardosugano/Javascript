//ARRAYS: Servem para armazenar uma lista, ou seja, difewrentes elementos em uma única variável.

const products = ["computador", "notebook", "celular", "tablet"]
document.write(`<p>${products}</p>`)
document.write(typeof(products))
document.write("<p>Exibindo um elemento do array através do índice:</p> ")
document.write(`<p>${products[3]}</p>`)
document.write(`<p>percorrendo um array através do forEach</p>`)
products.forEach(produto => {
document.write(`<p>${produto} </p>`);
});
document.write(`<p>mostrando os indices e valores com forEach</p>`)
products.forEach((produto, i) => {
document.write(`<p>${i+1} - ${produto} </p>`);
});

