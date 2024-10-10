import { Injectable } from '@angular/core';

export interface AnimalList {
  id: string;
  animal: string;
  breed: string;
}

@Injectable({
  providedIn: 'root',
})
export class AnimalListService {
  private animals: AnimalList[] = [];

  addAnimal(id: string, animal: string, breed: string): void {
    this.animals.push({ id, animal, breed });
  }

  getAnimals(): AnimalList[] {
    return this.animals;
  }
}
