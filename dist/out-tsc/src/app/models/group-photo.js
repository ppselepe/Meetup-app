var GroupPhoto = /** @class */ (function () {
    function GroupPhoto(json) {
        if (json) {
            this.baseUrl = json.base_url;
            this.highresLink = json.highres_link;
            this.photoId = json.photo_id;
        }
        else {
            this.baseUrl = "";
            this.highresLink = "https://placehold.it/150x80?text=IMAGE";
            this.photoId = "";
        }
    }
    return GroupPhoto;
}());
export { GroupPhoto };
//# sourceMappingURL=group-photo.js.map