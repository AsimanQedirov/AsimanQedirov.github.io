(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"header container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-4 col-sm-12 col-xs-12 py-sm-2 d-flex align-items-center justify-content-center\">\n      <button mat-button class=\"home\" [routerLink]=\"'/'\">HOME</button>\n      <button mat-button class=\"home ml-3\" [routerLink]=\"'/heroelists'\">HOROES LIST</button>\n    </div>\n    <div\n      class=\"col-lg-3 col-md-4 col-sm-12 col-xs-12 offset-lg-6 offset-md-4 d-flex align-items-center justify-content-center\">\n      <mat-form-field>\n        <mat-label>Look for hero!</mat-label>\n        <mat-select>\n          <mat-option *ngFor=\"let food of searchheroes\" [value]=\"food\">\n            {{food}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <a mat-icon-button [matMenuTriggerFor]=\"beforeMenu\"><mat-icon class=\"mat-icons\">language</mat-icon></a>\n      <mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\n        <button mat-menu-item> <mat-icon>flag</mat-icon> English</button>\n        <button mat-menu-item> <mat-icon>flag</mat-icon> Espanol</button>\n      </mat-menu>\n      <a href=\"\"><img src=\"../assets/github.svg\" alt=\"\"></a>\n    </div>\n  </div>\n  <mat-progress-bar mode=\"determinate\" value=\"0\"></mat-progress-bar>\n</div>\n<router-outlet></router-outlet>\n<footer>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 col-sm-12 d-flex align-items-center text-center\">\n        <p>Angular Example App 2019</p>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-12 d-flex align-items-center text-center\">\n        <p>{{date | date: 'fullDate'}} {{date | date : 'shortTime'}}</p>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-12 justify-content-end d-flex align-items-center\">\n        <a href=\"https://angular.io\" target=\"blank\"><img src=\"../assets/angular.svg\" class=\"img-fluid\" alt=\"\"></a>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer; }\n\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n\n.header {\n  background: #3f51b5;\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  padding: 0px !important; }\n\n.header .row {\n    margin: 0px !important; }\n\n.header .home {\n    color: #3f51b5;\n    background: white;\n    font-size: 14px;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.header .home:focus {\n    outline: none; }\n\n.header mat-label {\n    color: white; }\n\n.header a {\n    text-decoration: none; }\n\n.header a .mat-icons {\n      color: white;\n      margin: 0px 6px; }\n\n.header a img {\n      margin-bottom: 1px; }\n\n.mat-select-value, .mat-select-arrow {\n  color: #fff !important; }\n\n.mat-form-field-infix {\n  border-bottom: 2px solid white !important; }\n\n.mat-focused .mat-form-field-underline .mat-form-field-ripple {\n  background: none; }\n\nbutton {\n  outline: none !important; }\n\n.mat-menu-item {\n  color: white; }\n\n.mat-menu-item .mat-icon-no-color {\n    color: white; }\n\n.mat-menu-panel {\n  background-color: #3f51b5 !important;\n  color: white; }\n\n.mat-select-arrow {\n  display: none !important; }\n\n.mat-select-arrow .mat-select-arrow-wrapper {\n    border: 0px !important; }\n\nfooter {\n  background-color: #3f51b5; }\n\nfooter p {\n    color: white;\n    font-size: 17px;\n    font-weight: 500; }\n\nfooter img {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhc2ltYW5cXERlc2t0b3BcXGhlcm9zbGlzdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLG1CQVJtQjtFQVNuQixlQUFlO0VBQ2YsYUFBYTtFQUNiLE1BQU07RUFDTix1QkFBdUIsRUFBQTs7QUFMM0I7SUFPSSxzQkFBc0IsRUFBQTs7QUFQMUI7SUFVWSxjQWpCVztJQWtCWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLCtHQUFtRyxFQUFBOztBQWIvRztJQWdCWSxhQUFhLEVBQUE7O0FBaEJ6QjtJQW1CWSxZQUFZLEVBQUE7O0FBbkJ4QjtJQXNCWSxxQkFBcUIsRUFBQTs7QUF0QmpDO01Bd0JnQixZQUFZO01BQ1osZUFBZSxFQUFBOztBQXpCL0I7TUE0QmdCLGtCQUFrQixFQUFBOztBQUtsQztFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHlDQUF5QyxFQUFBOztBQUc3QztFQUNLLGdCQUFnQixFQUFBOztBQUVyQjtFQUNJLHdCQUF3QixFQUFBOztBQUU1QjtFQUNJLFlBQVcsRUFBQTs7QUFEZjtJQUdRLFlBQVksRUFBQTs7QUFHcEI7RUFDSSxvQ0FBMEM7RUFDMUMsWUFBWSxFQUFBOztBQUVoQjtFQUNJLHdCQUF3QixFQUFBOztBQUQ1QjtJQUdRLHNCQUFzQixFQUFBOztBQUs5QjtFQUNJLHlCQXpFbUIsRUFBQTs7QUF3RXZCO0lBR1EsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTs7QUFMeEI7SUFRUSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc3BlY2lhbENvbG9yIDogIzNmNTFiNTtcclxuYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogJHNwZWNpYWxDb2xvcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgLnJvd3tcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgICAgICAuaG9tZXtcclxuICAgICAgICAgICAgY29sb3I6ICRzcGVjaWFsQ29sb3I7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhvbWU6Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1sYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIC5tYXQtaWNvbnN7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbn1cclxuLm1hdC1zZWxlY3QtdmFsdWUsIC5tYXQtc2VsZWN0LWFycm93e1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLWluZml4e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7XHJcbiAgICAgYmFja2dyb3VuZDogbm9uZTsgXHJcbn1cclxuYnV0dG9ue1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtbWVudS1pdGVte1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICAubWF0LWljb24tbm8tY29sb3J7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbi5tYXQtbWVudS1wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbENvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlcntcclxuICAgICAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWxDb2xvcjtcclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _heroes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heroes.service */ "./src/app/heroes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(service, router) {
        this.service = service;
        this.router = router;
        this.searchheroes = [];
        this.date = new Date();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.ngOnInit().forEach(function (element) {
            _this.searchheroes.push(element.palindrome);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_heroes_service__WEBPACK_IMPORTED_MODULE_2__["HeroesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _home_detail_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/detail/detail.component */ "./src/app/home/detail/detail.component.ts");
/* harmony import */ var _heroelists_heroelists_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./heroelists/heroelists.component */ "./src/app/heroelists/heroelists.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


















var appRoutes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
    },
    {
        path: 'detail',
        component: _home_detail_detail_component__WEBPACK_IMPORTED_MODULE_15__["DetailComponent"]
    },
    {
        path: 'heroelists',
        component: _heroelists_heroelists_component__WEBPACK_IMPORTED_MODULE_16__["HeroelistsComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _home_detail_detail_component__WEBPACK_IMPORTED_MODULE_15__["DetailComponent"],
                _heroelists_heroelists_component__WEBPACK_IMPORTED_MODULE_16__["HeroelistsComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/heroelists/heroelists.component.html":
/*!******************************************************!*\
  !*** ./src/app/heroelists/heroelists.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n      <h4>Heroes list</h4>\n      <mat-card *ngFor=\"let hero of heroelists\">\n        <mat-card-header>\n          <a mat-card-avatar><img mat-card-avatar [src]=\"hero.avatar\" alt=\"\"></a>\n          <mat-card-title><a>{{hero.palindrome}}</a></mat-card-title>\n          <mat-card-subtitle><a>{{hero.name}}</a></mat-card-subtitle>\n          <div class=\"flex-spacer\"></div>\n\n          <span>{{hero.likes}}</span>\n          <button mat-icon-button>\n            <mat-icon class=\"mat-icon-heart\">favorite</mat-icon>\n          </button>\n        </mat-card-header>\n      </mat-card>\n      <mat-card>\n        <mat-card-header *ngFor=\"let def of defaultheroe\">\n          <a mat-card-avatar><img mat-card-avatar src=\"../../assets/heros-file/default-hero.png\" alt=\"\"></a>\n          <mat-card-title><a>{{def.name}}</a></mat-card-title>\n          <mat-card-subtitle>{{def.palindrome}}</mat-card-subtitle>\n          <div class=\"flex-spacer\"></div>\n          <span>{{def.likes}}</span>\n          <button mat-icon-button>\n            <mat-icon class=\"mat-icon-heart\">favorite</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"deleteItem(f)\" #f [id]=\"def.id\">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </mat-card-header>\n      </mat-card>\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n      <h4>Create a hero</h4>\n      <form class=\"example-form\" [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n        <div>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Name (Palindrome?)\" formControlName=\"textFormControl\"\n              [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              Name (Palindrome) is empty\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Name\" formControlName=\"nameFormControl\">\n            <mat-error>\n              Name is Empty\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"text-center\">\n          <button mat-raised-button type=\"submit\" [disabled]=\"\">Create</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/heroelists/heroelists.component.scss":
/*!******************************************************!*\
  !*** ./src/app/heroelists/heroelists.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  padding-top: 100px; }\n\n@media only screen and (max-width: 480px) {\n  mat-card {\n    width: 100% !important; } }\n\nmat-card {\n  width: 60%;\n  margin: 5px auto; }\n\nh4 {\n  font-size: 30px;\n  font-weight: 400;\n  margin: 40px 0px;\n  text-align: center; }\n\n.mat-card:not([class*=mat-elevation-z]) {\n  padding: 0px;\n  box-shadow: none; }\n\np {\n  margin-top: 30px;\n  font-size: 25px;\n  text-align: center;\n  font-weight: 400; }\n\na {\n  color: rgba(0, 0, 0, 0.54);\n  cursor: pointer; }\n\nimg {\n  cursor: pointer; }\n\na:hover {\n  color: rgba(0, 0, 0, 0.54);\n  text-decoration: none; }\n\n.mat-card-title {\n  font-size: 16px; }\n\n.mat-card-subtitle {\n  margin-top: 0px;\n  font-size: 12px; }\n\n.flex-spacer {\n  flex-grow: 1; }\n\nbutton:focus {\n  outline: none; }\n\n.mat-icon-heart {\n  color: #dc143c; }\n\nspan {\n  margin-top: 10px; }\n\n.example-full-width {\n  width: 100%; }\n\n.mat-raised-button {\n  color: white;\n  background: #3f51b5;\n  padding: 0px 50px;\n  margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb2VsaXN0cy9DOlxcVXNlcnNcXGFzaW1hblxcRGVza3RvcFxcaGVyb3NsaXN0L3NyY1xcYXBwXFxoZXJvZWxpc3RzXFxoZXJvZWxpc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0k7SUFDSSxzQkFBc0IsRUFBQSxFQUN6Qjs7QUFFTDtFQUNJLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxlQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksMEJBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksMEJBQXFCO0VBQ3JCLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVuQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQTs7QUFFYjtFQUNJLFlBQVk7RUFFWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVyb2VsaXN0cy9oZXJvZWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5yb3d7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgbWF0LWNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbm1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxuaDR7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDQwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbnB7ICBcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNTQpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmltZ3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5hOmhvdmVye1xyXG4gICAgY29sb3I6cmdiYSgwLDAsMCwuNTQpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5tYXQtY2FyZC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubWF0LWNhcmQtc3VidGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmZsZXgtc3BhY2Vye1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcbmJ1dHRvbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLm1hdC1pY29uLWhlYXJ0e1xyXG4gICAgY29sb3I6ICNkYzE0M2M7XHJcbn1cclxuc3BhbntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm1hdC1yYWlzZWQtYnV0dG9ue1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xyXG4gICAgICBwYWRkaW5nOiAwcHggNTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/heroelists/heroelists.component.ts":
/*!****************************************************!*\
  !*** ./src/app/heroelists/heroelists.component.ts ***!
  \****************************************************/
/*! exports provided: MyErrorStateMatcher, HeroelistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroelistsComponent", function() { return HeroelistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _heroes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../heroes.service */ "./src/app/heroes.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var HeroelistsComponent = /** @class */ (function () {
    function HeroelistsComponent(service) {
        this.service = service;
        this.defaultheroe = [];
        this.matcher = new MyErrorStateMatcher();
    }
    HeroelistsComponent.prototype.ngOnInit = function () {
        this.heroelists = this.service.ngOnInit();
        //  console.log(this.heroelists);
        //  this.service.ngOnInit();
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'textFormControl': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'nameFormControl': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    HeroelistsComponent.prototype.onSubmit = function () {
        console.log(this.service.ngOnInit());
        if (this.signupForm.value.textFormControl !== '' && this.signupForm.value.nameFormControl) {
            this.defaultheroe.push({
                id: this.service.ngOnInit()[this.service.ngOnInit().length - 1].id + 1,
                likes: 0,
                name: this.signupForm.value.nameFormControl,
                palindrome: this.signupForm.value.textFormControl
            });
        }
    };
    HeroelistsComponent.prototype.deleteItem = function (elref) {
        console.log(elref);
    };
    HeroelistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroelists',
            template: __webpack_require__(/*! ./heroelists.component.html */ "./src/app/heroelists/heroelists.component.html"),
            styles: [__webpack_require__(/*! ./heroelists.component.scss */ "./src/app/heroelists/heroelists.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_heroes_service__WEBPACK_IMPORTED_MODULE_2__["HeroesService"]])
    ], HeroelistsComponent);
    return HeroelistsComponent;
}());



/***/ }),

/***/ "./src/app/heroes.service.ts":
/*!***********************************!*\
  !*** ./src/app/heroes.service.ts ***!
  \***********************************/
/*! exports provided: HeroesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesService", function() { return HeroesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeroesService = /** @class */ (function () {
    function HeroesService() {
        this.heroes = [
            {
                id: 1,
                name: 'Peter Packer',
                palindrome: 'Spiderman',
                likes: 4395,
                avatar: '../../assets/heros-file/cFiPzbhKt1zVVThrb9EH-thumbnail.jpg',
                img: '../../assets/heros-file/cFiPzbhKt1zVVThrb9EH.jpg'
            },
            {
                id: 2,
                name: 'Wade Winston Wilson',
                palindrome: 'Dead Pool',
                likes: 3208,
                avatar: '../../assets/heros-file/deadpool-avatar.jpg',
                img: '../../assets/heros-file/deadpool.jpg'
            },
            {
                id: 3,
                name: 'Donald Blake',
                palindrome: 'Thor',
                likes: 1550,
                avatar: '../../assets/heros-file/thor-avatar.jpg',
                img: '../../assets/heros-file/thor.jpg'
            },
            {
                id: 4,
                name: 'Diana Prince',
                palindrome: 'Wonder Women',
                likes: 1167,
                avatar: '../../assets/heros-file/wonderwomen-avatar.jpg',
                img: '../../assets/heros-file/wonderwomen.jpg'
            },
            {
                id: 5,
                name: 'Bruce Banner',
                palindrome: 'Hulk',
                likes: 755,
                avatar: '../../assets/heros-file/hulk-avatar.jpg',
                img: '../../assets/heros-file/hulk.jpg'
            }
        ];
        this.pushheroes = [
            {
                id: 6,
                name: 'Bruce Wayne',
                palindrome: 'Batman',
                likes: 345,
                avatar: '../../assets/heros-file/batmanavatar.jpg',
            },
            {
                id: 7,
                name: 'Tony Stark',
                palindrome: 'Ironman',
                likes: 288,
                avatar: '../../assets/heros-file/ironmanavatar.jpg',
            },
            {
                id: 8,
                name: 'Steven Grant Rogers',
                palindrome: 'Captain America',
                likes: 250,
                avatar: '../../assets/heros-file/captanamericaavatar.jpg',
            },
            {
                id: 9,
                name: 'Clark Kent',
                palindrome: 'Superman',
                likes: 143,
                avatar: '../../assets/heros-file/supermanavatar.jpg',
            },
        ];
        this.isObje = false;
    }
    HeroesService.prototype.detailobject = function (obje) {
        this.detail = obje;
        this.isObje = true;
    };
    HeroesService.prototype.returnDetailObject = function () {
        if (this.isObje) {
            return this.detail;
        }
    };
    HeroesService.prototype.ngOnInit = function () {
        // console.log(this.heroes);
        if (this.heroes.lenght !== 0) {
            this.nextheroes = [];
            for (var _i = 0, _a = this.heroes; _i < _a.length; _i++) {
                var heroe = _a[_i];
                this.nextheroes.push({
                    id: heroe.id,
                    name: heroe.name,
                    palindrome: heroe.palindrome,
                    likes: heroe.likes,
                    avatar: heroe.avatar
                });
            }
            this.nextheroes = this.nextheroes.concat(this.pushheroes);
            return this.nextheroes;
        }
    };
    HeroesService.prototype.returnFunction = function () {
        return this.heroes;
    };
    HeroesService.prototype.returnNextHeroes = function () {
        return this.nextheroes;
    };
    HeroesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeroesService);
    return HeroesService;
}());



/***/ }),

/***/ "./src/app/home/detail/detail.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/detail/detail.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Hero Detail</h4>\n<mat-card *ngFor=\"let heroe of detailHeroes\">\n  <mat-card-header>\n      <a mat-card-avatar><img mat-card-avatar [src]=\"heroe.avatar\" alt=\"\"></a>\n      <mat-card-title><a>{{heroe.palindrome}}</a></mat-card-title>\n      <mat-card-subtitle><a>{{heroe.name}}</a></mat-card-subtitle>\n      <div class=\"flex-spacer\"></div>\n      <span>{{heroe.likes}}</span>\n      <button mat-icon-button><mat-icon class=\"mat-icon-heart\">favorite</mat-icon></button>\n  </mat-card-header>\n  <a><img [src]=\"heroe.img\" class=\"img-fluid\" alt=\"\"></a>\n</mat-card>\n<div class=\"text-center\">\n  <button mat-raised-button class=\"mb-3\">Another Hero</button>\n</div>\n<div class=\"text-center py-4\">\n  <button mat-raised-button [routerLink]=\"'/'\">Go back</button>\n</div>"

/***/ }),

