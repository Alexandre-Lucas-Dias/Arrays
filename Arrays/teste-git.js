const arrayVazio = [];
const arrayNaoVazio = [1, 2, 3];

console.log(Boolean(arrayVazio))
console.log(Boolean(arrayNaoVazio))

console.log((9.999).toFixed(2)); // toFixed é um método de Number
console.log('string'.toUpperCase()); // toUpperCase é um método de String
console.log([1, 2, 3].push(4)); // push é um método de Array

const lista = [7, 13, 'JavaScript', 'Alura', true];
lista.push(false);
console.log(lista.length); // 6
console.log(lista)


const jantarDeHoje = ['burguer', 'hot dog', 'pizza'];

jantarDeHoje.pop()
jantarDeHoje.pop()

jantarDeHoje.push('ovo frito')
jantarDeHoje.push('salada')
jantarDeHoje.push('maçã')

console.log(jantarDeHoje)