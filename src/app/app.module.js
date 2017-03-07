"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
/*
Component partial
*/
var app_component_1 = require('./app.component');
var header_component_1 = require('./Header/header.component');
var navigation_component_1 = require('./Navigation/navigation.component');
var footer_component_1 = require('./Footer/footer.component');
var film_list_component_1 = require('./Film/film-list.component');
var people_list_component_1 = require('./People/people-list.component');
var planet_list_component_1 = require('./Planet/planet-list.component');
var species_list_component_1 = require('./Species/species-list.component');
var starship_list_component_1 = require('./Starship/starship-list.component');
var vehicle_list_component_1 = require('./Vehicle/vehicle-list.component');
/*
 Service to get data
 */
var film_list_service_1 = require('./Film/film-list.service');
var planet_list_service_1 = require('./Planet/planet-list.service');
var people_list_service_1 = require("./People/people-list.service");
var species_list_service_1 = require("./Species/species-list.service");
var starship_list_service_1 = require("./Starship/starship-list.service");
var vehicle_list_service_1 = require("./Vehicle/vehicle-list.service");
var appRoutes = [
    { path: '', redirectTo: 'film', pathMatch: 'full' },
    { path: 'film', component: film_list_component_1.FilmListComponent },
    { path: 'planet', component: planet_list_component_1.PlanetListComponent },
    { path: 'people', component: people_list_component_1.PeopleListComponent },
    { path: 'species', component: species_list_component_1.SpeciesListComponent },
    { path: 'starship', component: starship_list_component_1.StarshipListComponent },
    { path: 'vehicle', component: vehicle_list_component_1.VehicleListComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                router_1.RouterModule.forRoot(appRoutes, { useHash: true })
            ],
            /*
             AppRoutingModule
             RouterModule.forRoot(appRoutes)
            */
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                navigation_component_1.NavigationComponent,
                footer_component_1.FoooterComponent,
                film_list_component_1.FilmListComponent,
                people_list_component_1.PeopleListComponent,
                planet_list_component_1.PlanetListComponent,
                species_list_component_1.SpeciesListComponent,
                starship_list_component_1.StarshipListComponent,
                vehicle_list_component_1.VehicleListComponent
            ],
            providers: [
                film_list_service_1.FilmService,
                people_list_service_1.PeopleService,
                planet_list_service_1.PlanetService,
                species_list_service_1.SpeciesService,
                starship_list_service_1.StarshipService,
                vehicle_list_service_1.VehicleService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
