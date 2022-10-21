const notas = [10, 6, 8];
notas.push(7);
// se deixarmos o .push() vazio o console retornara NaN

console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;


console.log(`Sua média é ${media}`);