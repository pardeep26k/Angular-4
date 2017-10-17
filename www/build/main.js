webpackJsonp([0],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventService = (function () {
    function EventService() {
        this.filterAddedSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.filterRemovedSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        console.log('Hello EventService Provider');
        this.filterAdded$ = this.filterAddedSubject.asObservable();
        this.filterRemoved$ = this.filterRemovedSubject.asObservable();
    }
    EventService.prototype.filterAdded = function (filter) {
        this.filterAddedSubject.next(filter);
    };
    EventService.prototype.filterRemoved = function (filter) {
        this.filterRemovedSubject.next(filter);
    };
    return EventService;
}());
EventService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], EventService);

//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var User = (function () {
    function User() {
    }
    return User;
}());

var LoginPage = (function () {
    //  httpService : HttpService;
    function LoginPage(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.user = new User();
        //this.httpService = HttpService;
    }
    LoginPage.prototype.login = function (form) {
        var _this = this;
        var ref = this;
        this.httpService.get('metadata.json').subscribe(function (metadata) {
            var dashboards = metadata.dashboards;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* Dashboard */], { "data": dashboards[0].children[0] });
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"D:\work\angular4\src\pages\login\login.html"*/'<!--\n  Generated template for the Login page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar color="theme">\n   <ion-title align="center" > Login\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<form #form="ngForm" (ngSubmit)="login()" >\n  <ion-list>\n      <ion-item color=""> \n        <ion-label floating>Username</ion-label>\n        <ion-input type="email" required [(ngModel)]="user.username" name="username"  #username="ngModel"></ion-input>\n        <div [hidden]="username.valid || username.pristine"\n             class="alert alert-danger">\n          Username is required\n        </div>\n      </ion-item>\n      </ion-list>\n       <ion-list>\n      <ion-item color="">\n       <ion-label floating>Password</ion-label>\n        <ion-input type="password" required [(ngModel)]="user.password" name="password"  #password="ngModel"></ion-input>\n     <div [hidden]="password.valid || password.pristine"\n             class="alert alert-danger">\n          Password is required\n        </div>\n      </ion-item>\n </ion-list>\n\n <ion-buttons end>\n      <button ion-button type="submit" color="theme" [disabled]="!form.valid" color="fground">Login</button>\n     <button type="reset" ion-button  color="light" (click)="user = {}" >Cancel</button>\n     \n    </ion-buttons>\n\n\n     \n    </form>\n</ion-content>\n\n\n'/*ion-inline-end:"D:\work\angular4\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_chart_schema__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var crossfilter = __webpack_require__(48);
var d3 = __webpack_require__(78);
var dc = __webpack_require__(133);
var Dashboard = (function () {
    function Dashboard(navCtrl, navParams, httpService, chRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.chRef = chRef;
        this.title = "Dashboard";
        this.user = navParams.get('user');
        this.setTitle();
    }
    Dashboard.prototype.setTitle = function () {
        var breadCrum = this.navParams.get('breadCrum');
        if (!breadCrum) {
            return;
        }
        var title = "";
        breadCrum.forEach(function (item, i) {
            console.log(item);
            title = title + item;
            if (i != breadCrum.length - 1) {
                title += " > ";
            }
        });
        this.title = title;
    };
    Dashboard.prototype.ngOnInit = function () {
        var ref = this;
        this.dashboard = this.navParams.get('data');
        if (!this.dashboard) {
            return;
        }
        var fileUrl = this.dashboard.filename;
        var ref = this;
        var dashboardType = this.dashboard.type;
        d3.csv(this.httpService.baseUrl + fileUrl, function (chartData) {
            ref.chartData = chartData;
        });
    };
    Dashboard.prototype.createChart = function () {
        var newChart = new __WEBPACK_IMPORTED_MODULE_3__app_chart_schema__["b" /* ChartObject */]();
        newChart.title = newChart.title ? newChart.title : "chart";
        this.dashboard.charts.push(newChart);
    };
    Dashboard.prototype.setHeight = function (rows) {
        var body = document.querySelector("body");
        return (body.clientHeight - (140 * (rows + 1))) / rows;
    };
    Dashboard.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserDetailPage');
    };
    Dashboard.prototype.disbleSwipe = function (slides) {
        slides.lockSwipes(true);
    };
    ;
    Dashboard.prototype.enableSwipe = function (slides) {
        slides.lockSwipes(false);
    };
    ;
    return Dashboard;
}());
Dashboard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',template:/*ion-inline-start:"D:\work\angular4\src\pages\dashboard\dashboard.html"*/'<!--\n  Generated template for the UserDetail page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar color="theme">\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align="center"> {{title}} </ion-title>\n\n    <ion-buttons end>\n     \n    </ion-buttons>\n  </ion-navbar>\n\n  \n</ion-header>\n\n\n<ion-content>\n  \n\n  <ion-slides *ngIf="dashboard && chartData " #slides>\n  <ion-slide  *ngFor=" let page of dashboard.pages" >\n  <!--div *ngFor=" let page of dashboard.pages"-->\n   <ion-grid>\n  <ion-row>\n       <ion-col  [attr.col-12]="chart.col == 12? true : null"\n                 [attr.col-6]="chart.col == 6 || !chart.col ? true : null" \n                 [attr.col-4]="chart.col == 4? true : null"\n                 [attr.col-2]="chart.col == 2? true : null" \n              \n                 *ngFor="let chart of page.grid">\n    \n       <chart-widget  [height]="setHeight(page.rows)" [chart]=chart [data]=chartData   (mousedown)="disbleSwipe(slides)" (mouseup)="enableSwipe(slides)" (slide)= "enableSwipe(slides)" (touchend)= "enableSwipe(slides)" ></chart-widget>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n  </ion-slide>\n  </ion-slides>\n \n</ion-content>\n'/*ion-inline-end:"D:\work\angular4\src\pages\dashboard\dashboard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
], Dashboard);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var crossfilter = __webpack_require__(48);
var d3 = __webpack_require__(78);
var dc = __webpack_require__(133);
var ChartViewer = (function () {
    function ChartViewer(params, httpService) {
        this.httpService = httpService;
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.renderDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = {};
        this.isLoadeded = false;
        //this.data = [];
    }
    ChartViewer.prototype.ngOnInit = function () {
        var ref = this;
        ref.isLoadeded = true;
    };
    ;
    ChartViewer.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChartViewerPage');
    };
    ChartViewer.prototype.onCancel = function () {
        this.cancel.emit();
    };
    ChartViewer.prototype.onRenderDone = function (chart) {
        this.chartObj = chart;
        this.renderDone.emit(chart);
    };
    return ChartViewer;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartViewer.prototype, "chart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ChartViewer.prototype, "cancel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartViewer.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartViewer.prototype, "filters", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ChartViewer.prototype, "renderDone", void 0);
