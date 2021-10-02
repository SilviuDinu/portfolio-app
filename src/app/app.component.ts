import { Component } from '@angular/core';
import { IconProviderService } from '@services/icon-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio-app';

  constructor(private iconProvider: IconProviderService) {
    this.iconProvider.init();
  }
}
