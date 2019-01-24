(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-info-social-module"],{

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
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
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





var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _social_routing_module__WEBPACK_IMPORTED_MODULE_2__["SocialRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_social_info_component__WEBPACK_IMPORTED_MODULE_3__["SocialInfoComponent"]]
        })
    ], FormModule);
    return FormModule;
}());



/***/ })

}]);
//# sourceMappingURL=social-info-social-module.js.map