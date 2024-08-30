// exercício 1

function variosArrays(...arrays){
    return [].concat(...arrays)
}

const todosOsArrays = variosArrays([1, 2, 3], [4, 5, 6], [7, 8, 9])

console.log(todosOsArrays);

// exercício 2

const valores = [2, 4, 7, 5, 9]

const somados = valores.reduce((acum, atual) => acum + atual, 0)

console.log(`A soma dos valores é: ${somados}`);

// exercício 3

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const todasAsCores = coresLista1.concat(coresLista2)

const coresExclusivas = [...new Set(todasAsCores)]

console.log("As cores exclusivas são: ",coresExclusivas);

// exercício 4

function pares(oArray){
    let arrayPares = []
    for (let i = 0; i < oArray.length; i++){
        if (oArray[i] % 2 === 0){
            arrayPares.push(i)
        }
    }
    return arrayPares
}

let arrayQualquer = []

for (let i = 0; i < 100; i++){
    arrayQualquer.push(i)
}

console.log(`O array de pares é: ${pares(arrayQualquer)}`)

// exercício 5

function filtrar(arr){
    return arr.filter(num => ((num % 3 === 0) && (num > 5)))
}

console.log(`Os números múltiplos de 3 e maiores que 5 da lista são: ${filtrar(arrayQualquer)}`)

// exercício 6

function somar(arr){
    return arr.reduce((acum, atual) => acum + atual, 0)
}

console.log("A soma de todos os elementos da lista é: ",somar(arrayQualquer))