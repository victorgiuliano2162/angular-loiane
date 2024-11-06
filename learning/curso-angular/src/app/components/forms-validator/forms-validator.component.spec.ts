import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsValidatorComponent } from './forms-validator.component';

describe('FormsValidatorComponent', () => {
  let component: FormsValidatorComponent;
  let fixture: ComponentFixture<FormsValidatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsValidatorComponent]
    });
    fixture = TestBed.createComponent(FormsValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
