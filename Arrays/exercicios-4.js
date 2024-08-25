// exercício 1

const nossaFamilia = ["Adair", "Alexandre", "Franciele", "Francisco", "Maria Abadia", "Rafael"]

nossaFamilia.forEach((nome) => console.log(`A pessoa ${nome} está na posição ${nossaFamilia.indexOf(nome)}`))

// exercício 2

const array = [1, 2, 3]
function executaOperacaoEmArray(oArray, elevarAoQuadrado){}

function elevaAoQuadrado(num){
    let quadrado = Math.pow(num, 2)
    console.log(`O quadrado de ${num} é ${quadrado}`)
}

executaOperacaoEmArray(array, array.forEach(elevaAoQuadrado))

// exercício 3

const numbers = [3, 4, 5, 8, 10]

const escolhido = 8

console.log(numbers.includes(escolhido) ? `O índice do número ${escolhido} é ${numbers.indexOf(escolhido)}` : `Número não encontrado! Seu índice ficou ${numbers.indexOf(escolhido)}`);

// exercício 4

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB)
const procurado = "Maria Santos"
function procurar(){
    return todasAsTurmas.includes(procurado)
}
console.log(todasAsTurmas.find(procurar) ? `Pessoa encontrada! Seu nome é: ${procurado}` : "Aluno não encontrado")

// exercício 5

const numeros = [6, 9, 12, 15, 18, 21];
const elementoProcurado = 18

numeros.forEach((num) => {
    console.log(`O triplo de ${num} é ${num * 3}`);
})

function procurarIndex(elemento){
    if (elemento === elementoProcurado) {
        return numeros.indexOf(elemento)
    }
}

console.log(numeros.findIndex(procurarIndex) !== -1 ? `O índice do elemento ${elementoProcurado} é ${numeros.findIndex(procurarIndex)}` : `O elemento ${elementoProcurado} não está presente na lista!`);