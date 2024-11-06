import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-validator',
  templateUrl: './forms-validator.component.html',
  styleUrls: ['./forms-validator.component.css']
})
export class FormsValidatorComponent {

  usuario = {
    email1: '',
    email2: '',
  };

  onSubmit(a) {
    console.log(a)
  }
}
