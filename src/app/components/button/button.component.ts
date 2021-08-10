import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() icon: string;
  @Input() isDownload = false;
  @Input() downloadUrl: string;
  @Input() type: string = 'button';
  @Output() action = new EventEmitter();

  constructor() {}

  onClick(): void {
    this.action.emit();
  }
}
