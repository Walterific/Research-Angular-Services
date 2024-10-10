import { Injectable } from '@angular/core';

export interface CourseList {
  id: string;
  courseName: string;
}

@Injectable({
  providedIn: 'root',
})

export class CourseListService {
  private courses: CourseList[] = [];

  addCourse(id: string, courseName: string): void {
    this.courses.push({ 
      id, 
      courseName
    });
  }

  getCourses(): CourseList[] {
    return this.courses;
  }
}
