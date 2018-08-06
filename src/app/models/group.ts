
import { GroupPhoto } from './group-photo';

export class Group {
    public id: string;
    public name: string;
    public groupPhoto: GroupPhoto;

    constructor(json?: any) {
      // console.log(json);
      if (json) {
         this.id = json.id;
         this.name = json.name;
         this.groupPhoto = new GroupPhoto(json.group_photo);
      } else {
        this.id = '';
        this.name = '';
        this.groupPhoto = {};
      }
    }
}

