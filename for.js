const numeros = [100, 200, 300, 400, 500, 600];

// primeira expressão (let indice = 0;): é executada apenas uma única vez
// segunda expressão (indice < 6): condição de execução do bloco for com 6 iterações por exemplo
// terceira expressão (indice++): é executada sempre ao final do bloco

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}

// numeros.length é o tamanho da arrray da const numeros