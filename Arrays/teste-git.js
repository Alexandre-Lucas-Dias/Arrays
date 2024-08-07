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

const animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

animaisDoAquario.splice(1, 0, 'sardinha')
animaisDoAquario.splice(3, 2, 'atum')

console.log(animaisDoAquario)

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];
 
const funcionarios = [nomes, idades, faculdade];

console.log(`${funcionarios[0][2]}, ${funcionarios[1][0]} e ${funcionarios[2][0]}`)

const tudoJunto = [1, 2, funcionarios, 0]

console.log(tudoJunto[2][0][2]) //tudoJunto é uma matriz de 3 dimensões!

const arrayDeTiposDiferentes = [1, 'Alexandre', true]
const teste = [3, 4, 5]
const concatArray = arrayDeTiposDiferentes.concat('oi', 2, teste)

console.log(concatArray)

const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")
 
console.log(arrayConcat)
console.log(arrayOriginal)

const arrayOriginal1 = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat1 = arrayOriginal1.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])
 
console.log(arrayConcat1)
console.log(arrayOriginal1)

const arrayOriginal2 = [50, 60, 70]
const arrayConcat2 = arrayOriginal2.concat([80, [90, 100]])
 
console.log(arrayConcat2)
console.log(arrayOriginal2)

const clientes = [
    ["Ana", "Juliana", "Leonardo"],
    [30, 35, 28]
]

console.log(`${clientes[0][2]} tem ${clientes[1][2]} anos`)