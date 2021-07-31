import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconProviderService {
  icons = [
    ['home', 'home.svg'],
    ['menu_white', 'menu_white.svg'],
    ['menu_dark', 'menu_dark.svg'],
    ['close_white', 'close_white.svg'],
    ['close_dark', 'close_dark.svg'],
    ['github_logo', 'github-logo.svg'],
    ['linkedin', 'linkedin.svg'],
    ['linkedin_circle', 'linkedin-circle.svg'],
    ['facebook', 'facebook.svg'],
    ['facebook_circle', 'facebook-circle.svg'],
    ['twitter', 'twitter.svg'],
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  init() {
    this.icons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon[0],
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons/${icon[1]}`
        )
      );
    });
  }
}