ChartViewer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chart-viewer',template:/*ion-inline-start:"D:\work\angular4\src\pages\chart-viewer\chart-viewer.html"*/'\n\n    <!--google-chart [data]=chart #chartElem ></google-chart-->\n\n  \n\n    <!--div id="chart_{{chart.chartId}}"></div-->\n\n    <div *ngIf="isLoadeded " class="wrapper" >\n\n    <drilldown  [options]=chart  *ngIf="chart.type == \'drilldown\'" [data]=data (renderDone)="onRenderDone($event)" ></drilldown> \n\n        <table-chart  [options]=chart  *ngIf="chart.type == \'table\'" [data]=data  [filters]=filters (renderDone)="onRenderDone($event)" > \n\n      </table-chart> \n\n    </div>\n\n'/*ion-inline-end:"D:\work\angular4\src\pages\chart-viewer\chart-viewer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */]])
], ChartViewer);

//# sourceMappingURL=chart-viewer.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_chart_schema__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_save_svg_as_png__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_save_svg_as_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_save_svg_as_png__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var json2csv = __webpack_require__(253);
var JSONtoCSV = __webpack_require__(370);
var ChartService = (function () {
    function ChartService() {
    }
    ChartService.prototype.encodeData = function (obj) {
        var tempData = [];
        obj.dataTable.forEach(function (arr) {
            var chartItem = new __WEBPACK_IMPORTED_MODULE_1__app_chart_schema__["a" /* ChartItem */]();
            chartItem.key = arr[0];
            chartItem.value = arr[1];
            tempData.push(chartItem);
        });
        obj.dataTable = tempData;
        return obj;
    };
    ChartService.prototype.decodeData = function (obj) {
        var tempData = [];
        obj.dataTable.forEach(function (arr) {
            var chartItem = [];
            chartItem.push(arr.key);
            arr.value = parseInt(arr.value) ? parseInt(arr.value) : arr.value;
            chartItem.push(arr.value);
            tempData.push(chartItem);
        });
        obj.dataTable = tempData;
        return obj;
    };
    ChartService.prototype.download = function (chart) {
        var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(chart));
        var elem = document.createElement('a');
        elem.setAttribute('href', "data:" + data);
        elem.setAttribute('download', chart.title + ".json");
        elem.click();
    };
    ChartService.prototype.downloadImage = function (elem, filename) {
        Object(__WEBPACK_IMPORTED_MODULE_3_save_svg_as_png__["saveSvgAsPng"])(elem, filename);
    };
    ChartService.prototype.getImageURI = function (elem, callback) {
        Object(__WEBPACK_IMPORTED_MODULE_3_save_svg_as_png__["svgAsPngUri"])(elem, {}, function (uri) {
            callback(uri);
        });
        //svgAsPngUri(document.getElementById("diagram"), {}, function(uri) {});
    };
    ChartService.prototype.downloadCSV = function (data) {
        var result = json2csv({ data: data, fields: Object.keys(data[0]) });
        JSONtoCSV(data, "file.csv");
    };
    return ChartService;
}());
ChartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ChartService);

