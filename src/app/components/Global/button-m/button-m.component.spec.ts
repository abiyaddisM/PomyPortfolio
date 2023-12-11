import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMComponent } from './button-m.component';

describe('ButtonMComponent', () => {
  let component: ButtonMComponent;
  let fixture: ComponentFixture<ButtonMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonMComponent]
    });
    fixture = TestBed.createComponent(ButtonMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
