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
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Group } from '../models/group';
var GroupService = /** @class */ (function () {
    /**
     * Injecting instance of HttpClient
     * @param {HttpClient} httpClient being injected
     * @param {LocalStorage} localStorage being injected
     */
    function GroupService(httpClient, localStorage) {
        this.httpClient = httpClient;
        this.localStorage = localStorage;
        this.apiKey = "62717249b45f1a73551d332646d39";
        this.host = "https://api.meetup.com/2/";
    }
    /**
     * Get all groups
     * @return {Observable<Array<Group>}
     */
    GroupService.prototype.getGroups = function (category) {
        var method = "groups?";
        return this.httpClient.get('https://cors-anywhere.herokuapp.com/' + this.host + method + "key=62717249b45f1a73551d332646d39&page=20&category_id=" + category.id)
            .pipe(map(function (v) {
            var groups = [];
            var groupsjson = v.results;
            groupsjson.forEach(function (group) {
                var groupObject = new Group(group);
                groups.push(groupObject);
            });
            return groups;
        }));
    };
    GroupService = __decorate([
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
    ], GroupService);
    return GroupService;
}());
export { GroupService };
//# sourceMappingURL=group.service.js.map