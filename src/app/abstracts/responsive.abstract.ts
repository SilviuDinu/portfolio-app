import { Observable } from 'rxjs';
import { ResponsiveService } from '@services/responsive.service';
import { AppInjector } from '@app.module';

export abstract class Responsive {
protected responsiveService: ResponsiveService;

  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isDesktop$: Observable<boolean>;

  // Breakpoints
  isXSmall$: Observable<boolean>;
  isUpToSmall$: Observable<boolean>;
  isUpToMedium$: Observable<boolean>;
  isLarge$: Observable<boolean>;

  constructor() {
    this.responsiveService = AppInjector.get(ResponsiveService);

    this.isHandset$ = this.responsiveService.isHandset$;
    this.isTablet$ = this.responsiveService.isTablet$;
    this.isDesktop$ = this.responsiveService.isDesktop$;

    this.isXSmall$ = this.responsiveService.isXSmall$;
    this.isUpToSmall$ = this.responsiveService.isUpToSmall$;
    this.isUpToMedium$ = this.responsiveService.isUpToMedium$;
    this.isLarge$ = this.responsiveService.isLarge$;
  }
}
