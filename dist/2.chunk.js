webpackJsonp([2,7],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_AnalysisResource__ = __webpack_require__(420);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyseComponent = (function () {
    function AnalyseComponent(analysisResource) {
        this.analysisResource = analysisResource;
    }
    AnalyseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.analysisResource.get({}, function (analysis) {
            _this.analysis = analysis;
        });
    };
    return AnalyseComponent;
}());
AnalyseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1029),
        styles: [__webpack_require__(1026)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resources_AnalysisResource__["a" /* AnalysisResource */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resources_AnalysisResource__["a" /* AnalysisResource */]) === "function" && _a || Object])
], AnalyseComponent);

var _a;
//# sourceMappingURL=/home/florian/PhpstormProjects/drvt-frontend/src/analyse.component.js.map

/***/ }),

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analyse_component__ = __webpack_require__(1019);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyseRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__analyse_component__["a" /* AnalyseComponent */],
        data: {
            title: 'Analyse'
        }
    }
];
var AnalyseRoutingModule = (function () {
    function AnalyseRoutingModule() {
    }
    return AnalyseRoutingModule;
}());
AnalyseRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AnalyseRoutingModule);

//# sourceMappingURL=/home/florian/PhpstormProjects/drvt-frontend/src/anaylse-routing.module.js.map

/***/ }),

/***/ 1026:
/***/ (function(module, exports) {

module.exports = "#graph_container {\n  height: 600px; }\n"

/***/ }),

/***/ 1029:
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <h4>Analyse</h4>\n    <div id=\"noanalysis\" class=\"col-lg-12 text-center\" *ngIf=\"!analysis\">\n        <i class=\"fa fa-refresh fa-spin fa-5x\"></i>\n        <div style=\"margin-top: 20px\">\n            Die Analyse wird ausgeführt\n        </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"analysis\">\n\n        <div class=\"col-lg-3\">\n            <div class=\"card\">\n                <div class=\"card-block p-0 clearfix\">\n                    <i class=\"fa fa-building-o bg-warning p-2 font-2xl mr-1 float-left\"></i>\n                    <div class=\"h5 text-warning mb-0 pt-1\">{{ analysis.totalHostCount }}</div>\n                    <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Hosts insgesamt</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-3\">\n            <div class=\"card\">\n                <div class=\"card-block p-0 clearfix\">\n                    <i class=\"fa fa-cubes bg-primary p-2 font-2xl mr-1 float-left\"></i>\n                    <div class=\"h5 text-primary mb-0 pt-1\">{{ analysis.totalContainerCount }}</div>\n                    <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Container insgesamt</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-3\">\n            <div class=\"card\">\n                <div class=\"card-block p-0 clearfix\">\n                    <i class=\"icon-link bg-success p-2 font-2xl mr-1 float-left\"></i>\n                    <div class=\"h5 text-success mb-0 pt-1\">{{ analysis.totalRedundancies }}</div>\n                    <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Redundanzen insgesamt</div>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"col-lg-3\">\n            <div class=\"card\">\n                <div class=\"card-block p-0 clearfix\">\n                    <i class=\"icon-share bg-danger p-2 font-2xl mr-1 float-left\"></i>\n                    <div class=\"h5 text-danger mb-0 pt-1\">{{ analysis.totalDependencies }}</div>\n                    <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Abhängigkeiten insgesamt</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"analysis\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">Redundanzfehler <span class=\"badge badge-warning\">{{ analysis.redundancyIssues.length }}</span> </div>\n                <div class=\"card-block\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-sm table-striped\">\n                            <thead>\n                            <tr>\n                                <th>Art</th>\n                                <th>Verbindung</th>\n                                <th>Von <i class=\"fa fa-long-arrow-right\"></i> Zu</th>\n                                <th>Mitteilung</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let issue of analysis.redundancyIssues\">\n                                <td>{{ issue.type }}</td>\n                                <td>{{ issue.connection }}</td>\n                                <td><samp>{{ issue.from.host.name }}/{{ issue.from.name }}</samp> <i class=\"fa fa-long-arrow-right\"></i> <samp>{{ issue.to.host.name }}/{{ issue.to.name }}</samp></td>\n                                <td>{{ issue.message }}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"analysis\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">Auswirkungen eines Container-Ausfalls</div>\n                <div class=\"card-block\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-sm table-bordered\">\n                            <thead>\n                                <tr>\n                                    <th>Ausgefallener Container</th>\n                                    <th>Betroffene Container</th>\n                                    <th>%</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let impact of analysis.containerFailImpacts\">\n                                    <td><samp>{{ impact.container.host.name }}/{{ impact.container.name }}</samp></td>\n                                    <td>\n                                        <ul>\n                                            <li *ngFor=\"let container of impact.impactedContainers\">\n                                                <samp>{{ container.host.name }}/{{ container.name }}</samp>\n                                            </li>\n                                        </ul>\n                                    </td>\n                                    <td>\n                                        {{ impact.impactedContainerCount }}/{{ analysis.totalContainerCount}} <span class=\"text-muted\">({{impact.impactedContainerCount / analysis.totalContainerCount * 100 | number }}%)</span>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analyse_component__ = __webpack_require__(1019);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__anaylse_routing_module__ = __webpack_require__(1022);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyseModule", function() { return AnalyseModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AnalyseModule = (function () {
    function AnalyseModule() {
    }
    return AnalyseModule;
}());
AnalyseModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__anaylse_routing_module__["a" /* AnalyseRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__analyse_component__["a" /* AnalyseComponent */]]
    })
], AnalyseModule);

//# sourceMappingURL=/home/florian/PhpstormProjects/drvt-frontend/src/analyse.module.js.map

/***/ })

});
//# sourceMappingURL=2.bundle.map