//# sourceMappingURL=chart.service.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(290);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_social_share__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_social_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_social_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_tree_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chart_viewer_chart_viewer__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chart_widget_chart_widget__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__chart_schema__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_chart_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_event_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_social_share_social_share__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_grid__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_highcharts__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_charts_drilldown_drilldown__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_charts_table_table__ = __webpack_require__(651);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var _3d = __webpack_require__(652);
var Highcharts = __webpack_require__(142);
var drilldown = __webpack_require__(653);
var highchartsMore = __webpack_require__(654);
var exporting = __webpack_require__(655);
var offlineExporting = __webpack_require__(656);
var highchartsData = __webpack_require__(657);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_social_share__["CeiboShare"],
            __WEBPACK_IMPORTED_MODULE_11__pages_chart_viewer_chart_viewer__["a" /* ChartViewer */],
            __WEBPACK_IMPORTED_MODULE_12__pages_chart_widget_chart_widget__["a" /* ChartWidget */],
            __WEBPACK_IMPORTED_MODULE_17__pages_social_share_social_share__["a" /* SocialShare */],
            __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__["a" /* Dashboard */],
            __WEBPACK_IMPORTED_MODULE_20__pages_charts_drilldown_drilldown__["a" /* DrilldownChart */],
            __WEBPACK_IMPORTED_MODULE_21__pages_charts_table_table__["a" /* TableChart */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular_tree_component__["a" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_18_angular2_grid__["c" /* NgGridModule */],
            __WEBPACK_IMPORTED_MODULE_19_angular2_highcharts__["ChartModule"].forRoot(Highcharts, _3d, drilldown, highchartsMore, exporting, offlineExporting, highchartsData)
            // svg_to_png
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_chart_viewer_chart_viewer__["a" /* ChartViewer */],
            __WEBPACK_IMPORTED_MODULE_12__pages_chart_widget_chart_widget__["a" /* ChartWidget */],
            __WEBPACK_IMPORTED_MODULE_17__pages_social_share_social_share__["a" /* SocialShare */],
            __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__["a" /* Dashboard */],
            __WEBPACK_IMPORTED_MODULE_20__pages_charts_drilldown_drilldown__["a" /* DrilldownChart */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_14__chart_schema__["b" /* ChartObject */],
            __WEBPACK_IMPORTED_MODULE_14__chart_schema__["c" /* ChartOptions */],
            __WEBPACK_IMPORTED_MODULE_14__chart_schema__["a" /* ChartItem */],
            __WEBPACK_IMPORTED_MODULE_15__providers_chart_service__["a" /* ChartService */],
            __WEBPACK_IMPORTED_MODULE_16__providers_event_service__["a" /* EventService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(chRef, platform, statusBar, splashScreen, httpService, menuCtrl) {
        this.chRef = chRef;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.httpService = httpService;
        this.menuCtrl = menuCtrl;
        this.dashboards = [];
        this.onEvent = function ($event) {
            alert("onEvent");
            console.log($event);
        };
        this.initializeApp();
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.menuCtrl.swipeEnable(false);
        var filename = 'metadata.json';
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        var filename = 'metadata.json';
        //this.rootPage = Dashboard_3d;
        this.httpService.get(filename).subscribe(function (metadata) {
            _this.metadata = metadata;
            _this.dashboards = metadata.dashboards;
            // this.nav.setRoot(this.rootPage,{ "data":this.dashboards[0].children[0]})
            _this.setHeight();
            _this.chRef.detectChanges();
        });
    };
    ;
    MyApp.prototype.signout = function () {
        this.menuCtrl.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.onDashboardChange = function ($event) {
        var node = $event.node;
        var data = node.data;
        if (node.isLeaf) {
            var level = node.level;
            var breadCrum = [];
            breadCrum.push(node.data.name);
            while (level > 1) {
                node = node.parent;
                breadCrum.push(node.data.name);
                level--;
            }
            breadCrum = breadCrum.reverse();
            var title = "";
            breadCrum.forEach(function (item, i) {
                console.log(item);
                title = title + item;
                if (i != breadCrum.length - 1) {
                    title += " > ";
                }
            });
            console.log(title);
            // this.nav.push(UserDetail,{'data':data})
            //  this.nav.setRoot(this.rootPage,{"breadCrum":breadCrum, "data":data})
            this.menuCtrl.close();
        }
    };
    MyApp.prototype.onMenuInit = function () {
        //this.setHeight();
    };
    MyApp.prototype.setHeight = function () {
        var body = document.querySelector("body");
        var treeViewport = document.querySelector("tree-viewport");
        var tree = treeViewport.querySelector(".tree");
        tree.style.height = (body.clientHeight - 100).toString() + "px";
        setTimeout(function () {
            treeViewport.scrollTop = 0;
        }, 5000);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\work\angular4\src\app\app.html"*/'\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="theme">\n      <ion-title align="center">Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="has-header"  color="light" id="menucontent" >\n    <tree-root [nodes]="dashboards" (onActivate)="onDashboardChange($event)" (onInitialized)="onMenuInit()"></tree-root>\n  </ion-content>\n  <ion-footer>\n  <ion-toolbar color="light">\n    \n <ion-buttons >\n     <button ion-button  (click)="signout()" class="signoutBtn">\n         <ion-icon name="log-out" >   Sign out</ion-icon>\n      </button> </ion-buttons>\n\n\n  </ion-toolbar>\n</ion-footer>\n</ion-menu>\n<ion-footer>\n  <ion-toolbar color="light">\n    <p align="right">\n     © Copyright 2017 Pardeep Kumar.\n    </p>\n  </ion-toolbar>\n</ion-footer>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\work\angular4\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_viewer_chart_viewer__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chart_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_event_service__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var crossfilter = __webpack_require__(48);
var d3 = __webpack_require__(78);
var dc = __webpack_require__(133);
var ChartWidget = (function () {
    function ChartWidget(chRef, popoverCtrl, alertCtrl, modalCtrl, chartService, httpService, eventService) {
        this.chRef = chRef;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.chartService = chartService;
        this.httpService = httpService;
        this.eventService = eventService;
        this.height = 100;
        this.isLoadeded = false;
        this.editData = {};
        this.shareDisabled = false;
        this.state = "preview";
        this.edit = true;
        this.share = true;
        this.hideOptions = false;
        this.chart;
        this.shareUrl = "";
        this.data;
    }
    ChartWidget.prototype.ionViewDidLoad = function () {
    };
    ChartWidget.prototype.ngOnInit = function () {
        console.log(this.chart);
        var ref = this;
        setTimeout(function () {
            ref.isLoadeded = true;
        }, 500);
    };
    ;
    ChartWidget.prototype.previewChart = function (elem) {
        this.openModal(__WEBPACK_IMPORTED_MODULE_1__chart_viewer_chart_viewer__["a" /* ChartViewer */], { "chart": this.chart, "data": this.data });
    };
    ChartWidget.prototype.openModal = function (comp, data) {
        this.popup = this.modalCtrl.create(comp, { "chart": this.chart });
        this.popup.onDidDismiss(function (data) {
            console.log(data);
        });
        this.popup.present();
    };
    ChartWidget.prototype.onCancel = function () {
        this.popup.dismiss();
    };
    ChartWidget.prototype.downloadChart = function (chart) {
        this.chartService.download(chart);
        //this.chartService.downloadCSV(this.data)
    };
    ChartWidget.prototype.downloadImage = function (elemId, filename) {
        var parent = document.getElementById("chart_" + elemId);
        var elem = parent.getElementsByTagName("svg")[0];
        this.chartService.downloadImage(elem, filename + ".png");
    };
    ChartWidget.prototype.showImage = function (elemId) {
        var parent = document.getElementById("chart_" + elemId);
        var elem = parent.getElementsByTagName("svg")[0];
        this.chartService.getImageURI(elem, function (uri) {
            window.open(uri, "_blank");
        });
    };
    ChartWidget.prototype.toggltFilter = function (chart) {
        var filterWrapper = document.querySelector("#" + chart.type + "_" + chart.id + " .select");
        var filter = filterWrapper.querySelector("select");
        filter.size = filter.options.length;
        filterWrapper.hidden = !filterWrapper.hidden;
        // if(filterWrapper.hidden){
        //   filterWrapper.hidden = false;
        // }else{
        //   filterWrapper.hidden = true;
        // }
    };
    ChartWidget.prototype.shareChart = function (id) {
        //this.shareDisabled = true;
        if (this.state == 'edit') {
            return;
        }
        var ref = this;
        if (!ref.shareUrl) {
            ref.uploadImage(id, function (url) {
                ref.shareUrl = url;
                ref.chRef.detectChanges();
                console.log(url);
                // this.shareDisabled = false;
            });
        }
        else {
            ref.shareUrl = "";
            ref.chRef.detectChanges();
        }
    };
    ChartWidget.prototype.uploadImage = function (elemId, callback) {
        var parent = document.getElementById("chart_" + elemId);
        var elem = parent.getElementsByTagName("svg")[0];
        var ref = this;
        this.chartService.getImageURI(elem, function (uri) {
            uri = encodeURIComponent(uri);
            var param = {
                "data": uri
            };
            ref.httpService.post("index.php", param).subscribe(function (response) {
                console.log(response);
                ref.shareUrl = response.url;
                if (callback) {
                    callback(response.url);
                }
            });
        });
    };
    ChartWidget.prototype.onEditDone = function (chart) {
        this.state = 'preview';
        this.shareUrl = "";
        Object.assign(this.chart, chart);
    };
    ChartWidget.prototype.onRenderDone = function (chart) {
        this.chartObj = chart;
    };
    ChartWidget.prototype.resetFilter = function (filter) {
        this.eventService.filterRemoved(filter);
        //  this.chartObj.events.drillupall();
    };
    ChartWidget.prototype.printChart = function (id) {
        this.chartObj.print();
        // this.chartService.printDiv("#chart_"+id);
    };
    return ChartWidget;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartWidget.prototype, "chart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ChartWidget.prototype, "edit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ChartWidget.prototype, "share", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ChartWidget.prototype, "hideOptions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartWidget.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartWidget.prototype, "filters", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartWidget.prototype, "height", void 0);
ChartWidget = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chart-widget',template:/*ion-inline-start:"D:\work\angular4\src\pages\chart-widget\chart-widget.html"*/'<ion-card color="grid" *ngIf="isLoadeded">\n  <ion-card-header  color="fground" ion-item class="topHeader" >\n       \n  \n      <ion-title  color="fground" >  {{chart.title}}    </ion-title>\n    <div  item-right *ngIf="!hideOptions && chart.type != \'table\' ">\n      <span >\n\n\n      \n       <button ion-button clear [disabled]="state==\'edit\'" title="Download as File" (click)="downloadChart(chart)">\n         <ion-icon name="document" ></ion-icon> \n         <ion-icon name="download" ></ion-icon>\n      </button>\n       <button ion-button clear [disabled]="state==\'edit\'" title="Download as Image" (click)="downloadImage(chart.id,chart.title)">\n        <ion-icon name="image"  ></ion-icon>\n         <ion-icon name="download" ></ion-icon>\n      </button>\n      \n      </span>\n       \n      \n      \n       <button *ngIf="edit" [disabled]="state==\'edit\'" ion-button clear title="Upload as Image" (click)="uploadImage(chart.id)">\n         <ion-icon name="cloud-upload" ></ion-icon>\n          <ion-icon name="image"  ></ion-icon>\n      </button>\n       <button *ngIf="edit" [disabled]="state==\'edit\'" ion-button clear title="print" (click)="printChart(chart)">\n         <ion-icon name="print" ></ion-icon>\n         \n      </button>\n      \n      \n    </div>\n    \n    </ion-card-header>\n  <ion-card-content  [ngStyle]="{\'height\':height+\'px\'}" [ngClass]="{\'table-wrapper\': chart.type == \'table\'}" >\n  \n    <chart-viewer    id="chart_{{chart.id}}" *ngIf="state==\'preview\'" [chart]=chart [data]=data [filters]=filters  (cancel)="onCancel()" (renderDone)="onRenderDone($event)" ></chart-viewer>\n    </ion-card-content>\n  <ion-card-header color="fground" >  \n    <social-share   *ngIf="chart.type != \'table\'" [url]="shareUrl" side="top"  [disable]="shareDisabled ||  chart.type == \'table\'"  (shareClicked)="shareChart(chart.id)"  [media]=  \'["facebook","twitter","linkedIn"]\' ></social-share>\n  </ion-card-header>  \n</ion-card> \n  \n\n\n  \n\n\n\n'/*ion-inline-end:"D:\work\angular4\src\pages\chart-widget\chart-widget.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_chart_service__["a" /* ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_chart_service__["a" /* ChartService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_event_service__["a" /* EventService */]) === "function" && _g || Object])
], ChartWidget);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=chart-widget.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.baseUrl = 'assets/data/';
    }
    HttpService.prototype.get = function (url, params) {
        var baseUrl = "http://nikhtto.in/api/";
        return this.http.get(this.baseUrl + url + "").map(function (res) { return res.json(); });
    };
    HttpService.prototype.post = function (url, params) {
        // need cross origin plugin to work
        var baseUrl = "http://nikhtto.in/api/";
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        data.append('data', params.data);
        params = { "name": "ankita" };
        return this.http.post(baseUrl + url + '', data).map(function (res) { return res.json(); });
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], HttpService);

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialShare; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialShare = (function () {
    function SocialShare() {
        this.shareClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.side = "top";
        this.disable = false;
        if (!this.media) {
            this.media = ["facebook", "twitter", "linkedIn", "googlePlus"];
        }
    }
    SocialShare.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad social-share');
    };
    SocialShare.prototype.onShareClicked2 = function () {
    };
    SocialShare.prototype.onOptionSelect = function (selector, ev) {
        var ref = this;
        console.log("ss" + ref.url);
        //CeiboShare
        setTimeout(function () {
            ref.url = "";
            document.querySelector(selector).click();
        }, 1000);
    };
    SocialShare.prototype.onShareClick = function (ev) {
        this.shareClicked.emit(ev);
    };
    return SocialShare;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SocialShare.prototype, "url", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SocialShare.prototype, "media", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SocialShare.prototype, "icon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SocialShare.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SocialShare.prototype, "side", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SocialShare.prototype, "disable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SocialShare.prototype, "shareClicked", void 0);
