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
  @Input() isUrl = false;
  @Input() url: string;
  @Input() downloadUrl: string;
  @Input() type: string = 'button';
  @Output() action = new EventEmitter();

  constructor() {}

  get isLink() {
    return this.isDownload || this.isUrl;
  }

  onClick(): void {
    this.action.emit();
  }
}
