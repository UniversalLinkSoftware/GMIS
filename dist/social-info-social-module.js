(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-info-social-module"],{

/***/ "./src/app/layout/social-info/social-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/social-info/social-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Social Information</h1>\r\n\r\n<div class=\"jumbotron\">\r\n  <form [formGroup]=\"page3Form\" >\r\n   \r\n\r\n  <label for=\"NOH\"  >Number of Household: </label>\r\n  <input type=\"number\" class=\" form-control \" id=\"NOH\"  formControlName=\"NOH\"> \r\n  <span *ngIf=\"!page3Form.get('NOH').valid && page3Form.get('NOH').touched\">\r\n    <span *ngIf=\"page3Form.get('NOH').valid\">Only Numbers Allowed.</span>\r\n    <span *ngIf=\"page3Form.get('NOH').touched\">Please Enter Valid Number</span>\r\n  </span>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"WIH\">Women In Household:</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"WIH\" formControlName=\"WIH\">\r\n    <span *ngIf=\"!page3Form.get('WIH').valid && page3Form.get('WIH').touched\">\r\n      <span *ngIf=\"page3Form.get('WIH').valid\">Only Numbers Allowed.</span>\r\n      <span *ngIf=\"page3Form.get('WIH').touched\">Please Enter Valid Number</span>\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"YOS\">Year Of Survey:</label>\r\n    \r\n      <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\r\n        <option selected>Choose..</option>\r\n        <option value=\"1\">2016</option>\r\n        <option value=\"2\">2015</option>\r\n        <option value=\"3\">2014</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"M\">Male:</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"M\" formControlName=\"M\">\r\n      <span *ngIf=\"!page3Form.get('M').valid && page3Form.get('M').touched\">\r\n        <span *ngIf=\"page3Form.get('M').valid\">Only Numbers Allowed.</span>\r\n        <span *ngIf=\"page3Form.get('M').touched\">Please Enter Valid Number</span>\r\n      </span>\r\n      <div class=\"form-group\">\r\n        <label for=\"F\">Female:</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"F\" formControlName=\"F\">\r\n        <span *ngIf=\"!page3Form.get('F').valid && page3Form.get('F').touched\">\r\n          <span *ngIf=\"page3Form.get('F').valid\">Only Numbers Allowed.</span>\r\n          <span *ngIf=\"page3Form.get('F').touched\">Please Enter Valid Number</span>\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"TP\">Total Population:</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"TP\" formControlName=\"TP\">\r\n      <span *ngIf=\"!page3Form.get('TP').valid && page3Form.get('TP').touched\">\r\n        <span *ngIf=\"page3Form.get('TP').valid\">Only Numbers Allowed.</span>\r\n        <span *ngIf=\"page3Form.get('TP').touched\">Please Enter Valid Number</span>\r\n      </span>\r\n  </div>\r\n  <div class=\"form-group col-md-4\">\r\n    <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Major Source Of Income</label>\r\n    <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\r\n      <option selected>Choose...</option>\r\n      <option value=\"1\">Business</option>\r\n      <option value=\"2\">Agriculture</option>\r\n      <option value=\"3\">Office</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"AIPF\">Annual Income Per Family:</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"AIPF\" formControlName=\"AIPF\">\r\n    <span *ngIf=\"!page3Form.get('AIPF').valid && page3Form.get('AIPF').touched\">\r\n      <span *ngIf=\"page3Form.get('AIPF').valid\">Only Numbers Allowed.</span>\r\n      <span *ngIf=\"page3Form.get('AIPF').touched\">Please Enter Valid Number</span>\r\n    </span>\r\n    \r\n<div class=\"form-group\">\r\n    <label for=\"FA\">From Agriculture:</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"FA\" formControlName=\"FA\">\r\n    <span *ngIf=\"!page3Form.get('FA').valid && page3Form.get('FA').touched\">\r\n      <span *ngIf=\"page3Form.get('FA').valid\">Only Numbers Allowed.</span>\r\n      <span *ngIf=\"page3Form.get('FA').touched\">Please Enter Valid Number</span>\r\n    </span>\r\n</div>\r\n<div class=\"form-group\">\r\n    <label for=\"FOS\">From Other Source:</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"FOS\" formControlName=\"FOS\">\r\n    <span *ngIf=\"!page3Form.get('FOS').valid && page3Form.get('FOS').touched\">\r\n      <span *ngIf=\"page3Form.get('FOS').valid\">Only Numbers Allowed.</span>\r\n      <span *ngIf=\"page3Form.get('FOS').touched\">Please Enter Valid Number</span>\r\n    </span>\r\n</div>\r\n<div class=\"form-group\">\r\n  <label for=\"LR\">Literacy Rate:</label>\r\n  <input type=\"number\" class=\"form-control\" id=\"LR\" formControlName=\"LR\">\r\n  <span *ngIf=\"!page3Form.get('LR').valid && page3Form.get('LR').touched\">\r\n    <span *ngIf=\"page3Form.get('LR').valid\">Only Numbers Allowed.</span>\r\n    <span *ngIf=\"page3Form.get('LR').touched\">Please Enter Valid Number</span>\r\n  </span>\r\n\r\n<div class=\"form-group\">\r\n  <label for=\"M\">Male:</label>\r\n  <input type=\"number\" class=\"form-control\" id=\"M\" formControlName=\"M\">\r\n  <span *ngIf=\"!page3Form.get('M').valid && page3Form.get('M').touched\">\r\n    <span *ngIf=\"page3Form.get('M').valid\">Only Numbers Allowed.</span>\r\n    <span *ngIf=\"page3Form.get('M').touched\">Please Enter Valid Number</span>\r\n  </span>\r\n</div>\r\n<div class=\"form-group\">\r\n  <label for=\"F\">Female:</label>\r\n  <input type=\"number\" class=\"form-control\" id=\"F\" formControlName=\"F\">\r\n  <span *ngIf=\"!page3Form.get('F').valid && page3Form.get('F').touched\">\r\n    <span *ngIf=\"page3Form.get('F').valid\">Only Numbers Allowed.</span>\r\n    <span *ngIf=\"page3Form.get('F').touched\">Please Enter Valid Number</span>\r\n  </span>\r\n</div>\r\n\r\n<br>\r\n<label for=\"EG\">Ethnic Groups:</label>\r\n\r\n<div class=\"row\">\r\n<div class=\"col\"></div>\r\n<div class=\"col\">Name</div>\r\n<div class=\"col\">Total No</div>\r\n<div class=\"col\">Percentage</div>\r\n\r\n<div class=\"w-100\"></div>\r\n<div class=\"col\">1</div>\r\n<div class=\"col\">Column</div>\r\n<div class=\"col\">Column</div>\r\n<div class=\"col\">Column</div>\r\n<div class=\"w-100\"></div>\r\n<div class=\"col\">2</div>\r\n<div class=\"col\">Column</div>\r\n<div class=\"col\">Column</div>\r\n<div class=\"col\">Column</div>\r\n<div class=\"w-100\"></div>\r\n<div class=\"col\">3</div>\r\n<div class=\"col\">Column</div>\r\n<div class=\"col\">Column</div>\r\n<div class=\"col\">Column</div>\r\n<div class=\"w-100\"></div>\r\n<div class=\"col\">4</div>\r\n<div class=\"col\">Column</div>\r\n<div class=\"col\">Column</div>\r\n<div class=\"col\">Column</div>\r\n</div>\r\n<br>\r\n\r\n<div class=\"form-group\">\r\n    <label for=\"APMIn\">Annual Population Migration In:</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"APMIn\" formControlName=\"APMIn\">\r\n    \r\n  <span *ngIf=\"!page3Form.get('APMIn').valid && page3Form.get('APMIn').touched\">\r\n      <span *ngIf=\"page3Form.get('APMIn').valid\">Only Numbers Allowed.</span>\r\n      <span *ngIf=\"page3Form.get('APMIn').touched\">Please Enter Valid Number</span>\r\n    </span>\r\n\r\n<div class=\"form-group\">\r\n    <label for=\"APMOut\">Annual Population Migration Out:</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"APMOut\" formControlName=\"APMOut\">\r\n    \r\n  <span *ngIf=\"!page3Form.get('APMOut').valid && page3Form.get('APMOut').touched\">\r\n      <span *ngIf=\"page3Form.get('APMOut').valid\">Only Numbers Allowed.</span>\r\n      <span *ngIf=\"page3Form.get('APMOut').touched\">Please Enter Valid Number</span>\r\n    </span>\r\n</div>\r\n</div>\r\n\r\n<br>\r\n\r\n<label for=\"LT\">Land Tenture (Household Nos):</label>\r\n\r\n<div class=\"row\">\r\n<div class=\"col\"></div>\r\n<div class=\"col\">Category</div>\r\n<div class=\"col\">Number</div>\r\n<div class=\"col\">Percentage</div>\r\n\r\n<div class=\"w-100\"></div>\r\n<div class=\"col\">1</div>\r\n<div class=\"col\">Land Owners</div>\r\n<div class=\"col\">Column</div>\r\n<div class=\"col\">Column</div>\r\n\r\n\r\n\r\n<div class=\"w-100\"></div>\r\n<div class=\"col\">2</div>\r\n<div class=\"col\">Tenants</div>\r\n<div class=\"col\">Column</div>\r\n<div class=\"col\">Column</div>\r\n\r\n<div class=\"w-100\"></div>\r\n<div class=\"col\">3</div>\r\n<div class=\"col\">Owner with Tenents</div>\r\n<div class=\"col\">Column</div>\r\n\r\n<div class=\"col\">Column</div>\r\n<div class=\"w-100\"></div>\r\n<div class=\"col\">4</div>\r\n\r\n<div class=\"col\">Total</div>\r\n<div class=\"col\">Column</div>\r\n<div class=\"col\">Column</div>\r\n\r\n</div>\r\n<br>\r\n<label for=\"FS\">Farm Size(Household Nos):</label>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col\">Category</div>\r\n    <div class=\"col\">Number</div>\r\n    <div class=\"col\">Percentage</div>\r\n    \r\n    <div class=\"w-100\"></div>\r\n    <div class=\"col\">1</div>\r\n    <div class=\"col\">Small(less than 0.5 hector)</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    \r\n    \r\n    \r\n    <div class=\"w-100\"></div>\r\n    <div class=\"col\">2</div>\r\n    <div class=\"col\">Medium(0.5-1.0 hector)</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    \r\n    <div class=\"w-100\"></div>\r\n    <div class=\"col\">3</div>\r\n    <div class=\"col\">Large(1.0-1.5 hector)</div>\r\n    <div class=\"col\">Column</div>\r\n    \r\n    <div class=\"col\">Column</div>\r\n    <div class=\"w-100\"></div>\r\n    <div class=\"col\">4</div>\r\n    \r\n    <div class=\"col\">Huge(more than 1.5 hector)</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    \r\n    <div class=\"w-100\"></div>\r\n    <div class=\"col\">5</div>\r\n    \r\n    <div class=\"col\">Total</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    \r\n    </div>\r\n    <br>\r\n\r\n    <label for=\"AFS\">Annual Food Sufficiency:</label>\r\n            \r\n            <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" checked>Surplus</label>\r\n            <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\">Deflect</label>\r\n            \r\n            \r\n            <button type=\"Submit\" class=\"btn btn-outline-success mr-2\">Submit</button>  \r\n            <button type=\"Reset\" class=\"btn btn-outline-warning\">Reset</button> \r\n\r\n    "

/***/ }),

