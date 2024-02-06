import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortifolioImagesComponent } from './portifolio-images.component';

describe('PortifolioImagesComponent', () => {
  let component: PortifolioImagesComponent;
  let fixture: ComponentFixture<PortifolioImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortifolioImagesComponent]
    });
    fixture = TestBed.createComponent(PortifolioImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
