import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showText = true;
  colors = ['Red', 'Green', 'Blue', 'Yellow'];
  isActive = true;
}