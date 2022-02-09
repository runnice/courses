var championship = 'Campeonato Baiano';
console.log(championship);

var teams = ['Bahia', 'Vitória', 'Doce Mel', 'Jacobina', 'Jacuipense'];
console.log('Times que estão participando do campeonato: ', teams);

var showThePosition = function(x){
    if (x > teams.length        ){
        return "Não temos a informação do time que está nessa posição."
    }else{
         return "O time que está em " + x + "º lugar é o " + teams[x-1] + ".";
    }

};

showThePosition(6)
showThePosition(1)
showThePosition(2)
showThePosition(3)

while (counter <= 30){
    console.log(counter); //melhor solução seria imprimir counter++ e economizar uma linha
    counter++;
}


function convertToHex(cor){
    switch(cor){
        case 'red':
            hexa = "FF0000"
            break;
        case 'orange':
            hexa = "FFA500"
            break;
        case 'blue':
            hexa = "0000ff"
            break;
        case 'green':
            hexa = "008000"
            break;
        case 'yellow':
            hexa = "FFFF00"
            break;
        default:
            return "Não temos o equivalente hexadecimal para " + cor + ".";
                            
    }
    return "O hexadecimal para a cor " + cor + " é " + hexa;

};