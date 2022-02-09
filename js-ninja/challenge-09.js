function myFunction() {
    var number1 = 10;
    var number2 = 20;
    console.log( 'Na função `myFunction`, o primeiro número é', number1 );
    console.log( 'Na função `myFunction`, o segundo número é', number2 );
    return number1 + number2;
    
}
myFunction();


function myFunction2() {
    var number1 = 10;
    var number2 = 20;
    var sum = function sum() {
        return number1 + number2;
    };
    console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
    return sum();
}
myFunction2();

function myFunction3() {
    var number2 = 50;
    var number1 = 40;
    function sum() {
        return number1 + number2;
    };
    console.log( 'A soma de 40 e 50 é igual a', sum() );
    console.log( 'Na função myFunction3, number1 é igual a', number1 );
    return sum();
    
}
myFunction3();

function calculator (x,y){
    return function(callback){
        return callback(x,y);


    }
}   

var sum = calculator(5,6);

console.log('o resultado da soma é: ');
console.log(
    sum (function(x,y){
    return x+y;}));
    
var subtraction = (calculator(10,5));
var multiplcation = (calculator(65,5));
var division = (calculator(28,15));
var mod = (calculator(100,43));

console.log('o resultado da subtração é: ');
console.log( subtraction(function(x,y){
    return x-y;}));

console.log('o resultado da divisão é: ');
console.log( division(function(x,y){
    return x/y;}));

console.log('o resultado da multiplicação é: ');
console.log( subtraction(function(x,y){
    return x*y;}));

console.log('o resultado do resto é: ');
console.log( subtraction(function(x,y){
    return x%y;}));
