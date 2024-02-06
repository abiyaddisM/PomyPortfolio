import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutParagraphComponent } from './about-paragraph.component';

describe('AboutParagraphComponent', () => {
  let component: AboutParagraphComponent;
  let fixture: ComponentFixture<AboutParagraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutParagraphComponent]
    });
    fixture = TestBed.createComponent(AboutParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
