import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

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

  constructor() {}

  ngOnInit(): void {
  }

}
