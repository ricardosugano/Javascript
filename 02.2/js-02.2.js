//MÉTODOS DE MANIPULAÇÃO DE VETORES
let vetor = ['Laranja', 'Maça', 'Banana']
document.write(`p>Nosso vetor é o: ${vetor}</p>`)

vetor[3] =  'Morango'
document.write(`p>Nosso vetor agora é o: ${vetor}</p>`)

// PUSH - 
vetor.push('Abacaxi')
document.write(`p>Nosso vetor agora é o: ${vetor}</p>`)

vetor[0] = 'Pera'
document.write(`p>Nosso vetor agora é o: ${vetor}</p>`)

//UNSHIFT
vetor.unshift = ('Laranja')
document.write(`p>Nosso vetor agora é o: ${vetor}</p>`)

//LENGTH
let numbers = [6, 8, 2, 9, 3, 800, 200]
document.write(`p>Nosso vetor agora é o: ${numbers}</p>`)
document.write(`p>O número de elementos desse vetor é : ${numbers.length}</p>`)

//SORT - ORDENA O VETOR
document.write(`p>o PRIMEIRO ELEMENTO DO VETOR É: ${numbers[0]}</p>`)

let numbersOrdenado = numbers.sort()
document.write(`p>O vetor ordenado é o: ${numbersOrdenado}</p>`)

document.write(`p>O vetor ordenado de frutas é: ${vetor.sort()}</p>`)

// ordenando um vetor numérico em ordem crescente
document.write(`<p>${numbers.sort((a, b)=>a - b)}</p>`)

// ordenando um vetor numérico em ordem decrescente
document.write(numbers.sort((a, b)=>b - a))









