import { Component, OnInit } from '@angular/core';

import { SettingsService} from "../../services/settings.service";
import { Category } from "../../models/category";

import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

/**
 * Lists meetUp groups by category and allows for selection of a prefered category.
 * @module: SettingsComponent
 * Author Phuti Selepe
 */

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})


export class SettingsComponent implements OnInit {

  private categories: Array<Category>;
  private profileForm = new FormGroup({
    categoryItem: new FormControl('')
  });

  /**
   * Creating an instance of SettingsComponent
   * @param {SettingsService} settingsService The SettingsService being injected
   * @param {NgxSpinnerService} spinner The NgxSpinnerService being injected
   * @param {FormBuilder} fb The Form FormBuilder being injected
   */
  constructor(private settingsService:SettingsService,
              private spinner: NgxSpinnerService,
              private fb: FormBuilder
              ) {
    console.log(window.location.pathname);
  }

  ngOnInit() {
    this.spinner.show();

    this.settingsService.getCategories()
    .subscribe(data =>{
      this.categories = data;
    },
      error => {
             // this.errorMessage = error;
            },
        () => {
          this.spinner.hide();
      });
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.settingsService.savePreference(this.profileForm.value.categoryItem);
  }

}

