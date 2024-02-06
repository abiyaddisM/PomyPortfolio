import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit{
  screenWidth: number=0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = window.innerWidth;
  }
  ViewButtonName="View More"
  viewButtonActive=false;
  viewButtonVis=true;
  counter=6;

  buttonPosition:string='0%';
  allPost=true;
  editing=false;
  animation=false;
  socialMedia =false;
  srcs=[
    'https://upload.wikimedia.org/wikipedia/commons/b/b7/Blender_2.81-splash.png'
    ,'https://i.ytimg.com/vi/IrRHlMIykwk/maxresdefault.jpg'
    ,'https://upload.wikimedia.org/wikipedia/commons/c/cf/Blender_3.0-splash_screen.png'
    ,'https://e0.365dm.com/22/10/2048x1152/skysports-world-cup-qatar-2022_5921764.jpg?20221006085810'
    ,'https://render.fineartamerica.com/images/rendered/search/poster/24/18/break/images/artworkimages/medium/1/to-the-beat-of-the-drum-larry-poncho-brown.jpg'
    ,'https://graffitinetwerk.nl/wp-content/uploads/2023/01/Street-Art-tours-de-voors-en-tegens.jpg.webp'
    ,'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702080000&semt=ais'
    ,'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702080000&semt=ais'
    ,'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702080000&semt=ais'
    ,'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702080000&semt=ais'
    ,'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702080000&semt=ais'
  ]
  switchNav(pressed: number) {
    this.allPost = pressed === 0;
    this.editing = pressed === 1;
    this.animation = pressed === 2;
    this.socialMedia = pressed === 3;
    this.checkViewButtonState();
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


    if (this.getFilter().length <= this.counter) {
      this.viewButtonActive = true;
      this.ViewButtonName = "View Less";
    }
    this.viewButtonVis = this.getFilter().length <= 6;
  }
  getFilter(){
    if(this.allPost){
      return this.posts;
    }else if (this.editing){
      return this.hold1;
    }else if (this.animation){
      return this.hold2;
    }else if (this.socialMedia){
      return this.hold3;
    }
    return null;
  }
  private url="https://pomy-portfolio-default-rtdb.europe-west1.firebasedatabase.app/projects.json";

  constructor(private http: HttpClient) {
  }
  posts:any;

  ngOnInit(){
    this.http.get(this.url).pipe(map((response)=>{
      const products=[];
      for(const key in response){
        if(response.hasOwnProperty(key)) {
          // @ts-ignore
          products.push({...response[key], is: key})
        }
      }
      return products
    }))

      .subscribe(products=>{
        this.posts=products;
        this.arrange();
        this.checkViewButtonState();
      });
  }
  hold1:project[]=[];
  hold2:project[]=[];
  hold3:project[]=[];

  arrange(){
    let pl:project;
    for (let i = 0; i < this.posts.length; i++) {
      switch (this.posts[i].filter){
        case '1':
         this.hold1.push(this.posts[i]);
          break;
        case '2':
          this.hold2.push(this.posts[i]);

          break;
        case '3':
          this.hold3.push(this.posts[i]);
          break;
      }
    }
  }

}
interface project{
  title:string;
  url:string;
  role:string;
  date:string;
}
