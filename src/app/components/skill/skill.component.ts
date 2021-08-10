import { Responsive } from '@abstracts/responsive.abstract';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent extends Responsive {
  @Input() skill: string;
  @Input() level?: string;

  constructor() {
    super();
  }
}
