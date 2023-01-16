for (let indice = 0; indice <= 10; indice++) {
    console.log(indice);
  }
  
//   0
//   1 
//   2 
//   3 
//   4 
//   5 
//   6 
//   7 
//   8 
//   9 
//   10

//------------------------------------------------------------------------------

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      media += notasGerais[i][j]/notasGerais[i].length;
    }
  }

media = media/notasGerais.length

console.log(media);

//------------------------------------------------------------------------------

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

// 600
// 500
// 400
// 300
// 200
// 100

for (let i = numeros.length - 1; i >= 0; i -= 2) {
  console.log(numeros[i]);
}

// 600
// 400
// 200

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);

// [
//     0,  2,  4,  6,  8, 10,  12, 14, 16, 18, 20,
//    22, 24, 26, 28, 30, 32,  34, 36, 38, 40, 42,
//    44, 46, 48, 50, 52, 54,  56, 58, 60, 62, 64,
//    66, 68, 70, 72, 74, 76,  78, 80, 82, 84, 86,
//    88, 90, 92, 94, 96, 98, 100
//  ]