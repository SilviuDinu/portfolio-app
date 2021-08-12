import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BREAKPOINTS } from '@constants/breakpoints.config';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isDesktop$: Observable<boolean>;

  // Breakpoints
  isXSmall$: Observable<boolean>;
  isUpToSmall$: Observable<boolean>;
  isUpToMedium$: Observable<boolean>;
  isLarge$: Observable<boolean>;

  isIpadProLandscape$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isIpadProLandscape$ = this.observe([
      this.getCustomBreakpoint('ipadProLandscape'),
    ]);
    this.isHandset$ = this.observe([Breakpoints.Handset]);
    this.isTablet$ = this.observe([Breakpoints.Tablet]);
    this.isDesktop$ = this.observe([Breakpoints.Web]);
    this.isXSmall$ = this.observe([Breakpoints.XSmall]);
    this.isUpToSmall$ = this.observe([Breakpoints.XSmall, Breakpoints.Small]);
    this.isUpToMedium$ = this.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      this.getCustomBreakpoint('md'),
    ]);
    this.isLarge$ = this.observe([
      this.getCustomBreakpoint('md'),
      Breakpoints.XLarge,
    ]);
  }

  observe(breakpoints: any[]) {
    return this.breakpointObserver
      .observe(breakpoints)
      .pipe(map((result: any) => result.matches));
  }

  getCustomBreakpoint(breakpoint: string) {
    const result = BREAKPOINTS.find((bp) => bp.alias === breakpoint);
    return result ? result.mediaQuery : '';
  }
}
