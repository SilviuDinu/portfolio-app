import { Component } from '@angular/core';
import { tech } from '@constants/about-me';
import { pictures } from '@constants/pictures';
import { Picture } from '@models/picture.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  pictures: Picture[];
  technologies: { title: string; icon: string }[];

  constructor() {
    this.pictures = pictures;
    this.technologies = tech;
  }
}
