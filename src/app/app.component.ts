import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'dvt-meetup';
  isSettings: boolean;

  constructor(private router: Router) {
    this.isSettings = true;
  }

  private nextPage(routePath) {
    if(this.isSettings){
      // navigate to groups
      this.isSettings = false;
      this.router.navigate(['/groups']);
    } else {
      // go back
      this.isSettings = true;
      this.router.navigate(['/settings']);
    }
  }
}
