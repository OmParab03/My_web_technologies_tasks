import { Component } from '@angular/core';
import { StudentService } from '../../Services/student-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students : any[] = []; //we can store any type of data in this array
  // it will hold student data from services

  /**
   *
   */
  constructor(private studentService: StudentService) {
  }
  ngOninit(){
    this.students = this.studentService.getStudents();
    console.log(this.students);
  }
}
