import { Observable } from 'rxjs';
import { TvObject } from './tvmaze.models';
import { HttpClient } from '@angular/common/http';
export declare class TvmazeService {
    private http;
    private readonly apiRoot;
    constructor(http: HttpClient);
    getShow(id: number): Observable<TvObject>;
}
