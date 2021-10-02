import { Component } from '@angular/core';
import { tech } from '@constants/about-me';
import { pictures, skating } from '@constants/pictures';
import { Picture } from '@models/picture.model';
import { EndpointService } from '@services/endpoint.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  pictures: Picture[];
  skatingPictures: Picture[];
  technologies: { title: string; icon: string }[];
  codewarsInfo: any;

  constructor(private endpointService: EndpointService) {
    this.pictures = pictures;
    this.skatingPictures = skating;
    this.technologies = tech;

    this.endpointService
      .getCodewarsInfo()
      .pipe(take(1))
      .subscribe((data: any) => {
        this.codewarsInfo = data;
      });
  }
}
