import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-divider',
  templateUrl: './horizontal-divider.component.html',
  styleUrls: ['./horizontal-divider.component.scss'],
})
export class HorizontalDividerComponent {
  @Input() isCentered = false;
  @Input() length: 'max' | 'three-quarters' | 'half' | 'quarter' = 'max';
  @Input() width: string = '100%';
  constructor() {}
}
