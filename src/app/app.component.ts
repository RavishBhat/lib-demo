import { Component } from '@angular/core';
import { TvmazeService, TvObject } from 'tvmaze';
import { Observable } from 'rxjs';

@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lib-demo';
  show$: Observable<TvObject>
  constructor(private tvMaze: TvmazeService) {
    this.show$ = this.tvMaze.getShow(336);
  }
}
