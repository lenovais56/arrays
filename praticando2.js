const numeros = [5, 6, 8, 10, 20, 40, 32];
const frutas = ['banana', 'morango', 'uva', 'mamão'];
const lista = [];

lista.push(numeros.concat(frutas));

console.log(lista);

//----------------------------------------------------------------//

let produtos = [ 
    {nome: 'Coca Cola', preco: 5}, 
    {nome: 'Pizza', preco: 15}, 
    {nome: 'Kinder Ovo', preco: 99} 
  ];
  
  function filtrarBaratos(produto) {
    return produto.preco < 20;
  }
  
  let produtosBaratos = produtos.filter(filtrarBaratos);
  let primeiroProdutoBarato = produtos.find(filtrarBaratos);
  let indiceProdutoBarato = produtos.findIndex(filtrarBaratos);

  
  console.log(produtosBaratos);
  console.log(primeiroProdutoBarato);
  console.log(indiceProdutoBarato);
  // Resultado:
  // [ {nome: 'Coca Cola', preco: 5}, {nome: 'Pizza', preco: 15} ]


//----------------------------------------------------------------//

const arrayVazia = [,,,];

console.log(arrayVazia.length)
console.log(arrayVazia[0])
console.log(arrayVazia[1])
console.log(arrayVazia[2])

// Resultado
// 3
// undefined
// undefined
// undefined

console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)

// Resultado
// 3
// [ <3 empty items>, 50 ]
// 4

jantarDeHoje = ['🍔', '🌭', '🍕']

jantarDeHoje.pop()
jantarDeHoje.pop()

jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')

console.log(jantarDeHoje)