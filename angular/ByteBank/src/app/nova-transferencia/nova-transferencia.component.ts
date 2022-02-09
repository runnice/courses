import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})

export class NovaTransferenciaComponent {

  //evento vai receber a informação e vai propagar em algum local.
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitado nova transferencia');

    const valorEmitir: any = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);

    this.limparCampos();
  }

  limparCampos(): void{
    this.valor =0;
    this.destino = 0;
    }
}

