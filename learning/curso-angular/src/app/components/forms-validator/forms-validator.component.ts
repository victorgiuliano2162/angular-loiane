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
    if (input2.trim().length === 0) return false
    else if (input2 !== input1) return true
    //input2 está em branco, não faz nada
    //input2 não é branco e diferente do input1, faça algo
    return false;
  }
}
