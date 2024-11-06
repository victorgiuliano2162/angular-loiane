import { Component, OnInit } from '@angular/core';
import { map, Observable, interval } from 'rxjs';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  cursosObervable;
  cursosObervable2 = [];

  listaCursos: String[] = ['Java', 'Angular'];
  cursos: String [] = [];

  ngOnInit() {
    for (let i = 0; i < this.listaCursos.length; i++) {
      let curso = this.listaCursos[i];
    }
    //.interval(2000).map( v => [ "Angular", "Java"]);
    this.cursosObervable = interval(2000) .pipe( map(() => ['Spring', 'React']) ) .subscribe((v: string[]) => this.cursos = v);

  }
}
