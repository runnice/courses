import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.models'

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  todas(): Observable <Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any){
    // const transferencia = {...$event, data: new Date()}
    // console.log(transferencia)
    this.hidratar(transferencia)
    this.transferencias.push(transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date()

  }

}
