import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit{

  url: string = "http://vito.com";

  cursoAngular: boolean = true;

  urlImagem:string = "http://lorempixel.com.br/500/400/?1";
  urlImagem2:string = "http://lorempixel.com.br/500/400/?2";

  constructor() {

  }

  ngOnInit() {
  }


  getValor() {
    return 4;
  }

  getCurtirCurso() {
    this.cursoAngular = !this.cursoAngular;
  }
}
