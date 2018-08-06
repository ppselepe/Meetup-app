import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, scan } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Category } from '../models/category';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
/**
 *
 *
 */
export class SettingsService {

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
   * Get all categories
   * @return {bservable<Array<Category>>}
   */
  public getCategories(): Observable<Array<Category>> {
      let method: string = "categories?";
      return this.httpClient.get<Array<Category>>('https://cors-anywhere.herokuapp.com/' + this.host+method + "key=62717249b45f1a73551d332646d39")
              .pipe(map(v => {
                  let categories: Array<Category> = [];
                  let categoryJson = v.results;
                   categoryJson.forEach((category: Array<Category>) => {
                       let categoryObject: Category = new Category(category);
                       categories.push(categoryObject);
                   });
                  return categories;
              }));
  }

  /**
   * Save selected category into a local storage
   * @param {Category} category being saved into local storage
   */
  public savePreference(category: Category): void {
    this.localStorage.setItem<Category>('category', category)
        .subscribe(() => {});
  }
}
