import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { StudentsComponent } from './students/students.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentsComponent, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Students';
}
