import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
     currentDateTime: string = '';

     ngOnInit(): void {
      const date = new Date();
      this.currentDateTime = date.toString();
    }

   }
