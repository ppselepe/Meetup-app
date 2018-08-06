import { GroupPhoto } from './group-photo';
var Group = /** @class */ (function () {
    function Group(json) {
        if (json) {
            this.id = json.id;
            this.name = json.name;
            this.groupPhoto = new GroupPhoto(json.group_photo);
        }
        else {
            this.id = '';
            this.name = '';
            this.groupPhoto = new GroupPhoto();
        }
    }
    return Group;
}());
export { Group };
//# sourceMappingURL=group.js.map