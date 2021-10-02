import { Component } from '@angular/core';
import { games } from '@constants/about-me';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  games: any[] = games;

  constructor() { }

}
