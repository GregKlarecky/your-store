import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRadioInputComponent } from './custom-radio-input.component';

describe('CustomRadioInputComponent', () => {
  let component: CustomRadioInputComponent;
  let fixture: ComponentFixture<CustomRadioInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRadioInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRadioInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
