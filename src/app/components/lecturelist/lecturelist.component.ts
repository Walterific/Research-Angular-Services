import { Component } from '@angular/core';
import { LectureListService, LectureItem } from '../services/lecturelist/lecturelist.service';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  lectureList: LectureItem[] = [];
  id: string = '';
  subject: string = '';
  lecture: string = '';

  constructor(private lectureListService: LectureListService) {
    this.lectureList = this.lectureListService.getLectureList();
  }

  addLectureItem(): void {
    this.lectureListService.addLectureItem(this.id, this.subject, this.lecture);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.subject = '';
    this.lecture = '';
  }
}
