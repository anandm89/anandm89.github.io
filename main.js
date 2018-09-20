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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover { \r\n    color: red;\r\n    text-decoration: none;\r\n}\r\na { \r\n    color: #D2D2D2;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-white \">\n  <div class=\"row header\">\n    <div class=\"col-lg-2 col-md-1\"></div>\n    <div class=\"col-lg-8 col-md-10 text-uppercase\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n\n            <th scope=\"col\">\n              <a routerLink=\"home\">Home</a>\n            </th>\n            <th scope=\"col\">\n              <a routerLink=\"about\">About Me</a>\n            </th>\n            <th scope=\"col\">\n              <a routerLink=\"skills\">Skills</a>\n            </th>\n            <th scope=\"col\">\n              <a routerLink=\"portfolio\">Portfolio</a>\n            </th>\n            <th scope=\"col\">\n              <a routerLink=\"experience\">Experience</a>\n            </th>\n            <th scope=\"col\">\n              <a routerLink=\"contact\">Contact</a>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n\n        </tbody>\n      </table>\n    </div>\n    <div class=\"col-lg-2 col-md-1\"></div>\n  </div>\n  <!--Header for Mobile view-->\n  <div class=\"row\">\n    <div class=\"col header-mobile text-white text-center\">\n      <span  class=\"float-right\"  id=\"nav-toggle\"   data-toggle=\"collapse\" data-target=\"#main-nav\"\n        aria-expanded=\"true\" data-backdrop=\"true\" data-keyboard=\"true\"><img src=\"/assets/menu-3x.png\"  \n        style=\"padding: 25px;\"\n        >  </span>  \n        \n    </div>\n  </div>\n  <div class=\"row\">\n    <div id=\"main-nav\"   class=\"col text-white text-center text-uppercase header-mobile-div no-padding-left no-padding-right\">\n      <div>\n        <a routerLink=\"home\">Home</a>\n      </div>\n      <div>\n        <a routerLink=\"about\">About Me</a>\n      </div>\n      <div>\n        <a routerLink=\"skills\">Skills</a>\n      </div>\n      <div>\n        <a routerLink=\"portfolio\">Portfolio</a>\n      </div>\n      <div>\n        <a routerLink=\"experience\">Experience</a>\n      </div>\n      <div>\n        <a routerLink=\"contact\">Contact</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- all router falls here-->\n<router-outlet></router-outlet>"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Simple';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sub_modules_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sub-modules/about-me/about-me.component */ "./src/app/sub-modules/about-me/about-me.component.ts");
/* harmony import */ var _sub_modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub-modules/home/home.component */ "./src/app/sub-modules/home/home.component.ts");
/* harmony import */ var _sub_modules_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sub-modules/page-not-found/page-not-found.component */ "./src/app/sub-modules/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _sub_modules_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"],
                _sub_modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _sub_modules_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', component: _sub_modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: 'home', component: _sub_modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: 'about', component: _sub_modules_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"] },
                    { path: '**', component: _sub_modules_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/sub-modules/about-me/about-me.component.css":
/*!*************************************************************!*\
  !*** ./src/app/sub-modules/about-me/about-me.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.about-bg {\r\n    /* height:100vh !important; */\r\n    background-color:#FFFF !important;\r\n    color: #0A1525 !important;\r\n  }\r\n  h3 {\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 600;\r\n    color: #222222;\r\n    font-size: 18px;\r\n \r\n}\r\n  .p-text {\r\n    /* font-size: 0.9375em; */\r\n    line-height: 1.625em;\r\n    padding: 15px 0;\r\n    color: #0A1525 !important;\r\n}\r\n  img{\r\n    max-width: 100% !important;\r\n}\r\n  @media screen and (max-width: 600px){\r\n    img{\r\n      height: 100%;\r\n      width: 100%;\r\n      border-bottom: red;\r\n    }\r\n    \r\n  }"

/***/ }),

