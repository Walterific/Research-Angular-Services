import { Component } from '@angular/core';
import { SubjectListService, SubjectList } from '../services/subjectlist/subjectlist.service';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrl: './subjectlist.component.css'
})
export class SubjectlistComponent {
  subjects: SubjectList[] = [];
  id: string = '';
  subject: string = '';
  schedule: string = '';

  constructor(private subjectListService: SubjectListService) {
    this.subjects = this.subjectListService.getSubjects();
  }

  addSubject(): void {
    this.subjectListService.addSubject(this.id, this.subject, this.schedule);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.subject = '';
    this.schedule = '';
  }
}
