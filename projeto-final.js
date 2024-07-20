function arrowFunction(){
    function apresentar(nome){
        return `Meu nome é ${nome}`;
    }
    
    // Arrow function
    const apresentarArrow = nome => `Meu nome é ${nome}`;
    console.log(apresentarArrow("Alexandre"));
    const soma = (num1, num2) => num1 + num2;
    console.log(soma(3, 4));
    
    // Arrou function com mais de uma linha de instrução
    
    const somaNumerosPequenos = (num1, num2) => {
        if (num1 > 10 || num2 > 10){
            return "Somente números de 1 a 9";
        }else{
            return num1 + num2;
        }
    }
    
    console.log(somaNumerosPequenos(4, 6));
    
    // Hoisting: arrow function se comporta como expressão
    // operador maior ou igual que: >=
}

function comparacoes(){
    // == (comparação implícita)

    const numero = 5;
    const texto = "5";

    console.log(numero == texto)

    // == (comparação explícita)
    console.log(numero === texto)

    //typeof
    console.log(typeof numero)
    console.log(typeof texto)

    // == só compara o valor
    // === compara o valor e o tipo de dado

    Number()
    String()
}

function consoleExemplo(){
    //log -> registro

    const minhaVar = true;
    console.log(245)
    console.log("eu sou um texto")
    console.log(minhaVar)

    //tratamento de erro!

    console.error("deu erro!")
    console.error(new Error("deu erro"))
}

function conversoesExercicio(){
    let telefone = 12341234;
    console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
    console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
    let usuarioConectado = false;
    console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
    usuarioConectado = true;
    console.log(String(usuarioConectado)); // agora teremos uma string “true”.
    // Vamos calcular a área de um retângulo
    let largura = "10";
    let altura = "5";
    console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação
    console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis
    let meuNome = "leonardo";
    console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
    console.log( + meuNome); // a conversão também retornará NaN
    usuarioConectado = false;
    console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
    usuarioConectado = true;
    console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.

    var respostaDeTudo = 42
    let idade = 29
    const pi = 3.14
    {
        var respostaDeTudo = 3.14
        let idade = 42
        const pi = 29
        console.log(respostaDeTudo, idade, pi)

    }
    console.log(respostaDeTudo, idade, pi)

    let minhaLet;
    console.log(minhaLet); //undefined

    // atribuindo um valor com TIPO DE DADO STRING
    minhaLet = "eu sou um texto";
    console.log(minhaLet); // "eu sou um texto"

    // reatribuindo, desta vez com dado do TIPO NUMBER
    minhaLet = 100;
    console.log(minhaLet); //100
}

function conversoes(){
    // tipo de dado
    // booleanos

    // conversão implícita

    const numero = 456;
    const numeroString = Number("456abcdefg");

    // console.log(numero == numeroString)
    console.log(numero + numeroString)

    // conversão explícita

    // Number()
    // String()

    console.log(numero + numeroString)
}

function erros(){
    const numero = 0;
    const minhaVar = "oi";
    console.log(minhaVar)
}

function expressoesFuncao(){
    // declaração de função

    function minhaFuncao(param){
        // bloco de código
    }

    // minhaFuncao("param")

    // expressão de função

    // const soma = function(num1, num2) { return num1 + num2 }
    // console.log(soma(1, 1))

    // diferença principal: HOISTING (isso é a "listagem" do código e a "transferência" das funções e var's para o topo do arquivo)
    // funções e var são "listadas" no topo do arquivo.

    console.log(apresentar());

    function apresentar(){
        return "olá";
    }

    const soma = function(num1, num2) { return num1 + num2 }
    console.log(soma(1, 1));
}

function funcoes(){
    // let x = "";
    // console.log(x)
    // x = "oi";

    // DECLARAÇÃO DE FUNÇÃO

    // 1) declara a função
    //                    4 -> valor de soma
    function imprimeTexto(texto){
        console.log(texto)
    }

    // 2) executa a função (1 ou + vezes)

    imprimeTexto(soma());
    // imprimeTexto("outro texto");

    // três formas de escrever funções

    function soma(){
        // return deve ser a última linha da função!
        return 2 + 2;
    }

    //console.log(soma())

    // aqui eu faço uma série de exemplos da função Math.algumacoisa()

    console.log(Math.round(4.3)+" a")
    console.log(Math.round(3.85)+" b")
    console.log(Math.round(2.5)+" c")
    console.log(Math.ceil(5.2)+" d")
    console.log(Math.floor(5.2)+" e")
    console.log(Math.trunc(4.3)+" f")
    console.log(Math.trunc(4.8)+" g")
    console.log(Math.pow(4,2)+" h")
    console.log(Math.pow(2.5,1.5)+" i")
    console.log(Math.sqrt(64)+" j")
    console.log(Math.min(0,150,30,20,-8,-200)+" k")
    console.log(Math.max(0,150,30,20,-8,-200)+" l")
    console.log(`${Math.random()} m`) // exemplo de template literal
    console.log(`${Math.sign(-89)} ${Math.sign(567)}`)
    console.log(Math.LN2)
}

