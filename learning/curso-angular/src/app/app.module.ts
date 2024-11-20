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
import { CursosService } from './services/cursos.service';
import { DatabindComponent } from './components/databind/databind.component';
import { ClassStyleBindingComponent } from './components/class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwowayDatabindingComponent } from './components/twoway-databinding/twoway-databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIFComponent,
    NgForComponent,
    AppHighlightComponent,
    FormsValidatorComponent,
    FormComponent,
    DatabindComponent,
    ClassStyleBindingComponent,
    EventBindingComponent,
    TwowayDatabindingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MaterialModule],
  providers: [ CursosService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
