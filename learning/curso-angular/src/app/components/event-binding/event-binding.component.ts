import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent {

  valorSalvo: string = '';
  valorAtual: string = '';
  isMouseOver: boolean = false;

  salvarValor(event: any) {
    this.valorSalvo = event.target.value;
  }

  salvarValorBlur(event: any) {
    this.valorSalvo = event;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
    console.log(this.isMouseOver)
  }

  onKeyUp(event: KeyboardEvent) {
    //console.log((<HTMLInputElement>event.target).value)
    this.valorAtual = (<HTMLInputElement>event.target).value;
    //console.log(event)
  }

  pressedEnter() {
    console.log(this.valorAtual);
  }
  clickedButton() {
    alert('Clicaste-me');
  }
}
