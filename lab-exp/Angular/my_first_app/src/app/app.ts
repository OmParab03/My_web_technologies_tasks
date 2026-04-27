import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my_first_app');
  name :string="omkar"; // name : dt type = string
  booleanValue :boolean=true;
  num:number=2;
  un_def=undefined;
  data:any=null; 
}
