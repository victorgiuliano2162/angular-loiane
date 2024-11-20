import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-databinding',
  templateUrl: './twoway-databinding.component.html',
  styleUrls: ['./twoway-databinding.component.css']
})
export class TwowayDatabindingComponent {

  /*
  One way data binding examples:
    Component --> template
      {{ value }}
      [property] = "value"

    Template --> component
      (event) = "value"

    Component <--> Template
    [(ngModel)] = "property"
  */

}
