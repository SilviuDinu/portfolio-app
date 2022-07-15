import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { slideRightLeft } from '@constants/animations';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideRightLeft],
})
export class TitleComponent {
  @Input() icon: string;
  @Input() text: string;
  @Input() size: 'largest' | 'large' | 'medium' | 'small' = 'largest';


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
