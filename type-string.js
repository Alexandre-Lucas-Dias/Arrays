const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

const citacao = "Meu nome é ";
const meuNome = "Leonardo";


// concatenação (+)

console.log(citacao + meuNome)
console.log(texto1)
console.log(senha)
console.log(StringDeNumeros)
// template string ou template literal

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'
const lente = '\u3010'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
console.log(lente)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === input); // false
console.log(cidade === inputMinusculo); // true

const senhaContada = "minhaSenha123"
console.log(senhaContada.length) // 13 caracteres