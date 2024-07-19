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