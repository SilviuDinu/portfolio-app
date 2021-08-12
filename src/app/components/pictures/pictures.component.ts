import { Responsive } from '@abstracts/responsive.abstract';
import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { pictures } from '@constants/pictures';
import { Picture } from '@models/picture.model';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
})
export class PicturesComponent extends Responsive implements OnInit, OnDestroy {
  pictures: Picture[] = pictures;
  picGroups: any[] = [];

  subscribtions: Subscription[] = [];

  constructor() {
    super();
  }

  ngOnInit() {
    this.buildLayout(2);

    this.subscribtions.push(
      this.isHandset$.pipe(filter((isHandset) => !!isHandset)).subscribe(() => {
        this.buildLayout(2);
      }),
      this.isTablet$.pipe(filter((isTablet) => !!isTablet)).subscribe(() => {
        window.innerHeight < window.innerWidth
          ? this.buildLayout(3)
          : this.buildLayout(2);
      }),
      this.isUpToMedium$
        .pipe(filter((isUpToMedium) => !!isUpToMedium))
        .subscribe(() => {
          if (window.innerWidth > 900) {
            this.buildLayout(3);
          } else {
            this.buildLayout(2);
          }
        })
    );
  }

  buildLayout(cols: number) {
    this.picGroups = [];
    switch (cols) {
      case 1:
        this.picGroups.push(this.pictures);
        break;
      case 2:
        this.picGroups.push(
          this.pictures.slice(0, Math.ceil(this.pictures.length / 2)),
          this.pictures.slice(Math.ceil(this.pictures.length / 2))
        );
        break;
      case 3:
        this.picGroups.push(
          this.pictures.slice(0, Math.ceil(this.pictures.length / 3)),
          this.pictures.slice(
            Math.ceil(this.pictures.length / 3),
            Math.ceil(this.pictures.length / 2 + 1)
          ),
          this.pictures.slice(this.pictures.length / 2 + 1)
        );
        break;
    }
  }

  ngOnDestroy() {
    this.subscribtions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
