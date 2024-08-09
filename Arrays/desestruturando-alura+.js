const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numeros = [...numerosPares, ...numerosImpares] // os 3 pontinhos servem pra juntar tudo em uma informação só

console.log(numeros)

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5] // aqui "outrosNumeros" recebe o restante dos dados

console.log(num1, num2, outrosNumeros)

const [nome1 = 'Ju'] = [1] // valor padrão. Significa dizer que se o "1" não existisse, "nome1" assumiria o valor de "Ju"

console.log(nome1)

const pessoa = {
    nome: 'Ju',
    idade: 25
} // objeto pessoa

const pessoaComTelefone = {
    ...pessoa, telefone: 351352153
} // o objeto "pessoaComTelefone" recebeu as propriedades de "pessoa" e mais um "telefone"

console.log(pessoa, pessoaComTelefone)

const {nome} = pessoa // aqui a variável "nome" pode receber a propriedade "nome" do objeto "pessoa" por causa das chaves

console.log(nome)

function imprimeDados({nome, idade}){
    console.log(nome, idade)
} // nesse caso, os parâmetros da função receberam como argumento as propriedades do objeto "pessoa", por causa das chaves

imprimeDados(pessoa)