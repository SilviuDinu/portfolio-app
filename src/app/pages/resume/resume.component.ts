import { Responsive } from '@abstracts/responsive.abstract';
import { Component, OnInit } from '@angular/core';
import { workExperience } from '@constants/work-experience';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent extends Responsive implements OnInit {

  experiences = workExperience;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
