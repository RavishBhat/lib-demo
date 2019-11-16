import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TvmazeService } from '../tvmaze.service';
export declare class PosterComponent implements OnInit {
    private tvMaze;
    showId: number;
    posterUrl$: Observable<string>;
    constructor(tvMaze: TvmazeService);
    ngOnInit(): void;
}
