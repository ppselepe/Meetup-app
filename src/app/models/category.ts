
export class Category {
  public id: string;
  public name: string;
  public shortName: string;
  public sortName: string;

  constructor(json?: any) {
      if (json) {
         this.id = json.id;
         this.name = json.name;
         this.shortName = json.shortname;
         this.sortName = json.sort_name;
      } else {
        this.id = '';
        this.name = '';
        this.shortName = '';
        this.sortName = '';
      }
  }
}