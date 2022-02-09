var lista = [1, 3, 4, 5, 6, 7];
function myArray(variavel){return variavel;}
myArray(lista[1]);

function indice(a,b){
    return a[b];
}
indice(lista,2);

var lista2 = ["vini", 34, true, null, undefined];
myArray(lista2);

function myBook(book){
    var livros = 
    {'Diário de um Mago':{quantidadePaginas:100 , autor: "Coelho, Paulo", editora: "ideia" } , 
    'Minha vida de Lu(l)ta':{quantidadePaginas:150 , autor: "Livre, Lula", editora: "PT" } , 
    'Quem quer dinheiro':{quantidadePaginas:200 , autor: "Santos, Silvio", editora: "SBT" } }
    return livros[book];
}

var imprimelivro = "O livro Diário de um Mago " + "tem " + myBook('Diário de um Mago').quantidadePaginas + " páginas!";