import { Responsive } from '@abstracts/responsive.abstract';
import { Component } from '@angular/core';
import {
  education,
  projects,
  skills,
  workExperience,
} from '@constants/work-experience';
import { Experience } from '@models/experience.model';
import { Project } from '@models/project.model';
import { Skill } from '@models/skill.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent extends Responsive {
  experiences: Experience[] = workExperience;
  projects: Project[] = projects;
  education: Experience[] = education;
  skills: Skill[] = skills;

  constructor() {
    super();
  }
}
