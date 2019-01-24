(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-denied/access-denied.module": [
		"./src/app/access-denied/access-denied.module.ts",
		"access-denied-access-denied-module"
	],
	"./blank-page/blank-page.module": [
		"./src/app/layout/blank-page/blank-page.module.ts",
		"blank-page-blank-page-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/layout/dashboard/dashboard.module.ts",
		"default~dashboard-dashboard-module~layout-layout-module",
		"common",
		"dashboard-dashboard-module"
	],
	"./form/form.module": [
		"./src/app/layout/form/form.module.ts",
		"common",
		"form-form-module"
	],
	"./layout/layout.module": [
		"./src/app/layout/layout.module.ts",
		"default~dashboard-dashboard-module~layout-layout-module",
		"common",
		"layout-layout-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"common",
		"login-login-module"
	],
	"./not-found/not-found.module": [
		"./src/app/not-found/not-found.module.ts",
		"not-found-not-found-module"
	],
	"./server-error/server-error.module": [
		"./src/app/server-error/server-error.module.ts",
		"server-error-server-error-module"
	],
	"./signup/signup.module": [
		"./src/app/signup/signup.module.ts",
		"common",
		"signup-signup-module"
	],
	"./social-info/social.module": [
		"./src/app/layout/social-info/social.module.ts",
		"social-info-social-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _layout_project_info_project_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/project-info/project-info.component */ "./src/app/layout/project-info/project-info.component.ts");
/* harmony import */ var _layout_location_location_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/location/location.component */ "./src/app/layout/location/location.component.ts");
/* harmony import */ var _layout_social_info_social_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/social-info/social-info.component */ "./src/app/layout/social-info/social-info.component.ts");
/* harmony import */ var _layout_agriculture_info_agriculture_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/agriculture-info/agriculture-info.component */ "./src/app/layout/agriculture-info/agriculture-info.component.ts");
/* harmony import */ var _layout_engineering_info_engineering_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/engineering-info/engineering-info.component */ "./src/app/layout/engineering-info/engineering-info.component.ts");
/* harmony import */ var _layout_groundwater_info_groundwater_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/groundwater-info/groundwater-info.component */ "./src/app/layout/groundwater-info/groundwater-info.component.ts");
/* harmony import */ var _layout_economic_info_economic_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/economic-info/economic-info.component */ "./src/app/layout/economic-info/economic-info.component.ts");
/* harmony import */ var _layout_implementation_info_implementation_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/implementation-info/implementation-info.component */ "./src/app/layout/implementation-info/implementation-info.component.ts");
/* harmony import */ var _layout_map_info_map_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/map-info/map-info.component */ "./src/app/layout/map-info/map-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// AoT requires an exported function for factories
var createTranslateLoader = function (http) {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                    }
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            // tslint:disable-next-line:max-line-length
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _layout_project_info_project_info_component__WEBPACK_IMPORTED_MODULE_10__["ProjectInfoComponent"], _layout_location_location_component__WEBPACK_IMPORTED_MODULE_11__["LocationComponent"], _layout_social_info_social_info_component__WEBPACK_IMPORTED_MODULE_12__["SocialInfoComponent"], _layout_agriculture_info_agriculture_info_component__WEBPACK_IMPORTED_MODULE_13__["AgricultureInfoComponent"], _layout_engineering_info_engineering_info_component__WEBPACK_IMPORTED_MODULE_14__["EngineeringInfoComponent"], _layout_groundwater_info_groundwater_info_component__WEBPACK_IMPORTED_MODULE_15__["GroundwaterInfoComponent"], _layout_economic_info_economic_info_component__WEBPACK_IMPORTED_MODULE_16__["EconomicInfoComponent"], _layout_implementation_info_implementation_info_component__WEBPACK_IMPORTED_MODULE_17__["ImplementationInfoComponent"], _layout_map_info_map_info_component__WEBPACK_IMPORTED_MODULE_18__["MapInfoComponent"]],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/agriculture-info/agriculture-info.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/agriculture-info/agriculture-info.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n    <div class=\"jumbotron\">\n        <h3>Existing cropping pattern</h3>\n        <br>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Crop name:</label>\n                <select class=\"col-md-4\"> \n              <option>select</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Planting date:</label>\n                <select class=\"col-md-4\"> \n              <option>January</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n            <div class=\"col-md-4\">\n                <select class=\"col-md-4\"> \n              <option>First week</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n        </div>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Crop area:</label>\n                <input type=\"text\">\n                <label>ha</label>\n            </div>\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Harvesting date:</label>\n                <select class=\"col-md-4\"> \n              <option>January</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n            <div class=\"col-md-4\">\n                <select class=\"col-md-4\"> \n              <option>First week</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n        </div>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Average crop yield:</label>\n                <input type=\"text\">\n                <label>ton/ha</label>\n            </div>\n        </div>\n        <br>\n        <br>\n        <h3> Average farm input </h3>\n        <br>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Crop name:</label>\n                <select class=\"col-md-4\"> \n              <option>select</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Planting date:</label>\n                <select class=\"col-md-4\"> \n              <option>January</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n            <div class=\"col-md-4\">\n                <select class=\"col-md-4\"> \n              <option>First week</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n        </div>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Organic Manure:</label>\n                <input type=\"text\">\n                <label>Nrs/ha</label>\n            </div>\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Potash:</label>\n                <input type=\"text\">\n                <label>Kg/ha</label>\n            </div>\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Animal labour:</label>\n                <input type=\"text\">\n                <label>No/ha</label>\n            </div>\n        </div>\n        <br>\n\n        <div class=\"form-row\">\n            <div class=\"col-md-4\">\n            </div>\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Urea:</label>\n                <input type=\"text\">\n                <label>Kg/ha</label>\n            </div>\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Machine labour:</label>\n                <input type=\"text\">\n                <label>No/ha</label>\n            </div>\n        </div>\n        <br>\n        <br>\n        <div class=\"btn-toolbar\">\n            <div class=\"col-md-6\">\n                <button type=\"button\" class=\"mr-4\">Add</button>\n                <button type=\"button\">Cancel</button>\n            </div>\n        </div>\n        <br>\n        <br>\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Crop name:</th>\n                    <th scope=\"col\">Crop area:</th>\n                    <th scope=\"col\">Avg. crop yield:(ton/ha)</th>\n                    <th scope=\"col\">Planting date</th>\n                    <th scope=\"col\">Harvesing date</th>\n                    <th scope=\"col\">Seed(kg/gm)</th>\n\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n            </tbody>\n\n        </table>\n        <br>\n        <br>\n        <h3>Proposed cropping pattern</h3>\n        <br>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Crop name:</label>\n                <select class=\"col-md-4\"> \n              <option>select</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Planting date:</label>\n                <select class=\"col-md-4\"> \n              <option>January</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n            <div class=\"col-md-4\">\n                <select class=\"col-md-4\"> \n              <option>First week</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n        </div>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Crop area:</label>\n                <input type=\"text\">\n                <label>ha</label>\n            </div>\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Harvesting date:</label>\n                <select class=\"col-md-4\"> \n              <option>January</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n            <div class=\"col-md-4\">\n                <select class=\"col-md-4\"> \n              <option>First week</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n        </div>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Average crop yield:</label>\n                <input type=\"text\">\n                <label>ton/ha</label>\n            </div>\n        </div>\n        <br>\n        <br>\n        <h3> Average farm input </h3>\n        <br>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Crop name:</label>\n                <select class=\"col-md-4\"> \n              <option>select</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Planting date:</label>\n                <select class=\"col-md-4\"> \n              <option>January</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n            <div class=\"col-md-4\">\n                <select class=\"col-md-4\"> \n              <option>First week</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n        </div>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Organic Manure:</label>\n                <input type=\"text\">\n                <label>Nrs/ha</label>\n            </div>\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Potash:</label>\n                <input type=\"text\">\n                <label>Kg/ha</label>\n            </div>\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Animal labour:</label>\n                <input type=\"text\">\n                <label>No/ha</label>\n            </div>\n        </div>\n        <br>\n\n        <div class=\"form-row\">\n            <div class=\"col-md-4\">\n            </div>\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Urea:</label>\n                <input type=\"text\">\n                <label>Kg/ha</label>\n            </div>\n            <div class=\"col-md-4\">\n                <label class=\"col-md-4 col-form-label\">Machine labour:</label>\n                <input type=\"text\">\n                <label>No/ha</label>\n            </div>\n        </div>\n        <br>\n        <br>\n        <div class=\"btn-toolbar\">\n            <div class=\"col-md-6\">\n                <button type=\"button\" class=\"mr-4\">Add</button>\n                <button type=\"button\">Cancel</button>\n            </div>\n        </div>\n        <br>\n        <br>\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Crop name:</th>\n                    <th scope=\"col\">Crop area:</th>\n                    <th scope=\"col\">Avg. crop yield:(ton/ha)</th>\n                    <th scope=\"col\">Planting date</th>\n                    <th scope=\"col\">Harvesing date</th>\n                    <th scope=\"col\">Seed(kg/gm)</th>\n\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n\n\n                </tr>\n            </tbody>\n\n        </table>\n        <br>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-6\">\n                <label class=\"col-md-6 col-form-label\">Nearest agricultural extension office:</label>\n                <input type=\"Text\">\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">Distance:</label>\n                <input type=\"Text\">\n            </div>\n        </div>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-6\">\n                <label class=\"col-md-6 col-form-label\">Nearest agrovet office:</label>\n                <input type=\"Text\">\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">Distance:</label>\n                <input type=\"Text\">\n            </div>\n        </div>\n        <br>\n        <br>\n        <div class=\"btn-toolbar\">\n            <div class=\"col-md-6\">\n                <button type=\"button\" class=\"mr-4\">Save</button>\n                <button type=\"button\" class=\"mr-4\">Reset</button>\n                <button type=\"button\">Cancel</button>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/layout/agriculture-info/agriculture-info.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/agriculture-info/agriculture-info.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZ3JpY3VsdHVyZS1pbmZvL2FncmljdWx0dXJlLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/agriculture-info/agriculture-info.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/agriculture-info/agriculture-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: AgricultureInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgricultureInfoComponent", function() { return AgricultureInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgricultureInfoComponent = /** @class */ (function () {
    function AgricultureInfoComponent() {
    }
    AgricultureInfoComponent.prototype.ngOnInit = function () {
    };
    AgricultureInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agriculture-info',
            template: __webpack_require__(/*! ./agriculture-info.component.html */ "./src/app/layout/agriculture-info/agriculture-info.component.html"),
            styles: [__webpack_require__(/*! ./agriculture-info.component.scss */ "./src/app/layout/agriculture-info/agriculture-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AgricultureInfoComponent);
    return AgricultureInfoComponent;
}());



/***/ }),

/***/ "./src/app/layout/economic-info/economic-info.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/economic-info/economic-info.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n    <div class=\"jumbotron\">\n        <h3>Economic information</h3>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">Total project cost:</label>\n                <input type=\"text\">\n                <label>Nrs</label>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">B/C 1:</label>\n                <input type=\"text\">\n                <label>(eg:2,3)</label>\n            </div>\n        </div>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">Cositng year:</label>\n                <input type=\"text\" placeholder=\"2000\">\n                <label>AD</label>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">Discount rate 1:</label>\n                <input type=\"text\">\n                <label>%</label>\n            </div>\n        </div>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">Eirr:</label>\n                <input type=\"text\">\n                <label>%</label>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">B/C 2:</label>\n                <input type=\"text\">\n                <label>(eg:2,3)</label>\n            </div>\n        </div>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-6\">\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">Discount rate 2:</label>\n                <input type=\"text\">\n                <label>%</label>\n            </div>\n        </div>\n        <br>\n        <div class=\"btn-toolbar\">\n            <div class=\"col-md-6\">\n                <button type=\"button\" class=\"mr-4\">Add</button>\n                <button type=\"button\">Cancel</button>\n            </div>\n        </div>\n        <br>\n        <br>\n        <table sclass=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Project cost</th>\n                    <th scope=\"col\">Costing year</th>\n                    <th scope=\"col\">Eirr(%)</th>\n                    <th scope=\"col\">B/C 1</th>\n                    <th scope=\"col\">Discountrate 1(%)</th>\n                    <th scope=\"col\">B/C 2</th>\n                    <th scope=\"col\">Discount rate 2(%)</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n                    <td>7</td>\n                    <td>8</td>\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n                    <td>7</td>\n                    <td>8</td>\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n                    <td>7</td>\n                    <td>8</td>\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n                    <td>7</td>\n                    <td>8</td>\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n                    <td>7</td>\n                    <td>8</td>\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n                    <td>7</td>\n                    <td>8</td>\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n                    <td>7</td>\n                    <td>8</td>\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n                    <td>7</td>\n                    <td>8</td>\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n                    <td>7</td>\n                    <td>8</td>\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n                    <td>7</td>\n                    <td>8</td>\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td>6</td>\n                    <td>7</td>\n                    <td>8</td>\n                </tr>\n            </tbody>\n\n        </table>\n        <br>\n        <div class=\"btn-toolbar\">\n            <div class=\"col-md-6\">\n                <button type=\"button\" class=\"mr-4\">Save</button>\n                <button type=\"button\" class=\"mr-4\">Reset</button>\n                <button type=\"button\">Cancel</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/economic-info/economic-info.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/economic-info/economic-info.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lY29ub21pYy1pbmZvL2Vjb25vbWljLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/economic-info/economic-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/economic-info/economic-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: EconomicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EconomicInfoComponent", function() { return EconomicInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EconomicInfoComponent = /** @class */ (function () {
    function EconomicInfoComponent() {
    }
    EconomicInfoComponent.prototype.ngOnInit = function () {
    };
    EconomicInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-economic-info',
            template: __webpack_require__(/*! ./economic-info.component.html */ "./src/app/layout/economic-info/economic-info.component.html"),
            styles: [__webpack_require__(/*! ./economic-info.component.scss */ "./src/app/layout/economic-info/economic-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EconomicInfoComponent);
    return EconomicInfoComponent;
}());



/***/ }),

/***/ "./src/app/layout/engineering-info/engineering-info.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/engineering-info/engineering-info.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n    <div class=\"jumbotron\">\n\n        <h3>River Hydrology</h3>\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Catchement Area:</label>\n\n            <div class=\"col-xs-10\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">Km sq.</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label \">Longitudinal Slope of River at Headworks site:  1:</label>\n            <div class=\"col-xs-10\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">(V:H)</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Flood Discharge: </label>\n            <label for=\"inputPassword\" class=\"col-sm-1 col-form-label\">25 Years</label>\n            <div class=\"col-sm-2\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-1\">cumec</label>\n            <label for=\"inputPassword\" class=\"col-sm-1 col-form-label\">50 Years</label>\n            <div class=\"col-sm-2\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\">cumec</label>\n            <label for=\"inputPassword\" class=\"col-sm-1 col-form-label\">100 Years</label>\n            <div class=\"col-sm-2\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Method of Flood Calculation:</label>\n            <div class=\"col-sm-5\">\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Name of River Source:</label>\n            <div class=\"col-sm-5\">\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">River Width at Headworks site:</label>\n            <div class=\"col-xs-10\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">m</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Average Annual Riverfall:</label>\n            <div class=\"col-xs-10\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">mm</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">MIP (2016) Hydrological Region:</label>\n            <div class=\"col-sm-3\">\n                <select id=\"inputState\" class=\"form-control\">\n      <option selected>-Select-</option>\n      <option>Option 1</option>\n      <option>Option 2</option>\n      <option>Option 3</option>\n  </select>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">River Basin:</label>\n            <div class=\"col-sm-3\">\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword\">\n            </div>\n        </div>\n        <br>\n        <h3>Main Canal</h3>\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Canal Direction:</label>\n            <div class=\"col-sm-2\">\n                <select id=\"inputState\" class=\"form-control\">\n      <option selected>Right</option>\n      <option>Option 1</option>\n      <option>Option 2</option>\n      <option>Option 3</option>\n  </select>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Total Length:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">Km</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Lined type Canal Length:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">Km</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Design Discharge:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">lps</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Top Width:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">m</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label \">Slide Slope:  1:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">(V:H)</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">No. of Branch Canal:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Bottom Width:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">m</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Longitudinal Slope:  1:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">(V:H)</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Branch Canal length:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">Km</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Unlined Type Canal length:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">Km</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Total Depth:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">m</label>\n        </div>\n        <br>\n\n        <div class=\"row\">\n            <div class=\"col\">Structure Type</div>\n            <div class=\"col\">No. of Structure</div>\n            <div class=\"w-100\"></div>\n            <div class=\"col\">*</div>\n            <div class=\"col\">col</div>\n        </div>\n\n        <br>\n        <h3>Branch Canal</h3>\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Name of Branch Canal:</label>\n            <div class=\"col-sm-5 \">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">GCA:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">ha</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">CCA:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">ha</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Total Length:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">km</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Lined Type Canal Length:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">km</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Unlined Type Canal Length:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">km</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Design Discharge:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">cumec</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Tertiary:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Sub Branch Length:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n            <label for=\"inputPassword\" class=\"ml-2\">km</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Canal Structure:</label>\n            <div class=\"col-xs-10 ml-3\">\n                <input type=\"text\" class=\"form-control\">\n            </div>\n        </div>\n\n        <div>\n            <button class=\"btn btn-default ml-2 mr-5\" type=\"button\">Add</button>\n            <button class=\"btn btn-default mr-2\" type=\"button\">Cancel</button>\n        </div>\n\n        <br>\n\n        <div class=\"row\">\n            <div class=\"col\">Name</div>\n            <div class=\"col\">GCA(ha)</div>\n            <div class=\"col\">CCA(ha)</div>\n            <div class=\"col\">Total Length</div>\n            <div class=\"col\">Lined Length</div>\n            <div class=\"col\">Unlined Length</div>\n            <div class=\"col\">Design Discharge</div>\n            <div class=\"col\">Sub-Branch No</div>\n            <div class=\"col\">Sub-Branch Length</div>\n            <div class=\"col\">Canal Structure</div>\n            <div class=\"w-100\"></div>\n            <div class=\"col\">Column</div>\n            <div class=\"col\">Column</div>\n            <div class=\"col\">Column</div>\n            <div class=\"col\">Column</div>\n            <div class=\"col\">Column</div>\n            <div class=\"col\">Column</div>\n            <div class=\"col\">Column</div>\n            <div class=\"col\">Column</div>\n            <div class=\"col\">Column</div>\n            <div class=\"col\">Column</div>\n        </div>\n        <br>\n\n        <div>\n            <button class=\"btn btn-default ml-2 mr-4\" type=\"button\">Save</button>\n            <button class=\"btn btn-default mr-4\" type=\"button\">Reset</button>\n            <button class=\"btn btn-default mr-4\" type=\"button\">Cancel</button>\n        </div>\n        <br>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/engineering-info/engineering-info.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/engineering-info/engineering-info.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lbmdpbmVlcmluZy1pbmZvL2VuZ2luZWVyaW5nLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/engineering-info/engineering-info.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/engineering-info/engineering-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: EngineeringInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineeringInfoComponent", function() { return EngineeringInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EngineeringInfoComponent = /** @class */ (function () {
    function EngineeringInfoComponent() {
    }
    EngineeringInfoComponent.prototype.ngOnInit = function () {
    };
    EngineeringInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-engineering-info',
            template: __webpack_require__(/*! ./engineering-info.component.html */ "./src/app/layout/engineering-info/engineering-info.component.html"),
            styles: [__webpack_require__(/*! ./engineering-info.component.scss */ "./src/app/layout/engineering-info/engineering-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EngineeringInfoComponent);
    return EngineeringInfoComponent;
}());



/***/ }),

/***/ "./src/app/layout/groundwater-info/groundwater-info.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/groundwater-info/groundwater-info.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n    <div class=\"jumbotron\">\n        <section>\n            <h3> Well Information </h3>\n            <br>\n            <div class=\"form-row\">\n                <div class=\"col-md-6\">\n                    <label class=\"col-md-4 col-form-label\">No. of wells:</label>\n                    <input type=\"Text\">\n                </div>\n            </div>\n        </section>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">Type of wells:</label>\n                <select class=\"col-md-3\">\n              <option>Deep tubewell</option>\n              <option>Option 1</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">Well depth:</label>\n                <input type=\"text\">\n                <label>m</label>\n            </div>\n        </div>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">Tube well spacing:</label>\n                <input type=\"text\">\n                <label>m</label>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">Size of tubewells:</label>\n                <input type=\"text\">\n                <label>inch</label>\n            </div>\n        </div>\n        <br>\n        <br>\n\n        <h3>Topography, Geology and Hydrology of the Area </h3>\n        <br>\n        <div class=\"form-group row\">\n            <div class=\"col-md-12\">\n                <label class=\"col-md-4 col-form-label\"> Hydrological Description </label>\n\n                <input type=\"text\" class=\"form-control col-md-12\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-md-12\">\n                <label class=\"col-md-4 col-form-label\"> Aquifer type </label>\n                <input type=\"text\" class=\"form-control col-md-12\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-md-12\">\n                <label class=\"col-md-4 col-form-label\"> Aquifer materials</label>\n                <input type=\"text\" class=\"form-control col-md-12\">\n            </div>\n        </div>\n        <br>\n        <h3>Distribution System</h3>\n        <br>\n        <div class=\"form-group row\">\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">Open channel system:</label>\n                <select class=\"col-md-3\"> \n              <option>Option 1</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">No. of branch channel:</label>\n                <input type=\"text\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\"> Buried pipe system: </label>\n                <select class=\"col-md-3\"> \n              <option>Option 1</option>\n              <option>Option 2</option> \n            </select>\n            </div>\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">Main channel length:</label>\n                <input type=\"text\">\n                <label>km</label>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-md-6\">\n                <label class=\"col-md-4 col-form-label\">Outlets:</label>\n                <input type=\"Text\">\n            </div>\n        </div>\n\n    </div>"

/***/ }),

/***/ "./src/app/layout/groundwater-info/groundwater-info.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/groundwater-info/groundwater-info.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ncm91bmR3YXRlci1pbmZvL2dyb3VuZHdhdGVyLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/groundwater-info/groundwater-info.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/groundwater-info/groundwater-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: GroundwaterInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundwaterInfoComponent", function() { return GroundwaterInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroundwaterInfoComponent = /** @class */ (function () {
    function GroundwaterInfoComponent() {
    }
    GroundwaterInfoComponent.prototype.ngOnInit = function () {
    };
    GroundwaterInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-groundwater-info',
            template: __webpack_require__(/*! ./groundwater-info.component.html */ "./src/app/layout/groundwater-info/groundwater-info.component.html"),
            styles: [__webpack_require__(/*! ./groundwater-info.component.scss */ "./src/app/layout/groundwater-info/groundwater-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GroundwaterInfoComponent);
    return GroundwaterInfoComponent;
}());



/***/ }),

/***/ "./src/app/layout/implementation-info/implementation-info.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/implementation-info/implementation-info.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n    <div class=\"jumbotron\">\n        <h3>Implementation Information</h3><br>\n        <h4>Progress Monitoring\n            <br>\n        </h4>\n        <form class=\"form-inline\" action=\"/action_page.php\">\n            <div class=\"form-group \">\n                <label for=\"GON\">GON Share : </label>\n                <input type=\"text\" class=\" form-control\" id=\"GON\"> NRS\n\n                <div class=\"form-group\">\n                    <label for=\"WUA\" class=\"ml-5\">WUA Share:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"WUA\">NRS\n                </div>\n            </div>\n        </form>\n\n\n        <form class=\"form-inline\" action=\"/action_page.php\">\n            <div class=\"form-group\">\n                <label for=\"comment\">Physical Progress:</label>\n                <textarea class=\"form-control\" cols=\"60\" rows=\"3\" id=\"comment\"></textarea>\n            </div>\n        </form>\n\n        <form class=\"form-inline\" action=\"/action_page.php\">\n            <div class=\"form-group \">\n                <label for=\"GON\">Physical Progress Date : </label>\n                <input type=\"text\" class=\" form-control \" id=\"GON\"> AD </div>\n        </form>\n\n        <form class=\"form-inline\" action=\"/action_page.php\">\n            <div class=\"form-group\">\n                <label for=\"comment\">Finiancial Progress</label>\n                <textarea class=\"form-control\" cols=\"60\" rows=\"3\" id=\"comment\"></textarea>\n            </div>\n        </form>\n\n        <form class=\"form-inline\" action=\"/action_page.php\">\n            <div class=\"form-group \">\n                <label for=\"GON\">Finiancial Progress Date: </label>\n                <input type=\"text\" class=\" form-control \" id=\"GON\"> AD </div>\n        </form>\n        <hr>\n        <h4>Institutional Monitoring\n            <br>\n        </h4>\n        <form class=\"form-inline\" action=\"/action_page.php\">\n            <div class=\"form-group\">\n                <label for=\"comment\">WUA Development Office\n                (Name,No of WUA Members):</label>\n                <textarea class=\"form-control\" cols=\"60\" rows=\"3\" id=\"comment\"></textarea>\n            </div>\n        </form>\n        <form class=\"form-inline\" action=\"/action_page.php\">\n            <div class=\"form-group \">\n                <label for=\"GON\">WUA Registration Date : </label>\n                <input type=\"text\" class=\" form-control \" id=\"GON\"> AD </div>\n        </form>\n        <hr>\n\n        <h4>WUA Training\n            <br>\n        </h4>\n        <form class=\"form-inline\" action=\"/action_page.php\">\n            <div class=\"form-group \">\n                <label for=\"GON\">Training Name : </label>\n                <input type=\"text\" class=\" form-control \" id=\"GON\">\n                <form class=\"form-inline\" action=\"/action_page.php\">\n                    <div class=\"form-group \">\n                        <label for=\"GON\">Training Date : </label>\n                        <input type=\"text\" class=\" form-control \" id=\"GON\"> AD </div>\n                </form>\n            </div>\n        </form>\n\n        <form class=\"form-inline\" action=\"/action_page.php\">\n            <div class=\"form-group \">\n                <label for=\"GON\">Training Period : </label>\n                <input type=\"text\" class=\" form-control \" id=\"GON\">\n                <form class=\"form-inline\" action=\"/action_page.php\">\n                    <div class=\"form-group \">\n                        <label for=\"GON\">No. Of Participants : </label>\n                        <input type=\"text\" class=\" form-control \" id=\"GON\"> </div>\n                </form>\n            </div>\n        </form>\n        <button type=\"Submit\" class=\"btn btn-outline-success mr-2\">Add</button>\n        <button type=\"Reset\" class=\"btn btn-outline-danger\">Cancel</button>\n        <hr>\n\n        <table class=\"table table-bordered table-dark\">\n            <thead>\n                <tr>\n                    <th></th>\n                    <th scope=\"col\">Training Name</th>\n                    <th scope=\"col\">Training Date</th>\n                    <th scope=\"col\">Training Period</th>\n                    <th scope=\"col\">No. of Participants</th>\n\n\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <th scope=\"row\">1</th>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <th scope=\"row\">2</th>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <th scope=\"row\">3</th>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <th scope=\"row\">4</th>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <th scope=\"row\">4</th>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n\n\n            </tbody>\n        </table>\n\n        <hr>\n        <button type=\"Submit\" class=\"btn btn-outline-success mr-2\">Save</button>\n        <button type=\"Submit\" class=\"btn btn-outline-warning mr-2\">Reset</button>\n        <button type=\"Reset\" class=\"btn btn-outline-danger\">Cancel</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/implementation-info/implementation-info.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/implementation-info/implementation-info.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbXBsZW1lbnRhdGlvbi1pbmZvL2ltcGxlbWVudGF0aW9uLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/implementation-info/implementation-info.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/implementation-info/implementation-info.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ImplementationInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImplementationInfoComponent", function() { return ImplementationInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImplementationInfoComponent = /** @class */ (function () {
    function ImplementationInfoComponent() {
    }
    ImplementationInfoComponent.prototype.ngOnInit = function () {
    };
    ImplementationInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-implementation-info',
            template: __webpack_require__(/*! ./implementation-info.component.html */ "./src/app/layout/implementation-info/implementation-info.component.html"),
            styles: [__webpack_require__(/*! ./implementation-info.component.scss */ "./src/app/layout/implementation-info/implementation-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImplementationInfoComponent);
    return ImplementationInfoComponent;
}());



/***/ }),

/***/ "./src/app/layout/location/location.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/location/location.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n    <div class=\"jumbotron\">\n\n        <div class=\"container\">\n\n\n        </div>\n\n\n        <label class=\"my-1 mr-2\" for=\"inlineFormCustomSelectPref\">Ecological Region:</label>\n        <select class=\"custom-select my-1 mr-sm-2\" id=\"inlineFormCustomSelectPref\">\n          <option selected>Choose...</option>\n          <option value=\"1\">Terai</option>\n          <option value=\"2\">Pahad</option>\n          <option value=\"3\">Himal</option>\n        </select>\n\n        <div class=\"form-group\">\n            <label for=\"formGroupExampleInput\">Nearest Road:  </label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"formGroupExampleInput2\">Distance:   </label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"In Km\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"formGroupExampleInput2\"> Nearest Airport   </label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\n        </div>\n\n\n\n        <div class=\"form-group\">\n\n            <label for=\"formGroupExampleInput2\">Distance:   </label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"In Km\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"formGroupExampleInput2\"> Nearest Market:   </label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"formGroupExampleInput2\">Distance:   </label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"In Km\">\n        </div>\n\n\n        <label class=\"my-1 mr-2\" for=\"inlineFormCustomSelectPref\">Major River Basin</label>\n        <select class=\"custom-select my-1 mr-sm-2\" id=\"inlineFormCustomSelectPref\">\n          <option selected>Choose...</option>\n          <option value=\"1\">Opt 1</option>\n          <option value=\"2\">opt 2</option>\n          <option value=\"3\">opt 3</option>\n        </select>\n\n        <div class=\"form-group\">\n            <label for=\"formGroupExampleInput2\"> Local River Basin:   </label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"formGroupExampleInput2\"> River Source:   </label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\n        </div>\n\n\n        <p>\n            <h3> Add/Edit </h3>\n            <p>\n\n                <label class=\"my-1 mr-2\" for=\"inlineFormCustomSelectPref\">Province:</label>\n                <select class=\"custom-select my-1 mr-sm-2\" id=\"inlineFormCustomSelectPref\">\n          <option selected>Choose...</option>\n          <option value=\"1\">opt 1</option>\n          <option value=\"2\">opt 2</option>\n          <option value=\"3\">opt 3</option>\n        </select>\n\n                <div class=\"form-group\">\n\n                    <label class=\"my-1 mr-2\" for=\"inlineFormCustomSelectPref\"> District:</label>\n                    <select class=\"custom-select my-1 mr-sm-2\" id=\"inlineFormCustomSelectPref\">\n          <option selected>Choose...</option>\n          <option value=\"1\">opt 1</option>\n          <option value=\"2\">opt 2</option>\n          <option value=\"3\">opt 3</option>\n        </select>\n\n                    <div class=\"form-group\">\n\n                        <label class=\"my-1 mr-2\" for=\"inlineFormCustomSelectPref\"> Metro City:</label>\n                        <select class=\"custom-select my-1 mr-sm-2\" id=\"inlineFormCustomSelectPref\">\n          <option selected>Choose...</option>\n          <option value=\"1\">opt 1</option>\n          <option value=\"2\">opt 2</option>\n          <option value=\"3\">opt 3</option>\n        </select>\n\n\n                        <label class=\"my-1 mr-2\" for=\"inlineFormCustomSelectPref\"> Sub-Metro City:</label>\n                        <select class=\"custom-select my-1 mr-sm-2\" id=\"inlineFormCustomSelectPref\">\n          <option selected>Choose...</option>\n          <option value=\"1\">opt 1</option>\n          <option value=\"2\">opt 2</option>\n          <option value=\"3\">opt 3</option>\n        </select>\n\n                        <div class=\"form-group\">\n                            <label class=\"my-1 mr-2\" for=\"inlineFormCustomSelectPref\"> Municipality:</label>\n                            <select class=\"custom-select my-1 mr-sm-2\" id=\"inlineFormCustomSelectPref\">\n          <option selected>Choose...</option>\n          <option value=\"1\">opt 1</option>\n          <option value=\"2\">opt 2</option>\n          <option value=\"3\">opt 3</option>\n        </select>\n\n\n                            <label class=\"my-1 mr-2\" for=\"inlineFormCustomSelectPref\">Rural Municipality:</label>\n                            <select class=\"custom-select my-1 mr-sm-2\" id=\"inlineFormCustomSelectPref\">\n          <option selected>Choose...</option>\n          <option value=\"1\">opt 1</option>\n          <option value=\"2\">opt 2</option>\n          <option value=\"3\">opt 3</option>\n        </select>\n                            <table class=\"table table-bordered\">\n                                <thead>\n                                    <tr>\n                                        <th>Province</th>\n                                        <th>District</th>\n                                        <th>Metro City</th>\n                                        <th>Sub-Metro City</th>\n                                        <th>Municipality</th>\n                                        <th>Rural Municipality</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n\n                                    <tr>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n\n                                    <tr>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n\n\n                                </tbody>\n                            </table>\n                            <form action=\"page1.html\">\n                                <input type=\"submit\" value=\"Go to previous Page\" />\n                            </form>\n                            <form action=\"page3.html\">\n                                <input type=\"submit\" value=\"Go to Next Page\" />\n                            </form>\n\n                        </div>"

/***/ }),

/***/ "./src/app/layout/location/location.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/location/location.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/location/location.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/location/location.component.ts ***!
  \*******************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationComponent = /** @class */ (function () {
    function LocationComponent() {
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/layout/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.scss */ "./src/app/layout/location/location.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/layout/map-info/map-info.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/map-info/map-info.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  map-info works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/map-info/map-info.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/map-info/map-info.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYXAtaW5mby9tYXAtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/map-info/map-info.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/map-info/map-info.component.ts ***!
  \*******************************************************/
/*! exports provided: MapInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapInfoComponent", function() { return MapInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapInfoComponent = /** @class */ (function () {
    function MapInfoComponent() {
    }
    MapInfoComponent.prototype.ngOnInit = function () {
    };
    MapInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-info',
            template: __webpack_require__(/*! ./map-info.component.html */ "./src/app/layout/map-info/map-info.component.html"),
            styles: [__webpack_require__(/*! ./map-info.component.scss */ "./src/app/layout/map-info/map-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MapInfoComponent);
    return MapInfoComponent;
}());



/***/ }),

/***/ "./src/app/layout/project-info/project-info.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/project-info/project-info.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  project-info works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/project-info/project-info.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/project-info/project-info.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcm9qZWN0LWluZm8vcHJvamVjdC1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/project-info/project-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/project-info/project-info.component.ts ***!
  \***************************************************************/
/*! exports provided: ProjectInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfoComponent", function() { return ProjectInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectInfoComponent = /** @class */ (function () {
    function ProjectInfoComponent() {
    }
    ProjectInfoComponent.prototype.ngOnInit = function () {
    };
    ProjectInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-info',
            template: __webpack_require__(/*! ./project-info.component.html */ "./src/app/layout/project-info/project-info.component.html"),
            styles: [__webpack_require__(/*! ./project-info.component.scss */ "./src/app/layout/project-info/project-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectInfoComponent);
    return ProjectInfoComponent;
}());



/***/ }),

/***/ "./src/app/layout/social-info/social-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/social-info/social-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n    <div class=\"jumbotron\">\n        <form class=\"form-inline\" action=\"/action_page.php\">\n            <div class=\"form-group \">\n                <label for=\"NOH\">Number of Household: </label>\n                <input type=\"text\" class=\" form-control \" id=\"NOH\">\n\n                <div class=\"form-group\">\n                    <label for=\"WIH\">Women In Household:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"WIH\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"YOS\">Year Of Survey:</label>\n\n                    <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\n        <option selected>Choose..</option>\n        <option value=\"1\">2016</option>\n        <option value=\"2\">2015</option>\n        <option value=\"3\">2014</option>\n      </select>\n                </div>\n            </div>\n\n\n            <div class=\"form-group\">\n                <label for=\"M\">Male:</label>\n                <input type=\"text\" class=\"form-control\" id=\"M\">\n\n                <div class=\"form-group\">\n                    <label for=\"F\">Female:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"F\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"TP\">Total Population:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"TP\">\n                </div>\n\n                <div class=\"form-group \">\n                    <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Major Source Of Income</label>\n                    <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\n          <option selected>Choose...</option>\n          <option value=\"1\">Business</option>\n          <option value=\"2\">Agriculture</option>\n          <option value=\"3\">Office</option>\n        </select>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"AIPF\">Annual Income Per Family:</label>\n                <input type=\"text\" class=\"form-control\" id=\"AIPF\">\n\n                <div class=\"form-group\">\n                    <label for=\"FA\">From Agriculture:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"FA\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"FOS\">From Other Source:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"FOS\">\n                </div>\n            </div>\n\n\n            <div class=\"form-group\">\n                <label for=\"LR\">Literacy Rate:</label>\n                <input type=\"text\" class=\"form-control\" id=\"LR\">\n\n                <div class=\"form-group\">\n                    <label for=\"M\">Male:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"M\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"F\">Female:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"F\">\n                </div>\n            </div>\n\n        </form>\n        <form>\n            <label for=\"EG\">Ethnic Groups:</label>\n            <table class=\"table table-bordered table-dark\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">Name</th>\n                        <th scope=\"col\">Total No</th>\n                        <th scope=\"col\">Percentage</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <form class=\"form-inline\" action=\"/action_page.php\">\n                <div class=\"form-group\">\n                    <label for=\"APMIn\">Annual Population Migration In:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"APMIn\">\n\n                    <div class=\"form-group\">\n                        <label for=\"APMOut\">Annual Population Migration Out:</label>\n                        <input type=\"text\" class=\"form-control\" id=\"APMOut\">\n                    </div>\n                </div>\n            </form>\n        </form>\n        <form>\n\n\n\n            <label for=\"LT\">Land Tenture (Household Nos):</label>\n            <table class=\"table table-bordered table-dark\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">Category</th>\n                        <th scope=\"col\">Number</th>\n                        <th scope=\"col\">Percentage</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td>Land Owners</td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n\n\n\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td>Tenants</td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td>Owner with Tenents</td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">4</th>\n                        <td>Total</td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                </tbody>\n            </table>\n\n\n            <label for=\"FS\">Farm Size(Household Nos):</label>\n            <table class=\"table table-bordered table-dark\">\n                <thead>\n                    <tr>\n                        <th></th>\n                        <th scope=\"col\">Category</th>\n\n\n                        <th scope=\"col\">Number</th>\n                        <th scope=\"col\">Percentage</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td>Small(less than 0.5 hector)</td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td>Medium(0.5-1.0 hector)</td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td>Large(1.0-1.5 hector)</td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td>Huge(more than 1.5 hector)</td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td>Total</td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <label for=\"AFS\">Annual Food Sufficiency:</label>\n\n            <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" checked>Surplus</label>\n            <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\">Deflect</label>\n        </form>\n\n        <button type=\"Submit\" class=\"btn btn-outline-success mr-2\">Submit</button>\n        <button type=\"Reset\" class=\"btn btn-outline-warning\">Reset</button>\n\n        <form action=\"page2.html\">\n            <input type=\"submit\" class=\"mr-5\" value=\"Go to Previous Page\" />\n        </form>\n        <form action=\"page4.html\">\n            <input type=\"submit\" value=\"Go to Next Page\" />\n\n        </form>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/layout/social-info/social-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/social-info/social-info.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zb2NpYWwtaW5mby9zb2NpYWwtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/social-info/social-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/social-info/social-info.component.ts ***!
  \*************************************************************/
/*! exports provided: SocialInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialInfoComponent", function() { return SocialInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialInfoComponent = /** @class */ (function () {
    function SocialInfoComponent() {
    }
    SocialInfoComponent.prototype.ngOnInit = function () {
    };
    SocialInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-info',
            template: __webpack_require__(/*! ./social-info.component.html */ "./src/app/layout/social-info/social-info.component.html"),
            styles: [__webpack_require__(/*! ./social-info.component.scss */ "./src/app/layout/social-info/social-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialInfoComponent);
    return SocialInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/guard/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/guard/index.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedPipesModule, PageHeaderModule, StatModule, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ "./src/app/shared/modules/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_0__["StatModule"]; });

/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__["SharedPipesModule"]; });

/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard */ "./src/app/shared/guard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]; });






/***/ }),

/***/ "./src/app/shared/modules/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/modules/index.ts ***!
  \*****************************************/
/*! exports provided: PageHeaderModule, StatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"]; });

/* harmony import */ var _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__["StatModule"]; });





/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <h2 class=\"page-header\">\n            {{heading}}\n        </h2>\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            </li>\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{icon}}\"></i> {{heading}}</li>\n        </ol>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    PageHeaderComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "heading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "icon", void 0);
    PageHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__(/*! ./page-header.component.html */ "./src/app/shared/modules/page-header/page-header.component.html"),
            styles: [__webpack_require__(/*! ./page-header.component.scss */ "./src/app/shared/modules/page-header/page-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.module.ts ***!
  \******************************************************************/
/*! exports provided: PageHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return PageHeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-header.component */ "./src/app/shared/modules/page-header/page-header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageHeaderModule = /** @class */ (function () {
    function PageHeaderModule() {
    }
    PageHeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]],
            exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]]
        })
    ], PageHeaderModule);
    return PageHeaderModule;
}());



