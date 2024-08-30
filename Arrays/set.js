const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"]

// const nomesAtualizados = new Set(nomes) o Set é um "conjunto", ele é como um array, mas ele não é um

// Inclusive, a variável em que é atribuído o conjunto de Set NÃO pode usar os métodos de array (push, pop, includes, slice, splice, etc)

const listaNomesAtualizados = [...new Set(nomes)]

// console.log(nomesAtualizados);
console.log(listaNomesAtualizados);
