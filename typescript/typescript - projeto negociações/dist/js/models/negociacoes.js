// Array<Negociacao> = [] =  Negociacao[]
// As duas formas declaram que negociacoes é type array, uma mais simplificada que a outra
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //  ... = spreed operator - Ele permite trazer cada item da lista individualmente pra uma outra lista,[
    //  É uma forma de protegermos a lista original de modificações
    //     Exemplo: return[...this.negeciacoes]
    // ReadonlyArray é um tipo identico ao array porém não permite que o metodo utilize pop, push ou qualquer alterações ao array
    // ReadonlyArray<Negociacao> = readonly Negociacao[]
    lista() {
        return this.negociacoes;
    }
}
