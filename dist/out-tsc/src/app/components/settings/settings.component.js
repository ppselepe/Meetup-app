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
import { SettingsService } from "../../services/settings.service";
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
/**
 * Lists meetUp groups by category and allows for selection of a prefered category.
 * @module: SettingsComponent
 * Author Phuti Selepe
 */
var SettingsComponent = /** @class */ (function () {
    /**
     * Creating an instance of SettingsComponent
     * @param {SettingsService} settingsService The SettingsService being injected
     * @param {NgxSpinnerService} spinner The NgxSpinnerService being injected
     * @param {FormBuilder} fb The Form FormBuilder being injected
     */
    function SettingsComponent(settingsService, spinner, fb) {
        this.settingsService = settingsService;
        this.spinner = spinner;
        this.fb = fb;
        this.profileForm = new FormGroup({
            categoryItem: new FormControl('')
        });
        console.log(window.location.pathname);
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.settingsService.getCategories()
            .subscribe(function (data) {
            _this.categories = data;
        }, function (error) {
            // this.errorMessage = error;
        }, function () {
            _this.spinner.hide();
        });
    };
    SettingsComponent.prototype.onSubmit = function () {
        // TODO: Use EventEmitter with form value
        this.settingsService.savePreference(this.profileForm.value.categoryItem);
    };
    SettingsComponent = __decorate([
        Component({
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.css']
        }),
        __metadata("design:paramtypes", [SettingsService,
            NgxSpinnerService,
            FormBuilder])
    ], SettingsComponent);
    return SettingsComponent;
}());
export { SettingsComponent };
//# sourceMappingURL=settings.component.js.map