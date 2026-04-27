import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-component-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component-student.html',
  styleUrl: './component-student.css',
})
export class ComponentStudent {
  name: string | undefined;
  age: string | undefined;
  course: string | undefined;

  onSubmit() {
    console.log("Name: " + this.name);
    console.log("Age: " + this.age);
    console.log("Course: " + this.course);
  }

}
