import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNathanComponent } from './button-nathan.component';

describe('ButtonNathanComponent', () => {
  let component: ButtonNathanComponent;
  let fixture: ComponentFixture<ButtonNathanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonNathanComponent]
    });
    fixture = TestBed.createComponent(ButtonNathanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
