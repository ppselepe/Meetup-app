import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, scan } from 'rxjs/operators';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs/Observable';

import { Category } from '../models/category';
import { Group } from '../models/group';

@Injectable({
  providedIn: 'root'
})
/**
 *
 *
 */
export class GroupService {

  private apiKey: string = "62717249b45f1a73551d332646d39";
  private host: string = "https://api.meetup.com/2/";

  /**
   * Injecting instance of HttpClient
   * @param {HttpClient} httpClient being injected
   * @param {LocalStorage} localStorage being injected
   */
  constructor( private httpClient: HttpClient,
               protected localStorage: LocalStorage) {

  }

  /**
   * Get all groups
   * @return {Observable<Array<Group>}
   */
  public getGroups(category?: any ): Observable<Array<Group>> {
      let method: string = "groups?";
      return this.httpClient.get('https://cors-anywhere.herokuapp.com/' + this.host+method + "key=62717249b45f1a73551d332646d39&page=20&category_id="+category.id)
              .pipe(map(v => {
                  let groups: Array<Group> = [];
                  let groupsjson = v.results;
                   groupsjson.forEach((group: Array<Group>) => {
                       let groupObject: Group = new Group(group);
                       groups.push(groupObject);
                   });
                  return groups;
              }));
  }
}
