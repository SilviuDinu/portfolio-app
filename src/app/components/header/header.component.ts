import { Component, OnInit } from '@angular/core';
import { SidenavService } from '@services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSidenavOpened: boolean;

  constructor(private sidenavService: SidenavService) {
    this.sidenavService.state$.subscribe((isOpened) => {
      this.isSidenavOpened = isOpened;
    });
  }

  ngOnInit(): void {}

  toggleSidenav(event: Event) {
    event.stopPropagation();
    this.sidenavService.toggle();
  }
}