SocialShare = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'social-share',template:/*ion-inline-start:"D:\work\angular4\src\pages\social-share\social-share.html"*/' <ion-fab  right bottom  >\n      <button ion-fab mini id="shareBtn" #menu [disabled]="disable" (click)="onShareClick($event)" ><ion-icon name="share" ></ion-icon></button>\n    \n      <ion-fab-list side="top"  >\n          <button ion-fab  (click)="onOptionSelect(\'#shareBtn\')"  *ngIf="media.indexOf(\'facebook\') >=0"  ceiboShare [disabled]="!url || disable"   [facebook]="{u: url}" ><ion-icon name="logo-facebook"  ></ion-icon></button>\n           <button ion-fab  (click)="onOptionSelect(\'#shareBtn\')"  *ngIf="media.indexOf(\'twitter\') >=0" ceiboShare [disabled]="!url || disable"   [twitter]="{url: url}" ><ion-icon name="logo-twitter"  ></ion-icon></button>\n          <button ion-fab   (click)="onOptionSelect(\'#shareBtn\')" *ngIf="media.indexOf(\'googlePLus\') >=0" ceiboShare [disabled]="!url || disable"   [googlePlus]="{url: url}" ><ion-icon name="logo-googleplus"  ></ion-icon></button>\n          <button ion-fab   (click)="onOptionSelect(\'#shareBtn\')" *ngIf="media.indexOf(\'linkedIn\') >=0" ceiboShare [disabled]="!url || disable"   [linkedIn]="{url: url}" ><ion-icon name="logo-linkedin"  ></ion-icon></button>\n          </ion-fab-list>\n    </ion-fab>  '/*ion-inline-end:"D:\work\angular4\src\pages\social-share\social-share.html"*/
    }),
    __metadata("design:paramtypes", [])
], SocialShare);

