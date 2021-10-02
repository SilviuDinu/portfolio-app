import { Component } from '@angular/core';
import { SidenavService } from '@services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSidenavOpened: boolean;

  constructor(private sidenavService: SidenavService) {
    this.sidenavService.state$.subscribe((isOpened) => {
      this.isSidenavOpened = isOpened;
    });
  }

  toggleSidenav(event: Event) {
    event.stopPropagation();
    this.sidenavService.toggle();
  }
}
