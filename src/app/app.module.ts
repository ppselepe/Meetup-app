import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from  '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GroupsComponent } from './components/groups/groups.component';

import { SettingsService } from './services/settings.service';
import { GroupService} from "./services/group.service";
import { NgxSpinnerModule } from 'ngx-spinner';


const appRoutes: Routes  = [
  { path: '', redirectTo: '/settings', pathMatch:'full' },
  { path: 'settings', component: SettingsComponent },
  { path: 'groups', component: GroupsComponent }
];

@NgModule({
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
  providers: [SettingsService,GroupService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
