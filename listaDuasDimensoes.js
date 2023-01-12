const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [ 10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(listaDeAlunosEMedias); //[ [ 'João', 'Juliana', 'Ana', 'Caio' ], [ 10, 8, 7.5, 9 ] ] ficou uma array com outras duas arrays dentro

console.log(`A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}. A nota dessa aluna é ${listaDeAlunosEMedias[1], [1]}`); //Juliana 8
// listaDeAlunosEMedias[0][1] = primeiro parametro é a lista de posição 0, no caso a lista de alunos e o segundo parametro é a posicao do item, no caso 1 que é Juliana
// listaDeAlunosEMedias[1][1] = primeiro parametro é a lista de posição 1, no caso a lista de medias e o segundo parametro é a posicao do item, no caso 1 que é a media 8