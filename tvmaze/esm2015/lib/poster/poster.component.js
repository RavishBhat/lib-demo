/**
 * @fileoverview added by tsickle
 * Generated from: lib/poster/poster.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { TvmazeService } from '../tvmaze.service';
export class PosterComponent {
    /**
     * @param {?} tvMaze
     */
    constructor(tvMaze) {
        this.tvMaze = tvMaze;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.posterUrl$ = this.tvMaze.getShow(this.showId).pipe(map((/**
         * @param {?} show
         * @return {?}
         */
        show => show.image.medium)));
    }
}
PosterComponent.decorators = [
    { type: Component, args: [{
                selector: 'tm-poster',
                template: "<img *ngIf=\"posterUrl$ | async as src\" [src]=\"src\" alt=\"Image\" />",
                styles: [""]
            }] }
];
/** @nocollapse */
PosterComponent.ctorParameters = () => [
    { type: TvmazeService }
];
PosterComponent.propDecorators = {
    showId: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PosterComponent.prototype.showId;
    /** @type {?} */
    PosterComponent.prototype.posterUrl$;
    /**
     * @type {?}
     * @private
     */
    PosterComponent.prototype.tvMaze;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3R2bWF6ZS8iLCJzb3VyY2VzIjpbImxpYi9wb3N0ZXIvcG9zdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPbEQsTUFBTSxPQUFPLGVBQWU7Ozs7SUFHMUIsWUFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFJLENBQUM7Ozs7SUFFOUMsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUE7SUFDekYsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixtRkFBc0M7O2FBRXZDOzs7O1lBTlEsYUFBYTs7O3FCQVFuQixLQUFLOzs7O0lBQU4saUNBQXdCOztJQUN4QixxQ0FBK0I7Ozs7O0lBQ25CLGlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHZtYXplU2VydmljZSB9IGZyb20gJy4uL3R2bWF6ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG0tcG9zdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bvc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Bvc3Rlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9zdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2hvd0lkOiBudW1iZXI7XG4gIHBvc3RlclVybCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0dk1hemU6IFR2bWF6ZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucG9zdGVyVXJsJCA9IHRoaXMudHZNYXplLmdldFNob3codGhpcy5zaG93SWQpLnBpcGUobWFwKHNob3cgPT4gc2hvdy5pbWFnZS5tZWRpdW0pKVxuICB9XG5cbn1cbiJdfQ==