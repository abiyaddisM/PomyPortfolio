import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-nathan',
  templateUrl: './button-nathan.component.html',
  styleUrls: ['./button-nathan.component.css']
})
export class ButtonNathanComponent {
  @Input() isIcon=true;
  @Input() fontSize='';
  @Input() buttonText='';
  @Input()  padding='';
  @Input() icon ='';
}
