import { ChangeDetectionStrategy, Component } from '@angular/core';
import { slideRightLeft } from '@constants/animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideRightLeft],
})
export class ContentComponent {
  constructor() {}
}
