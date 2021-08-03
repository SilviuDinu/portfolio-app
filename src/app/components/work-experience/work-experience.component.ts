import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  @Input() isProject = false;

  @Input() position: string;
  @Input() company: string;
  @Input() icon: string;
  @Input() city: string;
  @Input() period: string;
  @Input() description: string;
  @Input() website: string;
  @Input() repo: string;
  @Input() responsibilities: string[];
  @Input() tools: string[];



  // Projects
  @Input() title: string;

  constructor() { console.log(this.responsibilities)}

  ngOnInit(): void {
  }

}
