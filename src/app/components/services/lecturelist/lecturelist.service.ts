import { Injectable } from '@angular/core';

export interface LectureItem {
  id: string;
  subject: string;
  lecture: string;
}

@Injectable({
  providedIn: 'root',
})
export class LectureListService {
  private lectureList: LectureItem[] = [];

  addLectureItem(id: string, subject: string, lecture: string): void {
    this.lectureList.push({ id, subject, lecture });
  }

  getLectureList(): LectureItem[] {
    return this.lectureList;
  }
}
