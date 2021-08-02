import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  @Input() position: string;
  @Input() company: string;
  @Input() city: string;
  @Input() period: string;

  constructor() { }

  ngOnInit(): void {
  }

}
