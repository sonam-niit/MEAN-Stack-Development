var GenericMap = /** @class */ (function () {
    function GenericMap() {
        this.item = {};
    }
    GenericMap.prototype.setItem = function (key, item) {
        this.item[key] = item;
    };
    GenericMap.prototype.getItem = function (key) {
        return this.item[key];
    };
    GenericMap.prototype.clear = function () {
        this.item = {};
    };
    GenericMap.prototype.printMap = function () {
        var _this = this;
        var itemAsString = Object.getOwnPropertyNames(this.item)
            .map(function (key) { return "".concat(key, ": ").concat(_this.getItem(key)); })
            .join(",");
        return "{".concat(itemAsString, "}");
    };
    return GenericMap;
}());
var numb = new GenericMap();
numb.setItem('one', 1);
numb.setItem('two', 2);
console.log(numb.printMap());
var string1 = new GenericMap();
string1.setItem('test1', 'one');
string1.setItem('test2', 'two');
console.log(string1.printMap());
