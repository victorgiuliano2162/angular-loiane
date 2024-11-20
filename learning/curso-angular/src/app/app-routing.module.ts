import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgIFComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { AppHighlightComponent } from './components/app-highlight/app-highlight.component';
import { FormsValidatorComponent } from './components/forms-validator/forms-validator.component';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { DatabindComponent } from './components/databind/databind.component';
import { ClassStyleBindingComponent } from './components/class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwowayDatabindingComponent } from './components/twoway-databinding/twoway-databinding.component';

const routes: Routes = [
  {
    path: 'ngif',
    component: NgIFComponent,
  },
  {
    path: 'ngfor',
    component: NgForComponent,
  },
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'highligh',
    component: AppHighlightComponent,
  },
  {
    path: 'formvalidator',
    component: FormsValidatorComponent,
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'databind',
    component: DatabindComponent
  },
  {
    path: 'classStyleBinding',
    component: ClassStyleBindingComponent
  },
  {
    path: 'eventbinding',
    component: EventBindingComponent
  },
  {
    path: 'twoway-databinding',
    component: TwowayDatabindingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
