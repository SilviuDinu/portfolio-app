import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  @Input() skills: any[];

  sortHighToLow(skills: any) {
    return skills.sort((a: any, b: any) => b.level - a.level);
  }
}
