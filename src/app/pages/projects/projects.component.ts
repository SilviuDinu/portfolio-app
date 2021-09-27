import { Component } from '@angular/core';
import { projects } from '@constants/work-experience';
import { Project } from '@models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[];
  constructor() {
    this.projects = projects;
  }
}
