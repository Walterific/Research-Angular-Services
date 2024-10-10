import { Injectable } from '@angular/core';

export interface FruitList {
  id: string;
  name: string;
  number: number;
}

@Injectable({
  providedIn: 'root',
})

export class FruitListService {
  private fruits: FruitList[] = [];

  addFruit(id: string, name: string, number: number): void {
    this.fruits.push({ 
      id, 
      name,  
      number 
    });
  }

  getFruits(): FruitList[] {
    return this.fruits;
  }
}