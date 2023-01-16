const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [ 10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];

        const [alunos, medias] = listaDeAlunosEMedias; //mesma coisa que o codigo das linhas 8 e 9

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    } else {
        console.log("Aluno não encontrado")
    }
}

exibeNomeENota("Caio"); //Caio tem a média 9

//.includes() confere se o que o que esta sendo passado para o parametro está incluso na lista

//.indexOf() retorna o indice do que for passado como parametro