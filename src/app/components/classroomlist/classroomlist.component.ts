import { Component } from '@angular/core';
import { ClassroomListService, Classroom } from '../services/classroomlist/classroomlist.service';

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent {
  classroomList: Classroom[] = [];
  id: string = '';
  room: string = '';
  floor: number = 0;

  constructor(private classroomListService: ClassroomListService) {
    this.classroomList = this.classroomListService.getClassroomList();
  }

  addClassroom(): void {
    this.classroomListService.addClassroom(this.id, this.room, this.floor);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.room = '';
    this.floor = 0;
  }
}
