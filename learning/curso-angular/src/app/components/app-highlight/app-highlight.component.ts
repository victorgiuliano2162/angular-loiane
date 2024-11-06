import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-app-highlight',
  templateUrl: './app-highlight.component.html',
  styleUrls: ['./app-highlight.component.css']
})
export class AppHighlightComponent {

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {
    this._renderer.setStyle(
      this._elementRef.nativeElement,'background-color', 'yellow'
    );
  }
}
