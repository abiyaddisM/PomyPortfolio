import { Component } from '@angular/core';

@Component({
  selector: 'app-about-paragraph',
  templateUrl: './about-paragraph.component.html',
  styleUrls: ['./about-paragraph.component.css']
})
export class AboutParagraphComponent {
  statsArr=[{title:'10+',text:'Years of Experience Design'},{title:'120+',text:'Successful Projects Completed'},{title: '60+',text: 'Global Customers'}]
  downloadFile(): void {
    const link = document.createElement('a');
    link.download = 'logo.png';
    link.href = '/assets/Image/logo.png';
    link.click();
    document.body.removeChild(link);
  }
}
