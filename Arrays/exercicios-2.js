// exercício 1

function arrayConcat(array1, array2){
    return array1.concat(array2)
}

console.log(arrayConcat([0, 1, 2], ['a', 'b', 'c']))

// exercício 2

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const corteNumeros = numeros.slice(3, 8)
console.log('Parte dos números: ', corteNumeros)

// exercício 3

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
frutas.splice(2, 2, 'Kiwi', 'Pêssego')

console.log(frutas)

// exercício 4

const menuPrincipal = ['Arroz', 'Feijão', 'Batata', 'Quiabo', 'Mandioca']
const menuDeSobremesas = ['Petit Gateau', 'Sorvete', 'Frutas', 'Pudim']
const menuCompleto = menuPrincipal.concat(menuDeSobremesas)

console.log('Este é o menu completo: ', menuCompleto)

// exercício 5

// const lista = [
//     [1, 2, 3], 
//     [4, 5, 6], 
//     [7, 8, 9]
// ]

let lista = []
let valorInicial = 1

for (let x = 0; x <= 2; x ++){
    let linha = []
    for (let y = 0; y <= 2; y++){
        linha.push(valorInicial++)
    }
    lista.push(linha)
}

console.log('Matriz de duas dimensões:')
console.log(lista)
lista.forEach(row => console.log(row))

// exercício 6

console.log('Elemento na segunda linha e terceira coluna: ', lista[1][2])

// exercício 7

lista[2][1] = 15

console.log('Matriz após adição de um elemento: ', lista)