import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  sname:string ="omkar ";
  sPRN:string = "23UAM087";
  sage:number = 20;
  sgender:string = "Male";
  sEmail:string ="omkar@example.com";
  scourse:string ="AIML";
  changename(){
    if(this.sname=="omkar"){
      this.sname = "omkar";
    }
    else{
      this.sname = document.getElementById("sname")?.textContent || "";
    }
  }
  
  
}
