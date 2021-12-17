"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Employee Code: " + this.empCode
            + " " + "Employee Name: " + this.empName);
    };
    return Employee;
}());
exports.Employee = Employee;
