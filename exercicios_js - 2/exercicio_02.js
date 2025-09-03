// OBJETOS LITERAIS POSSUEM ATRIBUTOS E MÉTODOS

// OBJETO LITERAL NÃO DERIVA DE CLASSES

const listaClientes = {
    Nome: "gol",
    Endereco: "vermelho",
    cpf: 06572452832,

listaClientes.forEach(nome => {
    document.write(`
        Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preco: ${produto.preco} <br>
        Descrição: ${produto.nome} <br><br>

        `)
}

    
    
    acelerar() {
        return " Acelerando...";
    },
    frear() {
        return " Freando...";
    },
};

//exibindo as propriedade do objeto
document.write(`<p>O modelo do carro é ${carro.modelo}.</p>`)
document.write(`<p>A cor do carro é ${carro.cor}.</p>`)
document.write(`<p>${carro.acelerar()}.</p>`)
document.write(`<p>${carro.frear()}.</p>`)

const produto = {
    nome: "computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: " PC moderno com bom desempenho."
}

document.write(`<p>O ${produto.nome} da marca ${produto.marca} custa ${produto.preco}. ${produto.descricao}<br></p>`)

const listaProdutos = [{
    nome: "computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: " PC moderno com bom desempenho."
},
{
    nome: "tablet",
    marca: "samsung",
    preco: 2000,
    descricao: "Ótima velocidade."
    
},
{
    nome: "celular",
    marca: "apple",
    preco: 6000,
    descricao: "ultra resistente."

}];



//exibindo o array de objetos com forEach





