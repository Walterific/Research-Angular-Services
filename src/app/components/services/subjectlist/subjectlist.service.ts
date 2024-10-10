import { Injectable } from '@angular/core';

export interface SubjectList {
  id: string;
  subject: string;
  schedule: string;
}

@Injectable({
  providedIn: 'root',
})

export class SubjectListService {
  private subjects: SubjectList[] = [];

  addSubject(id: string, subject: string, schedule: string): void {
    this.subjects.push({ 
      id, 
      subject,  
      schedule
    });
  }

  getSubjects(): SubjectList[] {
    return this.subjects;
  }
}