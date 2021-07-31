import { Component, OnInit } from '@angular/core';
import { IconProviderService } from '@services/icon-provider.service';
import { TokenService } from '@services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';

  constructor(private iconProvider: IconProviderService) {
    this.iconProvider.init();
  }

  ngOnInit() {}
}
