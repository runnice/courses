(function(){
var five = Number('5');
console.log( five + ' é número?', typeof five === 'number' );

var concat = String(10) + 10;
console.log( '"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string' );

var operation = {
    '+': function(x,y){
        return x+y;},

    '-': function(x,y){
        return x-y;},

    '*':function(x,y){
        return x*y;},

    '/':function(x,y){
        return x/y;},

    '%':function(x,y){
        return x%y;},
    };
    var isOperationValid = function(operador){
        teste = (operador === '+' || operador === '-' || operador === '*' || operador === '/' || operador === '%');
        return teste;
};

calculator = function(operador){
    if (!isOperationValid(operador)){
        return false
    }
    return function(x,y){
        if (typeof x !== 'number'  && typeof y !== 'number'){
            return false;
        }
        return operation[operador]( x, y);
    };
};

function showOperationMessage (operador,x,y){
    return 'A operação ' + x +  operador + y + '= ';
};

function showErrorMessage(operador){
    return 'Operação ' + operador + ' não permitida!'
};

var number1 =0;
var number2 = 0;
var operationSignal = ''; 

var operationSignal = '+'; 
var sum = calculator(operationSignal);

console.log(showOperationMessage(operationSignal, 3,5) + subtraction(3,5));

var operationSignal = '-'; 
var subtraction = calculator(operationSignal)

console.log(showOperationMessage(operationSignal, 3,5) + subtraction(3,5));

var operationSignal = '*'; 
var multi = calculator(operationSignal)

console.log(showOperationMessage(operationSignal, 3,5) + multi(3,5));

var operationSignal = '/'; 
var division = calculator(operationSignal)

console.log(showOperationMessage(operationSignal, 3,5) + division(3,5));

var operationSignal = '%'; 
var mod = calculator(operationSignal)
console.log(showOperationMessage(operationSignal, 3,5) + mod(3,5));


})();