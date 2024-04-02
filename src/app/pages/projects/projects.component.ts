import { Component } from '@angular/core';

import AOS from "aos";
import { ProjectCardComponent } from "../../Components/project-card/project-card.component";
@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    imports: [ProjectCardComponent]
})
export class ProjectsComponent {

  ngOnInit(){
    AOS.init();
  }
  
}
