import { Component } from '@angular/core';
import { ExerciseListService, ExerciseList } from '../services/exerciselist/exerciselist.service';

@Component({
  selector: 'app-exerciselist',
  templateUrl: './exerciselist.component.html',
  styleUrl: './exerciselist.component.css'
})
export class ExerciselistComponent {
  exercises: ExerciseList[] = [];
  id: string = '';
  exerciseName: string = '';
  description: string = '';
  targetMuscle: string = '';

  constructor(private exerciseListService: ExerciseListService) {
    this.exercises = this.exerciseListService.getExercises();
  }

  addExercise(): void {
    this.exerciseListService.addExercise(this.id, this.exerciseName, this.description, this.targetMuscle);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.exerciseName = '';
    this.description = '';
    this.targetMuscle = '';
  }
}
