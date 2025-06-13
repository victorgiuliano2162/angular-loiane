import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIFComponent implements OnInit{

  mostrarCursos: boolean = true;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

  ngOnInit() {

  }

}
