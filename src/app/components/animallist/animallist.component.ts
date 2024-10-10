import { Component } from '@angular/core';
import { AnimalListService, AnimalList } from '../services/animallist/animallist.service';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrl: './animallist.component.css'
})
export class AnimallistComponent {
  animals: AnimalList[] = [];
  id: string = '';
  animal: string = '';
  breed: string = '';

  constructor(private animalListService: AnimalListService) {
    this.animals = this.animalListService.getAnimals();
  }

  addAnimal(): void {
    this.animalListService.addAnimal(this.id, this.animal, this.breed);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.animal = '';
    this.breed = '';
  }
}
