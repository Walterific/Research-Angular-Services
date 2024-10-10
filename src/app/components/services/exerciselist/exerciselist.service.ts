import { Injectable } from '@angular/core';

export interface ExerciseList {
  id: string;
  exerciseName: string;
  description: string;
  targetMuscle: string;
}

@Injectable({
  providedIn: 'root',
})
export class ExerciseListService {
  private exercises: ExerciseList[] = [];

  addExercise(id: string, exerciseName: string, description: string, targetMuscle: string): void {
    this.exercises.push({ 
      id, 
      exerciseName,  
      description,
      targetMuscle 
    });
  }

  getExercises(): ExerciseList[] {
    return this.exercises;
  }
}
