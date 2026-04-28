import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsData {
 
  students=[
    { name : 'omkar' ,age:20 ,course:'AIML'},
    { name : 'Manthan' ,age:21 ,course:'AIML'},
    { name : 'Aditya' ,age:22 ,course:'AIML'},
  ];

  getStudents(){
    return this.students;
  }
}
