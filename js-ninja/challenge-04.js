var carro = {
    marca: 'Fiat',
    modelo: 'Palio',
    placa: 'PJP-8824',
    ano: '2015',
    cor: 'vermelho',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

carro.mudarCor = function (cor){ return carro.cor = cor;}
carro.obterCor = function (){return carro.cor;}
carro.obterModelo = function (){return carro.modelo;}
carro.obterMarca = function(){return carro.marca;}
carro.obterMarcaModelo = function (){return "Esse carro é um $(carro.obterMarca()) $(carro.obterModelo())";}
carro.addPessoas = function (numpessoas) {
    var totalPessoas = carro.quantidadePessoas + numpessoas;
    if (carro.quantidadePessoas === carro.assentos){
        return "O carro está lotado";
        }
    if (totalPessoas > carro.assentos){
        var assentoRestante = carro.assentos -  carro.quantidadePessoas
        return "Só cabem mais " + assentoRestante + " pessoas";
        }
    carro.quantidadePessoas += numpessoas;
    return numpessoas + " pessoa(s) foram adicionadas ao carro " + "Já temos " + totalPessoas + " pessoa(s) no carro!" ;
}
