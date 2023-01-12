const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

nomes.splice(1, 2, 'Rodrigo');

console.log(nomes); // [ 'João', 'Rodrigo', 'Lara', 'Marjorie', 'Leo' ]

// Método splice remove itens de uma lista e também adiciona.
// O primeiro parâmetro é onde inicia a remoção.
// O segundo é a quantidade de itens a serem removidos e 
// O terceiro é o item a ser adicionado no lugar dos itens removidos.