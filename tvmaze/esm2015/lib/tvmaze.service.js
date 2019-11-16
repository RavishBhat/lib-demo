/**
 * @fileoverview added by tsickle
 * Generated from: lib/tvmaze.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class TvmazeService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.apiRoot = 'https://api.tvmaze.com';
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getShow(id) {
        /** @type {?} */
        const url = `${this.apiRoot}/shows/${id}`;
        return this.http.get(url);
    }
}
TvmazeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TvmazeService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ TvmazeService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(i0.ɵɵinject(i1.HttpClient)); }, token: TvmazeService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZtYXplLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90dm1hemUvIiwic291cmNlcyI6WyJsaWIvdHZtYXplLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBS2xELE1BQU0sT0FBTyxhQUFhOzs7O0lBRXhCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFEbkIsWUFBTyxHQUFHLHdCQUF3QixDQUFDO0lBQ1osQ0FBQzs7Ozs7SUFFekMsT0FBTyxDQUFDLEVBQVU7O2NBQ1YsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxFQUFFLEVBQUU7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFWRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxVQUFVOzs7Ozs7OztJQU1qQixnQ0FBb0Q7Ozs7O0lBQ3hDLDZCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFR2T2JqZWN0IH0gZnJvbSAnLi90dm1hemUubW9kZWxzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFR2bWF6ZVNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGFwaVJvb3QgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbSc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgZ2V0U2hvdyhpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxUdk9iamVjdD4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYXBpUm9vdH0vc2hvd3MvJHtpZH1gXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VHZPYmplY3Q+KHVybCk7XG4gIH1cblxufVxuIl19