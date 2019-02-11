(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-info-social-module"],{

/***/ "./src/app/layout/social-info/social-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/social-info/social-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Social Information</h1>\r\n\r\n<div class=\"jumbotron\">\r\n    <form [formGroup]=\"page3Form\" (ngSubmit)='onSubmit()'>\r\n\r\n\r\n        <label for=\"numberOfHousehold\">Number of Household: </label>\r\n        <input type=\"number\" class=\" form-control \" id=\"NOH\" formControlName=\"numberOfHousehold\">\r\n        <span *ngIf=\"!page3Form.get('numberOfHousehold').valid && page3Form.get('numberOfHousehold').touched\">\r\n    <span *ngIf=\"page3Form.get('numberOfHousehold').valid\">Only Numbers Allowed.</span>\r\n        <span *ngIf=\"page3Form.get('numberOfHousehold').touched\">Please Enter Valid Number</span>\r\n        </span>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"womenInHousehold\">Women In Household:</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"womenInHousehold\" formControlName=\"womenInHousehold\">\r\n            <span *ngIf=\"!page3Form.get('womenInHousehold').valid && page3Form.get('womenInHousehold').touched\">\r\n      <span *ngIf=\"page3Form.get('womenInHousehold').valid\">Only Numbers Allowed.</span>\r\n            <span *ngIf=\"page3Form.get('womenInHousehold').touched\">Please Enter Valid Number</span>\r\n            </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"YOS\">Year Of Survey:</label>\r\n\r\n            <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\r\n        <option selected>Choose..</option>\r\n        <option value=\"1\">2016</option>\r\n        <option value=\"2\">2015</option>\r\n        <option value=\"3\">2014</option>\r\n      </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"M\">Male:</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"M\" formControlName=\"male\">\r\n            <span *ngIf=\"!page3Form.get('male').valid && page3Form.get('male').touched\">\r\n        <span *ngIf=\"page3Form.get('male').valid\">Only Numbers Allowed.</span>\r\n            <span *ngIf=\"page3Form.get('male').touched\">Please Enter Valid Number</span>\r\n            </span>\r\n            <div class=\"form-group\">\r\n                <label for=\"F\">Female:</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"F\" formControlName=\"female\">\r\n                <span *ngIf=\"!page3Form.get('female').valid && page3Form.get('female').touched\">\r\n          <span *ngIf=\"page3Form.get('female').valid\">Only Numbers Allowed.</span>\r\n                <span *ngIf=\"page3Form.get('female').touched\">Please Enter Valid Number</span>\r\n                </span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"totalPopulation\">Total Population:</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"totalPopulation\" formControlName=\"totalPopulation\">\r\n                <span *ngIf=\"!page3Form.get('totalPopulation').valid && page3Form.get('totalPopulation').touched\">\r\n        <span *ngIf=\"page3Form.get('totalPopulation').valid\">Only Numbers Allowed.</span>\r\n                <span *ngIf=\"page3Form.get('totalPopulation').touched\">Please Enter Valid Number</span>\r\n                </span>\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n                <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Major Source Of Income</label>\r\n                <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\r\n      <option selected>Choose...</option>\r\n      <option value=\"1\">Business</option>\r\n      <option value=\"2\">Agriculture</option>\r\n      <option value=\"3\">Office</option>\r\n    </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"annualIncomePerFamily\">Annual Income Per Family:</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"annualIncomePerFamily\" formControlName=\"annualIncomePerFamily\">\r\n                <span *ngIf=\"!page3Form.get('annualIncomePerFamily').valid && page3Form.get('annualIncomePerFamily').touched\">\r\n      <span *ngIf=\"page3Form.get('annualIncomePerFamily').valid\">Only Numbers Allowed.</span>\r\n                <span *ngIf=\"page3Form.get('annualIncomePerFamily').touched\">Please Enter Valid Number</span>\r\n                </span>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"fromAgriculture\">From Agriculture:</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"fromAgriculture\" formControlName=\"fromAgriculture\">\r\n                    <span *ngIf=\"!page3Form.get('fromAgriculture').valid && page3Form.get('fromAgriculture').touched\">\r\n      <span *ngIf=\"page3Form.get('fromAgriculture').valid\">Only Numbers Allowed.</span>\r\n                    <span *ngIf=\"page3Form.get('fromAgriculture').touched\">Please Enter Valid Number</span>\r\n                    </span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"fromOtherSource\">From Other Source:</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"fromOtherSource\" formControlName=\"fromOtherSource\">\r\n                    <span *ngIf=\"!page3Form.get('fromOtherSource').valid && page3Form.get('fromOtherSource').touched\">\r\n      <span *ngIf=\"page3Form.get('fromOtherSource').valid\">Only Numbers Allowed.</span>\r\n                    <span *ngIf=\"page3Form.get('fromOtherSource').touched\">Please Enter Valid Number</span>\r\n                    </span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"literacyRate\">Literacy Rate:</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"literacyRate\" formControlName=\"literacyRate\">\r\n                    <span *ngIf=\"!page3Form.get('literacyRate').valid && page3Form.get('literacyRate').touched\">\r\n    <span *ngIf=\"page3Form.get('literacyRate').valid\">Only Numbers Allowed.</span>\r\n                    <span *ngIf=\"page3Form.get('literacyRate').touched\">Please Enter Valid Number</span>\r\n                    </span>\r\n\r\n                    <!-- <div class=\"form-group\">\r\n                        <label for=\"M\">Male:</label>\r\n                        <input type=\"number\" class=\"form-control\" id=\"M\" formControlName=\"M\">\r\n                        <span *ngIf=\"!page3Form.get('male').valid && page3Form.get('male').touched\">\r\n    <span *ngIf=\"page3Form.get('male').valid\">Only Numbers Allowed.</span>\r\n                        <span *ngIf=\"page3Form.get('male').touched\">Please Enter Valid Number</span>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"F\">Female:</label>\r\n                        <input type=\"number\" class=\"form-control\" id=\"F\" formControlName=\"F\">\r\n                        <span *ngIf=\"!page3Form.get('F').valid && page3Form.get('F').touched\">\r\n    <span *ngIf=\"page3Form.get('F').valid\">Only Numbers Allowed.</span>\r\n                        <span *ngIf=\"page3Form.get('F').touched\">Please Enter Valid Number</span>\r\n                        </span>\r\n                    </div> -->\r\n\r\n                    <br>\r\n                    <label for=\"EG\">Ethnic Groups:</label>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col\"></div>\r\n                        <div class=\"col\">Name</div>\r\n                        <div class=\"col\">Total No</div>\r\n                        <div class=\"col\">Percentage</div>\r\n\r\n                        <div class=\"w-100\"></div>\r\n                        <div class=\"col\">1</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"w-100\"></div>\r\n                        <div class=\"col\">2</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"w-100\"></div>\r\n                        <div class=\"col\">3</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"w-100\"></div>\r\n                        <div class=\"col\">4</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n                    </div>\r\n                    <br>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"populationMigrationIn\">Annual Population Migration In:</label>\r\n                        <input type=\"number\" class=\"form-control\" id=\"populationMigrationIn\" formControlName=\"populationMigrationIn\">\r\n\r\n                        <span *ngIf=\"!page3Form.get('populationMigrationIn').valid && page3Form.get('populationMigrationIn').touched\">\r\n      <span *ngIf=\"page3Form.get('populationMigrationIn').valid\">Only Numbers Allowed.</span>\r\n                        <span *ngIf=\"page3Form.get('populationMigrationIn').touched\">Please Enter Valid Number</span>\r\n                        </span>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"populationMigrationOut\">Annual Population Migration Out:</label>\r\n                            <input type=\"number\" class=\"form-control\" id=\"populationMigrationOut\" formControlName=\"populationMigrationOut\">\r\n\r\n                            <span *ngIf=\"!page3Form.get('populationMigrationOut').valid && page3Form.get('populationMigrationOut').touched\">\r\n      <span *ngIf=\"page3Form.get('populationMigrationOut').valid\">Only Numbers Allowed.</span>\r\n                            <span *ngIf=\"page3Form.get('populationMigrationOut').touched\">Please Enter Valid Number</span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <br>\r\n\r\n                    <label for=\"LT\">Land Tenture (Household Nos):</label>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col\"></div>\r\n                        <div class=\"col\">Category</div>\r\n                        <div class=\"col\">Number</div>\r\n                        <div class=\"col\">Percentage</div>\r\n\r\n                        <div class=\"w-100\"></div>\r\n                        <div class=\"col\">1</div>\r\n                        <div class=\"col\">Land Owners</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n\r\n\r\n\r\n                        <div class=\"w-100\"></div>\r\n                        <div class=\"col\">2</div>\r\n                        <div class=\"col\">Tenants</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n\r\n                        <div class=\"w-100\"></div>\r\n                        <div class=\"col\">3</div>\r\n                        <div class=\"col\">Owner with Tenents</div>\r\n                        <div class=\"col\">Column</div>\r\n\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"w-100\"></div>\r\n                        <div class=\"col\">4</div>\r\n\r\n                        <div class=\"col\">Total</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n\r\n                    </div>\r\n                    <br>\r\n                    <label for=\"FS\">Farm Size(Household Nos):</label>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col\"></div>\r\n                        <div class=\"col\">Category</div>\r\n                        <div class=\"col\">Number</div>\r\n                        <div class=\"col\">Percentage</div>\r\n\r\n                        <div class=\"w-100\"></div>\r\n                        <div class=\"col\">1</div>\r\n                        <div class=\"col\">Small(less than 0.5 hector)</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n\r\n\r\n\r\n                        <div class=\"w-100\"></div>\r\n                        <div class=\"col\">2</div>\r\n                        <div class=\"col\">Medium(0.5-1.0 hector)</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n\r\n                        <div class=\"w-100\"></div>\r\n                        <div class=\"col\">3</div>\r\n                        <div class=\"col\">Large(1.0-1.5 hector)</div>\r\n                        <div class=\"col\">Column</div>\r\n\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"w-100\"></div>\r\n                        <div class=\"col\">4</div>\r\n\r\n                        <div class=\"col\">Huge(more than 1.5 hector)</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n\r\n                        <div class=\"w-100\"></div>\r\n                        <div class=\"col\">5</div>\r\n\r\n                        <div class=\"col\">Total</div>\r\n                        <div class=\"col\">Column</div>\r\n                        <div class=\"col\">Column</div>\r\n\r\n                    </div>\r\n\r\n                    <br>\r\n\r\n                    <label for=\"AFS\">Annual Food Sufficiency:</label>\r\n\r\n                    <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" checked>Surplus</label>\r\n                    <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\">Deflect</label>\r\n\r\n\r\n                    <button type=\"Submit\" class=\"btn btn-outline-success mr-2\">Submit</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-success mr-2\" (click)=\"onEditData()\">Edit</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"onSaveData()\">save</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"onFetch()\">Fetch</button>"

/***/ }),

