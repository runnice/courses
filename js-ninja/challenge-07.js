arr = ['Maçã', 11, {bola: 'azul'}, function(){}, null];

function addItem (item) {
    arr.push(item);
    return arr;

};

addItem(['preto', 'amarelo', 'vermelho']);
addItem(13);
addItem(true);

console.log('O segundo elemento do array é ' + arr[8]);
console.log('O primeiro array tem ' + arr.length + ' itens.');
console.log('O segundo array tem ' + arr[8].length + ' itens.');

num = 0
while(num <=20){
    num/2 == 0 ? console.log(num) : '';
    num++;
}

for (var num = 100; num<=120; num++){
    num % 2 === 0 ? console.log('Numeros pares entre 100 e 120: ' + num) : ""
}

for (var num = 111; num<=125; num++){
    num % 2 === 1 ? console.log('Numeros pares entre 100 e 120: ' + num) : ""
}