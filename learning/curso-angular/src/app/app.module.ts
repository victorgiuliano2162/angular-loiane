import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NgIFComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { AppHighlightComponent } from './components/app-highlight/app-highlight.component';
import { FormsValidatorComponent } from './components/forms-validator/forms-validator.component';
import { FormComponent } from './components/form/form.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NgIFComponent,
    NgForComponent,
    AppHighlightComponent,
    FormsValidatorComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
