import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() text: string;
  @Input() size: 'large' | 'medium' | 'small' = 'large';

  constructor() {}

  ngOnInit(): void {}

  get isLarge() {
    return this.size === 'large';
  }
  get isMedium() {
    return this.size === 'medium';
  }
  get isSmall() {
    return this.size === 'small';
  }
}
