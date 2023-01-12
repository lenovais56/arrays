const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"];
const arrayConcat = arrayOriginal.concat("André", "Fernanda");

console.log(arrayConcat);
console.log(arrayOriginal);

const arrayOriginal1 = ["Maria", "Carlos", "Eduardo", "Samanta"];
const arrayConcat1 = arrayOriginal1.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"]);

console.log(arrayConcat1);
console.log(arrayOriginal1);

const arrayOriginal2 = [50, 60, 70];
const arrayConcat2 = arrayOriginal2.concat([80, [90, 100]]);

console.log(arrayConcat2);
console.log(arrayOriginal2);

//------------------------------------------------------------------------------

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

console.log(`A funcionaria ${funcionarios [0] [1]} tem ${funcionarios [1] [1]} anos e é ${funcionarios [2] [1]} que ela tem faculdade.`)

const alunos = [
    ["Ana", "Juliana", "Leonardo"],
    [30, 35, 28]
  ];

console.log(`${alunos [0] [2]} tem idade ${alunos [1] [2]}`);