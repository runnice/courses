import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    // ... = spreed operator - Ele permite trazer cada item da lista individualmente pra uma outra lista,[
    // É uma forma de protegermos a lista original de modificações
    ]
    lista(): Array<Negociacao>{
        return [...this.negociacoes];

    }
}