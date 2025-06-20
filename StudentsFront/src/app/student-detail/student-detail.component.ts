import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../student.service';
import { Student } from '../student'; 
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-student-detail',
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student?: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const pathId = this.route.snapshot.paramMap.get('id');
    if (pathId) {
      this.studentService.getStudent(+pathId)
        .subscribe(student => this.student = student);
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.studentService.updateStudent(this.student!)
      .subscribe(() => this.goBack());
  }
}