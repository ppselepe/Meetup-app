var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { NgxSpinnerService } from 'ngx-spinner';
import { GroupService } from '../../services/group.service';
/**
 * .
 * @module: SettingsComponent
 * Author Phuti Selepe
 */
var GroupsComponent = /** @class */ (function () {
    /**
     * Creating an instance of group component
     * @param {LocalStorage} localStorage the instance being injected
     * @param {GroupService} groupService the instance being injected
     * @param {NgxSpinnerService} spinner the instance being injected
     */
    function GroupsComponent(localStorage, groupService, spinner) {
        this.localStorage = localStorage;
        this.groupService = groupService;
        this.spinner = spinner;
        console.log(window.location.pathname);
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.localStorage.getItem('category')
            .subscribe(function (localCategory) {
            _this.preferedCategory = localCategory;
        }, function (error) {
            // this.errorMessage = error;
        }, function () {
            _this.findGroups();
        });
    };
    GroupsComponent.prototype.findGroups = function () {
        var _this = this;
        //TODO: MAKE A CALL TO THE API AND GET GROUPS
        this.groupService.getGroups(this.preferedCategory).subscribe(function (data) {
            _this.groups = data;
            console.log(data);
        }, function (error) {
            // this.errorMessage = error;
        }, function () {
            _this.spinner.hide();
        });
    };
    GroupsComponent = __decorate([
        Component({
            selector: 'app-groups',
            templateUrl: './groups.component.html',
            styleUrls: ['./groups.component.css']
        }),
        __metadata("design:paramtypes", [LocalStorage,
            GroupService,
            NgxSpinnerService])
    ], GroupsComponent);
    return GroupsComponent;
}());
export { GroupsComponent };
//# sourceMappingURL=groups.component.js.map