"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student() {
        this.studentId = 0;
        this.studentName = '';
        this.marks = 0;
    }
    Student.prototype.getResult = function () {
        if (this.marks >= 35) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    };
    return Student;
}());
exports.Student = Student;
