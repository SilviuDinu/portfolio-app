import { Responsive } from '@abstracts/responsive.abstract';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends Responsive implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
