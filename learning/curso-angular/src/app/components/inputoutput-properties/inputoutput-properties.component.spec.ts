import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputoutputPropertiesComponent } from './inputoutput-properties.component';

describe('InputoutputPropertiesComponent', () => {
  let component: InputoutputPropertiesComponent;
  let fixture: ComponentFixture<InputoutputPropertiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputoutputPropertiesComponent]
    });
    fixture = TestBed.createComponent(InputoutputPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
