import { Injectable } from '@angular/core';

export interface Classroom {
  id: string;
  room: string;
  floor: number;
}

@Injectable({
  providedIn: 'root',
})
export class ClassroomListService {
  private classroomList: Classroom[] = [];

  addClassroom(id: string, room: string, floor: number): void {
    this.classroomList.push({ id, room, floor });
  }

  getClassroomList(): Classroom[] {
    return this.classroomList;
  }
}
