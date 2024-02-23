import {Component, ElementRef, HostListener, Renderer2} from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent {
  imageUrl: string = '';

  constructor() {
    this.updateImageUrl(); // Call initially to set the initial image URL
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) { // Specify the type as Event
    this.updateImageUrl();
  }

  updateImageUrl() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1028) {
      this.imageUrl = 'assets/Image/Home2.png';
    } else {
      this.imageUrl = 'assets/Image/Home.png';
    }
  }
}
