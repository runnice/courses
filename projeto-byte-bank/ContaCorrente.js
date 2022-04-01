import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    //sobrescrevendo o comportamento de sacar (classe mãe)
    sacar(valor){
        let taxa =1.1;
        return super._sacar(valor, taxa);
        }
}
