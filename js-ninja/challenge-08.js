var sum = function calculateSum(x,y){
    return x+y;

};
var a = 2
var b = 3
console.log('A soma de ' + a + ' e ' + b + ' é igual a ' + sum(a,b));

console.log('O nome da função que fez a soma é ' + sum.name);

function showName(){
    return 'Vinicius Oliveira';
}

varShowName = function showName(){}
console.log("A função " + varShowName.name + " retorna " + varShowName());

var calculator = function calculator(operacao){
    return function (x, y) {
        var resul;
        switch(operacao){
            case '+' :
                 var resul = x+y ;
                 break;
            case '-' : 
                var resul = x-y ;
                break;
            case '*' : 
                var resul = x*y ;
                break;
            case '/' : 
                var resul = x/y ;
                break;
            case '%' : 
                var resul = x%y ;
                break
            default: 'Operação Inválida';
        }    
        return "Resultado da operação: " + x + operacao + y + " = " + resul;
}};

var sum = calculator('+');

console.log(sum (7,8));

var subtraction = calculator('-');
var multiplcation = calculator('*');
var division = calculator('/');
var resto = calculator('%');

console.log(subtraction(7,2));
console.log(multiplcation(7,2));
console.log(division(7,2));
console.log(resto(7,2));