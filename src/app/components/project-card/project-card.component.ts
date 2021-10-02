import { Component, Input } from '@angular/core';
import { Project } from '@models/project.model';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() title: string;
  @Input() project: Project;

  constructor(private domSanitizer: DomSanitizer) { }


  getSanitizedUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
