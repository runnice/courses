(function() {
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
const person = {'name': 'Vinicius', 'lastname': 'Oliveira', 'age':34};

console.log( 'Propriedades de "person": ');

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?
console.log(Object.keys(person));
/*
Crie um array vazio chamado `books`.
*/
// ?
let books = [];
/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
books.push({'name': 'Diario de um mago', 'pages': 250 }, {'name': 'Alice no Pais das Maravilhas', 'pages': 350 }, {'name': 'O senhor dos aneis', 'pages':950});
console.log( '\nLista de livros:' );
/*
Mostre no console todos os livros.
*/
// ?
console.log(books);
console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
// ?
books.pop();
console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
// ?
console.log(books);
/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );
let books = JSON.stringify(books);
/*
Mostre os livros nesse formato no console:
*/
// ?
console.log(books)
/*
Converta os livros novamente para objeto.
*/
// ?
let books = JSON.parse( books );
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?
for (let i = 0; i < books.length; i++){
    for (var prop in books[i]){
        console.log(prop + ' = ' + books[i][prop]);
    }
}
 

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
console.log( '\nMeu nome é:' );
let myName = ['V', 'I','N', 'I', 'C', 'I', 'U', 'S']

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?
myName.join('');
console.log( '\nMeu nome invertido é:' );
myName.reverse();
/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?
console.log(myName);
console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?
console.log(myName.sort());
}())