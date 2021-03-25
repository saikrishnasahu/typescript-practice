"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var s1 = new classes_1.Student();
s1.studentName = "Steve";
s1.studentId = 10;
s1.marks = 60;
console.log(s1.studentId);
console.log(s1.getResult());