function parametros(){
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

    // testando o que acontece quando uma função não recebe nenhum argumento ao ser chamada

    function comParametro(param) {
        console.log(param)
    }
    comParametro()
}

function script(){
    //var

    /*var altura = 5;
    var comprimento = 7;

    area = altura * comprimento;
    console.log(area)
    var area;*/

    /*let forma = 'retângulo'
    let altura = 5;
    let comprimento = 7;
    let area;
    if (forma === 'retângulo'){
        area = altura * comprimento;
    } else{
        area = (altura * comprimento) / 2;
    }

    console.log(area)*/

    const forma = 'triângulo';
    const altura = 5;
    const comprimento = 7;
    let area;

    if (forma === 'quadrado'){
        area = altura * comprimento;
    }else{
        area = (altura * comprimento) / 2;
    }

    console.log(area)
}

function templateStrings(){
    const nome = "Ju";
    const idade = 2021-1981;
    const cidadeDeNascimento = "São Paulo";
    // const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

    const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

    console.log(apresentacao)
}

function ternario(){
    const idadeMinima = 18;
    const idadeCliente = 19;

    // if(idadeCliente >= idadeMinima){
    //     console.log("cerveja")
    // }else{
    //     console.log("suco")
    // }

    //            condição                      true       false
    console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")

    const nome = "Leo";
    const idade = 23;
    const bebidaMaior = "cerveja";
    const bebidaMenor = "suco";

    const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
    console.log(pedido)
}

function testesIf(){
    const num = 10;

    if (num === null) {
        console.log('número não fornecido'); // não será executado
    }

    if (num !== null) {
        console.log(`o número é ${num}`); // será executado
    }

    if (num) {
        console.log(`o número é ${num}`); // será executado
    }

    const numero = null;

    if (numero === null) {
        console.log('número não fornecido'); // será executado
    }

    if (!numero) {
        console.log('número não fornecido'); // será executado
    }

    const outroNum = 11;

    if (outroNum > 10 || !outroNum) {
        console.log('número não válido'); // será executado
    }

    if (outroNum > 10 && outroNum < 20) {
        console.log('número válido'); // será executado
    }

    function verificaNumero(numero) {
        if (numero > 10) {
            return 'número maior que 10';
        } else {
            return 'número não é maior que 10'; // será executado
        }
    }

    console.log(verificaNumero(9)) //número não é maior que 10

    const numFinal = 15;

    if (numFinal >= 0 && numFinal <= 10) {
    console.log('número entre zero e dez');
    } else if (numFinal > 10 && numFinal <= 20) {
    console.log('número entre dez e vinte'); // será executado
    } else if (numFinal > 20 && numFinal <= 30) {
    console.log('número entre vinte e trinta');
    } else {
    console.log('outro número');
    }
}

function truthyFalsy(){
    //boolean
    const usuarioLogado = true
    const contaPaga = false

    //truthy ou falsy

    // 0=> false
    // 1=> true

    // console.log(0 == false)
    // console.log("" == false)
    // console.log(1 == true)

    // null ==> vazio ou nada
    // undefined
    let minhaVar;
    let varNull = null;
    console.log(minhaVar)
    console.log(varNull)

    let numero = 3;
    let texto = "Alura";
    console.log(typeof minhaVar)
    console.log(typeof varNull)
}

function typeBoolean(){
    const primeiroNumero = 5;
    const segundoNumero = 5;
    let cadastroAtivado = true;

    //console.log(primeiroNumero === segundoNumero);

    const texto1 = "alura";
    const texto2 = "Alura";

    //console.log(texto1 === texto2);

    /*const minhaVar = 1;
    const MinhaVar = "texto";
    const minhavar = "3";
    const MINHAVAR = 2;

    console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)*/

    /*let input = null;

    if (input === null) {
    console.log('não há informação');
    } else {
    console.log(input);
    }*/

    let input = null;
    let input2;

    /*console.log(input); // null
    console.log(input2); // undefined*/

    console.log(null == undefined); // true
    console.log(null === undefined); // false
}

function typeNumber(){
    //tipo inteiro

    const meuNumero = 3;

    const primeiroNumero = 1;
    const segundoNumero = 2;
    const operacaoMatematica = primeiroNumero - segundoNumero;

    console.log(operacaoMatematica);

    //ponto flutuante

    const numeroPontoFlutuante = 3.3;
    const pontoFlutuanteSemZero = .5;

    const novaOperacao = primeiroNumero / numeroPontoFlutuante;

    console.log(novaOperacao);

    // NaN -> Not a Number (não é um número)
    const alura = "Alura";
    console.log(alura * primeiroNumero);
}

function typeString(){
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
}

arrowFunction();
comparacoes();
consoleExemplo();
conversoesExercicio();
conversoes();
erros();
expressoesFuncao();
funcoes();
parametros();
script();
templateStrings();
ternario();
testesIf();
truthyFalsy();
typeBoolean();
typeNumber();
typeString();