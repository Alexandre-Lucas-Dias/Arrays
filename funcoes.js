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