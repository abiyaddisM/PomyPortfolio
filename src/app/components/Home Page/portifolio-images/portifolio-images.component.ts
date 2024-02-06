import { Component } from '@angular/core';

@Component({
  selector: 'app-portifolio-images',
  templateUrl: './portifolio-images.component.html',
  styleUrls: ['./portifolio-images.component.css']
})
export class PortifolioImagesComponent {
imageUrl :string[] = ['assets/Image/Qatar.png', 'assets/Image/Ethiopian.png'
  ,'assets/Image/University.png','assets/Image/Fifa.png']
}
