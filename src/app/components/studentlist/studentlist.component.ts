import { Component } from '@angular/core';
import { StudentListService, StudentList } from '../services/studentlist/studentlist.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
})
export class StudentListComponent {
  students: StudentList[] = [];
  id: string = '';
  name: string = '';
  age: number = 0;

  constructor(private studentListService: StudentListService) {
    this.students = this.studentListService.getStudents();
  }

  addStudent(): void {
    this.studentListService.addStudent(this.id, this.name, this.age);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.name = '';
    this.age = 0;
  }
}

