/**
 * @fileoverview added by tsickle
 * Generated from: lib/tvmaze.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var TvmazeService = /** @class */ (function () {
    function TvmazeService(http) {
        this.http = http;
        this.apiRoot = 'https://api.tvmaze.com';
    }
    /**
     * @param {?} id
     * @return {?}
     */
    TvmazeService.prototype.getShow = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var url = this.apiRoot + "/shows/" + id;
        return this.http.get(url);
    };
    TvmazeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TvmazeService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ TvmazeService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(i0.ɵɵinject(i1.HttpClient)); }, token: TvmazeService, providedIn: "root" });
    return TvmazeService;
}());
export { TvmazeService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TvmazeService.prototype.apiRoot;
    /**
     * @type {?}
     * @private
     */
    TvmazeService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZtYXplLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90dm1hemUvIiwic291cmNlcyI6WyJsaWIvdHZtYXplLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBRWxEO0lBS0UsdUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFEbkIsWUFBTyxHQUFHLHdCQUF3QixDQUFDO0lBQ1osQ0FBQzs7Ozs7SUFFekMsK0JBQU87Ozs7SUFBUCxVQUFRLEVBQVU7O1lBQ1YsR0FBRyxHQUFNLElBQUksQ0FBQyxPQUFPLGVBQVUsRUFBSTtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQVZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsVUFBVTs7O3dCQUhuQjtDQWlCQyxBQVpELElBWUM7U0FUWSxhQUFhOzs7Ozs7SUFDeEIsZ0NBQW9EOzs7OztJQUN4Qyw2QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUdk9iamVjdCB9IGZyb20gJy4vdHZtYXplLm1vZGVscyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUdm1hemVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBhcGlSb290ID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGdldFNob3coaWQ6IG51bWJlcik6IE9ic2VydmFibGU8VHZPYmplY3Q+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmFwaVJvb3R9L3Nob3dzLyR7aWR9YFxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFR2T2JqZWN0Pih1cmwpO1xuICB9XG5cbn1cbiJdfQ==