/***/ "./src/app/home/detail/detail.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/detail/detail.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  margin-top: 86px;\n  font-size: 25px;\n  text-align: center;\n  font-weight: 400; }\n\n.mat-card {\n  width: 60%;\n  margin: 33px auto; }\n\n@media only screen and (max-width: 600px) {\n  .mat-card {\n    width: 100%; } }\n\n.heros {\n  padding-top: 100px; }\n\na {\n  color: rgba(0, 0, 0, 0.54); }\n\na:hover {\n  color: rgba(0, 0, 0, 0.54);\n  text-decoration: none; }\n\n.mat-card-title {\n  font-size: 16px; }\n\n.mat-card-subtitle {\n  margin-top: 0px;\n  font-size: 12px; }\n\n.flex-spacer {\n  flex-grow: 1; }\n\nbutton:focus {\n  outline: none; }\n\n.mat-icon-heart {\n  color: #dc143c; }\n\nspan {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kZXRhaWwvQzpcXFVzZXJzXFxhc2ltYW5cXERlc2t0b3BcXGhlcm9zbGlzdC9zcmNcXGFwcFxcaG9tZVxcZGV0YWlsXFxkZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0k7SUFDSSxXQUFXLEVBQUEsRUFDZDs7QUFFTDtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLDBCQUFzQixFQUFBOztBQUUxQjtFQUNJLDBCQUFxQjtFQUNyQixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e1xyXG4gICAgbWFyZ2luLXRvcDogODZweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLm1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMzNweCBhdXRvO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5tYXQtY2FyZHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbi5oZXJvc3tcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG5cclxuYXtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XHJcbn1cclxuYTpob3ZlcntcclxuICAgIGNvbG9yOnJnYmEoMCwwLDAsLjU0KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ubWF0LWNhcmQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLm1hdC1jYXJkLXN1YnRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mbGV4LXNwYWNlcntcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5idXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5tYXQtaWNvbi1oZWFydHtcclxuICAgIGNvbG9yOiAjZGMxNDNjO1xyXG59XHJcbnNwYW57XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/detail/detail.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/detail/detail.component.ts ***!
  \*************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_heroes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/heroes.service */ "./src/app/heroes.service.ts");



