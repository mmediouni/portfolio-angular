(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-view-module"],{

/***/ "B4v+":
/*!*************************************!*\
  !*** ./src/app/view/view.module.ts ***!
  \*************************************/
/*! exports provided: ViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModule", function() { return ViewModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-routing.module */ "ffxz");
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.component */ "FJD2");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/shared.module */ "hGdz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ViewModule {
}
ViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ViewModule });
ViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function ViewModule_Factory(t) { return new (t || ViewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _view_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewRoutingModule"],
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ViewModule, { declarations: [_view_component__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _view_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewRoutingModule"],
        _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


/***/ }),

/***/ "FJD2":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-config */ "K7hc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/scroll-spy/scroll-spy.service */ "QpnW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/scroll-spy/scroll-spy.directive */ "RX07");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_sections_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sections/home/home.component */ "sWZ+");
/* harmony import */ var _components_sections_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sections/about/about.component */ "RntK");
/* harmony import */ var _components_sections_services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sections/services/services.component */ "cpwU");
/* harmony import */ var _components_sections_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/sections/experience/experience.component */ "UYsO");
/* harmony import */ var _components_sections_works_works_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sections/works/works.component */ "dE+s");
/* harmony import */ var _components_sections_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/sections/pricing/pricing.component */ "Um2Q");
/* harmony import */ var _components_sections_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/sections/testimonials/testimonials.component */ "B/bl");
/* harmony import */ var _components_sections_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/sections/blog/blog.component */ "Q9DS");
/* harmony import */ var _components_sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/sections/contact/contact.component */ "xp7a");















const _c0 = function () { return ["SECTION"]; };
const _c1 = function (a0) { return { "light": a0 }; };
class ViewComponent {
    constructor(scrollSpy, activatedRoute) {
        this.scrollSpy = scrollSpy;
        this.activatedRoute = activatedRoute;
        this.themeConfig = _app_config__WEBPACK_IMPORTED_MODULE_0__["Config"].config;
        console.log(this.themeConfig);
    }
    ngOnInit() { }
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
        this.scrollSpy.nextCount(sectionId);
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_2__["ScrollSpyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], decls: 20, vars: 7, consts: [["id", "parentDiv", "scrollSpy", "", 1, "main-content", 3, "spiedTags", "sectionChange"], ["id", "home", 1, "home", "d-flex", "align-items-center", 3, "ngClass"], [1, "w-100", 3, "themeType"], ["id", "about"], ["id", "services"], ["id", "experience"], ["id", "works"], ["id", "pricing"], ["id", "testimonials"], [3, "themeType"], ["id", "blog"], ["id", "contact"], [1, "spacer-96"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sectionChange", function ViewComponent_Template_div_sectionChange_0_listener($event) { return ctx.onSectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-home", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-works");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-testimonials", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx.themeConfig.themeType === "light"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("themeType", ctx.themeConfig.themeType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("themeType", ctx.themeConfig.themeType);
    } }, directives: [_components_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_4__["ScrollSpyDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _components_sections_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_sections_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _components_sections_services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"], _components_sections_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__["ExperienceComponent"], _components_sections_works_works_component__WEBPACK_IMPORTED_MODULE_10__["WorksComponent"], _components_sections_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__["PricingComponent"], _components_sections_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialsComponent"], _components_sections_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"], _components_sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ffxz":
/*!*********************************************!*\
  !*** ./src/app/view/view-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRoutingModule", function() { return ViewRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.component */ "FJD2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _view_component__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"]
    }
];
class ViewRoutingModule {
}
ViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ViewRoutingModule });
ViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ViewRoutingModule_Factory(t) { return new (t || ViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=view-view-module.js.map