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

const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
let somaDasNotas = 0
let qtdeDeElementos = 0
 
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    somaDasNotas += notasGerais[i][j]
    qtdeDeElementos++
  }
}
 
const media = somaDasNotas/qtdeDeElementos
 
console.log(`A média das notas é: ${media.toFixed(2)}`)

let precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;

for (let i = 0; i < precos.length; i++) {
  precos[i] *= desconto;
}

console.log(`Os preços com desconto no 'for clássico' são: ${precos}`);

precos = [5.5, 6.2, 14, 19.5];
desconto = 0.80;
let i = 0

for (let preco of precos) {
  precos[i] *= desconto;
  i++
 } // nota-se que para esse caso, não compensa usar "for of" porque de qualquer forma o laço precisou de um contador
 
console.log(`Os preços com desconto no 'for of' são:`)
for (i = 0; i < precos.length; i++){
  console.log(precos[i].toFixed(2))
}

const outrosNumeros = [5, 8, 6, 10, 7];
let somaTotal = 0;

for (let i = 0; i < outrosNumeros.length; i++) {
    somaTotal += outrosNumeros[i];
}

const outraMedia = somaTotal / outrosNumeros.length;

console.log("A média dos números é:", outraMedia);

const numerosPares = [];
 
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
 
console.log(numerosPares);

const nome = "Alura";
let nomeMaiusculas = "";
 
for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"
 
const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura

const listaProdutos = ['pôster A4', 'pôster A5', 'camiseta lisa', 'camiseta estampada', 'pin de metal', 'cartela de adesivos'];

const listaAtualizada = listaProdutos.map((produto) => {
 return `${produto} - unidade`;
})

console.log(listaAtualizada);

const numeros = [2, 4, 6, 8];
let soma = 0;

numeros.forEach(numero => {
    soma += numero;
});

console.log("A soma dos números é:", soma); // 20

const notas = [10, 5, 7, 4, 8, 3];

const aprovados = notas.filter((nota) => nota >= 7);
console.log(aprovados);

const arrayOriginal3 = [7, 7, 8, 9];

function alteraArray(array) {
  //array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal3}`);
}

alteraArray([...arrayOriginal3, 10]);

const numerosSequenciais = [1, 2, 3, 4, 5];

const somaDeTodos = numerosSequenciais.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

console.log("A soma dos números é:", somaDeTodos);