/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-{{bgClass}}\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col col-xs-3\">\n                <i class=\"fa {{icon}} fa-5x\"></i>\n            </div>\n            <div class=\"col col-xs-9 text-right\">\n                <div class=\"d-block huge\">{{count}}</div>\n                <div class=\"d-block\">{{label}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <span class=\"float-left\">View Details {{data}}</span>\n        <a href=\"javascript:void(0)\" class=\"float-right card-inverse\">\n            <span ><i class=\"fa fa-arrow-circle-right\"></i></span>\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3N0YXQvc3RhdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.ts ***!
  \*******************************************************/
/*! exports provided: StatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComponent", function() { return StatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatComponent = /** @class */ (function () {
    function StatComponent() {
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StatComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StatComponent.prototype, "bgClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StatComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StatComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StatComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StatComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StatComponent.prototype, "event", void 0);
    StatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stat',
            template: __webpack_require__(/*! ./stat.component.html */ "./src/app/shared/modules/stat/stat.component.html"),
            styles: [__webpack_require__(/*! ./stat.component.scss */ "./src/app/shared/modules/stat/stat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StatComponent);
    return StatComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/stat/stat.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.module.ts ***!
  \****************************************************/
/*! exports provided: StatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return StatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stat.component */ "./src/app/shared/modules/stat/stat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatModule = /** @class */ (function () {
    function StatModule() {
    }
    StatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_2__["StatComponent"]],
            exports: [_stat_component__WEBPACK_IMPORTED_MODULE_2__["StatComponent"]]
        })
    ], StatModule);
    return StatModule;
}());



/***/ }),

/***/ "./src/app/shared/pipes/shared-pipes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/*! exports provided: SharedPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return SharedPipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedPipesModule = /** @class */ (function () {
    function SharedPipesModule() {
    }
    SharedPipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], SharedPipesModule);
    return SharedPipesModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\GMISWEB\DOI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map