//# sourceMappingURL=social-share.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrilldownChart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_chart_schema__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Highcharts = __webpack_require__(142);
var crossfilter = __webpack_require__(48);
var DrilldownChart = (function () {
    function DrilldownChart(params, httpService) {
        this.params = params;
        this.httpService = httpService;
        this.data = [];
        this.renderDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var options = params.get('options');
        this.level = 0;
        this.filters = [];
        if (options) {
            //  this.chart = chart;
        }
    }
    DrilldownChart.prototype.ngOnChanges = function (changes) {
        // alert("ngOnChanges")
        //this.getGroups();
    };
    DrilldownChart.prototype.getGroups = function (data, key, filters) {
        var ref = this;
        data = ref.filterData(data, key, filters);
        data = new crossfilter(data);
        var dim = data.dimension(function (d) {
            return d[key];
        });
        var groups = dim.group().all();
        return groups;
    };
    DrilldownChart.prototype.filterData = function (data, key, filters) {
        var ref = this;
        var filterKeys = [];
        if (filters) {
            filterKeys = Object.keys(filters);
        }
        data = data.filter(function (d) {
            var i = 0;
            var status = true;
            filterKeys.forEach(function (k) {
                var a = filters[k];
                if (a.length > 0 && a.indexOf(d[k]) == -1) {
                    status = false;
                }
            });
            if (status) {
                return d;
            }
        });
        return data;
    };
    DrilldownChart.prototype.getchartSeries = function (data, name, isDrilldown) {
        if (name === void 0) { name = ""; }
        if (isDrilldown === void 0) { isDrilldown = true; }
        var series = [{ name: name,
                data: [],
                colorByPoint: true,
                drilldown: isDrilldown
            }];
        if (isDrilldown) {
            // series[0].drilldown = true;
        }
        data.forEach(function (group) {
            group.name = group.key;
            group.drilldown = group.key;
            delete group.key;
            group.y = group.value;
            delete group.value;
            series[0].data.push(group);
        });
        return series;
    };
    DrilldownChart.prototype.setDrilldown = function (data) {
        var drilldowns = {};
        data.forEach(function (group) {
            drilldowns[group.key] = {
                "name": group.key,
                data: []
            };
        });
        return drilldowns;
    };
    DrilldownChart.prototype.getCategory = function (data) {
        var categories = [];
        data.forEach(function (group) {
            categories.push(group.key);
        });
        return categories;
    };
    DrilldownChart.prototype.ngOnInit = function () {
        var ref = this;
        var options = ref.options.options;
        options.chart.events = {
            "drilldown": function (e) {
                if (!e.seriesOptions) {
                    key = ref.options.hirarchy[ref.level];
                    if (!ref.filters[key]) {
                        ref.filters[key] = [];
                    }
                    ref.filters[key].push(e.point.name);
                    ref.level++;
                    var chart = this, key = ref.options.hirarchy[ref.level], data = ref.getGroups(ref.data, key, ref.filters), isDrilldown = ref.options.hirarchy.length > (ref.level + 1) ? true : false, series = ref.getchartSeries(data, e.point.name, isDrilldown);
                    chart.showLoading('Simulating Ajax ...');
                    setTimeout(function () {
                        chart.hideLoading();
                        var a = ref.chartElem.querySelector(".highcharts-series-group");
                        a.innerHTML = "";
                        chart.addSeriesAsDrilldown(e.point, series[0]);
                    }, 1000);
                }
            },
            "drillup": function (e) {
                var a = ref.chartElem.querySelector(".highcharts-series-group");
                a.innerHTML = "";
                ref.level--;
                key = ref.options.hirarchy[ref.level];
                ref.filters[key].pop();
            }
        };
        var key = ref.options.hirarchy[0], isDrilldown = ref.options.hirarchy.length > 1 ? true : false;
        ref.defaultOptions = __WEBPACK_IMPORTED_MODULE_3__app_chart_schema__["c" /* ChartOptions */].get();
        ref.defaultOptions.chart.events = options.chart.events;
        if (ref.dataUrl) {
            ref.httpService.get(ref.dataUrl).subscribe(function (data) {
                ref.data = data;
                var data = ref.getGroups(ref.data, key, []), series = ref.getchartSeries(data, key, isDrilldown);
                options.series = series;
                ref.defaultOptions.series = series;
                var id = 'chart' + ref.options.id;
                setTimeout(function () {
                    ref.chartElem = document.querySelector("#" + id);
                    ref.chart = Highcharts.chart(id, ref.defaultOptions);
                    ref.chart.update(options);
                    ref.onRenderDone();
                }, 1000);
            });
        }
        else {
            var data = ref.getGroups(ref.data, key, []), series = ref.getchartSeries(data, key, isDrilldown);
            options.series = series;
            ref.defaultOptions.series = series;
            var id = 'chart' + ref.options.id;
            setTimeout(function () {
                ref.chartElem = document.querySelector("#" + id);
                ref.chart = Highcharts.chart(id, ref.defaultOptions);
                ref.chart.update(options);
                ref.onRenderDone();
            }, 1000);
        }
    };
    ;
    DrilldownChart.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChartViewerPage');
    };
    DrilldownChart.prototype.onRenderDone = function () {
        this.renderDone.emit(this.chart);
    };
    return DrilldownChart;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DrilldownChart.prototype, "options", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DrilldownChart.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DrilldownChart.prototype, "dataUrl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DrilldownChart.prototype, "renderDone", void 0);
DrilldownChart = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'drilldown',template:/*ion-inline-start:"D:\work\angular4\src\pages\charts\drilldown\drilldown.html"*/'  \n\n<div  *ngIf="options"  id="chart{{options.id}}"></div>\n  <!--chart *ngIf="chartOptions" id="drilldownDiv" [options]="chartOptions" ></chart--> \n\n  '/*ion-inline-end:"D:\work\angular4\src\pages\charts\drilldown\drilldown.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */]])
], DrilldownChart);

