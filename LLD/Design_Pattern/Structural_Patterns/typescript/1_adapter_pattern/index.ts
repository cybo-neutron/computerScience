/*
Problem Statement: We need to store students in a list. The list consists of exceptional students that the university has produced.
The university started as a small school and as the time passed more classes were added and also college were added.
SchoolStudent class was implemented earlier and doesn't match the way College student class is implemented.

Here we can use a SchoolStudentAdapter to solve this issue.

ShoolStudentAdapter -----implements----> Student
SchoolStudentAdapter ------has---------> SchoolStudent


*/



interface Student{
    firstName: string,
    lastName: string,
    email: string,
    getFirstName: () => string,
    getLastName: () => string,
    getEmail:()=>string
}

class CollegeStudent implements Student {

    firstName: string;
    lastName: string;
    email: string;
    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getEmail() {
        return this.email;
    }
}


//Note : School student does not implement the Student interface
//You may assume this is a legacy code. Which was created when the school started and as time passed more classes were added to shool and a college was also started
class SchoolStudent{
    fname: string;
    lname: string;
    emailAdd: string;

    constructor(fname:string, lname:string, emailAdd:string) {
        this.fname = fname;
        this.lname = lname;
        this.emailAdd = emailAdd;
    }

    getFName() {
        return this.fname;
    }
    getLName() {
        return this.lname;
    }
    getEmailAdd() {
        return this.emailAdd;
    }
}


class SchoolStudentAdapter implements Student{
    firstName: string;
    lastName: string;
    email: string;
    // schoolStudent: SchoolStudent;
    constructor(schoolStudent: SchoolStudent)
    {
        // this.schoolStudent = schoolStudent;
        this.firstName = schoolStudent.fname;
        this.lastName = schoolStudent.lname;
        this.email = schoolStudent.emailAdd;
    }

    getFirstName(){
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getEmail() {
        return this.email;
    }

}



let studentList: Student[] = [];

studentList.push(new CollegeStudent("John", "Wick", "john@email.com"))
studentList.push(new CollegeStudent("James", "Bond", "james@email.com"))

// studentList.push(new SchoolStudent("Naruto","Uzumaki","naruto@email.com"))

studentList.push(new SchoolStudentAdapter(new SchoolStudent("Naruto","Uzumaki","naruto@email.com")))


console.log(studentList);
