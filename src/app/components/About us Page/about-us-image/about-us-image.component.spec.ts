import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsImageComponent } from './about-us-image.component';

describe('AboutUsImageComponent', () => {
  let component: AboutUsImageComponent;
  let fixture: ComponentFixture<AboutUsImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsImageComponent]
    });
    fixture = TestBed.createComponent(AboutUsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