//# sourceMappingURL=drilldown.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableChart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_service__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Highcharts = __webpack_require__(142);
//Highcharts.setOptions(ChartOptions.get());
var crossfilter = __webpack_require__(48);
var TableChart = (function () {
    function TableChart(params, httpService, eventService) {
        this.params = params;
        this.httpService = httpService;
        this.eventService = eventService;
        this.data = [];
        this.filters = {};
        this.renderDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isLoadeded = false;
        this.tableData = [];
        this.columns = [];
        var options = params.get('options');
        this.level = 0;
        this.filters = {};
    }
    TableChart.prototype.ngOnChanges = function (changes) {
        // alert("ngOnChanges")
        this.render();
    };
    TableChart.prototype.render = function () {
        this.columns = this.options.columns ? this.options.columns : Object.keys(this.data[0]);
        this.tableData = this.filterData(this.data, this.filters);
    };
    TableChart.prototype.ngOnInit = function () {
        var ref = this;
        if (ref.dataUrl) {
            ref.httpService.get(ref.dataUrl).subscribe(function (data) {
                ref.data = data;
                ref.render();
                ref.isLoadeded = true;
            });
        }
        else {
            ref.render();
            ref.isLoadeded = true;
        }
    };
    ;
    TableChart.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChartViewerPage');
    };
    TableChart.prototype.onRenderDone = function () {
        // this.renderDone.emit(this.chart);
    };
    TableChart.prototype.filterData = function (data, filters) {
        var ref = this;
        var filterKeys = [];
        if (filters) {
            filterKeys = Object.keys(filters);
        }
        data = data.filter(function (d) {
            var i = 0;
            var status = true;
            filterKeys.forEach(function (k) {
                var a = filters[k];
                if (a.length > 0 && a.indexOf(d[k]) == -1) {
                    status = false;
                }
            });
            if (status) {
                return d;
            }
        });
        return data;
    };
    return TableChart;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TableChart.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TableChart.prototype, "filters", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TableChart.prototype, "dataUrl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TableChart.prototype, "options", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TableChart.prototype, "renderDone", void 0);
TableChart = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'table-chart',template:/*ion-inline-start:"D:\work\angular4\src\pages\charts\table\table.html"*/'  \n<div *ngIf="isLoadeded"  id="chart{{options.id}}">\n<div class="wrapper" >\n<ion-list class="tb-header"  >\n\n	\n<div class="count">{{tableData.length}} records.</div>\n	<ion-item color="fground">\n		<ion-row >\n		<ion-col> </ion-col>\n			<ion-col *ngFor="let column of columns"> {{column}}</ion-col>\n		</ion-row>\n	</ion-item >\n	</ion-list>\n	<ion-list  >\n\n<div class="tb-content " >\n		<ion-item  *ngFor="let d of tableData;let i = index;" color="grid">\n			<ion-row>\n				<ion-col>{{i+1}} </ion-col>\n				<ion-col *ngFor="let c of columns"> {{d[c]}} </ion-col>\n			</ion-row>\n		</ion-item >\n	</div>\n	</ion-list>\n	</div>\n</div>\n  '/*ion-inline-end:"D:\work\angular4\src\pages\charts\table\table.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_event_service__["a" /* EventService */]])
], TableChart);

