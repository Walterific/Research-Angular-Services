import { Injectable } from '@angular/core';

export interface StudentList {
  id: string;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})

export class StudentListService {
  private students: StudentList[] = [];

  addStudent(id: string, name: string, age: number): void {
    this.students.push({ 
      id, 
      name,  
      age 
    });
  }

  getStudents(): StudentList[] {
    return this.students;
  }
}
