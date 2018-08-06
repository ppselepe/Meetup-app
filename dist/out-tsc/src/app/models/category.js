var Category = /** @class */ (function () {
    function Category(json) {
        if (json) {
            this.id = json.id;
            this.name = json.name;
            this.shortName = json.shortname;
            this.sortName = json.sort_name;
        }
        else {
            this.id = '';
            this.name = '';
            this.shortName = '';
            this.sortName = '';
        }
    }
    return Category;
}());
export { Category };
//# sourceMappingURL=category.js.map