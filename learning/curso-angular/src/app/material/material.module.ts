import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './components/material/material.component';



@NgModule({
  declarations: [
    MaterialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialComponent
  ]
})
export class MaterialModule { }