/***/ "./src/app/layout/social-info/social-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/social-info/social-info.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 30px; }\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NvY2lhbC1pbmZvL0Y6XFxHTUlTL3NyY1xcYXBwXFxsYXlvdXRcXHNvY2lhbC1pbmZvXFxzb2NpYWwtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NvY2lhbC1pbmZvL3NvY2lhbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH1cclxuICAiXX0= */"

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
/* harmony import */ var _social_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social.service */ "./src/app/layout/social-info/social.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-storage.service */ "./src/app/layout/social-info/data-storage.service.ts");
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
    function SocialInfoComponent(socialService, dataStorageService) {
        this.socialService = socialService;
        this.dataStorageService = dataStorageService;
        this.aipf = 0;
        this.fml = 0;
        this.mle = 0;
        this.totpop = 0;
        this.fag = 0;
        this.fOs = 0;
        this.lr = 0;
        this.popMin = 0;
        this.popMout = 0;
        this.numhh = 0;
        this.wihh = 0;
    }
    SocialInfoComponent.prototype.onSubmit = function () {
        this.socialService.addSocial(this.page3Form.value);
    };
    SocialInfoComponent.prototype.onSaveData = function () {
        this.dataStorageService.storeSocial().subscribe(function (response) {
            console.log(response);
        });
    };
    SocialInfoComponent.prototype.onFetch = function () {
        console.log(this.dataStorageService.getSocial());
    };
    SocialInfoComponent.prototype.onEditData = function () {
        var socialInfo = this.socialService.getSocialInfo();
        this.page3Form.setValue(socialInfo);
    };
    SocialInfoComponent.prototype.ngOnInit = function () {
        console.log(this.dataStorageService.getSocial());
        // tslint:disable-next-line:prefer-const
        this.page3Form =
            new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'numberOfHousehold': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.numhh, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'male': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.mle, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'female': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.fml, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'totalPopulation': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.totpop, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'annualIncomePerFamily': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.aipf, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'fromAgriculture': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.fag, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'fromOtherSource': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.fOs, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'literacyRate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.lr, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'populationMigrationIn': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.popMin, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'populationMigrationOut': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.popMout, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)]),
                'womenInHousehold': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.wihh, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
            });
    };
    SocialInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-social-info',
            template: __webpack_require__(/*! ./social-info.component.html */ "./src/app/layout/social-info/social-info.component.html"),
            styles: [__webpack_require__(/*! ./social-info.component.scss */ "./src/app/layout/social-info/social-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_social_service__WEBPACK_IMPORTED_MODULE_0__["SocialService"], _data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]])
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
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _social_routing_module__WEBPACK_IMPORTED_MODULE_2__["SocialRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            declarations: [_social_info_component__WEBPACK_IMPORTED_MODULE_3__["SocialInfoComponent"]]
        })
    ], SocialModule);
    return SocialModule;
}());



/***/ })

}]);
//# sourceMappingURL=social-info-social-module.js.map