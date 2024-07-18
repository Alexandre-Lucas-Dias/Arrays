// parâmetros de função

// console.log(soma(2, 2))
// console.log(soma(245, 20))
// console.log(soma(-500, 60))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(40, "Juliana"))

function soma(numero1, numero2){
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}
//............................9...........6
console.log(multiplica(soma(4, 5), soma(3, 3)))

function cumprimentarSimples(){
    console.log('oi gente!')
}
   
cumprimentarSimples()

function cumprimentaPessoaSimples(pessoa){
    console.log(`oi, ${pessoa}!`)
}
   
cumprimentaPessoaSimples('Helena')

function cumprimentar(){
    return 'Oi gente!'
}
   
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}
   
cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}
   
console.log(operacaoMatematica(15, 30, 45)) // 90