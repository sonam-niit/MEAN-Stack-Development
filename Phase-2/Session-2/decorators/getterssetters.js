var Example = /** @class */ (function () {
    function Example() {
    }
    Object.defineProperty(Example.prototype, "fname", {
        //getters
        get: function () {
            return this._fname;
        },
        //setters
        set: function (firstName) {
            this._fname = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Example.prototype, "lname", {
        get: function () {
            return this._lname;
        },
        set: function (lastName) {
            this._lname = lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Example;
}());
var e1 = new Example();
e1.fname = "Pooja"; //calling of set method
e1.lname = "Jain";
console.log(e1.fname + " " + e1.lname); // calling get method
