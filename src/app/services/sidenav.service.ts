import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  opened: boolean = false;
  sidenav: MatSidenav;
  subscription: Subscription;

  state$ = new BehaviorSubject(this.opened);

  registerSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
    this.opened = false;

    if (!sidenav.openedChange) {
      return;
    }
    this.subscription = sidenav.openedChange.subscribe((isOpened: boolean) => {
      this.opened = isOpened;
      this.state$.next(this.opened);
    });
  }

  unregister(sidenav: MatSidenav) {
    this.opened = false;
    this.subscription.unsubscribe();
  }

  toggle() {
    if (!this.opened) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.opened = true;
    this.state$.next(this.opened);
    this.sidenav.open();
  }

  close() {
    this.opened = false;
    this.state$.next(this.opened);
    this.sidenav.close();
  }
}