//# sourceMappingURL=table.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChartObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ChartOptions; });
var ChartObject = (function () {
    function ChartObject() {
        this.id = "1";
        this.title = "Title";
        this.chartType = "PieChart";
        this.dataTable = [];
        this.dataTable.push(["X Axis", "Y Axis"]);
    }
    return ChartObject;
}());

var ChartItem = (function () {
    function ChartItem() {
        this.key = "";
        this.value = "";
    }
    return ChartItem;
}());

var ChartOptions = (function () {
    function ChartOptions() {
    }
    ChartOptions.get = function () {
        return {
            "chart": {
                "type": "pie",
                "backgroundColor": "none",
                "options3d": {
                    "enabled": true,
                    "alpha": 15,
                    "beta": 15,
                    "depth": 110,
                    "frame": {
                        "bottom": {
                            "size": 5
                        },
                        "side": {
                            "size": 5
                        },
                        "back": {
                            "size": 5
                        }
                    }
                }
            },
            "xAxis": {
                "type": "category"
            },
            "legend": {
                "enabled": false
            },
            "plotOptions": {
                "pie": {
                    "depth": 50,
                    "alpha": 15,
                    "beta": 0,
                    "innerSize": "50%"
                },
                "column": {
                    "depth": 40,
                    "stacking": true,
                    "grouping": false,
                    "groupZPadding": 10
                },
                "series": {
                    "events": {}
                }
            },
            "series": [],
            "drilldown": {
                "series": []
            },
            "title": { "text": null },
            "exporting": {
                "buttons": {
                    "contextButton": {
                        "enabled": false
                    }
                }
            }
        };
    };
    return ChartOptions;
}());

//# sourceMappingURL=chart.schema.js.map

/***/ })

},[285]);
//# sourceMappingURL=main.js.map