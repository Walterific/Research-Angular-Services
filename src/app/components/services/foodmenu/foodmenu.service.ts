import { Injectable } from '@angular/core';

export interface FoodItem {
  id: string;
  food: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class FoodMenuService {
  private menu: FoodItem[] = [];

  addFood(id: string, food: string, price: number): void {
    this.menu.push({ id, food, price });
  }

  getMenu(): FoodItem[] {
    return this.menu;
  }
}
