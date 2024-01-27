import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  @Input() isProject = false;

  @Input() position: string;
  @Input() company: string;
  @Input() credentialLink?: string;
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

  get elapsedTime() {
    const [startDate, endDateString] = this.period?.split(' - ');
    const format = 'MMM YYYY';
    const endDate = endDateString.toLowerCase() === 'present' ? moment() : moment(endDateString, format);
    const totalMonths = endDate.diff(moment(startDate, format), 'months');
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) {
      return `${months} mo${months !== 1 ? 's' : ''}`;
    } else if (months === 0) {
      return `${years} yr${years !== 1 ? 's' : ''}`;
    }

    return `${years} yr${years !== 1 ? 's' : ''} ${months} mo${months !== 1 ? 's' : ''}`;
  }

  constructor() {}
}
