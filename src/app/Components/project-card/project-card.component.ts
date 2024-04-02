import { Component } from '@angular/core';
import { ProjectService } from '../../Services/project.service';
import { NgFor } from '@angular/common';
import AOS from "aos";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project-card.component.html',

})
export class ProjectCardComponent {
  project:any[] = [];
 
  constructor(private ProjectService:ProjectService){}
  ngOnInit():void{
    this.ProjectService.getProject().subscribe(data=>
      this.project = data)
      AOS.init();
  }

}
