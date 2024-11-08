import { CursosService } from './../../services/cursos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  nomePortal: string;
  cursoService: CursosService = new CursosService();

  cursos = [];

  constructor() {
    this.nomePortal = 'http://vito.training.com';
    this.cursos = this.cursoService.getCursos();
  }
}
