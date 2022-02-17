let tempoInicial = $("#tempo").text();
let campo = $(".campo-digitacao")

$(function() {  // É o equivalente a $"document".ready(function(){};
    updatePhrase();
    startCounter();
    startTimer();
    $("#botao-restart").click(restartGame);
})

function updatePhrase(){
    let frase = jQuery(".frase").text();
    let numPalavras = frase.split(" ").length;
    let tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function startCounter(){
    campo.on("input", function(){
        let conteudo = (campo.val());
        
        let qtdPalavras = conteudo.split(/\S+/).length-1;
        $("#num-palavras").text(qtdPalavras);

        let contadorDigitacao = conteudo.length;
        $("#contador-caracteres").text(contadorDigitacao);
        $("#botao-restart").attr("disabled", true);

})}
    
function startTimer(){
    var tempo = $("#tempo").text();
    campo.one("focus", function(){
        let cronometroID = setInterval(function(){
            tempo--;
            $("#tempo").text(tempo);
            if (tempo<1){
                campo.attr("disabled", true)
                $("#botao-restart").attr("disabled", false);
                clearInterval(cronometroID);            
                
            }
        },1000)
    })};
 
 
function restartGame() {
    campo.attr("disabled", false);
    campo.val("");
    $("#num-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo").text(tempoInicial);
    startTimer();
}

