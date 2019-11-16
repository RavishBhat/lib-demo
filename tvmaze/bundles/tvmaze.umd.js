(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('tvmaze', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory(global.tvmaze = {}, global.ng.core, global.ng.common.http, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, http, operators, common) { 'use strict';

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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TvmazeService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ TvmazeService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(core.ɵɵinject(http.HttpClient)); }, token: TvmazeService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            this.posterUrl$ = this.tvMaze.getShow(this.showId).pipe(operators.map((/**
             * @param {?} show
             * @return {?}
             */
            function (show) { return show.image.medium; })));
        };
        PosterComponent.decorators = [
            { type: core.Component, args: [{
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
            showId: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        declarations: [TvmazeComponent, PosterComponent],
                        imports: [http.HttpClientModule, common.CommonModule
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

    exports.TvmazeComponent = TvmazeComponent;
    exports.TvmazeModule = TvmazeModule;
    exports.TvmazeService = TvmazeService;
    exports.ɵa = PosterComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tvmaze.umd.js.map
