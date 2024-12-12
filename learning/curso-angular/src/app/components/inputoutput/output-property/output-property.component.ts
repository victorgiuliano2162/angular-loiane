import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador', //'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  incrementar() {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementar() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
