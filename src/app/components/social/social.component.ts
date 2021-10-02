import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  @Input() icon: string;
  @Input() url: string;
  @Input() ariaHidden: boolean;

  constructor() {}
}
