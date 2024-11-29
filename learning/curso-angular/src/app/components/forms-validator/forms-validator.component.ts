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

  doubleCampsValidation(input1: string, input2: string): boolean {
    if (input2.trim().length === 0 || input1.trim().length === 0) return false
    else if (input2 !== input1) return true
    //when input2 is blank, do nothing
    //when input2 is not blank and diffrent from input2 return error message
    return false;
  }
}
