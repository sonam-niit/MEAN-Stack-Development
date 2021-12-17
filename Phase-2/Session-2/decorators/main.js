var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ValidationType;
(function (ValidationType) {
    ValidationType[ValidationType["NotNull"] = 0] = "NotNull";
})(ValidationType || (ValidationType = {}));
function validate() {
    var types = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        types[_i] = arguments[_i];
    }
    return function (target, propertyKey) {
        Validator2.registerValidators(target, propertyKey, types);
    };
}
var Validator2 = /** @class */ (function () {
    function Validator2() {
    }
    //todo add more validator maps
    Validator2.registerValidators = function (target, property, types) {
        for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
            var type = types_1[_i];
            if (type == ValidationType.NotNull) {
                var keys = this.notNullValidatorMap.get(target);
                if (!keys) {
                    keys = [];
                    this.notNullValidatorMap.set(target, keys);
                }
                keys.push(property);
            }
        } //todo add more validators if else
    };
    Validator2.validate = function (target) {
        var notNullProps = this.notNullValidatorMap.get(Object.getPrototypeOf(target));
        if (!notNullProps) {
            return true;
        }
        var hasErrors = false;
        for (var _i = 0, notNullProps_1 = notNullProps; _i < notNullProps_1.length; _i++) {
            var property = notNullProps_1[_i];
            var value = target[property];
            if (!value) {
                console.error(property + " value cannot be null");
                hasErrors = true;
            }
        }
        return hasErrors;
    };
    Validator2.notNullValidatorMap = new Map();
    return Validator2;
}());
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    __decorate([
        validate(ValidationType.NotNull)
    ], Person2.prototype, "name");
    return Person2;
}());
console.log("-- creating instance --");
var person3 = new Person2(null);
console.log(person3);
var b2 = Validator2.validate(person3);
console.log("validation passed: " + !b2);
console.log("-- creating another instance --");
var person4 = new Person2("Tina");
console.log(person4);
b2 = Validator2.validate(person4);
console.log("validation passed: " + !b2);