var DetailComponent = /** @class */ (function () {
    function DetailComponent(service) {
        this.service = service;
        this.heroes = [];
        this.detailHeroes = [];
        this.fordedected = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('heroes') === null) {
            this.heroes = [];
        }
        else {
            this.heroes = JSON.parse(localStorage.getItem('heroes'));
        }
        if (this.service.returnDetailObject() !== undefined) {
            this.fordedected = [];
            this.fordedected[0] = this.service.returnDetailObject();
            localStorage.setItem('fordedected', JSON.stringify(this.fordedected));
        }
        this.heroes[0] = JSON.parse(localStorage.getItem('fordedected'))[0];
        localStorage.setItem('heroes', JSON.stringify(this.heroes));
        this.detailHeroes = JSON.parse(localStorage.getItem('heroes'));
    };
    DetailComponent.prototype.ngOnChanges = function () {
        console.log('hey');
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/home/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/home/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_heroes_service__WEBPACK_IMPORTED_MODULE_2__["HeroesService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"heros container-fluid\">\r\n            <p>Heroes most liked</p>\r\n            <mat-card *ngFor=\"let heroe of heroes\">\r\n                <mat-card-header>\r\n                    <a mat-card-avatar (click)=\"navigateFunction(template)\"><img mat-card-avatar [src]=\"heroe.avatar\" alt=\"\"></a>\r\n                    <mat-card-title><a (click)=\"navigateFunction(template)\" #template>{{heroe.palindrome}}</a></mat-card-title>\r\n                    <mat-card-subtitle><a (click)=\"navigateFunction(template)\">{{heroe.name}}</a></mat-card-subtitle>\r\n                    <div class=\"flex-spacer\"></div>\r\n                    <span>{{heroe.likes}}</span>\r\n                    <button mat-icon-button><mat-icon class=\"mat-icon-heart\">favorite</mat-icon></button>\r\n                </mat-card-header>\r\n                <a (click)=\"navigateFunction(template)\"><img [src]=\"heroe.img\" class=\"img-fluid\" alt=\"\"></a>\r\n            </mat-card>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  width: 60%;\n  margin: 33px auto; }\n\n@media only screen and (max-width: 600px) {\n  .mat-card {\n    width: 100%; } }\n\n.heros {\n  padding-top: 100px; }\n\np {\n  margin-top: 30px;\n  font-size: 25px;\n  text-align: center;\n  font-weight: 400; }\n\na {\n  color: rgba(0, 0, 0, 0.54); }\n\na:hover {\n  color: rgba(0, 0, 0, 0.54);\n  text-decoration: none; }\n\n.mat-card-title {\n  font-size: 16px; }\n\n.mat-card-subtitle {\n  margin-top: 0px;\n  font-size: 12px; }\n\n.flex-spacer {\n  flex-grow: 1; }\n\nbutton:focus {\n  outline: none; }\n\n.mat-icon-heart {\n  color: #dc143c; }\n\nspan {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGFzaW1hblxcRGVza3RvcFxcaGVyb3NsaXN0L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJO0lBQ0ksV0FBVyxFQUFBLEVBQ2Q7O0FBRUw7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSwwQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSwwQkFBcUI7RUFDckIscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmR7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAzM3B4IGF1dG87XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1hdC1jYXJke1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuLmhlcm9ze1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcbnB7ICBcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNTQpO1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgICBjb2xvcjpyZ2JhKDAsMCwwLC41NCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLm1hdC1jYXJkLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5tYXQtY2FyZC1zdWJ0aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZmxleC1zcGFjZXJ7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuYnV0dG9uOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubWF0LWljb24taGVhcnR7XHJcbiAgICBjb2xvcjogI2RjMTQzYztcclxufVxyXG5zcGFue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _heroes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../heroes.service */ "./src/app/heroes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(service, router, route, elref) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.elref = elref;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.heroes = this.service.returnFunction();
    };
    HomeComponent.prototype.navigateFunction = function (event) {
        var _this = this;
        this.service.heroes.forEach(function (element) {
            if (element.palindrome === event.innerHTML) {
                _this.service.detailobject(element);
            }
        });
        this.router.navigate(['/detail']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_heroes_service__WEBPACK_IMPORTED_MODULE_2__["HeroesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HomeComponent);
    return HomeComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\asiman\Desktop\heroslist\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map