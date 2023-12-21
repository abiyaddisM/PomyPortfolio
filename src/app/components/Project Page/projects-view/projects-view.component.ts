import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css']
})
export class ProjectsViewComponent {
  srcs=[
    'https://cdn.80.lv/api/upload/content/00/60c8348f2af3f.jpg'
    ,'https://cdn.3dmodels.org/wp-content/uploads/2021/12/06/Dodge_Sandrat.jpg'
    ,'https://images.squarespace-cdn.com/content/v1/529c2c5de4b05482b01dd817/1629885365927-SFHOBJS4FC5NJC0MJW9P/render_challenge.jpg?format=1500w'
  ]
  colors=[
    "linear-gradient(270deg, rgba(47, 219, 209, 0.80) 0%, rgba(111, 108, 255, 0.80) 100%)",
    "linear-gradient(270deg, rgba(47, 64, 219, 0.80) 0%, rgba(255, 108, 108, 0.80) 100%)",
  ]
  tools=[
    "Adobe Illustrator",
    "Blender",
  ]
}
