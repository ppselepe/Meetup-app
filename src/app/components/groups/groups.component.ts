import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { NgxSpinnerService } from 'ngx-spinner';

import { GroupService } from '../../services/group.service';
import { Category } from '../../models/category';
import { Group } from '../../models/group';

/**
 * .
 * @module: SettingsComponent
 * Author Phuti Selepe
 */
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  private preferedCategory: Category;
  private groups: any;

  /**
   * Creating an instance of group component
   * @param {LocalStorage} localStorage the instance being injected
   * @param {GroupService} groupService the instance being injected
   * @param {NgxSpinnerService} spinner the instance being injected
   */
  constructor(private localStorage: LocalStorage,
              private groupService: GroupService,
              private spinner: NgxSpinnerService) {
      console.log(window.location.pathname);
  }

  ngOnInit() {
        this.spinner.show();
        this.localStorage.getItem<Category>('category')
            .subscribe((localCategory: Category) => {
                this.preferedCategory = localCategory;
              },
            error => {
                // this.errorMessage = error;
            },
            () => {
                this.findGroups();

          });
  }

  private findGroups(): void {
      //TODO: MAKE A CALL TO THE API AND GET GROUPS
      this.groupService.getGroups(this.preferedCategory).subscribe(data => {
          this.groups = data;
          console.log(data);
        },
      error => {
          // this.errorMessage = error;
      },
      () => {
          this.spinner.hide();
    });
  }

}
