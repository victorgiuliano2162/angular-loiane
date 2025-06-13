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
import { InputoutputPropertiesComponent } from './components/inputoutput-properties/inputoutput-properties.component';
import { InputPropertyComponent } from './components/inputoutput/input-property/input-property.component';
import { OutputPropertyComponent } from './components/inputoutput/output-property/output-property.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    InputoutputPropertiesComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    SidenavComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MaterialModule, MatIconModule, MatSidenavModule, MatListModule, MatIconModule, BrowserAnimationsModule ],
  providers: [ CursosService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