/***/ "./src/app/sub-modules/about-me/about-me.component.html":
/*!**************************************************************!*\
  !*** ./src/app/sub-modules/about-me/about-me.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid about-bg\">\n  <br>\n  <div class=\"row\">\n    <h2 class=\"text-center col-12\">ABOUT ME</h2>\n  </div>\n  <div class=\"row\">\n    <h6 class=\"text-center col-12\">A person who loves Nature and It's creations</h6>\n  </div>\n  <br>\n      <div class=\"row  text-white\">\n           <div class=\"col-md-6 text-center\"> <img src=\"../assets/about.png\"> </div>\n           <div class=\"col-md-6\">\n             <h3>My Passion</h3>\n             <p class=\"p-text\">Lorem ipsum dolor sit amet, quo meis voluptaria, erant bonorum albucius \n               et per, ei placerat eu, te eos porro veniam. An everti maiorum detracto mea. \n               Eu eos dicam voluptaria, erant bonorum albucius et per, ei sapientem accommodare est.\n                Saepe dolorum constituam ei vel. Te sit malorum ceteros repudiandae,\n                 ne tritani adipisci vis.</p> \n                 <p class=\"p-text\">Lorem ipsum dolor sit amet, quo meis voluptaria, erant bonorum albucius \n                    et per, ei placerat eu, te eos porro veniam. An everti maiorum detracto mea. \n                    Eu eos dicam voluptaria, erant bonorum albucius et per, ei sapientem accommodare est.\n                     Saepe dolorum constituam ei vel. Te sit malorum ceteros repudiandae,\n                      ne tritani adipisci vis.</p> \n           </div>\n         </div>\n</div>"

/***/ }),

/***/ "./src/app/sub-modules/about-me/about-me.component.ts":
/*!************************************************************!*\
  !*** ./src/app/sub-modules/about-me/about-me.component.ts ***!
  \************************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
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

var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/sub-modules/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/sub-modules/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/sub-modules/home/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/sub-modules/home/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.home-bg {\r\n    height:100vh !important;\r\n    background: center center/cover no-repeat fixed;\r\n    background-image: url('bg_head.jpg');\r\n    background-position: center center;\r\n    background-size: cover;\r\n  }"

/***/ }),

/***/ "./src/app/sub-modules/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/sub-modules/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container-fluid home-bg\" >\n    \n  <div class=\"row\">\n    <div class=\"col-lg-1  col-md-2 col-1 \"></div>\n    <div class=\"col  text-center text-white\">\n      <br>\n\n      <img src=\"../assets/profile.jpg\" height=\"150px\"\n           width=\"150px\" class=\"rounded-circle img-round\"/>\n      <br>\n      <br>\n      <h4>Hello ! I Am Anand</h4>\n      <h4>A UX Designer & Developer Based In Beautiful World</h4>\n    </div>\n    <div class=\"col-lg-1 col-md-2 col-1 \"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4  col-md-4 col-2 col\"></div>\n    <div class=\"col text-center\">\n      <br>\n      <button type=\"button\" class=\"btn btn-primary\"   routerLink=\"/about\">Know Me</button>\n      <br>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-2 align-center\"></div>\n  </div>\n\n\n</div> "

/***/ }),

/***/ "./src/app/sub-modules/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sub-modules/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/sub-modules/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/sub-modules/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/sub-modules/page-not-found/page-not-found.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/sub-modules/page-not-found/page-not-found.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.page-not-found-bg {\r\n    height:100vh !important;\r\n    background: center center/cover no-repeat fixed;\r\n    background-image: url('bg_head.jpg');\r\n    background-position: center center;\r\n    background-size: cover;\r\n  }\r\n  element.style {\r\n    font-weight: 9;\r\n}\r\n  h1 {\r\n    font-size: 6.5rem !important;\r\n    font-weight: 9;\r\n}"

/***/ }),

/***/ "./src/app/sub-modules/page-not-found/page-not-found.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/sub-modules/page-not-found/page-not-found.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container-fluid page-not-found-bg\" >\n    \n    <div class=\"row\">\n      <div class=\"col-lg-1  col-md-2 col-1 \"></div>\n      <div class=\"col  text-center text-white\">\n        <br>\n  <h1>404</h1>\n        <img src=\"../assets/astronaut.png\" height=\"300px\"\n             width=\"300px\"  />\n        <h4>Sorry..! We Landed in Wrong Page</h4>\n      </div>\n      <div class=\"col-lg-1 col-md-2 col-1 \"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4  col-md-4 col-2 col\"></div>\n      <div class=\"col text-center\">\n        <br>\n        <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/home\">Back To Home</button>\n        <br>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-2 align-center\"></div>\n    </div>\n  \n  \n  </div> "

/***/ }),

/***/ "./src/app/sub-modules/page-not-found/page-not-found.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/sub-modules/page-not-found/page-not-found.component.ts ***!
  \************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/sub-modules/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/sub-modules/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Anand_Work\AngularSimple\Simple\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map