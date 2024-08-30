const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro']
const medias = [7, 4.5, 8, 7.5]

let contador = 0
const reprovados = alunos.filter((_, indice) => { // o parâmetro "aluno" foi substituído por "_" por não estar sendo utilizado
    if (medias[indice] < 7) {
        contador++
    }
    return medias[indice] < 7
})


if(contador === 1) {
    console.log(`O(a) aluno(a) reprovado(a) é o(a): ${reprovados}`)
}else if(contador > 1){
    console.log(`Os(as) alunos(as) reprovados(as) são: ${reprovados}`)
}else{
    console.log("Não há alunos reprovados!")
}