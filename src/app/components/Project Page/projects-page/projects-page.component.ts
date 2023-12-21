import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  screenWidth: number=0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = window.innerWidth;
  }
  ViewButtonName="View More"
  viewButtonActive=false;
  counter=6;
  buttonPosition:string='0%';
  journalism=true;
  editing=false;
  animation=false;
  socialMedia =false;
  srcs=[
    'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702080000&semt=ais'
    ,'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc'
    ,'https://cdn.britannica.com/51/94351-050-86B70FE1/Leaning-Tower-of-Pisa-Italy.jpg'
    ,'https://cdn.britannica.com/51/94351-050-86B70FE1/Leaning-Tower-of-Pisa-Italy.jpg'
    ,'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc'
    ,'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702080000&semt=ais'
    ,'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702080000&semt=ais'
    ,'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702080000&semt=ais'
    ,'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702080000&semt=ais'
    ,'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702080000&semt=ais'
    ,'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702080000&semt=ais'
  ]
  switchNav(pressed: number) {
    this.journalism = pressed === 0;
    this.editing = pressed === 1;
    this.animation = pressed === 2;
    this.socialMedia = pressed === 3;
    console.log("hello")
    switch (pressed) {
      case 0:
        this.buttonPosition = '0';
        break;
      case 1:
        this.buttonPosition = '25%';
        break;
      case 2:
        this.buttonPosition = '50%';
        break;
      case 3:
        this.buttonPosition = '75%';
        break;
      default:
        this.buttonPosition = ''; // Handle unexpected values
        break;
    }


  }

  viewMore() {
    this.updateCounter();
    this.checkViewButtonState();
    console.log(this.screenWidth);
  }

  private updateCounter() {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth>1024){
      this.counter += 3;
    }else {
      this.counter += 2;
    }
  }

  private checkViewButtonState() {
    if (this.viewButtonActive) {
      this.counter = 6;
      this.ViewButtonName = "View More";
      this.viewButtonActive = false;
    }

    if (this.srcs.length <= this.counter) {
      this.viewButtonActive = true;
      this.ViewButtonName = "View Less";
    }
  }


}
