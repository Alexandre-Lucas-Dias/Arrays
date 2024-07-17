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