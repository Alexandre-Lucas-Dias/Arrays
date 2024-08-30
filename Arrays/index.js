const arrayVazia = [,,,];

//console.log(arrayVazia)
console.log(arrayVazia.length)

// console.log(arrayVazia[0])
// console.log(arrayVazia[1])
// console.log(arrayVazia[2])

arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)

const arrayNums = [1, 2, 3, 4]

const multiplicacao = arrayNums.map((numero) => numero * 10)

console.log(multiplicacao);

const numeros = [43, 50, 65, 12]
 
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
 
console.log(soma) //170