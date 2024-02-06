import {Directive, ElementRef, HostListener, Output, Renderer2} from '@angular/core';
import {DropDownService} from "../service/drop-down.service";

@Directive({
  selector: '[appCollaps]'
})
export class CollapsDirective {

  constructor(private service:DropDownService,private element: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('document:mouseup', ['$event'])
  onDocumentClick(event: Event): void {
    const clickedElement = event.target as HTMLElement;

    // Check if the clicked element is outside the element with the directive
    if (!this.element.nativeElement.contains(clickedElement) && clickedElement !== this.element.nativeElement) {
      if(this.service.state){
        this.collapseElement();
      }
    }

  }
  private collapseElement(): void {
    console.log("be")
    if(this.service.state){
      this.service.state=false;
    }
  }


}
@Directive({
  selector: '[appPresss]'
})
export class pressDirective {

  constructor(private service:DropDownService) {

  }
  @HostListener('click') print(){
    if(!this.service.state&&this.service.counter===0){
      this.service.state=true;
      this.service.counter++;
    }
    else if(this.service.counter===1){
      this.service.counter=0;
    }
    console.log(this.service.counter);

  }
}
