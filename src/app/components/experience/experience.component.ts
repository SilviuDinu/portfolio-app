import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
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
  @Input() links: { text: string; link: string }[];

  // Projects
  @Input() title: string;

  constructor() {}
}
