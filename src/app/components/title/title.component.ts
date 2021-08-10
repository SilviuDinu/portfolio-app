import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() icon: string;
  @Input() text: string;
  @Input() size: 'largest' | 'large' | 'medium' | 'small' = 'largest';

  constructor() {}

  get isLarge() {
    return this.size === 'large';
  }
  get isLargest() {
    return this.size === 'largest';
  }
  get isMedium() {
    return this.size === 'medium';
  }
  get isSmall() {
    return this.size === 'small';
  }
}
