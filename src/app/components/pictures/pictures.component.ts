import { Responsive } from '@abstracts/responsive.abstract';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { slideRightLeft } from '@constants/animations';
import { Picture } from '@models/picture.model';
import { combineLatest, Observable, Subject, Subscription } from 'rxjs';
import { filter, map, takeUntil, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
  animations: [slideRightLeft]
})
export class PicturesComponent extends Responsive implements OnInit, OnDestroy {
  @Input() pictures: Picture[];
  private readonly ngDestroy$ = new Subject<void>();

  picGroups: any[] = [];
  wrap$: Observable<any>;
  subscribtions: Subscription[] = [];

  constructor(private breakpointObserver: BreakpointObserver) {
    super();

    this.wrap$ = this.breakpointObserver
      .observe(['(min-width: 1250px) and (max-width: 1500px)'])
      .pipe(map((result) => result.matches));
  }

  ngOnInit() {
    this.isHandset$
      .pipe(
        filter((a) => !!a),
        takeUntil(this.ngDestroy$)
      )
      .subscribe(() => {
        this.buildLayout(2);
      });

    combineLatest([this.isTablet$, this.isLarge$])
      .pipe(
        filter(([a, b]) => !!a),
        takeUntil(this.ngDestroy$)
      )
      .subscribe(([, isLarge]) => {
        window.innerHeight < window.innerWidth || isLarge
          ? this.buildLayout(3)
          : this.buildLayout(2);
      });

    combineLatest([this.isDesktop$, this.isLarge$])
      .pipe(
        filter(([a, b]) => !!a),
        takeUntil(this.ngDestroy$)
      )
      .subscribe(([, isLarge]) => {
        isLarge ? this.buildLayout(3) : this.buildLayout(2);
      });
  }

  buildLayout(cols: number) {
    if (cols === this.picGroups.length) {
      return;
    }
    this.picGroups = [];
    switch (cols) {
      case 1:
        this.picGroups.push(this.pictures);
        break;
      case 2:
        this.pictures.length === 1
          ? this.picGroups.push(this.pictures)
          : this.picGroups.push(
              this.pictures.slice(0, Math.floor(this.pictures.length / 2)),
              this.pictures.slice(Math.floor(this.pictures.length / 2))
            );
        break;
      case 3:
        this.picGroups.push(
          this.pictures.slice(0, Math.ceil(this.pictures.length / 3)),
          this.pictures.slice(
            Math.ceil(this.pictures.length / 3),
            Math.ceil(this.pictures.length / 3) * 2
          ),
          this.pictures.slice(Math.ceil(this.pictures.length / 3) * 2)
        );
        break;
    }
  }

  ngOnDestroy() {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
