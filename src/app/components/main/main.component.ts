import { Responsive } from '@abstracts/responsive.abstract';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { SidenavService } from '@services/sidenav.service';
import { withLatestFrom, filter } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent extends Responsive implements AfterViewInit {
  @ViewChild('sidenavMenu', { static: false }) sidenavMenu: MatSidenav;

  constructor(private sidenavService: SidenavService, private router: Router) {
    super();

    /*
    Automatically close the sidenav after
    clicking on a route for mobile / tablet
    */
    this.router.events
      .pipe(
        withLatestFrom(this.isUpToMedium$),
        filter(([a, b]) => {
          return b && a instanceof NavigationEnd;
        })
      )
      .subscribe(() => {
        this.sidenavService.close();
        window.scrollTo(0, 0);
      });
  }

  ngAfterViewInit() {
    this.sidenavService.registerSidenav(this.sidenavMenu);
  }
}
