import { Responsive } from '@abstracts/responsive.abstract';
import { Component, OnInit } from '@angular/core';
import { education, projects, workExperience } from '@constants/work-experience';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent extends Responsive implements OnInit {

  experiences = workExperience;
  projects = projects;
  education = education;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
