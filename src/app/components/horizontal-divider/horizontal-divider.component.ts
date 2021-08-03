import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-divider',
  templateUrl: './horizontal-divider.component.html',
  styleUrls: ['./horizontal-divider.component.scss'],
})
export class HorizontalDividerComponent implements OnInit {
  @Input() isCentered = false;
  @Input() length: 'max' | 'three-quarters' | 'half' | 'quarter' = 'max';
  @Input() width: string = '100%';
  constructor() {}

  ngOnInit(): void {}
}
