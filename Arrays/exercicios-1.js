// exercício 1

const sparse = [1,,'oi',,,,true]

console.log(sparse)
console.log(sparse.length)

// exercício 2

const cincoElementos = [2, 4, 7, 5, 9]

console.log(cincoElementos)

cincoElementos[0] = 3

console.log(cincoElementos)

// exercício 3

const meuArray = []

meuArray.push(10)
meuArray.push(20)
meuArray.push(30)

console.log(meuArray)

meuArray[0] = 2 * meuArray[0]

console.log(meuArray)

// exercício 4

const outroArray = []

outroArray.push(-1)
outroArray.push(1)
outroArray.push(1050)

console.log(outroArray)

// exercício 5

const clinica = []

clinica.push('dog')
clinica.push('cat')
clinica.push('parrot')

console.log(clinica)

clinica.pop()
console.log(clinica)

clinica.pop()
console.log(clinica)

clinica.pop()
console.log("Fila de animais aguardando:", clinica)