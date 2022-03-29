
import { Cliente } from "./cliente";
export class ContaCorrente{
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;  

    }}


     // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    get saldo(){
        return this.saldo
    }
    
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}
