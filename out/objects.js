"use strict";
// declaring object
var student = {
    // declaring properties
    studentId: 1,
    studentName: "Scott",
    marks: 80,
    // declaring method
    getResult: function () {
        if (this.marks >= 35) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    }
};
// printing object
console.log(student);
// printing by executing function
console.log(student.getResult());
// printing function
console.log(student.getResult);
console.log(student.studentName);
//  practice
var person = {
    name: "Steve",
    age: 19,
    gender: "male",
    isQualified: function () {
        if (this.gender == "male") {
            return true;
        }
    }
};
console.log(person.isQualified());
