import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],

})
export class SidenavComponent {

  @ViewChild('drawer') private myDrawer!: MatDrawer;

  public view: boolean = false;
  show() {
    this.view = !this.view;
    if (this.view) {
      this.abrirDrawer();
    } else {
      this.fecharDrawer();
    }
  }

    fecharDrawer() {
    if (this.myDrawer) {
      this.myDrawer.close();
      console.log('Drawer foi fechado.');
    }
  }

   abrirDrawer() {
    if (this.myDrawer) {
      this.myDrawer.open();
      console.log('Drawer foi aberto.');
    }
  }
}


