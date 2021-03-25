import {Student}from './classes';

var s1 = new Student();
s1.studentName = "Steve";
s1.studentId = 10;
s1.marks = 60;

console.log(s1.studentId);
console.log(s1.getResult());