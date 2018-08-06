var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category } from '../models/category';
import { LocalStorage } from '@ngx-pwa/local-storage';
var SettingsService = /** @class */ (function () {
    /**
     * Injecting instance of HttpClient
     * @param {HttpClient} httpClient being injected
     * @param {LocalStorage} localStorage being injected
     */
    function SettingsService(httpClient, localStorage) {
        this.httpClient = httpClient;
        this.localStorage = localStorage;
        this.apiKey = "62717249b45f1a73551d332646d39";
        this.host = "https://api.meetup.com/2/";
    }
    /**
     * Get all categories
     * @return {bservable<Array<Category>>}
     */
    SettingsService.prototype.getCategories = function () {
        var method = "categories?";
        return this.httpClient.get('https://cors-anywhere.herokuapp.com/' + this.host + method + "key=62717249b45f1a73551d332646d39")
            .pipe(map(function (v) {
            var categories = [];
            var categoryJson = v['results'];
            categoryJson.forEach(function (category) {
                var categoryObject = new Category(category);
                categories.push(categoryObject);
            });
            return categories;
        }));
    };
    /**
     * Save selected category into a local storage
     * @param {Category} category being saved into local storage
     */
    SettingsService.prototype.savePreference = function (category) {
        this.localStorage.setItem('category', category)
            .subscribe(function () { });
    };
    SettingsService = __decorate([
        Injectable({
            providedIn: 'root'
        })
        /**
         *
         *
         */
        ,
        __metadata("design:paramtypes", [HttpClient,
            LocalStorage])
    ], SettingsService);
    return SettingsService;
}());
export { SettingsService };
//# sourceMappingURL=settings.service.js.map