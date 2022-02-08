export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    // constructor(data: Date, quantidade: number, valor: number) {
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // O código abaixo vai fazer exatamente o que as linhas acima comentadas estão fazendo. 
    // O Typescript vai realizar isso por debaixo dos panos fazendo a mesma coisa que uma única linha realizou
    // Mudando o private para public readonly, nós conseguimos deixar com que o construtor possa ser lido, porém, não pode ser alterado e com isso reduzimos ainda mais o código.
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // Exemplo prático de programação defensiva. 
    // Neste exemplo conseguimos criar uma data identica através do metodo getTime fazendo com que mesmo que seja feito um setDate, não seja possível alterar o código.
    // Com isso estamos blindando ainda mais o nosso código.
    get data() {
        const data = new Date(this._data.getTime());
        return this._data;
    }
    // get quantidade(): number {
    //     return this._quantidade;
    // }
    // get valor(): number {
    //     return this._valor;
    // }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
