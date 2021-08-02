import { Responsive } from '@abstracts/responsive.abstract';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent extends Responsive implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
