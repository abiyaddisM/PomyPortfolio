import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {DropDownService} from "../../service/drop-down.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{
constructor(public service:DropDownService) {

}

}
