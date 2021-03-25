export class Student{
    studentId : number =0;
    studentName : string = '';
    marks : number = 0;

    getResult(){
        if(this.marks >= 35){
            return "Pass";
        }else{
            return "Fail";
        }
    }
}