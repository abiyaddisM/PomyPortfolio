import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-m',
  templateUrl: './button-m.component.html',
  styleUrls: ['./button-m.component.css']
})
export class ButtonMComponent {
  @Input() isIcon=true;
  @Input() fontSize='';
  @Input() buttonText='';
  @Input()  padding='';
}
