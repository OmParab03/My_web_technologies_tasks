import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,              // ✅ REQUIRED
  imports: [FormsModule],        // ✅ for ngModel
  templateUrl: './admin.html',
  styleUrls: ['./admin.css'],    // ✅ fixed
})
export class Admin {
  fname: string = "omkar Parab";

  name: string = '';
  age: number = 0;
  course: string = '';

  onSubmit() {
    console.log("Name: " + this.name);
    console.log("Age: " + this.age);
    console.log("Course: " + this.course);
  }
}