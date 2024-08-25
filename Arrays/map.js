const notas = [10, 9.5, 8, 7, 6]

// const notasAtualizadas = notas.map(function (nota){
//     return ++nota
// })

const notasAtualizadas = notas.map((nota) => ++nota >= 10 ? 10 : nota++)

console.log(notasAtualizadas)