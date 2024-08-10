// exercício 1

const array = [2, 4, 7, 5, 9, 5, 37, 18, 59, 12, -5, 3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

for (let numero of array){
    console.log(numero)
}

// exercício 2

function numIndice(oArray){
    for (let i = 0; i < oArray.length; i++){
        console.log(`O elemento no índice ${i} é ${oArray[i]}`)
    }
}

numIndice(array)

// exercício 3

function somaElementos(oArray){
    let soma = 0
    for (let i = 0; i < oArray.length; i++){
        soma += oArray[i]
    }
    return soma
}

console.log(`A soma dos elementos do array de números inteiros é ${somaElementos(array)}`)

// exercício 4

function menorEMaiorValor(oArray){
    let aux
    for (let i = 0; i < oArray.length; i++){
        for (let j = i; j < oArray.length; j++){
            if(oArray[j] < oArray[i]){
                aux = oArray[i]
                oArray[i] = oArray[j]
                oArray[j] = aux
            }
        }
    }
    return `O menor número é ${oArray[0]} e o maior número é ${oArray[oArray.length - 1]}`
}

console.log(menorEMaiorValor(array))

// exercício 5

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

let pares = []

for (i = 0; i < numeros.length; i++){
    let par = (numeros[i] / 2)
    if((par - par.toFixed(0)) === 0){
        pares.push(numeros[i])
    }
}

console.log(`Os valores apenas pares do array "numeros" são: ${pares}`)

// exercício 6

let media = 0
let somaDosNumeros = 0

for (let i = 0; i < array.length; i++){
    somaDosNumeros += array[i]
}

media = somaDosNumeros / array.length

console.log(`A média do array "numeros" é: ${media.toFixed(2)}`)