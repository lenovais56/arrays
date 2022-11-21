const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

nomes.splice(1, 2, 'Rodrigo');

console.log(nomes);

// Método splice remove itens de uma lista e também adiciona
// O primeiro parâmetro é onde inicia a remoção, o segundo é a quantidade de itens a serem removidos e o terceiro é o item a ser adicionado no lugar dos itens removidos.