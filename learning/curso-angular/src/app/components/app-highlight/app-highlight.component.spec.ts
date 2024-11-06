import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHighlightComponent } from './app-highlight.component';

describe('AppHighlightComponent', () => {
  let component: AppHighlightComponent;
  let fixture: ComponentFixture<AppHighlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppHighlightComponent]
    });
    fixture = TestBed.createComponent(AppHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
