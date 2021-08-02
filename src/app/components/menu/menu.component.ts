import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuRoutes as routes } from '@constants/routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  routes: any[] = routes;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
