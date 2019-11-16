/**
 * @fileoverview added by tsickle
 * Generated from: lib/poster/poster.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { TvmazeService } from '../tvmaze.service';
var PosterComponent = /** @class */ (function () {
    function PosterComponent(tvMaze) {
        this.tvMaze = tvMaze;
    }
    /**
     * @return {?}
     */
    PosterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.posterUrl$ = this.tvMaze.getShow(this.showId).pipe(map((/**
         * @param {?} show
         * @return {?}
         */
        function (show) { return show.image.medium; })));
    };
    PosterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tm-poster',
                    template: "<img *ngIf=\"posterUrl$ | async as src\" [src]=\"src\" alt=\"Image\" />",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PosterComponent.ctorParameters = function () { return [
        { type: TvmazeService }
    ]; };
    PosterComponent.propDecorators = {
        showId: [{ type: Input }]
    };
    return PosterComponent;
}());
export { PosterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3R2bWF6ZS8iLCJzb3VyY2VzIjpbImxpYi9wb3N0ZXIvcG9zdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQ7SUFRRSx5QkFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFJLENBQUM7Ozs7SUFFOUMsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFqQixDQUFpQixFQUFDLENBQUMsQ0FBQTtJQUN6RixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLG1GQUFzQzs7aUJBRXZDOzs7O2dCQU5RLGFBQWE7Ozt5QkFRbkIsS0FBSzs7SUFRUixzQkFBQztDQUFBLEFBZEQsSUFjQztTQVRZLGVBQWU7OztJQUMxQixpQ0FBd0I7O0lBQ3hCLHFDQUErQjs7Ozs7SUFDbkIsaUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUdm1hemVTZXJ2aWNlIH0gZnJvbSAnLi4vdHZtYXplLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0bS1wb3N0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9zdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9zdGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQb3N0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaG93SWQ6IG51bWJlcjtcbiAgcG9zdGVyVXJsJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR2TWF6ZTogVHZtYXplU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wb3N0ZXJVcmwkID0gdGhpcy50dk1hemUuZ2V0U2hvdyh0aGlzLnNob3dJZCkucGlwZShtYXAoc2hvdyA9PiBzaG93LmltYWdlLm1lZGl1bSkpXG4gIH1cblxufVxuIl19