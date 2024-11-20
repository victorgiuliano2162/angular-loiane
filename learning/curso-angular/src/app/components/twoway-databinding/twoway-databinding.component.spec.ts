import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayDatabindingComponent } from './twoway-databinding.component';

describe('TwowayDatabindingComponent', () => {
  let component: TwowayDatabindingComponent;
  let fixture: ComponentFixture<TwowayDatabindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwowayDatabindingComponent]
    });
    fixture = TestBed.createComponent(TwowayDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
