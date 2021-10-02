import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menuRoutes as routes } from '@constants/routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  routes: any[] = routes;

  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
