import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  @Input() tech: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
