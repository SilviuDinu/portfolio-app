import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
})
export class GridListComponent {
  @Input() items: any[];
  @Input() isIcon = true;

  constructor() {}
}
