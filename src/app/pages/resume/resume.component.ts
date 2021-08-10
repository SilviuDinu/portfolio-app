import { Responsive } from '@abstracts/responsive.abstract';
import { Component } from '@angular/core';
import {
  education,
  projects,
  skills,
  workExperience,
} from '@constants/work-experience';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent extends Responsive {
  experiences = workExperience;
  projects = projects;
  education = education;
  skills = skills;

  constructor() {
    super();
  }
}
