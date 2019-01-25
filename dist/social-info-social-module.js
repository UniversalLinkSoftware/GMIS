(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-info-social-module"],{

/***/ "./src/app/layout/social-info/social-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/social-info/social-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\r\n    <div class=\"jumbotron\">\r\n        <form class=\"form-inline\" action=\"/action_page.php\">\r\n            <div class=\"form-group \">\r\n                <label for=\"NOH\">Number of Household: </label>\r\n                <input type=\"text\" class=\" form-control \" id=\"NOH\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"WIH\">Women In Household:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"WIH\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"YOS\">Year Of Survey:</label>\r\n\r\n                    <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\r\n        <option selected>Choose..</option>\r\n        <option value=\"1\">2016</option>\r\n        <option value=\"2\">2015</option>\r\n        <option value=\"3\">2014</option>\r\n      </select>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"M\">Male:</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"M\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"F\">Female:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"F\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"TP\">Total Population:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"TP\">\r\n                </div>\r\n\r\n                <div class=\"form-group \">\r\n                    <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Major Source Of Income</label>\r\n                    <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\r\n          <option selected>Choose...</option>\r\n          <option value=\"1\">Business</option>\r\n          <option value=\"2\">Agriculture</option>\r\n          <option value=\"3\">Office</option>\r\n        </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"AIPF\">Annual Income Per Family:</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"AIPF\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"FA\">From Agriculture:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"FA\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"FOS\">From Other Source:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"FOS\">\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"LR\">Literacy Rate:</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"LR\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"M\">Male:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"M\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"F\">Female:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"F\">\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n        <form>\r\n            <label for=\"EG\">Ethnic Groups:</label>\r\n            <table class=\"table table-bordered table-dark\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">#</th>\r\n                        <th scope=\"col\">Name</th>\r\n                        <th scope=\"col\">Total No</th>\r\n                        <th scope=\"col\">Percentage</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <th scope=\"row\">1</th>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">2</th>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">3</th>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <form class=\"form-inline\" action=\"/action_page.php\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"APMIn\">Annual Population Migration In:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"APMIn\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"APMOut\">Annual Population Migration Out:</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"APMOut\">\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </form>\r\n        <form>\r\n\r\n\r\n\r\n            <label for=\"LT\">Land Tenture (Household Nos):</label>\r\n            <table class=\"table table-bordered table-dark\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">#</th>\r\n                        <th scope=\"col\">Category</th>\r\n                        <th scope=\"col\">Number</th>\r\n                        <th scope=\"col\">Percentage</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <th scope=\"row\">1</th>\r\n                        <td>Land Owners</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n\r\n\r\n\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">2</th>\r\n                        <td>Tenants</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">3</th>\r\n                        <td>Owner with Tenents</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">4</th>\r\n                        <td>Total</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n\r\n            <label for=\"FS\">Farm Size(Household Nos):</label>\r\n            <table class=\"table table-bordered table-dark\">\r\n                <thead>\r\n                    <tr>\r\n                        <th></th>\r\n                        <th scope=\"col\">Category</th>\r\n\r\n\r\n                        <th scope=\"col\">Number</th>\r\n                        <th scope=\"col\">Percentage</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <th scope=\"row\">1</th>\r\n                        <td>Small(less than 0.5 hector)</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">2</th>\r\n                        <td>Medium(0.5-1.0 hector)</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">3</th>\r\n                        <td>Large(1.0-1.5 hector)</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">3</th>\r\n                        <td>Huge(more than 1.5 hector)</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">3</th>\r\n                        <td>Total</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <label for=\"AFS\">Annual Food Sufficiency:</label>\r\n\r\n            <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" checked>Surplus</label>\r\n            <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\">Deflect</label>\r\n        </form>\r\n\r\n        <button type=\"Submit\" class=\"btn btn-outline-success mr-2\">Submit</button>\r\n        <button type=\"Reset\" class=\"btn btn-outline-warning\">Reset</button>\r\n\r\n        <form action=\"page2.html\">\r\n            <input type=\"submit\" class=\"mr-5\" value=\"Go to Previous Page\" />\r\n        </form>\r\n        <form action=\"page4.html\">\r\n            <input type=\"submit\" value=\"Go to Next Page\" />\r\n\r\n        </form>\r\n    </div>\r\n\r\n\r\n</div>"

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

/***/ "./src/app/layout/social-info/social-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/social-info/social-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SocialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRoutingModule", function() { return SocialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _social_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-info.component */ "./src/app/layout/social-info/social-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _social_info_component__WEBPACK_IMPORTED_MODULE_2__["SocialInfoComponent"]
    }
];
var SocialRoutingModule = /** @class */ (function () {
    function SocialRoutingModule() {
    }
    SocialRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SocialRoutingModule);
    return SocialRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/social-info/social.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/social-info/social.module.ts ***!
  \*****************************************************/
/*! exports provided: SocialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialModule", function() { return SocialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _social_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-routing.module */ "./src/app/layout/social-info/social-routing.module.ts");
/* harmony import */ var _social_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-info.component */ "./src/app/layout/social-info/social-info.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SocialModule = /** @class */ (function () {
    function SocialModule() {
    }
    SocialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _social_routing_module__WEBPACK_IMPORTED_MODULE_2__["SocialRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_social_info_component__WEBPACK_IMPORTED_MODULE_3__["SocialInfoComponent"]]
        })
    ], SocialModule);
    return SocialModule;
}());



/***/ })

}]);
//# sourceMappingURL=social-info-social-module.js.map