import { Responsive } from '@abstracts/responsive.abstract';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { SidenavService } from '@services/sidenav.service';
import { filter } from 'lodash';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent extends Responsive implements OnInit, AfterViewInit {
  @ViewChild('sidenavMenu', { static: false }) sidenavMenu: MatSidenav;

  constructor(private sidenavService: SidenavService) {
    super();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.sidenavService.registerSidenav(this.sidenavMenu);
  }
}
