import { Component } from '@angular/core';
import { CourseListService, CourseList } from '../services/courselist/courselist.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourseListComponent {
  courses: CourseList[] = [];
  id: string = '';
  courseName: string = '';

  constructor(private courseListService: CourseListService) {
    this.courses = this.courseListService.getCourses();
  }

  addCourse(): void {
    this.courseListService.addCourse(this.id, this.courseName);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.courseName = '';
  }
}