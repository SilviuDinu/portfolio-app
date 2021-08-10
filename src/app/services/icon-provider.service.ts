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
    ['phone_white', 'call_white.svg'],
    ['phone_black', 'call_black.svg'],
    ['email_white', 'email_white.svg'],
    ['email_black', 'email_black.svg'],
    ['download_white', 'download_white.svg'],
    ['download_black', 'download_black.svg'],
    ['briefcase', 'briefcase.svg'],
    ['project', 'project.svg'],
    ['idea', 'idea.svg'],
    ['school_hat', 'school_hat.svg'],
    ['skills', 'skills.svg'],
    ['person', 'person.svg'],
    ['gamepad', 'gamepad.svg'],
    ['camera', 'camera.svg'],
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
