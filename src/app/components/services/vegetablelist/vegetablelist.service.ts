import { Injectable } from '@angular/core';

export interface VegetableList {
  id: string;
  vegetable: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class VegetableListService {
  private vegetables: VegetableList[] = [];

  addVegetable(id: string, vegetable: string, quantity: number): void {
    this.vegetables.push({ id, vegetable, quantity });
  }

  getVegetables(): VegetableList[] {
    return this.vegetables;
  }
}
