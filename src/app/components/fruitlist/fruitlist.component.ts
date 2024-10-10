import { Component } from '@angular/core';
import { FruitListService, FruitList } from '../services/fruitlist/fruitlist.service';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {
  fruits: FruitList[] = [];
  id: string = '';
  name: string = '';
  number: number = 0;

  constructor(private fruitListService: FruitListService) {
    this.fruits = this.fruitListService.getFruits();
  }

  addFruit(): void {
    this.fruitListService.addFruit(this.id, this.name, this.number);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.name = '';
    this.number = 0;
  }
}
