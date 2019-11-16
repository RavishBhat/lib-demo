import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, Input, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tvmaze.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ TvmazeService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(ɵɵinject(HttpClient)); }, token: TvmazeService, providedIn: "root" });
    return TvmazeService;
}());
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tvmaze.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TvmazeComponent = /** @class */ (function () {
    function TvmazeComponent() {
    }
    /**
     * @return {?}
     */
    TvmazeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TvmazeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tm-tvmaze',
                    template: "\n    <p>\n      tvmaze works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    TvmazeComponent.ctorParameters = function () { return []; };
    return TvmazeComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/poster/poster.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tvmaze.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TvmazeModule = /** @class */ (function () {
    function TvmazeModule() {
    }
    TvmazeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TvmazeComponent, PosterComponent],
                    imports: [HttpClientModule, CommonModule
                    ],
                    exports: [TvmazeComponent, PosterComponent]
                },] }
    ];
    return TvmazeModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tvmaze.models.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TvObject() { }
if (false) {
    /** @type {?} */
    TvObject.prototype.id;
    /** @type {?} */
    TvObject.prototype.url;
    /** @type {?} */
    TvObject.prototype.name;
    /** @type {?} */
    TvObject.prototype.type;
    /** @type {?} */
    TvObject.prototype.language;
    /** @type {?} */
    TvObject.prototype.genres;
    /** @type {?} */
    TvObject.prototype.status;
    /** @type {?} */
    TvObject.prototype.runtime;
    /** @type {?} */
    TvObject.prototype.premiered;
    /** @type {?} */
    TvObject.prototype.officialSite;
    /** @type {?} */
    TvObject.prototype.schedule;
    /** @type {?} */
    TvObject.prototype.rating;
    /** @type {?} */
    TvObject.prototype.weight;
    /** @type {?} */
    TvObject.prototype.network;
    /** @type {?|undefined} */
    TvObject.prototype.webChannel;
    /** @type {?} */
    TvObject.prototype.externals;
    /** @type {?} */
    TvObject.prototype.image;
    /** @type {?} */
    TvObject.prototype.summary;
    /** @type {?} */
    TvObject.prototype.updated;
    /** @type {?} */
    TvObject.prototype._links;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: tvmaze.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TvmazeComponent, TvmazeModule, TvmazeService, PosterComponent as ɵa };
//# sourceMappingURL=tvmaze.js.map
