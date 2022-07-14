import { Responsive } from '@abstracts/responsive.abstract';
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IconProviderService } from '@services/icon-provider.service';
import { Subject } from 'rxjs';
import { filter, takeUntil, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends Responsive implements OnDestroy {
  title = 'portfolio-app';
  @ViewChild('appContainer', { static: false }) appContainer: ElementRef;
  private readonly ngDestroy$ = new Subject<void>();

  constructor(private iconProvider: IconProviderService, private readonly router: Router) {
    super();

    this.iconProvider.init();

    this.router.events
      .pipe(
        withLatestFrom(this.isDesktop$),
        filter(([event, isDesktop]) => isDesktop && event instanceof NavigationEnd),
        takeUntil(this.ngDestroy$)
      )
      .subscribe(() => this.appContainer.nativeElement.scrollTo(0, 0));
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
