import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() icon: string;
  @Input() isDownload = false;
  @Input() downloadUrl: string;
  @Input() type: string = 'button';
  @Output() action = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.action.emit();
  }
}
