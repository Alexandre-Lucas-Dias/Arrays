const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function calculaMedia(listaDeNotas){
    // const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
    //     return acumulador + nota
    // }, 0)

    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0) // o método reduce PRECISA de um inicializador depois da função callback

    const media = somaDasNotas / listaDeNotas.length
    return media
}

console.log(`A média de notas da sala de JS é: ${calculaMedia(salaJS)}`);
console.log(`A média de notas da sala de Java é: ${calculaMedia(salaJava)}`);
console.log(`A média de notas da sala de Python é: ${calculaMedia(salaPython)}`);