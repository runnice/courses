import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {

  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia
  }

  adicionar(transferencia: any){
    // const transferencia = {...$event, data: new Date()}
    // console.log(transferencia)
    this.hidratar(transferencia)
    this.transferencias.push(transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();

  }

}