/***/ "./src/app/layout/social-info/social-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/social-info/social-info.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\n  border: 1px solid red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NvY2lhbC1pbmZvL0Y6XFxwcm9qZWN0MTFcXEdNSVMvc3JjXFxhcHBcXGxheW91dFxcc29jaWFsLWluZm9cXHNvY2lhbC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc29jaWFsLWluZm8vc29jaWFsLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SocialInfoComponent = /** @class */ (function () {
    function SocialInfoComponent() {
    }
    SocialInfoComponent.prototype.ngOnInit = function () {
        this.page3Form =
            new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'NOH': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'M': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'F': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'TP': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'AIPF': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'FA': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'FOS': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'LR': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'APMIn': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'APMOut': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'WIH': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
            });
    };
    SocialInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-info',
            template: __webpack_require__(/*! ./social-info.component.html */ "./src/app/layout/social-info/social-info.component.html"),
            styles: [__webpack_require__(/*! ./social-info.component.scss */ "./src/app/layout/social-info/social-info.component.scss")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _social_routing_module__WEBPACK_IMPORTED_MODULE_2__["SocialRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_social_info_component__WEBPACK_IMPORTED_MODULE_3__["SocialInfoComponent"]]
        })
    ], SocialModule);
    return SocialModule;
}());



/***/ })

}]);
//# sourceMappingURL=social-info-social-module.js.map