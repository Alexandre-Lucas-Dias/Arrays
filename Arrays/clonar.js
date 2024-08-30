const notas = [7, 7, 8, 9]
const novaListaNotas = [...notas, 10] // ... é o spread operator. Isso é necessário pois valores de arrays são atribuídos a eles por referência na memória

// novaListaNotas.push(10)

// let nota = 9.75
// let novaNota = nota

// nota = 10

console.log(notas);
console.log(novaListaNotas);