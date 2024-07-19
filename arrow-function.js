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