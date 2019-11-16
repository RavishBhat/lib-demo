import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TvmazeService } from '../tvmaze.service';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {
  @Input() showId: number;
  posterUrl$: Observable<string>;
  constructor(private tvMaze: TvmazeService) { }

  ngOnInit() {
    this.posterUrl$ = this.tvMaze.getShow(this.showId).pipe(map(show => show.image.medium))
  }

}
