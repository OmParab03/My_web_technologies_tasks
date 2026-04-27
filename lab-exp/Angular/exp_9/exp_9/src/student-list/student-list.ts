import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  student=[
    {id:1 ,name :'omkar' , age:20 , course:'AIML'},
    {id:2 ,name:'darshan' , age:20 ,course :'AIML'},
    {id:3 , name:'Tejas' , age : 22 , course:'CSE'}
  ]
}
