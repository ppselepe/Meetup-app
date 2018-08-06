var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GroupsComponent } from './components/groups/groups.component';
import { SettingsService } from './services/settings.service';
import { GroupService } from "./services/group.service";
import { NgxSpinnerModule } from 'ngx-spinner';
var appRoutes = [
    { path: '', redirectTo: '/settings', pathMatch: 'full' },
    { path: 'settings', component: SettingsComponent },
    { path: 'groups', component: GroupsComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                SettingsComponent,
                GroupsComponent
            ],
            imports: [
                RouterModule.forRoot(appRoutes),
                BrowserModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
                NgxSpinnerModule
            ],
            providers: [SettingsService, GroupService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map