"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by irfan.maulana on 1/8/2017.
 */
var core_1 = require('@angular/core');
var NavigationComponent = (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.switchTab = function (tabName) {
        this.tabActive = tabName;
        this.router.navigate(['/' + tabName]);
    };
    NavigationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'NavigationListBlock',
            template: "\n      <ul class=\"nav__wrapper\">\n      \n        <li class=\"nav__item\" routerLink=\"/film\" routerLinkActive=\"nav__item--active\">\n          <a href=\"/film\">\n            <i class=\"nav__icon fa fa-film\"></i> Film\n          </a>\n        </li>\n        <li class=\"nav__item\" routerLink=\"/planet\" routerLinkActive=\"nav__item--active\">\n          <a routerLink=\"/planet\" routerLinkActive=\"active\">\n            <i class=\"nav__icon fa fa-globe\"></i> Planet\n          </a>\n        </li>\n        <li class=\"nav__item\" routerLink=\"/vehicle\" routerLinkActive=\"nav__item--active\">\n          <a routerLink=\"/vehicle\" routerLinkActive=\"active\">\n            <i class=\"nav__icon fa fa-car\"></i> Vehicle\n          </a>\n        </li>\n        <li class=\"nav__item\" routerLink=\"/starship\" routerLinkActive=\"nav__item--active\">\n          <a routerLink=\"/starship\" routerLinkActive=\"active\">\n            <i class=\"nav__icon fa fa-space-shuttle\"></i> Starship\n          </a>\n        </li>\n        <li class=\"nav__item\" routerLink=\"/species\" routerLinkActive=\"nav__item--active\">\n          <a routerLink=\"/species\" routerLinkActive=\"active\">\n            <i class=\"nav__icon fa fa-paw\"></i> Species\n          </a>\n        </li>\n        <li class=\"nav__item\" routerLink=\"/people\" routerLinkActive=\"nav__item--active\">\n          <a routerLink=\"/people\" routerLinkActive=\"active\">\n            <i class=\"nav__icon fa fa-users\"></i> People\n          </a>\n        </li>\n      \n      </ul>\n  "
        })
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
