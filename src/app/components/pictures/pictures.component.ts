import { Component } from '@angular/core';
import { pictures } from '@constants/pictures';
import { Picture } from '@models/picture.model';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent {

  pictures: Picture[] = pictures;

  constructor() { }

}
